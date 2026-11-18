const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const ts = require('typescript');

// Execute the actual route with isolated environment and provider transports.
// No network, email, credentials or live data are used by this suite.
const source = fs.readFileSync('app/api/contact/route.ts', 'utf8');
const compiled = ts.transpileModule(source, {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
}).outputText;
const valid = { name: 'Test Visitor', email: 'visitor@example.test', message: 'A private request' };
const emailEnv = { RESEND_API_KEY: 'test-key', CONTACT_FROM_EMAIL: 'from@example.test', CONTACT_TO_EMAIL: 'team@example.test' };

function route(env = {}, transport = async () => { throw Error('unexpected transport'); }) {
  const calls = [], logs = [];
  const exports = {};
  vm.runInNewContext(compiled, {
    exports,
    require(name) {
      if (name === 'next/server') return require('next/server');
      if (name === '@/lib/siteConfig') return { siteConfig: { email: 'public@example.test', url: 'https://example.test' } };
      throw Error(`Unexpected import: ${name}`);
    },
    process: { env },
    AbortSignal,
    console: { error: (...args) => logs.push(args), info: (...args) => logs.push(args) },
    fetch: async (url, options) => {
      calls.push({ url, options });
      return transport(url, options, calls.length);
    },
  });
  return {
    calls, logs,
    submit: (body = valid) => exports.POST(new Request('https://example.test/api/contact', {
      method: 'POST', body: JSON.stringify(body), headers: { 'Content-Type': 'application/json' },
    })),
  };
}

test('no destination returns 503 and never logs the lead or sends a false confirmation', async () => {
  const r = route();
  const response = await r.submit();
  assert.equal(response.status, 503);
  assert.equal((await response.json()).ok, false);
  assert.equal(r.calls.length, 0);
  assert.ok(!JSON.stringify(r.logs).includes(valid.email));
  assert.ok(!JSON.stringify(r.logs).includes(valid.message));
});

test('auto-reply-only configuration cannot acknowledge intake', async () => {
  const r = route({ RESEND_API_KEY: 'test', CONTACT_FROM_EMAIL: 'from@example.test' }, async () => Response.json({ id: 'courtesy' }));
  assert.equal((await r.submit()).status, 503);
  assert.equal(r.calls.length, 0);
});

test('accepted team email permits acknowledgment, then a courtesy reply', async () => {
  const r = route(emailEnv, async () => Response.json({ id: 'accepted-message' }));
  assert.equal((await r.submit()).status, 200);
  assert.equal(r.calls.length, 2);
  assert.deepEqual(JSON.parse(r.calls[0].options.body).to, ['team@example.test']);
  assert.deepEqual(JSON.parse(r.calls[1].options.body).to, [valid.email]);
  assert.ok(r.calls.every(c => c.options.signal instanceof AbortSignal));
  assert.ok(r.calls.every(c => c.options.redirect === 'error'));
});

test('team email without a provider receipt is not acknowledged', async () => {
  const r = route(emailEnv, async () => Response.json({}));
  assert.equal((await r.submit()).status, 503);
  assert.equal(r.calls.length, 1);
});

test('provider failure cannot be rescued by an auto-reply or leak provider payloads', async () => {
  const r = route(emailEnv, async () => new Response(`secret-token ${valid.email}`, { status: 500 }));
  assert.equal((await r.submit()).status, 503);
  assert.equal(r.calls.length, 1);
  assert.ok(!JSON.stringify(r.logs).includes('secret-token'));
  assert.ok(!JSON.stringify(r.logs).includes(valid.email));
});

test('ambiguous transport failure is not retried and is not reported as accepted', async () => {
  let committed = 0;
  const r = route(emailEnv, async () => {
    committed++; // The provider may have stored it before the connection failed.
    throw new Error(`connection lost: ${valid.email}`);
  });
  const response = await r.submit();
  assert.equal(response.status, 503);
  assert.match((await response.json()).error, /before submitting again/);
  assert.equal(committed, 1);
  assert.ok(!JSON.stringify(r.logs).includes(valid.email));
});

test('CRM acceptance survives a failed team notification and courtesy reply', async () => {
  const r = route({ ...emailEnv, HUBSPOT_PORTAL_ID: 'test', HUBSPOT_FORM_GUID: 'form' }, async url => {
    if (url.includes('hsforms')) return Response.json({ inlineMessage: 'accepted' });
    throw Error('email unavailable');
  });
  assert.equal((await r.submit()).status, 200);
  assert.equal(r.calls.length, 3);
});

test('webhook requires a durable acceptance receipt, not just HTTP success', async () => {
  for (const body of [{}, { accepted: true }, { accepted: false, receiptId: 'a' }, { accepted: true, receiptId: ' ' }]) {
    const r = route({ CONTACT_WEBHOOK_URL: 'https://receiver.example.test' }, async () => Response.json(body));
    assert.equal((await r.submit()).status, 503);
  }
  const r = route({ CONTACT_WEBHOOK_URL: 'https://receiver.example.test' }, async () => Response.json({ accepted: true, receiptId: 'stored-123' }));
  assert.equal((await r.submit()).status, 200);
});

test('successful intake is preserved when only the courtesy reply fails', async () => {
  const r = route(emailEnv, async (_url, _options, attempt) => {
    if (attempt === 1) return Response.json({ id: 'stored' });
    throw Error('courtesy reply failed');
  });
  assert.equal((await r.submit()).status, 200);
  assert.equal(r.calls.length, 2);
});

test('invalid payloads fail without calling a provider', async () => {
  const r = route(emailEnv);
  for (const body of [null, [], 'text']) assert.equal((await r.submit(body)).status, 400);
  for (const body of [{ ...valid, name: 12 }, { ...valid, email: {} }, { ...valid, message: 'x'.repeat(5001) }, { ...valid, smsConsent: 'true' }]) {
    assert.equal((await r.submit(body)).status, 422);
  }
  assert.equal(r.calls.length, 0);
});

test('honeypot continues to return success without recording or sending', async () => {
  const r = route(emailEnv);
  assert.equal((await r.submit({ ...valid, company_website: 'bot' })).status, 200);
  assert.equal(r.calls.length, 0);
  assert.equal(r.logs.length, 0);
});

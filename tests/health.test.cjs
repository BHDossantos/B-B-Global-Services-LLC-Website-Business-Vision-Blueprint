const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const ts = require('typescript');

// Execute the real health route in isolation. The Resend call is stubbed, so
// this suite makes no network requests and uses no credentials or live data.
const source = fs.readFileSync('app/api/health/route.ts', 'utf8');
const compiled = ts.transpileModule(source, {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
}).outputText;

const configured = {
  RESEND_API_KEY: 'test-key',
  CONTACT_FROM_EMAIL: 'hello@example.test',
  CONTACT_TO_EMAIL: 'team@example.test',
};

/** Build the route with a given env and a stubbed Resend /domains response. */
function route(env = {}, domains = null, { fail = false } = {}) {
  const exports = {};
  const calls = [];
  vm.runInNewContext(compiled, {
    exports,
    require(name) {
      if (name === 'next/server') return require('next/server');
      throw Error(`Unexpected import: ${name}`);
    },
    process: { env },
    AbortSignal,
    fetch: async (url, options) => {
      calls.push({ url, options });
      if (fail) throw Error('network down');
      return { ok: true, json: async () => ({ data: domains ?? [] }) };
    },
  });
  return { GET: exports.GET, calls };
}

async function read(res) {
  return { status: res.status, body: await res.json() };
}

test('reports ok when the sending domain is verified', async () => {
  const { GET } = route(configured, [{ name: 'example.test', status: 'verified' }]);
  const { status, body } = await read(await GET());
  assert.equal(status, 200);
  assert.equal(body.status, 'ok');
  assert.equal(body.checks.senderDomainStatus, 'verified');
  assert.equal(body.checks.usingFallbackSender, false);
});

test('degrades when the sending domain is not verified', async () => {
  // This is the exact incident the route exists to catch.
  const { GET } = route(configured, [{ name: 'example.test', status: 'pending' }]);
  const { status, body } = await read(await GET());
  assert.equal(status, 503);
  assert.equal(body.status, 'degraded');
  assert.equal(body.checks.senderDomainStatus, 'unverified');
  assert.ok(body.notes.some((n) => n.includes('not verified')));
});

test('degrades when the sending domain is absent from the account', async () => {
  const { GET } = route(configured, [{ name: 'other.test', status: 'verified' }]);
  const { status, body } = await read(await GET());
  assert.equal(status, 503);
  assert.equal(body.checks.senderDomainStatus, 'not_found');
});

test('degrades when email delivery is unconfigured', async () => {
  const { GET, calls } = route({});
  const { status, body } = await read(await GET());
  assert.equal(status, 503);
  assert.equal(body.checks.emailConfigured, false);
  assert.equal(calls.length, 0, 'should not call Resend without a key');
});

test('treats the resend.dev fallback as delivering, but flags it', async () => {
  const { GET, calls } = route(
    { ...configured, CONTACT_FROM_EMAIL: 'onboarding@resend.dev' }
  );
  const { status, body } = await read(await GET());
  assert.equal(status, 200, 'the fallback sender does deliver');
  assert.equal(body.status, 'ok');
  assert.equal(body.checks.usingFallbackSender, true);
  assert.ok(body.notes.some((n) => n.includes('fallback')));
  assert.equal(calls.length, 0, 'the sandbox sender needs no domain lookup');
});

test('a Resend outage does not trip the alarm', async () => {
  const { GET } = route(configured, null, { fail: true });
  const { status, body } = await read(await GET());
  assert.equal(status, 200, 'an unreachable provider is not a misconfiguration');
  assert.equal(body.checks.senderDomainStatus, 'unknown');
});

test('parses a display-name sender address', async () => {
  const { GET } = route(
    { ...configured, CONTACT_FROM_EMAIL: 'B&B Global <hello@example.test>' },
    [{ name: 'example.test', status: 'verified' }]
  );
  const { body } = await read(await GET());
  assert.equal(body.checks.senderDomain, 'example.test');
});

test('never leaks credentials or inbox addresses', async () => {
  const { GET } = route(configured, [{ name: 'example.test', status: 'verified' }]);
  const { body } = await read(await GET());
  const serialized = JSON.stringify(body);
  assert.ok(!serialized.includes('test-key'), 'must not expose the API key');
  assert.ok(!serialized.includes('team@example.test'), 'must not expose the lead inbox');
  assert.ok(!serialized.includes('hello@example.test'), 'must not expose the sender address');
});

// Business agent wiring: off until a key and flag are set; proposals still need approval.
const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const ts = require('typescript');

const dir = path.join(__dirname, '..', 'lib/agent');
const cache = new Map();
function load(file) {
  if (cache.has(file)) return cache.get(file).exports;
  const module = { exports: {} };
  cache.set(file, module);
  const source = ts.transpileModule(fs.readFileSync(file, 'utf8'), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
  }).outputText;
  const req = (name) => (name.startsWith('.') ? load(path.join(path.dirname(file), `${name}.ts`)) : require(name));
  new Function('exports', 'require', 'module', source)(module.exports, req, module);
  return module.exports;
}

const { runBusinessTask } = load(path.join(dir, 'core.ts'));
const { BUSINESS_AGENTS } = load(path.join(dir, 'charter.ts'));
const { agentOffReason, anthropicProvider, providerFromEnv } = load(path.join(dir, 'provider.ts'));
const agent = BUSINESS_AGENTS[0];
const evidence = [{ sourceId: 'outreach:pipeline', trusted: true, text: 'Prospects: 3.' }];
const okEnvelope = {
  status: 'completed',
  summary: 's',
  data: { headline: 'h', skillsUsed: [], findings: [], proposals: [{ kind: 'draft', skillId: 'copy', title: 't', detail: 'd', sourceId: 'outreach:pipeline' }], questions: [], notesForNextShift: '' },
  sources: [{ sourceId: 'outreach:pipeline', locator: '', note: '' }],
  assumptions: [],
  proposed_actions: [],
  blockers: [],
};

test('stays off without the flag or the key', () => {
  assert.match(agentOffReason({}), /BUSINESS_AGENT_ENABLED/);
  assert.match(agentOffReason({ BUSINESS_AGENT_ENABLED: 'true' }), /ANTHROPIC_API_KEY/);
  assert.equal(agentOffReason({ BUSINESS_AGENT_ENABLED: 'true', ANTHROPIC_API_KEY: 'k' }), null);
  assert.equal(providerFromEnv({ ANTHROPIC_API_KEY: 'k' }), undefined);
});

test('turns the forced tool call into the envelope and every proposal still needs approval', async () => {
  let sent = {};
  const fakeFetch = async (_url, init) => { sent = JSON.parse(init.body); return { ok: true, status: 200, json: async () => ({ content: [{ type: 'tool_use', input: okEnvelope }] }) }; };
  const r = await runBusinessTask({ agent, taskId: agent.tasks[0].id, evidence, model: anthropicProvider({ apiKey: 'k', fetchImpl: fakeFetch }) });
  assert.equal(sent.tool_choice.type, 'tool');
  assert.equal(r.status, 'completed');
  assert.ok(r.proposals.every((p) => p.needsApproval === true));
});

test('reports a failed model call without leaking the key', async () => {
  const fakeFetch = async () => ({ ok: false, status: 401, json: async () => ({}) });
  const r = await runBusinessTask({ agent, taskId: agent.tasks[0].id, evidence, model: anthropicProvider({ apiKey: 'sk-ant-secret', fetchImpl: fakeFetch }) });
  assert.equal(r.status, 'failed');
  assert.ok(!JSON.stringify(r).includes('sk-ant-secret'));
});

// Run the B&B Global Services business agent (ported from Jennifer) from your own computer:
//
//   BUSINESS_AGENT_ENABLED=true ANTHROPIC_API_KEY=... npm run agent -- prospects [notes.txt]
//
// It reads the outreach pipeline counts from data/outreach (never names or
// email addresses), adds the notes file if you give one (treated as untrusted),
// and prints the agent's proposals. It is not part of the website, and nothing
// is sent, stored or changed: every proposal waits for Bruno.

import fs from "node:fs";
import path from "node:path";
import { createRequire } from "node:module";
import { fileURLToPath } from "node:url";
import { loadProspects, loadSuppression } from "./outreach/store.mjs";

const require = createRequire(import.meta.url);
const ts = require("typescript");
const agentDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../lib/agent");

// The agent core is TypeScript; transpile it on the fly (the site's build is untouched).
const cache = new Map();
function load(file) {
  if (cache.has(file)) return cache.get(file).exports;
  const module = { exports: {} };
  cache.set(file, module);
  const source = ts.transpileModule(fs.readFileSync(file, "utf8"), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
  }).outputText;
  const req = (name) => (name.startsWith(".") ? load(path.join(path.dirname(file), `${name}.ts`)) : require(name));
  new Function("exports", "require", "module", source)(module.exports, req, module);
  return module.exports;
}

const { runBusinessTask } = load(path.join(agentDir, "core.ts"));
const { BUSINESS_AGENT } = load(path.join(agentDir, "charter.ts"));
const { agentOffReason, providerFromEnv } = load(path.join(agentDir, "provider.ts"));

function pipelineCounts() {
  const list = loadProspects();
  if (!list.length) return [];
  const tally = (key) => {
    const out = {};
    for (const p of list) {
      const k = p[key] || "unknown";
      out[k] = (out[k] || 0) + 1;
    }
    return Object.entries(out).map(([k, n]) => `${k}: ${n}`).join(", ");
  };
  return [{
    sourceId: "outreach:pipeline",
    title: "Outreach pipeline counts",
    trusted: true,
    text: `Prospects: ${list.length}. By status: ${tally("status")}. By industry: ${tally("industry")}. By company size: ${tally("companySize")}. Unsubscribed: ${loadSuppression().size}.`,
  }];
}

const [taskId, notesFile] = process.argv.slice(2);
if (!taskId) {
  console.log(`Usage: npm run agent -- <task> [notes.txt]\nTasks: ${BUSINESS_AGENT.tasks.map((t) => t.id).join(", ")}`);
} else if (agentOffReason()) {
  console.error(agentOffReason());
  process.exitCode = 1;
} else {
  const evidence = pipelineCounts();
  if (notesFile) evidence.push({ sourceId: "admin:notes", title: "Notes from Bruno", text: fs.readFileSync(notesFile, "utf8").slice(0, 8000) });
  const result = await runBusinessTask({ agent: BUSINESS_AGENT, taskId, evidence, model: providerFromEnv() });
  console.log(JSON.stringify(result, null, 2));
}

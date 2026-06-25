#!/usr/bin/env node
// B&B Global Services — AI sales outreach agent (CLI).
//
// Commands:
//   add        Add a single prospect (flags below)
//   import     Import prospects from a CSV or JSON file
//   generate   Generate personalized drafts for everyone who's due (no send)
//   send       Send the due emails (respects --limit, suppression, cadence)
//   status     Show pipeline stats
//   reply      Mark a prospect as replied (stops the sequence)
//   unsubscribe  Suppress an email address (honor opt-out)
//
// Safety: `send` is rate-limited and only contacts prospects you've loaded.
// Always review drafts (generate / outbox) before sending. Only load contacts
// you have a lawful basis to email. See scripts/outreach/README.md.

import fs from "node:fs";
import path from "node:path";
import {
  loadProspects, saveProspects, loadSuppression, addSuppression,
  appendLog, normalizeProspect, OUTBOX,
} from "./store.mjs";
import { SEQUENCE, nextStepFor } from "./sequences.mjs";
import { generateEmail } from "./ai.mjs";
import { sendEmail, composeFull, senderConfigured } from "./email.mjs";

const args = process.argv.slice(2);
const cmd = args[0];
const flags = parseFlags(args.slice(1));
const DAILY_LIMIT = Number(process.env.OUTREACH_DAILY_LIMIT || 30);
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

function parseFlags(a) {
  const f = {};
  for (let i = 0; i < a.length; i++) {
    if (a[i].startsWith("--")) {
      const key = a[i].slice(2);
      const val = a[i + 1] && !a[i + 1].startsWith("--") ? a[++i] : true;
      f[key] = val;
    }
  }
  return f;
}

function dueList() {
  const now = new Date();
  const suppressed = loadSuppression();
  return loadProspects()
    .map((p) => ({ p, step: nextStepFor(p, now) }))
    .filter(({ p, step }) => step && !suppressed.has(p.email));
}

async function main() {
  switch (cmd) {
    case "add": return cmdAdd();
    case "import": return cmdImport();
    case "generate": return cmdGenerate();
    case "send": return cmdSend();
    case "status": return cmdStatus();
    case "reply": return cmdMark("replied");
    case "unsubscribe": return cmdUnsub();
    default:
      console.log("Commands: add | import <file> | generate | send | status | reply --email <e> | unsubscribe --email <e>");
      console.log("Flags: --limit N (send/generate), --email, --company, --role, --industry, --notes, --consent");
  }
}

function cmdAdd() {
  if (!flags.email) return console.error("Need --email");
  const list = loadProspects();
  if (list.some((p) => p.email === flags.email.toLowerCase())) return console.error("Already exists.");
  const p = normalizeProspect({
    email: flags.email, firstName: flags.first || flags.name, company: flags.company,
    role: flags.role, industry: flags.industry, companySize: flags.size,
    notes: flags.notes, consentBasis: flags.consent, source: flags.source || "manual",
  });
  list.push(p);
  saveProspects(list);
  console.log(`Added ${p.email}${p.company ? ` (${p.company})` : ""}.`);
}

function cmdImport() {
  const file = args[1];
  if (!file || !fs.existsSync(file)) return console.error("Usage: import <file.csv|file.json>");
  const raw = fs.readFileSync(file, "utf8");
  const rows = file.endsWith(".json") ? JSON.parse(raw) : parseCsv(raw);
  const list = loadProspects();
  const have = new Set(list.map((p) => p.email));
  let added = 0;
  for (const r of rows) {
    const p = normalizeProspect(r);
    if (!p.email || have.has(p.email)) continue;
    list.push(p); have.add(p.email); added++;
  }
  saveProspects(list);
  console.log(`Imported ${added} new prospect(s). Total: ${list.length}.`);
}

async function cmdGenerate() {
  const due = dueList();
  const limit = Number(flags.limit || due.length);
  fs.mkdirSync(OUTBOX, { recursive: true });
  console.log(`${due.length} due; generating ${Math.min(limit, due.length)} draft(s)...\n`);
  for (const { p, step } of due.slice(0, limit)) {
    const { subject, body, source } = await generateEmail(p, step);
    const full = composeFull(body, p);
    const fname = path.join(OUTBOX, `${p.email.replace(/[^a-z0-9]/gi, "_")}__step${step.step}.txt`);
    fs.writeFileSync(fname, `TO: ${p.email}\nSUBJECT: ${subject}\nSOURCE: ${source}\n\n${full}\n`);
    console.log(`✓ ${p.email}  [step ${step.step}, ${source}]  "${subject}"`);
  }
  console.log(`\nDrafts written to ${path.relative(process.cwd(), OUTBOX)}/ — review them, then run: npm run outreach -- send`);
}

async function cmdSend() {
  if (!senderConfigured()) {
    return console.error("Sending not configured. Set RESEND_API_KEY + OUTREACH_FROM_EMAIL (verified domain). See README.");
  }
  const due = dueList();
  const limit = Math.min(Number(flags.limit || DAILY_LIMIT), DAILY_LIMIT, due.length);
  if (!due.length) return console.log("Nothing due. ✅");
  console.log(`${due.length} due; sending up to ${limit} (daily cap ${DAILY_LIMIT})...\n`);

  const list = loadProspects();
  const byEmail = new Map(list.map((p) => [p.email, p]));
  let sent = 0;
  for (const { p, step } of due.slice(0, limit)) {
    const { subject, body, source } = await generateEmail(p, step);
    const result = await sendEmail({ to: p.email, subject, bodyText: body, prospect: p });
    if (result.ok) {
      const rec = byEmail.get(p.email);
      rec.sentCount = (rec.sentCount || 0) + 1;
      rec.lastSentAt = new Date().toISOString();
      rec.status = rec.sentCount >= SEQUENCE.length ? "completed" : "contacted";
      appendLog({ ts: rec.lastSentAt, email: p.email, step: step.step, subject, source, id: result.id });
      console.log(`✓ sent → ${p.email}  [step ${step.step}, ${source}]`);
      sent++;
    } else {
      console.error(`✗ ${p.email}: ${result.error}`);
    }
    await sleep(1200 + Math.floor(Math.random() * 800)); // pace sends, protect deliverability
  }
  saveProspects(list);
  console.log(`\nDone. Sent ${sent}. Re-run tomorrow to continue the cadence.`);
}

function cmdStatus() {
  const list = loadProspects();
  const suppressed = loadSuppression();
  const by = (s) => list.filter((p) => p.status === s).length;
  const due = dueList().length;
  console.log("Outreach pipeline");
  console.log("-----------------");
  console.log(`Prospects:    ${list.length}`);
  console.log(`  new:        ${by("new")}`);
  console.log(`  contacted:  ${by("contacted")}`);
  console.log(`  completed:  ${by("completed")}`);
  console.log(`  replied:    ${by("replied")}`);
  console.log(`Suppressed:   ${suppressed.size}`);
  console.log(`Due now:      ${due}`);
  console.log(`Total sends:  ${list.reduce((n, p) => n + (p.sentCount || 0), 0)}`);
}

function cmdMark(status) {
  if (!flags.email) return console.error("Need --email");
  const list = loadProspects();
  const p = list.find((x) => x.email === flags.email.toLowerCase());
  if (!p) return console.error("Not found.");
  p.status = status;
  saveProspects(list);
  console.log(`${p.email} → ${status}`);
}

function cmdUnsub() {
  if (!flags.email) return console.error("Need --email");
  addSuppression(flags.email);
  const list = loadProspects();
  const p = list.find((x) => x.email === flags.email.toLowerCase());
  if (p) { p.status = "unsubscribed"; saveProspects(list); }
  console.log(`Suppressed ${flags.email}. They will not be contacted again.`);
}

function parseCsv(text) {
  const lines = text.trim().split(/\r?\n/);
  const headers = lines[0].split(",").map((h) => h.trim().replace(/^"|"$/g, ""));
  return lines.slice(1).map((line) => {
    const cells = line.match(/("([^"]|"")*"|[^,]*)(,|$)/g)?.slice(0, headers.length) || [];
    const obj = {};
    headers.forEach((h, i) => {
      obj[h] = (cells[i] || "").replace(/,$/, "").trim().replace(/^"|"$/g, "").replace(/""/g, '"');
    });
    return obj;
  });
}

main().catch((e) => { console.error(e); process.exit(1); });

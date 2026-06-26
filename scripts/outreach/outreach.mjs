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
  appendLog, readLog, normalizeProspect, OUTBOX, DASHBOARD,
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
    case "dashboard": return cmdDashboard();
    case "reply": return cmdMark("replied");
    case "unsubscribe": return cmdUnsub();
    default:
      console.log("Commands: add | import <file> | generate | send | status | dashboard | reply --email <e> | unsubscribe --email <e>");
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

function cmdDashboard() {
  const list = loadProspects();
  const log = readLog();
  const suppressed = loadSuppression();
  const due = dueList().length;
  const totalSends = log.length;
  const replied = list.filter((p) => p.status === "replied").length;
  const contacted = list.filter((p) => (p.sentCount || 0) > 0).length;
  const replyRate = contacted ? Math.round((replied / contacted) * 100) : 0;
  const hot = log.filter((e) => e.rating === "Hot").length; // future use

  const esc = (s) => String(s ?? "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  const stat = (v, l) => `<div class="stat"><div class="v">${v}</div><div class="l">${l}</div></div>`;

  const recent = [...log].reverse().slice(0, 25).map((e) =>
    `<tr><td>${esc(e.ts?.slice(0, 16).replace("T", " "))}</td><td>${esc(e.email)}</td><td>step ${esc(e.step)}</td><td>${esc(e.source)}</td><td>${esc(e.subject)}</td></tr>`
  ).join("");

  const rows = [...list]
    .sort((a, b) => (b.lastSentAt || "").localeCompare(a.lastSentAt || ""))
    .map((p) =>
      `<tr><td>${esc(p.email)}</td><td>${esc(p.company)}</td><td>${esc(p.industry)}</td><td><span class="badge ${esc(p.status)}">${esc(p.status)}</span></td><td>${p.sentCount || 0}/${SEQUENCE.length}</td><td>${esc((p.lastSentAt || "").slice(0, 10))}</td></tr>`
    ).join("");

  const html = `<!doctype html><html><head><meta charset="utf-8"><title>B&B Outreach Dashboard</title>
<style>
  :root{color-scheme:light}
  body{font-family:-apple-system,Segoe UI,Roboto,Arial,sans-serif;margin:0;background:#f1f5f9;color:#0f172a}
  header{background:#0a1429;color:#fff;padding:20px 28px}
  header h1{margin:0;font-size:18px}header p{margin:4px 0 0;color:#94a3b8;font-size:13px}
  .wrap{max-width:1100px;margin:0 auto;padding:24px}
  .stats{display:grid;grid-template-columns:repeat(auto-fit,minmax(130px,1fr));gap:14px;margin-bottom:24px}
  .stat{background:#fff;border:1px solid #e2e8f0;border-radius:14px;padding:16px;text-align:center}
  .stat .v{font-size:28px;font-weight:700}.stat .l{font-size:12px;color:#64748b;margin-top:4px}
  h2{font-size:14px;text-transform:uppercase;letter-spacing:.05em;color:#475569;margin:24px 0 10px}
  table{width:100%;border-collapse:collapse;background:#fff;border:1px solid #e2e8f0;border-radius:12px;overflow:hidden;font-size:13px}
  th,td{text-align:left;padding:9px 12px;border-bottom:1px solid #f1f5f9}th{background:#f8fafc;color:#475569;font-size:11px;text-transform:uppercase}
  .badge{font-size:11px;padding:2px 8px;border-radius:999px;background:#e2e8f0;color:#334155}
  .badge.contacted{background:#dbeafe;color:#1e40af}.badge.completed{background:#e0e7ff;color:#3730a3}
  .badge.replied{background:#dcfce7;color:#166534}.badge.unsubscribed,.badge.bounced{background:#fee2e2;color:#991b1b}
</style></head><body>
<header><h1>B&B Global Services — Outreach Dashboard</h1><p>Generated ${new Date().toISOString().slice(0, 16).replace("T", " ")} · local pipeline view</p></header>
<div class="wrap">
  <div class="stats">
    ${stat(list.length, "Prospects")}
    ${stat(contacted, "Contacted")}
    ${stat(due, "Due now")}
    ${stat(totalSends, "Total sends")}
    ${stat(replied, "Replies")}
    ${stat(replyRate + "%", "Reply rate")}
    ${stat(suppressed.size, "Unsubscribed")}
  </div>
  <h2>Recent sends</h2>
  <table><thead><tr><th>When</th><th>Email</th><th>Step</th><th>Source</th><th>Subject</th></tr></thead><tbody>${recent || '<tr><td colspan="5">No sends yet.</td></tr>'}</tbody></table>
  <h2>Prospects</h2>
  <table><thead><tr><th>Email</th><th>Company</th><th>Industry</th><th>Status</th><th>Touches</th><th>Last sent</th></tr></thead><tbody>${rows || '<tr><td colspan="6">No prospects yet — add some with: npm run outreach -- import &lt;file&gt;</td></tr>'}</tbody></table>
  <p style="color:#94a3b8;font-size:12px;margin-top:20px">Inbound website leads land in your email inbox (Resend), not here — this dashboard covers the outreach engine. Set CONTACT_WEBHOOK_URL to also pipe inbound leads to a sheet/CRM.</p>
</div></body></html>`;

  fs.writeFileSync(DASHBOARD, html);
  console.log(`Dashboard written: ${path.relative(process.cwd(), DASHBOARD)}`);
  console.log("Open it in your browser (e.g. `open` on macOS, `xdg-open` on Linux).");
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

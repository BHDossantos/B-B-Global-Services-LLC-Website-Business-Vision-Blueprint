// JSON-backed prospect + suppression store. All runtime data lives under
// data/outreach/ (gitignored) so real contact lists never get committed.

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../..");
export const DATA_DIR = path.join(root, "data", "outreach");
const PROSPECTS = path.join(DATA_DIR, "prospects.json");
const SUPPRESS = path.join(DATA_DIR, "unsubscribed.json");
const LOG = path.join(DATA_DIR, "send-log.jsonl");
export const OUTBOX = path.join(DATA_DIR, "outbox");

function ensure() {
  fs.mkdirSync(DATA_DIR, { recursive: true });
  fs.mkdirSync(OUTBOX, { recursive: true });
  if (!fs.existsSync(PROSPECTS)) fs.writeFileSync(PROSPECTS, "[]");
  if (!fs.existsSync(SUPPRESS)) fs.writeFileSync(SUPPRESS, "[]");
}

export function loadProspects() {
  ensure();
  return JSON.parse(fs.readFileSync(PROSPECTS, "utf8"));
}

export function saveProspects(list) {
  ensure();
  fs.writeFileSync(PROSPECTS, JSON.stringify(list, null, 2));
}

export function loadSuppression() {
  ensure();
  return new Set(JSON.parse(fs.readFileSync(SUPPRESS, "utf8")).map((e) => e.toLowerCase()));
}

export function addSuppression(email) {
  ensure();
  const set = loadSuppression();
  set.add(email.toLowerCase());
  fs.writeFileSync(SUPPRESS, JSON.stringify([...set], null, 2));
}

export function appendLog(entry) {
  ensure();
  fs.appendFileSync(LOG, JSON.stringify(entry) + "\n");
}

export function normalizeProspect(raw) {
  const email = (raw.email || "").trim().toLowerCase();
  return {
    email,
    firstName: raw.firstName || raw.first_name || (raw.name || "").split(" ")[0] || "",
    lastName: raw.lastName || raw.last_name || "",
    company: raw.company || "",
    role: raw.role || raw.title || "",
    industry: raw.industry || "",
    companySize: raw.companySize || raw.company_size || "",
    notes: raw.notes || "",
    source: raw.source || "manual",
    consentBasis: raw.consentBasis || raw.consent || "", // e.g. "former colleague", "conference opt-in"
    status: raw.status || "new",
    sentCount: raw.sentCount || 0,
    lastSentAt: raw.lastSentAt || null,
  };
}

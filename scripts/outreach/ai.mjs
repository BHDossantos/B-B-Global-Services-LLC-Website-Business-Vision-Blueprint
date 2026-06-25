// AI email generation via the Claude Messages API (raw fetch, no SDK).
// - Caches the brand system prompt (cache_control) so repeated generations
//   share the prefix.
// - Uses structured outputs so we reliably get {subject, body}.
// - Falls back to a clean template when ANTHROPIC_API_KEY is unset or the API
//   errors, so the engine never hard-fails.

import { BRAND_SYSTEM, angleForProspect } from "./brand.mjs";

const MODEL = process.env.OUTREACH_MODEL || "claude-opus-4-8";
const API_URL = "https://api.anthropic.com/v1/messages";

const SCHEMA = {
  type: "object",
  properties: {
    subject: { type: "string" },
    body: { type: "string" },
  },
  required: ["subject", "body"],
  additionalProperties: false,
};

/**
 * Generate a personalized email for a prospect at a given sequence step.
 * Returns { subject, body, source: "ai" | "template" }.
 */
export async function generateEmail(prospect, step) {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) return { ...template(prospect, step), source: "template" };

  const userPrompt = buildUserPrompt(prospect, step);

  try {
    const res = await fetch(API_URL, {
      method: "POST",
      headers: {
        "x-api-key": apiKey,
        "anthropic-version": "2023-06-01",
        "content-type": "application/json",
      },
      body: JSON.stringify({
        model: MODEL,
        max_tokens: 1500,
        system: [
          { type: "text", text: BRAND_SYSTEM, cache_control: { type: "ephemeral" } },
        ],
        output_config: { format: { type: "json_schema", schema: SCHEMA } },
        messages: [{ role: "user", content: userPrompt }],
      }),
    });

    if (!res.ok) {
      const text = await res.text();
      console.warn(`  AI generation failed (${res.status}): ${text.slice(0, 160)} — using template`);
      return { ...template(prospect, step), source: "template" };
    }

    const data = await res.json();
    if (data.stop_reason === "refusal") {
      console.warn("  AI declined this prompt — using template");
      return { ...template(prospect, step), source: "template" };
    }
    const block = (data.content || []).find((b) => b.type === "text");
    const parsed = block ? JSON.parse(block.text) : null;
    if (!parsed?.subject || !parsed?.body) {
      return { ...template(prospect, step), source: "template" };
    }
    return { subject: parsed.subject.trim(), body: parsed.body.trim(), source: "ai" };
  } catch (err) {
    console.warn(`  AI error: ${err.message} — using template`);
    return { ...template(prospect, step), source: "template" };
  }
}

function buildUserPrompt(p, step) {
  const angle = angleForProspect(p);
  const ctx = [
    `Prospect first name: ${p.firstName || "there"}`,
    p.company && `Company: ${p.company}`,
    p.role && `Role/title: ${p.role}`,
    p.industry && `Industry: ${p.industry}`,
    p.companySize && `Company size: ${p.companySize}`,
    p.notes && `Context/notes about them: ${p.notes}`,
    `Most relevant angle for them: ${angle}`,
  ]
    .filter(Boolean)
    .join("\n");

  if (step.kind === "first") {
    return `Write a FIRST-TOUCH cold outreach email.\n\n${ctx}\n\nLead with the relevant angle and offer the "${step.offer}". Keep it 70-120 words, one clear ask. Return JSON {subject, body}.`;
  }
  return `Write FOLLOW-UP #${step.followup} in a polite outreach sequence (the prospect has not replied to prior emails). Keep it short (40-70 words), add a small new angle or value, stay friendly and low-pressure, and make it easy to say yes or no. Reference the "${step.offer}".\n\n${ctx}\n\nReturn JSON {subject, body}.`;
}

// Clean, compliant template fallback (mail-merge) — used when AI is unavailable.
function template(p, step) {
  const name = p.firstName || "there";
  const company = p.company ? ` at ${p.company}` : "";
  const angle = angleForProspect(p);
  if (step.kind === "first") {
    return {
      subject: `quick idea for ${p.company || "your team"}`,
      body: `Hi ${name},\n\nI run B&B Global Services, a technology partner for growing companies — we help with ${angle}.\n\nI work with teams${company} that have outgrown basic IT but want enterprise-grade delivery without the enterprise price tag. If it is useful, I would be glad to run a free Technology Health Check or just compare notes on a short call.\n\nWorth a quick conversation?`,
    };
  }
  return {
    subject: `following up`,
    body: `Hi ${name},\n\nCircling back in case this got buried. If improving ${angle} is on your radar this quarter, I would be happy to share a free assessment and a 90-day roadmap — no obligation.\n\nWould a brief call make sense, or should I check back later?`,
  };
}

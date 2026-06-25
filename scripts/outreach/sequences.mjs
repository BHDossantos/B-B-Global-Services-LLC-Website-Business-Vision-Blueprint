// Multi-touch outreach cadence. Each step fires only after `waitDays` have
// passed since the previous send and only if the prospect has not replied.

export const SEQUENCE = [
  { step: 0, kind: "first", waitDays: 0, offer: "free Technology Health Check" },
  { step: 1, kind: "followup", followup: 1, waitDays: 3, offer: "free Technology Health Check" },
  { step: 2, kind: "followup", followup: 2, waitDays: 5, offer: "free AI Readiness Assessment" },
  { step: 3, kind: "followup", followup: 3, waitDays: 7, offer: "short discovery call" },
  { step: 4, kind: "followup", followup: 4, waitDays: 14, offer: "free assessment (final note)" },
];

export function nextStepFor(prospect, now) {
  // Done, replied, unsubscribed, or bounced → no next step.
  if (["replied", "unsubscribed", "bounced", "completed"].includes(prospect.status)) {
    return null;
  }
  const sent = prospect.sentCount || 0;
  if (sent >= SEQUENCE.length) return null;
  const step = SEQUENCE[sent];
  if (sent === 0) return step; // first touch is always due
  const last = prospect.lastSentAt ? new Date(prospect.lastSentAt).getTime() : 0;
  const dueAt = last + step.waitDays * 24 * 60 * 60 * 1000;
  return now.getTime() >= dueAt ? step : null;
}

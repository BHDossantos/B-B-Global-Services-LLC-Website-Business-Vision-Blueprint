import { NextResponse } from "next/server";

export const runtime = "nodejs";
// Never cache: the point of this route is to report live configuration state.
export const dynamic = "force-dynamic";

/**
 * Configuration canary, not an end-to-end delivery receipt.
 * Degrades for missing configuration, restricted sandbox sending, or provider
 * state we cannot verify. No secret values or inbox addresses are exposed.
 */

/** Resend sandbox sender: restricted to the account owner, not prospects. */
const FALLBACK_SENDER_DOMAIN = "resend.dev";

type DomainState = "verified" | "unverified" | "not_found" | "unknown";

function domainOf(address: string): string {
  // Handles both "a@b.com" and "Name <a@b.com>".
  const match = address.match(/<([^>]+)>/);
  const bare = (match ? match[1] : address).trim();
  return bare.split("@")[1]?.toLowerCase() ?? "";
}

async function senderDomainState(
  apiKey: string,
  domain: string
): Promise<DomainState> {
  try {
    const res = await fetch("https://api.resend.com/domains", {
      headers: { Authorization: `Bearer ${apiKey}` },
      signal: AbortSignal.timeout(5000),
      cache: "no-store",
    });
    if (!res.ok) return "unknown";
    const body = (await res.json()) as { data?: { name?: string; status?: string }[] };
    const entry = body.data?.find((d) => d.name?.toLowerCase() === domain);
    if (!entry) return "not_found";
    return entry.status === "verified" ? "verified" : "unverified";
  } catch {
    // A provider outage or timeout is not the same as a misconfiguration.
    return "unknown";
  }
}

export async function GET() {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;

  const emailConfigured = Boolean(apiKey && to && from);
  const senderDomain = from ? domainOf(from) : "";
  const usingFallbackSender = senderDomain === FALLBACK_SENDER_DOMAIN;

  // Other lead destinations. Either one can carry leads on its own, so their
  // absence is reported but is not by itself a failure.
  const hubspotConfigured = Boolean(process.env.HUBSPOT_PORTAL_ID && process.env.HUBSPOT_FORM_GUID);
  const webhookConfigured = Boolean(process.env.CONTACT_WEBHOOK_URL);

  let senderDomainStatus: DomainState = "unknown";
  if (apiKey && senderDomain) {
    senderDomainStatus = usingFallbackSender
      ? "unknown" // sandbox only permits the account owner; not production delivery proof
      : await senderDomainState(apiKey, senderDomain);
  }

  const notes: string[] = [];
  if (!emailConfigured) {
    notes.push(
      "Email delivery is not fully configured (RESEND_API_KEY, CONTACT_TO_EMAIL and CONTACT_FROM_EMAIL are all required)."
    );
  }
  if (senderDomainStatus === "unverified" || senderDomainStatus === "not_found") {
    notes.push(
      `Resend will reject mail from ${senderDomain}: the domain is not verified. Lead notifications and auto-replies are being dropped. Re-add the DKIM and SPF records, or switch CONTACT_FROM_EMAIL to the fallback sender until it verifies.`
    );
  }
  if (usingFallbackSender) {
    notes.push(
      `Sending from the ${FALLBACK_SENDER_DOMAIN} testing fallback. Only the Resend account owner can receive these emails; external auto-replies are unavailable. Delivery has not been verified.`
    );
  }
  if (senderDomainStatus === "unknown" && emailConfigured) {
    notes.push("Could not reach Resend to confirm the sending domain's status.");
  }
  if (!hubspotConfigured && !webhookConfigured) {
    notes.push(
      "Email is the only lead destination; a CRM or webhook would give leads a second path."
    );
  }

  // Unknown provider state is not delivery proof; keep the canary degraded
  // until production email configuration can be verified.
  const leadDeliveryBroken =
    !emailConfigured || usingFallbackSender || senderDomainStatus !== "verified";

  const body = {
    status: leadDeliveryBroken ? "degraded" : "ok",
    checks: {
      emailConfigured,
      senderDomain: senderDomain || null,
      senderDomainStatus,
      usingFallbackSender,
      hubspotConfigured,
      webhookConfigured,
    },
    notes,
    checkedAt: new Date().toISOString(),
  };

  return NextResponse.json(body, {
    status: leadDeliveryBroken ? 503 : 200,
    headers: { "Cache-Control": "no-store" },
  });
}

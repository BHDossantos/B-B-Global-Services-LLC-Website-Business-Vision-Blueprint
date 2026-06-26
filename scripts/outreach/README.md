# Sales Outreach Agent

An AI-powered, **compliance-first** cold email + follow-up engine for B&B Global
Services. It runs **locally** (Node CLI) — it is not deployed to Vercel — and
sends through Resend. AI personalization uses the Claude API; if no key is set
it falls back to clean mail-merge templates, so it always works.

> ⚠️ **Use responsibly and legally.** Only load prospects you have a lawful
> basis to email (people you know, opted-in contacts, conference connections).
> No scraped or purchased spam lists. Every email includes your identity, a
> physical address, and a one-click unsubscribe — keep it that way, and honor
> opt-outs promptly. This protects your domain reputation *and* keeps you within
> CAN-SPAM / CASL / GDPR. See `business/growth-engine-strategy.md` for the rules.

## Setup

Set these in your shell or a local `.env` (see `.env.example`):

```
ANTHROPIC_API_KEY=...        # optional — enables AI personalization
RESEND_API_KEY=...           # required to actually send
OUTREACH_FROM_EMAIL=bruno@bnbglobal.net   # must be on your Resend-verified domain
OUTREACH_REPLY_TO=brunodossantos707@gmail.com
OUTREACH_POSTAL_ADDRESS="B&B Global Services LLC, 123 ..., NH, USA"   # CAN-SPAM requires a real one
OUTREACH_DAILY_LIMIT=30      # protect deliverability; ramp slowly on a new domain
```

## Workflow

```bash
# 1. Load prospects (warm network first)
npm run outreach -- add --email jane@acme.com --first Jane --company "Acme" \
  --role "VP Eng" --industry "SaaS & Technology" --consent "former colleague" \
  --notes "scaling fast, deploy reliability pain"

# or import a list (CSV headers: email,firstName,company,role,industry,companySize,notes,consentBasis)
npm run outreach -- import ./my-list.csv
npm run outreach -- import scripts/outreach/prospects.example.json

# 2. Generate drafts for everyone who's due — REVIEW before sending
npm run outreach -- generate
#   → drafts written to data/outreach/outbox/  (open and read them)

# 3. Send the due emails (rate-limited, respects the daily cap)
npm run outreach -- send --limit 20

# 4. Check the pipeline
npm run outreach -- status        # quick text summary
npm run outreach -- dashboard     # generate an HTML dashboard (data/outreach/dashboard.html)
#   → open it in your browser for a visual view: prospects, recent sends, reply rate

# 5. Keep the sequence moving — run `send` once a day; follow-ups fire on cadence
#    Mark replies so the sequence stops:
npm run outreach -- reply --email jane@acme.com
#    Honor opt-outs:
npm run outreach -- unsubscribe --email someone@acme.com
```

## How it works

- **Cadence** (`sequences.mjs`): a 5-touch sequence (first email + 4 follow-ups)
  spaced over ~30 days. Each touch fires only after its wait window and only if
  the prospect hasn't replied/unsubscribed.
- **Personalization** (`ai.mjs`): the Claude API writes each email from the
  brand voice (`brand.mjs`) tailored to the prospect's company, role, industry,
  and notes, leading with the most relevant service angle and one low-friction
  offer (free Health Check / AI Readiness / a call). The brand system prompt is
  prompt-cached. Without an API key, it uses templates.
- **Sending** (`email.mjs`): Resend, with a compliant signature, physical
  address, one-click unsubscribe link, and `List-Unsubscribe` headers. Sends are
  paced and capped.
- **State** (`store.mjs`): prospects, suppression list, and a send log live in
  `data/outreach/` (gitignored — real lists never get committed).

## Unsubscribes

Every email links to `bnbglobal.net/unsubscribe`. That page + `/api/unsubscribe`
record the request and notify you (email/webhook). Run
`npm run outreach -- unsubscribe --email <them>` to add it to the local
suppression list so they're never contacted again. Process these promptly.

## Tips

- Start with your **warm network** — highest reply rates, lowest risk.
- On a new sending domain, keep `OUTREACH_DAILY_LIMIT` low (10–20) and ramp up.
- Always `generate` and skim a few drafts before your first `send`.
- Pair email with LinkedIn touches (see the growth strategy doc) for best results.

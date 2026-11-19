# Thrust Insurance — SMS opt-in site

A small, self-contained site whose only job is to satisfy carrier (Twilio
toll-free / A2P) SMS verification for the **Thrust Insurance** messaging
program, and to capture insurance quote requests.

It is deliberately **separate from the B&B Global Services site**. The texts you
send are branded Thrust Insurance and come from `b@dossantosinsurance.org`, so
the opt-in page, privacy policy, and messaging terms must carry the same brand
and live on the same domain. A reviewer who sees one brand in the message and a
different one on the website rejects the campaign — that mismatch is the single
most common rejection reason.

## What's here

| File | Purpose |
|---|---|
| `index.html` | Quote request form: Name, Email, Phone (all required) + the carrier-verified consent disclosure directly above the submit button, with Privacy and Terms links below. |
| `privacy.html` | Privacy policy, including the SMS/Text Messaging section carriers check for verbatim. |
| `terms.html` | Terms & conditions, including Messaging Terms (message types, frequency, rates, STOP/HELP, carrier non-liability). |
| `api/quote.js` | Serverless function: emails each submission to you via Resend and records the consent text + timestamp as proof of express written consent. |

No build step and no dependencies. Vercel serves the HTML statically and runs
`api/quote.js` as a function automatically.

## Before you deploy: one thing to confirm

Search these files for `LEGAL_ENTITY_TBD` and replace it with the legal entity
behind Thrust Insurance, because I could not determine it and should not guess:

- If **Thrust Insurance is a trade name (DBA) of B&B Global Services LLC**, use
  `Thrust Insurance, a trade name of B&B Global Services LLC`.
- If it is **its own company**, use that company's registered name.
- If you are an **appointed agent of an agency someone else owns**, use
  `Bruno Dossantos, licensed insurance agent, appointed with <Agency legal name>`.

Whatever you choose must match what you register with Twilio. Also add your
business mailing address where `POSTAL_ADDRESS_TBD` appears — CAN-SPAM requires a
physical address in commercial email, and carriers like to see it on the site.

## Deploy

1. Push this directory to its own Git repository (recommended), or keep it as a
   subdirectory and point a second Vercel project at it.
2. In Vercel: **Add New Project** → import the repo. If it is a subdirectory, set
   **Root Directory** to `thrust-insurance-optin`.
3. Add the environment variables below.
4. Add the domain `dossantosinsurance.org` (or a subdomain such as
   `quote.dossantosinsurance.org`) under the project's **Domains**.

### Environment variables

| Name | Value |
|---|---|
| `RESEND_API_KEY` | Your existing Resend key. |
| `QUOTE_TO_EMAIL` | Where leads land, e.g. your own inbox. Never rendered on the site. |
| `QUOTE_FROM_EMAIL` | `Thrust Insurance <b@dossantosinsurance.org>` — this domain is already verified in Resend, so it sends immediately. |

## Give Twilio these URLs

- Opt-in form: `https://dossantosinsurance.org/`
- Privacy policy: `https://dossantosinsurance.org/privacy.html`
- Terms: `https://dossantosinsurance.org/terms.html`

Keep your registered sample messages consistent with what you actually send:
identify Thrust Insurance, reference the recipient's insurance quote request, and
include STOP/HELP. Sample text that does not match real sends is the second most
common rejection reason after a website mismatch.

## Moving it to its own repo

It lives in the B&B repository only because that was the one place I could
durably commit it. It is a different business and should get its own repository
when convenient — nothing here imports from the B&B site, so moving the folder is
all it takes.

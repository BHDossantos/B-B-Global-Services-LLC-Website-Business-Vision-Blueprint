# B&B Global Services LLC — Website

**Technology Delivery From Idea to Operations.**

Marketing website for B&B Global Services LLC, a full-service technology
transformation and managed services company for mid-market businesses.
Built from the official Business Vision Blueprint.

## Stack

- **[Next.js 14](https://nextjs.org/)** (App Router) + **React 18**
- **TypeScript**
- **Tailwind CSS**
- Deploy target: **[Vercel](https://vercel.com/)**

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

Other scripts:

```bash
npm run build      # production build
npm run start      # serve the production build
npm run lint       # eslint (next/core-web-vitals)
npm run typecheck  # tsc --noEmit
npm run qa         # crawl a running server for broken links & metadata issues
```

**Pre-deploy QA:** start the server (`npm run build && npm run start`), then in
another shell run `QA_BASE=http://localhost:3000 npm run qa`. It crawls every
sitemap URL and internal link, flagging broken links, missing/duplicate titles
and meta descriptions, and rendering glitches.

## Project structure

```
app/
  layout.tsx              # Root layout, fonts, SEO metadata, JSON-LD, analytics
  page.tsx                # Homepage (all 9 blueprint sections + assessment band)
  assessment/page.tsx     # Interactive Technology Health Check (lead-gen tool)
  pricing/page.tsx        # Productized packages + per-pillar rate card
  services/[slug]/        # 6 service pillar pages + per-page OG images
  solutions/[slug]/       # 6 outcome-based solution pages + OG images
  locations/[slug]/       # Local SEO pages (New Hampshire, Boston)
  industries/, about/     # Industries, About (vision/mission/founder)
  case-studies/[slug]/    # Case study index + detail pages
  insights/[slug]/        # Blog index + Markdown-rendered articles
  capability-statement/   # Printable capability statement (save as PDF)
  careers/, partners/     # Future-nav pages
  client-portal/          # Client portal (placeholder, noindex)
  contact/page.tsx        # Contact form + inline Calendly + offers
  api/contact/route.ts    # Form handler (validation, honeypot, Resend/HubSpot/webhook)
  opengraph-image.tsx     # Generated social images (site + per route)
  sitemap.ts / robots.ts  # SEO
components/                # Hero, cards, framework, nav, footer, forms, assessment,
                          # JSON-LD, analytics, markdown, testimonials, ...
lib/
  siteConfig.ts           # Brand, nav, contact details, booking URL
  og.tsx                  # Shared Open Graph image template
  content/                # Services, solutions, locations, assessment, articles,
                          # and marketing copy (single source of truth)
business/                 # Sales, legal, marketing & finance collateral (see below)
```

Content lives in `lib/content/*` so pages stay DRY and copy can later move to
a CMS without touching layout.

### Conversion & lead generation

- **`/assessment`** — an interactive 8-question Technology Health Check that
  scores maturity, captures the lead via the contact API, and recommends the
  right engagement. The site's primary top-of-funnel tool.
- **`/pricing`** — productized packages (featured tier) plus a transparent
  per-pillar rate card, so services are easy to buy.
- **Local SEO** — `/locations/new-hampshire` and `/locations/boston` target
  metro keywords with `LocalBusiness` + breadcrumb schema.
- **Structured data** — `FAQPage`, `Service`, `Article`, `BreadcrumbList`,
  and `ProfessionalService`/`LocalBusiness` JSON-LD for rich results.

## Configuration

Update brand and integration details in **`lib/siteConfig.ts`**:

- `url` — production domain (used for canonical URLs, sitemap, JSON-LD)
- `email`, `phone`, `locations`
- `bookingUrl` — Calendly (or other) scheduling link
- `social.linkedin`

### Contact form / lead capture

`app/api/contact/route.ts` validates submissions (with a honeypot for spam)
and fans each lead out to every configured destination. All integrations are
**independent** — at least one operator destination must confirm acceptance.
With none configured, the route returns 503 and the form retains the visitor’s input.
Copy `.env.example` to `.env.local` and fill in what you use:

| Integration | Variables | Purpose |
|---|---|---|
| **Resend** | `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL` | Email notification to the team (reply-to is the prospect) |
| **HubSpot** | `HUBSPOT_PORTAL_ID`, `HUBSPOT_FORM_GUID` | CRM lead capture via Forms API |
| **Webhook** | `CONTACT_WEBHOOK_URL` | JSON POST to a receiver that persists before returning the receipt below |

The route acknowledges a request only after the team email provider returns a
message ID, HubSpot accepts the form submission, or the configured webhook
confirms durable storage with a JSON response:

```json
{"accepted": true, "receiptId": "receiver-generated-persistent-id"}
```

A generic webhook 200/202 without that receipt does not count as acceptance.
The receiver must issue the receipt **after** durable storage, not before an
in-memory task is queued. Verify this contract before configuring it as the
only destination. Provider acceptance is not proof of email delivery or human
follow-up; monitor the configured provider's queue, bounces and sales inbox.

The courtesy auto-reply is attempted only after operator acceptance. Its failure
does not turn accepted intake into a user-visible failure, and its success alone
cannot acknowledge a lead. If every destination is unavailable, unconfigured or
unconfirmed, the route returns 503 with an uncertain-receipt message and does
not send a confirmation. Each provider request is bounded to four seconds;
requests are not automatically retried because a lost response may follow a
successful provider commit. Visitors should contact the team before repeating
an uncertain submission. Partial fan-out success returns success; a later manual
resubmission can still duplicate records. This is not exactly-once delivery.

The site has **no local durable outbox**. It delegates accepted intake to the
configured provider/receiver; server logs contain only generic event/channel
names and are not a lead store. If guaranteed outage-time intake or automatic
reconciliation is required, choose and provision a durable store/queue and add
stable submission IDs and an operator reconciliation flow before enabling it.
No filesystem queue is used because serverless local disks are not durable.

Before releasing this change, test each configured destination with an approved
test contact, verify its provider-side record and owner notification, then test
an outage and recovery. Existing webhook-only deployments must implement the
receipt contract or configure a verified team email/HubSpot destination first.
`npm test` uses mocked providers and does not send email or write live contacts.
The isolated review branch is excluded from Vercel Git deployments in
`vercel.json`; this does not authorize deployment of the default branch.

## Business collateral

Sales, legal, and marketing templates live in `business/`:

```
business/
  proposal-template.md          # Client proposal (Idea to Operations framework)
  sow-template.md               # Statement of Work
  msa-template.md               # Master Services Agreement (have a lawyer review)
  discovery-call-script.md      # Sales discovery call guide
  go-to-market-brief.md         # Positioning, ICP, assessment-led funnel, KPIs
  sales-playbook.md             # Pipeline, qualification, objections, funnel math
  pricing-and-packages.md       # Rate card + productized tiers
  marketing/
    linkedin-company-page.md    # LinkedIn page setup copy
    linkedin-launch-posts.md    # 6 ready-to-post launch + thought-leadership posts
    content-calendar.md         # 30-day starter content calendar
    outreach-email-sequence.md  # Warm outreach email sequence
  finance/
    financial-model.md          # Illustrative 3-year model
    unit-economics-and-kpis.md  # The metrics that drive services-firm value
    sellability-and-valuation.md# M&A readiness guide
```

## SEO

- Per-page `metadata` (titles, descriptions, keywords)
- `ProfessionalService` / `LocalBusiness` JSON-LD in the root layout
- `sitemap.xml` and `robots.txt` generated automatically
- Semantic headings, skip-to-content link, and accessible focus states

## Deployment (Vercel)

1. Push to GitHub (this repo).
2. Import the project in Vercel.
3. Set environment variables (e.g. `CONTACT_WEBHOOK_URL`).
4. Deploy — no extra build config needed.

## Roadmap (from the blueprint)

- Connect Insights to a headless CMS or MDX
- Add Google Analytics / PostHog
- Per-page case study and insight detail routes
- Careers, Partners, and Client Portal sections

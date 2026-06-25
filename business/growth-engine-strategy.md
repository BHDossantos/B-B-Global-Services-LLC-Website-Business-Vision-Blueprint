# Growth Engine Strategy

**B&B Global Services LLC** — *From Idea to Operations*

The master growth and sales strategy for B&B's first 18 months. It builds on three documents — the **Go-to-Market Brief** (the positioning wedge and ICP), the **Sales Playbook** (the pipeline and funnel math), and the **Pricing & Packages** rate card (what we sell and for how much) — and turns them into a ranked, tactical operating system: where leads come from, how they're worked, what to say, what's compliant, and what to measure week over week. Read those three first; this document does not repeat them, it operationalizes them.

> **Executive summary.** For a founder-led mid-market tech-services firm, the fastest, most durable path to revenue is *land-and-expand led by assessments, ignited by the warm network, and compounded by recurring revenue.* B&B already has the hard part built — seven productized service pillars, eight industry pages, an AI Readiness Assessment, a free Technology Health Check lead magnet, an ROI/downtime calculator, fourteen SEO articles, region pages, and a lead-scoring contact form. The missing piece is a deliberate demand engine. This strategy ranks the channels by realistic ROI for a one-founder firm (warm network and referrals first; LinkedIn and partnerships second; compliant cold email and events third; SEO compounding underneath), defines an offer ladder that walks every prospect from a free 30-minute review to a recurring retainer, and gives concrete multi-touch sequences, compliance guardrails, pipeline math, KPIs, and a 30/60/90-day plan to first clients. The single number that governs everything: **~10 quality leads → 5 discovery calls → ~1.5 paid assessments per month**, defended by two ratios — assessment conversion and land-to-expand.

---

## 1. The Growth Thesis

**One sentence:** *Open every relationship with a low-risk assessment, source those relationships from warm trust before cold volume, and convert delivered projects into recurring revenue that compounds into a durable, founder-independent business.*

Three forces make this the highest-leverage path for B&B specifically:

1. **Assessments are the wedge that de-risks a small, newer firm.** A buyer will not hand a six-figure modernization to an unproven partner — but they *will* approve a $5K–$15K Technology Health Check, or a free 30-minute review, because the downside is bounded and the output (a prioritized 90-day roadmap) is useful even if they never hire B&B again. The paid assessment pre-qualifies the buyer, funds discovery, and makes the implementation proposal a continuation rather than a cold pitch. **The assessment is the single most important asset in the funnel** — protect its conversion rate above all.

2. **Warm-first sourcing beats cold volume by an order of magnitude for a founder.** Bruno's past colleagues, former clients, and the relationships behind B&B's case studies (observability, cloud/CI-CD modernization, DevSecOps, data-platform reliability, BCDR) are the warmest, highest-converting pipeline available — and they cost nothing but time. A founder-led firm cannot out-spend anyone on paid acquisition; it can out-*trust* everyone in its network. Cold channels are additive, not primary, until the warm well runs dry.

3. **Recurring revenue is the compounding engine and the only thing that de-risks the founder.** One-off projects reset the sales effort to zero every quarter. Managed support, BCDR retainers, SRE/reliability ownership, application maintenance, and fractional CTO retainers convert episodic wins into a baseline that grows month over month — the stability metric that justifies the first hire and makes the firm worth more than its founder's calendar. **Every project must propose its operate/recover phase as part of the close.**

The corollary is focus: per the Go-to-Market Brief, B&B *leads narrow* with the **Cloud/DevOps/SRE + Reliability/BCDR** wedge (deepest founder proof, acute board-visible pain, naturally recurring) and *expands broad* into the other five pillars as the assessment pulls them in. Growth tactics in this document are tuned to that wedge first.

---

## 2. Channel Strategy, Ranked by ROI

Ranked by **realistic return on a founder's scarce hours**, not by reach. The first three channels should consume ~80% of selling time in the first 6 months.

| Rank | Channel | Why it ranks here | Effort | Time to first deal |
|---|---|---|---|---|
| 1 | Warm network / referrals | Highest trust, highest conversion, zero cost | Low–Med | Weeks |
| 2 | LinkedIn outbound + content | Founder's brand is the asset; buyers are there | Med | 1–3 months |
| 3 | Strategic partnerships | One relationship seeds many deals; compounding | Med–High | 1–4 months |
| 4 | Compliant cold email | Scalable, but trust-cold; needs assessment offer + discipline | Med | 1–3 months |
| 5 | SEO / content (already built) | Compounding, passive, low-cost; slow to mature | Low (built) | 3–9 months |
| 6 | Local / industry networking & events | Strong for regional trust; time-expensive per lead | Med–High | 1–6 months |
| 7 | Marketplace / freelance-to-anchor | Fast cash + proof; weak on margin and recurring | Med | Days–weeks |

### 2a. Warm network / referrals — *rank 1*

- **Play.** Systematically re-contact every former colleague, client, manager, and vendor. Treat the case-study relationships as referral seeds. At the close of *every* successful engagement, ask for exactly one specific introduction: *"Who do you know with the same release/reliability problem we just fixed?"* — specificity converts; "let me know if you think of anyone" does not.
- **Offer to lead with.** A **free 30-minute technology review** (the door-opener to the paid Health Check). No-ask reconnection first, useful offer second.
- **Cadence.** Reactivate 10–15 dormant relationships per week until the list is exhausted; then one referral ask per closed engagement, logged in the CRM as a task.
- **Effort.** Low–Medium. The reactivation sequence already exists in `business/marketing/outreach-email-sequence.md` — use it verbatim, personalized.
- **Tactic that pays off most:** build a "Referral Partner" tier of 5–10 people who repeatedly refer (former bosses, the partner bench, a friendly accountant) and stay top-of-mind with them quarterly, not just when you need work.

### 2b. LinkedIn outbound + content — *rank 2*

- **Play (two motions, run together).**
  - *Content:* Bruno posts 2–3x/week from the personal profile (linkedin.com/in/brunodssantos). Repurpose the 14 existing Insights articles into short, opinionated posts — "Why most companies have a delivery problem, not a technology problem," "A recovery plan you've never tested is a guess," "When to hire a fractional CTO." Each post ends with a soft CTA to the relevant lead magnet (Health Check, AI Readiness, ROI calculator).
  - *Outbound:* 5–10 personalized connection requests/day to in-ICP titles (see §3), no pitch in the request. After they accept and engage, open a value-first conversation (the LinkedIn sequence in §5), never a pitch-on-connect.
- **Offer to lead with.** The **free Technology Health Check / 30-min review** for outbound; the **ROI/Downtime calculator** and **AI Readiness Assessment** as content magnets.
- **Cadence.** Daily: 5–10 connects + 15 min of commenting on prospects' posts. Weekly: 2–3 original posts. The comment time matters as much as the posting — visibility before outreach warms the response.
- **Effort.** Medium. The compounding asset is the founder's profile; treat it as the firm's most important marketing property.

### 2c. Strategic partnerships — *rank 3 (highest long-term leverage)*

- **Play.** Build reciprocal referral relationships with adjacent providers whose clients hit problems *above their depth*:
  - **MSPs / break-fix IT shops** — refer up the modernization, cloud, and reliability work they can't do; refer high-volume service desk back to them. Natural, non-competitive.
  - **Accountants & law firms** — they sit on the trust relationship with SMB owners and hear about pain (an audit, an office move, a breach) early. A warm intro from a trusted CPA is gold.
  - **Private equity firms** — *the single highest-leverage channel.* One relationship seeds multiple portfolio-company engagements: tech due diligence at deal time, then modernization/security/BCDR value-creation across the hold. Lead with a productized **Technology Due Diligence** offer and a repeatable portfolio playbook.
  - **Cloud vendors (AWS / Azure / GCP) & ISV partner programs** — join partner programs; cloud reps refer implementation work and sometimes fund migrations/POCs. Get listed; attend partner events.
- **Offer to lead with.** For PE: **Technology Due Diligence + value-creation playbook.** For MSPs/CPAs: a **co-branded Health Check** with a referral fee or reciprocal arrangement. For cloud vendors: **cloud assessment + migration**.
- **Cadence.** Identify and approach 2–3 prospective partners per month; nurture the productive ones quarterly. Make it explicitly reciprocal — send them work too.
- **Effort.** Medium–High to start, then compounding. Prioritize PE relationships above all other partnership types.

### 2d. Compliant cold email — *rank 4*

- **Play.** Tightly targeted, value-first, assessment-led — never spray-and-pray. Pair every cold email with a matching LinkedIn touch (see §5 multi-channel sequence). Lead with a relevant trigger event (§3) and a useful offer, not a product pitch.
- **Offer to lead with.** The **free 30-minute review** or, for warmer/triggered prospects, a **fixed-scope Health Check**. Mention the ROI/downtime calculator as a no-commitment value hook.
- **Cadence.** 4–6 touch sequence over ~3 weeks; 20–40 *new* prospects per week once the domain is warmed (see §6 for sending limits). Stop the instant someone replies.
- **Effort.** Medium. The repo's built-in **outreach CLI agent (`scripts/outreach`)** automates compliant, personalized sends + scheduled follow-ups via Resend (see §9) — use it to run sequences without manual tracking.
- **Non-negotiable:** §6 compliance rules apply to every send. Cold B2B email is legal when done right and reputation-destroying when done wrong.

### 2e. SEO / content — *rank 5 (already built, compounds passively)*

- **Play.** The asset is live: 14 SEO articles, 8 industry pages, region pages, AI Readiness page. The job now is *maintenance and conversion*, not creation. Ensure every article funnels to a CTA (Health Check, AI Readiness, ROI calculator). Add one new article/month on a high-intent, low-competition query tied to the lead pillar ("SRE for mid-market," "BCDR readiness checklist," "cloud cost optimization audit").
- **Offer to lead with.** Whichever lead magnet matches the article's intent.
- **Cadence.** 1 new/refreshed article per month; quarterly review of which pages convert and double down.
- **Effort.** Low (mostly built). Returns mature in 3–9 months — let it compound in the background while channels 1–4 carry near-term revenue.

### 2f. Local / industry networking & events — *rank 6*

- **Play.** New Hampshire and Greater Boston tech, founder, and professional-services networks. Target a *small number of high-signal rooms* — founder meetups, a regional CIO/CISO group, industry associations for the priority verticals — rather than every chamber-of-commerce mixer. Speak where possible (a 20-minute "BCDR that actually works" talk builds more authority than 50 handshakes).
- **Offer to lead with.** The **free review** + the calculator as a tangible takeaway.
- **Cadence.** 1–2 targeted events/month. Follow up within 24 hours via LinkedIn + the warm sequence.
- **Effort.** Medium–High per lead. Best treated as a brand/trust investment in the home region, not a volume channel.

### 2g. Marketplace / freelance-to-anchor-client — *rank 7*

- **Play.** Use selective freelance/marketplace work (Upwork, Toptal, Contra, Clutch listing) to land a first *anchor* engagement that becomes a case study and a reference, then expand it via the offer ladder into project + retainer. Filter hard for in-ICP clients; decline commodity break-fix.
- **Offer to lead with.** A scoped **assessment or MVP** that can grow, not a one-off task.
- **Cadence.** Opportunistic; cap the time spent so it doesn't crowd out higher-margin channels.
- **Effort.** Medium. Fast cash and proof, but low margin and weak on recurring — a bridge, not a destination.

---

## 3. ICP & Targeting

### Firmographics (from the Go-to-Market Brief, sharpened)

| Attribute | Target |
|---|---|
| Employee count | 25–500 (sweet spot 50–300); vision serves up to 5,000 |
| Revenue | ~$5M–$250M |
| Stage | Scaling past first growth; legacy-modernizing; post-funding; PE-owned |
| Geography | New Hampshire & Greater Boston first; remote-friendly US/global |
| Tech footprint | Real, business-critical cloud/app/data systems under strain |
| Budget signal | Can approve a $5K–$15K assessment without a procurement cycle |
| Buyer titles | Founder/CEO, COO, VP/Director of Engineering, Head of IT, CISO; PE Operating Partner |

### The 8 target industries (and the wedge for each)

| Industry | Lead pain → lead offer |
|---|---|
| SaaS & Technology | Slow/risky releases, on-call immaturity → CI/CD + SRE |
| Financial Services / Fintech | Compliance + uptime → DevSecOps, BCDR, SOC 2 readiness |
| Healthcare | HIPAA + downtime affecting care → security + reliability/DR |
| Professional Services | Manual workflows, confidential data, IT chaos → managed IT + automation + fractional CTO |
| Real Estate & Property Mgmt | Disconnected multi-site systems → portals, integrations, multi-site support |
| Hospitality | Guest-facing systems that can't go down → reliability + on-site managed support |
| Small & Mid-Sized Business | Outgrown basic IT, multiple vendors → one integrated partner (Health Check) |
| Private Equity portfolio cos | Tech risk at diligence + value creation in hold → due diligence + modernization playbook |

### Trigger events — the buyers signaling *now* (and where to find them)

| Trigger | Why it signals a buyer | Where to spot it |
|---|---|---|
| **New funding round** | Budget + mandate to scale tech | Crunchbase, PitchBook, LinkedIn "we raised," local biz journals |
| **New CTO / VP Eng / Head of IT** | New leader wants an assessment & quick wins | LinkedIn job-change alerts, company news |
| **Security breach / incident** | Acute, board-visible pain | News, breach disclosures, regulator filings |
| **Cloud cost pain** | Runaway bill → optimization mandate | LinkedIn posts, job ads for "FinOps," earnings/board chatter |
| **M&A / PE acquisition** | Due diligence + integration need | PitchBook, PE firm announcements, deal news |
| **AI initiative / "do something with AI"** | Pressure with no plan → AI Readiness Assessment | LinkedIn posts, job ads for AI roles, exec interviews |
| **Hiring eng/IT roles** | Capacity gap; can't hire fast enough | LinkedIn Jobs, Indeed, careers pages |
| **Office move / rapid headcount growth** | IMAC + managed-IT need | LinkedIn, commercial real estate news, headcount on LinkedIn |
| **Upcoming audit / compliance push (SOC 2, HIPAA, PCI)** | Deadline-driven readiness spend | Job ads for "compliance," RFPs, industry signals |

**Targeting workflow:** maintain a living list of 100–200 in-ICP accounts. Set LinkedIn Sales Navigator alerts on job changes and funding for those accounts. When a trigger fires, the account jumps the queue and gets a *trigger-personalized* first touch ("congrats on the raise / the new role — here's a useful 30-minute review for exactly this moment").

---

## 4. The Offer Ladder

Every prospect should be walked up this ladder. Each rung maps to a live CTA on the site so the website *is* the conversion mechanism.

| Rung | Offer | Price | On-site CTA | Purpose |
|---|---|---|---|---|
| 0 | **Free lead magnets** — Technology Health Check (free review), AI Readiness Assessment, ROI/Downtime Calculator | Free | `/contact` form, AI Readiness page, calculator | Capture + qualify; lead-scoring routes hot leads |
| 1 | **Paid Technology Health Check** | $5,000–$15,000 | "Book a Consultation" → `/contact` (per `siteConfig.bookingUrl`) | Low-risk land; 90-day roadmap; surfaces real scope |
| 2 | **Assessment (Cloud / Resilience / Security / Data & AI)** | $7,500–$40,000 | Service pillar pages → `/contact` | Convert findings into a budgeted plan |
| 3 | **Implementation project** (CI/CD, BCDR, modernization, MVP, DevSecOps) | $15,000–$300,000+ | Service & Solutions pages → `/contact` | Core revenue; the build |
| 4 | **Retainer / managed services** (Managed Support, BCDR retainer, SRE ownership, app maintenance, fractional CTO) | $1,500–$25,000/mo | `/pricing` + close of every project | Recurring revenue — the compounding engine |
| 5 | **Expansion** (cross-pillar + referrals) | Varies | Account review + referral ask | Grow the account; seed the next one |

**Governing rule:** the free magnet (rung 0) and the Health Check (rung 1) carry the entire top of funnel because they convert a cold or warm contact into a paying, qualified relationship. **Every implementation proposal (rung 3) must carry a rung-4 retainer as part of the close** — "no hand-off into a vacuum." The free 30-minute review is the workhorse CTA in all outbound; the paid Health Check is the workhorse *first sale*.

---

## 5. Multi-Channel Outreach Sequences

Two sequences. **Cold** (combining email + LinkedIn, for triggered/targeted prospects) and **Warm reactivation** (which already exists as the 4-email sequence in `business/marketing/outreach-email-sequence.md` — summarized here for completeness, do not duplicate that file). Both are **value-first and assessment-led**. Stop the moment someone replies and move to a real conversation.

### 5a. Cold sequence — 6 touches over ~18 business days (email + LinkedIn)

Personalize every touch with a trigger event (§3) or a specific, researched observation. Generic = ignored.

| Day | Channel | Touch | Core message |
|---|---|---|---|
| 0 | LinkedIn | Connection request (no pitch) | Brief, relevant: shared industry / their post / the trigger. |
| 2 | Email 1 | **The trigger open** | One line on the trigger ("saw you just raised / hired a VP Eng / are growing the office"), one line of relevant insight, soft offer of a free 30-min review. No hard ask. |
| 5 | LinkedIn | Engage, don't pitch | Like/comment thoughtfully on their content; light touch to stay visible. |
| 7 | Email 2 | **The value drop** | Share something genuinely useful — the ROI/downtime calculator, a relevant Insights article, or a 2-line observation specific to their stack/industry. Still soft. |
| 12 | Email 3 | **The specific offer** | Name the likely pain mapped to a pillar; offer the free review or a fixed-scope Health Check; one clear CTA (book via `/contact`). |
| 18 | Email 4 | **The graceful close** | "I'll stop here — if reliability/releases/security ever rise to the top of your list, the door's open." Leaves a positive last impression; many replies come here. |

Cadence rules: ~3–4 business days between touches; plain text, no images or tracking pixels; one clear CTA per email; always a working unsubscribe (see §6). Run via the `scripts/outreach` CLI agent so follow-ups fire automatically and stop on reply.

### 5b. Warm reactivation — 4 emails (already authored)

Per `business/marketing/outreach-email-sequence.md`: **Email 1 – Reconnect (Day 0)** no-ask hello + news; **Email 2 – Useful (Day ~4)** share something genuinely helpful; **Email 3 – Soft offer (Day ~8)** free 30-min review; **Email 4 – Graceful close (Day ~12)**. Warm, brief, relationship-first; send from a personal-looking address ("Bruno at B&B Global Services"). This is the **rank-1 channel** — work it first and hardest.

---

## 6. Compliance & Deliverability — *Non-Negotiable*

Cold B2B email is legal and effective only when done to the letter. One spam complaint spike can blacklist the sending domain and kill the channel. Treat every rule below as mandatory.

### Legal essentials

| Regime | Applies to | Hard requirements |
|---|---|---|
| **CAN-SPAM (US)** | All US commercial email | No false/misleading headers or subject lines; identify the message as an outreach; include a valid **physical postal address**; provide a clear **opt-out**; honor opt-outs within **10 business days**. No opt-in required for B2B. |
| **CASL (Canada)** | Recipients in Canada | Stricter — generally requires **consent** (express or implied via existing business relationship); clear sender identification; functioning unsubscribe. When in doubt, only email Canadian prospects with a plausible existing-business-relationship basis. |
| **GDPR / UK GDPR (EU/UK)** | EU/UK recipients | Need a **lawful basis** (legitimate interest for B2B, documented); honor **opt-out / erasure**; name the data controller; keep processing records. Corporate-role addresses get more latitude than personal ones, but document the legitimate-interest assessment. |

**Practical rule:** lead with the warmest, US-based, in-ICP prospects where CAN-SPAM compliance is straightforward. Email Canadian and EU/UK prospects only with a defensible consent/legitimate-interest basis. Every email includes: a real reply-to, B&B's NH physical address, accurate "from," and a one-click unsubscribe.

### Deliverability hygiene (protects the sending reputation)

- **Authenticate the domain:** set up **SPF, DKIM, and DMARC** before any outbound. Resend (the contact-form sender) supports DKIM/SPF — configure them.
- **Consider a separate sending domain/subdomain** for cold outreach (e.g. a `.net` variant) so a reputation problem never touches the primary transactional domain used by the contact form.
- **Warm up the domain:** start at ~10–20 sends/day, ramp ~20–30% per week over 4–6 weeks to a steady state. Never blast a cold domain on day one.
- **Sending limits at steady state:** keep cold volume modest — ~20–40 new prospects/day from a warmed domain. Volume is not the goal; reply rate is.
- **List hygiene:** verify addresses before sending (bounce rate < 2%); remove role-account catch-alls that bounce; never buy scraped lists; suppress anyone who unsubscribes, replies negatively, or bounces — permanently and immediately.
- **Unsubscribe handling:** automatic, immediate, and irreversible. Maintain a global suppression list checked before every send. The `scripts/outreach` CLI agent should enforce suppression and append the unsubscribe + postal address to every message.
- **Monitor:** watch bounce rate, spam-complaint rate (keep < 0.1%), and reply rate. If complaints climb, pause and clean the list — reputation is the asset.

---

## 7. Metrics & Weekly Operating Cadence

### Pipeline math (from the Sales Playbook, restated as the operating target)

To hit **~$500K year-one bookings**, walking backwards from ~7 implementation closes:

| Stage | Conversion | Monthly volume (steady state) |
|---|---|---|
| Leads (calls bookable from outreach/referral) | — | ~10 |
| Qualified discovery calls | ~50% of leads | ~5 |
| Paid assessments | ~30% of calls | ~1.5 |
| Implementation proposals | ~80% of assessments | ~1.2 |
| Implementation closes | ~50% of proposals | ~0.6 |
| Retainers added | ~50% of closes | recurring, compounding |

That sustains ~7 implementation closes + ~17 assessments + 3–4 retainers across the year — comfortably clearing $500K when assessment and retainer revenue are added. **The whole machine runs on ~10 quality leads and 5 discovery calls per month.**

### KPIs to watch

**Primary (defend these two ratios above all):**
1. **Assessment conversion** — qualified discovery calls → paid assessment. *Target 30%+.* The engine of the funnel.
2. **Land-to-expand** — assessments → implementation or retainer within 90 days. *Target 50%+.* Where the firm becomes profitable and durable.
3. **MRR** — total recurring from retainers. The stability metric that de-risks the founder.

**Supporting:** qualified leads/month, discovery calls/month, average contract value, proposal→close rate, gross margin by engagement type, channel-attributed pipeline (which channel sourced each deal), cold-email reply rate, LinkedIn connect-accept and reply rates.

### Weekly operating cadence (the founder's sales routine)

| Day | Focus |
|---|---|
| **Monday** | Pipeline review against the 3 primary KPIs; set the week's lead and call targets; queue outreach. |
| **Tue–Thu** | Block mornings for *selling* — discovery calls, proposals, follow-ups. Afternoons: outreach (warm reactivation, LinkedIn connects + comments, cold sequence sends via the CLI agent). |
| **Daily** | 5–10 LinkedIn connects + 15 min commenting; send all call recaps within 24 hours; advance no deal without its exit criterion met. |
| **Friday** | 2–3 LinkedIn posts queued; one partnership touch; CRM hygiene (every deal logged at its stage); ask for one referral from any recent happy client. |
| **Monthly** | One new/refreshed SEO article; review channel attribution and double down on what's sourcing pipeline; re-rank the 100–200 account list by fresh triggers. |

---

## 8. 30 / 60 / 90-Day Execution Plan

Builds on the existing 90-day launch plan. Goal: **first 2–3 paying clients and a warm pipeline by day 90.**

### Days 1–30 — Foundation + warm ignition
- **Stand up the demand stack:** CRM, scheduling link (set `siteConfig.calendlyUrl`), Resend domain auth (SPF/DKIM/DMARC), separate cold-sending subdomain, suppression list, the `scripts/outreach` CLI agent configured and tested.
- **Build the lists:** dump the entire warm network (former colleagues, clients, vendors, case-study contacts) into the CRM; build the first 100 in-ICP cold accounts with trigger alerts in LinkedIn Sales Navigator.
- **Fire the warm sequence:** start the 4-email reactivation to 10–15 dormant contacts/week. This is where the first calls come from.
- **Activate LinkedIn:** optimize Bruno's profile around the wedge; begin daily connects + commenting; publish the first 3 posts repurposed from Insights.
- **Approach first partners:** identify 3 PE firms, 2 MSPs, 1–2 friendly CPAs/law firms; open reciprocal conversations.
- **Target by day 30:** 5+ discovery calls booked; 1 paid Health Check or free review in progress.

### Days 31–60 — Convert + add cold
- **Convert calls to assessments:** run discovery, recommend the Health Check or a free review; aim for the first 1–2 paid assessments.
- **Launch cold sequence:** with the domain warmed, begin the 6-touch email+LinkedIn cold sequence to 20–30 triggered prospects/week. Stop on reply.
- **Deepen partnerships:** present the PE due-diligence playbook; formalize one MSP/CPA referral arrangement.
- **Publish:** continue 2–3 LinkedIn posts/week; ship one new SEO article tied to the wedge.
- **Target by day 60:** 1–2 paid assessments delivered/in flight; first implementation proposal out; 8–10 qualified leads in pipeline.

### Days 61–90 — Close + recur
- **Close the first implementation(s)** from delivered assessments; **attach a retainer to every close** (managed support, BCDR, SRE, or fractional CTO).
- **Bank the proof:** turn the first delivered engagement into a case study and a reference; request the first referral.
- **Tune the engine:** review channel attribution; double down on whichever of warm/LinkedIn/partnerships/cold is producing pipeline; defend assessment-conversion and land-to-expand ratios.
- **Target by day 90:** 2–3 paying clients; first MRR on the books; a repeatable weekly cadence running; a warm pipeline of 15–20 qualified leads.

---

## 9. Tooling Stack

Lean and affordable — total well under a few hundred dollars/month to start. Don't over-tool; the founder's time is the bottleneck, not the software.

| Need | Recommendation | Notes |
|---|---|---|
| **CRM** | HubSpot Free or Pipedrive (~$15–30/seat/mo) | The contact form already supports `HUBSPOT_*` forwarding — wire leads straight in. Log every deal at its stage with its exit criterion. |
| **Transactional + outreach email** | **Resend** | Already integrated in the site (`app/api/contact/route.ts`, `/api/subscribe`). Auth SPF/DKIM/DMARC; use a separate subdomain for cold. |
| **Built-in outreach automation** | **`scripts/outreach` CLI agent (in this repo)** | Sends compliant, personalized cold + warm emails and scheduled follow-ups via Resend; enforces suppression/unsubscribe and stops sequences on reply. The engine behind the §5 sequences. |
| **LinkedIn outbound + prospecting** | LinkedIn Sales Navigator (~$99/mo) | Job-change & funding alerts on the account list; saved searches by title/industry/geo. Optionally a light, ToS-respectful engagement tool — but keep it compliant. |
| **Scheduling** | Calendly (free/$10) | Set the link in `siteConfig.calendlyUrl` so "Book a Consultation" routes to a real calendar, not just the form. |
| **Enrichment / verification** | Apollo.io or Clearbit (free–$49/mo) + a verifier (NeverBounce/ZeroBounce) | Find/verify in-ICP contacts; keep bounce rate < 2%. Never buy scraped lists. |
| **Analytics** | Vercel Analytics (already installed) | Track which CTAs and articles convert; feed channel attribution. |

**Stack principle:** the website (lead-scoring contact form, lead magnets, calculators, AI Readiness page, Insights) is already the conversion layer — the new spend is purely the *demand* layer (CRM + Sales Navigator + scheduling + enrichment), all of which the repo's existing Resend integration and `scripts/outreach` agent already complement. Start minimal, add only when a tool removes a real bottleneck.

---

**B&B Global Services LLC** · New Hampshire · Boston, MA
[hello@bnbglobal.net](mailto:hello@bnbglobal.net) · +1 (603) 930-8272 · [bnbglobal.net](https://bnbglobal.net)

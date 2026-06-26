# LinkedIn Outreach Kit

Ready-to-use LinkedIn templates and a connection cadence that pairs with the
email outreach agent (`scripts/outreach`). LinkedIn + email together convert
far better than either alone — this kit is built to run in lockstep with the
5-touch email sequence.

> **Voice:** warm, peer-to-peer, specific, never salesy. You are Bruno, founder
> of B&B Global Services — a global technology partner (Boston + Rome) for
> mid-market companies that have outgrown basic IT but aren't ready for a giant
> consulting firm. Lead with *them*, make one easy ask, no pitch-slapping.

Placeholders: `[First]`, `[Company]`, `[role]`, `[industry]`, `[mutual]`,
`[specific observation]`. Replace every one — generic = ignored.

---

## The multi-channel cadence (pairs with the email agent)

| Day | Channel | Action |
|---|---|---|
| 0 | LinkedIn | Send connection request (note below) |
| 0–1 | Email | Email #1 (the agent's first touch) |
| 2 | LinkedIn | If connected: like/comment on a recent post of theirs |
| 3 | Email | Email follow-up #1 (agent) |
| 4 | LinkedIn | If connected, no reply: DM #1 (soft value) |
| 8 | Email | Email follow-up #2 (agent) |
| 10 | LinkedIn | DM #2 (different angle / resource) |
| 15 | Email | Email follow-up #3 (agent) |
| 20 | LinkedIn | DM #3 (gracious break-up) |

Keep it human: skip a touch if they engage, and **always stop the moment they
reply** (`npm run outreach -- reply --email <them>`).

---

## Connection requests (≤ 300 characters)

**A — Shared context / mutual**
> Hi [First] — we're both connected to [mutual] and I work with [industry] teams on cloud, security, and delivery. Would be glad to connect and follow what you're building at [Company].

**B — Role-relevant**
> Hi [First] — I help [industry] companies turn technology from idea to reliable operations (cloud, security, AI, managed services). Your work at [Company] caught my eye — would love to connect.

**C — Content/trigger-based**
> Hi [First] — saw [Company] is [specific observation: hiring/expanding/launching]. I run a tech delivery firm that helps teams scale without the chaos. Would be great to connect.

**D — No-note (often higher accept rate)**
> *(Send with no note — clean profile + a relevant headline does the work.)*

---

## DM #1 — soft value (Day 4, after connecting, no reply)

> Thanks for connecting, [First]. No pitch — I just work with a lot of [industry] teams and the same theme keeps coming up: they've outgrown basic IT but a big consulting firm is slow and overpriced.
>
> If it's ever useful, we have a free 2-minute Technology Health Check that scores where you stand (strategy, cloud, security, reliability, support): bnbglobal.net/assessment
>
> Either way, glad to be connected.

## DM #2 — different angle (Day 10)

> Hey [First] — one more thought. If AI or data is on your radar this year, we run a free AI Readiness Assessment that cuts through the hype and finds the use cases with real ROI: bnbglobal.net/ai-readiness
>
> Happy to share what we're seeing work for [industry] companies — worth a quick 15 minutes?

## DM #3 — gracious break-up (Day 20)

> [First], I'll stop crowding your inbox — totally understand timing isn't always right. If improving cloud, security, or reliability ever moves up the list, I'm a message away, and the free assessments are always open. Wishing you and the [Company] team the best.

---

## Warm-network reactivation (former colleagues / past contacts)

**Connection note / opener**
> [First]! It's been too long. I started B&B Global Services — we help companies design, build, secure, and run their technology end to end. Would love to catch up and hear what you're working on these days.

**Follow-up DM**
> Great to reconnect, [First]. Quick one: if your team (or anyone in your network) is wrestling with cloud, security, reliability, or just needs senior technical help without hiring a full department, I'd love to help — even just as a sounding board. And if you know someone who'd benefit, an intro means a lot. Either way, let's grab a virtual coffee soon.

---

## Content engagement plays (warm the audience before you reach out)

- **Comment, don't just like.** One thoughtful comment on a prospect's post does more than 10 cold DMs. Add a real insight, not "Great post!"
- **Post 2–3x/week** from `business/marketing/linkedin-launch-posts.md` + the content calendar. Outreach lands far better when your profile shows you know your stuff.
- **Reshare a relevant article** from bnbglobal.net/insights with a one-line take tied to the prospect's world.
- **Profile = landing page.** Headline states the outcome ("I help mid-market companies take technology from idea to operations — cloud, security, AI, managed services"). Featured section links the free Health Check.

---

## Rules that keep it working

- **Personalize the first line, always.** If you can't say something specific about them, you're not ready to send.
- **One ask per message.** Reply, a 15-min call, or try a free assessment — never all three.
- **Respect limits.** Stay well under ~20–25 connection requests/day to protect your account; quality over volume.
- **No automation tools that violate LinkedIn's ToS.** Manual or compliant tools only — your account is the asset.
- **Track it.** Log LinkedIn touches as notes on the prospect in the outreach agent so email + LinkedIn stay coordinated.
- **Always lead with value, stop on reply, and keep it human.**

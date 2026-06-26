// Per-service FAQs, rendered as an accordion + FAQPage JSON-LD on each service
// pillar page. Answers common buyer objections (good for conversion) and
// targets long-tail / "People also ask" search results (good for SEO).

type FAQ = { question: string; answer: string };

export const serviceFaqs: Record<string, FAQ[]> = {
  "strategy-advisory": [
    {
      question: "What does a fractional CTO actually do for us?",
      answer:
        "A fractional CTO gives you senior technology leadership part-time: setting strategy and roadmap, making architecture and vendor decisions, leading delivery, and translating technology into business outcomes — at a fraction of the cost of a full-time hire, and without a long recruiting cycle.",
    },
    {
      question: "How long does a technology assessment take?",
      answer:
        "Most assessments run a few weeks depending on scope and access. You leave with a current-state review, prioritized recommendations, a future-state architecture, and a 90-day roadmap you can act on immediately — with or without us.",
    },
    {
      question: "Do you only advise, or do you also implement?",
      answer:
        "Both. Unlike advisory-only firms, we can take the roadmap straight into delivery — build, secure, deploy, and operate it — so there's no hand-off gap between strategy and execution.",
    },
    {
      question: "Is this useful if we already have an internal IT team?",
      answer:
        "Yes. We frequently complement internal teams — adding senior leadership, an objective assessment, or capacity for initiatives the team doesn't have time for — rather than replacing them.",
    },
  ],
  "application-development": [
    {
      question: "Can you build an MVP and then keep improving it?",
      answer:
        "Yes. We take products from discovery and design through MVP, launch, and ongoing maintenance. You get a working product fast, then a clear path to iterate based on real usage — with the same team that built it.",
    },
    {
      question: "Do you build web apps, mobile apps, or both?",
      answer:
        "Both, plus SaaS platforms, internal tools, customer portals, APIs, integrations, and AI-enabled applications. We pick the right architecture and stack for your goals rather than forcing a one-size-fits-all approach.",
    },
    {
      question: "What happens to the code and IP we pay for?",
      answer:
        "Custom deliverables we build for you are yours — ownership transfers per the engagement agreement. We document everything and provide a clean support handoff so you're never locked in.",
    },
    {
      question: "How do you keep a build on time and on budget?",
      answer:
        "We scope tightly, work in short iterations with regular demos, and ship an MVP early so value is visible quickly. Clear requirements, testing, and release governance keep surprises to a minimum.",
    },
  ],
  "data-analytics-ai": [
    {
      question: "We're not sure AI is right for us — where do we start?",
      answer:
        "Start with a grounded AI Readiness Assessment. We identify the use cases with real ROI, assess your data and governance, and give you a prioritized roadmap — so you invest in what pays off instead of chasing hype.",
    },
    {
      question: "Do we need a big data team or perfect data first?",
      answer:
        "No. Part of our job is meeting you where you are — finding what's usable today and what to improve. Many high-value analytics and AI use cases don't require a perfect data estate to begin.",
    },
    {
      question: "Can you build generative AI features into our product?",
      answer:
        "Yes — from LLM-powered apps and retrieval-augmented assistants to machine learning models and intelligent automation, with human-in-the-loop review, MLOps, and governance so what you ship is reliable and defensible.",
    },
    {
      question: "How do you handle AI safety and data privacy?",
      answer:
        "Responsible AI is built into delivery: data privacy, access controls, model governance, bias and transparency checks, and compliance alignment — so AI earns trust rather than creating risk.",
    },
  ],
  "cloud-devops": [
    {
      question: "Which cloud do you work with — AWS, Azure, or GCP?",
      answer:
        "All three. We're cloud-agnostic and recommend the right platform (or multi-cloud) for your workloads, cost profile, and team — then implement it with infrastructure as code so it's repeatable and well-governed.",
    },
    {
      question: "Can you reduce our cloud bill?",
      answer:
        "Often, yes. A cloud cost assessment typically finds savings through right-sizing, automation, and architecture improvements — without sacrificing performance or reliability. You get a clear optimization report with prioritized actions.",
    },
    {
      question: "What does a CI/CD implementation include?",
      answer:
        "Automated build, test, and deployment pipelines; infrastructure as code; environment management; security gates; monitoring; and runbooks — so releases go from slow and manual to fast, safe, and repeatable.",
    },
    {
      question: "Will a cloud migration disrupt our business?",
      answer:
        "We plan migrations to minimize disruption — assessing dependencies, sequencing work, testing thoroughly, and cutting over with rollback options. The goal is a modern, automated environment with no nasty surprises.",
    },
  ],
  "devsecops-cybersecurity": [
    {
      question: "How is DevSecOps different from a one-time security audit?",
      answer:
        "An audit is a snapshot; DevSecOps builds security into how you deliver — automated scanning, secrets management, IAM, and security gates in your pipeline — so issues are caught early and continuously, not just once a year.",
    },
    {
      question: "Can you help us get compliance-ready (SOC 2, HIPAA, etc.)?",
      answer:
        "Yes. We run a gap assessment, build a remediation plan and control matrix, implement the technical controls, and assemble the evidence package — so you're prepared for the audit your customers or regulators require.",
    },
    {
      question: "We're worried but don't know where we stand. What now?",
      answer:
        "Start with a security assessment. We review your applications, cloud, identity, and processes, then give you a clear risk register and a prioritized remediation roadmap — so you fix the most important gaps first.",
    },
    {
      question: "Will security slow down our development?",
      answer:
        "Done right, no. Embedding automated, well-tuned security gates actually speeds teams up over time by catching issues early — secure-by-default delivery instead of late-stage surprises.",
    },
  ],
  "reliability-bcdr": [
    {
      question: "What's the difference between reliability and disaster recovery?",
      answer:
        "Reliability keeps systems running well day to day — monitoring, SLOs, and fast incident response. Disaster recovery prepares you to come back quickly when something major fails. We cover both, because uptime and recoverability go together.",
    },
    {
      question: "How do you define RTO and RPO for us?",
      answer:
        "We work with you to set recovery objectives based on business impact — how fast you must recover (RTO) and how much data you can afford to lose (RPO) — then design, document, and test recovery against those targets.",
    },
    {
      question: "Our backups exist but we've never tested recovery. Is that a problem?",
      answer:
        "Yes — an untested backup is a guess. We validate backups, build and rehearse recovery runbooks, and run tabletop exercises so you have a proven, defensible recovery capability, not just hope.",
    },
    {
      question: "Can you improve our incident response and reduce outages?",
      answer:
        "Yes. We implement observability, alerting, on-call runbooks, and SRE practices that cut mean-time-to-detect and resolve, reduce recurring incidents, and give your team clear operational ownership.",
    },
  ],
  "managed-it-imac": [
    {
      question: "What's included in managed technology support?",
      answer:
        "User and device support, IMAC (install, move, add, change), Mac and Windows support, onboarding and offboarding, network and Wi-Fi support, asset management, vendor coordination, and monthly reporting — a reliable, supported workforce without building a full internal IT department.",
    },
    {
      question: "How is your support priced?",
      answer:
        "Engagements are typically monthly and scoped to your team size and systems — per-user support, a small-business support plan, or broader managed operations. We'll recommend the right model after a short conversation.",
    },
    {
      question: "Can you help with an office move or new office setup?",
      answer:
        "Yes — office moves, technology setup, networking, device deployment, and on-site coordination are core IMAC services. We plan and execute so your team is productive on day one.",
    },
    {
      question: "Do you support distributed and remote teams?",
      answer:
        "Absolutely. As a remote-first firm, we support distributed workforces with device provisioning, service desk, and managed operations — wherever your people are.",
    },
  ],
};

export function getServiceFaqs(slug: string): FAQ[] {
  return serviceFaqs[slug] ?? [];
}

// Shared marketing content used across homepage and interior pages.

export const lifecycleFramework = {
  name: "Idea to Operations Framework",
  phases: [
    {
      name: "Discover",
      description:
        "Understand business goals, systems, risks, users, and constraints.",
    },
    {
      name: "Design",
      description:
        "Create the architecture, roadmap, delivery plan, security model, and operating model.",
    },
    {
      name: "Build",
      description:
        "Develop applications, platforms, automations, integrations, and infrastructure.",
    },
    {
      name: "Secure",
      description:
        "Embed DevSecOps, identity, compliance, vulnerability management, and security controls.",
    },
    {
      name: "Deploy",
      description:
        "Implement CI/CD, release governance, cloud deployment, testing, and documentation.",
    },
    {
      name: "Operate",
      description:
        "Provide observability, support, incident management, service desk, managed operations, and continuous improvement.",
    },
    {
      name: "Recover",
      description:
        "Build disaster recovery, business continuity, backup validation, runbooks, tabletop exercises, and recovery testing.",
    },
    {
      name: "Optimize",
      description:
        "Improve performance, cost, reliability, automation, user experience, and business outcomes.",
    },
  ],
};

export const painPoints = [
  "Slow software delivery",
  "Disconnected vendors",
  "Poor documentation",
  "Weak security controls",
  "Manual deployments",
  "Cloud complexity",
  "Lack of disaster recovery",
  "No clear ownership after launch",
  "Poor support experience",
  "Outages and recurring incidents",
];

export const differentiators = [
  "We do not just advise. We build.",
  "We do not just build. We operate.",
  "We do not just operate. We secure and recover.",
  "We understand executive strategy and hands-on engineering.",
  "We bring enterprise-level practices to growing businesses.",
  "We combine consulting, software delivery, cloud, cybersecurity, IMAC, and managed services.",
];

export const featuredSolutions = [
  "Technology Assessment",
  "Application Buildout",
  "AI Readiness Assessment",
  "Cloud Modernization",
  "DevSecOps Implementation",
  "Business Continuity & Disaster Recovery Program",
  "Managed IT Support",
  "Fractional CTO Advisory",
  "Office Technology Setup",
  "Data Platform Reliability Assessment",
];

export const industries = [
  {
    name: "Healthcare",
    description:
      "Secure, compliant technology delivery for clinical and administrative systems.",
    icon: "heart",
  },
  {
    name: "Financial Services",
    description:
      "Reliable, secure platforms with the controls regulated finance demands.",
    icon: "shield",
  },
  {
    name: "SaaS & Technology",
    description:
      "Product engineering, cloud, and reliability for growing software companies.",
    icon: "cloud",
  },
  {
    name: "Professional Services",
    description:
      "Modern applications and managed IT for firms that run on knowledge work.",
    icon: "compass",
  },
  {
    name: "Real Estate & Property Management",
    description:
      "Portals, integrations, and support across distributed properties and teams.",
    icon: "building",
  },
  {
    name: "Hospitality",
    description:
      "Resilient operations and on-site technology for guest-facing businesses.",
    icon: "support",
  },
  {
    name: "Small and Mid-Sized Businesses",
    description:
      "One trusted partner for strategy, build, security, and ongoing support.",
    icon: "users",
  },
  {
    name: "Private Equity Portfolio Companies",
    description:
      "Due diligence, modernization, and value creation across the portfolio.",
    icon: "chart",
  },
];

export const idealCustomers = [
  "Mid-sized companies with 50–5,000 employees",
  "Startups building their first serious platform",
  "Businesses modernizing legacy systems",
  "Companies needing app development plus long-term support",
  "Organizations with cloud, security, or reliability gaps",
  "Private equity firms evaluating or improving portfolio companies",
  "Healthcare and regulated companies needing secure technology delivery",
];

export const caseStudies = [
  {
    slug: "enterprise-observability-transformation",
    title: "Enterprise Observability Transformation",
    industry: "Large healthcare enterprise",
    challenge:
      "Recurring outages and slow incident response across a fragmented monitoring landscape with no single source of truth.",
    approach:
      "Assessed the observability stack, defined SLOs/SLIs, and standardized telemetry, dashboards, and alerting across teams.",
    solution:
      "Implemented unified observability with actionable alerting, on-call runbooks, and an incident management process.",
    outcome:
      "Faster mean-time-to-detect and resolve, fewer customer-impacting incidents, and clearer operational ownership.",
  },
  {
    slug: "cloud-delivery-modernization",
    title: "Cloud Delivery Modernization",
    industry: "Enterprise SaaS organization",
    challenge:
      "Manual deployments and inconsistent environments slowed releases and introduced risk.",
    approach:
      "Designed a cloud-native delivery model with Infrastructure as Code and standardized environments.",
    solution:
      "Built CI/CD pipelines, automated provisioning, and release governance with embedded testing.",
    outcome:
      "Dramatically faster, safer releases and a repeatable path from commit to production.",
  },
  {
    slug: "data-platform-reliability-program",
    title: "Data Platform Reliability Program",
    industry: "Enterprise data organization",
    challenge:
      "Unreliable data pipelines and unclear ownership eroded trust in business-critical reporting.",
    approach:
      "Mapped data flows, defined reliability targets, and instrumented pipelines end to end.",
    solution:
      "Introduced monitoring, data quality checks, and incident processes for the data platform.",
    outcome:
      "Higher pipeline reliability and renewed confidence in data products across the business.",
  },
  {
    slug: "cicd-devsecops-implementation",
    title: "CI/CD and DevSecOps Implementation",
    industry: "Mid-market technology company",
    challenge:
      "Security was a late-stage gate that delayed releases and surfaced issues too late.",
    approach:
      "Embedded security into the delivery pipeline with automated gates and shared ownership.",
    solution:
      "Implemented CI/CD security scanning, secrets management, IAM improvements, and a remediation workflow.",
    outcome:
      "Security findings caught earlier, faster remediation, and releases that ship secure by default.",
  },
  {
    slug: "business-continuity-disaster-recovery-program",
    title: "Business Continuity and Disaster Recovery Program",
    industry: "Regulated services organization",
    challenge:
      "No tested recovery plan and undefined RTO/RPO left the business exposed to disruption.",
    approach:
      "Defined recovery objectives, documented runbooks, and validated backups against real scenarios.",
    solution:
      "Delivered a BCDR program with runbooks, tabletop exercises, and recovery testing cadence.",
    outcome:
      "A tested, defensible recovery capability and executive confidence in resilience.",
  },
  {
    slug: "office-technology-managed-support-setup",
    title: "Office Technology and Managed Support Setup",
    industry: "Growing professional services firm",
    challenge:
      "An office move and headcount growth outpaced ad-hoc IT support and onboarding.",
    approach:
      "Designed a support model, asset process, and office technology standard.",
    solution:
      "Delivered device deployment, IMAC, network setup, service desk, and monthly reporting.",
    outcome:
      "A smooth office move, faster onboarding, and a reliable, supported workforce.",
  },
  {
    slug: "ai-enabled-application-mvp",
    title: "AI-Enabled Application MVP",
    industry: "Mid-market services company",
    challenge:
      "Manual, repetitive workflows limited capacity and slowed customer response.",
    approach:
      "Identified high-value automation opportunities and scoped a focused MVP.",
    solution:
      "Built an AI-enabled application with human-in-the-loop review and clear governance.",
    outcome:
      "Reduced manual effort, faster turnaround, and a foundation for broader AI adoption.",
  },
];

export const insights = [
  {
    slug: "idea-to-operations",
    title: "Why Most Companies Have a Delivery Problem, Not a Technology Problem",
    excerpt:
      "The gap between technology ideas and reliable operations is rarely about tools — it's about delivery. Here's how to close it.",
    category: "Strategy",
    date: "2026-05-12",
    readMinutes: 6,
  },
  {
    slug: "devsecops-for-mid-market",
    title: "DevSecOps for the Mid-Market: Security Without the Slowdown",
    excerpt:
      "Embedding security into delivery doesn't have to slow releases. A practical path to secure-by-default pipelines.",
    category: "Security",
    date: "2026-04-28",
    readMinutes: 7,
  },
  {
    slug: "bcdr-that-actually-works",
    title: "Business Continuity That Actually Works When You Need It",
    excerpt:
      "A recovery plan you've never tested is a guess. How to define RTO/RPO and prove your resilience.",
    category: "Resilience",
    date: "2026-04-10",
    readMinutes: 5,
  },
  {
    slug: "ai-readiness",
    title: "AI Readiness: Where Mid-Market Companies Should Actually Start",
    excerpt:
      "Skip the hype. A grounded approach to identifying AI opportunities with real ROI and manageable risk.",
    category: "AI",
    date: "2026-03-22",
    readMinutes: 6,
  },
  {
    slug: "fractional-cto-guide",
    title: "When (and Why) to Hire a Fractional CTO",
    excerpt:
      "A full-time CTO is a big bet for a growing company. Here's how to tell when fractional leadership is the smarter move.",
    category: "Strategy",
    date: "2026-05-02",
    readMinutes: 7,
  },
  {
    slug: "cloud-cost-optimization",
    title: "Cloud Cost Optimization: Stop Overpaying Without Slowing Down",
    excerpt:
      "Cloud bills creep up quietly. A practical approach to cutting waste without sacrificing reliability or velocity.",
    category: "Cloud",
    date: "2026-02-18",
    readMinutes: 7,
  },
  {
    slug: "managed-it-vs-in-house",
    title: "Managed IT vs. In-House: How Mid-Market Companies Should Decide",
    excerpt:
      "The right answer is rarely all-or-nothing. A framework for deciding what to keep in-house and what to hand off.",
    category: "Managed IT",
    date: "2025-12-09",
    readMinutes: 6,
  },
  {
    slug: "legacy-system-modernization",
    title: "Modernizing Legacy Systems Without Betting the Business",
    excerpt:
      "Big-bang rewrites fail more often than they succeed. How to modernize the systems you depend on without the gamble.",
    category: "Operations",
    date: "2025-11-04",
    readMinutes: 8,
  },
  {
    slug: "ai-automation-roi",
    title: "Where AI Automation Actually Pays Off for Mid-Market Operations",
    excerpt:
      "The ROI on AI automation is real, but only in specific places. How to find the workflows worth automating first.",
    category: "AI",
    date: "2025-09-23",
    readMinutes: 7,
  },
];

export const faqs = [
  {
    question: "How is B&B different from a typical IT provider or a big consulting firm?",
    answer:
      "We help companies that have outgrown basic IT support but are not ready for massive consulting firms. We combine strategy, software delivery, cloud, cybersecurity, IMAC, and managed services in one integrated delivery model — enterprise-level practices without enterprise-level complexity or cost.",
  },
  {
    question: "Do you only advise, or do you also build and operate?",
    answer:
      "All three. We advise, build, secure, deploy, operate, and recover. The point of our Idea to Operations Framework is that the same partner can take you from concept to reliable, supported operations.",
  },
  {
    question: "What size companies do you work with?",
    answer:
      "We focus on mid-market and growing businesses — typically 25–5,000 employees — including startups building their first serious platform and private equity portfolio companies.",
  },
  {
    question: "How do engagements usually start?",
    answer:
      "Most engagements start with a discovery call and a focused assessment, such as our Technology Health Check. The assessment produces a prioritized roadmap, after which we can move into implementation and ongoing support.",
  },
  {
    question: "Can you provide ongoing managed services after a project?",
    answer:
      "Yes. We offer managed technology support, application maintenance, and BCDR retainers so there's clear ownership and continuous improvement after launch — no hand-off into a vacuum.",
  },
  {
    question: "Which industries do you serve?",
    answer:
      "Healthcare, financial services, SaaS and technology, professional services, real estate and property management, hospitality, small and mid-sized businesses, and private equity portfolio companies.",
  },
];

export type Testimonial = {
  quote: string;
  name: string;
  title: string;
  company: string;
};

// Real client testimonials only. Left empty intentionally so no fabricated
// social proof ships. Add entries as approved quotes come in, e.g.:
//   {
//     quote: "B&B took us from a fragile, manual deployment process to a
//             reliable CI/CD pipeline in weeks.",
//     name: "Jane Smith",
//     title: "VP of Engineering",
//     company: "Acme SaaS",
//   }
// The homepage testimonials section renders automatically once this is
// non-empty, and stays hidden while it's empty.
export const testimonials: Testimonial[] = [];

export const engagementOffers = [
  {
    name: "Technology Health Check",
    tagline: "A fast, fixed-scope review and 90-day roadmap.",
    includes: [
      "Current state review",
      "Risk analysis",
      "Cloud / security / app / support review",
      "Executive summary",
      "90-day roadmap",
    ],
  },
  {
    name: "Idea to App MVP",
    tagline: "From concept to a working, deployed product.",
    includes: [
      "Discovery",
      "UX/UI",
      "Architecture",
      "MVP development",
      "Deployment",
      "Basic support",
    ],
  },
  {
    name: "Managed Technology Support",
    tagline: "Ongoing support, scoped to your team and systems.",
    includes: [
      "User support",
      "Device support",
      "IMAC",
      "Vendor coordination",
      "Monthly reporting",
      "Basic security and backup oversight",
    ],
  },
];

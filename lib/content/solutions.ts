export type Solution = {
  slug: string;
  title: string;
  audience: string;
  summary: string;
  body: string;
  icon: string;
  /** What's included / what we do. */
  includes: string[];
  /** Related service pillar slugs. */
  relatedServices: string[];
};

export const solutions: Solution[] = [
  {
    slug: "build-my-app",
    title: "Build My App",
    audience: "Founders, business owners, internal teams.",
    summary:
      "Turn an idea into a working web, mobile, SaaS, or AI-enabled product.",
    body: "Have an idea but need a team to turn it into a working product? B&B Global Services helps define, design, build, deploy, and support web, mobile, SaaS, and AI-enabled applications.",
    icon: "code",
    includes: [
      "Discovery and product definition",
      "UX/UI design",
      "Architecture and tech selection",
      "MVP and full-product development",
      "Deployment and release management",
      "Documentation and support handoff",
    ],
    relatedServices: ["application-development", "cloud-devops", "strategy-advisory"],
  },
  {
    slug: "modernize-my-technology",
    title: "Modernize My Technology",
    audience: "Companies with outdated systems.",
    summary:
      "Move from legacy platforms and manual processes to modern, secure, automated technology.",
    body: "We help organizations move from legacy platforms, manual processes, and fragile systems to modern cloud-based, secure, automated technology.",
    icon: "cloud",
    includes: [
      "Current-state assessment",
      "Cloud and application modernization roadmap",
      "Infrastructure as Code and CI/CD",
      "Process automation",
      "Security and reliability uplift",
      "Migration and cutover planning",
    ],
    relatedServices: ["cloud-devops", "strategy-advisory", "reliability-bcdr"],
  },
  {
    slug: "adopt-ai",
    title: "Adopt AI & Analytics",
    audience: "Leaders who want to use AI and data for real results.",
    summary:
      "Find the AI and data opportunities with real ROI, then build and deploy them responsibly.",
    body: "Move past the AI hype. We help you identify the use cases that actually pay off, build generative AI and machine learning solutions, turn your data into decisions, and deploy it all with proper governance and monitoring.",
    icon: "ai",
    includes: [
      "AI & data readiness assessment",
      "High-ROI use-case identification",
      "Generative AI & LLM applications",
      "Machine learning & predictive models",
      "Analytics & BI dashboards",
      "MLOps, monitoring & AI governance",
    ],
    relatedServices: ["data-analytics-ai", "application-development", "strategy-advisory"],
  },
  {
    slug: "secure-my-business",
    title: "Secure My Business",
    audience: "Companies worried about cybersecurity.",
    summary:
      "Embed security across applications, cloud, users, processes, and operations.",
    body: "We embed security across applications, cloud, users, processes, and operations.",
    icon: "shield",
    includes: [
      "Security assessment and risk register",
      "DevSecOps and secure SDLC",
      "IAM and access controls",
      "Vulnerability and patch management",
      "Cloud security hardening",
      "Compliance readiness and evidence",
    ],
    relatedServices: ["devsecops-cybersecurity", "cloud-devops", "strategy-advisory"],
  },
  {
    slug: "support-my-workforce",
    title: "Support My Workforce",
    audience: "Businesses needing managed IT.",
    summary:
      "Practical technology support: device setup, IMAC, service desk, and managed operations.",
    body: "We provide practical technology support including device setup, IMAC, service desk, user support, office moves, and managed IT operations.",
    icon: "support",
    includes: [
      "Service desk and user support",
      "Device provisioning and IMAC",
      "Mac and Windows support",
      "Onboarding and offboarding",
      "Office moves and network setup",
      "Asset management and monthly reporting",
    ],
    relatedServices: ["managed-it-imac", "devsecops-cybersecurity"],
  },
  {
    slug: "disaster-recovery",
    title: "Prepare for Disaster Recovery",
    audience: "Companies without tested recovery plans.",
    summary:
      "Define RTO/RPO, validate backups, run tabletop exercises, and prepare for disruption.",
    body: "We help define RTO/RPO, create recovery plans, validate backups, run tabletop exercises, and prepare your organization for disruption.",
    icon: "activity",
    includes: [
      "RTO/RPO definition",
      "Disaster recovery runbooks",
      "Backup validation",
      "Business continuity planning",
      "Tabletop exercises",
      "Recovery testing and executive reporting",
    ],
    relatedServices: ["reliability-bcdr", "cloud-devops", "strategy-advisory"],
  },
  {
    slug: "scale-my-team",
    title: "Scale My Technology Team",
    audience: "Growing companies.",
    summary:
      "Fractional leadership, engineering teams, and managed services to scale without a full internal department.",
    body: "We provide fractional leadership, engineering teams, technical delivery, and managed services to help companies scale without hiring a full internal department.",
    icon: "compass",
    includes: [
      "Fractional CTO and technology leadership",
      "Embedded engineering teams",
      "Delivery and release management",
      "Managed operations and support",
      "Operating model design",
      "Vendor coordination",
    ],
    relatedServices: ["strategy-advisory", "application-development", "managed-it-imac"],
  },
];

export function getSolution(slug: string): Solution | undefined {
  return solutions.find((s) => s.slug === slug);
}

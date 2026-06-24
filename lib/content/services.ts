export type Service = {
  slug: string;
  /** Short title used on cards and navigation. */
  title: string;
  /** Full page headline. */
  headline: string;
  /** One-line summary for cards. */
  summary: string;
  /** Icon key resolved by the Icon component. */
  icon: string;
  /** Capabilities listed on the homepage service card. */
  capabilities: string[];
  /** Detailed service list on the pillar page. */
  services: string[];
  /** Tangible deliverables clients receive. */
  deliverables: string[];
  /** Indicative engagement pricing. */
  pricing: { label: string; range: string }[];
};

export const services: Service[] = [
  {
    slug: "strategy-advisory",
    title: "Strategy & Advisory",
    headline: "Technology Strategy & Advisory",
    summary:
      "Assessments, roadmaps, and fractional CTO leadership that turn business goals into an executable technology plan.",
    icon: "compass",
    capabilities: [
      "Technology assessments",
      "Digital transformation roadmaps",
      "Fractional CTO advisory",
      "Technology due diligence",
      "Operating model design",
      "Vendor evaluation",
    ],
    services: [
      "Fractional CTO",
      "Technology roadmaps",
      "Digital transformation",
      "Business process analysis",
      "Enterprise architecture",
      "Technology due diligence",
      "Vendor selection",
      "Operating model design",
      "IT maturity assessment",
    ],
    deliverables: [
      "Executive roadmap",
      "Current-state assessment",
      "Future-state architecture",
      "Gap analysis",
      "Budget estimate",
      "Implementation plan",
      "Risk register",
      "Prioritized recommendations",
    ],
    pricing: [
      { label: "Assessment", range: "$5,000–$25,000" },
      { label: "Roadmap", range: "$15,000–$75,000" },
      { label: "Fractional CTO", range: "$5,000–$25,000/month" },
    ],
  },
  {
    slug: "application-development",
    title: "Application & Product Development",
    headline: "Custom Software, Mobile Apps, SaaS Platforms & AI Solutions",
    summary:
      "We define, design, build, deploy, and support web, mobile, SaaS, and AI-enabled applications.",
    icon: "code",
    capabilities: [
      "Web applications",
      "Mobile applications",
      "SaaS platforms",
      "AI-enabled applications",
      "API development",
      "System integrations",
      "UX and product design",
    ],
    services: [
      "Web applications",
      "Mobile apps",
      "SaaS platforms",
      "AI apps",
      "Internal business tools",
      "Customer portals",
      "API development",
      "Data integrations",
      "Workflow automation",
      "MVP development",
    ],
    deliverables: [
      "Product requirements",
      "UX/UI design",
      "Architecture",
      "MVP build",
      "Testing",
      "Deployment",
      "Documentation",
      "Support handoff",
      "Ongoing maintenance",
    ],
    pricing: [
      { label: "MVP", range: "$15,000–$75,000" },
      { label: "Business app", range: "$50,000–$250,000" },
      { label: "Enterprise platform", range: "$250,000+" },
    ],
  },
  {
    slug: "data-analytics-ai",
    title: "Data, Analytics & AI",
    headline: "Data, Analytics, Machine Learning & AI Implementation",
    summary:
      "Turn data into decisions and intelligent products — from data platforms and analytics to machine learning, generative AI, and MLOps.",
    icon: "ai",
    capabilities: [
      "Data strategy & engineering",
      "Analytics & BI dashboards",
      "Machine learning models",
      "Generative AI & LLM apps",
      "Intelligent automation",
      "AI governance & MLOps",
    ],
    services: [
      "Data strategy & architecture",
      "Data engineering & pipelines",
      "Data warehouse & lakehouse (Snowflake, BigQuery)",
      "Business intelligence & dashboards",
      "Analytics & data visualization",
      "Machine learning & predictive models",
      "Generative AI & LLM applications",
      "RAG & knowledge assistants",
      "Intelligent process automation",
      "MLOps & model deployment",
      "AI readiness assessment",
      "AI governance, safety & compliance",
    ],
    deliverables: [
      "Data & AI opportunity assessment",
      "Data architecture & roadmap",
      "Data pipelines & warehouse",
      "Analytics dashboards & reporting",
      "ML/AI proof of concept",
      "Production AI/ML system",
      "MLOps pipeline & monitoring",
      "AI governance framework",
    ],
    pricing: [
      { label: "Data & AI readiness assessment", range: "$10,000–$40,000" },
      { label: "Analytics / data platform build", range: "$40,000–$200,000" },
      { label: "AI/ML implementation", range: "$50,000–$300,000+" },
    ],
  },
  {
    slug: "cloud-devops",
    title: "Cloud, DevOps & Platform Engineering",
    headline: "Cloud, DevOps, CI/CD & Platform Engineering",
    summary:
      "Cloud architecture, infrastructure as code, CI/CD, and platform engineering on AWS, Azure, and GCP.",
    icon: "cloud",
    capabilities: [
      "AWS, Azure, GCP",
      "Infrastructure as Code",
      "CI/CD pipelines",
      "Kubernetes",
      "Platform engineering",
      "Environment automation",
      "Release management",
    ],
    services: [
      "Cloud migration",
      "Cloud architecture",
      "AWS/Azure/GCP setup",
      "Infrastructure as Code",
      "Terraform",
      "CI/CD pipelines",
      "Kubernetes",
      "Containerization",
      "Environment management",
      "Release automation",
      "Cost optimization",
    ],
    deliverables: [
      "Cloud architecture",
      "Deployment pipelines",
      "IaC repositories",
      "Environment strategy",
      "Security controls",
      "Monitoring setup",
      "Runbooks",
      "Cost optimization report",
    ],
    pricing: [
      { label: "Cloud assessment", range: "$7,500–$25,000" },
      { label: "CI/CD implementation", range: "$15,000–$75,000" },
      { label: "Cloud modernization", range: "$50,000–$300,000+" },
    ],
  },
  {
    slug: "devsecops-cybersecurity",
    title: "DevSecOps & Cybersecurity",
    headline: "Security Built Into Delivery",
    summary:
      "DevSecOps, identity, vulnerability management, and compliance readiness embedded across the delivery lifecycle.",
    icon: "shield",
    capabilities: [
      "Security assessments",
      "DevSecOps implementation",
      "IAM and access controls",
      "Vulnerability management",
      "Cloud security",
      "Compliance readiness",
      "Security automation",
    ],
    services: [
      "DevSecOps implementation",
      "Cloud security",
      "IAM review",
      "Vulnerability management",
      "Secure SDLC",
      "Secrets management",
      "Compliance readiness",
      "Security monitoring",
      "Policy automation",
      "Risk assessment",
    ],
    deliverables: [
      "Security assessment",
      "DevSecOps roadmap",
      "Control matrix",
      "Remediation plan",
      "CI/CD security gates",
      "IAM recommendations",
      "Compliance evidence package",
    ],
    pricing: [
      { label: "Security assessment", range: "$7,500–$30,000" },
      { label: "DevSecOps implementation", range: "$25,000–$150,000" },
      { label: "Compliance readiness", range: "$25,000–$200,000" },
    ],
  },
  {
    slug: "reliability-bcdr",
    title: "Reliability, Operations & BCDR",
    headline: "Reliability, Resilience & Business Continuity",
    summary:
      "Observability, SRE practices, incident management, and tested disaster recovery that keep mission-critical systems running.",
    icon: "activity",
    capabilities: [
      "Observability",
      "Incident management",
      "SRE practices",
      "Backup and recovery",
      "Disaster recovery",
      "RTO/RPO planning",
      "Business continuity testing",
    ],
    services: [
      "Observability",
      "Monitoring",
      "Incident management",
      "Problem management",
      "SLO/SLI design",
      "SRE implementation",
      "Backup strategy",
      "Disaster recovery",
      "Business continuity",
      "Tabletop exercises",
      "RTO/RPO planning",
    ],
    deliverables: [
      "Operational maturity assessment",
      "Monitoring strategy",
      "Incident playbooks",
      "DR runbooks",
      "RTO/RPO matrix",
      "Recovery test plan",
      "Executive resilience report",
    ],
    pricing: [
      { label: "Resilience assessment", range: "$10,000–$35,000" },
      { label: "BCDR program", range: "$25,000–$150,000" },
      { label: "SRE/operations transformation", range: "$50,000–$300,000" },
    ],
  },
  {
    slug: "managed-it-imac",
    title: "IMAC & Managed Technology Services",
    headline: "Install, Move, Add, Change & Managed IT Support",
    summary:
      "Device deployment, service desk, network support, and managed operations for a productive, supported workforce.",
    icon: "support",
    capabilities: [
      "Install, Move, Add, Change",
      "Device deployment",
      "Mac and Windows support",
      "Network support",
      "Office technology setup",
      "Service desk",
      "Asset management",
      "Executive support",
    ],
    services: [
      "Device setup",
      "Laptop/desktop provisioning",
      "Mac support",
      "Windows support",
      "Office moves",
      "Network setup",
      "Wi-Fi support",
      "Printer support",
      "User onboarding/offboarding",
      "Asset management",
      "Service desk",
      "Executive support",
      "Vendor coordination",
    ],
    deliverables: [
      "Asset inventory",
      "Device deployment process",
      "Support model",
      "SLA matrix",
      "Onboarding checklist",
      "Office technology checklist",
      "Monthly support report",
    ],
    pricing: [
      { label: "Per user support", range: "$75–$250/user/month" },
      { label: "Small business support", range: "$1,500–$7,500/month" },
      { label: "Managed operations", range: "$5,000–$50,000/month" },
      { label: "Office move/project support", range: "Custom quote" },
    ],
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

// Per-industry landing page content. Powers the /industries overview cards
// and the /industries/[slug] detail pages. Kept separate from the homepage
// `industries` list so detail content can grow without touching shared copy.

export type IndustryPage = {
  slug: string;
  name: string;
  icon: string;
  cardDescription: string;
  title: string;
  metaDescription: string;
  intro: string;
  challenges: string[];
  howWeHelp: string[];
  relatedServices: string[];
  keywords: string[];
};

export const industryPages: IndustryPage[] = [
  {
    slug: "healthcare",
    name: "Healthcare",
    icon: "heart",
    cardDescription:
      "Secure, compliant technology delivery for clinical and administrative systems.",
    title: "Technology Consulting & Managed Services for Healthcare",
    metaDescription:
      "Secure, compliant technology for healthcare organizations — cloud, application development, cybersecurity, reliability, and managed IT delivered with HIPAA-aware practices.",
    intro:
      "Healthcare organizations carry some of the highest stakes in technology: patient safety, sensitive data, strict compliance, and zero tolerance for downtime. We help clinical and administrative teams modernize and operate technology securely — without slowing care.",
    challenges: [
      "Protecting sensitive patient data and meeting HIPAA expectations",
      "Aging clinical and administrative systems that resist change",
      "Downtime that directly affects patient care",
      "Integrating EHRs, portals, and third-party systems",
      "Limited internal IT capacity for modernization and security",
    ],
    howWeHelp: [
      "Security and compliance-readiness assessments",
      "Secure cloud modernization and application delivery",
      "Reliability, monitoring, and tested disaster recovery",
      "Integrations across clinical and business systems",
      "Managed IT and end-user support for distributed sites",
    ],
    relatedServices: ["devsecops-cybersecurity", "reliability-bcdr", "cloud-devops"],
    keywords: [
      "healthcare IT consulting",
      "HIPAA compliance consulting",
      "healthcare cloud services",
      "healthcare cybersecurity",
    ],
  },
  {
    slug: "financial-services",
    name: "Financial Services",
    icon: "shield",
    cardDescription:
      "Reliable, secure platforms with the controls regulated finance demands.",
    title: "Technology Consulting for Financial Services & Fintech",
    metaDescription:
      "Reliable, secure, and compliant technology for financial services and fintech — cloud, software, DevSecOps, reliability, and managed services with the controls regulators expect.",
    intro:
      "In financial services, trust is the product — and trust depends on secure, reliable, well-governed technology. We help banks, lenders, advisors, and fintechs deliver and operate platforms that meet the bar regulators and customers expect.",
    challenges: [
      "Meeting security and regulatory expectations (SOC 2, PCI, and more)",
      "Reliability and uptime for transaction-critical systems",
      "Legacy core systems that are costly and risky to change",
      "Securing customer data and access across the business",
      "Scaling engineering without compromising controls",
    ],
    howWeHelp: [
      "Security assessments and DevSecOps implementation",
      "Compliance-readiness and evidence packages",
      "Resilient cloud architecture and reliability engineering",
      "Secure application and platform development",
      "Tested business continuity and disaster recovery",
    ],
    relatedServices: ["devsecops-cybersecurity", "reliability-bcdr", "application-development"],
    keywords: [
      "financial services technology consulting",
      "fintech software development",
      "financial cybersecurity consulting",
      "SOC 2 readiness consulting",
    ],
  },
  {
    slug: "saas-technology",
    name: "SaaS & Technology",
    icon: "cloud",
    cardDescription:
      "Product engineering, cloud, and reliability for growing software companies.",
    title: "Engineering, Cloud & Reliability for SaaS & Technology Companies",
    metaDescription:
      "Help growing SaaS and technology companies ship faster and run reliably — product engineering, cloud, DevOps, SRE, and AI delivered by senior engineers.",
    intro:
      "Software companies live or die on delivery speed and reliability. We help SaaS and technology businesses build product, modernize cloud, adopt DevOps and SRE, and add AI — so engineering scales without the chaos.",
    challenges: [
      "Shipping faster without sacrificing quality or uptime",
      "Manual deployments and inconsistent environments",
      "Scaling cloud cost-effectively as usage grows",
      "Reliability and on-call maturity for a growing platform",
      "Adding AI and data capabilities to the product",
    ],
    howWeHelp: [
      "Product and platform engineering",
      "Cloud architecture, IaC, and CI/CD",
      "SRE, observability, and incident management",
      "Data, analytics, and AI/ML features",
      "Cost optimization across cloud environments",
    ],
    relatedServices: ["application-development", "cloud-devops", "data-analytics-ai"],
    keywords: [
      "SaaS development company",
      "cloud consulting for startups",
      "DevOps consulting SaaS",
      "SRE consulting",
    ],
  },
  {
    slug: "professional-services",
    name: "Professional Services",
    icon: "compass",
    cardDescription:
      "Modern applications and managed IT for firms that run on knowledge work.",
    title: "Technology & Managed IT for Professional Services Firms",
    metaDescription:
      "Modern applications, secure cloud, and managed IT for law firms, accountants, agencies, and consultancies — technology that supports knowledge work without the overhead.",
    intro:
      "Professional services firms run on people, knowledge, and client trust. We help law firms, accounting practices, agencies, and consultancies modernize their tools, secure client data, and get reliable IT support — so the team can focus on clients, not technology.",
    challenges: [
      "Securing confidential client information",
      "Reliable IT support and smooth onboarding for staff",
      "Manual, repetitive workflows that drain billable time",
      "Aging tools and disconnected systems",
      "No clear technology ownership or roadmap",
    ],
    howWeHelp: [
      "Managed IT, service desk, and IMAC support",
      "Workflow automation and custom internal tools",
      "Security, identity, and data protection",
      "Cloud modernization and integrations",
      "Fractional CTO advisory and roadmaps",
    ],
    relatedServices: ["managed-it-imac", "application-development", "strategy-advisory"],
    keywords: [
      "IT services for law firms",
      "managed IT for professional services",
      "technology consulting for accountants",
      "IT support for agencies",
    ],
  },
  {
    slug: "real-estate",
    name: "Real Estate & Property Management",
    icon: "building",
    cardDescription:
      "Portals, integrations, and support across distributed properties and teams.",
    title: "Technology for Real Estate & Property Management",
    metaDescription:
      "Portals, integrations, cloud, and managed IT for real estate and property management — connect distributed properties, teams, and systems reliably and securely.",
    intro:
      "Real estate and property management run across many locations, systems, and stakeholders. We help connect properties, teams, and tools with reliable portals, integrations, and support — so operations run smoothly wherever you do business.",
    challenges: [
      "Disconnected systems across properties and vendors",
      "Tenant, owner, and staff portals that need to just work",
      "Supporting distributed teams and on-site technology",
      "Securing financial and personal data",
      "Manual processes that slow operations",
    ],
    howWeHelp: [
      "Custom portals and customer-facing applications",
      "System integrations across property tech",
      "Managed IT and multi-site support",
      "Cloud modernization and automation",
      "Security and data protection",
    ],
    relatedServices: ["application-development", "managed-it-imac", "cloud-devops"],
    keywords: [
      "real estate technology consulting",
      "property management software development",
      "real estate IT services",
      "proptech development",
    ],
  },
  {
    slug: "hospitality",
    name: "Hospitality",
    icon: "support",
    cardDescription:
      "Resilient operations and on-site technology for guest-facing businesses.",
    title: "Technology & Managed IT for Hospitality",
    metaDescription:
      "Resilient, guest-ready technology for hotels, restaurants, and hospitality groups — reliable operations, on-site support, networks, and secure systems that keep guests happy.",
    intro:
      "In hospitality, technology is invisible when it works and very visible when it doesn't. We help hotels, restaurants, and hospitality groups run resilient operations, set up reliable on-site technology, and support guest-facing systems around the clock.",
    challenges: [
      "Guest-facing systems that must never go down",
      "On-site networks, Wi-Fi, and device support across locations",
      "Securing payment and guest data",
      "Seasonal staffing and fast onboarding",
      "Disconnected property and booking systems",
    ],
    howWeHelp: [
      "Reliability, monitoring, and rapid incident response",
      "On-site technology setup and managed support",
      "Network, Wi-Fi, and device management",
      "Secure payment and data practices",
      "Integrations across booking and property systems",
    ],
    relatedServices: ["reliability-bcdr", "managed-it-imac", "devsecops-cybersecurity"],
    keywords: [
      "hospitality IT services",
      "hotel technology consulting",
      "restaurant IT support",
      "hospitality managed services",
    ],
  },
  {
    slug: "small-mid-sized-business",
    name: "Small & Mid-Sized Businesses",
    icon: "users",
    cardDescription:
      "One trusted partner for strategy, build, security, and ongoing support.",
    title: "Technology Partner for Small & Mid-Sized Businesses",
    metaDescription:
      "One trusted technology partner for SMBs — strategy, software, cloud, security, and managed IT in a single integrated model, without the cost of a big consulting firm.",
    intro:
      "Growing businesses outgrow basic IT but aren't ready for a massive consulting firm. We're the partner in between: one trusted team for strategy, build, security, reliability, and ongoing support — right-sized for where you are.",
    challenges: [
      "Outgrowing a basic IT provider's capabilities",
      "Juggling multiple disconnected vendors",
      "Security and reliability gaps with no clear owner",
      "Needing apps or modernization but lacking a team",
      "Limited budget for enterprise consulting",
    ],
    howWeHelp: [
      "Fractional CTO advisory and roadmaps",
      "Application development and modernization",
      "Cloud, security, and reliability uplift",
      "Managed IT and end-user support",
      "One integrated partner across the lifecycle",
    ],
    relatedServices: ["strategy-advisory", "managed-it-imac", "application-development"],
    keywords: [
      "IT consulting for small business",
      "managed IT services for SMB",
      "technology partner for growing businesses",
      "outsourced IT for mid-market",
    ],
  },
  {
    slug: "private-equity",
    name: "Private Equity Portfolio Companies",
    icon: "chart",
    cardDescription:
      "Due diligence, modernization, and value creation across the portfolio.",
    title: "Technology Due Diligence & Value Creation for Private Equity",
    metaDescription:
      "Technology due diligence, modernization, and value creation for private equity and portfolio companies — assess risk, reduce cost, and improve delivery across the portfolio.",
    intro:
      "Private equity firms need technology to be an asset, not a liability — at diligence and across the hold. We help assess technology risk before deals, then modernize, secure, and operate portfolio company systems to create measurable value.",
    challenges: [
      "Assessing technology risk and cost during diligence",
      "Inconsistent maturity across portfolio companies",
      "Security and compliance exposure",
      "Modernizing without disrupting the business",
      "Creating value quickly within the hold period",
    ],
    howWeHelp: [
      "Technology due diligence and assessments",
      "Modernization and cost-optimization programs",
      "Security, reliability, and BCDR uplift",
      "Fractional technology leadership",
      "Repeatable playbooks across the portfolio",
    ],
    relatedServices: ["strategy-advisory", "cloud-devops", "devsecops-cybersecurity"],
    keywords: [
      "technology due diligence",
      "private equity technology consulting",
      "portfolio company IT",
      "IT value creation consulting",
    ],
  },
];

export function getIndustry(slug: string): IndustryPage | undefined {
  return industryPages.find((i) => i.slug === slug);
}

// Global delivery model content — positions B&B as a worldwide, remote-first
// technology partner with home bases in Boston, MA and Rome, Italy.

export type Region = {
  slug: string;
  name: string;
  blurb: string;
  markets: string[];
  /** SEO title for the region landing page. */
  title: string;
  /** Meta description. */
  description: string;
  /** Hero intro paragraph. */
  intro: string;
  /** What we emphasize in this region. */
  highlights: string[];
  keywords: string[];
};

export const regions: Region[] = [
  {
    slug: "north-america",
    name: "North America",
    blurb:
      "Our home base. Full-lifecycle delivery and on-site options across the US and Canada.",
    markets: ["United States", "Canada", "Mexico"],
    title: "Technology Consulting & Managed Services in North America",
    description:
      "Full-lifecycle technology consulting, cloud, software, cybersecurity, and managed IT across the United States and Canada — from our Boston, MA home base.",
    intro:
      "North America is our home base. We deliver strategy, software, cloud, security, reliability, and managed services across the US and Canada — with the option of on-site engagement for clients in the Northeast and remote delivery everywhere else.",
    highlights: [
      "On-site options across the US Northeast",
      "Time-zone-aligned delivery and support",
      "US and Canadian compliance familiarity",
    ],
    keywords: [
      "technology consulting USA",
      "managed IT services United States",
      "IT consulting Canada",
      "cloud consulting North America",
    ],
  },
  {
    slug: "uk-europe",
    name: "United Kingdom & Europe",
    blurb:
      "Cloud, software, security, and reliability delivery aligned to EU/UK data and compliance expectations.",
    markets: ["United Kingdom", "Ireland", "Germany", "Netherlands", "Nordics"],
    title: "Technology Consulting & Cloud Services in the UK & Europe",
    description:
      "Cloud, software engineering, DevSecOps, and managed services for UK and European businesses — delivered with GDPR and regional data-residency awareness.",
    intro:
      "We help UK and European organizations design, build, secure, and operate technology with full respect for GDPR and regional data-residency expectations. Remote-first delivery aligned to your business hours.",
    highlights: [
      "GDPR and EU/UK data-residency awareness",
      "EU-region cloud architectures",
      "Working-hours overlap with the Americas",
    ],
    keywords: [
      "technology consulting UK",
      "cloud consulting Europe",
      "GDPR compliance consulting",
      "software development United Kingdom",
    ],
  },
  {
    slug: "middle-east-africa",
    name: "Middle East & Africa",
    blurb:
      "Modernization, cloud, and managed services for fast-growing organizations across EMEA.",
    markets: ["UAE", "Saudi Arabia", "Qatar", "South Africa"],
    title: "Technology Modernization & Cloud Services in the Middle East & Africa",
    description:
      "Cloud modernization, software delivery, cybersecurity, and managed services for fast-growing organizations across the Middle East and Africa.",
    intro:
      "Organizations across the Middle East and Africa are modernizing fast. We bring enterprise-grade cloud, software, security, and reliability practices to growing businesses — delivered remotely with time-zone-aligned collaboration.",
    highlights: [
      "Cloud modernization and migration",
      "Security and reliability uplift",
      "Time-zone-aligned remote delivery",
    ],
    keywords: [
      "cloud consulting UAE",
      "technology consulting Dubai",
      "IT services Saudi Arabia",
      "digital transformation Middle East",
    ],
  },
  {
    slug: "asia-pacific",
    name: "Asia Pacific",
    blurb:
      "Distributed engineering and follow-the-sun operations across the APAC region.",
    markets: ["India", "Singapore", "Australia", "Japan"],
    title: "Software, Cloud & Managed Services Across Asia Pacific",
    description:
      "Distributed software engineering, cloud, DevOps, and follow-the-sun operations for businesses across the Asia Pacific region.",
    intro:
      "Across Asia Pacific, we deliver distributed engineering, cloud, and operations with follow-the-sun coverage — helping businesses build and run technology that scales across the region's diverse markets.",
    highlights: [
      "Distributed engineering teams",
      "Follow-the-sun operations and support",
      "Multi-region APAC cloud architectures",
    ],
    keywords: [
      "software development Asia Pacific",
      "cloud consulting Singapore",
      "IT services Australia",
      "DevOps consulting India",
    ],
  },
  {
    slug: "latin-america",
    name: "Latin America",
    blurb:
      "Nearshore delivery and time-zone-aligned collaboration for the Americas.",
    markets: ["Brazil", "Mexico", "Colombia", "Argentina"],
    title: "Nearshore Software & Cloud Services in Latin America",
    description:
      "Nearshore software development, cloud, and managed services for Latin American businesses and US companies seeking time-zone-aligned delivery.",
    intro:
      "Latin America offers strong time-zone alignment with North America. We deliver nearshore software, cloud, and managed services for businesses across the region — and for US companies that value real-time collaboration.",
    highlights: [
      "Nearshore, time-zone-aligned delivery",
      "Bilingual collaboration",
      "Cost-effective engineering capacity",
    ],
    keywords: [
      "nearshore software development",
      "cloud consulting Brazil",
      "IT services Mexico",
      "software development Latin America",
    ],
  },
];

export const globalDeliveryPillars = [
  {
    title: "Remote-first by design",
    body: "We were built to deliver remotely — secure collaboration, clear documentation, and async-friendly processes mean distance is never a barrier to quality.",
    icon: "cloud",
  },
  {
    title: "Follow-the-sun operations",
    body: "Support and incident response aligned to your business hours and time zones, with coverage that keeps mission-critical systems running around the clock.",
    icon: "activity",
  },
  {
    title: "Multi-region cloud",
    body: "Architectures spanning AWS, Azure, and GCP regions worldwide — designed for performance, residency, and resilience wherever your users are.",
    icon: "shield",
  },
  {
    title: "Compliance across borders",
    body: "Delivery that respects regional data protection and compliance expectations, from GDPR in Europe to sector rules in regulated markets.",
    icon: "compass",
  },
];

export const globalStats = [
  { value: "24/7", label: "Follow-the-sun coverage" },
  { value: "3", label: "Major cloud platforms" },
  { value: "5", label: "Delivery regions" },
  { value: "Remote-first", label: "Delivery model" },
];

export function getRegion(slug: string): Region | undefined {
  return regions.find((r) => r.slug === slug);
}

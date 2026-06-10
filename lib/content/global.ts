// Global delivery model content — positions B&B as a worldwide, remote-first
// technology partner with a New Hampshire (USA) home base.

export type Region = {
  slug: string;
  name: string;
  blurb: string;
  markets: string[];
};

export const regions: Region[] = [
  {
    slug: "north-america",
    name: "North America",
    blurb:
      "Our home base. Full-lifecycle delivery and on-site options across the US and Canada.",
    markets: ["United States", "Canada", "Mexico"],
  },
  {
    slug: "uk-europe",
    name: "United Kingdom & Europe",
    blurb:
      "Cloud, software, security, and reliability delivery aligned to EU/UK data and compliance expectations.",
    markets: ["United Kingdom", "Ireland", "Germany", "Netherlands", "Nordics"],
  },
  {
    slug: "middle-east-africa",
    name: "Middle East & Africa",
    blurb:
      "Modernization, cloud, and managed services for fast-growing organizations across EMEA.",
    markets: ["UAE", "Saudi Arabia", "Qatar", "South Africa"],
  },
  {
    slug: "asia-pacific",
    name: "Asia Pacific",
    blurb:
      "Distributed engineering and follow-the-sun operations across the APAC region.",
    markets: ["India", "Singapore", "Australia", "Japan"],
  },
  {
    slug: "latin-america",
    name: "Latin America",
    blurb:
      "Nearshore delivery and time-zone-aligned collaboration for the Americas.",
    markets: ["Brazil", "Mexico", "Colombia", "Argentina"],
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

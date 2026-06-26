export type Location = {
  slug: string;
  city: string;
  region: string; // state or metro
  title: string;
  description: string;
  intro: string;
  keywords: string[];
};

export const locations: Location[] = [
  {
    slug: "rome",
    city: "Rome",
    region: "Italy",
    title: "Technology Consulting, Cloud & Managed IT Services in Rome, Italy",
    description:
      "B&B Global Services provides technology consulting, cloud, DevOps, cybersecurity, software development, and managed IT to businesses in Rome and across Italy, with GDPR-aware delivery.",
    intro:
      "B&B Global Services helps businesses in Rome and across Italy design, build, secure, deploy, support, and recover their technology. From our Rome home base we bring enterprise-grade delivery — cloud, software, security, and reliability — to growing organizations, with full respect for GDPR and EU data-residency expectations.",
    keywords: [
      "technology consulting Rome",
      "IT consulting Italy",
      "cloud consulting Italy",
      "software development Rome",
      "GDPR compliance consulting Italy",
    ],
  },
  {
    slug: "boston",
    city: "Boston",
    region: "MA",
    title: "Technology Consulting, App Development & Cloud Services in Boston",
    description:
      "B&B Global Services delivers technology consulting, application development, cloud, DevOps, and cybersecurity for mid-market businesses across the Greater Boston area.",
    intro:
      "B&B Global Services helps Greater Boston businesses turn technology ideas into reliable operations. Across the metro and Route 128 corridor, we deliver application development, cloud modernization, DevSecOps, reliability, and managed services for companies that need enterprise expertise without enterprise complexity or cost.",
    keywords: [
      "IT consulting Boston",
      "cloud consulting Boston",
      "app development Boston",
      "DevOps consulting Boston",
      "managed IT services Boston",
    ],
  },
];

export function getLocation(slug: string): Location | undefined {
  return locations.find((l) => l.slug === slug);
}

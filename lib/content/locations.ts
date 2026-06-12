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
    slug: "new-hampshire",
    city: "New Hampshire",
    region: "NH",
    title: "Technology Consulting & Managed IT Services in New Hampshire",
    description:
      "B&B Global Services provides technology consulting, cloud, DevOps, cybersecurity, app development, and managed IT services to businesses across New Hampshire.",
    intro:
      "B&B Global Services helps New Hampshire businesses design, build, secure, deploy, support, and recover their technology. From Manchester and Nashua to Portsmouth and the Seacoast, we bring enterprise-grade delivery to growing organizations that have outgrown basic IT but aren't ready for a massive consulting firm.",
    keywords: [
      "technology consulting New Hampshire",
      "managed IT services New Hampshire",
      "IT consulting NH",
      "cloud consulting New Hampshire",
      "cybersecurity New Hampshire",
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

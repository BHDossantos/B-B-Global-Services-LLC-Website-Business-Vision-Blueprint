export const siteConfig = {
  name: "B&B Global Services LLC",
  shortName: "B&B Global Services",
  tagline: "From Idea to Operations",
  description:
    "B&B Global Services helps businesses design, build, secure, deploy, support, and recover technology solutions across app development, cloud, DevOps, cybersecurity, managed IT, and business continuity.",
  positioning:
    "B&B Global Services helps organizations design, build, secure, deploy, operate, and support technology solutions from idea to long-term operations.",
  // Update to the production domain at launch.
  url: "https://www.bbglobalservices.com",
  email: "hello@bbglobalservices.com",
  phone: "+1 (603) 555-0142",
  // Calendly / scheduling link — replace with the real booking URL.
  bookingUrl: "https://calendly.com/bbglobalservices/consultation",
  locations: ["New Hampshire", "Boston, MA"],
  social: {
    linkedin: "https://www.linkedin.com/company/bb-global-services",
  },
} as const;

export const mainNav = [
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Solutions", href: "/solutions" },
  { label: "About", href: "/about" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
] as const;

export const lifecyclePhases = [
  "Idea",
  "Design",
  "Build",
  "Secure",
  "Deploy",
  "Operate",
  "Recover",
  "Optimize",
] as const;

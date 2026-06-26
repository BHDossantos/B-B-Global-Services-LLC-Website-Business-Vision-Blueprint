export const siteConfig = {
  name: "B&B Global Services LLC",
  shortName: "B&B Global Services",
  tagline: "From Idea to Operations",
  description:
    "B&B Global Services is a global technology partner helping businesses worldwide design, build, secure, deploy, support, and recover technology solutions across app development, cloud, DevOps, cybersecurity, managed IT, and business continuity.",
  positioning:
    "B&B Global Services helps organizations worldwide design, build, secure, deploy, operate, and support technology solutions from idea to long-term operations.",
  url: "https://bnbglobal.net",
  email: "hello@bnbglobal.net",
  phone: "+1 (603) 930-8272",
  phoneIt: "+39 331 470 8304",
  // Where every "Book a Consultation" action goes. Until a real Calendly
  // event exists, this points to the on-site contact form (which works and
  // captures leads). When you have Calendly, set `calendlyUrl` below to the
  // real link and change this to that same URL.
  bookingUrl: "/contact",
  // Real Calendly scheduling link. Leave empty to hide the embedded calendar
  // and route booking to the contact form instead.
  calendlyUrl: "",
  // Home bases for local presence; global remote-first delivery worldwide.
  headquarters: "Boston, MA & Rome, Italy",
  coverage: "Global · Remote-first delivery across the Americas, EMEA & APAC",
  locations: ["Boston, MA", "Rome, Italy"],
  social: {
    linkedin: "https://www.linkedin.com/in/brunodssantos/",
  },
} as const;

export const mainNav = [
  { label: "Services", href: "/services" },
  { label: "Solutions", href: "/solutions" },
  { label: "Industries", href: "/industries" },
  { label: "Pricing", href: "/pricing" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Insights", href: "/insights" },
  { label: "About", href: "/about" },
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

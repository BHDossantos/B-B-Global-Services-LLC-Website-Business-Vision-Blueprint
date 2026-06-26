// Canonical English message catalog. pt/es/it mirror this structure with
// translated values. Any key missing in a locale falls back to English, so
// the site never shows a broken/empty string.

export const en = {
  nav: {
    services: "Services",
    solutions: "Solutions",
    industries: "Industries",
    pricing: "Pricing",
    caseStudies: "Case Studies",
    insights: "Insights",
    about: "About",
    contact: "Contact",
    global: "Global Delivery",
  },
  cta: {
    bookConsultation: "Book a Consultation",
    exploreServices: "Explore Services",
    freeHealthCheck: "Free Technology Health Check",
    talkToTeam: "Talk to Our Team",
    requestAssessment: "Request an Assessment",
    viewAllServices: "View all services",
    learnMore: "Learn more",
    getStarted: "Get Started",
    scheduleConsultation: "Schedule a Consultation",
    readArticle: "Read article",
    startFreeCheck: "Start the Free Check",
  },
  trust: ["Free consultation", "No obligation", "Reply within 1 business day"],
  hero: {
    headlinePre: "Technology Delivery From",
    headlineHighlight: "Idea to Operations",
    sub: "B&B Global Services helps businesses design, build, secure, deploy, support, and recover mission-critical technology solutions across software, cloud, DevOps, cybersecurity, AI, managed services, and business continuity.",
    lifecycleTitle: "The Technology Lifecycle",
    fromIdea: "Idea",
    toOps: "Reliable Operations",
    trustLine:
      "A global, remote-first partner with enterprise experience across cloud, DevOps, SRE, AI, application delivery, cybersecurity, data platforms, and operational resilience — delivered worldwide.",
  },
  lifecycle: ["Idea", "Design", "Build", "Secure", "Deploy", "Operate", "Recover", "Optimize"],
  home: {
    problemEyebrow: "The Real Problem",
    problemTitle:
      "Most Companies Do Not Have a Technology Problem. They Have a Delivery Problem.",
    problemBody:
      "Businesses are under pressure to move faster, reduce outages, improve security, modernize systems, adopt AI, control cloud costs, and support users without increasing operational chaos. B&B Global Services brings the strategy, engineering, operations, and support model needed to move technology from concept to reliable execution.",
    whatEyebrow: "What We Do",
    whatTitle: "One Partner Across the Full Technology Lifecycle",
    whatBody:
      "From strategy through long-term operations, we cover the disciplines most businesses have to stitch together across multiple vendors.",
    assessEyebrow: "Free, 2-Minute Tool",
    assessTitle: "How healthy is your technology?",
    assessBody:
      "Take the free Technology Health Check to score your maturity across strategy, delivery, cloud, security, reliability, recovery, and support — and get a recommended next step instantly.",
    frameworkEyebrow: "The B&B Delivery Framework",
    frameworkTitle: "Idea to Operations Framework",
    frameworkBody:
      "A repeatable model that takes technology from concept to reliable, supported operations — and keeps improving it.",
    industriesEyebrow: "Industries",
    industriesTitle: "Built for Organizations Between Basic IT and Big Consulting",
    industriesBody:
      "We serve organizations that are too complex for a basic IT provider but need a more flexible, practical, and affordable partner than a large global consulting firm.",
    globalEyebrow: "Global Delivery",
    globalTitle: "A Global Partner, Delivered Remotely",
    globalBody:
      "From our home bases in Boston and Rome, we deliver worldwide — with follow-the-sun operations, multi-region cloud, and delivery that respects regional data and compliance needs.",
    whyEyebrow: "Why B&B Global Services",
    whyTitle: "Enterprise Expertise. Practical Execution. Long-Term Support.",
    featuredEyebrow: "Featured Solutions",
    featuredTitle: "Outcome-Focused Engagements",
    featuredBody: "Clear, packaged ways to start — each mapped to a real business outcome.",
    caseEyebrow: "Case Studies",
    caseTitle: "Outcomes From the Field",
    caseBody:
      "Anonymized examples drawn from enterprise and mid-market delivery experience.",
    faqEyebrow: "FAQ",
    faqTitle: "Common Questions",
    finalTitle: "Ready to Move From Technology Ideas to Reliable Execution?",
    finalBody:
      "Whether you need to build an application, modernize your cloud, improve cybersecurity, support your workforce, or create a disaster recovery plan, B&B Global Services can help you move from vision to execution.",
  },
  footer: {
    services: "Services",
    solutions: "Solutions",
    company: "Company",
    serviceAreas: "Service areas:",
    rights: "All rights reserved.",
    newsletterTitle: "Practical technology insights, no hype",
    newsletterBody:
      "Occasional, useful thinking on strategy, cloud, security, and resilience for growing businesses.",
    subscribe: "Subscribe",
    emailPlaceholder: "you@company.com",
    privacy: "Privacy Policy",
    terms: "Terms of Service",
  },
  switcher: { label: "Language" },
};

// Widened type (string values) so locale files can be typed `: Messages`.
export type Messages = typeof en;

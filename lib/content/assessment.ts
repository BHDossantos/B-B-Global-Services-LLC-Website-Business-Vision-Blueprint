// Interactive Technology Health Check — a self-scoring maturity assessment
// used as the site's primary lead-generation tool. Each question maps to a
// service pillar; answers carry a 0–3 maturity score. The result recommends
// the most relevant engagement.

export type AssessmentOption = {
  label: string;
  score: 0 | 1 | 2 | 3;
};

export type AssessmentQuestion = {
  id: string;
  pillar: string;
  /** Service slug this question maps to, for routing the recommendation. */
  serviceSlug: string;
  question: string;
  options: AssessmentOption[];
};

export const assessmentQuestions: AssessmentQuestion[] = [
  {
    id: "strategy",
    pillar: "Strategy & Roadmap",
    serviceSlug: "strategy-advisory",
    question:
      "How clear is your technology strategy and roadmap for the next 12–18 months?",
    options: [
      { label: "We have no documented strategy or roadmap", score: 0 },
      { label: "Some plans exist but they're informal or outdated", score: 1 },
      { label: "We have a roadmap but execution is inconsistent", score: 2 },
      { label: "Clear, prioritized roadmap tied to business goals", score: 3 },
    ],
  },
  {
    id: "delivery",
    pillar: "Software Delivery",
    serviceSlug: "application-development",
    question: "How do you build and ship software or internal tools today?",
    options: [
      { label: "We can't deliver what the business needs", score: 0 },
      { label: "Slow, manual, or heavily reliant on one vendor/person", score: 1 },
      { label: "We ship, but quality and speed are inconsistent", score: 2 },
      { label: "Reliable, well-documented, repeatable delivery", score: 3 },
    ],
  },
  {
    id: "cloud",
    pillar: "Cloud & DevOps",
    serviceSlug: "cloud-devops",
    question: "How mature are your cloud environment and deployments?",
    options: [
      { label: "Mostly manual; no infrastructure as code or CI/CD", score: 0 },
      { label: "Some automation, but fragile and inconsistent", score: 1 },
      { label: "CI/CD exists; cloud costs and environments need work", score: 2 },
      { label: "Automated IaC, CI/CD, and cost-optimized cloud", score: 3 },
    ],
  },
  {
    id: "security",
    pillar: "Security & Compliance",
    serviceSlug: "devsecops-cybersecurity",
    question: "How confident are you in your security and access controls?",
    options: [
      { label: "Little visibility; no formal controls or reviews", score: 0 },
      { label: "Basic controls, but gaps in IAM, patching, or policy", score: 1 },
      { label: "Reasonable controls; security isn't yet built into delivery", score: 2 },
      { label: "Security embedded across apps, cloud, and operations", score: 3 },
    ],
  },
  {
    id: "reliability",
    pillar: "Reliability & Operations",
    serviceSlug: "reliability-bcdr",
    question: "How well do you detect and respond to outages and incidents?",
    options: [
      { label: "We find out from customers; no real monitoring", score: 0 },
      { label: "Basic alerts, but slow or chaotic incident response", score: 1 },
      { label: "Monitoring exists; SLOs and process are immature", score: 2 },
      { label: "Strong observability, SLOs, and incident management", score: 3 },
    ],
  },
  {
    id: "recovery",
    pillar: "Backup & Disaster Recovery",
    serviceSlug: "reliability-bcdr",
    question: "Could you recover quickly from a major outage or data loss?",
    options: [
      { label: "No tested backups or recovery plan", score: 0 },
      { label: "Backups exist but have never been tested", score: 1 },
      { label: "A plan exists; RTO/RPO aren't clearly defined or tested", score: 2 },
      { label: "Defined RTO/RPO with tested recovery and runbooks", score: 3 },
    ],
  },
  {
    id: "support",
    pillar: "Workforce & IT Support",
    serviceSlug: "managed-it-imac",
    question: "How well-supported is your workforce's day-to-day technology?",
    options: [
      { label: "Ad-hoc; onboarding and support are painful", score: 0 },
      { label: "Reactive support with no clear process or ownership", score: 1 },
      { label: "Decent support, but inconsistent SLAs and asset tracking", score: 2 },
      { label: "Smooth onboarding, service desk, and asset management", score: 3 },
    ],
  },
  {
    id: "ownership",
    pillar: "Ownership & Documentation",
    serviceSlug: "strategy-advisory",
    question: "After something is built or launched, who owns and documents it?",
    options: [
      { label: "No clear ownership; little to no documentation", score: 0 },
      { label: "Tribal knowledge; documentation is thin", score: 1 },
      { label: "Some ownership and docs, but gaps remain", score: 2 },
      { label: "Clear ownership, runbooks, and living documentation", score: 3 },
    ],
  },
];

export const maxScore = assessmentQuestions.length * 3;

export type AssessmentTier = {
  min: number;
  max: number;
  label: string;
  headline: string;
  summary: string;
  recommendedOffer: string;
};

export const assessmentTiers: AssessmentTier[] = [
  {
    min: 0,
    max: 9,
    label: "At Risk",
    headline: "There are urgent gaps worth addressing now.",
    summary:
      "Several foundational areas — likely security, recovery, or delivery — leave the business exposed. The fastest path forward is a focused assessment to prioritize the highest-risk gaps and a 90-day plan to close them.",
    recommendedOffer: "Technology Health Check",
  },
  {
    min: 10,
    max: 16,
    label: "Developing",
    headline: "Solid in places, with clear room to mature.",
    summary:
      "You have building blocks in place but inconsistent execution across delivery, cloud, security, or operations. A targeted roadmap will help you standardize, automate, and reduce risk where it matters most.",
    recommendedOffer: "Technology Health Check",
  },
  {
    min: 17,
    max: 20,
    label: "Established",
    headline: "Strong foundation — time to optimize and scale.",
    summary:
      "Most fundamentals are in good shape. The opportunity now is optimization: reliability, cost, automation, and resilience — plus making sure ownership and recovery keep pace as you grow.",
    recommendedOffer: "Reliability & BCDR Program",
  },
  {
    min: 21,
    max: maxScore,
    label: "Optimized",
    headline: "Mature operations — let's protect and extend the lead.",
    summary:
      "You're operating at a high level. A partner like B&B adds value through continuous optimization, fractional leadership, and managed services that free your team to focus on the business.",
    recommendedOffer: "Fractional CTO Advisory",
  },
];

export function getTier(total: number): AssessmentTier {
  return (
    assessmentTiers.find((t) => total >= t.min && total <= t.max) ??
    assessmentTiers[0]
  );
}

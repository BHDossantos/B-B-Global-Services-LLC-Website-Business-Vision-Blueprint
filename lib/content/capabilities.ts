// Real technologies and platforms B&B works with — credible signal for
// technical buyers. Grouped by discipline. (No fabricated client logos.)

export const techStack: { category: string; tools: string[] }[] = [
  {
    category: "Cloud",
    tools: ["AWS", "Microsoft Azure", "Google Cloud", "Cloudflare"],
  },
  {
    category: "Containers & Orchestration",
    tools: ["Kubernetes", "Docker", "Helm", "ECS"],
  },
  {
    category: "Infrastructure as Code & CI/CD",
    tools: ["Terraform", "Ansible", "GitHub Actions", "GitLab CI", "ArgoCD"],
  },
  {
    category: "Observability & Reliability",
    tools: ["Datadog", "Prometheus", "Grafana", "OpenTelemetry", "PagerDuty"],
  },
  {
    category: "Languages & Frameworks",
    tools: ["TypeScript", "Python", "Go", "React", "Next.js", "Node.js"],
  },
  {
    category: "Data & AI",
    tools: ["PostgreSQL", "Snowflake", "dbt", "Kafka", "LLMs & RAG"],
  },
  {
    category: "Security & Identity",
    tools: ["Okta", "HashiCorp Vault", "Snyk", "SIEM", "Zero Trust"],
  },
];

// Capability-based proof points (not client metrics) — honest credibility.
export const capabilityStats = [
  { value: "8", label: "Lifecycle phases, idea to operations" },
  { value: "6", label: "Disciplines under one partner" },
  { value: "3", label: "Major clouds (AWS · Azure · GCP)" },
  { value: "24/7", label: "Follow-the-sun delivery model" },
];

// Positioning comparison — the core "where B&B fits" story.
export const comparison = {
  columns: ["Basic IT Provider", "B&B Global Services", "Large Consulting Firm"],
  // each row: [dimension, basic, bb, big]
  rows: [
    {
      dimension: "Strategy and hands-on build",
      basic: "Support only",
      bb: "Both — advise and build",
      big: "Strategy-heavy, build outsourced",
      bbWin: true,
    },
    {
      dimension: "Enterprise-grade practices",
      basic: "Limited",
      bb: "Yes — cloud, DevSecOps, SRE",
      big: "Yes",
      bbWin: true,
    },
    {
      dimension: "Speed and flexibility",
      basic: "Variable",
      bb: "Fast, senior, direct",
      big: "Slow, layered, costly",
      bbWin: true,
    },
    {
      dimension: "One partner across the lifecycle",
      basic: "No",
      bb: "Yes — idea to operations",
      big: "Fragmented teams",
      bbWin: true,
    },
    {
      dimension: "Long-term ownership and support",
      basic: "Reactive",
      bb: "Built in — managed services",
      big: "Hand-off risk",
      bbWin: true,
    },
    {
      dimension: "Cost",
      basic: "Low but limited",
      bb: "Right-sized for mid-market",
      big: "Very high",
      bbWin: true,
    },
  ],
};

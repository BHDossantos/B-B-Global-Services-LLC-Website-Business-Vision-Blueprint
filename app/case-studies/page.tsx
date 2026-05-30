import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Section, Card } from "@/components/ui";
import { CTABanner } from "@/components/CTABanner";
import { caseStudies } from "@/lib/content/site-content";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Anonymized examples of technology delivery outcomes across observability, cloud modernization, DevSecOps, BCDR, managed support, and AI-enabled applications.",
};

const fields: { key: keyof (typeof caseStudies)[number]; label: string }[] = [
  { key: "challenge", label: "Challenge" },
  { key: "approach", label: "Approach" },
  { key: "solution", label: "Solution" },
  { key: "outcome", label: "Outcome" },
];

export default function CaseStudiesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Case Studies"
        title="Outcomes From the Field"
        description="Anonymized examples drawn from enterprise and mid-market delivery experience. We never name past employers — we use language like 'large healthcare enterprise' or 'enterprise SaaS organization.'"
      />

      <Section>
        <div className="grid gap-8 lg:grid-cols-2">
          {caseStudies.map((study) => (
            <Card key={study.slug} className="flex flex-col">
              <p className="text-xs font-semibold uppercase tracking-wide text-accent-600">
                {study.industry}
              </p>
              <h2 className="mt-2 text-xl font-semibold text-navy-900">
                {study.title}
              </h2>
              <dl className="mt-5 space-y-4">
                {fields.map((f) => (
                  <div key={f.key}>
                    <dt className="text-xs font-semibold uppercase tracking-wide text-navy-500">
                      {f.label}
                    </dt>
                    <dd className="mt-1 text-sm leading-relaxed text-navy-700">
                      {study[f.key]}
                    </dd>
                  </div>
                ))}
              </dl>
            </Card>
          ))}
        </div>
      </Section>

      <CTABanner
        headline="Want Results Like These for Your Business?"
        copy="Let's talk about your goals, systems, and constraints — and map a path from where you are to reliable operations."
      />
    </>
  );
}

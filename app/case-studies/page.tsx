import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { Section, Card } from "@/components/ui";
import { CTABanner } from "@/components/CTABanner";
import { Icon } from "@/components/Icon";
import { caseStudies } from "@/lib/content/site-content";
import { localizedCaseStudies } from "@/lib/content/i18n";
import { getMessages } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Anonymized examples of technology delivery outcomes across observability, cloud modernization, DevSecOps, BCDR, managed support, and AI-enabled applications.",
};

const fieldKeys = ["challenge", "approach", "solution", "outcome"] as const satisfies readonly (keyof (typeof caseStudies)[number])[];

export default function CaseStudiesPage() {
  const m = getMessages();
  const t = m.pages.caseStudies;
  return (
    <>
      <PageHeader eyebrow={t.eyebrow} title={t.title} description={t.description} />

      <Section>
        <div className="grid gap-8 lg:grid-cols-2">
          {localizedCaseStudies().map((study) => (
            <Card key={study.slug} className="flex flex-col">
              <p className="text-xs font-semibold uppercase tracking-wide text-accent-600">
                {study.industry}
              </p>
              <h2 className="mt-2 text-xl font-semibold text-navy-900">
                {study.title}
              </h2>
              <dl className="mt-5 space-y-4">
                {fieldKeys.map((key, i) => (
                  <div key={key}>
                    <dt className="text-xs font-semibold uppercase tracking-wide text-navy-500">
                      {t.sections[i]?.label}
                    </dt>
                    <dd className="mt-1 text-sm leading-relaxed text-navy-700">
                      {study[key]}
                    </dd>
                  </div>
                ))}
              </dl>
              <Link
                href={`/case-studies/${study.slug}`}
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-600 transition hover:gap-2.5"
              >
                {t.readFullStory} <Icon name="arrow" className="h-4 w-4" />
              </Link>
            </Card>
          ))}
        </div>
      </Section>

      <CTABanner headline={t.ctaHeadline} copy={t.ctaCopy} />
    </>
  );
}

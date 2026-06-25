import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { Section, SectionHeading, Button, Card } from "@/components/ui";
import { CTABanner } from "@/components/CTABanner";
import { Icon } from "@/components/Icon";
import { caseStudies } from "@/lib/content/site-content";
import { siteConfig } from "@/lib/siteConfig";

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const study = caseStudies.find((c) => c.slug === params.slug);
  if (!study) return {};
  return {
    title: study.title,
    description: `${study.industry} — ${study.challenge}`,
  };
}

const sections = [
  { key: "challenge", label: "Challenge", question: "What problem existed?" },
  { key: "approach", label: "Approach", question: "What B&B did." },
  { key: "solution", label: "Solution", question: "What was implemented." },
  { key: "outcome", label: "Outcome", question: "What improved?" },
] as const;

export default function CaseStudyPage({
  params,
}: {
  params: { slug: string };
}) {
  const study = caseStudies.find((c) => c.slug === params.slug);
  if (!study) notFound();

  const others = caseStudies.filter((c) => c.slug !== study.slug).slice(0, 3);

  return (
    <>
      <PageHeader
        eyebrow={study.industry}
        title={study.title}
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Case Studies", href: "/case-studies" },
          { name: study.title },
        ]}
      >
        <Button href={siteConfig.bookingUrl} external>
          Book a Consultation
        </Button>
      </PageHeader>

      <Section>
        <div className="mx-auto max-w-3xl">
          <ol className="relative space-y-8 border-l-2 border-navy-100 pl-8">
            {sections.map((s) => (
              <li key={s.key} className="relative">
                <span className="absolute -left-[41px] flex h-6 w-6 items-center justify-center rounded-full bg-accent-500 text-white">
                  <Icon name="check" className="h-3.5 w-3.5" />
                </span>
                <h2 className="text-xl font-semibold text-navy-900">
                  {s.label}
                </h2>
                <p className="text-xs font-medium uppercase tracking-wide text-navy-400">
                  {s.question}
                </p>
                <p className="mt-2 leading-relaxed text-navy-700">
                  {study[s.key]}
                </p>
              </li>
            ))}
          </ol>

          <div className="mt-10 rounded-2xl border border-navy-100 bg-navy-50 p-6 text-sm text-navy-600">
            <p>
              <span className="font-semibold text-navy-800">Note:</span> Client
              identities are anonymized. We never name past employers or clients
              without written approval.
            </p>
          </div>
        </div>
      </Section>

      {others.length > 0 && (
        <Section muted>
          <SectionHeading eyebrow="More" title="Other Case Studies" />
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {others.map((c) => (
              <Link key={c.slug} href={`/case-studies/${c.slug}`}>
                <Card className="h-full">
                  <p className="text-xs font-semibold uppercase tracking-wide text-accent-600">
                    {c.industry}
                  </p>
                  <h3 className="mt-2 text-base font-semibold text-navy-900">
                    {c.title}
                  </h3>
                  <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-600">
                    Read <Icon name="arrow" className="h-4 w-4" />
                  </span>
                </Card>
              </Link>
            ))}
          </div>
        </Section>
      )}

      <CTABanner
        headline="Want Results Like These for Your Business?"
        copy="Let's talk about your goals, systems, and constraints — and map a path from where you are to reliable operations."
      />
    </>
  );
}

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { Section, SectionHeading, Button } from "@/components/ui";
import { PillItem } from "@/components/cards";
import { CTABanner } from "@/components/CTABanner";
import { Icon } from "@/components/Icon";
import { solutions } from "@/lib/content/solutions";
import { localizedSolution, localizedService } from "@/lib/content/i18n";
import { getMessages } from "@/lib/i18n";
import { siteConfig } from "@/lib/siteConfig";

export function generateStaticParams() {
  return solutions.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const solution = localizedSolution(params.slug);
  if (!solution) return {};
  return {
    title: solution.title,
    description: solution.summary,
  };
}

export default function SolutionPage({
  params,
}: {
  params: { slug: string };
}) {
  const solution = localizedSolution(params.slug);
  if (!solution) notFound();

  const m = getMessages();
  const t = m.detail.solution;
  const related = solution.relatedServices
    .map((slug) => localizedService(slug))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));

  return (
    <>
      <PageHeader
        eyebrow={m.nav.solutions}
        title={solution.title}
        description={solution.body}
        breadcrumbs={[
          { name: m.common.home, href: "/" },
          { name: m.nav.solutions, href: "/solutions" },
          { name: solution.title },
        ]}
      >
        <Button href={siteConfig.bookingUrl} external>
          {m.cta.bookConsultation}
        </Button>
      </PageHeader>

      <Section>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeading eyebrow={t.whoItsFor} title={solution.audience} />
            <p className="mt-6 text-lg leading-relaxed text-navy-600">
              {solution.body}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href={siteConfig.bookingUrl} external>
                {m.cta.getStarted} <Icon name="arrow" className="h-4 w-4" />
              </Button>
              <Button href="/contact" variant="ghost">
                {m.common.requestProposal}
              </Button>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-navy-900">{t.whatsIncluded}</h3>
            <ul className="mt-5 grid gap-3">
              {solution.includes.map((item) => (
                <PillItem key={item}>{item}</PillItem>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {related.length > 0 && (
        <Section muted>
          <SectionHeading eyebrow={t.relatedEyebrow} title={t.relatedTitle} />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="group flex items-center justify-between gap-3 rounded-xl border border-navy-100 bg-white px-5 py-4 shadow-sm transition hover:border-navy-200"
              >
                <span className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent-50 text-accent-600">
                    <Icon name={s.icon} className="h-5 w-5" />
                  </span>
                  <span className="text-sm font-semibold text-navy-800">
                    {s.title}
                  </span>
                </span>
                <Icon name="arrow" className="h-4 w-4 text-navy-400 transition group-hover:text-accent-600" />
              </Link>
            ))}
          </div>
        </Section>
      )}

      <CTABanner />
    </>
  );
}

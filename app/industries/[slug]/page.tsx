import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { Section, SectionHeading, Button, Card } from "@/components/ui";
import { CTABanner } from "@/components/CTABanner";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import { Icon } from "@/components/Icon";
import { Reveal } from "@/components/Reveal";
import { siteConfig } from "@/lib/siteConfig";
import { industryPages, getIndustry } from "@/lib/content/industries-detail";
import { getService } from "@/lib/content/services";

export function generateStaticParams() {
  return industryPages.map((i) => ({ slug: i.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const industry = getIndustry(params.slug);
  if (!industry) return {};
  return {
    title: industry.title,
    description: industry.metaDescription,
    keywords: industry.keywords,
    alternates: { canonical: `/industries/${industry.slug}` },
  };
}

export default function IndustryPage({
  params,
}: {
  params: { slug: string };
}) {
  const industry = getIndustry(params.slug);
  if (!industry) notFound();

  const related = industry.relatedServices
    .map((s) => getService(s))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));
  const others = industryPages.filter((i) => i.slug !== industry.slug);

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Industries", path: "/industries" },
          { name: industry.name, path: `/industries/${industry.slug}` },
        ]}
      />

      <PageHeader
        eyebrow={`Industries · ${industry.name}`}
        title={industry.title}
        description={industry.intro}
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Industries", href: "/industries" },
          { name: industry.name },
        ]}
      >
        <Button href={siteConfig.bookingUrl}>Book a Consultation</Button>
        <Button href="/assessment" variant="ghost" className="border-white/25 text-white hover:bg-white/10">
          Free Health Check
        </Button>
      </PageHeader>

      <Section>
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="The Challenge" title={`What ${industry.name} Teams Are Up Against`} />
            <ul className="mt-8 space-y-3">
              {industry.challenges.map((c) => (
                <li key={c} className="flex items-start gap-3">
                  <span className="mt-1 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-gold-500/15 text-gold-600">
                    <span className="h-1.5 w-1.5 rounded-full bg-gold-500" />
                  </span>
                  <span className="text-navy-700">{c}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SectionHeading eyebrow="How We Help" title="Where We Make the Difference" />
            <ul className="mt-8 space-y-3">
              {industry.howWeHelp.map((h) => (
                <li key={h} className="flex items-start gap-3 rounded-lg border border-navy-100 bg-white px-4 py-3">
                  <Icon name="check" className="mt-0.5 h-5 w-5 flex-none text-accent-500" />
                  <span className="text-navy-800">{h}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {related.length > 0 && (
        <Section muted>
          <SectionHeading eyebrow="Most Relevant Services" title={`Services That Move the Needle in ${industry.name}`} />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((s, i) => (
              <Reveal key={s.slug} delay={i * 60}>
                <Link href={`/services/${s.slug}`}>
                  <Card className="h-full">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent-50 text-accent-600">
                      <Icon name={s.icon} className="h-5 w-5" />
                    </div>
                    <h3 className="mt-4 text-base font-semibold text-navy-900">{s.title}</h3>
                    <p className="mt-2 text-sm text-navy-600">{s.summary}</p>
                  </Card>
                </Link>
              </Reveal>
            ))}
          </div>
        </Section>
      )}

      <Section>
        <SectionHeading eyebrow="More Industries" title="We Serve Organizations Like Yours" />
        <div className="mt-8 flex flex-wrap gap-3">
          {others.map((i) => (
            <Link
              key={i.slug}
              href={`/industries/${i.slug}`}
              className="inline-flex items-center gap-2 rounded-full border border-navy-200 bg-white px-4 py-2 text-sm font-medium text-navy-700 transition hover:border-navy-400 hover:text-accent-600"
            >
              <Icon name={i.icon} className="h-4 w-4 text-accent-500" />
              {i.name}
            </Link>
          ))}
        </div>
      </Section>

      <CTABanner
        headline={`Let's Talk About Technology for Your ${industry.name} Business`}
        copy="Book a consultation or take the free Technology Health Check to see where you stand and what to prioritize."
      />
    </>
  );
}

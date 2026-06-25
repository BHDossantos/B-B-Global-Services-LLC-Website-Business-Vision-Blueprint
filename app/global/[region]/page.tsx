import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { Section, SectionHeading, Button, Card } from "@/components/ui";
import { ServiceCard } from "@/components/cards";
import { CTABanner } from "@/components/CTABanner";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import { Icon } from "@/components/Icon";
import { siteConfig } from "@/lib/siteConfig";
import { regions, getRegion } from "@/lib/content/global";
import { services } from "@/lib/content/services";

export function generateStaticParams() {
  return regions.map((r) => ({ region: r.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { region: string };
}): Metadata {
  const region = getRegion(params.region);
  if (!region) return {};
  return {
    title: region.title,
    description: region.description,
    keywords: region.keywords,
    alternates: { canonical: `/global/${region.slug}` },
  };
}

export default function RegionPage({
  params,
}: {
  params: { region: string };
}) {
  const region = getRegion(params.region);
  if (!region) notFound();

  const others = regions.filter((r) => r.slug !== region.slug);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Technology Services — ${region.name}`,
    description: region.description,
    url: `${siteConfig.url}/global/${region.slug}`,
    provider: {
      "@type": "ProfessionalService",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    areaServed: region.markets.map((m) => ({ "@type": "Country", name: m })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Global Delivery", path: "/global" },
          { name: region.name, path: `/global/${region.slug}` },
        ]}
      />

      <PageHeader
        eyebrow={`Global Delivery · ${region.name}`}
        title={region.title}
        description={region.intro}
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Global Delivery", href: "/global" },
          { name: region.name },
        ]}
      >
        <Button href={siteConfig.bookingUrl} external>
          Book a Consultation
        </Button>
        <Button href="/assessment" variant="ghost" className="border-white/25 text-white hover:bg-white/10">
          Free Health Check
        </Button>
      </PageHeader>

      <Section>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:items-start">
          <div className="lg:sticky lg:top-24">
            <SectionHeading eyebrow="Why B&B Here" title={`Delivering in ${region.name}`} />
            <ul className="mt-6 space-y-3">
              {region.highlights.map((h) => (
                <li key={h} className="flex items-start gap-3">
                  <Icon name="check" className="mt-1 h-5 w-5 flex-none text-accent-500" />
                  <span className="text-navy-700">{h}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 rounded-xl border border-navy-100 bg-navy-50 p-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-accent-600">
                Markets served
              </p>
              <p className="mt-2 text-sm text-navy-700">{region.markets.join(" · ")}</p>
            </div>
          </div>

          <div>
            <SectionHeading eyebrow="Capabilities" title="Full-Lifecycle Technology Services" />
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {services.map((s) => (
                <ServiceCard key={s.slug} service={s} />
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section muted>
        <SectionHeading eyebrow="Worldwide" title="Other Regions We Serve" />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {others.map((r) => (
            <Link key={r.slug} href={`/global/${r.slug}`}>
              <Card className="h-full">
                <h3 className="text-base font-semibold text-navy-900">{r.name}</h3>
                <p className="mt-2 text-sm text-navy-600">{r.blurb}</p>
                <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-600">
                  Explore <Icon name="arrow" className="h-4 w-4" />
                </span>
              </Card>
            </Link>
          ))}
        </div>
      </Section>

      <CTABanner
        headline={`Ready to Deliver in ${region.name}?`}
        copy="Book a consultation or take the free Technology Health Check to see where you stand and what to prioritize."
      />
    </>
  );
}

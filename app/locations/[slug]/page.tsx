import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHeader } from "@/components/PageHeader";
import { Section, SectionHeading, Button } from "@/components/ui";
import { ServiceCard, IndustryCard } from "@/components/cards";
import { CTABanner } from "@/components/CTABanner";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import { siteConfig } from "@/lib/siteConfig";
import { locations, getLocation } from "@/lib/content/locations";
import { services } from "@/lib/content/services";
import { industries } from "@/lib/content/site-content";

export function generateStaticParams() {
  return locations.map((l) => ({ slug: l.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const loc = getLocation(params.slug);
  if (!loc) return {};
  return {
    title: loc.title,
    description: loc.description,
    keywords: loc.keywords,
    alternates: { canonical: `/locations/${loc.slug}` },
  };
}

export default function LocationPage({
  params,
}: {
  params: { slug: string };
}) {
  const loc = getLocation(params.slug);
  if (!loc) notFound();

  // LocalBusiness schema scoped to this service area.
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: `${siteConfig.name} — ${loc.city}`,
    description: loc.description,
    url: `${siteConfig.url}/locations/${loc.slug}`,
    areaServed: { "@type": "AdministrativeArea", name: `${loc.city}, ${loc.region}` },
    email: siteConfig.email,
    telephone: siteConfig.phone,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: `${loc.city}`, path: `/locations/${loc.slug}` },
        ]}
      />

      <PageHeader
        eyebrow={`Serving ${loc.city}`}
        title={loc.title}
        description={loc.intro}
      >
        <Button href={siteConfig.bookingUrl} external>
          Book a Consultation
        </Button>
        <Button href="/assessment" variant="ghost" className="border-white/25 text-white hover:bg-white/10">
          Free Health Check
        </Button>
      </PageHeader>

      <Section>
        <SectionHeading
          eyebrow="Capabilities"
          title={`Full-Lifecycle Technology Services for ${loc.city} Businesses`}
          description="One partner for strategy, software, cloud, security, reliability, and managed support."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <ServiceCard key={s.slug} service={s} />
          ))}
        </div>
      </Section>

      <Section muted>
        <SectionHeading
          eyebrow="Who We Help"
          title={`Industries We Serve Near ${loc.city}`}
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {industries.slice(0, 8).map((i) => (
            <IndustryCard key={i.name} {...i} />
          ))}
        </div>
      </Section>

      <CTABanner
        headline={`Ready to Talk to a ${loc.city} Technology Partner?`}
        copy="Book a consultation or take the free Technology Health Check to see where you stand and what to prioritize."
      />
    </>
  );
}

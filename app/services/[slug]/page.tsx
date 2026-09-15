import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { Section, SectionHeading, Button, Card } from "@/components/ui";
import { PillItem } from "@/components/cards";
import { CTABanner } from "@/components/CTABanner";
import { FAQAccordion } from "@/components/FAQAccordion";
import { BreadcrumbJsonLd, ServiceJsonLd, FaqJsonLd } from "@/components/JsonLd";
import { Icon } from "@/components/Icon";
import { services } from "@/lib/content/services";
import { localizedService, localizedServices } from "@/lib/content/i18n";
import { getMessages } from "@/lib/i18n";
import { getServiceFaqs } from "@/lib/content/service-faqs";
import { siteConfig } from "@/lib/siteConfig";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const service = localizedService(params.slug);
  if (!service) return {};
  return {
    title: service.headline,
    description: service.summary,
  };
}

export default function ServicePillarPage({
  params,
}: {
  params: { slug: string };
}) {
  const service = localizedService(params.slug);
  if (!service) notFound();

  const m = getMessages();
  const t = m.detail.service;
  const others = localizedServices().filter((s) => s.slug !== service.slug);
  const faqs = getServiceFaqs(service.slug);

  return (
    <>
      <ServiceJsonLd
        name={service.title}
        description={service.summary}
        path={`/services/${service.slug}`}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: service.title, path: `/services/${service.slug}` },
        ]}
      />
      <PageHeader
        eyebrow={m.nav.services}
        title={service.headline}
        description={service.summary}
        breadcrumbs={[
          { name: m.common.home, href: "/" },
          { name: m.nav.services, href: "/services" },
          { name: service.title },
        ]}
      >
        <Button href={siteConfig.bookingUrl} external>
          {m.cta.bookConsultation}
        </Button>
        <Button href="/contact" variant="ghost" className="border-white/25 text-white hover:bg-white/10">
          {m.common.requestProposal}
        </Button>
      </PageHeader>

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <SectionHeading
              eyebrow={t.whatsIncluded}
              title={t.capabilities}
            />
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {service.services.map((item) => (
                <PillItem key={item}>{item}</PillItem>
              ))}
            </ul>

            <div className="mt-12">
              <SectionHeading eyebrow={t.outcomes} title={t.deliverables} />
              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {service.deliverables.map((item) => (
                  <PillItem key={item}>{item}</PillItem>
                ))}
              </ul>
            </div>
          </div>

          <aside className="lg:sticky lg:top-24 lg:self-start">
            <Card className="bg-navy-50">
              <h3 className="text-lg font-semibold text-navy-900">{t.customTitle}</h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-600">{t.customBody}</p>
              <ul className="mt-5 space-y-2.5 text-sm text-navy-700">
                {t.customBullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-2.5">
                    <Icon name="check" className="mt-0.5 h-4 w-4 flex-none text-accent-500" />
                    {bullet}
                  </li>
                ))}
              </ul>
              <Button href={siteConfig.bookingUrl} external className="mt-6 w-full">
                {m.cta.talkToTeam} <Icon name="arrow" className="h-4 w-4" />
              </Button>
              <Link
                href="/contact"
                className="mt-3 inline-flex w-full items-center justify-center text-sm font-semibold text-accent-600 hover:text-accent-700"
              >
                {m.common.requestCustomQuote}
              </Link>
            </Card>
          </aside>
        </div>
      </Section>

      <Section muted>
        <SectionHeading eyebrow={t.exploreEyebrow} title={t.otherServices} />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {others.map((s) => (
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

      {faqs.length > 0 && (
        <Section>
          <FaqJsonLd items={faqs} />
          <SectionHeading align="center" eyebrow={m.common.faq} title={`${service.title} — ${t.commonQuestions}`} />
          <div className="mx-auto mt-10 max-w-3xl">
            <FAQAccordion items={faqs} />
          </div>
        </Section>
      )}

      <CTABanner />
    </>
  );
}

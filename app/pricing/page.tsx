import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { Section, SectionHeading, Button, Card, cn } from "@/components/ui";
import { CTABanner } from "@/components/CTABanner";
import { Icon } from "@/components/Icon";
import { siteConfig } from "@/lib/siteConfig";
import { localizedServices, localizedSiteContent } from "@/lib/content/i18n";
import { getMessages } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Engagements & Pricing — Custom Quotes Built Around Your Goals",
  description:
    "Every B&B Global Services engagement is scoped to your environment, goals, and budget. Talk to our team for a tailored proposal across assessments, projects, and managed services.",
};

// The flagship packaged ways to start, with the first featured.
const featuredIndex = 0;

const modelIcons = ["compass", "code", "support"];

export default function PricingPage() {
  const m = getMessages();
  const t = m.pages.pricing;
  const { engagementOffers } = localizedSiteContent();
  return (
    <>
      <PageHeader
        eyebrow={t.eyebrow}
        title={t.title}
        description={t.description}
      >
        <Button href={siteConfig.bookingUrl} external>
          {m.cta.talkToTeam}
        </Button>
        <Button href="/assessment" variant="ghost" className="border-white/25 text-white hover:bg-white/10">
          {t.takeHealthCheck}
        </Button>
      </PageHeader>

      {/* Ways to start */}
      <Section>
        <SectionHeading
          align="center"
          eyebrow={t.startEyebrow}
          title={t.startTitle}
          description={t.startBody}
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {engagementOffers.map((offer, i) => {
            const featured = i === featuredIndex;
            return (
              <div
                key={offer.name}
                className={cn(
                  "relative flex flex-col rounded-2xl border p-7 shadow-sm",
                  featured
                    ? "border-accent-400 bg-navy-950 text-white ring-1 ring-accent-400"
                    : "border-navy-100 bg-white"
                )}
              >
                {featured && (
                  <span className="absolute -top-3 left-7 rounded-full bg-accent-500 px-3 py-1 text-xs font-semibold text-white">
                    {m.common.mostPopular}
                  </span>
                )}
                <h3 className={cn("text-lg font-semibold", featured ? "text-white" : "text-navy-900")}>
                  {offer.name}
                </h3>
                <p className={cn("mt-2 text-sm font-semibold uppercase tracking-wide", featured ? "text-accent-300" : "text-accent-600")}>
                  {m.common.customQuote}
                </p>
                <ul className="mt-6 flex-1 space-y-2.5">
                  {offer.includes.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm">
                      <Icon
                        name="check"
                        className={cn("mt-0.5 h-4 w-4 flex-none", featured ? "text-accent-300" : "text-accent-500")}
                      />
                      <span className={featured ? "text-navy-100" : "text-navy-700"}>{item}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  href={siteConfig.bookingUrl}
                  external
                  variant={featured ? "primary" : "ghost"}
                  className="mt-7 w-full"
                >
                  {m.common.requestQuote}
                </Button>
              </div>
            );
          })}
        </div>
      </Section>

      {/* How we price */}
      <Section muted>
        <SectionHeading
          eyebrow={t.howEyebrow}
          title={t.howTitle}
          description={t.howBody}
        />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {t.models.map((model, i) => (
            <Card key={model.title}>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-50 text-accent-600">
                <Icon name={modelIcons[i] ?? "compass"} className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-navy-900">{model.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-600">{model.body}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Services list (no prices) */}
      <Section>
        <SectionHeading
          eyebrow={t.deliverEyebrow}
          title={t.deliverTitle}
          description={t.deliverBody}
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {localizedServices().map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className="group flex items-center justify-between gap-3 rounded-xl border border-navy-100 bg-white px-5 py-4 shadow-sm transition hover:border-navy-200"
            >
              <span className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent-50 text-accent-600">
                  <Icon name={s.icon} className="h-5 w-5" />
                </span>
                <span className="text-sm font-semibold text-navy-800">{s.title}</span>
              </span>
              <Icon name="arrow" className="h-4 w-4 text-navy-400 transition group-hover:text-accent-600" />
            </Link>
          ))}
        </div>
      </Section>

      <CTABanner headline={t.ctaHeadline} copy={t.ctaCopy} buttonLabel={t.ctaButton} />
    </>
  );
}

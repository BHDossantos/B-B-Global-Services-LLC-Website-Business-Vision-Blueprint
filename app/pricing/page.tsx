import { getLocale as readActiveLocale } from "@/lib/i18n";
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
  title: "Engagements & Pricing — Start With a €750 Cloud Cost and Reliability Check",
  description:
    "Start with a fixed-fee 5-day Cloud Cost and Reliability Check for €750, credited in full to the €4,500 Production Reliability Sprint. Larger projects and managed services are quoted to fit.",
};

// The flagship packaged ways to start, with the first featured.
const featuredIndex = 0;

const modelIcons = ["compass", "code", "support"];

export default async function PricingPage() {
  const activeLocale = await readActiveLocale();
  const m = getMessages(activeLocale);
  const t = m.pages.pricing;
  const { engagementOffers } = localizedSiteContent(activeLocale);
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

      {/* The fixed-price check: the one priced way in */}
      <Section>
        <div className="mx-auto grid max-w-5xl gap-8 rounded-2xl border border-accent-400 bg-navy-950 p-8 text-white shadow-sm ring-1 ring-accent-400 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-accent-300">{t.check.eyebrow}</p>
            <h2 className="mt-2 text-2xl font-bold text-white sm:text-3xl">{t.check.title}</h2>
            <p className="mt-4 flex items-baseline gap-3">
              <span className="text-4xl font-bold text-white">{t.check.price}</span>
              <span className="text-sm text-navy-200">{t.check.priceNote}</span>
            </p>
            <p className="mt-4 text-navy-100">{t.check.body}</p>
            <ul className="mt-6 space-y-2.5">
              {t.check.deliverables.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm">
                  <Icon name="check" className="mt-0.5 h-4 w-4 flex-none text-accent-300" />
                  <span className="text-navy-100">{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm font-semibold text-accent-300">{t.check.credit}</p>
            <Button href={siteConfig.bookingUrl} external className="mt-6">
              {t.check.cta}
            </Button>
          </div>
          <div className="rounded-xl bg-white/5 p-6">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-navy-200">{t.check.ladderTitle}</h3>
            <ol className="mt-4 space-y-4">
              {t.check.ladder.map((step, i) => (
                <li key={step.name} className="flex gap-3">
                  <span className="flex h-7 w-7 flex-none items-center justify-center rounded-full bg-accent-500 text-sm font-semibold text-white">
                    {i + 1}
                  </span>
                  <span>
                    <span className="block text-sm font-semibold text-white">{step.name}</span>
                    <span className="block text-sm text-navy-200">{step.detail}</span>
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </Section>

      {/* Ways to start */}
      <Section muted>
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
      <Section>
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
      <Section muted>
        <SectionHeading
          eyebrow={t.deliverEyebrow}
          title={t.deliverTitle}
          description={t.deliverBody}
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {localizedServices(activeLocale).map((s) => (
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

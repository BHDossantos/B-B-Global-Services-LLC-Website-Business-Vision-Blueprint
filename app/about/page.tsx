import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Section, SectionHeading, Button, Card } from "@/components/ui";
import { LifecycleStrip } from "@/components/LifecycleFramework";
import { CTABanner } from "@/components/CTABanner";
import { Icon } from "@/components/Icon";
import { siteConfig } from "@/lib/siteConfig";
import { getMessages } from "@/lib/i18n";
import { differentiators } from "@/lib/content/site-content";

export const metadata: Metadata = {
  title: "About — Built by Operators, Not Just Consultants",
  description:
    "B&B Global Services closes the gap between technology ideas and real operational execution — combining strategy, engineering, security, operations, and support.",
};

export default function AboutPage() {
  const m = getMessages();
  const t = m.pages.about;
  return (
    <>
      <PageHeader eyebrow={t.eyebrow} title={t.title} description={t.description} />

      <Section>
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow={t.approachEyebrow} title={t.approachTitle} />
            <p className="mt-6 text-lg leading-relaxed text-navy-600">{t.approachBody}</p>
            <div className="mt-8 space-y-3">
              {differentiators.slice(0, 4).map((d) => (
                <div key={d} className="flex items-start gap-3">
                  <Icon name="check" className="mt-1 h-5 w-5 flex-none text-accent-500" />
                  <p className="text-navy-700">{d}</p>
                </div>
              ))}
            </div>
          </div>

          <Card className="bg-navy-50">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-accent-600">
              {t.visionLabel}
            </h3>
            <p className="mt-2 text-navy-800">{t.visionBody}</p>
            <h3 className="mt-8 text-sm font-semibold uppercase tracking-wider text-accent-600">
              {t.missionLabel}
            </h3>
            <p className="mt-2 text-navy-800">{t.missionBody}</p>
          </Card>
        </div>
      </Section>

      {/* Founder */}
      <Section muted>
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div className="flex flex-col items-start">
            <div className="flex h-28 w-28 items-center justify-center rounded-2xl bg-gradient-to-br from-accent-400 to-electric-500 text-3xl font-bold text-white shadow-md">
              BD
            </div>
            <h2 className="mt-5 text-2xl font-bold text-navy-900">
              Bruno Dossantos
            </h2>
            <p className="text-navy-600">{t.founderRole}</p>
          </div>
          <div>
            <SectionHeading eyebrow={t.founderEyebrow} title={t.founderTitle} />
            <p className="mt-6 text-lg leading-relaxed text-navy-600">{t.founderBio}</p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {t.expertise.map((e) => (
                <li
                  key={e}
                  className="rounded-full border border-navy-200 bg-white px-3.5 py-1.5 text-sm font-medium text-navy-700"
                >
                  {e}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeading
          align="center"
          eyebrow={t.deliverEyebrow}
          title={t.deliverTitle}
        />
        <div className="mt-10">
          <LifecycleStrip />
        </div>
        <div className="mt-10 text-center">
          <Button href={siteConfig.bookingUrl} external>
            {m.cta.bookConsultation} <Icon name="arrow" className="h-4 w-4" />
          </Button>
        </div>
      </Section>

      <CTABanner />
    </>
  );
}

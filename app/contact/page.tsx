import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Section, SectionHeading } from "@/components/ui";
import { ContactForm } from "@/components/ContactForm";
import { CalendlyEmbed } from "@/components/CalendlyEmbed";
import { Icon } from "@/components/Icon";
import { siteConfig } from "@/lib/siteConfig";
import { fill, getMessages } from "@/lib/i18n";
import { localizedSiteContent } from "@/lib/content/i18n";

export const metadata: Metadata = {
  title: "Contact — Schedule a Discovery Call",
  description:
    "Tell us about your goals and systems. Book a consultation, request an assessment, or ask about managed services.",
};

export default function ContactPage() {
  const m = getMessages();
  const t = m.pages.contact;
  const { engagementOffers } = localizedSiteContent();
  return (
    <>
      <PageHeader eyebrow={t.eyebrow} title={t.title} description={t.description} />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.3fr_0.7fr]">
          <div>
            <ContactForm t={m.form} />
          </div>

          <aside className="space-y-8">
            {siteConfig.calendlyUrl ? (
              <div>
                <h2 className="text-lg font-semibold text-navy-900">{t.bookDirectTitle}</h2>
                <p className="mt-2 text-sm text-navy-600">{t.bookDirectBody}</p>
                <a
                  href={siteConfig.calendlyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 rounded-lg bg-accent-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-accent-600"
                >
                  <Icon name="calendar" className="h-4 w-4" />
                  {t.bookOnCalendly}
                </a>
              </div>
            ) : null}

            <div className="space-y-3 border-t border-navy-100 pt-6 text-sm">
              <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-3 text-navy-700 hover:text-accent-600">
                <Icon name="mail" className="h-5 w-5 text-accent-500" />
                {siteConfig.email}
              </a>
              <a href={`tel:${siteConfig.phone.replace(/[^+\d]/g, "")}`} className="flex items-center gap-3 text-navy-700 hover:text-accent-600">
                <Icon name="phone" className="h-5 w-5 text-accent-500" />
                {siteConfig.phone} <span className="text-navy-400">(US)</span>
              </a>
              <a href={`tel:${siteConfig.phoneIt.replace(/[^+\d]/g, "")}`} className="flex items-center gap-3 text-navy-700 hover:text-accent-600">
                <Icon name="phone" className="h-5 w-5 text-accent-500" />
                {siteConfig.phoneIt} <span className="text-navy-400">(IT)</span>
              </a>
              <p className="flex items-center gap-3 text-navy-600">
                <Icon name="building" className="h-5 w-5 text-accent-500" />
                {fill(t.hqLine, { hq: siteConfig.headquarters })}
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-navy-900">{t.capabilityTitle}</h2>
              <p className="mt-2 text-sm text-navy-600">{t.capabilityBody}</p>
              <a
                href="/capability-statement"
                className="mt-4 inline-flex items-center gap-2 rounded-lg border border-navy-200 px-5 py-3 text-sm font-semibold text-navy-800 transition hover:border-navy-400 hover:bg-navy-50"
              >
                <Icon name="arrow" className="h-4 w-4" />
                {t.viewDownload}
              </a>
            </div>

            <div className="rounded-2xl border border-navy-100 bg-navy-50 p-6">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-accent-600">
                {t.easyWaysTitle}
              </h3>
              <ul className="mt-4 space-y-4">
                {engagementOffers.map((offer) => (
                  <li key={offer.name}>
                    <p className="font-semibold text-navy-900">{offer.name}</p>
                    <p className="text-sm text-navy-600">{offer.tagline}</p>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </Section>

      {siteConfig.calendlyUrl ? (
        <Section muted>
          <SectionHeading
            align="center"
            eyebrow={t.bookInstantlyEyebrow}
            title={t.pickTimeTitle}
            description={t.pickTimeBody}
          />
          <div className="mx-auto mt-10 max-w-3xl">
            <CalendlyEmbed url={siteConfig.calendlyUrl} />
          </div>
        </Section>
      ) : null}
    </>
  );
}

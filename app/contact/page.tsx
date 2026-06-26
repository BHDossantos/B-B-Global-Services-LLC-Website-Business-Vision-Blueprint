import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Section, SectionHeading } from "@/components/ui";
import { ContactForm } from "@/components/ContactForm";
import { CalendlyEmbed } from "@/components/CalendlyEmbed";
import { Icon } from "@/components/Icon";
import { siteConfig } from "@/lib/siteConfig";
import { engagementOffers } from "@/lib/content/site-content";

export const metadata: Metadata = {
  title: "Contact — Schedule a Discovery Call",
  description:
    "Tell us about your goals and systems. Book a consultation, request an assessment, or ask about managed services.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Schedule a Discovery Call"
        description="Whether you're building an app, modernizing cloud, improving security, supporting your workforce, or preparing for disaster recovery — let's talk."
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.3fr_0.7fr]">
          <div>
            <ContactForm />
          </div>

          <aside className="space-y-8">
            {siteConfig.calendlyUrl ? (
              <div>
                <h2 className="text-lg font-semibold text-navy-900">
                  Prefer to book directly?
                </h2>
                <p className="mt-2 text-sm text-navy-600">
                  Grab a time that works for you and we&apos;ll come prepared.
                </p>
                <a
                  href={siteConfig.calendlyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 rounded-lg bg-accent-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-accent-600"
                >
                  <Icon name="calendar" className="h-4 w-4" />
                  Book on Calendly
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
                HQ: {siteConfig.headquarters} — serving clients worldwide
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-navy-900">
                Capability statement
              </h2>
              <p className="mt-2 text-sm text-navy-600">
                A one-page overview of our competencies, differentiators, and
                engagement models — ready to share with your team.
              </p>
              <a
                href="/capability-statement"
                className="mt-4 inline-flex items-center gap-2 rounded-lg border border-navy-200 px-5 py-3 text-sm font-semibold text-navy-800 transition hover:border-navy-400 hover:bg-navy-50"
              >
                <Icon name="arrow" className="h-4 w-4" />
                View &amp; Download
              </a>
            </div>

            <div className="rounded-2xl border border-navy-100 bg-navy-50 p-6">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-accent-600">
                Easy Ways to Start
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
            eyebrow="Book Instantly"
            title="Pick a Time That Works for You"
            description="Grab a slot for a 30-minute discovery call and we'll come prepared to talk through your goals."
          />
          <div className="mx-auto mt-10 max-w-3xl">
            <CalendlyEmbed url={siteConfig.calendlyUrl} />
          </div>
        </Section>
      ) : null}
    </>
  );
}

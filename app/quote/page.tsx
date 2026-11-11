import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/ui";
import { QuoteForm } from "@/components/QuoteForm";
import { Icon } from "@/components/Icon";
import { getMessages } from "@/lib/i18n";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Request an Insurance Quote",
  description:
    "Request an insurance quote from B&B Global Services. Share your name, email, and phone number and our team follows up by call, text, or email about your request.",
  alternates: { canonical: "/quote" },
  robots: { index: true, follow: true },
};

export default function QuotePage() {
  const m = getMessages();
  const t = m.quote;

  return (
    <>
      <PageHeader eyebrow={t.eyebrow} title={t.title} description={t.description} />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.25fr_0.75fr]">
          <div>
            <QuoteForm t={t} />
          </div>

          <aside className="space-y-8">
            <div>
              <h2 className="text-lg font-semibold text-navy-900">{t.stepsTitle}</h2>
              <ol className="mt-5 space-y-5">
                {t.steps.map((step, i) => (
                  <li key={step.title} className="flex gap-4">
                    <span className="flex h-8 w-8 flex-none items-center justify-center rounded-full bg-navy-900 font-mono text-sm font-bold text-accent-300">
                      {i + 1}
                    </span>
                    <div>
                      <h3 className="text-sm font-semibold text-navy-900">{step.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-navy-600">{step.body}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <div className="space-y-3 border-t border-navy-100 pt-6 text-sm">
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-3 text-navy-700 hover:text-accent-600"
              >
                <Icon name="mail" className="h-5 w-5 text-accent-500" />
                {siteConfig.email}
              </a>
              <a
                href={`tel:${siteConfig.phone.replace(/[^+\d]/g, "")}`}
                className="flex items-center gap-3 text-navy-700 hover:text-accent-600"
              >
                <Icon name="phone" className="h-5 w-5 text-accent-500" />
                {siteConfig.phone} <span className="text-navy-400">(US)</span>
              </a>
              <p className="flex items-center gap-3 text-navy-600">
                <Icon name="building" className="h-5 w-5 text-accent-500" />
                {siteConfig.name}, {siteConfig.headquarters}
              </p>
            </div>

            <div className="rounded-2xl border border-navy-100 bg-navy-50 p-6 text-sm text-navy-600">
              <p>{t.brokerDisclosure}</p>
              <p className="mt-3">
                <Link href="/privacy" className="font-semibold text-accent-600 underline">
                  {t.privacyPolicy}
                </Link>
                {" · "}
                <Link href="/terms" className="font-semibold text-accent-600 underline">
                  {t.termsOfService}
                </Link>
              </p>
            </div>
          </aside>
        </div>
      </Section>
    </>
  );
}

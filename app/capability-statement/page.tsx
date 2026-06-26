import type { Metadata } from "next";
import { Container } from "@/components/ui";
import { PrintButton } from "@/components/PrintButton";
import { siteConfig, lifecyclePhases } from "@/lib/siteConfig";
import { services } from "@/lib/content/services";
import {
  differentiators,
  industries,
  engagementOffers,
} from "@/lib/content/site-content";

export const metadata: Metadata = {
  title: "Capability Statement",
  description:
    "B&B Global Services LLC capability statement: core competencies, differentiators, industries served, and engagement models.",
};

export default function CapabilityStatementPage() {
  return (
    <div className="bg-white">
      {/* Screen-only toolbar */}
      <div className="border-b border-navy-100 bg-navy-50 print:hidden">
        <Container>
          <div className="flex flex-wrap items-center justify-between gap-4 py-6">
            <div>
              <h1 className="text-2xl font-bold text-navy-900">
                Capability Statement
              </h1>
              <p className="text-sm text-navy-600">
                Print or save this page as a PDF to share with prospects and
                partners.
              </p>
            </div>
            <PrintButton label="Print / Save as PDF" />
          </div>
        </Container>
      </div>

      {/* Document */}
      <Container className="print:max-w-none print:px-0">
        <article className="mx-auto max-w-4xl py-10 print:py-0">
          {/* Letterhead */}
          <header className="flex items-start justify-between gap-6 border-b-4 border-navy-900 pb-6">
            <div className="flex items-center gap-4">
              <div className="grid h-16 w-16 place-items-center rounded-xl bg-gradient-to-br from-accent-400 to-electric-500 text-xl font-bold text-white">
                B&amp;B
              </div>
              <div>
                <h2 className="text-2xl font-bold text-navy-900">
                  {siteConfig.name}
                </h2>
                <p className="text-sm font-medium text-accent-600">
                  Technology Delivery From Idea to Operations
                </p>
              </div>
            </div>
            <div className="text-right text-xs leading-relaxed text-navy-600">
              <p className="font-semibold text-navy-900">{siteConfig.email}</p>
              <p>{siteConfig.phone} (US) · {siteConfig.phoneIt} (IT)</p>
              <p>HQ: {siteConfig.headquarters} · Global delivery</p>
              <p>{siteConfig.url.replace("https://", "")}</p>
            </div>
          </header>

          {/* Overview */}
          <section className="mt-8">
            <h3 className="text-sm font-bold uppercase tracking-widest text-accent-600">
              Company Overview
            </h3>
            <p className="mt-3 leading-relaxed text-navy-800">
              {siteConfig.positioning} We combine consulting, software
              delivery, cloud, cybersecurity, IMAC, and managed services in one
              integrated delivery model — enterprise-level expertise for
              mid-market businesses without enterprise-level complexity or
              cost.
            </p>
          </section>

          {/* Core competencies */}
          <section className="mt-8">
            <h3 className="text-sm font-bold uppercase tracking-widest text-accent-600">
              Core Competencies
            </h3>
            <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 print:grid-cols-2">
              {services.map((s) => (
                <div
                  key={s.slug}
                  className="rounded-lg border border-navy-100 p-4 print:break-inside-avoid"
                >
                  <h4 className="font-semibold text-navy-900">{s.title}</h4>
                  <p className="mt-1 text-xs leading-relaxed text-navy-600">
                    {s.capabilities.join(" · ")}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Delivery framework */}
          <section className="mt-8 print:break-inside-avoid">
            <h3 className="text-sm font-bold uppercase tracking-widest text-accent-600">
              Delivery Framework
            </h3>
            <div className="mt-4 flex flex-wrap items-center gap-2">
              {lifecyclePhases.map((phase, i) => (
                <span key={phase} className="flex items-center gap-2">
                  <span className="rounded-full border border-navy-200 px-3 py-1 text-xs font-semibold text-navy-800">
                    {phase}
                  </span>
                  {i < lifecyclePhases.length - 1 && (
                    <span className="text-accent-500">→</span>
                  )}
                </span>
              ))}
            </div>
          </section>

          {/* Differentiators + Industries */}
          <div className="mt-8 grid gap-8 sm:grid-cols-2 print:grid-cols-2">
            <section className="print:break-inside-avoid">
              <h3 className="text-sm font-bold uppercase tracking-widest text-accent-600">
                Differentiators
              </h3>
              <ul className="mt-3 space-y-2">
                {differentiators.map((d) => (
                  <li key={d} className="flex gap-2 text-sm text-navy-800">
                    <span className="font-bold text-accent-500">›</span>
                    {d}
                  </li>
                ))}
              </ul>
            </section>

            <section className="print:break-inside-avoid">
              <h3 className="text-sm font-bold uppercase tracking-widest text-accent-600">
                Industries Served
              </h3>
              <ul className="mt-3 space-y-2">
                {industries.map((i) => (
                  <li key={i.name} className="flex gap-2 text-sm text-navy-800">
                    <span className="font-bold text-accent-500">›</span>
                    {i.name}
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {/* Engagement models */}
          <section className="mt-8 print:break-inside-avoid">
            <h3 className="text-sm font-bold uppercase tracking-widest text-accent-600">
              How to Engage
            </h3>
            <div className="mt-4 grid gap-4 sm:grid-cols-3 print:grid-cols-3">
              {engagementOffers.map((offer) => (
                <div
                  key={offer.name}
                  className="rounded-lg border border-navy-100 p-4"
                >
                  <h4 className="text-sm font-semibold text-navy-900">
                    {offer.name}
                  </h4>
                  <p className="mt-1 text-xs font-medium text-accent-600">
                    {offer.tagline}
                  </p>
                  <ul className="mt-2 space-y-1 text-xs text-navy-600">
                    {offer.includes.slice(0, 4).map((item) => (
                      <li key={item}>· {item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Footer */}
          <footer className="mt-10 border-t-2 border-navy-900 pt-4 text-center text-xs text-navy-600 print:break-inside-avoid">
            <p className="font-semibold text-navy-900">
              {siteConfig.name} — {siteConfig.tagline}
            </p>
            <p className="mt-1">
              {siteConfig.email} · {siteConfig.phone} ·{" "}
              {siteConfig.url.replace("https://", "")}
            </p>
          </footer>
        </article>
      </Container>
    </div>
  );
}

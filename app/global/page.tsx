import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Section, SectionHeading, Button, Card } from "@/components/ui";
import { CTABanner } from "@/components/CTABanner";
import { Icon } from "@/components/Icon";
import { siteConfig } from "@/lib/siteConfig";
import {
  regions,
  globalDeliveryPillars,
  globalStats,
} from "@/lib/content/global";

export const metadata: Metadata = {
  title: "Global Technology Delivery — Worldwide, Remote-First",
  description:
    "B&B Global Services delivers technology consulting, cloud, software, cybersecurity, and managed services worldwide. Remote-first delivery with follow-the-sun operations across the Americas, EMEA, and APAC.",
  alternates: { canonical: "/global" },
};

export default function GlobalPage() {
  return (
    <>
      <PageHeader
        eyebrow="Global Delivery"
        title="One Technology Partner, Delivered Worldwide"
        description="B&B Global Services is a remote-first, global technology partner. From our New Hampshire home base, we deliver strategy, software, cloud, security, reliability, and managed services to organizations across the Americas, EMEA, and Asia Pacific."
      >
        <Button href={siteConfig.bookingUrl} external>
          Book a Consultation
        </Button>
        <Button href="/contact" variant="ghost" className="border-white/25 text-white hover:bg-white/10">
          Talk to Us
        </Button>
      </PageHeader>

      {/* Stats */}
      <Section>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {globalStats.map((s) => (
            <div key={s.label} className="rounded-2xl border border-navy-100 bg-navy-50 p-6 text-center">
              <p className="text-3xl font-bold text-navy-900">{s.value}</p>
              <p className="mt-1 text-sm text-navy-600">{s.label}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Delivery model */}
      <Section muted>
        <SectionHeading
          eyebrow="How We Work Globally"
          title="Built for Distributed, Cross-Border Delivery"
          description="Distance, time zones, and regional requirements are part of our model — not obstacles to it."
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {globalDeliveryPillars.map((p) => (
            <Card key={p.title}>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-50 text-accent-600">
                <Icon name={p.icon} className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-navy-900">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-600">{p.body}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Regions */}
      <Section>
        <SectionHeading
          eyebrow="Where We Deliver"
          title="Regions We Serve"
          description="A global footprint with local sensitivity to data, compliance, and time zones."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {regions.map((r) => (
            <Card key={r.slug} className="flex flex-col">
              <h3 className="text-lg font-semibold text-navy-900">{r.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-600">{r.blurb}</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {r.markets.map((m) => (
                  <li
                    key={m}
                    className="rounded-full border border-navy-200 bg-white px-3 py-1 text-xs font-medium text-navy-700"
                  >
                    {m}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
        <p className="mt-8 text-sm text-navy-500">
          Don&apos;t see your region? We work with clients worldwide — {" "}
          <a href={`mailto:${siteConfig.email}`} className="font-medium text-accent-600 hover:text-accent-700">
            tell us where you are
          </a>
          .
        </p>
      </Section>

      <CTABanner
        headline="Wherever You Operate, We Can Deliver"
        copy="Book a consultation to talk through your goals, systems, and the regions you need to support — and how our global delivery model fits."
      />
    </>
  );
}

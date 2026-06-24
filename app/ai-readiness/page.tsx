import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { Section, SectionHeading, Button, Card } from "@/components/ui";
import { CTABanner } from "@/components/CTABanner";
import { FAQAccordion } from "@/components/FAQAccordion";
import { BreadcrumbJsonLd, FaqJsonLd, ServiceJsonLd } from "@/components/JsonLd";
import { Icon } from "@/components/Icon";
import { Reveal } from "@/components/Reveal";
import { siteConfig } from "@/lib/siteConfig";
import { aiReadiness } from "@/lib/content/ai-readiness";

export const metadata: Metadata = {
  title: "AI Readiness Assessment — Find Your Highest-ROI AI Opportunities",
  description:
    "Cut through the AI hype. Our AI Readiness Assessment evaluates your data, use cases, governance, and infrastructure, then delivers a prioritized roadmap of the AI and analytics opportunities with real ROI.",
  keywords: [
    "AI readiness assessment",
    "AI consulting services",
    "AI strategy consulting",
    "generative AI consulting",
    "machine learning consulting",
    "data and AI consulting",
  ],
  alternates: { canonical: "/ai-readiness" },
};

export default function AIReadinessPage() {
  const { hero, dimensions, deliverables, audience, faqs } = aiReadiness;

  return (
    <>
      <ServiceJsonLd
        name="AI Readiness Assessment"
        description={metadata.description as string}
        path="/ai-readiness"
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "AI Readiness Assessment", path: "/ai-readiness" },
        ]}
      />
      <FaqJsonLd items={faqs} />

      <PageHeader eyebrow={hero.eyebrow} title={hero.title} description={hero.description}>
        <Button href={siteConfig.bookingUrl} external>
          Book an AI Discovery Call
        </Button>
        <Button href="/contact" variant="ghost" className="border-white/25 text-white hover:bg-white/10">
          Request the Assessment
        </Button>
      </PageHeader>

      {/* What we evaluate */}
      <Section>
        <SectionHeading
          eyebrow="What We Assess"
          title="Six Dimensions of AI Readiness"
          description="A grounded, business-first evaluation — not a technology sales pitch."
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {dimensions.map((d, i) => (
            <Reveal key={d.title} delay={i * 60}>
              <Card className="h-full">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-50 text-accent-600">
                  <Icon name={d.icon} className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-navy-900">{d.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-600">{d.body}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Deliverables + audience */}
      <Section muted>
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="What You Get" title="A Roadmap You Can Act On" />
            <ul className="mt-8 space-y-3">
              {deliverables.map((d) => (
                <li key={d} className="flex items-start gap-3 rounded-lg border border-navy-100 bg-white px-4 py-3">
                  <Icon name="check" className="mt-0.5 h-5 w-5 flex-none text-accent-500" />
                  <span className="text-navy-800">{d}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SectionHeading eyebrow="Who It's For" title="Built for Leaders Under AI Pressure" />
            <ul className="mt-8 space-y-3">
              {audience.map((a) => (
                <li key={a} className="flex items-start gap-3">
                  <Icon name="arrow" className="mt-1 h-4 w-4 flex-none text-accent-500" />
                  <span className="text-navy-700">{a}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 rounded-2xl border border-navy-100 bg-white p-6">
              <p className="text-sm text-navy-600">
                Want a free first look? Take the{" "}
                <Link href="/assessment" className="font-semibold text-accent-600 hover:text-accent-700">
                  Technology Health Check
                </Link>{" "}
                — it scores your overall maturity, including data and delivery
                readiness, in two minutes.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* From assessment to production */}
      <Section>
        <SectionHeading
          align="center"
          eyebrow="Idea to Operations"
          title="From Assessment to Production AI"
          description="The assessment is step one. As one partner, we take the winning use cases all the way to live, governed AI."
        />
        <div className="mx-auto mt-10 flex max-w-3xl flex-wrap items-center justify-center gap-x-2 gap-y-3">
          {["Assess", "Prioritize", "Prototype", "Build", "Govern", "Operate"].map((step, i, arr) => (
            <div key={step} className="flex items-center gap-2">
              <span className="rounded-full border border-navy-200 bg-white px-4 py-1.5 text-sm font-medium text-navy-800">
                {step}
              </span>
              {i < arr.length - 1 && <Icon name="arrow" className="h-3.5 w-3.5 text-accent-500" />}
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button href="/services/data-analytics-ai" variant="ghost">
            Explore Data, Analytics &amp; AI <Icon name="arrow" className="h-4 w-4" />
          </Button>
        </div>
      </Section>

      {/* FAQ */}
      <Section muted>
        <SectionHeading align="center" eyebrow="FAQ" title="Common Questions" />
        <div className="mx-auto mt-10 max-w-3xl">
          <FAQAccordion items={faqs} />
        </div>
      </Section>

      <CTABanner
        headline="Ready to Find Your Highest-ROI AI Opportunities?"
        copy="Book an AI discovery call and we'll help you separate the hype from the use cases that actually move your business."
        buttonLabel="Book an AI Discovery Call"
      />
    </>
  );
}

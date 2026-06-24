import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { Section, SectionHeading, Button, Card, cn } from "@/components/ui";
import { CTABanner } from "@/components/CTABanner";
import { Icon } from "@/components/Icon";
import { siteConfig } from "@/lib/siteConfig";
import { services } from "@/lib/content/services";
import { engagementOffers } from "@/lib/content/site-content";

export const metadata: Metadata = {
  title: "Engagements & Pricing — Custom Quotes Built Around Your Goals",
  description:
    "Every B&B Global Services engagement is scoped to your environment, goals, and budget. Talk to our team for a tailored proposal across assessments, projects, and managed services.",
};

// The flagship packaged ways to start, with the first featured.
const featuredIndex = 0;

const engagementModels = [
  {
    title: "Fixed-scope assessments",
    body: "Clear, time-boxed reviews with defined deliverables — like the Technology Health Check — so you know exactly what you'll get and what it costs before we start.",
    icon: "compass",
  },
  {
    title: "Value-based projects",
    body: "Application builds, cloud modernization, and security programs scoped and priced around outcomes and complexity — not hourly guesswork.",
    icon: "code",
  },
  {
    title: "Monthly retainers & managed services",
    body: "Predictable monthly engagements for managed IT, application maintenance, BCDR, and fractional leadership — sized to your team and systems.",
    icon: "support",
  },
];

export default function PricingPage() {
  return (
    <>
      <PageHeader
        eyebrow="Engagements & Pricing"
        title="Pricing Built Around Your Goals — Not a Menu"
        description="Every engagement is scoped to your environment, goals, and budget. Rather than one-size-fits-all price tags, we give you a clear, custom proposal after a short conversation. Most clients start with a focused assessment, then expand into implementation and ongoing managed services."
      >
        <Button href={siteConfig.bookingUrl} external>
          Talk to Our Team
        </Button>
        <Button href="/assessment" variant="ghost" className="border-white/25 text-white hover:bg-white/10">
          Take the Free Health Check
        </Button>
      </PageHeader>

      {/* Ways to start */}
      <Section>
        <SectionHeading
          align="center"
          eyebrow="Start Here"
          title="Three Easy Ways to Engage"
          description="Low-risk entry points designed to deliver value fast and expand naturally. Each is scoped and quoted to fit your situation."
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
                    Most popular
                  </span>
                )}
                <h3 className={cn("text-lg font-semibold", featured ? "text-white" : "text-navy-900")}>
                  {offer.name}
                </h3>
                <p className={cn("mt-2 text-sm font-semibold uppercase tracking-wide", featured ? "text-accent-300" : "text-accent-600")}>
                  Custom quote
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
                  Request a Quote
                </Button>
              </div>
            );
          })}
        </div>
      </Section>

      {/* How we price */}
      <Section muted>
        <SectionHeading
          eyebrow="How We Price"
          title="Engagement Models That Fit How You Work"
          description="We match the commercial model to the work — fixed scope where it's clear, value-based for projects, and recurring for ongoing partnership."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {engagementModels.map((m) => (
            <Card key={m.title}>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-50 text-accent-600">
                <Icon name={m.icon} className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-navy-900">{m.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-600">{m.body}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Services list (no prices) */}
      <Section>
        <SectionHeading
          eyebrow="What We Deliver"
          title="Services Across the Full Lifecycle"
          description="Explore any service for details — then talk to our team for pricing tailored to your scope."
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
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

      <CTABanner
        headline="Let's Build a Quote Around Your Goals"
        copy="Take the free Technology Health Check or book a short call — we'll recommend the right starting point and give you a clear, custom proposal."
        buttonLabel="Talk to an Expert"
      />
    </>
  );
}

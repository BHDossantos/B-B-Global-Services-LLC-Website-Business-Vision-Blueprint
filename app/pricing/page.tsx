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
  title: "Pricing & Packages — Clear Ways to Start",
  description:
    "Transparent, productized engagement options: technology assessments, MVP builds, and managed technology support, plus per-service pricing across the full delivery lifecycle.",
};

// The three flagship packaged offers, with the middle one featured.
const featuredIndex = 0;

export default function PricingPage() {
  return (
    <>
      <PageHeader
        eyebrow="Pricing & Packages"
        title="Clear, Productized Ways to Start"
        description="Most engagements begin with a fixed-scope assessment, then expand into implementation and ongoing managed services. Transparent ranges — final scope is tailored to your goals and environment."
      >
        <Button href="/assessment" variant="ghost" className="border-white/25 text-white hover:bg-white/10">
          Take the Free Health Check
        </Button>
      </PageHeader>

      {/* Flagship packages */}
      <Section>
        <SectionHeading
          align="center"
          eyebrow="Start Here"
          title="Three Easy Ways to Engage"
          description="Low-risk entry points designed to deliver value fast and expand naturally."
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
                <p className={cn("mt-2 text-2xl font-bold", featured ? "text-accent-300" : "text-navy-900")}>
                  {offer.price}
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
                  Get Started
                </Button>
              </div>
            );
          })}
        </div>
      </Section>

      {/* Per-service rate card */}
      <Section muted>
        <SectionHeading
          eyebrow="Full Rate Card"
          title="Pricing Across the Delivery Lifecycle"
          description="Indicative ranges by service pillar. We scope fixed-price for assessments, value-based for projects, and recurring for managed services."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {services.map((s) => (
            <Card key={s.slug} className="flex flex-col">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent-50 text-accent-600">
                  <Icon name={s.icon} className="h-5 w-5" />
                </span>
                <h3 className="text-base font-semibold text-navy-900">{s.title}</h3>
              </div>
              <dl className="mt-5 space-y-2.5">
                {s.pricing.map((p) => (
                  <div key={p.label} className="flex items-baseline justify-between gap-4 border-b border-navy-50 pb-2.5 last:border-0">
                    <dt className="text-sm text-navy-600">{p.label}</dt>
                    <dd className="text-right text-sm font-semibold text-navy-900">{p.range}</dd>
                  </div>
                ))}
              </dl>
              <Link
                href={`/services/${s.slug}`}
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-600 hover:gap-2.5"
              >
                View service details <Icon name="arrow" className="h-4 w-4" />
              </Link>
            </Card>
          ))}
        </div>
        <p className="mt-8 text-sm text-navy-500">
          Recurring engagements — managed support, application maintenance, BCDR
          retainers, and fractional CTO — are billed monthly. Custom and
          enterprise work is quoted after a short discovery.
        </p>
      </Section>

      <CTABanner
        headline="Not Sure Which Option Fits?"
        copy="Take the free Technology Health Check or book a short call — we'll recommend the right starting point for your goals and budget."
        buttonLabel="Book a Consultation"
      />
    </>
  );
}

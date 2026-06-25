import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { Section, SectionHeading, Card } from "@/components/ui";
import { PillItem } from "@/components/cards";
import { CTABanner } from "@/components/CTABanner";
import { Icon } from "@/components/Icon";
import { Reveal } from "@/components/Reveal";
import { industryPages } from "@/lib/content/industries-detail";
import { idealCustomers } from "@/lib/content/site-content";

export const metadata: Metadata = {
  title: "Industries We Serve",
  description:
    "We serve organizations that are too complex for a basic IT provider but need a more flexible, practical, and affordable partner than a large global consulting firm.",
};

export default function IndustriesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Industries"
        title="Industries We Serve"
        description="We serve organizations that are too complex for a basic IT provider but need a more flexible, practical, and affordable partner than a large global consulting firm."
      />

      <Section>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {industryPages.map((industry, i) => (
            <Reveal key={industry.slug} delay={i * 50}>
              <Link href={`/industries/${industry.slug}`} className="group block h-full">
                <Card className="flex h-full flex-col">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-navy-50 text-navy-700">
                    <Icon name={industry.icon} className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-navy-900 group-hover:text-accent-700">
                    {industry.name}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-navy-600">
                    {industry.cardDescription}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-600">
                    Learn more <Icon name="arrow" className="h-4 w-4" />
                  </span>
                </Card>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section muted>
        <SectionHeading
          eyebrow="Who We Help"
          title="Our Ideal Customers"
          description="If one of these sounds like you, we're built for exactly your situation."
        />
        <ul className="mt-10 grid gap-3 md:grid-cols-2">
          {idealCustomers.map((c) => (
            <PillItem key={c}>{c}</PillItem>
          ))}
        </ul>
      </Section>

      <CTABanner />
    </>
  );
}

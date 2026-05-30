import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Section, SectionHeading } from "@/components/ui";
import { IndustryCard, PillItem } from "@/components/cards";
import { CTABanner } from "@/components/CTABanner";
import { industries, idealCustomers } from "@/lib/content/site-content";

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
          {industries.map((industry) => (
            <IndustryCard key={industry.name} {...industry} />
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

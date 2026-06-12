import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/ui";
import { RoiCalculator } from "@/components/RoiCalculator";
import { CTABanner } from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Cost of Downtime Calculator — What Are Outages Costing You?",
  description:
    "Estimate the annual cost of unplanned downtime to your business — productivity and revenue — and see how much a reliability and disaster recovery program could recover.",
};

export default function RoiCalculatorPage() {
  return (
    <>
      <PageHeader
        eyebrow="Free Calculator"
        title="What Is Downtime Costing Your Business?"
        description="Outages, incidents, and degraded systems quietly drain productivity and revenue. Estimate your annual cost of downtime in seconds — and see what's recoverable with a mature reliability and business continuity program."
      />

      <Section>
        <RoiCalculator />
      </Section>

      <CTABanner
        headline="Turn Downtime Into Uptime"
        copy="Our Reliability, Operations & BCDR services help you detect issues faster, recover with confidence, and protect the revenue and productivity that outages put at risk."
        buttonLabel="Book a Consultation"
      />
    </>
  );
}

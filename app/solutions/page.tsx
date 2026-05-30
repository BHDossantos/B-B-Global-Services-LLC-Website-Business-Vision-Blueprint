import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Section, Button } from "@/components/ui";
import { SolutionCard } from "@/components/cards";
import { CTABanner } from "@/components/CTABanner";
import { solutions } from "@/lib/content/solutions";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Solutions Built Around Business Outcomes",
  description:
    "From building an app to modernizing technology, securing your business, supporting your workforce, preparing for disaster recovery, and scaling your team.",
};

export default function SolutionsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Solutions"
        title="Solutions Built Around Business Outcomes"
        description="Not technical jargon — the outcomes you actually need. Pick the goal that matches where you are today."
      >
        <Button href={siteConfig.bookingUrl} external>
          Book a Consultation
        </Button>
      </PageHeader>

      <Section>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {solutions.map((solution) => (
            <SolutionCard key={solution.slug} solution={solution} />
          ))}
        </div>
      </Section>

      <CTABanner />
    </>
  );
}

import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Section, Button } from "@/components/ui";
import { SolutionCard } from "@/components/cards";
import { CTABanner } from "@/components/CTABanner";
import { localizedSolutions } from "@/lib/content/i18n";
import { getMessages } from "@/lib/i18n";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Solutions Built Around Business Outcomes",
  description:
    "From building an app to modernizing technology, securing your business, supporting your workforce, preparing for disaster recovery, and scaling your team.",
};

export default function SolutionsPage() {
  const m = getMessages();
  return (
    <>
      <PageHeader
        eyebrow={m.pages.solutions.eyebrow}
        title={m.pages.solutions.title}
        description={m.pages.solutions.description}
      >
        <Button href={siteConfig.bookingUrl} external>
          {m.cta.bookConsultation}
        </Button>
      </PageHeader>

      <Section>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {localizedSolutions().map((solution) => (
            <SolutionCard key={solution.slug} solution={solution} />
          ))}
        </div>
      </Section>

      <CTABanner />
    </>
  );
}

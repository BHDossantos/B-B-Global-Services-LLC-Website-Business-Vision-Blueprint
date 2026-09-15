import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Section, SectionHeading, Button } from "@/components/ui";
import { ServiceCard } from "@/components/cards";
import { LifecycleStrip } from "@/components/LifecycleFramework";
import { CTABanner } from "@/components/CTABanner";
import { localizedServices } from "@/lib/content/i18n";
import { getMessages } from "@/lib/i18n";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Technology Services Across the Full Delivery Lifecycle",
  description:
    "Advisory, development, cloud, cybersecurity, operations, support, and continuity services for businesses that need technology to work securely, reliably, and at scale.",
};

export default function ServicesPage() {
  const m = getMessages();
  return (
    <>
      <PageHeader
        eyebrow={m.pages.services.eyebrow}
        title={m.pages.services.title}
        description={m.pages.services.description}
      >
        <Button href={siteConfig.bookingUrl} external>
          {m.cta.bookConsultation}
        </Button>
        <Button href="/contact" variant="ghost" className="border-white/25 text-white hover:bg-white/10">
          {m.cta.requestAssessment}
        </Button>
      </PageHeader>

      <Section>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {localizedServices().map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </Section>

      <Section muted>
        <SectionHeading
          align="center"
          eyebrow={m.pages.services.deliverEyebrow}
          title={m.pages.services.deliverTitle}
          description={m.pages.services.deliverBody}
        />
        <div className="mt-10">
          <LifecycleStrip />
        </div>
      </Section>

      <CTABanner />
    </>
  );
}

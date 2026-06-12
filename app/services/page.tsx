import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Section, SectionHeading, Button } from "@/components/ui";
import { ServiceCard } from "@/components/cards";
import { LifecycleStrip } from "@/components/LifecycleFramework";
import { CTABanner } from "@/components/CTABanner";
import { services } from "@/lib/content/services";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Technology Services Across the Full Delivery Lifecycle",
  description:
    "Advisory, development, cloud, cybersecurity, operations, support, and continuity services for businesses that need technology to work securely, reliably, and at scale.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Technology Services Across the Full Delivery Lifecycle"
        description="B&B Global Services provides advisory, development, cloud, cybersecurity, operations, support, and continuity services for businesses that need technology to work securely, reliably, and at scale."
      >
        <Button href={siteConfig.bookingUrl} external>
          Book a Consultation
        </Button>
        <Button href="/contact" variant="ghost" className="border-white/25 text-white hover:bg-white/10">
          Request an Assessment
        </Button>
      </PageHeader>

      <Section>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </Section>

      <Section muted>
        <SectionHeading
          align="center"
          eyebrow="How We Deliver"
          title="The Idea to Operations Framework"
          description="Every engagement follows the same disciplined path from concept to reliable operations."
        />
        <div className="mt-10">
          <LifecycleStrip />
        </div>
      </Section>

      <CTABanner />
    </>
  );
}

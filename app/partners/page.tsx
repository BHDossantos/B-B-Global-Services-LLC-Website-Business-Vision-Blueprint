import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Section, SectionHeading, Button, Card } from "@/components/ui";
import { CTABanner } from "@/components/CTABanner";
import { Icon } from "@/components/Icon";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Partners",
  description:
    "Partner with B&B Global Services — referral partners, technology vendors, and cloud providers building better outcomes for mid-market clients.",
};

const partnerTypes = [
  {
    title: "Referral Partners",
    body: "Accountants, attorneys, realtors, and advisors whose clients need trusted technology delivery.",
    icon: "users",
  },
  {
    title: "Technology Vendors",
    body: "Security, cloud, and software vendors who want a delivery partner that implements and operates well.",
    icon: "cloud",
  },
  {
    title: "MSPs & Agencies",
    body: "Providers who need to extend into cloud, DevSecOps, app development, or BCDR for their clients.",
    icon: "support",
  },
  {
    title: "Private Equity",
    body: "Firms seeking due diligence, modernization, and value creation across portfolio companies.",
    icon: "chart",
  },
];

export default function PartnersPage() {
  return (
    <>
      <PageHeader
        eyebrow="Partners"
        title="Better Outcomes, Together"
        description="We collaborate with referral partners, technology vendors, and providers to deliver enterprise-grade technology to mid-market businesses."
      >
        <Button href={`mailto:${siteConfig.email}?subject=Partnership%20Inquiry`} external>
          Become a Partner
        </Button>
      </PageHeader>

      <Section>
        <SectionHeading eyebrow="Who We Partner With" title="Partnership Models" />
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {partnerTypes.map((p) => (
            <Card key={p.title}>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-50 text-accent-600">
                <Icon name={p.icon} className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-navy-900">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-600">{p.body}</p>
            </Card>
          ))}
        </div>
      </Section>

      <CTABanner
        headline="Let's Explore a Partnership"
        copy="Whether you want to refer clients, co-deliver, or extend your offering, we'd love to talk about how we can create value together."
        buttonLabel="Start the Conversation"
      />
    </>
  );
}

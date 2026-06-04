import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Section, SectionHeading, Button, Card } from "@/components/ui";
import { Icon } from "@/components/Icon";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Client Portal",
  description:
    "The B&B Global Services client portal — project status, deliverables, support tickets, and reporting. Coming soon.",
  robots: { index: false, follow: false },
};

const features = [
  { title: "Project & delivery status", icon: "activity" },
  { title: "Deliverables & documentation", icon: "code" },
  { title: "Support tickets & service desk", icon: "support" },
  { title: "Monthly reports & dashboards", icon: "chart" },
];

export default function ClientPortalPage() {
  return (
    <>
      <PageHeader
        eyebrow="Client Portal"
        title="Your Engagement, in One Place"
        description="A secure portal for project status, deliverables, support tickets, and reporting is on our roadmap. Existing clients: reach out and we'll get you what you need right away."
      >
        <Button href={`mailto:${siteConfig.email}?subject=Client%20Support`} external>
          Contact Your Team
        </Button>
      </PageHeader>

      <Section>
        <SectionHeading eyebrow="Coming Soon" title="What the Portal Will Offer" />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <Card key={f.title} className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-navy-50 text-navy-700">
                <Icon name={f.icon} className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-sm font-semibold text-navy-900">{f.title}</h3>
            </Card>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-navy-100 bg-navy-50 p-8 text-center">
          <h2 className="text-xl font-semibold text-navy-900">
            Already a client?
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-sm text-navy-600">
            Until the portal launches, your B&amp;B team is one message away for
            status, deliverables, and support.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Button href={`mailto:${siteConfig.email}`} external>
              Email Support
            </Button>
            <Button href={`tel:${siteConfig.phone.replace(/[^+\d]/g, "")}`} variant="ghost" external>
              Call {siteConfig.phone}
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}

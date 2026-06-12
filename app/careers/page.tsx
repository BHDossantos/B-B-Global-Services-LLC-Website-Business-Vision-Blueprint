import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Section, SectionHeading, Button, Card } from "@/components/ui";
import { Icon } from "@/components/Icon";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join B&B Global Services — a team of operators who advise, build, secure, and operate technology for growing businesses.",
};

const values = [
  { title: "Operators, not bystanders", body: "We build and run what we recommend. Ownership end to end." },
  { title: "Enterprise rigor, human pace", body: "Enterprise-grade practices delivered with mid-market practicality." },
  { title: "Security and reliability first", body: "We design for the day things go wrong — not just the demo." },
  { title: "Always improving", body: "Continuous learning, clear feedback, and real craft." },
];

export default function CareersPage() {
  return (
    <>
      <PageHeader
        eyebrow="Careers"
        title="Build, Secure, and Operate What Matters"
        description="We're assembling a team of operators across cloud, software, security, reliability, and managed services. No open roles are posted yet — but we're always glad to meet exceptional people."
      >
        <Button href={`mailto:${siteConfig.email}?subject=Careers%20at%20B%26B%20Global%20Services`} external>
          Introduce Yourself
        </Button>
      </PageHeader>

      <Section>
        <SectionHeading eyebrow="How We Work" title="What We Value" />
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {values.map((v) => (
            <Card key={v.title}>
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent-50 text-accent-600">
                <Icon name="check" className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-navy-900">{v.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-600">{v.body}</p>
            </Card>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-navy-100 bg-navy-50 p-8 text-center">
          <h2 className="text-xl font-semibold text-navy-900">
            Don&apos;t see a role? Reach out anyway.
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-sm text-navy-600">
            Tell us where you do your best work — engineering, cloud, security,
            SRE, or managed services — and we&apos;ll keep you in mind as we grow.
          </p>
          <div className="mt-6">
            <Button href={`mailto:${siteConfig.email}?subject=Careers%20at%20B%26B%20Global%20Services`} external>
              Email {siteConfig.email}
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}

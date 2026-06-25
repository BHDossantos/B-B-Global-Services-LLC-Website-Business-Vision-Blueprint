import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/ui";
import { Markdown } from "@/components/Markdown";
import { privacyPolicy, legalEffectiveDate } from "@/lib/content/legal";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How B&B Global Services collects, uses, shares, and protects your information, and the privacy choices available to you.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title="Privacy Policy"
        description={`How we handle your information. Effective ${legalEffectiveDate}.`}
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Privacy Policy" },
        ]}
      />
      <Section>
        <div className="mx-auto max-w-3xl">
          <Markdown content={privacyPolicy} />
        </div>
      </Section>
    </>
  );
}

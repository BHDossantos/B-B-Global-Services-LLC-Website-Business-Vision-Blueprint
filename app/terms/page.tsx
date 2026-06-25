import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/ui";
import { Markdown } from "@/components/Markdown";
import { termsOfService, legalEffectiveDate } from "@/lib/content/legal";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "The terms that govern your access to and use of the B&B Global Services website.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title="Terms of Service"
        description={`The terms governing use of this site. Effective ${legalEffectiveDate}.`}
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Terms of Service" },
        ]}
      />
      <Section>
        <div className="mx-auto max-w-3xl">
          <Markdown content={termsOfService} />
        </div>
      </Section>
    </>
  );
}

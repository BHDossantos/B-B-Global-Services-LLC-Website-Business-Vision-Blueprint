import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/ui";
import { Markdown } from "@/components/Markdown";
import { legalEffectiveDate } from "@/lib/content/legal";
import { localizedLegal } from "@/lib/content/i18n";
import { fill, getMessages } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "The terms that govern your access to and use of the B&B Global Services website.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  const m = getMessages();
  const t = m.legal;
  const { termsOfService } = localizedLegal();
  return (
    <>
      <PageHeader
        eyebrow={t.eyebrow}
        title={t.termsTitle}
        description={fill(t.termsDescription, { date: legalEffectiveDate })}
        breadcrumbs={[
          { name: m.common.home, href: "/" },
          { name: t.termsTitle },
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

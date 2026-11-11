import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/ui";
import { Markdown } from "@/components/Markdown";
import { legalEffectiveDate } from "@/lib/content/legal";
import { localizedLegal } from "@/lib/content/i18n";
import { fill, getMessages } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How B&B Global Services collects, uses, shares, and protects your information, and the privacy choices available to you.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  const m = getMessages();
  const t = m.legal;
  const { privacyPolicy } = localizedLegal();
  return (
    <>
      <PageHeader
        eyebrow={t.eyebrow}
        title={t.privacyTitle}
        description={fill(t.privacyDescription, { date: legalEffectiveDate })}
        breadcrumbs={[
          { name: m.common.home, href: "/" },
          { name: t.privacyTitle },
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

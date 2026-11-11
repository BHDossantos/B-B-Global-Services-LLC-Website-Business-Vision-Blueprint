import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/ui";
import { BlogCard } from "@/components/cards";
import { CTABanner } from "@/components/CTABanner";
import { localizedInsights } from "@/lib/content/i18n";
import { getMessages } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Practical thinking on technology strategy, DevSecOps, resilience, and AI for mid-market businesses.",
};

export default function InsightsPage() {
  const t = getMessages().pages.insights;
  return (
    <>
      <PageHeader eyebrow={t.eyebrow} title={t.title} description={t.description} />

      <Section>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {localizedInsights().map((post) => (
            <Link key={post.slug} href={`/insights/${post.slug}`}>
              <BlogCard post={post} />
            </Link>
          ))}
        </div>
      </Section>

      <CTABanner
        headline="Want These Insights in Your Inbox?"
        copy="Book a consultation and we'll share relevant thinking for your industry, systems, and goals."
      />
    </>
  );
}

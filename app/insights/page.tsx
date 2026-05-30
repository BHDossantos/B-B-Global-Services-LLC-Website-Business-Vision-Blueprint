import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/ui";
import { BlogCard } from "@/components/cards";
import { CTABanner } from "@/components/CTABanner";
import { insights } from "@/lib/content/site-content";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Practical thinking on technology strategy, DevSecOps, resilience, and AI for mid-market businesses.",
};

export default function InsightsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Insights"
        title="Practical Thinking, Not Hype"
        description="Perspectives on technology strategy, delivery, security, resilience, and AI for growing businesses."
      />

      <Section>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {insights.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
        <p className="mt-10 rounded-xl border border-dashed border-navy-200 bg-navy-50 px-5 py-4 text-sm text-navy-600">
          This section is wired for a blog/insights CMS. Articles are sample
          content today and can be connected to a headless CMS or MDX without
          changing the page layout.
        </p>
      </Section>

      <CTABanner
        headline="Want These Insights in Your Inbox?"
        copy="Book a consultation and we'll share relevant thinking for your industry, systems, and goals."
      />
    </>
  );
}

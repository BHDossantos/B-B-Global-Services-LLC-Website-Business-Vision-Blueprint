import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { Section, Button } from "@/components/ui";
import { BlogCard } from "@/components/cards";
import { Markdown } from "@/components/Markdown";
import { CTABanner } from "@/components/CTABanner";
import { ArticleJsonLd, BreadcrumbJsonLd } from "@/components/JsonLd";
import { Icon } from "@/components/Icon";
import { insights } from "@/lib/content/site-content";
import {
  localizedInsight,
  localizedInsights,
  localizedArticle,
} from "@/lib/content/i18n";
import { getLocale, getMessages } from "@/lib/i18n";
import { localeTags } from "@/lib/i18n/config";
import { siteConfig } from "@/lib/siteConfig";

export function generateStaticParams() {
  return insights.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const post = localizedInsight(params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: { type: "article", title: post.title, description: post.excerpt },
  };
}

export default function InsightPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = localizedInsight(params.slug);
  const body = localizedArticle(params.slug);
  if (!post || !body) notFound();

  const m = getMessages();
  const t = m.pages.insights;
  const date = new Date(post.date).toLocaleDateString(localeTags[getLocale()], {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const more = localizedInsights().filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <ArticleJsonLd
        title={post.title}
        description={post.excerpt}
        path={`/insights/${post.slug}`}
        datePublished={post.date}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Insights", path: "/insights" },
          { name: post.title, path: `/insights/${post.slug}` },
        ]}
      />
      <PageHeader
        eyebrow={post.category}
        title={post.title}
        breadcrumbs={[
          { name: m.common.home, href: "/" },
          { name: t.eyebrow, href: "/insights" },
          { name: post.title },
        ]}
      >
        <span className="flex items-center gap-3 text-sm text-navy-300">
          {date}
          <span aria-hidden>·</span>
          {post.readMinutes} {t.minRead}
        </span>
      </PageHeader>

      <Section>
        <div className="mx-auto max-w-3xl">
          <Link
            href="/insights"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent-600"
          >
            <Icon name="arrow" className="h-4 w-4 rotate-180" /> {t.allInsights}
          </Link>
          <article className="mt-6">
            <Markdown content={body} />
          </article>

          <div className="mt-12 rounded-2xl border border-navy-100 bg-navy-50 p-6">
            <h2 className="text-lg font-semibold text-navy-900">
              {t.applyTitle}
            </h2>
            <p className="mt-2 text-sm text-navy-600">{t.applyBody}</p>
            <Button href={siteConfig.bookingUrl} external className="mt-4">
              {m.cta.bookConsultation} <Icon name="arrow" className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </Section>

      {more.length > 0 && (
        <Section muted>
          <h2 className="text-2xl font-bold text-navy-900">{t.moreInsights}</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {more.map((p) => (
              <Link key={p.slug} href={`/insights/${p.slug}`}>
                <BlogCard post={p} />
              </Link>
            ))}
          </div>
        </Section>
      )}

      <CTABanner />
    </>
  );
}

import { renderOgImage, ogSize, ogContentType } from "@/lib/og";
import { insights } from "@/lib/content/site-content";

export const size = ogSize;
export const contentType = ogContentType;
export const alt = "B&B Global Services — Insight";

export function generateStaticParams() {
  return insights.map((p) => ({ slug: p.slug }));
}

export default function Image({ params }: { params: { slug: string } }) {
  const post = insights.find((p) => p.slug === params.slug);
  return renderOgImage({
    eyebrow: post?.category ?? "Insights",
    title: post?.title ?? "Insights",
    subtitle: post?.excerpt,
  });
}

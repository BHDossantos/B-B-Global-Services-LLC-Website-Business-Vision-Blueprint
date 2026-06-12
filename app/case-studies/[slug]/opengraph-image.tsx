import { renderOgImage, ogSize, ogContentType } from "@/lib/og";
import { caseStudies } from "@/lib/content/site-content";

export const size = ogSize;
export const contentType = ogContentType;
export const alt = "B&B Global Services — Case Study";

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export default function Image({ params }: { params: { slug: string } }) {
  const study = caseStudies.find((c) => c.slug === params.slug);
  return renderOgImage({
    eyebrow: "Case Study",
    title: study?.title ?? "Case Study",
    subtitle: study?.industry,
  });
}

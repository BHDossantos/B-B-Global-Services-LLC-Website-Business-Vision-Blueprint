import { renderOgImage, ogSize, ogContentType } from "@/lib/og";
import { industryPages, getIndustry } from "@/lib/content/industries-detail";

export const size = ogSize;
export const contentType = ogContentType;
export const alt = "B&B Global Services — Industry";

export function generateStaticParams() {
  return industryPages.map((i) => ({ slug: i.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const industry = getIndustry(resolvedParams.slug);
  return renderOgImage({
    eyebrow: "Industries",
    title: industry?.title ?? "Industries",
    subtitle: industry?.cardDescription,
  });
}

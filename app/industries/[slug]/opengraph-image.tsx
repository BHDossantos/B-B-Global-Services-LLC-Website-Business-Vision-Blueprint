import { renderOgImage, ogSize, ogContentType } from "@/lib/og";
import { industryPages, getIndustry } from "@/lib/content/industries-detail";

export const size = ogSize;
export const contentType = ogContentType;
export const alt = "B&B Global Services — Industry";

export function generateStaticParams() {
  return industryPages.map((i) => ({ slug: i.slug }));
}

export default function Image({ params }: { params: { slug: string } }) {
  const industry = getIndustry(params.slug);
  return renderOgImage({
    eyebrow: "Industries",
    title: industry?.title ?? "Industries",
    subtitle: industry?.cardDescription,
  });
}

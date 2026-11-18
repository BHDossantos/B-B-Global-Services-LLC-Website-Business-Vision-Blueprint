import { renderOgImage, ogSize, ogContentType } from "@/lib/og";
import { solutions, getSolution } from "@/lib/content/solutions";

export const size = ogSize;
export const contentType = ogContentType;
export const alt = "B&B Global Services — Solution";

export function generateStaticParams() {
  return solutions.map((s) => ({ slug: s.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const solution = getSolution(resolvedParams.slug);
  return renderOgImage({
    eyebrow: "Solutions",
    title: solution?.title ?? "Solutions",
    subtitle: solution?.summary,
  });
}

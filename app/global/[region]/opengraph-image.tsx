import { renderOgImage, ogSize, ogContentType } from "@/lib/og";
import { regions, getRegion } from "@/lib/content/global";

export const size = ogSize;
export const contentType = ogContentType;
export const alt = "B&B Global Services — Region";

export function generateStaticParams() {
  return regions.map((r) => ({ region: r.slug }));
}

export default async function Image({ params }: { params: Promise<{ region: string }> }) {
  const resolvedParams = await params;
  const region = getRegion(resolvedParams.region);
  return renderOgImage({
    eyebrow: "Global Delivery",
    title: region?.title ?? "Global Delivery",
    subtitle: region?.markets.join(" · "),
  });
}

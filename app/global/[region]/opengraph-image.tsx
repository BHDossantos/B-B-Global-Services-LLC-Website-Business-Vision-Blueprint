import { renderOgImage, ogSize, ogContentType } from "@/lib/og";
import { regions, getRegion } from "@/lib/content/global";

export const size = ogSize;
export const contentType = ogContentType;
export const alt = "B&B Global Services — Region";

export function generateStaticParams() {
  return regions.map((r) => ({ region: r.slug }));
}

export default function Image({ params }: { params: { region: string } }) {
  const region = getRegion(params.region);
  return renderOgImage({
    eyebrow: "Global Delivery",
    title: region?.title ?? "Global Delivery",
    subtitle: region?.markets.join(" · "),
  });
}

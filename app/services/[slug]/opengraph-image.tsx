import { renderOgImage, ogSize, ogContentType } from "@/lib/og";
import { services, getService } from "@/lib/content/services";

export const size = ogSize;
export const contentType = ogContentType;
export const alt = "B&B Global Services — Service";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export default function Image({ params }: { params: { slug: string } }) {
  const service = getService(params.slug);
  return renderOgImage({
    eyebrow: "Services",
    title: service?.headline ?? "Technology Services",
    subtitle: service?.summary,
  });
}

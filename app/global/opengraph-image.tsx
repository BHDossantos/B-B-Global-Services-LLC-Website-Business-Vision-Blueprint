import { renderOgImage, ogSize, ogContentType } from "@/lib/og";

export const size = ogSize;
export const contentType = ogContentType;
export const alt = "B&B Global Services — Global Delivery";

export default function Image() {
  return renderOgImage({
    eyebrow: "Global Delivery",
    title: "One Technology Partner, Delivered Worldwide",
    subtitle: "Americas · UK & Europe · Middle East & Africa · Asia Pacific · Latin America",
  });
}

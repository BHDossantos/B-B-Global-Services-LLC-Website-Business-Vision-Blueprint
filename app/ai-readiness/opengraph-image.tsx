import { renderOgImage, ogSize, ogContentType } from "@/lib/og";

export const size = ogSize;
export const contentType = ogContentType;
export const alt = "B&B Global Services — AI Readiness Assessment";

export default function Image() {
  return renderOgImage({
    eyebrow: "AI Readiness Assessment",
    title: "Find Where AI Can Actually Move the Needle",
    subtitle: "Data · Generative AI · Machine Learning · Governance",
  });
}

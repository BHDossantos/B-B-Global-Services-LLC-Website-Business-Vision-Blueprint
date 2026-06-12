import { ImageResponse } from "next/og";

export const ogSize = { width: 1200, height: 630 };
export const ogContentType = "image/png";

/**
 * Shared Open Graph image template so every route renders an on-brand
 * 1200x630 social card. Pass an eyebrow (section), title, and optional
 * subtitle. Used by per-route `opengraph-image.tsx` files.
 */
export function renderOgImage({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background:
            "linear-gradient(135deg, #060c1a 0%, #0f1d3a 60%, #172a52 100%)",
          fontFamily: "Arial, Helvetica, sans-serif",
        }}
      >
        {/* Brand row */}
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 64,
              height: 64,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "linear-gradient(135deg, #1ec8c8 0%, #2f6bff 100%)",
              borderRadius: 14,
              color: "#ffffff",
              fontSize: 24,
              fontWeight: 700,
            }}
          >
            B&amp;B
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ color: "#ffffff", fontSize: 26, fontWeight: 700 }}>
              B&amp;B Global Services
            </div>
            <div style={{ color: "#8be9e9", fontSize: 17 }}>
              From Idea to Operations
            </div>
          </div>
        </div>

        {/* Title block */}
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div
            style={{
              color: "#1ec8c8",
              fontSize: 22,
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: 2,
            }}
          >
            {eyebrow}
          </div>
          <div
            style={{
              color: "#ffffff",
              fontSize: 60,
              fontWeight: 700,
              lineHeight: 1.12,
              maxWidth: 1000,
            }}
          >
            {title}
          </div>
          {subtitle ? (
            <div style={{ color: "#a7badd", fontSize: 26, maxWidth: 980 }}>
              {subtitle}
            </div>
          ) : null}
        </div>

        {/* Accent bar */}
        <div
          style={{
            display: "flex",
            height: 8,
            width: 220,
            borderRadius: 999,
            background: "linear-gradient(90deg, #1ec8c8 0%, #2f6bff 100%)",
          }}
        />
      </div>
    ),
    ogSize
  );
}

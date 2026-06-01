import { ImageResponse } from "next/og";
import { lifecyclePhases } from "@/lib/siteConfig";

export const alt =
  "B&B Global Services — Technology Delivery From Idea to Operations";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
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
              width: 72,
              height: 72,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "linear-gradient(135deg, #1ec8c8 0%, #2f6bff 100%)",
              borderRadius: 16,
              color: "#ffffff",
              fontSize: 28,
              fontWeight: 700,
            }}
          >
            B&amp;B
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ color: "#ffffff", fontSize: 32, fontWeight: 700 }}>
              B&amp;B Global Services
            </div>
            <div style={{ color: "#8be9e9", fontSize: 20 }}>
              From Idea to Operations
            </div>
          </div>
        </div>

        {/* Headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              color: "#ffffff",
              fontSize: 64,
              fontWeight: 700,
              lineHeight: 1.15,
              maxWidth: 1000,
            }}
          >
            Technology Delivery From Idea to Operations
          </div>
          <div style={{ color: "#a7badd", fontSize: 28, maxWidth: 980 }}>
            Software · Cloud · DevOps · Cybersecurity · AI · Managed Services ·
            Business Continuity
          </div>
        </div>

        {/* Lifecycle strip */}
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          {lifecyclePhases.map((phase, i) => (
            <div
              key={phase}
              style={{ display: "flex", alignItems: "center", gap: 10 }}
            >
              <div
                style={{
                  display: "flex",
                  padding: "10px 18px",
                  borderRadius: 999,
                  border: "1px solid rgba(255,255,255,0.25)",
                  background: "rgba(255,255,255,0.06)",
                  color: "#ffffff",
                  fontSize: 19,
                }}
              >
                {phase}
              </div>
              {i < lifecyclePhases.length - 1 && (
                <div style={{ color: "#1ec8c8", fontSize: 20 }}>→</div>
              )}
            </div>
          ))}
        </div>
      </div>
    ),
    size
  );
}

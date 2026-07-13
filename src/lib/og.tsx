import { ImageResponse } from "next/og";
import { business } from "@/data/business";

export const OG_SIZE = { width: 1200, height: 630 };
export const OG_CONTENT_TYPE = "image/png";

// Shared branded Open Graph image used by root + service/location routes.
export function renderOgImage(opts: {
  title: string;
  eyebrow?: string;
}) {
  const { title, eyebrow } = opts;
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0a0a0a",
          color: "#ffffff",
          padding: "72px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 9999,
              background: "#f26b1d",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 30,
            }}
          >
            ●
          </div>
          <div style={{ fontSize: 34, fontWeight: 800, letterSpacing: -1 }}>
            {business.name}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          {eyebrow && (
            <div
              style={{
                color: "#ff8a45",
                fontSize: 28,
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: 2,
                marginBottom: 16,
              }}
            >
              {eyebrow}
            </div>
          )}
          <div
            style={{
              fontSize: 68,
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: -2,
              maxWidth: 900,
            }}
          >
            {title}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: 28,
            color: "rgba(255,255,255,0.75)",
          }}
        >
          <span>Mobile tyres &amp; servicing · {business.baseCity}</span>
          <span style={{ color: "#f26b1d", fontWeight: 700 }}>
            {business.phoneDisplay}
          </span>
        </div>
      </div>
    ),
    OG_SIZE,
  );
}

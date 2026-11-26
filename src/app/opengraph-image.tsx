import { ImageResponse } from "next/og";
import { portfolioData } from "@/data/portfolio";

export const alt = portfolioData.site.title;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#020617",
          color: "#f8fafc",
          padding: "72px 80px",
          fontFamily: "system-ui, -apple-system, sans-serif",
          borderTop: "8px solid #2563eb",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
          }}
        >
          <div
            style={{
              width: "48px",
              height: "48px",
              borderRadius: "12px",
              backgroundColor: "#2563eb",
              color: "#ffffff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "22px",
              fontWeight: 700,
            }}
          >
            {portfolioData.profile.initials}
          </div>
          <span
            style={{
              fontSize: "22px",
              color: "#60a5fa",
              letterSpacing: "0.04em",
            }}
          >
            {portfolioData.profile.location}
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
          <div
            style={{
              fontSize: "68px",
              fontWeight: 700,
              letterSpacing: "-0.03em",
              lineHeight: 1.05,
            }}
          >
            {portfolioData.profile.name}
          </div>
          <div
            style={{
              fontSize: "32px",
              fontWeight: 500,
              color: "#cbd5e1",
            }}
          >
            {portfolioData.profile.title}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "1px solid #1e293b",
            paddingTop: "28px",
            fontSize: "20px",
            color: "#94a3b8",
          }}
        >
          <span>
            {portfolioData.profile.degree} · {portfolioData.profile.university}
          </span>
          <span style={{ color: "#60a5fa" }}>{portfolioData.profile.email}</span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}

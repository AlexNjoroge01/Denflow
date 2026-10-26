import { ImageResponse } from "next/og"
import { siteConfig } from "@/lib/site-config"

export const alt = "DenFlow Plumbing & Water Solutions — plumber in Nairobi"
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = "image/png"

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0A1C9C",
          color: "#FFFFFF",
          padding: "64px 72px",
          fontFamily: "Arial, sans-serif",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -160,
            right: -120,
            width: 480,
            height: 480,
            borderRadius: 9999,
            background: "#2F5BEA",
            opacity: 0.35,
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -240,
            left: 280,
            width: 520,
            height: 520,
            borderRadius: 9999,
            background: "#07127A",
            opacity: 0.8,
          }}
        />

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 18,
            position: "relative",
          }}
        >
          <div
            style={{
              width: 58,
              height: 58,
              borderRadius: 9999,
              background: "#FFFFFF",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#0A1C9C",
              fontSize: 34,
              fontWeight: 800,
            }}
          >
            D
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 32, fontWeight: 800, letterSpacing: -1 }}>
              DenFlow
            </div>
            <div
              style={{
                fontSize: 13,
                letterSpacing: 5,
                textTransform: "uppercase",
                color: "#C9D4F5",
              }}
            >
              Plumbing &amp; Water
            </div>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", position: "relative" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              background: "rgba(255,255,255,0.12)",
              border: "1px solid rgba(255,255,255,0.2)",
              borderRadius: 9999,
              padding: "10px 20px",
              fontSize: 18,
              fontWeight: 600,
              color: "#C9D4F5",
              marginBottom: 26,
              alignSelf: "flex-start",
            }}
          >
            24/7 emergency plumbing · Nairobi
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: 68,
              fontWeight: 800,
              lineHeight: 1.04,
              letterSpacing: -2.5,
              maxWidth: 900,
            }}
          >
            <span>Professional Plumbing &amp;</span>
            <span style={{ color: "#C9D4F5" }}>Drain Solutions in Nairobi</span>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            position: "relative",
            borderTop: "1px solid rgba(255,255,255,0.18)",
            paddingTop: 26,
          }}
        >
          <div style={{ fontSize: 24, fontWeight: 700 }}>
            {siteConfig.phone.display}
          </div>
          <div style={{ fontSize: 20, color: "#C9D4F5" }}>
            {siteConfig.url.replace(/^https?:\/\//, "")}
          </div>
        </div>
      </div>
    ),
    size
  )
}

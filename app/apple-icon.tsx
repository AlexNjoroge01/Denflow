import { ImageResponse } from "next/og"

export const size = {
  width: 180,
  height: 180,
}
export const contentType = "image/png"

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0A1C9C",
          color: "#FFFFFF",
          fontSize: 104,
          fontWeight: 800,
          fontFamily: "Arial, sans-serif",
          letterSpacing: -4,
        }}
      >
        D
      </div>
    ),
    size
  )
}

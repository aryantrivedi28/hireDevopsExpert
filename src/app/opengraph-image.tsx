import { ImageResponse } from "next/og";

export const alt = "hiredevopsexpert.com, done-for-you DevOps by an in-house team";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const INK = "#1C2B3A";
const TEAL_DEEP = "#3C6E63";
const OFF = "#F7F9FA";
const GRAY = "#8896A3";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          backgroundColor: INK,
          padding: "80px",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 22,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: TEAL_DEEP,
            marginBottom: 24,
          }}
        >
          Done-for-you DevOps
        </div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            fontSize: 72,
            fontWeight: 600,
            color: OFF,
            lineHeight: 1.15,
            maxWidth: 900,
          }}
        >
          Hire a DevOps Expert
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 28,
            color: GRAY,
            marginTop: 32,
          }}
        >
          hiredevopsexpert.com
        </div>
        <div
          style={{
            display: "flex",
            position: "absolute",
            right: 90,
            bottom: 90,
            gap: 20,
          }}
        >
          <div style={{ display: "flex", width: 22, height: 22, borderRadius: 11, backgroundColor: TEAL_DEEP }} />
          <div style={{ display: "flex", width: 22, height: 22, borderRadius: 11, backgroundColor: INK, border: `2px solid ${GRAY}` }} />
          <div style={{ display: "flex", width: 22, height: 22, borderRadius: 11, backgroundColor: TEAL_DEEP }} />
        </div>
      </div>
    ),
    { ...size }
  );
}

import { ImageResponse } from "next/og";

export const alt = "Disha — business clarity, one framework at a time";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

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
          padding: "72px 80px",
          background: "#f6f1e6",
          color: "#211d18",
          fontFamily: "Georgia, serif",
          borderBottom: "16px solid #bc3a1c",
        }}
      >
        <div style={{ display: "flex", fontSize: 28, letterSpacing: 6, color: "#8a8069", textTransform: "uppercase" }}>
          business clarity ledger
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 120, fontWeight: 700, lineHeight: 1 }}>Disha</div>
          <div style={{ marginTop: 28, fontSize: 44, lineHeight: 1.2, color: "#57503f", maxWidth: 960 }}>
            Free business tools, frameworks and 100 famous laws of business &amp; psychology.
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 26, color: "#bc3a1c" }}>
          Tools · Frameworks · Laws · Strategies · Case studies · Lessons
        </div>
      </div>
    ),
    size,
  );
}

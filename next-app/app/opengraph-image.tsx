import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt =
  "ARC Anti Rabies Clinic — Fast, trusted anti-rabies treatment across 11 branches in Nueva Ecija and Tarlac";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function OgImage() {
  const [logoData, instrumentSerif, dmSans] = await Promise.all([
    readFile(join(process.cwd(), "..", "arc_logo.jpg")),
    fetch(
      "https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&display=swap",
    ).then((res) => res.text()),
    fetch(
      "https://fonts.googleapis.com/css2?family=DM+Sans:wght@500;600;700&display=swap",
    ).then((res) => res.text()),
  ]);

  const logoSrc = `data:image/jpeg;base64,${logoData.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          overflow: "hidden",
          background: "linear-gradient(135deg, #0a1628 0%, #1565c0 45%, #0d3d6e 100%)",
          fontFamily: "DM Sans",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse 55% 70% at 82% 48%, rgba(255,204,0,0.24) 0%, transparent 65%), radial-gradient(ellipse 40% 50% at 12% 82%, rgba(13,110,110,0.18) 0%, transparent 60%)",
          }}
        />
        <div
          style={{
            position: "relative",
            zIndex: 2,
            display: "flex",
            width: "100%",
            height: "100%",
            padding: "56px 64px",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              maxWidth: 680,
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                marginBottom: 24,
                padding: "8px 16px",
                borderRadius: 999,
                border: "1px solid rgba(255,255,255,0.15)",
                background: "rgba(255,255,255,0.08)",
                color: "rgba(255,255,255,0.82)",
                fontSize: 18,
                fontWeight: 600,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              <div
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  background: "#4ade80",
                }}
              />
              DOH-Accredited · PhilHealth Partner
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginBottom: 20,
                color: "#fff",
                fontFamily: "Instrument Serif",
                fontSize: 72,
                lineHeight: 1.02,
              }}
            >
              <span>Fast, Trusted</span>
              <span style={{ color: "#ffcc00", fontStyle: "italic" }}>
                Anti-Rabies
              </span>
              <span>Treatment Near You</span>
            </div>

            <div
              style={{
                maxWidth: 560,
                marginBottom: 32,
                color: "rgba(255,255,255,0.72)",
                fontSize: 24,
                lineHeight: 1.55,
              }}
            >
              11 branches across Nueva Ecija &amp; Tarlac. Open daily for PEP,
              PrEP, and wound care.
            </div>

            <div style={{ display: "flex", gap: 16 }}>
              {[
                ["11", "Branches"],
                ["Daily", "Availability"],
                ["5", "Accredited"],
              ].map(([value, label]) => (
                <div
                  key={label}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    minWidth: 120,
                    padding: "14px 18px",
                    borderRadius: 16,
                    border: "1px solid rgba(255,255,255,0.12)",
                    background: "rgba(255,255,255,0.06)",
                  }}
                >
                  <span
                    style={{
                      color: "#ffcc00",
                      fontSize: 28,
                      fontWeight: 700,
                      lineHeight: 1.1,
                    }}
                  >
                    {value}
                  </span>
                  <span
                    style={{
                      color: "rgba(255,255,255,0.72)",
                      fontSize: 16,
                      fontWeight: 600,
                    }}
                  >
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 20,
            }}
          >
            <div
              style={{
                display: "flex",
                width: 280,
                height: 280,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 32,
                border: "4px solid rgba(255,255,255,0.14)",
                background: "rgba(255,255,255,0.08)",
                boxShadow: "0 24px 60px rgba(0,0,0,0.28)",
              }}
            >
              <img
                src={logoSrc}
                alt=""
                width={220}
                height={220}
                style={{ borderRadius: "50%" }}
              />
            </div>
            <div
              style={{
                color: "rgba(255,255,255,0.78)",
                fontSize: 20,
                fontWeight: 600,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
              }}
            >
              arcantirabisclinic.vercel.app
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Instrument Serif",
          data: await loadGoogleFont(instrumentSerif, "Instrument Serif"),
          style: "normal",
          weight: 400,
        },
        {
          name: "DM Sans",
          data: await loadGoogleFont(dmSans, "DM Sans"),
          style: "normal",
          weight: 600,
        },
      ],
    },
  );
}

async function loadGoogleFont(css: string, family: string) {
  const match = css.match(
    /src: url\((.+?)\) format\('(?:opentype|truetype)'\)/,
  );
  if (!match?.[1]) {
    throw new Error(`Could not load font: ${family}`);
  }

  const response = await fetch(match[1]);
  return response.arrayBuffer();
}

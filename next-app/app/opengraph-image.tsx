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

/** Bump when redesigning so Facebook/etc. re-fetch a new preview. */
export const version = "2026-07-14-v5";

export default async function OgImage() {
  const [logoData, gagalinData, dmSans] = await Promise.all([
    readFile(join(process.cwd(), "public", "arc_logo.jpg")),
    readFile(join(process.cwd(), "fonts", "Gagalin-Regular.otf")),
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
          background:
            "linear-gradient(135deg, #0a1628 0%, #1565c0 42%, #0d3d6e 100%)",
          fontFamily: "DM Sans",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse 55% 70% at 82% 48%, rgba(255,204,0,0.26) 0%, transparent 65%), radial-gradient(ellipse 40% 50% at 10% 85%, rgba(13,110,110,0.2) 0%, transparent 60%)",
          }}
        />

        {/* Grid texture */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        <div
          style={{
            position: "relative",
            display: "flex",
            width: "100%",
            height: "100%",
            padding: "48px 56px",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              maxWidth: 700,
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 14,
                marginBottom: 22,
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "8px 16px",
                  borderRadius: 999,
                  border: "1px solid rgba(255,255,255,0.16)",
                  background: "rgba(255,255,255,0.08)",
                  color: "rgba(255,255,255,0.88)",
                  fontSize: 16,
                  fontWeight: 700,
                  letterSpacing: "0.06em",
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
                ARC Anti Rabies Clinic
              </div>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginBottom: 18,
                color: "#fff",
                fontFamily: "Gagalin",
                fontSize: 68,
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
                maxWidth: 580,
                marginBottom: 28,
                color: "rgba(255,255,255,0.74)",
                fontSize: 23,
                lineHeight: 1.5,
              }}
            >
              11 branches across Nueva Ecija &amp; Tarlac. Open daily for PEP,
              PrEP, and wound care.
            </div>

            <div style={{ display: "flex", gap: 12, marginBottom: 22 }}>
              {[
                ["DOH", "Accredited"],
                ["PhilHealth", "Partner"],
                ["ABP-Z", "Package"],
                ["WHO", "Protocol"],
              ].map(([label, detail]) => (
                <div
                  key={label}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    padding: "10px 14px",
                    borderRadius: 12,
                    border: "1px solid rgba(255,255,255,0.14)",
                    background: "rgba(255,255,255,0.08)",
                    minWidth: 118,
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      width: 24,
                      height: 24,
                      flexShrink: 0,
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: "50%",
                      background: "rgba(74,222,128,0.2)",
                    }}
                  >
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                    >
                      <path
                        d="M2.5 6.2 5.2 8.8 9.5 3.5"
                        stroke="#4ade80"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: 2,
                    }}
                  >
                    <span
                      style={{
                        color: "#fff",
                        fontSize: 15,
                        fontWeight: 800,
                        lineHeight: 1.2,
                      }}
                    >
                      {label}
                    </span>
                    <span
                      style={{
                        color: "rgba(255,255,255,0.58)",
                        fontSize: 12,
                        fontWeight: 600,
                        letterSpacing: "0.04em",
                        textTransform: "uppercase",
                      }}
                    >
                      {detail}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ display: "flex", gap: 12 }}>
              {[
                ["11", "Branches"],
                ["Daily", "Open"],
                ["5", "Accredited"],
              ].map(([value, label]) => (
                <div
                  key={label}
                  style={{
                    display: "flex",
                    alignItems: "baseline",
                    gap: 8,
                    padding: "10px 16px",
                    borderRadius: 999,
                    border: "1px solid rgba(255,204,0,0.28)",
                    background: "rgba(255,204,0,0.1)",
                  }}
                >
                  <span
                    style={{
                      color: "#ffcc00",
                      fontSize: 22,
                      fontWeight: 800,
                    }}
                  >
                    {value}
                  </span>
                  <span
                    style={{
                      color: "rgba(255,255,255,0.78)",
                      fontSize: 15,
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
              gap: 18,
            }}
          >
            <div
              style={{
                display: "flex",
                width: 300,
                height: 300,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "50%",
                border: "6px solid rgba(255,255,255,0.2)",
                background: "rgba(255,255,255,0.1)",
                boxShadow: "0 28px 64px rgba(0,0,0,0.35)",
              }}
            >
              <img
                src={logoSrc}
                alt=""
                width={250}
                height={250}
                style={{ borderRadius: "50%" }}
              />
            </div>
            <div
              style={{
                color: "rgba(255,255,255,0.72)",
                fontSize: 16,
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              Nueva Ecija &amp; Tarlac
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Gagalin",
          data: gagalinData,
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

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ARC Anti Rabies Clinic | 11 Branches",
  description:
    "Immediate anti-rabies treatment and preventive vaccination across Nueva Ecija and Tarlac.",
  icons: {
    icon: "/arc_logo.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
          integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
          crossOrigin=""
        />
      </head>
      <body id="top">{children}</body>
    </html>
  );
}

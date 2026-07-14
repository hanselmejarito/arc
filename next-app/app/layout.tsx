import type { Metadata } from "next";
import "leaflet/dist/leaflet.css";
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
      <body id="top">{children}</body>
    </html>
  );
}

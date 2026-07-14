export const SITE_NAME = "ARC Anti Rabies Clinic";

export const SITE_DESCRIPTION =
  "Immediate anti-rabies treatment and preventive vaccination across 11 branches in Nueva Ecija and Tarlac. Open daily. Call 0946 945 1531.";

/** Canonical site URL for metadata, sitemap, and robots. */
export function getSiteUrl(): string {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, "");
  }
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL.replace(/\/$/, "")}`;
  }
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL.replace(/\/$/, "")}`;
  }
  return "http://localhost:3000";
}

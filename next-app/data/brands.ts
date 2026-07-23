import type { Branch } from "@/data/branches";

export type BrandId = Branch["brand"];

export const brandLogos = {
  ARC: {
    src: "/arc_logo.jpg",
    alt: "ARC Anti Rabies Clinic",
    label: "ARC",
  },
  LIFEMED: {
    src: "/brands/lifemed.jpg",
    alt: "LIFE MED Animal Bite Clinic",
    label: "LIFEMED",
  },
} as const satisfies Record<
  "ARC" | "LIFEMED",
  { src: string; alt: string; label: string }
>;

export const brandOrder = ["ARC", "LIFEMED"] as const;

export function getBranchBrandLogo(brand: BrandId) {
  return brandLogos[brand === "ARCII" ? "ARC" : brand];
}

export type BrandId = "ARC" | "LIFEMED" | "VAXGUARD";

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
  VAXGUARD: {
    src: "/brands/vaxguard.jpg",
    alt: "VAXGUARD Anti-Rabies Vaccine",
    label: "VAXGUARD",
  },
} as const satisfies Record<
  BrandId,
  { src: string; alt: string; label: string }
>;

export const brandOrder: BrandId[] = ["ARC", "LIFEMED", "VAXGUARD"];

import Image from "next/image";
import { brandLogos, brandOrder } from "@/data/brands";

export default function Footer() {
  return (
    <footer>
      <div className="footer-brand">
        <span>ARC Anti Rabies Clinic</span> — 11 Branches Across Nueva Ecija
        &amp; Tarlac
      </div>
      <div className="footer-partners" aria-label="Clinic brands">
        {brandOrder.map((id) => {
          const brand = brandLogos[id];
          return (
            <div className="footer-partner" key={id}>
              <span className="footer-partner-mark">
                <Image
                  src={brand.src}
                  alt={brand.alt}
                  width={32}
                  height={32}
                  className="footer-partner-logo"
                />
              </span>
              <span className="footer-partner-label">{brand.label}</span>
            </div>
          );
        })}
      </div>
      <div>
        DOH-Accredited · PhilHealth Partner · © 2026 ARC Anti Rabies Clinic. All
        rights reserved.
      </div>
      <div className="footer-links">
        <a href="/privacy">Privacy Policy</a>
      </div>
      <div className="footer-warning">
        ⚠️ If you have been bitten, do not rely solely on this website. Go to
        the nearest ARC branch or hospital emergency room immediately.
      </div>
    </footer>
  );
}

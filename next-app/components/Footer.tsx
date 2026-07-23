import Image from "next/image";
import { brandLogos, brandOrder } from "@/data/brands";

const quickLinks = [
  ["Services", "/#services"],
  ["What To Do", "/#what-to-do"],
  ["Branches", "/#branches"],
  ["FAQ", "/#faq"],
  ["Contact", "/#contact"],
] as const;

export default function Footer() {
  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-top">
          <div className="footer-col footer-col-brand">
            <Image
              src="/arc_logo.jpg"
              alt="ARC Anti Rabies Clinic"
              width={72}
              height={72}
              className="footer-logo"
            />
            <p>
              <span>ARC Anti Rabies Clinic</span> — trusted anti-rabies care
              across 11 branches in Nueva Ecija and Tarlac.
            </p>
          </div>
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul className="footer-links-list">
              {quickLinks.map(([label, href]) => (
                <li key={label}>
                  <a href={href}>{label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer-col">
            <h4>Contact</h4>
            <p className="footer-contact-item">
              <a href="tel:09469451531">0946 945 1531</a>
            </p>
            <p className="footer-contact-item">
              <a href="mailto:arcantirabisclinic@gmail.com">
                arcantirabisclinic@gmail.com
              </a>
            </p>
            <p className="footer-contact-item">
              Guimba, Nueva Ecija
              <br />
              <small style={{ opacity: 0.7 }}>Main Branch</small>
            </p>
          </div>
          <div className="footer-col">
            <h4>Our Brands</h4>
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
          </div>
        </div>
        <div className="footer-bottom">
          <div>
            DOH-Accredited · PhilHealth Partner · © 2026 ARC Anti Rabies
            Clinic. All rights reserved. ·{" "}
            <a href="/privacy" style={{ color: "inherit", opacity: 0.7 }}>
              Privacy Policy
            </a>
          </div>
          <div className="footer-warning">
            If you have been bitten, go to the nearest ARC branch or hospital
            emergency room immediately.
          </div>
        </div>
      </div>
    </footer>
  );
}

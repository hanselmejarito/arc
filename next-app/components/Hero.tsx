import Image from "next/image";
import ScrollLink from "./ScrollLink";

const quickChips = [
  {
    label: "Open daily",
    icon: (
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" aria-hidden="true">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </svg>
    ),
  },
  {
    label: "Walk-ins welcome",
    icon: (
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M5 12l5 5L20 7" />
      </svg>
    ),
  },
  {
    label: "PhilHealth-accredited branches",
    icon: (
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 3l7 3v5c0 4.5-3 8.5-7 10-4-1.5-7-5.5-7-10V6l7-3z" />
      </svg>
    ),
  },
] as const;

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-media" aria-hidden="true">
        <Image
          src="/hero-nurse.png"
          alt=""
          className="hero-media-img"
          fill
          priority
          sizes="100vw"
        />
        <div className="hero-media-shade" />
        <div className="hero-media-grain" />
      </div>

      <div className="hero-inner">
        <div className="hero-copy">
          <p className="hero-brand hero-enter">
            <span className="hero-brand-mark">ARC</span>
            <span className="hero-brand-line">Anti Rabies Clinic</span>
          </p>
          <h1 className="hero-title hero-enter hero-enter-delay" id="hero-title">
            Fast, trusted
            <br />
            <em>anti-rabies</em> care
            <br />
            near you
          </h1>
          <p className="hero-subtitle hero-enter hero-enter-delay-2">
            Immediate post-exposure treatment and vaccination across 11
            branches in Nueva Ecija and Tarlac.
          </p>
          <div className="hero-chips hero-enter hero-enter-delay-2" aria-label="Highlights">
            {quickChips.map((chip) => (
              <span className="hero-chip" key={chip.label}>
                <span className="hero-chip-icon" aria-hidden="true">
                  {chip.icon}
                </span>
                {chip.label}
              </span>
            ))}
          </div>
          <div className="hero-actions hero-enter hero-enter-delay-3">
            <ScrollLink href="#branches" targetId="branches" className="btn-primary">
              Find a Branch
            </ScrollLink>
            <ScrollLink
              href="#what-to-do"
              targetId="what-to-do"
              className="btn-secondary"
            >
              What To Do After a Bite
            </ScrollLink>
          </div>
          <a href="tel:09469451531" className="hero-hotline hero-enter hero-enter-delay-3">
            <span className="hero-hotline-icon" aria-hidden="true">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </span>
            <span className="hero-hotline-text">
              <span className="hero-hotline-label">Emergency hotline · Open daily</span>
              <span className="hero-hotline-number">0946 945 1531</span>
            </span>
          </a>
        </div>
      </div>

      <ScrollLink
        href="#services"
        targetId="services"
        className="hero-scroll-cue hero-enter hero-enter-delay-3"
        aria-label="Scroll to services"
      >
        <span className="hero-scroll-cue-track" aria-hidden="true">
          <span className="hero-scroll-cue-dot" />
        </span>
        Scroll
      </ScrollLink>
    </section>
  );
}

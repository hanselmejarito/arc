import BranchMap from "./BranchMap";
import ScrollLink from "./ScrollLink";

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-inner">
        <div className="hero-copy hero-enter">
          <div className="hero-badge">
            DOH-Accredited · PhilHealth Partner
          </div>
          <h1 className="hero-title" id="hero-title">
            Fast, Trusted
            <br />
            <em>Anti-Rabies</em>
            <br />
            Treatment Near You
          </h1>
          <p className="hero-subtitle">
            ARC Anti Rabies Clinic provides immediate post-exposure
            prophylaxis, pre-exposure vaccination, and wound care across 11
            branches in Nueva Ecija and Tarlac.
          </p>
          <div className="hero-actions">
            <ScrollLink href="#branches" targetId="branches" className="btn-primary">
              <span aria-hidden="true">📍</span> Find a Branch
            </ScrollLink>
            <ScrollLink
              href="#what-to-do"
              targetId="what-to-do"
              className="btn-secondary"
            >
              What To Do After a Bite →
            </ScrollLink>
          </div>
          <div className="hero-stats">
            <ScrollLink href="#branches" targetId="branches" className="hero-stat-link">
              <div className="stat-num">11</div>
              <div className="stat-label">Branches</div>
            </ScrollLink>
            <ScrollLink href="#branches" targetId="branches" className="hero-stat-link">
              <div className="stat-num">Daily</div>
              <div className="stat-label">Clinic Availability</div>
            </ScrollLink>
            <ScrollLink href="#faq" targetId="faq" className="hero-stat-link">
              <div className="stat-num">5</div>
              <div className="stat-label">Accredited Branches</div>
            </ScrollLink>
            <ScrollLink href="#services" targetId="services" className="hero-stat-link">
              <div className="stat-num">10+</div>
              <div className="stat-label">Years of Service</div>
            </ScrollLink>
          </div>
        </div>
        <div className="hero-visual hero-enter hero-enter-delay">
          <div className="hero-map-wrap">
            <BranchMap />
          </div>
          <div className="hero-map-caption">
            11 BRANCHES · NUEVA ECIJA &amp; TARLAC
          </div>
          <div className="hero-map-legend" aria-label="Map legend">
            <span>
              <i className="hero-map-legend-dot accredited" aria-hidden="true" />
              Accredited
            </span>
            <span>
              <i className="hero-map-legend-dot walkins" aria-hidden="true" />
              Open daily
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

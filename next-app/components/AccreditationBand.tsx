export default function AccreditationBand() {
  return (
    <section className="philhealth-band" aria-labelledby="philhealth-title">
      <div className="philhealth-inner">
        <div>
          <h2 className="ph-title" id="philhealth-title">
            5 PhilHealth Accredited &amp; DOH Licensed Branches
          </h2>
          <p className="ph-sub">
            Free anti-rabies vaccination services for eligible members are
            available at LIFEMED Muñoz and the ARC Guimba, Cabanatuan, Rizal,
            and Palayan branches. Bring your PhilHealth ID card and call ahead
            to confirm eligibility.
          </p>
        </div>
        <div className="ph-logos" aria-label="Accreditations and protocols">
          <div className="ph-badge">
            ✓ DOH
            <br />
            Accredited
          </div>
          <div className="ph-badge">
            ✓ PhilHealth
            <br />
            Accredited
          </div>
          <div className="ph-badge">
            ✓ ABP-Z
            <br />
            Package
          </div>
          <div className="ph-badge">
            ✓ WHO
            <br />
            Protocol
          </div>
        </div>
      </div>
    </section>
  );
}

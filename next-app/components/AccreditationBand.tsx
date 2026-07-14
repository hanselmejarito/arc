import TrustBadges from "./TrustBadges";

export default function AccreditationBand() {
  return (
    <section
      className="philhealth-band"
      id="accreditation"
      aria-labelledby="philhealth-title"
    >
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
        <TrustBadges variant="band" />
      </div>
    </section>
  );
}

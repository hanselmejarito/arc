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
            Accredited care you can trust
          </h2>
          <p className="ph-sub">
            Five PhilHealth-accredited and DOH-licensed branches offer free
            anti-rabies vaccination for eligible members — Guimba, Cabanatuan,
            Palayan, Rizal, and LIFEMED Muñoz. Bring your PhilHealth ID and call
            ahead to confirm eligibility.
          </p>
        </div>
        <TrustBadges variant="band" />
      </div>
    </section>
  );
}

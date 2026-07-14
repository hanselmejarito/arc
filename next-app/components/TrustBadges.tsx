import ScrollLink from "./ScrollLink";

export const TRUST_BADGES = [
  { label: "DOH", detail: "Accredited" },
  { label: "PhilHealth", detail: "Partner" },
  { label: "ABP-Z", detail: "Package" },
  { label: "WHO", detail: "Protocol" },
] as const;

type TrustBadgesProps = {
  variant?: "hero" | "band";
};

export default function TrustBadges({ variant = "hero" }: TrustBadgesProps) {
  if (variant === "band") {
    return (
      <div className="ph-logos" aria-label="Accreditations and protocols">
        {TRUST_BADGES.map((badge) => (
          <div className="ph-badge" key={badge.label}>
            ✓ {badge.label}
            <br />
            {badge.detail}
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="hero-trust" aria-label="Trust and accreditation">
      {TRUST_BADGES.map((badge) => (
        <ScrollLink
          key={badge.label}
          href="#accreditation"
          targetId="accreditation"
          className="hero-trust-badge"
        >
          <span className="hero-trust-check" aria-hidden="true">
            ✓
          </span>
          <span className="hero-trust-text">
            <strong>{badge.label}</strong>
            <span>{badge.detail}</span>
          </span>
        </ScrollLink>
      ))}
    </div>
  );
}

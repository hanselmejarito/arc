import CheckIcon from "./CheckIcon";
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
            <span className="ph-badge-check" aria-hidden="true">
              <CheckIcon size={11} />
            </span>
            <span className="ph-badge-text">
              {badge.label}
              <br />
              {badge.detail}
            </span>
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
            <CheckIcon />
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

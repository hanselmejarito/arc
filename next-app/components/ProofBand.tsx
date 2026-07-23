import CountUp from "./CountUp";
import ScrollLink from "./ScrollLink";
import TrustBadges from "./TrustBadges";

const stats = [
  { end: 11, suffix: "", label: "Branches", href: "branches" },
  { value: "Daily", label: "Clinic hours", href: "branches" },
  { end: 5, suffix: "", label: "Accredited", href: "accreditation" },
  { end: 2, suffix: "+", label: "Years serving", href: "services" },
] as const;

export default function ProofBand() {
  return (
    <section className="proof-band" aria-label="Clinic at a glance">
      <div className="proof-band-inner">
        <div className="proof-stats">
          {stats.map((stat) => (
            <ScrollLink
              key={stat.label}
              href={`#${stat.href}`}
              targetId={stat.href}
              className="proof-stat"
            >
              <span className="proof-stat-num">
                {"end" in stat ? (
                  <CountUp end={stat.end} suffix={stat.suffix} />
                ) : (
                  stat.value
                )}
              </span>
              <span className="proof-stat-label">{stat.label}</span>
            </ScrollLink>
          ))}
        </div>
        <TrustBadges variant="band" />
      </div>
    </section>
  );
}

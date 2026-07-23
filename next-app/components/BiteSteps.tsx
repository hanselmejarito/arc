import ScrollLink from "./ScrollLink";

const steps = [
  {
    number: "01",
    title: "Wash the Wound",
    text: "Immediately scrub the wound with soap and running water for at least 15 minutes. This single step dramatically reduces the risk of infection.",
    targetId: "what-to-do",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z" />
        <path d="M9.5 14a2.5 2.5 0 0 0 2.5 2.5" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Apply Antiseptic",
    text: "Apply povidone-iodine (Betadine) or 70% alcohol after washing. Do NOT close the wound with tape or sutures unless directed by a doctor.",
    targetId: "what-to-do",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="7" y="3" width="10" height="4" rx="1" />
        <path d="M8 7h8l1 4v8a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2v-8l1-4z" />
        <path d="M12 12v4M10 14h4" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Go to ARC Now",
    text: "Visit the nearest ARC branch the same day — don't wait. Bring a valid ID. Treatment works only when started promptly after exposure.",
    targetId: "branches",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Complete All Doses",
    text: "Never skip a scheduled dose. Complete the full series on Days 0, 3, 7, and 28. Your ARC treatment card is accepted at all 11 branches.",
    targetId: "faq",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="5" width="18" height="16" rx="2" />
        <path d="M8 3v4M16 3v4M3 10h18" />
        <path d="m9 15 2 2 4-4" />
      </svg>
    ),
  },
] as const;

export default function BiteSteps() {
  return (
    <section className="section" id="what-to-do">
      <div className="section-inner">
        <div className="section-head">
          <div className="section-label">First Response Guide</div>
          <h2 className="section-title">What To Do After an Animal Bite</h2>
          <p className="section-sub">
            Time is critical. Follow these steps in order — every minute counts
            when it comes to rabies prevention.
          </p>
        </div>
        <div className="steps-grid">
          {steps.map((step, index) => (
            <ScrollLink
              className="step-card clickable"
              href={`#${step.targetId}`}
              key={step.number}
              targetId={step.targetId}
            >
              <div className="step-top">
                <div className="step-icon" aria-hidden="true">
                  {step.icon}
                </div>
                <div className="step-num">{step.number}</div>
              </div>
              <div className="step-title">{step.title}</div>
              <div className="step-text">{step.text}</div>
              {index < steps.length - 1 && (
                <div className="step-arrow" aria-hidden="true">
                  ›
                </div>
              )}
            </ScrollLink>
          ))}
        </div>
        <div className="bite-cta-strip">
          <div className="bite-cta-copy">
            <strong>Bitten or scratched? Don&apos;t wait.</strong>
            <span>
              Rabies is nearly 100% fatal once symptoms appear — and 100%
              preventable with prompt treatment.
            </span>
          </div>
          <div className="bite-cta-actions">
            <a href="tel:09469451531" className="btn-primary">
              Call 0946 945 1531
            </a>
            <ScrollLink
              href="#branches"
              targetId="branches"
              className="btn-outline-dark"
            >
              Find the Nearest Branch
            </ScrollLink>
          </div>
        </div>
      </div>
    </section>
  );
}

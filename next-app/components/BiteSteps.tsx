const steps = [
  {
    number: "01",
    title: "Wash the Wound",
    text: "Immediately scrub the wound with soap and running water for at least 15 minutes. This single step dramatically reduces the risk of infection.",
    href: "#what-to-do",
  },
  {
    number: "02",
    title: "Apply Antiseptic",
    text: "Apply povidone-iodine (Betadine) or 70% alcohol after washing. Do NOT close the wound with tape or sutures unless directed by a doctor.",
    href: "#what-to-do",
  },
  {
    number: "03",
    title: "Go to ARC Now",
    text: "Visit the nearest ARC branch the same day — don't wait. Bring a valid ID. Treatment works only when started promptly after exposure.",
    href: "#branches",
  },
  {
    number: "04",
    title: "Complete All Doses",
    text: "Never skip a scheduled dose. Complete the full series on Days 0, 3, 7, and 28. Your ARC treatment card is accepted at all 11 branches.",
    href: "#faq",
  },
] as const;

export default function BiteSteps() {
  return (
    <section className="section" id="what-to-do">
      <div className="section-inner">
        <div className="section-label">First Response Guide</div>
        <h2 className="section-title">What To Do After an Animal Bite</h2>
        <p className="section-sub">
          Time is critical. Follow these steps in order — every minute counts
          when it comes to rabies prevention.
        </p>
        <div className="steps-grid">
          {steps.map((step, index) => (
            <a
              className="step-card clickable"
              href={step.href}
              key={step.number}
            >
              <div className="step-num">{step.number}</div>
              <div className="step-title">{step.title}</div>
              <div className="step-text">{step.text}</div>
              {index < steps.length - 1 && (
                <div className="step-arrow" aria-hidden="true">
                  ›
                </div>
              )}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

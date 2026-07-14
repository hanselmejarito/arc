"use client";

import { useState } from "react";

const questions = [
  [
    "What should I do first after an animal bite?",
    "Wash the wound immediately with soap and running water for at least 15 minutes — this is the single most important step. Apply povidone-iodine or 70% alcohol, then proceed to the nearest ARC branch the same day. Do not delay treatment.",
  ],
  [
    "Is treatment free at ARC clinics?",
    "Eligible PhilHealth members may receive free anti-rabies vaccination services at our five accredited branches: LIFEMED Muñoz and ARC Guimba, Cabanatuan, Rizal, and Palayan. Non-members may avail of affordable walk-in rates. Bring your PhilHealth ID card and call ahead to confirm eligibility.",
  ],
  [
    "How many doses of anti-rabies vaccine do I need?",
    "The standard post-exposure schedule requires 4 doses: Day 0 (today), Day 3, Day 7, and Day 28. For severe Category III bites, Rabies Immunoglobulin (RIG) is also administered on Day 0. Completing all doses is critical — never skip a scheduled injection.",
  ],
  [
    "Can I continue my doses at a different ARC branch?",
    "Yes. Your ARC treatment card is accepted at any of our 11 branches. If you're traveling or can't return to your original branch, simply bring your card to the nearest ARC location and our staff will continue your treatment series.",
  ],
  [
    "What is pre-exposure prophylaxis (PrEP)?",
    "PrEP is preventive vaccination given before any bite exposure. It's recommended for veterinarians, animal handlers, dog shelter workers, travelers to rabies-endemic areas, and children. It requires 3 doses on Days 0, 7, and 21 or 28, and reduces the post-exposure treatment needed if bitten later.",
  ],
  [
    "What animals can transmit rabies?",
    "In the Philippines, dogs are responsible for over 95% of human rabies cases. However, cats, bats, monkeys, and other warm-blooded mammals can also transmit the virus. Any bite, scratch, or saliva contact from an animal that could be rabid warrants an immediate visit to ARC.",
  ],
  [
    "Do I need treatment if the animal is vaccinated?",
    "Always visit ARC for a proper assessment, even if the biting animal appears healthy or is reportedly vaccinated. Our clinicians will assess the wound category and recommend the appropriate treatment. Starting treatment and stopping later is safer than not starting at all.",
  ],
  [
    "Are walk-ins accepted?",
    "Yes — all ARC branches accept walk-ins. For animal bite emergencies, no appointment is needed. Simply arrive at the nearest branch during operating hours and our team will attend to you promptly. For pre-exposure vaccination, appointments are welcome but not required.",
  ],
] as const;

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="section faq-section" id="faq">
      <div className="section-inner">
        <div className="section-label">Common Questions</div>
        <h2 className="section-title">Frequently Asked Questions</h2>
        <p className="section-sub">
          Everything you need to know about rabies prevention and ARC&apos;s
          services.
        </p>
        <div className="faq-grid">
          {questions.map(([question, answer], index) => {
            const isOpen = openIndex === index;
            return (
              <div className="faq-item" key={question}>
                <h3>
                  <button
                    className={`faq-q${isOpen ? " open" : ""}`}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                  >
                    {question}
                    <svg
                      className="chevron"
                      width="16"
                      height="16"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </button>
                </h3>
                <div
                  className={`faq-a${isOpen ? " open" : ""}`}
                  id={`faq-answer-${index}`}
                  hidden={!isOpen}
                >
                  {answer}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

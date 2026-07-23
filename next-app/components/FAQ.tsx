"use client";

import { useState } from "react";
import { faqItems as questions } from "@/data/faq";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="section faq-section" id="faq">
      <div className="section-inner">
        <div className="section-head centered">
          <div className="section-label">Common Questions</div>
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-sub">
            Everything you need to know about rabies prevention and ARC&apos;s
            services.
          </p>
        </div>
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
                  className={`faq-a-panel${isOpen ? " open" : ""}`}
                  id={`faq-answer-${index}`}
                  role="region"
                  aria-hidden={!isOpen}
                >
                  <div className="faq-a">{answer}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

"use client";

import { type FormEvent, useState } from "react";
import { branches } from "@/data/branches";

type FormStatus = "idle" | "opening" | "success";

export default function Contact() {
  const [status, setStatus] = useState<FormStatus>("idle");

  function submitContact(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;

    const data = new FormData(form);
    const firstName = String(data.get("firstName") ?? "").trim();
    const lastName = String(data.get("lastName") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const branch = String(data.get("branch") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    const subject = encodeURIComponent(
      `ARC Inquiry from ${firstName} ${lastName}`,
    );
    const body = encodeURIComponent(
      `Name: ${firstName} ${lastName}\nEmail: ${email}\nPhone: ${
        phone || "Not provided"
      }\nNearest Branch: ${branch || "Not selected"}\n\nMessage:\n${message}`,
    );

    setStatus("opening");
    window.location.href = `mailto:arcantirabisclinic@gmail.com?subject=${subject}&body=${body}`;
    window.setTimeout(() => setStatus("success"), 800);
  }

  return (
    <section className="section contact-section" id="contact">
      <div className="section-inner">
        <div className="section-label contact-label">Get In Touch</div>
        <h2 className="section-title contact-title">Contact ARC</h2>
        <p className="section-sub contact-sub">
          Have questions about our services or need to locate a branch? Send us
          a message and our team will respond within 24 hours.
        </p>
        <div className="contact-grid">
          <form className="contact-form" onSubmit={submitContact}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  placeholder="Juan"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  placeholder="Dela Cruz"
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="juan@email.com"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="09XX XXX XXXX"
              />
            </div>
            <div className="form-group">
              <label htmlFor="branch">Nearest Branch</label>
              <select id="branch" name="branch" defaultValue="">
                <option value="">Select a branch...</option>
                {branches.map((branch) => (
                  <option key={branch.number}>{branch.shortName}</option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="How can we help you?"
                required
              />
            </div>
            <p
              className={`form-success${status === "success" ? " show" : ""}`}
              aria-live="polite"
            >
              Your email app should open. If not, email us at
              arcantirabisclinic@gmail.com.
            </p>
            <button
              className="btn-primary"
              type="submit"
              disabled={status === "opening"}
            >
              {status === "opening"
                ? "Opening email..."
                : status === "success"
                  ? "Message Sent ✓"
                  : "Send Message"}
            </button>
          </form>
          <div className="contact-info">
            <ContactItem icon="📞" label="Main Branch Contact">
              <a href="tel:09469451531">0946 945 1531</a>
              <br />
              <small>See branch cards for local numbers.</small>
            </ContactItem>
            <ContactItem icon="✉️" label="Email">
              <a href="mailto:arcantirabisclinic@gmail.com">
                arcantirabisclinic@gmail.com
              </a>
            </ContactItem>
            <ContactItem icon="📍" label="Main Office">
              JB Lacson Bldg., L. De Ocampo St. corner
              <br />
              Paraiso St., Saranay District, Guimba,
              <br />
              Nueva Ecija
            </ContactItem>
            <ContactItem icon="🕐" label="Clinic Hours">
              Open Monday – Sunday
              <br />
              <small>*Hours vary by branch. Call ahead to confirm.</small>
            </ContactItem>
            <ContactItem icon="📘" label="Follow Us">
              <a
                href="https://www.facebook.com/profile.php?id=61591336026166"
                target="_blank"
                rel="noopener noreferrer"
              >
                ARC - Animal Bite Center
              </a>
            </ContactItem>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactItem({
  icon,
  label,
  children,
}: {
  icon: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="contact-item">
      <div className="ci-icon" aria-hidden="true">
        {icon}
      </div>
      <div>
        <div className="ci-label">{label}</div>
        <div className="ci-val">{children}</div>
      </div>
    </div>
  );
}

"use client";

import { useForm, ValidationError } from "@formspree/react";
import { branches } from "@/data/branches";

export default function Contact() {
  const [state, handleSubmit] = useForm("xbdnjnzy");

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
          {state.succeeded ? (
            <div className="contact-form contact-form-success" role="status">
              <p className="form-success show">
                Message sent. We&apos;ll get back to you soon. For emergencies,
                call{" "}
                <a href="tel:09469451531">0946 945 1531</a> or email{" "}
                <a href="mailto:arcantirabisclinic@gmail.com">
                  arcantirabisclinic@gmail.com
                </a>
                .
              </p>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <input
                type="hidden"
                name="_subject"
                value="ARC Website Inquiry"
              />
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="firstName">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    name="First Name"
                    placeholder="Juan"
                    required
                  />
                  <ValidationError
                    prefix="First name"
                    field="First Name"
                    errors={state.errors}
                    className="form-error show"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="lastName">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    name="Last Name"
                    placeholder="Dela Cruz"
                    required
                  />
                  <ValidationError
                    prefix="Last name"
                    field="Last Name"
                    errors={state.errors}
                    className="form-error show"
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="Email"
                  placeholder="juan@email.com"
                  required
                />
                <ValidationError
                  prefix="Email"
                  field="Email"
                  errors={state.errors}
                  className="form-error show"
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="Phone"
                  placeholder="09XX XXX XXXX"
                />
              </div>
              <div className="form-group">
                <label htmlFor="branch">Nearest Branch</label>
                <select id="branch" name="Nearest Branch" defaultValue="">
                  <option value="">Select a branch...</option>
                  {branches.map((branch) => (
                    <option key={branch.number} value={branch.shortName}>
                      {branch.shortName}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="Message"
                  placeholder="How can we help you?"
                  required
                />
                <ValidationError
                  prefix="Message"
                  field="Message"
                  errors={state.errors}
                  className="form-error show"
                />
              </div>
              <ValidationError
                errors={state.errors}
                className="form-error show"
              />
              <button
                className="btn-primary"
                type="submit"
                disabled={state.submitting}
              >
                {state.submitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          )}
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
              JB Lacson Bldg, Parairo Street,
              <br />
              Cor Saranay District, Guimba,
              <br />
              Nueva Ecija
            </ContactItem>
            <ContactItem icon="🕐" label="Clinic Hours">
              Open Monday – Sunday
              <br />
              <small>*Hours vary by branch. Call ahead to confirm.</small>
            </ContactItem>
            <ContactItem
              icon={
                <svg
                  className="ci-facebook"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.931-1.956 1.886v2.27h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073" />
                </svg>
              }
              label="Follow Us"
            >
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
  icon: React.ReactNode;
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

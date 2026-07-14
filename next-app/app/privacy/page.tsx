import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { SITE_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${SITE_NAME} collects and uses personal information from this website, in accordance with the Data Privacy Act of 2012 (Republic Act No. 10173).`,
  alternates: {
    canonical: "/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main>
        <article className="legal-page">
          <div className="legal-inner">
            <p className="section-label">Legal</p>
            <h1 className="legal-title">Privacy Policy</h1>
            <p className="legal-meta">
              Last updated: July 14, 2026 · Effective for this website
            </p>
            <p className="legal-lead">
              ARC Anti Rabies Clinic (“ARC,” “we,” “us”) respects your privacy.
              This notice explains how we collect, use, and protect personal
              information submitted through this website, in line with the{" "}
              <strong>Data Privacy Act of 2012 (Republic Act No. 10173)</strong>{" "}
              of the Philippines and related IRR/NPC guidance.
            </p>

            <section className="legal-section">
              <h2>1. Who we are</h2>
              <p>
                ARC Anti Rabies Clinic operates animal-bite and anti-rabies
                vaccination services across branches in Nueva Ecija and Tarlac.
                For privacy-related questions about this website:
              </p>
              <ul>
                <li>
                  Email:{" "}
                  <a href="mailto:arcantirabisclinic@gmail.com">
                    arcantirabisclinic@gmail.com
                  </a>
                </li>
                <li>
                  Phone:{" "}
                  <a href="tel:09469451531">0946 945 1531</a> (Main Branch —
                  Guimba)
                </li>
                <li>
                  Main office: JB Lacson Bldg, Parairo Street, Cor Saranay
                  District, Guimba, Nueva Ecija
                </li>
              </ul>
            </section>

            <section className="legal-section">
              <h2>2. Personal information we collect</h2>
              <p>
                When you use our website contact form, you may voluntarily
                provide:
              </p>
              <ul>
                <li>First name and last name</li>
                <li>Email address</li>
                <li>Phone number (optional)</li>
                <li>Preferred / nearest branch</li>
                <li>Message content you choose to write</li>
              </ul>
              <p>
                We do not ask for government IDs, PhilHealth numbers, medical
                records, or payment details through this website form. Please{" "}
                <strong>do not</strong> send sensitive medical details beyond
                what is needed to ask a general question — for emergencies, go
                to a branch or call us directly.
              </p>
            </section>

            <section className="legal-section">
              <h2>3. Purpose of processing</h2>
              <p>We use this information only to:</p>
              <ul>
                <li>Respond to your inquiry or request</li>
                <li>Help you locate an appropriate ARC / partner branch</li>
                <li>
                  Follow up if needed regarding clinic hours, services, or
                  directions
                </li>
              </ul>
              <p>
                We do not sell your personal information. We do not use contact
                form submissions for unrelated marketing without a separate,
                clear basis.
              </p>
            </section>

            <section className="legal-section">
              <h2>4. How we receive and store messages</h2>
              <p>
                Contact form submissions are processed through{" "}
                <strong>Formspree</strong>, a third-party form service that
                delivers messages to our clinic email. By submitting the form,
                your data is transmitted to Formspree and then to ARC for
                handling.
              </p>
              <p>
                We take reasonable steps to limit access to inquiry emails to
                authorized clinic staff involved in responding to the public.
              </p>
            </section>

            <section className="legal-section">
              <h2>5. Legal basis</h2>
              <p>
                Processing is based on your{" "}
                <strong>consent</strong> when you voluntarily submit the form,
                and on our{" "}
                <strong>legitimate interest</strong> in responding to public
                inquiries about clinic services. Where you contact us about
                care, we process only what is needed to reply appropriately.
              </p>
            </section>

            <section className="legal-section">
              <h2>6. Retention</h2>
              <p>
                We keep contact form correspondence only as long as needed to
                answer your inquiry and for ordinary business follow-up, unless
                a longer period is required by law or a complaint/investigation.
                You may ask us to delete your inquiry records where applicable.
              </p>
            </section>

            <section className="legal-section">
              <h2>7. Your rights (Data Privacy Act)</h2>
              <p>
                Subject to applicable law and exceptions, you may have the right
                to:
              </p>
              <ul>
                <li>Be informed about how your data is processed</li>
                <li>Access the personal data we hold about you from this form</li>
                <li>Object to processing, or withdraw consent where consent is the basis</li>
                <li>Request correction of inaccurate data</li>
                <li>Request erasure or blocking under certain conditions</li>
                <li>Lodge a complaint with the National Privacy Commission (NPC)</li>
              </ul>
              <p>
                To exercise these rights regarding website inquiries, email{" "}
                <a href="mailto:arcantirabisclinic@gmail.com">
                  arcantirabisclinic@gmail.com
                </a>{" "}
                with the subject line “Privacy Request.”
              </p>
              <p>
                NPC website:{" "}
                <a
                  href="https://privacy.gov.ph/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  privacy.gov.ph
                </a>
              </p>
            </section>

            <section className="legal-section">
              <h2>8. Cookies and analytics</h2>
              <p>
                This marketing site does not currently run a separate
                advertising tracker. Hosting (e.g. Vercel) and map providers
                (e.g. OpenStreetMap / CARTO tiles) may process technical data
                such as IP address and browser type as part of delivering the
                page. Social networks (e.g. Facebook) have their own privacy
                policies when you leave our site.
              </p>
            </section>

            <section className="legal-section">
              <h2>9. Children</h2>
              <p>
                The website contact form is intended for adults or parents /
                guardians inquiring on behalf of a minor. Do not submit a
                child’s sensitive health information through the web form.
              </p>
            </section>

            <section className="legal-section">
              <h2>10. Medical disclaimer</h2>
              <p>
                This website provides general public information only. It is{" "}
                <strong>not</strong> a substitute for clinical assessment. If
                you or someone else has been bitten or scratched by an animal,
                go to the nearest ARC branch or hospital emergency room
                immediately — do not wait for an email reply.
              </p>
            </section>

            <section className="legal-section">
              <h2>11. Changes to this policy</h2>
              <p>
                We may update this Privacy Policy when our practices or the law
                change. The “Last updated” date at the top will be revised when
                we do. Continued use of the contact form after changes means
                you accept the updated notice to the extent allowed by law.
              </p>
            </section>

            <p className="legal-footnote">
              This page is a privacy notice for the ARC public website. It is
              not legal advice. For clinic operations beyond the website (e.g.
              in-person registration, PhilHealth claims), additional notices
              may apply at the branch.
            </p>

            <p className="legal-back">
              <a href="/">← Back to home</a>
            </p>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}

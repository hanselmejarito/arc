import ScrollLink from "./ScrollLink";
import {
  IconBandage,
  IconClipboard,
  IconDrop,
  IconFlask,
  IconPill,
  IconShield,
  IconSyringe,
} from "./ServiceIcons";

const services = [
  {
    Icon: IconSyringe,
    tone: "red",
    name: "Post-Exposure Prophylaxis (PEP)",
    description:
      "Immediate anti-rabies vaccine series for animal bites, scratches, or saliva contact. Administered on Days 0, 3, 7, and 28 following the WHO-recommended intradermal schedule.",
    detail:
      "Free vaccination for eligible members at 5 accredited branches",
  },
  {
    Icon: IconShield,
    tone: "teal",
    name: "Pre-Exposure Prophylaxis (PrEP)",
    description:
      "Preventive vaccination for high-risk individuals — veterinarians, animal handlers, travelers, and children in endemic areas. 3-dose series on Days 0, 7, and 21/28.",
    detail: "Available at all 11 branches",
  },
  {
    Icon: IconDrop,
    tone: "warm",
    name: "Rabies Immunoglobulin (RIG)",
    description:
      "For Category III exposures (deep wounds, bites on head/neck/hands). RIG provides immediate passive immunity while the vaccine builds long-term protection. Administered on Day 0.",
    detail: "Equine & Human RIG available",
  },
  {
    Icon: IconBandage,
    tone: "red",
    name: "Wound Assessment & Care",
    description:
      "Professional wound cleaning, debridement, and dressing. Our trained nurses assess bite category (I, II, III) to determine the appropriate treatment protocol immediately.",
    detail: "Included with every consultation",
  },
  {
    Icon: IconPill,
    tone: "teal",
    name: "Anti-Tetanus Prophylaxis",
    description:
      "Tetanus toxoid and anti-tetanus immunoglobulin administered alongside anti-rabies treatment when indicated, ensuring full protection from puncture and laceration wounds.",
    detail: "DOH-accredited vaccines",
  },
  {
    Icon: IconClipboard,
    tone: "warm",
    name: "Follow-Up & Monitoring",
    description:
      "Scheduled return visits with reminders for completing your full vaccine series. Treatment cards issued at first visit — valid at any ARC branch for continuation of doses.",
    detail: "Inter-branch records accepted",
  },
  {
    Icon: IconFlask,
    tone: "teal",
    name: "Other Vaccines",
    description:
      "Hepatitis B, Flu (Influenza), and Pneumococcal vaccines are also available for added protection against common preventable diseases.",
    detail: "Not covered by PhilHealth",
    noCheck: true,
  },
] as const;

export default function Services() {
  return (
    <section className="section services-section" id="services">
      <div className="section-inner">
        <div className="section-head">
          <div className="section-label">What We Offer</div>
          <h2 className="section-title">Complete Rabies Prevention &amp; Care</h2>
          <p className="section-sub">
            From emergency post-exposure treatment to routine pre-exposure
            vaccination — ARC covers everything.
          </p>
        </div>
        <div className="services-grid">
          {services.map(({ Icon, ...service }) => (
            <ScrollLink
              className="service-card clickable"
              href="#contact"
              key={service.name}
              targetId="contact"
            >
              <div className={`service-icon ${service.tone}`}>
                <Icon />
              </div>
              <div className="service-name">{service.name}</div>
              <div className="service-desc">{service.description}</div>
              <div className="service-price">
                {"noCheck" in service && service.noCheck ? "Note · " : "Included · "}
                {service.detail}
              </div>
            </ScrollLink>
          ))}
        </div>
      </div>
    </section>
  );
}

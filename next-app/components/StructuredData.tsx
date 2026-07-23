import { branches } from "@/data/branches";
import { faqItems } from "@/data/faq";
import { getSiteUrl, SITE_DESCRIPTION, SITE_NAME } from "@/lib/site";

/** JSON-LD structured data: helps Google surface the clinic in local search,
 * show branch locations, and render FAQ rich results. */
export default function StructuredData() {
  const siteUrl = getSiteUrl();

  const clinicSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "@id": `${siteUrl}/#organization`,
    name: SITE_NAME,
    description: SITE_DESCRIPTION,
    url: siteUrl,
    logo: `${siteUrl}/arc_logo.jpg`,
    telephone: "+63 946 945 1531",
    email: "arcantirabisclinic@gmail.com",
    medicalSpecialty: "Infectious",
    address: {
      "@type": "PostalAddress",
      streetAddress: "JB Lacson Bldg, Parairo Street, Cor Saranay District",
      addressLocality: "Guimba",
      addressRegion: "Nueva Ecija",
      addressCountry: "PH",
    },
    sameAs: ["https://www.facebook.com/profile.php?id=61591336026166"],
    department: branches.map((branch) => ({
      "@type": "MedicalClinic",
      name: branch.name,
      telephone: `+63 ${branch.phone.replace(/^0/, "")}`,
      address: {
        "@type": "PostalAddress",
        streetAddress: branch.address,
        addressRegion: branch.province === "tarlac" ? "Tarlac" : "Nueva Ecija",
        addressCountry: "PH",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: branch.coordinates[0],
        longitude: branch.coordinates[1],
      },
    })),
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map(([question, answer]) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: { "@type": "Answer", text: answer },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(clinicSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}

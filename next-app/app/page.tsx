import ScrollAnchorOnLoad from "@/components/ScrollAnchorOnLoad";
import AccreditationBand from "@/components/AccreditationBand";
import BackToTop from "@/components/BackToTop";
import BiteSteps from "@/components/BiteSteps";
import Branches from "@/components/Branches";
import Contact from "@/components/Contact";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MobileActionBar from "@/components/MobileActionBar";
import ProofBand from "@/components/ProofBand";
import Reveal from "@/components/Reveal";
import Services from "@/components/Services";
import StructuredData from "@/components/StructuredData";

export default function Home() {
  return (
    <>
      <StructuredData />
      <ScrollAnchorOnLoad />
      <a href="#main" className="skip-link">
        Skip to main content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <Reveal>
          <ProofBand />
        </Reveal>
        <Reveal delayMs={40}>
          <Services />
        </Reveal>
        <Reveal delayMs={40}>
          <BiteSteps />
        </Reveal>
        <Branches />
        <Reveal>
          <AccreditationBand />
        </Reveal>
        <Reveal delayMs={40}>
          <FAQ />
        </Reveal>
        <Reveal>
          <Contact />
        </Reveal>
      </main>
      <Footer />
      <MobileActionBar />
      <BackToTop />
    </>
  );
}

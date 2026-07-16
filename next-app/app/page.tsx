import ScrollAnchorOnLoad from "@/components/ScrollAnchorOnLoad";
import AccreditationBand from "@/components/AccreditationBand";
import BiteSteps from "@/components/BiteSteps";
import Branches from "@/components/Branches";
import Contact from "@/components/Contact";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Reveal from "@/components/Reveal";
import Services from "@/components/Services";

export default function Home() {
  return (
    <>
      <ScrollAnchorOnLoad />
      <Header />
      <main>
        <Hero />
        <Reveal>
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
    </>
  );
}

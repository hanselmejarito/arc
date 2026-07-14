import AccreditationBand from "@/components/AccreditationBand";
import BiteSteps from "@/components/BiteSteps";
import Branches from "@/components/Branches";
import Contact from "@/components/Contact";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <BiteSteps />
        <Branches />
        <AccreditationBand />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

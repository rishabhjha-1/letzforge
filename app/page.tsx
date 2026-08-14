import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import Services from "@/components/Services";
import AISection from "@/components/AISection";
import Clients from "@/components/Clients";
import Work from "@/components/Work";
import Industries from "@/components/Industries";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Services />
        <AISection />
        <Clients />
        <Work />
        <Industries />
        <CTA />
      </main>
      <Footer />
    </>
  );
}

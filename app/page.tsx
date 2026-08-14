"use client";
import { ContactProvider } from "@/context/ContactContext";
import ContactModal from "@/components/ContactModal";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import Services from "@/components/Services";
import AISection from "@/components/AISection";
import Clients from "@/components/Clients";
import Work from "@/components/Work";
import Industries from "@/components/Industries";
import Team from "@/components/Team";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <ContactProvider>
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
        <Team />
        <CTA />
      </main>
      <Footer />
      <ContactModal />
    </ContactProvider>
  );
}

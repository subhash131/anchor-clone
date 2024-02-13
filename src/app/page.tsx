import Brands from "@/components/Brands";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import ServiceCardProvider from "@/components/Services/provider";

export default function Home() {
  return (
    <ServiceCardProvider>
      <main>
        <Navbar />
        <Hero />
        <Features />
        <Brands />
        <Services />
      </main>
    </ServiceCardProvider>
  );
}

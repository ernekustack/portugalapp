import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Portfolio } from "@/components/Portfolio";
import { TechStack } from "@/components/TechStack";
import { Process } from "@/components/Process";
import { CTA } from "@/components/CTA";
import { Initiatives } from "@/components/Initiatives";
import { InDevelopment } from "@/components/InDevelopment";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { CookieBanner } from "@/components/CookieBanner";

const Index = () => {
  return (
      <main className="min-h-screen bg-background text-foreground">
        <Header />
        <Hero />
        <Portfolio />
        <TechStack />
        <Process />
        <CTA />
        <Initiatives />
        <InDevelopment />
        <ContactForm />
        <Footer />
        <CookieBanner />
      </main>
  );
};

export default Index;

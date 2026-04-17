import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Portfolio } from "@/components/Portfolio";
import { TechStack } from "@/components/TechStack";
import { Process } from "@/components/Process";
import { CTA } from "@/components/CTA";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { CookieBanner } from "@/components/CookieBanner";
import { LanguageProvider } from "@/i18n/LanguageContext";

const Index = () => {
  return (
    <LanguageProvider>
      <main className="min-h-screen bg-background text-foreground">
        <Header />
        <Hero />
        <Portfolio />
        <TechStack />
        <Process />
        <CTA />
        <ContactForm />
        <Footer />
        <CookieBanner />
      </main>
    </LanguageProvider>
  );
};

export default Index;

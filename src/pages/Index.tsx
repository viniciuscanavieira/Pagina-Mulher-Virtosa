
import Hero from "../components/Hero";
import AboutSection from "../components/AboutSection";
import BenefitsSection from "../components/BenefitsSection";
import TestimonialsSection from "../components/TestimonialsSection";
import AudienceSection from "../components/AudienceSection";
import CheckoutCard from "../components/CheckoutCard";
import FAQSection from "../components/FAQSection";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <main>
        <Hero />
        <AboutSection />
        <BenefitsSection />
        <TestimonialsSection />
        <AudienceSection />
        <CheckoutCard />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

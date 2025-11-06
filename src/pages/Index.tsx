import HeroSection from '@/components/sections/HeroSection';
import BenefitsSection from '@/components/sections/BenefitsSection';
import AboutSection from '@/components/sections/AboutSection';
import ProductsSection from '@/components/sections/ProductsSection';
import HowItWorksSection from '@/components/sections/HowItWorksSection';
import FAQSection from '@/components/sections/FAQSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import ContactFormSection from '@/components/sections/ContactFormSection';
import Footer from '@/components/sections/Footer';
import ScrollToTop from '@/components/ui/ScrollToTop';

export default function Index() {
  const scrollToForm = () => {
    document.getElementById('partner-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <HeroSection onCTAClick={scrollToForm} />
      <BenefitsSection />
      <ProductsSection onCTAClick={scrollToForm} />
      <HowItWorksSection onCTAClick={scrollToForm} />
      <AboutSection onCTAClick={scrollToForm} />
      <FAQSection />
      <TestimonialsSection onCTAClick={scrollToForm} />
      <ContactFormSection />
      <Footer />
      <ScrollToTop />
    </div>
  );
}
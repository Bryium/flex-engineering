import Header from "./../components/Header";
import HeroSection from "./../components/HeroSection";
import ServicesSection from "./../components/ServicesSection";
import WhyChooseUs from "./../components/WhyChooseUs";
import PortfolioSection from "./../components/PortfolioSection";
import TestimonialsSection from "./../components/TestimonialsSection";
import ContactSection from "./../components/ContactSection";
import Footer from "./../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <ServicesSection />
      <WhyChooseUs />
      <PortfolioSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;

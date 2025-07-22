import { Button } from "./../components/ui/button";
import { ArrowRight, Shield, Clock, Award } from "lucide-react";
import heroImage from "./../assets/hero-electrical.jpg";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-gradient-hero"
    >
      {/* Background Image Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{ backgroundImage: `url(${heroImage})` }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="text-center lg:text-left">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-electric-orange/10 text-electric-orange rounded-full text-sm font-medium mb-4">
                Professional Electrical Services
              </span>
              <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
                Power Your World with
                <span className="text-electric-orange"> Expert</span> Solutions
              </h1>
              <p className="text-xl text-primary-foreground/80 mb-8 max-w-lg mx-auto lg:mx-0">
                From electrical installations to solar power systems, we deliver
                safe, reliable, and efficient solutions for your home and
                business needs.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <Button
                variant="cta"
                size="lg"
                onClick={() => scrollToSection("services")}
                className="text-lg px-8 py-6"
              >
                Our Services
                <ArrowRight className="h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection("contact")}
                className="text-lg px-8 py-6 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10"
              >
                Get Free Quote
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-primary-foreground/20">
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Shield className="h-8 w-8 text-electric-orange" />
                </div>
                <p className="text-sm text-primary-foreground/70">
                  Licensed & Insured
                </p>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Clock className="h-8 w-8 text-electric-orange" />
                </div>
                <p className="text-sm text-primary-foreground/70">
                  24/7 Emergency
                </p>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Award className="h-8 w-8 text-electric-orange" />
                </div>
                <p className="text-sm text-primary-foreground/70">
                  10+ Years Experience
                </p>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="hidden lg:block">
            <div className="relative">
              <img
                src={heroImage}
                alt="Professional electrical work"
                className="rounded-2xl shadow-elegant w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-electric-blue/20 to-transparent rounded-2xl" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-foreground/50 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

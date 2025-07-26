import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "./../components/ui/card";
import { Button } from "./../components/ui/button";
import {
  Zap,
  Shield,
  Sun,
  Wifi,
  Home,
  Building,
  Wrench,
  Clock,
  CheckCircle,
} from "lucide-react";
import solarImage from "./../assets/solar-installation.jpg";
import securityImage from "./../assets/security-systems.jpg";
import networkImage from "./../assets/network-installation.jpg";

const ServicesSection = () => {
  const services = [
    {
      icon: Zap,
      title: "Electrical Installation & Maintenance",
      description:
        "Complete electrical solutions for residential and commercial properties",
      image: null,
      features: [
        "New electrical installations",
        "Panel upgrades and repairs",
        "Outlet and switch installation",
        "Electrical troubleshooting",
        "Code compliance inspections",
      ],
    },
    {
      icon: Shield,
      title: "Security & CCTV Systems",
      description: "Advanced security solutions to protect your property",
      image: securityImage,
      features: [
        "CCTV camera installation",
        "Access control systems",
        "Alarm system setup",
        "Remote monitoring",
        "Security system maintenance",
      ],
    },
    {
      icon: Sun,
      title: "Solar Power Solutions",
      description: "Sustainable energy solutions including solar water heating",
      image: solarImage,
      features: [
        "Solar panel installation",
        "Solar water heating systems",
        "Battery storage solutions",
        "Grid-tie systems",
        "Energy efficiency audits",
      ],
    },
    {
      icon: Wifi,
      title: "Network Installation",
      description: "Professional networking solutions for modern connectivity",
      image: networkImage,
      features: [
        "Structured cabling",
        "Network equipment setup",
        "Wi-Fi installation",
        "Fiber optic installation",
        "Network troubleshooting",
      ],
    },
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Comprehensive Electrical Solutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We provide a full range of electrical services for residential,
            commercial, and industrial clients with the highest standards of
            safety and quality.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card
                key={index}
                className="overflow-hidden shadow-elegant hover:shadow-blue transition-all duration-300 group"
              >
                {service.image && (
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  </div>
                )}

                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                      <IconComponent className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                    </div>
                  </div>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardHeader>

                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center space-x-2"
                      >
                        <CheckCircle className="h-4 w-4 text-electric-orange" />
                        <span className="text-sm text-foreground">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Button variant="outline" className="w-full">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Emergency Service Notice */}
        <div className="mt-16 bg-gradient-accent rounded-2xl p-8 text-center">
          <Clock className="h-12 w-12 text-accent-foreground mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-accent-foreground mb-2">
            24/7 Emergency Service Available
          </h3>
          <p className="text-accent-foreground/80 mb-6">
            Electrical emergencies don't wait for business hours. Our certified
            electricians are available around the clock for urgent repairs and
            safety issues.
          </p>
          <a href="tel:0786750879">
            <Button
              variant="outline"
              className="border-accent-foreground/20 text-accent-foreground hover:bg-accent-foreground/10"
            >
              Call Emergency Lines: 0786750939
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

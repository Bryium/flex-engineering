import { Card, CardContent } from "./../components/ui/card";
import {
  Shield,
  Award,
  Users,
  Clock,
  DollarSign,
  ThumbsUp,
  Star,
  CheckCircle2,
} from "lucide-react";

const WhyChooseUs = () => {
  const stats = [
    { number: "10+", label: "Years Experience", icon: Award },
    { number: "50+", label: "Projects Completed", icon: CheckCircle2 },
    { number: "100%", label: "Licensed & Insured", icon: Shield },
    { number: "24/7", label: "Emergency Service", icon: Clock },
  ];

  const features = [
    {
      icon: Shield,
      title: "Licensed & Insured",
      description:
        "Fully licensed electricians with comprehensive insurance coverage for your peace of mind.",
    },
    {
      icon: Award,
      title: "Certified Professionals",
      description:
        "Our team holds industry certifications and stays current with the latest electrical codes.",
    },
    {
      icon: Users,
      title: "Expert Team",
      description:
        "Experienced electricians who deliver quality workmanship on every project.",
    },
    {
      icon: Clock,
      title: "Reliable Service",
      description:
        "On-time service delivery with transparent communication throughout the process.",
    },
    {
      icon: DollarSign,
      title: "Competitive Pricing",
      description:
        "Fair, upfront pricing with no hidden fees. Free estimates on all projects.",
    },
    {
      icon: ThumbsUp,
      title: "Quality Guarantee",
      description:
        "We stand behind our work with comprehensive warranties and satisfaction guarantees.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-electric-orange/10 text-electric-orange rounded-full text-sm font-medium mb-4">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Your Trusted Electrical Partner
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            With over 10 years of experience, we've built our reputation on
            quality workmanship, reliability, and exceptional customer service.
            Here's why clients choose ElectriPro.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <Card
                key={index}
                className="text-center shadow-elegant hover:shadow-blue transition-all duration-300"
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div className="text-3xl font-bold text-foreground mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card
                key={index}
                className="shadow-elegant hover:shadow-orange transition-all duration-300 group"
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Customer Satisfaction */}
        <div className="mt-16 bg-gradient-primary rounded-2xl p-8 text-center">
          <div className="flex justify-center mb-4">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="h-8 w-8 text-electric-orange fill-current"
              />
            ))}
          </div>
          <h3 className="text-2xl font-bold text-primary-foreground mb-2">
            98% Customer Satisfaction Rate
          </h3>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto">
            Our commitment to excellence has earned us the trust of hundreds of
            satisfied customers. We don't just meet expectations – we exceed
            them.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

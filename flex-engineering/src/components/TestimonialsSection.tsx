import { Card, CardContent } from "./../components/ui/card";
import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Grace Wanjiku",
      role: "Homeowner",
      company: "Residential Client",
      rating: 5,
      text: "Flex Electrical Engineering Systems installed our solar system and the experience was fantastic. From initial consultation to final installation, their team was professional, knowledgeable, and efficient. Our energy bills have dropped by 80%!",
      avatar:
        "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=64&h=64&fit=crop&crop=face",
    },
    {
      id: 2,
      name: "Peter Kamau",
      role: "Facility Manager",
      company: "TechCorp Industries",
      rating: 5,
      text: "We needed a complete electrical upgrade for our manufacturing facility. Flex Electrical Engineering Systems handled everything professionally, on time, and within budget. Their attention to safety and code compliance was exceptional.",
      avatar:
        "https://images.unsplash.com/photo-1463453091185-61582044d556?w=64&h=64&fit=crop&crop=face",
    },
    {
      id: 3,
      name: "Mary Njeri",
      role: "Property Manager",
      company: "Downtown Office Complex",
      rating: 5,
      text: "The security system installation exceeded our expectations. The team was courteous, clean, and worked around our business hours. The system works flawlessly and gives us complete peace of mind.",
      avatar:
        "https://images.unsplash.com/photo-1485893086445-ed75865251e0?w=64&h=64&fit=crop&crop=face",
    },
    {
      id: 4,
      name: "James Mwangi",
      role: "Restaurant Owner",
      company: "The Gourmet Spot",
      rating: 5,
      text: "Emergency electrical repair at 2 AM on a Saturday - Flex Electrical Engineering Systems was there within an hour. Professional, fair pricing, and got us back up and running quickly. Saved our weekend rush!",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=64&h=64&fit=crop&crop=face",
    },
    {
      id: 5,
      name: "Christine Achieng",
      role: "IT Director",
      company: "Riverside School District",
      rating: 5,
      text: "The network infrastructure project was completed flawlessly. Flex Electrical Engineering Systems's team coordinated perfectly with our IT requirements and delivered a robust system that serves our entire campus.",
      avatar:
        "https://images.unsplash.com/photo-1594736797933-d0a56ba15074?w=64&h=64&fit=crop&crop=face",
    },
    {
      id: 6,
      name: "Samuel Kiprotich",
      role: "Business Owner",
      company: "Metro Auto Parts",
      rating: 5,
      text: "From initial consultation to project completion, Flex Electrical Engineering Systems demonstrated expertise and professionalism. The LED lighting upgrade has improved our workspace dramatically while cutting energy costs in half.",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=face",
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-electric-orange/10 text-electric-orange rounded-full text-sm font-medium mb-4">
            Client Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients
            have to say about our electrical services and commitment to
            excellence.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.id}
              className="shadow-elegant hover:shadow-orange transition-all duration-300 group relative overflow-hidden"
            >
              <CardContent className="p-6">
                {/* Quote Icon */}
                <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                  <Quote className="h-12 w-12 text-electric-orange" />
                </div>

                {/* Stars */}
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 text-yellow-400 fill-current"
                    />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-foreground mb-6 relative z-10">
                  "{testimonial.text}"
                </p>

                {/* Client Info */}
                <div className="flex items-center space-x-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-foreground">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                    <p className="text-xs text-electric-blue font-medium">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 bg-gradient-primary rounded-2xl p-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary-foreground mb-2">
                100+
              </div>
              <div className="text-primary-foreground/80">Happy Clients</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-foreground mb-2">
                98%
              </div>
              <div className="text-primary-foreground/80">
                Satisfaction Rate
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-foreground mb-2">
                24/7
              </div>
              <div className="text-primary-foreground/80">
                Support Available
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

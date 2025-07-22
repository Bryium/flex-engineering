import { useState } from "react";
import { Button } from "./../components/ui/button";
import { Input } from "./../components/ui/input";
import {
  Zap,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  ArrowRight,
  MessageCircle,
} from "lucide-react";
import { useToast } from "./../components/ui/use-toast";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [isSending, setIsSending] = useState(false);

  const services = [
    "Electrical Installation",
    "Solar Power Systems",
    "Security & CCTV",
    "Network Installation",
    "Emergency Repairs",
    "Maintenance Services",
  ];

  const quickLinks = [
    "About Us",
    "Our Services",
    "Portfolio",
    "Testimonials",
    "Contact",
    "Free Quote",
  ];

  const handleSubscribe = async () => {
    if (!email) return;
    setIsSending(true);

    // Simulate email send (replace with actual EmailJS or backend call)
    await new Promise((res) => setTimeout(res, 1000));

    toast({
      title: "Subscribed!",
      description: `Thanks! We'll send updates to ${email}.`,
    });

    setEmail("");
    setIsSending(false);
  };

  return (
    <footer className="bg-gradient-hero text-primary-foreground">
      <div className="container mx-auto px-4">
        {/* Newsletter Section */}
        <div className="py-12 border-b border-primary-foreground/20">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-2">Stay Powered Up!</h3>
              <p className="text-primary-foreground/80">
                Get electrical tips, energy-saving advice, and special offers
                delivered to your inbox.
              </p>
            </div>
            <div className="flex gap-4">
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
              />
              <Button
                variant="cta"
                onClick={handleSubscribe}
                disabled={isSending}
              >
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="py-12 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-electric-orange rounded-lg flex items-center justify-center">
                <Zap className="h-6 w-6 text-accent-foreground" />
              </div>
              <div>
                <h2 className="text-xl font-bold">Flex Electrical</h2>
                <p className="text-sm text-primary-foreground/80">
                  Engineering Systems
                </p>
              </div>
            </div>
            <p className="text-primary-foreground/80 mb-6 text-sm">
              Your trusted partner for comprehensive electrical solutions.
              Licensed, insured, and committed to powering your world safely and
              efficiently.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-electric-orange" />
                <span>+254 786750839</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-electric-orange" />
                <span>+254 715301046</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-electric-orange" />
                <span>flexengineering6@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-electric-orange" />
                <span>River Road Along Wamae Avenue</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <button className="text-primary-foreground/80 hover:text-electric-orange transition-colors text-sm text-left">
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button className="text-primary-foreground/80 hover:text-electric-orange transition-colors text-sm text-left">
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Business Hours & Emergency */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Business Hours</h3>
            <div className="space-y-2 text-sm text-primary-foreground/80 mb-6">
              <div>Mon-Fri: 7:00 AM - 6:00 PM</div>
              <div>Saturday: 8:00 AM - 4:00 PM</div>
              <div>Sunday: Emergency Only</div>
            </div>

            <div className="bg-electric-orange/20 rounded-lg p-4">
              <h4 className="font-semibold text-electric-orange mb-2">
                24/7 Emergency Service
              </h4>
              <p className="text-sm text-primary-foreground/80 mb-3">
                Electrical emergencies? We're here to help!
              </p>
              <a href="tel:0786750879">
                <Button
                  variant="outline"
                  className="border-accent-foreground/20 text-accent-foreground hover:bg-accent-foreground/10"
                >
                  Call Emergency Line: 0786 750 879
                </Button>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-primary-foreground/80">
              © {currentYear} Flex Electrical Engineering Systems. All rights
              reserved.
            </div>

            {/* Social Media */}
            <div className="flex space-x-4">
              <Button
                variant="ghost"
                size="sm"
                className="p-2 text-primary-foreground/80 hover:text-electric-orange hover:bg-primary-foreground/10"
              >
                <Facebook className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="p-2 text-primary-foreground/80 hover:text-electric-orange hover:bg-primary-foreground/10"
              >
                <Twitter className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="p-2 text-primary-foreground/80 hover:text-electric-orange hover:bg-primary-foreground/10"
              >
                <Instagram className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="p-2 text-primary-foreground/80 hover:text-electric-orange hover:bg-primary-foreground/10"
              >
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="p-2 text-primary-foreground/80 hover:text-electric-orange hover:bg-primary-foreground/10"
                onClick={() =>
                  window.open("https://wa.me/254786750839", "_blank")
                }
              >
                <MessageCircle className="h-4 w-4" />
              </Button>
            </div>

            <div className="flex space-x-4 text-sm">
              <button className="text-primary-foreground/80 hover:text-electric-orange transition-colors">
                Privacy Policy
              </button>
              <button className="text-primary-foreground/80 hover:text-electric-orange transition-colors">
                Terms of Service
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

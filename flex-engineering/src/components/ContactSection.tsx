import { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "./../components/ui/card";
import { Button } from "./../components/ui/button";
import { Input } from "./../components/ui/input";
import { Textarea } from "./../components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./../components/ui/select";
import { useToast } from "./../hooks/use-toast";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  Zap,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  MessageCircle,
} from "lucide-react";
import emailjs from "emailjs-com";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    details: ["+254 786750839", "+254 720864883"],
    action: "Call Now",
  },
  {
    icon: Mail,
    title: "Email",
    details: ["flexengineering6@gmail.com"],
    action: "Send Email",
  },
  {
    icon: MapPin,
    title: "Address",
    details: ["River Road Along Wamae Avenue", "Nairobi, Kenya"],
    action: "Get Directions",
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: [
      "Mon-Fri: 7:00 AM - 6:00 PM",
      "Sat: 8:00 AM - 4:00 PM",
      "Sun: Emergency Only",
    ],
    action: null,
  },
];

const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
      service: formData.service,
      message: formData.message,
    };

    try {
      await emailjs.send(
        "service_j7x58hl",
        "template_66fvfy8",
        templateParams,
        "-Ceo0TeMS9BuLUU67"
      );
    } catch (error) {
      console.error("EmailJS Error:", error);
    }

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message Sent!",
      description:
        "Thank you for contacting us. We'll get back to you within 24 hours.",
    });

    setFormData({ name: "", email: "", phone: "", service: "", message: "" });
    setIsSubmitting(false);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Contact Flex Electrical Today
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to power up your project? Get a free consultation and quote
            from our electrical experts. We're here to help with all your
            electrical needs.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <Card className="shadow-elegant">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Zap className="h-5 w-5 text-primary" />
                  <span>Request a Free Quote</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Full Name *
                      </label>
                      <Input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          handleInputChange("name", e.target.value)
                        }
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Email Address *
                      </label>
                      <Input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          handleInputChange("email", e.target.value)
                        }
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Phone Number
                      </label>
                      <Input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) =>
                          handleInputChange("phone", e.target.value)
                        }
                        placeholder="(555) 123-4567"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Service Needed *
                      </label>
                      <Select
                        value={formData.service}
                        onValueChange={(value) =>
                          handleInputChange("service", value)
                        }
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="electrical">
                            Electrical Installation
                          </SelectItem>
                          <SelectItem value="solar">
                            Solar Power Systems
                          </SelectItem>
                          <SelectItem value="security">
                            Security & CCTV
                          </SelectItem>
                          <SelectItem value="network">
                            Network Installation
                          </SelectItem>
                          <SelectItem value="maintenance">
                            Maintenance & Repair
                          </SelectItem>
                          <SelectItem value="emergency">
                            Emergency Service
                          </SelectItem>
                          <SelectItem value="consultation">
                            Free Consultation
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Project Description *
                    </label>
                    <Textarea
                      required
                      value={formData.message}
                      onChange={(e) =>
                        handleInputChange("message", e.target.value)
                      }
                      placeholder="Please describe your project or electrical needs..."
                      className="min-h-[120px]"
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="cta"
                    size="lg"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="shadow-elegant">
              <CardContent className="space-y-4 p-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <item.icon className="h-5 w-5 text-primary" />
                      <h4 className="font-semibold">{item.title}</h4>
                    </div>

                    {item.title === "Phone" &&
                      item.details?.map((number, i) => (
                        <a
                          key={i}
                          href={`tel:${number.replace(/\s+/g, "")}`}
                          className="text-blue-600 underline block"
                        >
                          {item.action} - {number}
                        </a>
                      ))}

                    {item.title === "Email" &&
                      item.details?.map((email, i) => (
                        <a
                          key={i}
                          href={`mailto:${email}`}
                          className="text-blue-600 underline block"
                        >
                          {item.action} - {email}
                        </a>
                      ))}

                    {item.title === "Address" &&
                      item.details?.map((line, i) => {
                        const fullAddress = item.details?.join(", ");
                        return i === 0 ? (
                          <a
                            key={i}
                            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                              fullAddress || ""
                            )}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 underline block"
                          >
                            {item.action} - {line}
                          </a>
                        ) : (
                          <p key={i} className="text-muted-foreground">
                            {line}
                          </p>
                        );
                      })}

                    {item.title === "Business Hours" &&
                      item.details?.map((time, i) => (
                        <p key={i} className="text-muted-foreground">
                          {time}
                        </p>
                      ))}
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="shadow-elegant">
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-4">
                  Follow Us
                </h3>
                <div className="flex space-x-4">
                  <Button variant="outline" size="sm" className="p-2">
                    <Facebook className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="sm" className="p-2">
                    <Twitter className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="sm" className="p-2">
                    <Instagram className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="sm" className="p-2">
                    <Linkedin className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="p-2"
                    onClick={() =>
                      window.open("https://wa.me/254786750839", "_blank")
                    }
                  >
                    <MessageCircle className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

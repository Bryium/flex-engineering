import { useState } from "react";
import { Card, CardContent } from "./../components/ui/card";
import { Button } from "./../components/ui/button";
import { Filter, ExternalLink } from "lucide-react";
import solarImage from "./../assets/solar-installation.jpg";
import securityImage from "./../assets/security-systems.jpg";
import networkImage from "./../assets/network-installation.jpg";

const PortfolioSection = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "Commercial Solar Installation",
      category: "solar",
      image: solarImage,
      description:
        "50kW commercial solar system with battery storage for local manufacturing facility",
      details: "Reduced energy costs by 70% with ROI in 4 years",
    },
    {
      id: 2,
      title: "Security System Upgrade",
      category: "security",
      image: securityImage,
      description:
        "Complete CCTV and access control system for 3-story office building",
      details: "32 cameras with facial recognition and mobile monitoring",
    },
    {
      id: 3,
      title: "Data Center Network Setup",
      category: "network",
      image: networkImage,
      description:
        "Structured cabling and network infrastructure for new data center",
      details: "Fiber optic backbone with redundant pathways",
    },
    {
      id: 4,
      title: "Residential Solar + Storage",
      category: "solar",
      image: solarImage,
      description: "Home solar system with Tesla Powerwall battery backup",
      details: "10kW system with energy independence capability",
    },
    {
      id: 5,
      title: "Industrial Electrical Upgrade",
      category: "electrical",
      image: networkImage,
      description: "Complete electrical panel upgrade for manufacturing plant",
      details: "400A service upgrade with improved safety systems",
    },
    {
      id: 6,
      title: "School Network Infrastructure",
      category: "network",
      image: networkImage,
      description: "Campus-wide network installation for K-12 school district",
      details: "Wi-Fi 6 deployment serving 2,000+ students",
    },
  ];

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "electrical", label: "Electrical" },
    { id: "solar", label: "Solar" },
    { id: "security", label: "Security" },
    { id: "network", label: "Network" },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Our Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Project Showcase
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our completed projects across different electrical
            engineering disciplines. Each project represents our commitment to
            quality and innovation.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeFilter === category.id ? "electric" : "outline"}
              onClick={() => setActiveFilter(category.id)}
              className="transition-all duration-300"
            >
              <Filter className="h-4 w-4 mr-2" />
              {category.label}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card
              key={project.id}
              className="overflow-hidden shadow-elegant hover:shadow-blue transition-all duration-300 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-white/20 text-white hover:bg-white/10"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    View Details
                  </Button>
                </div>
              </div>

              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      project.category === "solar"
                        ? "bg-yellow-100 text-yellow-800"
                        : project.category === "security"
                        ? "bg-red-100 text-red-800"
                        : project.category === "network"
                        ? "bg-blue-100 text-blue-800"
                        : "bg-green-100 text-green-800"
                    }`}
                  >
                    {project.category.charAt(0).toUpperCase() +
                      project.category.slice(1)}
                  </span>
                </div>

                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-3">
                  {project.description}
                </p>
                <p className="text-primary font-medium text-sm">
                  {project.details}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            Ready to start your project? Let's discuss how we can bring your
            electrical vision to life.
          </p>
          <Button
            variant="cta"
            size="lg"
            onClick={() => {
              const element = document.getElementById("contact");
              if (element) element.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Start Your Project
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;

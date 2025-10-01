import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import heroImage from "@/assets/hero-construction.jpg";

const Home = () => {
  const stats = [
    { value: "25+", label: "Years Experience" },
    { value: "500+", label: "Projects Completed" },
    { value: "50+", label: "Heavy Equipment" },
    { value: "100%", label: "Safety Record" },
  ];

  const features = [
    "ISO 9001 & 14001 Certified",
    "Experienced Engineering Team",
    "State-of-the-Art Equipment",
    "24/7 Project Support",
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/60" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-block bg-accent/20 border border-accent px-4 py-2 mb-6">
              <span className="text-accent font-bold text-sm">INDUSTRY LEADING CONSTRUCTION</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
              Building Tomorrow's
              <span className="block text-accent">Infrastructure</span>
            </h1>
            <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
              Heavy equipment rental and large-scale construction solutions for infrastructure projects across the UK and Europe.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-accent hover:bg-accent/90 text-primary font-bold text-lg px-8"
              >
                <Link to="/contact">
                  Get a Quote <ArrowRight className="ml-2" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary font-bold text-lg px-8"
              >
                <Link to="/projects">View Projects</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary border-y border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-accent mb-2">
                  {stat.value}
                </div>
                <div className="text-primary-foreground/80 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Why Choose Ironclad?</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Industry-leading expertise, equipment, and commitment to excellence
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 bg-card p-6 rounded border border-border hover:shadow-elevated transition-all duration-300"
              >
                <CheckCircle2 className="text-accent flex-shrink-0" size={24} />
                <span className="font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-primary-foreground mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
            Get in touch with our team for a free consultation and project quote
          </p>
          <Button
            asChild
            size="lg"
            className="bg-accent hover:bg-accent/90 text-primary font-bold text-lg px-8"
          >
            <Link to="/contact">
              Contact Us Today <ArrowRight className="ml-2" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;

import { Award, Users, Shield, TrendingUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const About = () => {
  const values = [
    {
      icon: Shield,
      title: "Safety First",
      description: "Zero-compromise approach to safety with rigorous protocols and continuous training programs.",
    },
    {
      icon: Award,
      title: "Quality Excellence",
      description: "ISO 9001 and 14001 certified operations ensuring the highest standards in every project.",
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "500+ skilled professionals including engineers, operators, and project managers.",
    },
    {
      icon: TrendingUp,
      title: "Innovation",
      description: "Investing in cutting-edge technology and sustainable construction practices.",
    },
  ];

  const certifications = [
    "ISO 9001:2015 Quality Management",
    "ISO 14001:2015 Environmental Management",
    "ISO 45001:2018 Health & Safety",
    "Constructionline Gold Member",
    "CHAS Premium Accreditation",
    "Building Confidence Registered",
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">About Ironclad Construction</h1>
          <p className="text-xl text-primary-foreground/80 max-w-3xl mx-auto">
            25 years of excellence in heavy construction and infrastructure development
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              To deliver world-class construction and heavy equipment solutions that build the infrastructure 
              of tomorrow. We combine decades of expertise, state-of-the-art machinery, and an unwavering 
              commitment to safety and quality to exceed client expectations on every project.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              From major highway systems to commercial developments, we tackle the most challenging projects 
              with precision, reliability, and a focus on sustainable practices that benefit communities for 
              generations to come.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-muted-foreground text-lg">
              The principles that guide every decision and action
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="border-border bg-card text-center hover:shadow-elevated transition-all duration-300">
                <CardHeader>
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-accent" />
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center">Certifications & Accreditations</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 bg-card p-4 rounded border border-border"
                >
                  <Award className="text-accent flex-shrink-0" size={24} />
                  <span className="font-medium">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Stats */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary-foreground mb-4">Our Team</h2>
            <p className="text-primary-foreground/80 text-lg">
              Industry experts dedicated to excellence
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { value: "500+", label: "Team Members" },
              { value: "150+", label: "Engineers" },
              { value: "200+", label: "Certified Operators" },
              { value: "25", label: "Average Years Experience" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-accent mb-2">{stat.value}</div>
                <div className="text-primary-foreground/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

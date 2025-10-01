import ServiceCard from "@/components/ServiceCard";
import { Construction, HardHat, Truck, ShieldCheck, Building2, Wrench } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Construction,
      title: "Heavy Equipment Rental",
      description: "Comprehensive fleet of excavators, cranes, bulldozers, and specialized machinery available for short or long-term rental with operator support.",
    },
    {
      icon: Building2,
      title: "Infrastructure Projects",
      description: "Large-scale infrastructure development including roads, bridges, tunnels, and utilities. From planning to completion with full project management.",
    },
    {
      icon: HardHat,
      title: "Commercial Construction",
      description: "Complete commercial building services for industrial facilities, warehouses, and corporate structures with turnkey solutions.",
    },
    {
      icon: ShieldCheck,
      title: "Safety Compliance",
      description: "Full HSE management, risk assessment, and safety training programs ensuring all projects meet or exceed regulatory standards.",
    },
    {
      icon: Truck,
      title: "Site Preparation & Earthworks",
      description: "Professional land clearing, excavation, grading, and foundation work utilizing advanced surveying and earthmoving equipment.",
    },
    {
      icon: Wrench,
      title: "Equipment Maintenance",
      description: "On-site maintenance and repair services for all heavy equipment with certified technicians and genuine parts supply.",
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-xl text-primary-foreground/80 max-w-3xl mx-auto">
            Comprehensive construction and heavy equipment solutions for projects of any scale
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Process</h2>
            <p className="text-muted-foreground text-lg">
              Streamlined project delivery from concept to completion
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { step: "01", title: "Consultation", description: "Initial meeting to understand project scope and requirements" },
              { step: "02", title: "Planning", description: "Detailed project planning, timeline, and resource allocation" },
              { step: "03", title: "Execution", description: "Professional construction with continuous quality monitoring" },
              { step: "04", title: "Delivery", description: "Final inspection, handover, and ongoing support" },
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-bold text-accent mb-4">{phase.step}</div>
                <h3 className="text-xl font-bold mb-2">{phase.title}</h3>
                <p className="text-muted-foreground">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;

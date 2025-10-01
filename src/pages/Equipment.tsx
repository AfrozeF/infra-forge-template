import EquipmentCard from "@/components/EquipmentCard";

const Equipment = () => {
  const equipment = [
    {
      name: "Liebherr LTM 1500 Crane",
      category: "Mobile Crane",
      specs: [
        "500-tonne lifting capacity",
        "84m telescopic boom",
        "All-terrain 9-axle chassis",
        "Remote control operation",
      ],
      availability: "Available" as const,
    },
    {
      name: "Caterpillar D11T Bulldozer",
      category: "Earthmoving",
      specs: [
        "850 HP turbocharged engine",
        "22.5 cubic yard blade",
        "GPS machine control",
        "Ripper attachment included",
      ],
      availability: "Rented" as const,
    },
    {
      name: "Komatsu PC8000 Excavator",
      category: "Hydraulic Excavator",
      specs: [
        "800-tonne operating weight",
        "42 cubic meter bucket",
        "4,020 HP engine",
        "Advanced hydraulics system",
      ],
      availability: "Available" as const,
    },
    {
      name: "Wirtgen W 250i Cold Milling Machine",
      category: "Road Construction",
      specs: [
        "2500mm milling width",
        "330mm milling depth",
        "Auto levelling system",
        "Emission Stage V compliant",
      ],
      availability: "Available" as const,
    },
    {
      name: "Terex Demag CC 8800 Crawler Crane",
      category: "Crawler Crane",
      specs: [
        "1,600-tonne lift capacity",
        "174m main boom",
        "Twin-engine power",
        "Modular boom system",
      ],
      availability: "Maintenance" as const,
    },
    {
      name: "Volvo A60H Articulated Hauler",
      category: "Dump Truck",
      specs: [
        "60-tonne payload capacity",
        "536 HP diesel engine",
        "All-wheel drive system",
        "Load-sensing hydraulics",
      ],
      availability: "Available" as const,
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Equipment Fleet</h1>
          <p className="text-xl text-primary-foreground/80 max-w-3xl mx-auto">
            Industry-leading heavy machinery available for rental with full operator and maintenance support
          </p>
        </div>
      </section>

      {/* Equipment Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {equipment.map((item, index) => (
              <EquipmentCard
                key={index}
                name={item.name}
                category={item.category}
                specs={item.specs}
                availability={item.availability}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Rental Info */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center">Rental Information</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-card p-6 rounded border border-border">
                <h3 className="text-xl font-bold mb-4">What's Included</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    Fully serviced and maintained equipment
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    Certified operators available
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    Transport and mobilization
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    24/7 technical support
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    Comprehensive insurance coverage
                  </li>
                </ul>
              </div>
              <div className="bg-card p-6 rounded border border-border">
                <h3 className="text-xl font-bold mb-4">Rental Terms</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    Daily, weekly, or monthly rates
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    Long-term discounts available
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    Flexible contract terms
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    UK and EU delivery options
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    Custom rental packages
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Equipment;

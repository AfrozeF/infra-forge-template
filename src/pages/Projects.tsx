import ProjectCard from "@/components/ProjectCard";
import bridgeImage from "@/assets/project-bridge.jpg";
import buildingImage from "@/assets/project-building.jpg";
import roadImage from "@/assets/project-road.jpg";

const Projects = () => {
  const projects = [
    {
      image: bridgeImage,
      title: "Thames Valley Bridge",
      description: "350m steel and concrete bridge construction with advanced foundation engineering over major waterway.",
      location: "London, UK",
    },
    {
      image: buildingImage,
      title: "Manchester Distribution Center",
      description: "120,000 sq ft warehouse facility with automated systems and sustainable design features.",
      location: "Manchester, UK",
    },
    {
      image: roadImage,
      title: "M4 Highway Extension",
      description: "15km highway expansion including bridges, interchanges, and modern traffic management systems.",
      location: "Wales, UK",
    },
    {
      image: bridgeImage,
      title: "Edinburgh Commercial Complex",
      description: "Mixed-use development featuring offices, retail space, and underground parking infrastructure.",
      location: "Edinburgh, Scotland",
    },
    {
      image: buildingImage,
      title: "Bristol Water Treatment Facility",
      description: "State-of-the-art water processing plant serving 500,000 residents with sustainable technologies.",
      location: "Bristol, UK",
    },
    {
      image: roadImage,
      title: "Birmingham Metro Extension",
      description: "Urban rail infrastructure including elevated tracks, stations, and integration with existing transit.",
      location: "Birmingham, UK",
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Our Projects</h1>
          <p className="text-xl text-primary-foreground/80 max-w-3xl mx-auto">
            Delivering excellence across infrastructure, commercial, and industrial construction
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                image={project.image}
                title={project.title}
                description={project.description}
                location={project.location}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary-foreground mb-4">
              Project Performance
            </h2>
          </div>
          <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { value: "£2.5B+", label: "Total Project Value" },
              { value: "98%", label: "On-Time Delivery" },
              { value: "500+", label: "Completed Projects" },
              { value: "Zero", label: "Major Incidents" },
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

export default Projects;

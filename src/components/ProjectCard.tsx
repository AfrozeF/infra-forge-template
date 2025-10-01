import { Card } from "@/components/ui/card";
import { MapPin } from "lucide-react";

interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  location: string;
}

const ProjectCard = ({ image, title, description, location }: ProjectCardProps) => {
  return (
    <Card className="group overflow-hidden border-border bg-card hover:shadow-elevated transition-all duration-300">
      <div className="relative h-64 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>
        <div className="flex items-center text-sm text-accent">
          <MapPin className="w-4 h-4 mr-1" />
          <span className="font-medium">{location}</span>
        </div>
      </div>
    </Card>
  );
};

export default ProjectCard;

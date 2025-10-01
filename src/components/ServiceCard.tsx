import { LucideIcon } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const ServiceCard = ({ icon: Icon, title, description }: ServiceCardProps) => {
  return (
    <Card className="group hover:shadow-elevated transition-all duration-300 border-border bg-card h-full">
      <CardHeader>
        <div className="w-16 h-16 bg-accent/10 rounded flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
          <Icon className="w-8 h-8 text-accent" />
        </div>
        <CardTitle className="text-xl font-bold">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base leading-relaxed">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;

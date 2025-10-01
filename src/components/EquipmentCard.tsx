import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface EquipmentCardProps {
  name: string;
  category: string;
  specs: string[];
  availability: "Available" | "Rented" | "Maintenance";
}

const EquipmentCard = ({ name, category, specs, availability }: EquipmentCardProps) => {
  const statusColor = {
    Available: "bg-green-500",
    Rented: "bg-accent",
    Maintenance: "bg-secondary",
  };

  return (
    <Card className="border-border bg-card hover:shadow-elevated transition-all duration-300">
      <CardHeader>
        <div className="flex items-start justify-between mb-2">
          <Badge variant="outline" className="border-accent text-accent">
            {category}
          </Badge>
          <Badge className={statusColor[availability]}>
            {availability}
          </Badge>
        </div>
        <CardTitle className="text-xl font-bold">{name}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="mb-4">
          <ul className="space-y-2">
            {specs.map((spec, index) => (
              <li key={index} className="flex items-start">
                <span className="text-accent mr-2">•</span>
                <span>{spec}</span>
              </li>
            ))}
          </ul>
        </CardDescription>
        <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold">
          Request Quote
        </Button>
      </CardContent>
    </Card>
  );
};

export default EquipmentCard;

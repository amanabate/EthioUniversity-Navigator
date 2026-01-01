import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Calendar, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface UniversityCardProps {
  id: string;
  name: string;
  location: string;
  type: string;
  yearEstablished: number;
  image?: string;
  programs?: number;
}

const UniversityCard = ({
  id,
  name,
  location,
  type,
  yearEstablished,
  image,
  programs = 0,
  // Default to 0 if not provided
  
}: UniversityCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-[var(--shadow-hover)] transition-all duration-300 group">
      <div className="relative h-48 overflow-hidden">
        {image ? (
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-primary/20 via-secondary/20 to-primary/10 flex items-center justify-center">
            <div className="text-4xl font-bold text-primary/30">{name.charAt(0)}</div>
          </div>
        )}
        <div className="absolute top-4 right-4">
          <span className="px-4 py-1.5 bg-gradient-to-r from-secondary to-primary text-primary-foreground text-xs font-bold rounded-full">
            {type}
          </span>
        </div>
      </div>
      
      <div className="p-6 space-y-4">
        <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
          {name}
        </h3>
        
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-muted-foreground text-sm">
            <MapPin className="h-4 w-4 text-primary" />
            <span>{location}</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground text-sm">
            <Calendar className="h-4 w-4 text-primary" />
            <span>Established {yearEstablished}</span>
          </div>
        </div>

        {programs > 0 && (
          <p className="text-sm text-muted-foreground">
            <span className="font-semibold text-primary">{programs}+</span> Programs Available
          </p>
        )}

        <Link to={`/university/${id}`}>
          <Button variant="gradient" className="w-full group/btn">
            View Details
            <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </div>
    </Card>
  );
};

export default UniversityCard;

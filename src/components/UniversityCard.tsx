import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Calendar, BookOpen, ArrowRight } from "lucide-react";
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
}: UniversityCardProps) => {
  return (
    <Card className="group overflow-hidden border border-border/60 bg-card card-hover rounded-2xl">
      {/* Image */}
      <div className="relative h-52 overflow-hidden bg-gradient-subtle">
        {image ? (
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-subtle">
            <span className="text-5xl font-black text-primary/20 select-none">
              {name.charAt(0)}
            </span>
          </div>
        )}
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        {/* Type badge */}
        <div className="absolute top-3 right-3">
          <span className="badge-pill bg-gradient-primary text-white shadow-sm">
            {type}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <h3 className="text-lg font-bold text-foreground leading-snug group-hover:text-primary transition-colors duration-200 line-clamp-2">
          {name}
        </h3>

        <div className="space-y-2">
          <div className="flex items-center gap-2 text-muted-foreground text-sm">
            <MapPin className="h-3.5 w-3.5 text-primary shrink-0" />
            <span>{location}</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground text-sm">
            <Calendar className="h-3.5 w-3.5 text-primary shrink-0" />
            <span>Est. {yearEstablished}</span>
          </div>
          {programs > 0 && (
            <div className="flex items-center gap-2 text-muted-foreground text-sm">
              <BookOpen className="h-3.5 w-3.5 text-primary shrink-0" />
              <span>
                <span className="font-semibold text-foreground">{programs}+</span> Programs
              </span>
            </div>
          )}
        </div>

        <div className="pt-1">
          <Link to={`/university/${id}`} tabIndex={-1}>
            <Button
              variant="gradient"
              className="w-full group/btn font-semibold text-sm h-10 rounded-xl"
            >
              View Details
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover/btn:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </Card>
  );
};

export default UniversityCard;

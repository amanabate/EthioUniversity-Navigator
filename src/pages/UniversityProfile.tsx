import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  MapPin,
  Calendar,
  Globe,
  Phone,
  Mail,
  Building2,
  GraduationCap,
  Users,
  ArrowLeft,
} from "lucide-react";
import { getUniversityById } from "@/data/universities";
import universityPlaceholder from "@/assets/university-placeholder.jpg";

const UniversityProfile = () => {
  const { id } = useParams<{ id: string }>();
  const university = getUniversityById(id || "");

  if (!university) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="pt-24 container mx-auto px-4 text-center">
          <h1 className="text-2xl font-bold mb-4">University Not Found</h1>
          <Link to="/universities">
            <Button variant="gradient">Back to Universities</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Banner */}
      <div className="relative h-80 bg-gradient-to-r from-secondary to-primary overflow-hidden">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url(${universityPlaceholder})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="container mx-auto px-4 h-full flex items-end pb-8 relative z-10">
          <div>
            <Link to="/universities">
              <Button variant="outline" className="mb-4 bg-background/90 hover:bg-background border-0">
                <ArrowLeft className="h-4 w-4" />
                Back to Universities
              </Button>
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-2">
              {university.name}
            </h1>
            <div className="flex flex-wrap gap-3 items-center text-primary-foreground/90">
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                <span>{university.location}, {university.region}</span>
              </div>
              <Badge className="bg-background/90 text-foreground hover:bg-background">
                {university.type}
              </Badge>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-7xl mx-auto space-y-12">
          {/* Overview Section */}
          <Card className="p-8 shadow-[var(--shadow-card)]">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Building2 className="h-6 w-6 text-primary" />
              Overview
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {university.description}
                </p>
                <div className="flex items-center gap-2 text-foreground">
                  <Calendar className="h-5 w-5 text-primary" />
                  <span className="font-semibold">Established:</span>
                  <span>{university.yearEstablished}</span>
                </div>
                <div className="flex items-center gap-2 text-foreground">
                  <Globe className="h-5 w-5 text-primary" />
                  <span className="font-semibold">Website:</span>
                  <a
                    href={university.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    {university.website}
                  </a>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2 flex items-center gap-2">
                    <Users className="h-5 w-5 text-primary" />
                    Leadership
                  </h3>
                  <p className="text-muted-foreground">
                    President: <span className="font-semibold text-foreground">{university.president.name}</span>
                  </p>
                </div>
              </div>
            </div>
          </Card>

          {/* Academic Programs */}
          <Card className="p-8 shadow-[var(--shadow-card)]">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <GraduationCap className="h-6 w-6 text-primary" />
              Academic Programs
            </h2>
            <div className="space-y-8">
              {university.faculties.map((faculty, index) => (
                <div key={index}>
                  <h3 className="text-xl font-bold text-primary mb-4">{faculty.name}</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3 text-foreground">Departments</h4>
                      <div className="flex flex-wrap gap-2">
                        {faculty.departments.map((dept, idx) => (
                          <Badge key={idx} variant="outline" className="bg-muted">
                            {dept}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="space-y-3">
                      {faculty.programs.bachelors.length > 0 && (
                        <div>
                          <h4 className="font-semibold text-sm text-muted-foreground mb-1">
                            Bachelor's Programs ({faculty.programs.bachelors.length})
                          </h4>
                        </div>
                      )}
                      {faculty.programs.masters.length > 0 && (
                        <div>
                          <h4 className="font-semibold text-sm text-muted-foreground mb-1">
                            Master's Programs ({faculty.programs.masters.length})
                          </h4>
                        </div>
                      )}
                      {faculty.programs.phd.length > 0 && (
                        <div>
                          <h4 className="font-semibold text-sm text-muted-foreground mb-1">
                            PhD Programs ({faculty.programs.phd.length})
                          </h4>
                        </div>
                      )}
                    </div>
                  </div>
                  {index < university.faculties.length - 1 && <Separator className="mt-6" />}
                </div>
              ))}
            </div>
          </Card>

          {/* Facilities */}
          <Card className="p-8 shadow-[var(--shadow-card)]">
            <h2 className="text-2xl font-bold mb-6">Campus & Facilities</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {university.facilities.map((facility, index) => (
                <div
                  key={index}
                  className="p-4 rounded-lg bg-gradient-to-br from-primary/5 to-secondary/5 border border-border"
                >
                  <p className="font-medium text-foreground">{facility}</p>
                </div>
              ))}
            </div>
          </Card>

          {/* Contact Information */}
          <Card className="p-8 shadow-[var(--shadow-card)] bg-gradient-to-br from-primary/5 to-secondary/5">
            <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="font-semibold text-foreground">Phone</p>
                  <p className="text-muted-foreground">{university.contact.phone}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="font-semibold text-foreground">Email</p>
                  <p className="text-muted-foreground">{university.contact.email}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="font-semibold text-foreground">Address</p>
                  <p className="text-muted-foreground">{university.contact.address}</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>

      <footer className="py-8 border-t border-border">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>&copy; 2025 EthioUniversity Guide. Empowering students with information.</p>
        </div>
      </footer>
    </div>
  );
};

export default UniversityProfile;

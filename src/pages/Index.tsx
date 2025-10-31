import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import SearchBar from "@/components/SearchBar";
import UniversityCard from "@/components/UniversityCard";
import StatCard from "@/components/StatCard";
import { Button } from "@/components/ui/button";
import { GraduationCap, Building2, Users, BookOpen, ArrowRight } from "lucide-react";
import { universities, getTotalPrograms } from "@/data/universities";
import heroImage from "@/assets/hero-university.jpg";

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [typeFilter, setTypeFilter] = useState("all");
  const [locationFilter, setLocationFilter] = useState("all");

  const filteredUniversities = universities.filter((uni) => {
    const matchesSearch = uni.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = typeFilter === "all" || uni.type === typeFilter;
    const matchesLocation = locationFilter === "all" || uni.location === locationFilter;
    return matchesSearch && matchesType && matchesLocation;
  });

  const totalPrograms = universities.reduce((total, uni) => total + getTotalPrograms(uni), 0);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
        <div 
          className="absolute inset-0 bg-gradient-to-b from-primary/10 via-background to-background"
          style={{
            backgroundImage: `linear-gradient(to bottom, hsl(var(--primary) / 0.05), hsl(var(--background))), url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.15,
          }}
        />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-block">
              <span className="px-4 py-2 bg-gradient-to-r from-secondary to-primary text-primary-foreground text-sm font-bold rounded-full">
                Discover Your Future
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Find the Perfect{" "}
              <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
                University
              </span>{" "}
              in Ethiopia
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore comprehensive information about Ethiopian universities. Compare programs, 
              facilities, and make informed decisions about your academic journey.
            </p>

            <div className="pt-4">
              <SearchBar
                searchTerm={searchTerm}
                onSearchChange={setSearchTerm}
                typeFilter={typeFilter}
                onTypeChange={setTypeFilter}
                locationFilter={locationFilter}
                onLocationChange={setLocationFilter}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-12 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <StatCard value={universities.length.toString()} label="Universities" icon={<Building2 className="h-8 w-8" />} />
            <StatCard value={totalPrograms.toString() + "+"} label="Programs" icon={<BookOpen className="h-8 w-8" />} />
            <StatCard value="50K+" label="Students" icon={<Users className="h-8 w-8" />} />
            <StatCard value="100%" label="Free Access" icon={<GraduationCap className="h-8 w-8" />} />
          </div>
        </div>
      </section>

      {/* Universities Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Featured Universities
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Browse through Ethiopia's leading institutions of higher education
            </p>
          </div>

          {filteredUniversities.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {filteredUniversities.map((uni) => (
                <UniversityCard
                  key={uni.id}
                  id={uni.id}
                  name={uni.name}
                  location={uni.location}
                  type={uni.type}
                  yearEstablished={uni.yearEstablished}
                  programs={getTotalPrograms(uni)}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">
                No universities found matching your criteria.
              </p>
            </div>
          )}

          <div className="text-center mt-12">
            <Link to="/universities">
              <Button variant="gradient" size="lg">
                View All Universities
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-secondary to-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              Compare Universities Side by Side
            </h2>
            <p className="text-lg opacity-90">
              Make informed decisions by comparing programs, facilities, and more
            </p>
            <Link to="/compare">
              <Button variant="outline" size="lg" className="bg-background text-foreground hover:bg-background/90 border-0">
                Start Comparing
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>&copy; 2025 EthioUniversity Guide. Empowering students with information.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;

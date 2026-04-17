import { useState } from "react";
import Navbar from "@/components/Navbar";
import SearchBar from "@/components/SearchBar";
import UniversityCard from "@/components/UniversityCard";
import { universities, getTotalPrograms } from "@/data/universities";

// Import university images
import aauImage from "@/assets/image_University/AAU/AAU.jpg";
import bduImage from "@/assets/image_University/BDU/BahirDargate.png";
import hruImage from "@/assets/image_University/HRU/HaramayaGate.jpg";
import huImage from "@/assets/image_University/HU/Hawassa_University_main_gate.jpg";
import jmuImage from "@/assets/image_University/JMU/jimmaa.webp";

// Create mapping for images
const universityImages: Record<string, string> = {
  aau: aauImage,
  bu: bduImage,
  haru: hruImage,
  hu: huImage,
  ju: jmuImage,
};

const Universities = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [typeFilter, setTypeFilter] = useState("all");
  const [locationFilter, setLocationFilter] = useState("all");

  const filteredUniversities = universities.filter((uni) => {
    const matchesSearch = uni.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = typeFilter === "all" || uni.type === typeFilter;
    const matchesLocation = locationFilter === "all" || uni.location === locationFilter;
    return matchesSearch && matchesType && matchesLocation;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Page header */}
      <div className="pt-24 pb-12 bg-gradient-to-b from-muted/40 to-background border-b border-border/60">
        <div className="container mx-auto px-4 text-center space-y-3">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">Browse</p>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            All Universities in Ethiopia
          </h1>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Explore detailed information about {universities.length} universities across Ethiopia
          </p>
        </div>
      </div>

      <div className="py-12">
        <div className="container mx-auto px-4">
          <div className="mb-10">
            <SearchBar
              searchTerm={searchTerm}
              onSearchChange={setSearchTerm}
              typeFilter={typeFilter}
              onTypeChange={setTypeFilter}
              locationFilter={locationFilter}
              onLocationChange={setLocationFilter}
            />
          </div>

          <div className="mb-8 text-center">
            <p className="text-sm text-muted-foreground">
              Showing{" "}
              <span className="font-semibold text-primary">{filteredUniversities.length}</span>{" "}
              of <span className="font-semibold">{universities.length}</span> universities
            </p>
          </div>

          {filteredUniversities.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
              {filteredUniversities.map((uni, i) => (
                <div key={uni.id} className="animate-fade-in" style={{ animationDelay: `${i * 60}ms` }}>
                  <UniversityCard
                    id={uni.id}
                    name={uni.name}
                    location={uni.location}
                    type={uni.type}
                    yearEstablished={uni.yearEstablished}
                    image={universityImages[uni.id]}
                    programs={getTotalPrograms(uni)}
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">
                No universities found matching your criteria. Try adjusting your filters.
              </p>
            </div>
          )}
        </div>
      </div>

      <footer className="py-10 border-t border-border/60 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-muted-foreground">
            &copy; 2025 EthioUniversity Guide. Empowering students with information.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Universities;

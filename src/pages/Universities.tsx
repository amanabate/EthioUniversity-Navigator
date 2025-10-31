import { useState } from "react";
import Navbar from "@/components/Navbar";
import SearchBar from "@/components/SearchBar";
import UniversityCard from "@/components/UniversityCard";
import { universities, getTotalPrograms } from "@/data/universities";

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
      
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              All Universities in Ethiopia
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Explore detailed information about {universities.length} universities across Ethiopia
            </p>
          </div>

          <div className="mb-12">
            <SearchBar
              searchTerm={searchTerm}
              onSearchChange={setSearchTerm}
              typeFilter={typeFilter}
              onTypeChange={setTypeFilter}
              locationFilter={locationFilter}
              onLocationChange={setLocationFilter}
            />
          </div>

          <div className="mb-6 text-center">
            <p className="text-muted-foreground">
              Showing <span className="font-semibold text-primary">{filteredUniversities.length}</span> of{" "}
              <span className="font-semibold">{universities.length}</span> universities
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
                No universities found matching your criteria. Try adjusting your filters.
              </p>
            </div>
          )}
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

export default Universities;

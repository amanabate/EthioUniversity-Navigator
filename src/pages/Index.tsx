import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import SearchBar from "@/components/SearchBar";
import UniversityCard from "@/components/UniversityCard";
import StatCard from "@/components/StatCard";
import { Button } from "@/components/ui/button";
import { GraduationCap, Building2, Users, BookOpen, ArrowRight, Sparkles } from "lucide-react";
import {
  universities,
  getTotalPrograms,
  getTotalUniversities,
  getTotalProgramsCount,
  getEstimatedTotalStudents,
  getFreeAccessPercentage,
  getTotalProgramsNumeric,
  getEstimatedTotalStudentsNumeric,
  getFreeAccessNumeric,
} from "@/data/universities";
import heroImage from "@/assets/hero-university.jpg";

import aauImage from "@/assets/image_University/AAU/AAU.jpg";
import bduImage from "@/assets/image_University/BDU/BahirDargate.png";
import hruImage from "@/assets/image_University/HRU/HaramayaGate.jpg";
import huImage from "@/assets/image_University/HU/Hawassa_University_main_gate.jpg";
import jmuImage from "@/assets/image_University/JMU/jimmaa.webp";

const universityImages: Record<string, string> = {
  aau: aauImage,
  bu: bduImage,
  haru: hruImage,
  hu: huImage,
  ju: jmuImage,
};

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

  const totalUniversities = getTotalUniversities();
  const totalPrograms = getTotalProgramsCount();
  const estimatedStudents = getEstimatedTotalStudents();
  const freeAccess = getFreeAccessPercentage();
  const totalProgramsNumeric = getTotalProgramsNumeric();
  const estimatedStudentsNumeric = getEstimatedTotalStudentsNumeric();
  const freeAccessNumeric = getFreeAccessNumeric();

  const formatStudents = (num: number): string => {
    if (num >= 1_000_000) return `${(num / 1_000_000).toFixed(1)}M+`;
    if (num >= 1_000) return `${Math.round(num / 1_000)}K+`;
    return `${num}+`;
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* ── Hero ── */}
      <section className="relative min-h-[92vh] flex items-center pt-16 overflow-hidden">
        {/* Background image with overlay */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt=""
            aria-hidden
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-secondary/90 via-primary/80 to-primary/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>

        <div className="container mx-auto px-4 relative z-10 py-24">
          <div className="max-w-3xl mx-auto text-center space-y-8 animate-fade-in">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 backdrop-blur-sm border border-white/25 text-white text-sm font-semibold">
              <Sparkles className="h-4 w-4" />
              Discover Your Future
            </div>

            <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-[1.1] tracking-tight">
              Find the Perfect{" "}
              <span className="relative inline-block">
                University
                <span className="absolute -bottom-1 left-0 w-full h-1 bg-white/40 rounded-full" />
              </span>{" "}
              in Ethiopia
            </h1>

            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
              Explore comprehensive information about Ethiopian universities. Compare programs,
              facilities, and make informed decisions about your academic journey.
            </p>

            <div className="pt-2 animate-fade-in delay-200">
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

        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* ── Stats ── */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
            <StatCard
              value={totalUniversities.toString()}
              label="Universities"
              icon={<Building2 className="h-7 w-7" />}
              animate
              targetNumber={totalUniversities}
            />
            <StatCard
              value={`${totalPrograms}+`}
              label="Programs"
              icon={<BookOpen className="h-7 w-7" />}
              animate
              targetNumber={totalProgramsNumeric}
              valueSuffix="+"
            />
            <StatCard
              value={estimatedStudents}
              label="Students"
              icon={<Users className="h-7 w-7" />}
              animate
              targetNumber={estimatedStudentsNumeric}
              formatValue={formatStudents}
            />
            <StatCard
              value={freeAccess}
              label="Free Access"
              icon={<GraduationCap className="h-7 w-7" />}
              animate
              targetNumber={freeAccessNumeric}
              valueSuffix="%"
            />
          </div>
        </div>
      </section>

      {/* ── Featured Universities ── */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14 space-y-3 animate-fade-in">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              Explore
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
              Featured Universities
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Browse Ethiopia's leading institutions of higher education
            </p>
          </div>

          {filteredUniversities.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
              {filteredUniversities.map((uni, i) => (
                <div
                  key={uni.id}
                  className="animate-fade-in"
                  style={{ animationDelay: `${i * 80}ms` }}
                >
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
                No universities found matching your criteria.
              </p>
            </div>
          )}

          <div className="text-center mt-14">
            <Link to="/universities">
              <Button variant="gradient" size="lg" className="h-12 px-8 rounded-xl font-semibold shadow-card hover:shadow-hover">
                View All Universities
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-primary" />
        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 20%, white 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
              Compare Universities Side by Side
            </h2>
            <p className="text-lg text-white/80">
              Make informed decisions by comparing programs, facilities, and more
            </p>
            <Link to="/compare">
              <Button
                size="lg"
                className="h-12 px-8 rounded-xl font-semibold bg-white text-primary hover:bg-white/90 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
              >
                Start Comparing
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
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

export default Index;

import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { GraduationCap, Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <div className="bg-gradient-to-r from-secondary to-primary p-2 rounded-xl">
              <GraduationCap className="h-6 w-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
              EthioUniversity Guide
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-foreground hover:text-primary transition-colors font-medium">
              Home
            </Link>
            <Link to="/universities" className="text-foreground hover:text-primary transition-colors font-medium">
              Universities
            </Link>
            <Link to="/compare" className="text-foreground hover:text-primary transition-colors font-medium">
              Compare
            </Link>
            <Link to="/about" className="text-foreground hover:text-primary transition-colors font-medium">
              About
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-accent rounded-lg transition-colors"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-3 border-t border-border">
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className="block px-4 py-2 hover:bg-accent rounded-lg transition-colors font-medium"
            >
              Home
            </Link>
            <Link
              to="/universities"
              onClick={() => setIsOpen(false)}
              className="block px-4 py-2 hover:bg-accent rounded-lg transition-colors font-medium"
            >
              Universities
            </Link>
            <Link
              to="/compare"
              onClick={() => setIsOpen(false)}
              className="block px-4 py-2 hover:bg-accent rounded-lg transition-colors font-medium"
            >
              Compare
            </Link>
            <Link
              to="/about"
              onClick={() => setIsOpen(false)}
              className="block px-4 py-2 hover:bg-accent rounded-lg transition-colors font-medium"
            >
              About
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

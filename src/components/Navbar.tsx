import { Link, useLocation } from "react-router-dom";
import { GraduationCap, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/universities", label: "Universities" },
  { to: "/compare", label: "Compare" },
  { to: "/about", label: "About" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-xl border-b border-border/60 shadow-xs"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2.5 group"
            aria-label="EthioUniversity Guide home"
          >
            <div className="bg-gradient-primary p-2 rounded-xl shadow-sm group-hover:shadow-md transition-shadow duration-300">
              <GraduationCap className="h-5 w-5 text-white" />
            </div>
            <span className="text-lg font-bold gradient-text hidden sm:block">
              EthioUniversity Guide
            </span>
            <span className="text-lg font-bold gradient-text sm:hidden">
              EUG
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map(({ to, label }) => {
              const isActive =
                to === "/" ? location.pathname === "/" : location.pathname.startsWith(to);
              return (
                <Link
                  key={to}
                  to={to}
                  className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? "text-primary bg-primary/8"
                      : "text-foreground/70 hover:text-foreground hover:bg-muted"
                  }`}
                >
                  {label}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-gradient-primary rounded-full" />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="py-3 space-y-1 border-t border-border/60">
            {navLinks.map(({ to, label }) => {
              const isActive =
                to === "/" ? location.pathname === "/" : location.pathname.startsWith(to);
              return (
                <Link
                  key={to}
                  to={to}
                  className={`flex items-center px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? "text-primary bg-primary/8 font-semibold"
                      : "text-foreground/70 hover:text-foreground hover:bg-muted"
                  }`}
                >
                  {label}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

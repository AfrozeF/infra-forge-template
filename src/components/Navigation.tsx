import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { to: "/", label: "Home" },
    { to: "/services", label: "Services" },
    { to: "/projects", label: "Projects" },
    { to: "/equipment", label: "Equipment" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 w-full z-50 bg-primary border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-12 h-12 bg-accent flex items-center justify-center">
              <span className="text-primary font-bold text-xl">IC</span>
            </div>
            <div className="hidden md:block">
              <div className="text-primary-foreground font-bold text-xl leading-tight">
                IRONCLAD
              </div>
              <div className="text-secondary text-xs tracking-wider">
                CONSTRUCTION
              </div>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-4 py-2 text-sm font-medium transition-colors ${
                  isActive(link.to)
                    ? "text-accent"
                    : "text-primary-foreground hover:text-accent"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Button
              asChild
              className="ml-4 bg-accent hover:bg-accent/90 text-primary font-bold"
            >
              <Link to="/contact">Get Quote</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-primary-foreground p-2"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-2 border-t border-border">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-2 text-sm font-medium transition-colors ${
                  isActive(link.to)
                    ? "text-accent bg-muted/10"
                    : "text-primary-foreground hover:text-accent hover:bg-muted/10"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="px-4 pt-2">
              <Button
                asChild
                className="w-full bg-accent hover:bg-accent/90 text-primary font-bold"
              >
                <Link to="/contact" onClick={() => setIsOpen(false)}>
                  Get Quote
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;

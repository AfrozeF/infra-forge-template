import { Link } from "react-router-dom";
import { Facebook, Twitter, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-accent flex items-center justify-center">
                <span className="text-primary font-bold">IC</span>
              </div>
              <div>
                <div className="font-bold text-lg">IRONCLAD</div>
                <div className="text-secondary text-xs">CONSTRUCTION</div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Building tomorrow's infrastructure with strength, reliability, and excellence.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-muted-foreground hover:text-accent transition-colors text-sm">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-muted-foreground hover:text-accent transition-colors text-sm">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/equipment" className="text-muted-foreground hover:text-accent transition-colors text-sm">
                  Equipment
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-accent transition-colors text-sm">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <li className="text-muted-foreground text-sm">Heavy Equipment Rental</li>
              <li className="text-muted-foreground text-sm">Infrastructure Projects</li>
              <li className="text-muted-foreground text-sm">Commercial Construction</li>
              <li className="text-muted-foreground text-sm">Safety Compliance</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2 text-sm">
                <Phone size={16} className="text-accent mt-1 flex-shrink-0" />
                <span className="text-muted-foreground">+44 20 1234 5678</span>
              </li>
              <li className="flex items-start space-x-2 text-sm">
                <Mail size={16} className="text-accent mt-1 flex-shrink-0" />
                <span className="text-muted-foreground">info@ironclad-construction.co.uk</span>
              </li>
              <li className="flex items-start space-x-2 text-sm">
                <MapPin size={16} className="text-accent mt-1 flex-shrink-0" />
                <span className="text-muted-foreground">123 Construction Way, London, UK</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2025 Ironclad Construction. All rights reserved. | ISO 9001 Certified</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

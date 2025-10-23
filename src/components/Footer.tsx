import { Link } from "react-router-dom";
import { Instagram, Facebook, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/30 border-t border-border mt-auto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="font-display text-xl font-semibold mb-4">Lumina Gallery</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              A curated collection of contemporary art and photography, celebrating creativity and artistic expression.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="flex flex-col space-y-2">
              <Link to="/" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                Home
              </Link>
              <Link to="/gallery" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                Gallery
              </Link>
              <Link to="/about" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                About
              </Link>
              <Link to="/exhibitions" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                Exhibitions
              </Link>
              <Link to="/contact" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                Contact
              </Link>
            </div>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex flex-col space-y-3">
              <a href="mailto:info@luminagallery.com" className="text-sm text-muted-foreground hover:text-accent transition-colors flex items-center gap-2">
                <Mail className="h-4 w-4" />
                info@luminagallery.com
              </a>
              <div className="flex gap-4 pt-2">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-accent transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-accent transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Lumina Gallery. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Instagram, Facebook } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-charcoal border-t border-border">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="inline-block">
              <h3 className="text-3xl font-display font-bold text-primary">AURUM</h3>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              An exquisite fine dining experience where culinary artistry meets elegant ambience. Every dish tells a story of passion and perfection.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-display font-semibold text-foreground mb-6">Explore</h4>
            <ul className="space-y-3">
              {[
                { name: 'Our Menu', path: '/menu' },
                { name: 'Make a Reservation', path: '/reservation' },
                { name: 'About Us', path: '/about' },
                { name: 'Gallery', path: '/gallery' },
                { name: 'Reviews', path: '/reviews' },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-display font-semibold text-foreground mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground text-sm">
                  123 Gourmet Avenue,<br />New York, NY 10001
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="tel:+15551234567" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  +1 555 123 4567
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="mailto:hello@aurum.com" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  hello@aurum.com
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-lg font-display font-semibold text-foreground mb-6">Hours</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div className="text-sm">
                  <p className="text-foreground font-medium">Tue - Thu</p>
                  <p className="text-muted-foreground">6:00 PM - 10:00 PM</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div className="text-sm">
                  <p className="text-foreground font-medium">Fri - Sun</p>
                  <p className="text-muted-foreground">6:00 PM - 11:00 PM</p>
                </div>
              </li>
              <li className="text-sm text-muted-foreground mt-2">
                Closed on Mondays
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Aurum Restaurant. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm">
            <Link to="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

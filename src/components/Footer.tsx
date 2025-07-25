import { Link } from "react-router-dom";
import { Globe, Mail, Phone, MapPin, Youtube, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-subtle border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center shadow-card">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="text-xl font-bold text-primary">iFLAPS</span>
                <span className="text-sm text-muted-foreground block leading-none">Education</span>
              </div>
            </div>
            <p className="text-muted-foreground text-sm">
              Master English, French, German, and Russian with expert instructors. 
              Prepare for international tests and achieve your global career goals.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Quick Links</h3>
            <nav className="space-y-2">
              <Link to="/courses" className="block text-muted-foreground hover:text-primary transition-colors text-sm">
                All Courses
              </Link>
              <Link to="/about" className="block text-muted-foreground hover:text-primary transition-colors text-sm">
                About Us
              </Link>
              <Link to="/contact" className="block text-muted-foreground hover:text-primary transition-colors text-sm">
                Contact
              </Link>
              <Link to="/auth/login" className="block text-muted-foreground hover:text-primary transition-colors text-sm">
                Student Login
              </Link>
            </nav>
          </div>

          {/* Languages */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Languages</h3>
            <nav className="space-y-2">
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors text-sm">
                English (IELTS/TOEFL)
              </a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors text-sm">
                French (DELF/DALF)
              </a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors text-sm">
                German (Goethe/TestDaF)
              </a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors text-sm">
                Russian (TORFL)
              </a>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground text-sm">info@iflaps.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground text-sm">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground text-sm">Mumbai, India</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © 2024 iFLAPS Education. All rights reserved. Empowering global communication.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
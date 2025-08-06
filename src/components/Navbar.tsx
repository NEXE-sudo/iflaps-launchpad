import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Globe, BookOpen, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const clubs = [
  { name: "Research Club", route: "/rendezvous/research" },
  { name: "Technology Club", route: "/rendezvous/tech" },
  { name: "Hindi Club", route: "/rendezvous/hindi" },
  { name: "Theatre Club", route: "/rendezvous/theatre" },
  { name: "Debate Club", route: "/rendezvous/debate" },
  { name: "Financial Literacy Club", route: "/rendezvous/financial" },
  { name: "Art & Craft Club", route: "/rendezvous/art" },
  { name: "Community Service Department", route: "/rendezvous/community" }
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center shadow-card group-hover:shadow-glow transition-all duration-300">
              <Globe className="w-6 h-6 text-white" />
            </div>
            <div>
              <span className="text-xl font-bold text-primary">iFLAPS</span>
              <span className="text-sm text-muted-foreground block leading-none">Education</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive("/") ? "text-primary" : "text-foreground"
              }`}
            >
              Home
            </Link>
            <Link
              to="/courses"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive("/courses") ? "text-primary" : "text-foreground"
              }`}
            >
              Courses
            </Link>
            
            {/* Rendezvous Dropdown */}
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger 
                    className={`text-sm font-medium transition-colors hover:text-primary ${
                      location.pathname.startsWith("/rendezvous") ? "text-primary" : "text-foreground"
                    }`}
                    asChild
                  >
                    <Link to="/rendezvous">Rendezvous</Link>
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="p-4 w-64">
                      <div className="grid gap-2">
                        {clubs.map((club) => (
                          <NavigationMenuLink key={club.name} asChild>
                            <Link
                              to={club.route}
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            >
                              <div className="text-sm font-medium leading-none">{club.name}</div>
                            </Link>
                          </NavigationMenuLink>
                        ))}
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <Link
              to="/about"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive("/about") ? "text-primary" : "text-foreground"
              }`}
            >
              About
            </Link>
            <Link
              to="/contact"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive("/contact") ? "text-primary" : "text-foreground"
              }`}
            >
              Contact
            </Link>
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" asChild>
              <Link to="/auth/login">Sign In</Link>
            </Button>
            <Button variant="hero" asChild>
              <Link to="/auth/signup">Get Started</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-foreground hover:text-primary hover:bg-accent focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gradient-subtle rounded-lg mb-4 shadow-card">
              <Link
                to="/"
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  isActive("/")
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground hover:text-primary hover:bg-accent"
                }`}
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/courses"
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  isActive("/courses")
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground hover:text-primary hover:bg-accent"
                }`}
                onClick={() => setIsOpen(false)}
              >
                Courses
              </Link>
              <Link
                to="/rendezvous"
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  location.pathname.startsWith("/rendezvous")
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground hover:text-primary hover:bg-accent"
                }`}
                onClick={() => setIsOpen(false)}
              >
                Rendezvous
              </Link>
              <Link
                to="/about"
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  isActive("/about")
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground hover:text-primary hover:bg-accent"
                }`}
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                to="/contact"
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  isActive("/contact")
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground hover:text-primary hover:bg-accent"
                }`}
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <div className="pt-4 space-y-2">
                <Button variant="ghost" className="w-full" asChild>
                  <Link to="/auth/login" onClick={() => setIsOpen(false)}>
                    Sign In
                  </Link>
                </Button>
                <Button variant="hero" className="w-full" asChild>
                  <Link to="/auth/signup" onClick={() => setIsOpen(false)}>
                    Get Started
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
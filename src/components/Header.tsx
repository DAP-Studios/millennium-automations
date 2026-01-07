import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronRight } from "lucide-react";
import masLogo from "@/assets/logo.png";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [scrollY, setScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showHeader, setShowHeader] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
      setIsScrolled(currentScrollY > 20);
      
      // Always show header throughout the entire website
      setShowHeader(true);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      const menuButton = document.querySelector('[aria-label="Menu"]');
      const menuDropdown = document.querySelector('.mobile-menu-dropdown');
      
      if (isMobileMenuOpen && 
          !menuButton?.contains(target) && 
          !menuDropdown?.contains(target)) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMobileMenuOpen]);

  const navLinks = [
        { href: "#hero", label: "Home" },
        { href: "#products", label: "Products" },
        { href: "#about", label: "About" },
        { href: "#services", label: "Services" },
        { href: "#projects", label: "Projects" },
        { href: "#contact", label: "Contact" },
  ];

  const scrollToSection = (href: string) => {
    const sectionId = href.replace("#", "");
    const isHomePage = location.pathname === "/";

    // If not on home page, navigate to home first
    if (!isHomePage) {
      navigate("/");
      // Small delay to ensure page loads before scrolling
      setTimeout(() => {
        scrollToElement(sectionId);
      }, 100);
      return;
    }

    scrollToElement(sectionId);
    setIsMobileMenuOpen(false);
  };

  const scrollToElement = (sectionId: string) => {
    if (sectionId === "hero") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header 
    className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-white shadow-md`}>

      {/* Main Navigation */}
      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="flex justify-center items-center h-16 sm:h-18 md:h-20" >
          <button
            onClick={() => scrollToSection("#hero")}
            className="flex items-center gap-2 sm:gap-3 md:gap-4 hover:opacity-90 transition-all duration-300 group"
            aria-label="Go to home"
          >
            <div className="relative">
              <img
                src={masLogo}
                alt="MAS logo"
                className="h-8 sm:h-10 md:h-12 lg:h-14 transition-all duration-300 transform group-hover:scale-105 drop-shadow-sm"
              />
            </div>
            <div className="block">
              <div className={`transition-all duration-300 ${
                isScrolled ? "text-blue-600" : "text-blue-500 drop-shadow-md"
              }`}>
                <h1 className="text-sm sm:text-lg md:text-xl lg:text-2xl font-bold leading-tight tracking-tight">
                  Millennium Automation
                </h1>
                <p className={`text-xs sm:text-sm md:text-sm font-medium ${
                  isScrolled ? "text-red-600" : "text-red-400"
                }`}>
                  Smart System • Better Solution
                </p>
              </div>
            </div>
          </button>
        </div>
      </div>
      
      {/* Simplified Menu Button */}
      <div className="absolute top-3 sm:top-4 md:top-5 right-3 sm:right-4">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-1 sm:p-2 rounded transition-all duration-200 text-slate-700 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
        >
          {isMobileMenuOpen ? (
            <X className="w-4 h-4 sm:w-5 sm:h-5" />
          ) : (
            <Menu className="w-4 h-4 sm:w-5 sm:h-5" />
          )}
        </button>
      </div>

      {/* Simple Navigation Menu */}
      <div className={`absolute top-full right-3 sm:right-4 transition-all duration-200 ${
        isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
      id="mobile-menu">
        <div className={`mobile-menu-dropdown mt-2 rounded-lg shadow-lg min-w-40 sm:min-w-48 bg-white border border-slate-200`}>
          <div className="py-1 sm:py-2">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="w-full px-3 sm:px-4 py-1.5 sm:py-2 text-left text-xs sm:text-sm transition-colors text-slate-700 hover:bg-slate-100 hover:text-primary focus:outline-none focus:bg-slate-100 focus:text-primary"
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

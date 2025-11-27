import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import masLogo from "@/assets/logo.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
        { href: "#about", label: "About" },
        { href: "#services", label: "Services" },
        { href: "#products", label: "Products" },
        { href: "#projects", label: "Projects" },
        { href: "#contact", label: "Contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          <button
            onClick={() => scrollToSection("#home")}
            className="flex items-center gap-2 sm:gap-3 hover:opacity-80 transition-all duration-500"
            aria-label="Go to home"
          >
            {/* Logo and text are hidden at the top and revealed when user scrolls */}
            <img
    src={masLogo}
    alt="MAS logo"
    className={`h-12 sm:h-14 md:h-16 lg:h-18 transition-all duration-300 transform ${
      isScrolled ? "opacity-100 scale-100" : "opacity-0 scale-90"
    }`}
    aria-hidden={!isScrolled}
  />
  {/* <div className={`transition-all duration-300 text-left ${
    isScrolled ? "opacity-100" : "opacity-0"
  }`}>
    <p className="text-3xl sm:text-3xl font-bold leading-tight text-primary [text-shadow:0_2px_10px_rgba(0,0,0,0.3)]">
      Millennium
      <br className="sm:hidden" />
      {" "}Automation System
    </p>
    <p className="text-sm sm:text-base text-red-600 font-light mt-1 [text-shadow:0_1px_5px_rgba(0,0,0,0.2)]">
      Smart System...... Better Solution
    </p>
  </div> */}
</button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className={`text-sm font-medium transition-colors duration-200 ${
                  isScrolled 
                    ? "text-foreground/70 hover:text-foreground" 
                    : "text-white/80 hover:text-white"
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden hover:text-primary transition-colors p-2 ${
              isScrolled ? "text-foreground" : "text-white"
            }`}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-border/30 animate-fade-in">
            <div className="py-4 space-y-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="block w-full text-left px-4 py-3 text-sm font-medium text-foreground/70 hover:bg-primary/5 hover:text-primary rounded-md transition-all"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

import { useEffect, useRef, useState } from "react";
import HeroSlider from "@/components/HeroSlider";
import About from "@/components/About";
import WhyChooseUs from "@/components/WhyChooseUs";
import Products from "@/components/Products";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import SEO from "@/components/SEO";
import { defaultSEO } from "@/lib/seoConfig";
import { Menu, X } from "lucide-react";

const Index = () => {
  const mainRef = useRef<HTMLElement>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Scroll to top on mount/reload
    if (mainRef.current) {
      mainRef.current.scrollTo(0, 0);
    }
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) element.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen">
      <SEO
        title={defaultSEO.title}
        description={defaultSEO.description}
        keywords={defaultSEO.keywords}
        canonical={defaultSEO.canonical}
        ogImage={defaultSEO.ogImage}
        ogType={defaultSEO.ogType}
      />
      {/* Hamburger Menu - Glass Effect */}
      <div className="fixed top-3 sm:top-4 md:top-5 right-3 sm:right-4 z-50">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2 sm:p-3 rounded backdrop-blur-md bg-white/20 border border-white/30 hover:bg-white/30 transition-all duration-200 text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-slate-950"
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMobileMenuOpen}
          aria-controls="home-menu"
        >
          {isMobileMenuOpen ? (
            <X className="w-5 h-5 sm:w-6 sm:h-6" />
          ) : (
            <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
          )}
        </button>
      </div>

      {/* Glass Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="fixed top-16 sm:top-20 right-3 sm:right-4 z-50">
          <div className="backdrop-blur-md bg-white/20 border border-white/30 rounded-lg shadow-lg min-w-48">
            <div className="py-2">
              <button
                onClick={() => scrollToSection("#products")}
                className="w-full px-4 py-2 text-left text-sm text-white hover:bg-white/20 focus:outline-none focus:bg-white/20 transition-colors"
              >
                Products
              </button>
              <button
                onClick={() => scrollToSection("#about")}
                className="w-full px-4 py-2 text-left text-sm text-white hover:bg-white/20 focus:outline-none focus:bg-white/20 transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("#services")}
                className="w-full px-4 py-2 text-left text-sm text-white hover:bg-white/20 focus:outline-none focus:bg-white/20 transition-colors"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("#projects")}
                className="w-full px-4 py-2 text-left text-sm text-white hover:bg-white/20 focus:outline-none focus:bg-white/20 transition-colors"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("#contact")}
                className="w-full px-4 py-2 text-left text-sm text-white hover:bg-white/20 focus:outline-none focus:bg-white/20 transition-colors"
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      )}
      <main ref={mainRef} className="w-full">
        <HeroSlider />
        <Products />
        <About />
        <Services />
        <Projects />
        <WhyChooseUs />
        <Contact />
      </main>
    </div>
  );
};

export default Index;

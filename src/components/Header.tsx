import { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import masLogo from "@/assets/logo.png";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isHomePage = location.pathname === "/";
  const isProductDetailPage = location.pathname.startsWith("/product-detail");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  /* ---------------- Scroll detect ---------------- */
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ---------------- Outside click ---------------- */
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const target = e.target as Node;
      if (
        isMobileMenuOpen &&
        menuRef.current &&
        buttonRef.current &&
        !menuRef.current.contains(target) &&
        !buttonRef.current.contains(target)
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener("mousedown", handler);
    }
    return () => document.removeEventListener("mousedown", handler);
  }, [isMobileMenuOpen]);

  /* ---------------- ESC key ---------------- */
  useEffect(() => {
    const esc = (e: KeyboardEvent) => e.key === "Escape" && setIsMobileMenuOpen(false);
    document.addEventListener("keydown", esc);
    return () => document.removeEventListener("keydown", esc);
  }, []);

  /* ---------------- Navigation ---------------- */
  const navLinks = [
    { href: "#hero", label: "Home" },
    { href: "#products", label: "Products" },
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  const scrollToSection = (href: string) => {
    const id = href.replace("#", "");
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      if (id === "hero") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* ================= FULL NAVBAR (NOT HOME) ================= */}
      {!isHomePage && (
        <header className="fixed top-0 left-0 right-0 z-40 bg-white shadow-md">
          <div className="mx-auto flex h-14 sm:h-16 md:h-18 items-center justify-start sm:justify-center px-4">
            <button
              onClick={() => scrollToSection("#hero")}
              className="flex max-w-full items-center gap-2 sm:gap-3 flex-row text-left"
            >
              <img src={masLogo} alt="MAS logo" className="h-10 sm:h-10 md:h-12" />
              <div className="min-w-0">
                <h1 className="font-bold text-base sm:text-lg text-blue-600 leading-tight">
                  Millennium Automation
                </h1>
                <p className="text-xs sm:text-sm text-red-500 leading-tight">
                  Smart System • Better Solution
                </p>
              </div>
            </button>
          </div>
        </header>
      )}

      {/* ================= HAMBURGER (ALL PAGES) ================= */}
      <button
        ref={buttonRef}
        onClick={() => setIsMobileMenuOpen((v) => !v)}
        className={`fixed right-4 z-50 p-2 bg-transparent shadow-none hover:bg-transparent transition ${
          isProductDetailPage
            ? "top-1/2 -translate-y-1/2 sm:top-4 sm:translate-y-0"
            : "top-3"
        }`}
        aria-label="Toggle menu"
      >
        <span className="sr-only">Toggle menu</span>
        <span className="relative block w-7 h-6">
          <span
            className={`absolute left-0 top-0 h-1 w-full rounded-full transition-all duration-300 ${
              isProductDetailPage ? "bg-[#0A1F44]" : isHomePage ? "bg-white" : "bg-cyan-600"
            } ${isMobileMenuOpen ? "translate-y-2.5 rotate-45" : "translate-y-0"}`}
          />
          <span
            className={`absolute left-0 top-1/2 h-1 w-full -translate-y-1/2 rounded-full transition-all duration-300 ${
              isProductDetailPage ? "bg-[#0A1F44]" : isHomePage ? "bg-white" : "bg-cyan-600"
            } ${isMobileMenuOpen ? "opacity-0" : "opacity-100"}`}
          />
          <span
            className={`absolute left-0 bottom-0 h-1 w-full rounded-full transition-all duration-300 ${
              isProductDetailPage ? "bg-[#0A1F44]" : isHomePage ? "bg-white" : "bg-cyan-600"
            } ${isMobileMenuOpen ? "-translate-y-2.5 -rotate-45" : "translate-y-0"}`}
          />
        </span>
      </button>

      {/* ================= DROPDOWN ================= */}
      <div
        className={`fixed top-16 right-4 z-40 transition-all duration-300 ${
          isMobileMenuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
      >
        <div
          ref={menuRef}
          className="bg-white rounded-xl shadow-xl border min-w-52"
        >
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollToSection(link.href)}
              className="w-full flex justify-between px-5 py-3 text-sm hover:bg-blue-50 hover:text-blue-600"
            >
              {link.label}
              <ChevronRight className="w-4 h-4 opacity-60" />
            </button>
          ))}
        </div>
      </div>

      {/* ================= BACKDROP ================= */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/10"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  );
};

export default Header;

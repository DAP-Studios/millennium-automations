import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";

const slides = [
  {
    title: "Total Automation & Control Solutions",
    description:
      "Providing comprehensive system integration, custom control panels, and industry-leading products to optimize your operations.",
    cta: "Explore Our Services",
    ctaLink: "#services",
    image: hero1,
  },
  {
    title: "Authorized Delta Electronics Partner",
    description:
      "Gain access to a complete portfolio of high-performance Delta products, including VFDs, Servos, HMIs, and PLCs, backed by expert support.",
    cta: "View Products",
    ctaLink: "#products",
    image: hero2,
  },
  {
    title: "Engineering for the Future of Industry",
    description:
      "From initial concept to final commissioning, we deliver custom-engineered solutions that enhance efficiency, safety, and productivity.",
    cta: "Request a Consultation",
    ctaLink: "#contact",
    image: hero3,
  },
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-bg"
    >
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="container mx-auto px-6 h-full flex items-center">
            <div className="grid md:grid-cols-2 gap-12 items-center w-full">
              <div className="text-content space-y-6 animate-fade-in">
                <h1 className="text-4xl md:text-6xl font-extrabold text-primary leading-tight">
                  {slide.title}
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground max-w-xl">
                  {slide.description}
                </p>
                <Button
                  onClick={() => scrollToSection(slide.ctaLink)}
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-white font-bold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  {slide.cta}
                </Button>
              </div>
              <div className="hidden md:block animate-float">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="rounded-2xl shadow-2xl w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-3 rounded-full shadow-lg transition-all duration-300 z-10"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 text-primary" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-3 rounded-full shadow-lg transition-all duration-300 z-10"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 text-primary" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-accent w-8"
                : "bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;

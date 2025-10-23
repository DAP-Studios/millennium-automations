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
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
          </div>

          {/* Content */}
          <div className="relative container mx-auto px-6 h-full flex items-center justify-center">
            <div className="max-w-5xl text-center space-y-8 animate-fade-in">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-light leading-tight text-white drop-shadow-2xl tracking-wide">
                {slide.title}
              </h1>
              <p className="text-xl md:text-2xl lg:text-3xl max-w-3xl mx-auto text-white/95 drop-shadow-lg font-light">
                {slide.description}
              </p>
              <Button
                onClick={() => scrollToSection(slide.ctaLink)}
                size="lg"
                className="bg-white hover:bg-white/90 text-primary font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 text-base px-10 py-6 rounded-full mt-4"
              >
                {slide.cta}
              </Button>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 p-4 rounded-full shadow-lg transition-all duration-300 z-20 border border-white/30"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 p-4 rounded-full shadow-lg transition-all duration-300 z-20 border border-white/30"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex space-x-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-white w-12"
                : "bg-white/40 hover:bg-white/60 w-2"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;

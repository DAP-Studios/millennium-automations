import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Shield, Zap, TrendingUp, ChevronLeft, ChevronRight } from "lucide-react";
import heroImage1 from "@/assets/hero-1.jpg";
import heroImage2 from "@/assets/hero-2.jpg";
import heroImage3 from "@/assets/hero-3.jpg";

const stats = [
  {
    icon: Shield,
    title: "Authorized",
    subtitle: "Delta Channel Partner",
  },
  {
    icon: Zap,
    title: "Premium",
    subtitle: "Quality Products",
  },
  {
    icon: TrendingUp,
    title: "24/7",
    subtitle: "Technical Support",
  },
];

const slides = [
  {
    image: heroImage1,
    title: "Millennium Automation System",
    subtitle: "Smart Systems, Better Solution",
    tag: "Industry Leader in Automation",
  },
  {
    image: heroImage2,
    title: "Advanced Industrial Solutions",
    subtitle: "Powering Gujarat's Manufacturing Excellence",
    tag: "Trusted by Leading Industries",
  },
  {
    image: heroImage3,
    title: "Delta Electronics Partner",
    subtitle: "World-Class Automation Technology",
    tag: "Premium Quality Products",
  },
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Carousel Images */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/80 to-slate-900/70"></div>
        </div>
      ))}

      {/* Carousel Controls */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 backdrop-blur-sm p-3 rounded-full transition-all duration-300"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 backdrop-blur-sm p-3 rounded-full transition-all duration-300"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>

      {/* Carousel Indicators */}
      <div className="absolute bottom-32 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentSlide ? "bg-primary w-8" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
      
      {/* Content */}
      <div className="relative container mx-auto px-6 py-32 lg:py-40 z-10">
        <div className="max-w-6xl mx-auto">
          {/* Main Content */}
          <div className="space-y-8 mb-20">
            <div className="inline-flex items-center gap-2 text-primary text-sm font-medium tracking-wide animate-fade-in">
              {slides[currentSlide].tag}
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white animate-fade-in">
              {slides[currentSlide].title}
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl font-light animate-fade-in">
              {slides[currentSlide].subtitle}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-6 animate-fade-in">
              <Button
                onClick={() => scrollToSection("#products")}
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 h-14 rounded-lg transition-all duration-300 shadow-lg hover:shadow-primary/50"
              >
                Explore Solutions →
              </Button>
              <Button
                onClick={() => scrollToSection("#contact")}
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-slate-900 font-semibold px-8 h-14 rounded-lg transition-all duration-300"
              >
                Get In Touch
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl">
            {stats.map((stat, index) => (
              <div key={index} className="flex items-center gap-4 text-white animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex-shrink-0">
                  <stat.icon className="w-10 h-10 text-primary" strokeWidth={1.5} />
                </div>
                <div>
                  <div className="text-xl font-bold">{stat.title}</div>
                  <div className="text-sm text-white/70">{stat.subtitle}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSlider;

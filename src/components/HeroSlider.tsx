import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Zap, TrendingUp, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import heroImage1 from "@/assets/hero-1.jpg";
import heroImage2 from "@/assets/hero-2.jpg";
import heroImage3 from "@/assets/hero-3.jpg";
import deltaLogo from "@/assets/delta.png";
import masLogo from "@/assets/logo.png";
import "./animations.css";

const slides = [heroImage1, heroImage2, heroImage3];

const stats = [
  {
    icon: Zap,
    title: "Premium",
    subtitle: "Quality Products",
  },
  {
    useDeltaLogo: true,
    title: "Authorized",
    subtitle: "Delta Channel Partner",
  },
  {
    icon: TrendingUp,
    title: "24/7",
    subtitle: "Technical Support",
  },
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Smooth scroll to section
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  // Auto-slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Tailwind-based style definitions for content
  const contentStyles = {
    heading:
      "text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] text-white [text-shadow:0_4px_20px_rgba(0,0,0,0.95),0_8px_40px_rgba(0,0,0,0.8),0_0_60px_rgba(0,0,0,0.7),0_2px_4px_rgba(0,0,0,1)]",
    subtitle:
      "text-base sm:text-lg md:text-xl lg:text-2xl text-white max-w-2xl font-light leading-relaxed [text-shadow:0_2px_20px_rgba(0,0,0,0.95),0_4px_32px_rgba(0,0,0,0.8),0_0_48px_rgba(0,0,0,0.7)]",
    buttonPrimary:
      "bg-primary hover:bg-primary/90 text-white font-semibold px-6 sm:px-8 h-12 sm:h-14 text-sm sm:text-base rounded-lg transition-all duration-500 shadow-[0_8px_30px_rgba(0,0,0,0.6)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.7)] transform hover:-translate-y-0.5",
    buttonSecondary:
      "border-2 border-white bg-white/15 backdrop-blur-md text-white hover:bg-white hover:text-slate-900 font-semibold px-6 sm:px-8 h-12 sm:h-14 text-sm sm:text-base rounded-lg transition-all duration-500 shadow-[0_8px_30px_rgba(0,0,0,0.6)] transform hover:-translate-y-0.5",
  };

  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden bg-slate-950"
    >
      {/* Background Carousel */}
      <div className="absolute inset-0">
        {slides.map((image, index) => (
          <div
            key={index}
            className={cn(
              "absolute inset-0 transition-opacity duration-1000",
              currentSlide === index ? "opacity-100" : "opacity-0"
            )}
          >
            <img
              src={image}
              alt="Industrial Automation"
              className="w-full h-full object-cover"
            />
          </div>
        ))}
        {/* Gradient overlays for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/50 to-slate-900/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/60 via-transparent to-slate-900/60" />
      </div>

      {/* Main Content */}
      <div className="relative container mx-auto px-4 sm:px-6 py-16 sm:py-20 lg:py-24 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-3 sm:space-y-4 mb-12 sm:mb-20">
            {/* Heading */}
            <h1
              className={contentStyles.heading}
              style={{
                animation: "slideUp 0.8s ease-out forwards 0.2s",
                opacity: 0,
              }}
            >
              <span className="inline-flex items-center gap-3 sm:gap-4">
                {/* MAS Logo with glow highlight */}
                <img
                  src={masLogo}
                  alt="MAS logo"
                  className="h-20 sm:h-24 md:h-28 hidden sm:inline drop-shadow-[0_0_20px_rgba(0,0,0,0.6)] filter brightness-110"
                />
                <span className="leading-tight">
                  Millennium
                  <br />
                  Automation System
                </span>
              </span>
            </h1>

            {/* Subtitle */}
            <p
              className={contentStyles.subtitle}
              style={{
                animation: "slideUp 0.8s ease-out forwards 0.4s",
                opacity: 0,
              }}
            >
              Smart Systems, Better Solution
            </p>

            {/* Buttons */}
            <div
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 pt-4 sm:pt-6"
              style={{
                animation: "slideUp 0.8s ease-out forwards 0.6s",
                opacity: 0,
              }}
            >
              <Button
                onClick={() => scrollToSection("#products")}
                size="lg"
                className={contentStyles.buttonPrimary}
              >
                Explore Solutions →
              </Button>
              <Button
                onClick={() => scrollToSection("#contact")}
                size="lg"
                variant="outline"
                className={contentStyles.buttonSecondary}
              >
                Get In Touch
              </Button>
            </div>
          </div>

          {/* Stats Grid */}
          <div
            className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12 max-w-5xl mx-auto"
            style={{
              animation: "fadeIn 1s ease-out forwards 0.8s",
              opacity: 0,
            }}
          >
            {stats.map((stat, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center"
                style={{
                  animation: `slideUp 0.8s ease-out forwards ${0.8 + index * 0.1}s`,
                  opacity: 0,
                }}
              >
                {stat.useDeltaLogo ? (
                  <div className="flex flex-col items-center justify-center -space-y-10">
                    <img
                      src={deltaLogo}
                      alt="Delta logo"
                      className="w-[140px] h-[140px] sm:w-[160px] sm:h-[160px] object-contain drop-shadow-[0_0_25px_rgba(100,200,255,0.8)] animate-float-slow"
                    />
                    <div>
                      <div className="text-xl sm:text-2xl font-bold text-white">
                        {stat.title}
                      </div>
                      <div className="text-sm sm:text-base text-white/80">
                        {stat.subtitle}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center gap-3">
                    <stat.icon
                      className="w-10 h-10 text-secondary"
                      strokeWidth={2}
                    />
                    <div>
                      <div className="text-xl sm:text-2xl font-bold text-white">
                        {stat.title}
                      </div>
                      <div className="text-sm sm:text-base text-white/80 mt-1">
                        {stat.subtitle}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className="absolute bottom-2 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-20 cursor-pointer group hidden sm:block"
        onClick={() => scrollToSection("#products")}
        style={{
          animation: "fadeIn 1s ease-out forwards 1.2s",
          opacity: 0,
          color: "white",
        }}
      >
        <ChevronDown className="w-6 h-6 text-white/60 group-hover:text-white animate-bounce transition-colors duration-300 mx-auto" />
      </div>
    </section>
  );
};

export default HeroSlider;
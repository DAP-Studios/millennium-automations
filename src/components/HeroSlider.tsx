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
  const [isAnimating, setIsAnimating] = useState(true);

  // Smooth scroll to section
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setCurrentSlide((prev) => prev + 1);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  // Reset to first slide seamlessly after the clone
  useEffect(() => {
    if (currentSlide === slides.length) {
      const timeoutId = setTimeout(() => {
        setIsAnimating(false);
        setCurrentSlide(0);
      }, 1000);
      return () => clearTimeout(timeoutId);
    }

    if (!isAnimating && currentSlide === 0) {
      const id = requestAnimationFrame(() => setIsAnimating(true));
      return () => cancelAnimationFrame(id);
    }
  }, [isAnimating, currentSlide]);

  // Tailwind-based style definitions for content
  const contentStyles = {
    heading:
      "text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold leading-[1.1] text-white drop-shadow-[0_4px_8px_rgba(100,100,100,0.6)]",
    subtitle:
      "text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-white max-w-2xl font-light leading-relaxed",
    buttonPrimary:
      "bg-primary hover:bg-primary/90 text-white font-semibold px-5 sm:px-6 lg:px-8 h-11 sm:h-12 lg:h-14 text-xs sm:text-sm lg:text-base rounded-lg transition-all duration-500 shadow-[0_8px_30px_rgba(0,0,0,0.6)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.7)] transform hover:-translate-y-0.5",
    buttonSecondary:
      "border-2 border-white bg-white/15 backdrop-blur-md text-white hover:bg-white hover:text-slate-900 font-semibold px-5 sm:px-6 lg:px-8 h-11 sm:h-12 lg:h-14 text-xs sm:text-sm lg:text-base rounded-lg transition-all duration-500 shadow-[0_8px_30px_rgba(0,0,0,0.6)] transform hover:-translate-y-0.5",
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen sm:h-screen flex items-center justify-center overflow-hidden bg-slate-950 snap-start snap-always"
    >
      {/* Background Carousel */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className={cn(
            "flex h-full w-full ease-in-out",
            isAnimating ? "transition-transform duration-1000" : "transition-none"
          )}
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((image, index) => (
            <div key={index} className="h-full w-full flex-shrink-0">
              <img
                src={image}
                alt={`Industrial automation solutions Vapi - Delta Electronics authorized distributor offering VFD, PLC, HMI, and servo systems in Gujarat, India ${index + 1}`}
                className="w-full h-full object-cover"
                loading={index === 0 ? "eager" : "lazy"}
              />
            </div>
          ))}
          <div className="h-full w-full flex-shrink-0">
            <img
              src={slides[0]}
              alt="Industrial automation solutions Vapi - Delta Electronics authorized distributor offering VFD, PLC, HMI, and servo systems in Gujarat, India 1"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
        {/* Gradient overlays for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/40 via-slate-900/30 to-slate-900/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/30 via-transparent to-slate-900/30" />
      </div>

      {/* Main Content */}
      <div className="relative container mx-auto px-2 sm:px-4 md:px-6 py-12 pt-16 sm:py-16 lg:py-20 xl:py-24 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-2 sm:space-y-4 mb-6 sm:mb-12 lg:mb-16 xl:mb-20">
            {/* Heading */}
            <h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.1] text-white drop-shadow-[0_4px_8px_rgba(100,100,100,0.6)] text-center sm:text-left"
              style={{
                animation: "slideUp 0.8s ease-out forwards 0.2s",
                opacity: 0,
              }}
            >
              <span className="inline-flex flex-col sm:flex-row items-center justify-center sm:items-center sm:justify-start gap-1 sm:gap-3 lg:gap-4">
                {/* MAS Logo */}
                <div className="relative">
                  <img
                    src={masLogo}
                    alt="Millennium Automation System logo - Industrial automation solutions provider Vapi Gujarat"
                    className="h-[94px] sm:h-16 md:h-20 lg:h-24 xl:h-32 brightness-105 drop-shadow-[0_8px_15px_rgba(0,0,0,0.8)]"
                  />
                </div>
                <span className="leading-tight text-center sm:text-left">
                  <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold tracking-wider">
                    Millennium
                  </span>
                  <span className="block text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl font-bold">
                    Automation System
                  </span>
                </span>
              </span>
            </h1>

<<<<<<< HEAD
            {/* Subtitle */}
=======
            {/* Subtitle - keyword-rich for "delta authorized dealer in vapi" searches */}
>>>>>>> 5d8b0611ac9b1143bf3b7f8ca3ea9a3addf6f00f
            <p
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-white max-w-2xl font-light leading-relaxed text-center mx-auto sm:mx-0"
              style={{
                animation: "slideUp 0.8s ease-out forwards 0.4s",
                opacity: 0,
              }}
            >
<<<<<<< HEAD
              Smart Systems, Better Solution
=======
              Delta Authorized Dealer in Vapi — Smart Systems, Better Solution
>>>>>>> 5d8b0611ac9b1143bf3b7f8ca3ea9a3addf6f00f
            </p>

            {/* Buttons */}
            <div
              className="flex flex-col sm:flex-row gap-2 sm:gap-4 lg:gap-6 pt-2 sm:pt-4 lg:pt-6 justify-center sm:justify-start"
              style={{
                animation: "slideUp 0.8s ease-out forwards 0.6s",
                opacity: 0,
              }}
            >
              <Button
                onClick={() => scrollToSection("#products")}
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white font-semibold px-3 sm:px-6 lg:px-8 h-11 sm:h-12 lg:h-14 text-sm sm:text-sm lg:text-base rounded-lg transition-all duration-500 shadow-[0_8px_30px_rgba(0,0,0,0.6)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.7)] transform hover:-translate-y-0.5"
              >
                Explore Solutions →
              </Button>
              <Button
                onClick={() => scrollToSection("#contact")}
                size="lg"
                variant="outline"
                className="border-2 border-white bg-white/15 backdrop-blur-md text-white hover:bg-white hover:text-slate-900 font-semibold px-3 sm:px-6 lg:px-8 h-11 sm:h-12 lg:h-14 text-sm sm:text-sm lg:text-base rounded-lg transition-all duration-500 shadow-[0_8px_30px_rgba(0,0,0,0.6)] transform hover:-translate-y-0.5"
              >
                Get In Touch
              </Button>
            </div>
          </div>

          {/* Stats Grid */}
          <div
            className="grid grid-cols-1 sm:grid-cols-3 gap-1 sm:gap-2 lg:gap-6 max-w-5xl mx-auto px-2"
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
                  <div className="flex flex-col items-center justify-center -space-y-4 sm:-space-y-10">
                    <img
                      src={deltaLogo}
                      alt="Delta Electronics authorized partner - Industrial automation products distributor Vapi Gujarat"
                      className="w-[140px] h-[140px] sm:w-[140px] sm:h-[140px] lg:w-[160px] lg:h-[160px] object-contain"
                    />
                    <div>
                      <div className="text-xl sm:text-xl lg:text-2xl font-bold text-white">
                        {stat.title}
                      </div>
                      <div className="text-sm sm:text-sm lg:text-base text-white/80">
                        {stat.subtitle}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center gap-2 sm:gap-3">
                    <stat.icon
                      className="w-12 h-12 sm:w-12 sm:h-12 text-secondary"
                      strokeWidth={2}
                    />
                    <div>
                      <div className="text-xl sm:text-xl lg:text-2xl font-bold text-white">
                        {stat.title}
                      </div>
                      <div className="text-sm sm:text-sm lg:text-base text-white/80 mt-1">
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

      {/* Scroll Indicator - Removed */}
    </section>
  );
};

export default HeroSlider;
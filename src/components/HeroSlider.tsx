import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Shield, Zap, TrendingUp, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import heroImage1 from "@/assets/hero-1.jpg";
import heroImage2 from "@/assets/hero-2.jpg";
import heroImage3 from "@/assets/hero-3.jpg";
import "./animations.css";

const slides = [heroImage1, heroImage2, heroImage3];

const stats = [
  {
    icon: Shield,
    title: "Authorized",
    subtitle: "Delta Channel Partner",
    // description: "Official partner providing genuine Delta products and expert support"
  },
  {
    icon: Zap,
    title: "Premium",
    subtitle: "Quality Products",
    // description: "Top-tier automation solutions with industry-leading reliability"
  },
  {
    icon: TrendingUp,
    title: "24/7",
    subtitle: "Technical Support",
    // description: "Round-the-clock assistance for your automation needs"
  }
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setIsTransitioning(true);
      setCurrentSlide((prev) => prev + 1);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (currentSlide === slides.length) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentSlide(0);
      }, 5000);
    }
  }, [currentSlide]);

  const contentStyles = {
    badge: "inline-flex items-center gap-2 text-primary/90 text-sm font-medium tracking-wider uppercase",
    heading: "text-5xl md:text-6xl lg:text-8xl font-bold leading-[1.1] bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-white/70",
    subtitle: "text-xl md:text-2xl text-white/80 max-w-2xl font-light leading-relaxed",
    buttonPrimary: "bg-primary hover:bg-primary/90 text-white font-semibold px-8 h-14 rounded-lg transition-all duration-500 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transform hover:translate-y-[-2px]",
    buttonSecondary: "border-2 border-primary text-primary hover:bg-white hover:text-slate-900 font-semibold px-8 h-14 rounded-lg transition-all duration-500 backdrop-blur-sm transform hover:translate-y-[-2px]"
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950">
      {/* Background Carousel - Sliding */}
      <div className="absolute inset-0">
        <div 
          className="flex h-full"
          style={{ 
            transform: `translateX(-${currentSlide * 100}%)`,
            transition: isTransitioning ? 'transform 1000ms ease-in-out' : 'none',
            width: `${(slides.length + 1) * 100}%`
          }}
        >
          {[...slides, slides[0]].map((image, index) => (
            <div key={index} className="w-full h-full flex-shrink-0">
              <img src={image} alt="Industrial Automation" className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>
      
      {/* Main Content */}
      <div className="relative container mx-auto px-6 py-24 lg:py-32 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-8 mb-24">
            {/* Badge */}
            <div className={contentStyles.badge} style={{ animation: "slideDown 0.6s ease-out forwards", opacity: 0 }}>
              <div className="h-px w-8 bg-primary/60" />
              <span>Industrial Automation</span>
              <div className="h-px w-8 bg-primary/60" />
            </div>
            
            {/* Heading */}
            <h1 className={contentStyles.heading} style={{ animation: "slideUp 0.8s ease-out forwards 0.2s", opacity: 0 }}>
              Millennium<br />Automation System
            </h1>
            
            {/* Subtitle */}
            <p className={contentStyles.subtitle} style={{ animation: "slideUp 0.8s ease-out forwards 0.4s", opacity: 0 }}>
              Smart Systems, Better Solution
            </p>
            
            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-8" style={{ animation: "slideUp 0.8s ease-out forwards 0.6s", opacity: 0 }}>
              <Button onClick={() => scrollToSection("#products")} size="lg" className={contentStyles.buttonPrimary}>
                Explore Solutions →
              </Button>
              <Button onClick={() => scrollToSection("#contact")} size="lg" variant="outline" className={contentStyles.buttonSecondary}>
                Get In Touch
              </Button>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto" style={{ animation: "fadeIn 1s ease-out forwards 0.8s", opacity: 0 }}>
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="flex items-center gap-4"
                style={{ animation: `slideUp 0.8s ease-out forwards ${0.8 + index * 0.1}s`, opacity: 0 }}
              >
                <div className="flex-shrink-0">
                  <stat.icon className="w-10 h-10 text-primary" strokeWidth={1.5} />
                </div>
                <div>
                  <div className="text-xl font-bold text-white">{stat.title}</div>
                  <div className="text-sm text-white/70">{stat.subtitle}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div 
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-20 cursor-pointer group"
        onClick={() => scrollToSection("#about")}
        style={{ animation: "fadeIn 1s ease-out forwards 1.2s", opacity: 0 }}
      >
        <span className="text-sm text-white/60 group-hover:text-white/90 transition-colors duration-300 block text-center mb-2">
          Scroll Down
        </span>
        <ChevronDown className="w-6 h-6 text-white/60 group-hover:text-white animate-bounce transition-colors duration-300 mx-auto" />
      </div>
    </section>
  );
};

export default HeroSlider;

import { Button } from "@/components/ui/button";
import { Shield, Zap, TrendingUp } from "lucide-react";
import heroImage from "@/assets/hero-1.jpg";

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

const HeroSlider = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Industrial Automation"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/80 to-slate-900/70"></div>
      </div>
      
      {/* Content */}
      <div className="relative container mx-auto px-6 py-32 lg:py-40 z-10">
        <div className="max-w-6xl mx-auto">
          {/* Main Content */}
          <div className="space-y-8 mb-20">
            <div className="inline-flex items-center gap-2 text-primary text-sm font-medium tracking-wide">
              Industry Leader in Automation
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white">
              Millennium Automation System
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl font-light">
              Smart Systems, Better Solution
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Button
                onClick={() => scrollToSection("#products")}
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 h-14 rounded-lg transition-all duration-300"
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
              <div key={index} className="flex items-center gap-4 text-white">
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

import { Button } from "@/components/ui/button";
import { Zap, Shield, Users } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Authorized Delta Partner",
    description: "Official distributor of Delta Electronics products with expert support",
  },
  {
    icon: Shield,
    title: "Proven Solutions",
    description: "Reliable automation systems serving industries across Gujarat",
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Experienced engineers delivering custom automation solutions",
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
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0f1629] via-[#1a2447] to-[#2d3561]"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-6 py-20 lg:py-32">
        <div className="max-w-6xl mx-auto">
          {/* Main Content */}
          <div className="text-center space-y-8 mb-16 animate-fade-in">
            <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-white/90 text-sm font-medium mb-4">
              Authorized Channel Partner of Delta Electronics
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-light leading-tight text-white">
              Smart Automation Solutions for{" "}
              <span className="font-semibold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                Growing Industries
              </span>
            </h1>
            
            <p className="text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto text-white/80 font-light leading-relaxed">
              We build reliable automation systems that target your business needs with Delta Electronics products and expert engineering support.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Button
                onClick={() => scrollToSection("#contact")}
                size="lg"
                className="bg-white hover:bg-white/90 text-primary font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 text-base px-10 py-6 rounded-lg"
              >
                Schedule a Consultation
              </Button>
              <Button
                onClick={() => scrollToSection("#products")}
                size="lg"
                variant="outline"
                className="border-2 border-white/30 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-semibold shadow-lg transition-all duration-300 px-10 py-6 rounded-lg"
              >
                View Products
              </Button>
            </div>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 hover:bg-white/15 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center shadow-lg">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-semibold text-lg mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-white/70 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
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

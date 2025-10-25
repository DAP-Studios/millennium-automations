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
      className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-bg"
    >
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/30 rounded-full blur-3xl animate-pulse-glow"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent/30 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '3s' }}></div>
      </div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:60px_60px]"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/20"></div>

      {/* Content */}
      <div className="relative container mx-auto px-6 py-24 lg:py-32 animate-fade-in">
        <div className="max-w-6xl mx-auto">
          {/* Main Content */}
          <div className="text-center space-y-8 mb-20">
            <div className="inline-flex items-center gap-3 px-6 py-2.5 glass-effect rounded-full shadow-lg animate-fade-in">
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
              <span className="text-white text-sm font-semibold tracking-wide">Authorized Channel Partner of Delta Electronics</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white tracking-tight animate-fade-in" style={{ animationDelay: '0.1s' }}>
              Smart Automation
              <br />
              <span className="text-gradient">Solutions for Growing Industries</span>
            </h1>
            
            <p className="text-xl md:text-2xl max-w-3xl mx-auto text-white/90 leading-relaxed font-light animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Reliable automation systems designed for your business needs with Delta Electronics products and expert engineering support.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5 justify-center items-center pt-8 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <Button
                onClick={() => scrollToSection("#contact")}
                size="lg"
                className="relative overflow-hidden bg-white hover:bg-white/95 text-primary font-semibold shadow-2xl hover:shadow-glow-accent transition-all duration-300 text-base px-10 h-14 rounded-xl group"
              >
                <span className="relative z-10">Schedule a Consultation</span>
                <div className="absolute inset-0 bg-gradient-to-r from-accent/0 via-accent/10 to-accent/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
              </Button>
              <Button
                onClick={() => scrollToSection("#products")}
                size="lg"
                variant="outline"
                className="glass-effect border-2 border-white/40 text-white hover:bg-white hover:text-primary font-semibold transition-all duration-300 px-10 h-14 rounded-xl hover:shadow-xl"
              >
                View Products
              </Button>
            </div>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group glass-card rounded-2xl p-8 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${0.4 + index * 0.1}s` }}
              >
                <div className="flex flex-col items-center text-center gap-5">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                    <div className="relative w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className="w-8 h-8 text-white" strokeWidth={2.5} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-foreground font-bold text-xl mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground text-base leading-relaxed">
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

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
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-primary to-primary/90"
    >
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-primary/50"></div>

      {/* Content */}
      <div className="relative container mx-auto px-6 py-24 lg:py-32">
        <div className="max-w-6xl mx-auto">
          {/* Main Content */}
          <div className="text-center space-y-8 mb-20">
            <div className="inline-flex items-center gap-2 px-5 py-2 bg-white/95 rounded-full border border-primary/10 shadow-sm">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span className="text-primary text-sm font-semibold tracking-wide">Authorized Channel Partner of Delta Electronics</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white tracking-tight">
              Smart Automation Solutions
              <br />
              <span className="text-white/90">for Growing Industries</span>
            </h1>
            
            <p className="text-lg md:text-xl max-w-2xl mx-auto text-white/85 leading-relaxed">
              Reliable automation systems designed for your business needs with Delta Electronics products and expert engineering support.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
              <Button
                onClick={() => scrollToSection("#contact")}
                size="lg"
                className="bg-white hover:bg-white/95 text-primary font-semibold shadow-lg hover:shadow-xl transition-all duration-200 text-base px-8 h-12"
              >
                Schedule a Consultation
              </Button>
              <Button
                onClick={() => scrollToSection("#products")}
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-primary font-semibold transition-all duration-200 px-8 h-12"
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
                className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-200"
              >
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="w-14 h-14 bg-primary rounded-lg flex items-center justify-center shadow-sm">
                    <feature.icon className="w-7 h-7 text-white" strokeWidth={2} />
                  </div>
                  <div>
                    <h3 className="text-foreground font-semibold text-lg mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
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

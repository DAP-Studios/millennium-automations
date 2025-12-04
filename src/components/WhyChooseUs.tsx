import { useEffect, useRef } from "react";
import { BadgeCheck, Users, Zap, Package } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import industrialBg from "@/assets/hero-1.jpg";

const features = [
  {
    icon: BadgeCheck,
    title: "Authorized Delta Electronics partner",
    description: "Official channel partner with genuine products"
  },
  {
    icon: BadgeCheck,
    title: "ISO certified quality",
    description: "Certified processes ensuring reliability"
  },
  {
    icon: Users,
    title: "24/7 technical support",
    description: "Round-the-clock emergency assistance"
  },
  {
    icon: Users,
    title: "Experienced engineering team",
    description: "Skilled professionals with industry expertise"
  },
  {
    icon: Zap,
    title: "Competitive pricing",
    description: "Best value with comprehensive warranties"
  },
  {
    icon: Package,
    title: "Pan-India service network",
    description: "Nationwide rapid response support"
  }
];

const WhyChooseUs = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal").forEach((el, index) => {
              setTimeout(() => {
                el.classList.add("active");
              }, index * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="why-us"
      ref={sectionRef}
      className="relative h-screen w-full bg-cover bg-center overflow-hidden snap-start snap-always flex items-center justify-center"
      style={{ backgroundImage: `url(${industrialBg})` }}
    >
      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70" />
      
      <div className="container mx-auto px-3 sm:px-4 md:px-6 relative z-10 h-full flex flex-col justify-center py-4 sm:py-6 md:py-8">
        <div className="text-center mb-4 sm:mb-6 md:mb-8 reveal">
          <div className="inline-block mb-2 sm:mb-3">
            <span className="text-xs sm:text-sm font-semibold text-white bg-white/20 backdrop-blur-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full">
              Our Advantages
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white drop-shadow-md mb-1.5 sm:mb-2 md:mb-3">
            Why Choose MAS?
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-5">
          {features.map((feature, index) => (
            <div
              key={index}
              className="reveal bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg sm:rounded-xl p-3 sm:p-4 lg:p-5 hover:border-white/30 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="flex items-start gap-2 sm:gap-3">
                <div className="bg-white/20 backdrop-blur-sm text-white rounded-lg w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 flex items-center justify-center flex-shrink-0 group-hover:bg-white/30 transition-colors duration-300">
                  <feature.icon className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" strokeWidth={2} />
                </div>
                <div className="flex-1">
                  <h3 className="text-sm sm:text-base font-semibold mb-1.5 sm:mb-2 text-white leading-tight">
                    {feature.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-white/90 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

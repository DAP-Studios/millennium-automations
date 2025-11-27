import { useEffect, useRef } from "react";
import { BadgeCheck, Users, Zap, Package } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: BadgeCheck,
    title: "Authorized Delta Electronics partner",
    description: "Official channel partner providing genuine products with manufacturer warranty"
  },
  {
    icon: BadgeCheck,
    title: "ISO certified quality management",
    description: "Certified processes ensuring consistent quality and reliability"
  },
  {
    icon: Users,
    title: "24/7 technical support available",
    description: "Round-the-clock assistance for emergency and routine support"
  },
  {
    icon: Users,
    title: "Experienced team of 50+ engineers",
    description: "Skilled professionals with extensive industry expertise"
  },
  {
    icon: Zap,
    title: "Competitive pricing with warranties",
    description: "Best value solutions backed by comprehensive warranties"
  },
  {
    icon: Package,
    title: "Pan-India service network",
    description: "Nationwide presence for rapid response and support"
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
      className="py-24 bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50 overflow-hidden relative"
    >
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-10 sm:mb-12 lg:mb-16 reveal">
          <div className="inline-block mb-3 sm:mb-4">
            <span className="text-xs sm:text-sm font-semibold text-primary bg-primary/10 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full">
              Our Advantages
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-blue-600 to-primary bg-clip-text text-transparent mb-3 sm:mb-4">
            Why Choose MAS?
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="reveal bg-white border border-slate-200 rounded-lg sm:rounded-xl p-4 sm:p-5 lg:p-6 hover:border-primary/30 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="bg-primary/10 text-primary rounded-lg w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors duration-300">
                  <feature.icon className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={2} />
                </div>
                <div className="flex-1">
                  <h3 className="text-sm sm:text-base font-semibold mb-1.5 sm:mb-2 text-primary leading-tight">
                    {feature.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
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

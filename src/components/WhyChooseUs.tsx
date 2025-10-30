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
      className="py-24 bg-secondary/20 overflow-hidden"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Why Choose MAS?
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="reveal bg-white border border-slate-200 rounded-xl p-6 hover:border-primary/30 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 text-primary rounded-lg w-12 h-12 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors duration-300">
                  <feature.icon className="w-6 h-6" strokeWidth={2} />
                </div>
                <div className="flex-1">
                  <h3 className="text-base font-semibold mb-2 text-primary leading-tight">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
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

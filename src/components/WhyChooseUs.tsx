import { useEffect, useRef } from "react";
import { BadgeCheck, Users, Zap, Package } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: BadgeCheck,
    title: "Authorized Quality",
    description:
      "As a Delta Electronics partner, we guarantee genuine, high-performance products backed by manufacturer warranties.",
  },
  {
    icon: Users,
    title: "Expert Technical Support",
    description:
      "Our experienced engineers provide pre-sales consultation and post-sales support to ensure your success.",
  },
  {
    icon: Zap,
    title: "Tailored Solutions",
    description:
      "We design and build custom control panels and integrated systems to meet your specific project requirements.",
  },
  {
    icon: Package,
    title: "Comprehensive Inventory",
    description:
      "We maintain a vast stock of products to ensure quick delivery and minimize your project downtime.",
  },
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
      className="py-24 bg-secondary/30 overflow-hidden"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Why Partner with MAS?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We provide more than just products; we deliver comprehensive
            solutions and unwavering support.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="reveal border-none shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-1"
            >
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <div className="bg-accent/10 text-accent rounded-2xl w-16 h-16 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-primary">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

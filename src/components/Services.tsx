import { useEffect, useRef } from "react";

const services = [
  {
    title: "Electrical Control Panels",
    description:
      "Custom-built control panels, engineered for safety, reliability, and optimal performance for your specific application. We handle everything from schematic design to final assembly and testing.",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=1000",
  },
  {
    title: "Distribution Panels",
    description:
      "Efficient and robust power distribution solutions to safely manage your facility's electrical load. Our panels are built to the highest standards, ensuring long-term stability and ease of maintenance.",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=1000",
  },
  {
    title: "Complete System Integration",
    description:
      "Seamless integration of all automation components—including PLCs, HMIs, drives, and sensors—into one cohesive, high-functioning system designed to maximize your operational efficiency.",
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=1000",
  },
];

const Services = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal").forEach((el, index) => {
              setTimeout(() => {
                el.classList.add("active");
              }, index * 200);
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
      id="services"
      ref={sectionRef}
      className="py-24 bg-secondary/30 overflow-hidden"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Custom Engineering Services
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From design to deployment, we build the backbone of your automation
            system.
          </p>
        </div>
        <div className="space-y-24">
          {services.map((service, index) => (
            <div
              key={index}
              className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div
                className={`reveal ${
                  index % 2 === 1 ? "md:order-2" : ""
                } overflow-hidden rounded-2xl shadow-2xl group`}
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div
                className={`reveal space-y-4 ${
                  index % 2 === 1 ? "md:order-1" : ""
                }`}
              >
                <h3 className="text-3xl font-bold text-primary">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

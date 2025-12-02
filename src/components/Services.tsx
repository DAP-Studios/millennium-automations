import { useEffect, useRef, useState } from "react";
import industrialBg from "@/assets/hero-3.jpg";
import ServiceModal from "./ServiceModal";

const services = [
  {
    title: "Custom Control Panels",
    description: "Engineering and manufacturing of custom control panels tailored to your specifications.",
    features: ["IEC Standards", "UL Listed", "Custom Config", "Full Documentation"],
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=1000",
  },
  {
    title: "System Integration",
    description: "Seamless integration of PLCs, VFDs, HMIs, and robotics into efficient systems.",
    features: ["Multi-Protocol", "SCADA Integration", "IoT Connected", "Real-time Monitoring"],
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=1000",
  },
  {
    title: "24/7 Technical Support",
    description: "Rapid-response support to minimize downtime and keep operations running smoothly.",
    features: ["Emergency Response", "Remote Diagnostics", "On-site Service", "Preventive Maintenance"],
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=1000",
  },
  {
    title: "Automation Consulting",
    description: "Strategic guidance on automation implementation, system optimization, and technology upgrades. We help you make informed decisions that drive efficiency and ROI.",
    features: ["Process Analysis", "Technology Assessment", "Cost Optimization", "Implementation Planning"],
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1000",
  },
  {
    title: "Safety Systems",
    description: "Design and implementation of comprehensive safety systems including emergency stops, safety interlocks, and monitoring systems that protect personnel and equipment.",
    features: ["Safety PLC Integration", "Risk Assessment", "Safety Audits", "Compliance Verification"],
    image: "https://images.unsplash.com/photo-1581092162384-8987c1d64718?q=80&w=1000",
  },
  {
    title: "Performance Optimization",
    description: "Analyze and optimize existing automation systems to improve efficiency, reduce energy consumption, and increase productivity through advanced diagnostics and tuning.",
    features: ["Energy Audits", "Process Optimization", "Predictive Analytics", "Performance Reporting"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000",
  },
];

const Services = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  const handleServiceClick = (service: typeof services[0]) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

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
      className="relative h-screen w-full bg-cover bg-center overflow-hidden snap-start snap-always flex items-center justify-center"
      style={{ backgroundImage: `url(${industrialBg})` }}
    >
      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70" />
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10 h-full flex flex-col justify-center py-6 sm:py-8">
        <div className="text-center mb-6 sm:mb-8 reveal">
          <div className="inline-block mb-2 sm:mb-3">
            <span className="text-xs sm:text-sm font-semibold text-white bg-white/20 backdrop-blur-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full">
              What We Do
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white drop-shadow-2xl mb-2 sm:mb-3">
            Our Expertise
          </h2>
          <p className="text-white/90 drop-shadow-lg text-sm sm:text-base max-w-3xl mx-auto">
            Complete industrial automation services from design to support.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-5">
          {services.slice(0, 3).map((service, index) => (
            <div
              key={index}
              onClick={() => handleServiceClick(service)}
              className="reveal group bg-white/10 backdrop-blur-sm rounded-lg sm:rounded-xl overflow-hidden border border-white/20 hover:border-white/40 shadow-md hover:shadow-xl transition-all duration-500 cursor-pointer"
            >
              <div className="relative h-32 sm:h-40 lg:h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-200 group-hover:scale-105 will-change-transform"
                />
              </div>
              <div className="p-3 sm:p-4 lg:p-5 space-y-2 sm:space-y-3 bg-white/10 backdrop-blur-sm">
                <h3 className="text-base sm:text-lg lg:text-xl font-bold text-white group-hover:text-white/80 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-white/90 text-xs sm:text-sm leading-relaxed">
                  {service.description}
                </p>
                <div className="pt-1 sm:pt-2">
                  <ul className="space-y-1.5 sm:space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-white/80">
                        <span className="text-white mt-0.5 sm:mt-1">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Service Modal */}
      <ServiceModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        service={selectedService}
      />
    </section>
  );
};

export default Services;

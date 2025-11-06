import { useEffect, useRef } from "react";

const services = [
  {
    title: "Custom Control Panels",
    description: "Engineering and manufacturing of custom control panels tailored to your exact specifications and industry standards. We design, build, and test comprehensive solutions for any industrial application.",
    features: ["IEC Standards Compliance", "UL Listed Components", "Custom Configurations", "Complete Documentation"],
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=1000",
  },
  {
    title: "System Integration",
    description: "Seamless integration of PLCs, VFDs, HMIs, and robotics into one cohesive, efficient, and data-driven system. Our experts ensure all components work together flawlessly.",
    features: ["Multi-Protocol Support", "SCADA Integration", "IoT Connectivity", "Real-time Monitoring"],
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=1000",
  },
  {
    title: "24/7 Technical Support",
    description: "Rapid-response support to minimize downtime and keep your critical operations running smoothly around the clock. Our expert team is always available when you need us.",
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
      className="py-24 bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50 overflow-hidden relative"
    >
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 reveal">
          <div className="inline-block mb-4">
            <span className="text-sm font-semibold text-primary bg-primary/10 px-4 py-2 rounded-full">
              What We Do
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-blue-600 to-primary bg-clip-text text-transparent mb-4">
            Our Expertise
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            We provide end-to-end industrial automation services, from initial design and engineering to deployment, commissioning, and ongoing support. Our comprehensive approach ensures your automation systems deliver maximum value.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="reveal group bg-white rounded-xl overflow-hidden border border-slate-200 hover:border-primary/30 shadow-md hover:shadow-xl transition-all duration-500"
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-200 group-hover:scale-105 will-change-transform"
                />
              </div>
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-primary group-hover:text-primary/80 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
                <div className="pt-2">
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="text-primary mt-1">✓</span>
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
    </section>
  );
};

export default Services;

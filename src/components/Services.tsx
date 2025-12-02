import { useEffect, useRef, useState } from "react";
import industrialBg from "@/assets/hero-3.jpg";
import ServiceModal from "./ServiceModal";

// Add floating animation styles
const floatingStyles = `
  @keyframes float {
    0%, 100% { transform: translateY(0px) translateX(0px); }
    25% { transform: translateY(-10px) translateX(5px); }
    50% { transform: translateY(0px) translateX(-5px); }
    75% { transform: translateY(10px) translateX(5px); }
  }
  .animate-float {
    animation: float 6s ease-in-out infinite;
  }
`;

// Inject styles
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement("style");
  styleSheet.textContent = floatingStyles;
  document.head.appendChild(styleSheet);
}

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
      {/* Floating Particles Background */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute animate-float opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          >
            <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
          </div>
        ))}
      </div>
      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70" />
      
      <div className="container mx-auto px-3 sm:px-4 md:px-6 relative z-10 h-full flex flex-col justify-center py-4 sm:py-6 md:py-8">
        <div className="text-center mb-4 sm:mb-6 md:mb-8 reveal">
          <div className="inline-block mb-2 sm:mb-3">
            <span className="text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-blue-500/30 to-purple-500/30 backdrop-blur-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-white/20 shadow-lg animate-pulse">
              ⚡ What We Do ⚡
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white drop-shadow-2xl mb-1.5 sm:mb-2 md:mb-3 bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text">
            Our Expertise
          </h2>
          <p className="text-white/90 drop-shadow-lg text-xs sm:text-sm md:text-base max-w-3xl mx-auto mb-4">
            Complete industrial automation services from design to support.
          </p>
          
          {/* Stats Counter */}
          <div className="flex justify-center items-center gap-6 sm:gap-8 md:gap-12 mb-2">
            <div className="text-center group">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-400 group-hover:text-blue-300 transition-colors">
                50+
              </div>
              <div className="text-xs text-white/70">Projects</div>
            </div>
            <div className="w-px h-8 bg-white/30"></div>
            <div className="text-center group">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-green-400 group-hover:text-green-300 transition-colors">
                24/7
              </div>
              <div className="text-xs text-white/70">Support</div>
            </div>
            <div className="w-px h-8 bg-white/30"></div>
            <div className="text-center group">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-yellow-400 group-hover:text-yellow-300 transition-colors">
                5+
              </div>
              <div className="text-xs text-white/70">Years</div>
            </div>
          </div>
        </div>
        {/* Compact Grid Layout - All 6 Services */}
        <div className="w-full max-w-6xl mx-auto">
          {/* Services Grid - Compact 3x2 Layout */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
            {services.map((service, index) => {
              // Color schemes for each service
              const colorSchemes = [
                { accent: 'blue', hover: 'hover:border-blue-400', shadow: 'hover:shadow-blue-500/20', gradient: 'from-blue-500/10 to-blue-600/5' },
                { accent: 'green', hover: 'hover:border-green-400', shadow: 'hover:shadow-green-500/20', gradient: 'from-green-500/10 to-green-600/5' },
                { accent: 'purple', hover: 'hover:border-purple-400', shadow: 'hover:shadow-purple-500/20', gradient: 'from-purple-500/10 to-purple-600/5' },
                { accent: 'orange', hover: 'hover:border-orange-400', shadow: 'hover:shadow-orange-500/20', gradient: 'from-orange-500/10 to-orange-600/5' },
                { accent: 'cyan', hover: 'hover:border-cyan-400', shadow: 'hover:shadow-cyan-500/20', gradient: 'from-cyan-500/10 to-cyan-600/5' },
                { accent: 'yellow', hover: 'hover:border-yellow-400', shadow: 'hover:shadow-yellow-500/20', gradient: 'from-yellow-500/10 to-yellow-600/5' }
              ];
              
              const colors = colorSchemes[index];
              
              return (
                <div
                  key={index}
                  onClick={() => handleServiceClick(service)}
                  className={`reveal group relative bg-white/5 backdrop-blur-sm border border-white/20 ${colors.hover} ${colors.shadow} rounded-xl p-4 cursor-pointer transition-all duration-300 hover:transform hover:scale-102 hover:-translate-y-1`}
                  style={{
                    animationDelay: `${index * 80}ms`
                  }}
                >
                  {/* Service Image */}
                  <div className="relative w-full h-24 sm:h-28 mb-3 rounded-lg overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* Image Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-t ${colors.gradient} group-hover:opacity-80 transition-opacity duration-300`}></div>
                    
                    {/* Service Number Badge */}
                    <div className={`absolute top-2 right-2 w-6 h-6 bg-${colors.accent}-500 rounded-full flex items-center justify-center text-xs font-bold text-white shadow-md group-hover:scale-105 transition-transform duration-300`}>
                      {index + 1}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="space-y-2">
                    <div>
                      <h3 className={`text-sm sm:text-base font-bold text-white text-center group-hover:text-${colors.accent}-300 transition-colors duration-300 leading-tight`}>
                        {service.title}
                      </h3>
                    </div>
                    
                    {/* Bottom Accent Line */}
                    <div className={`w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-${colors.accent}-500 to-${colors.accent}-300 transition-all duration-400 ease-out mx-auto`}></div>
                  </div>
                  
                  {/* Subtle Glow Effect */}
                  <div className={`absolute inset-0 rounded-xl opacity-0 group-hover:opacity-15 bg-gradient-to-br from-${colors.accent}-500/20 to-transparent pointer-events-none transition-opacity duration-300`}></div>
                </div>
              );
            })}
          </div>
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

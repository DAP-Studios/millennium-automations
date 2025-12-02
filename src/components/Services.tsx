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
        {/* Diagonal Hexagonal Layout - All 6 Services */}
        <div className="relative w-full max-w-6xl mx-auto overflow-hidden">
          {/* Diagonal arrangement container */}
          <div className="relative flex items-center justify-center min-h-80 sm:min-h-96">
            {services.map((service, index) => {
              // Calculate tighter diagonal positions with better alignment
              const positions = [
                { x: 15, y: 15 },  // Service 1 - Top left
                { x: 30, y: 45 },  // Service 2 - Bottom left
                { x: 45, y: 20 },  // Service 3 - Top center
                { x: 60, y: 55 },  // Service 4 - Bottom center
                { x: 75, y: 25 },  // Service 5 - Top right
                { x: 90, y: 50 }   // Service 6 - Bottom right
              ];
              
              const position = positions[index];
              
              // Color schemes for each service
              const colorSchemes = [
                { from: 'from-blue-500/30', to: 'to-purple-500/30', border: 'group-hover:border-blue-400/80', shadow: 'group-hover:shadow-blue-500/40', badge: 'from-blue-500 to-purple-500', text: 'group-hover:text-blue-200' },
                { from: 'from-green-500/30', to: 'to-teal-500/30', border: 'group-hover:border-green-400/80', shadow: 'group-hover:shadow-green-500/40', badge: 'from-green-500 to-teal-500', text: 'group-hover:text-green-200' },
                { from: 'from-purple-500/30', to: 'to-pink-500/30', border: 'group-hover:border-purple-400/80', shadow: 'group-hover:shadow-purple-500/40', badge: 'from-purple-500 to-pink-500', text: 'group-hover:text-purple-200' },
                { from: 'from-orange-500/30', to: 'to-red-500/30', border: 'group-hover:border-orange-400/80', shadow: 'group-hover:shadow-orange-500/40', badge: 'from-orange-500 to-red-500', text: 'group-hover:text-orange-200' },
                { from: 'from-cyan-500/30', to: 'to-blue-500/30', border: 'group-hover:border-cyan-400/80', shadow: 'group-hover:shadow-cyan-500/40', badge: 'from-cyan-500 to-blue-500', text: 'group-hover:text-cyan-200' },
                { from: 'from-yellow-500/30', to: 'to-orange-500/30', border: 'group-hover:border-yellow-400/80', shadow: 'group-hover:shadow-yellow-500/40', badge: 'from-yellow-500 to-orange-500', text: 'group-hover:text-yellow-200' }
              ];
              
              const colors = colorSchemes[index];
              
              return (
                <div
                  key={index}
                  onClick={() => handleServiceClick(service)}
                  className="reveal group absolute w-24 h-24 sm:w-28 sm:h-28 md:w-36 md:h-36 lg:w-40 lg:h-40 cursor-pointer"
                  style={{
                    left: `${position.x}%`,
                    top: `${position.y}%`,
                    transform: 'translate(-50%, -50%)',
                    animationDelay: `${index * 150}ms`
                  }}
                >
                  {/* Hexagon Shape with Image */}
                  <div className={`absolute inset-0 backdrop-blur-sm border-2 border-white/40 ${colors.border} shadow-lg group-hover:shadow-2xl ${colors.shadow} transition-all duration-500 transform group-hover:scale-105 group-hover:rotate-6 overflow-hidden`}
                       style={{
                         clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'
                       }}>
                    
                    {/* Background Image */}
                    <div className="absolute inset-0"
                         style={{
                           clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'
                         }}>
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover opacity-40 group-hover:opacity-60 group-hover:scale-110 transition-all duration-500"
                      />
                      {/* Image Overlay */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${colors.from} ${colors.to} mix-blend-multiply`}></div>
                    </div>
                    
                    {/* Service Number Badge */}
                    <div className={`absolute top-1 right-1 sm:top-2 sm:right-2 w-4 h-4 sm:w-5 sm:h-5 bg-gradient-to-r ${colors.badge} rounded-full flex items-center justify-center text-xs font-bold text-white shadow-lg group-hover:scale-110 transition-transform duration-300 z-10`}>
                      {index + 1}
                    </div>
                    
                    {/* Pulse Ring Effect */}
                    <div className="absolute inset-1 border border-white/30 opacity-0 group-hover:opacity-80 transition-opacity duration-500 animate-pulse z-10"
                         style={{
                           clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'
                         }}>
                    </div>
                    
                    {/* Content */}
                    <div className="relative flex flex-col items-center justify-center h-full p-1 sm:p-2 text-center z-10">
                      <h3 className={`text-xs sm:text-sm font-bold text-white ${colors.text} transition-colors duration-300 leading-tight drop-shadow-lg`}>
                        {service.title}
                      </h3>
                      <div className="mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="w-4 h-0.5 bg-white/60 mx-auto"></div>
                      </div>
                    </div>
                    
                    {/* Hover Glow Effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-40 transition-opacity duration-500 z-5"
                         style={{
                           background: `radial-gradient(circle at center, ${colors.badge.includes('blue') ? '#3b82f650' : colors.badge.includes('green') ? '#10b98150' : colors.badge.includes('purple') ? '#8b5cf650' : colors.badge.includes('orange') ? '#f9731650' : colors.badge.includes('cyan') ? '#06b6d450' : '#eab30850'}, transparent 70%)`,
                           clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'
                         }}>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Diagonal Connection Lines */}
          <div className="absolute inset-0 pointer-events-none">
            <svg className="w-full h-full opacity-25">
              <defs>
                <linearGradient id="diagonalGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8"/>
                  <stop offset="20%" stopColor="#10b981" stopOpacity="0.7"/>
                  <stop offset="40%" stopColor="#8b5cf6" stopOpacity="0.7"/>
                  <stop offset="60%" stopColor="#f97316" stopOpacity="0.7"/>
                  <stop offset="80%" stopColor="#06b6d4" stopOpacity="0.7"/>
                  <stop offset="100%" stopColor="#eab308" stopOpacity="0.8"/>
                </linearGradient>
              </defs>
              {/* Main diagonal flow connecting all hexagons */}
              <path d="M 15% 15% Q 30% 30% 45% 20% Q 60% 37% 75% 25% Q 82% 37% 90% 50%" 
                    stroke="url(#diagonalGradient)" 
                    strokeWidth="2.5" 
                    fill="none" 
                    strokeDasharray="8,4"
                    opacity="0.7">
                <animate attributeName="stroke-dashoffset" values="0;12" dur="4s" repeatCount="indefinite"/>
              </path>
              
              {/* Secondary connection between bottom hexagons */}
              <path d="M 30% 45% Q 45% 40% 60% 55% Q 75% 45% 90% 50%" 
                    stroke="url(#diagonalGradient)" 
                    strokeWidth="1.8" 
                    fill="none" 
                    strokeDasharray="6,3"
                    opacity="0.5">
                <animate attributeName="stroke-dashoffset" values="12;0" dur="3.5s" repeatCount="indefinite" begin="0.8s"/>
              </path>
              
              {/* Subtle connecting arc */}
              <path d="M 45% 20% Q 52% 35% 60% 55%" 
                    stroke="url(#diagonalGradient)" 
                    strokeWidth="1.5" 
                    fill="none" 
                    strokeDasharray="4,2"
                    opacity="0.3">
                <animate attributeName="stroke-dashoffset" values="0;6" dur="2.8s" repeatCount="indefinite" begin="1.2s"/>
              </path>
            </svg>
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

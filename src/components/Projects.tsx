import { useEffect, useRef, useState } from "react";
import industrialBg from "@/assets/hero-2.jpg";
import ProjectModal from "./ProjectModal";

const projects = [
  {
    title: "Automotive Assembly Line Automation",
    description: "Complete automation solution for a 500-meter assembly line with integrated robotics, PLC control, and real-time quality monitoring systems.",
    scope: ["50+ Delta PLCs", "120 Servo Motors", "80 VFDs", "SCADA Integration"],
    results: ["40% productivity increase", "99.5% system uptime", "ROI in 18 months", "35% energy savings"],
    client: "Major Automotive Manufacturer",
    duration: "8 months",
    location: "Haryana, India",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80"
  },
  {
    title: "Smart Building HVAC Control",
    description: "Intelligent HVAC automation system for a 15-story commercial building with zone-based climate control and energy management.",
    scope: ["Central BMS Integration", "200+ VFDs for AHUs", "Touch Panel HMIs", "IoT Sensors Network"],
    results: ["45% energy reduction", "Improved comfort levels", "Remote monitoring", "Predictive maintenance"],
    client: "Commercial Real Estate Developer",
    duration: "6 months",
    location: "New Delhi, India",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80"
  },
  {
    title: "Water Treatment Plant Automation",
    description: "Comprehensive automation and monitoring system for a 50 MLD water treatment facility with remote access capabilities.",
    scope: ["PLC-based Process Control", "SCADA System", "150+ Field Instruments", "Telemetry Integration"],
    results: ["24/7 unmanned operation", "Water quality improvement", "Reduced chemical waste", "Cost savings of ₹2Cr/year"],
    client: "Municipal Water Authority",
    duration: "10 months",
    location: "Uttar Pradesh, India",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80"
  },
  {
    title: "Power Distribution Automation",
    description: "Smart power distribution system with load management, power factor correction, and automated fault detection for 100+ industrial units.",
    scope: ["33kV Substation Automation", "AMR Integration", "Power Quality Monitoring", "Custom Control Panels"],
    results: ["Zero downtime", "95% power factor", "Automated billing", "Real-time analytics"],
    client: "Industrial Park Developer",
    duration: "12 months",
    location: "Gujarat, India",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=80"
  },
  {
    title: "Pharmaceutical Packaging Line",
    description: "High-speed automated packaging line with vision inspection, serialization, and complete traceability for pharmaceutical products.",
    scope: ["Servo-driven Packaging", "Vision Systems", "Serialization", "Clean Room Compatible"],
    results: ["300 units/min throughput", "Zero defects", "FDA compliant", "Full traceability"],
    client: "Leading Pharma Company",
    duration: "5 months",
    location: "Maharashtra, India",
    image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=800&q=80"
  },
  {
    title: "Textile Mill Process Automation",
    description: "End-to-end automation of spinning, weaving, and dyeing processes with quality control and production tracking systems.",
    scope: ["300+ VFD Installations", "Process Control", "Quality Monitoring", "Production MES"],
    results: ["25% productivity gain", "Consistent quality", "30% waste reduction", "Energy optimization"],
    client: "Large Textile Manufacturer",
    duration: "14 months",
    location: "Tamil Nadu, India",
    image: "src/assets/image.png"
  }
];

const Projects = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  const handleProjectClick = (project: typeof projects[0]) => {
    setSelectedProject(project);
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
      id="projects"
      ref={sectionRef}
      className="relative h-screen w-full bg-cover bg-center overflow-hidden snap-start snap-always flex items-center justify-center"
      style={{ backgroundImage: `url(${industrialBg})` }}
    >
      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70" />
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-h-screen overflow-y-auto py-8 sm:py-12">
        <div className="text-center mb-6 sm:mb-8 lg:mb-10 reveal">
          <div className="inline-block mb-4">
            <span className="text-sm font-semibold text-white bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
              Our Work
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-2xl mb-4">
            Featured Projects
          </h2>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              onClick={() => handleProjectClick(project)}
              className="reveal flex flex-col items-center gap-3 cursor-pointer group"
            >
              <div className="relative w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden border-4 border-white/30 group-hover:border-primary/80 transition-all duration-300 shadow-lg group-hover:shadow-xl group-hover:scale-110">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
              </div>
              <h3 className="text-sm sm:text-base font-bold text-white text-center drop-shadow-lg group-hover:text-primary/90 transition-colors line-clamp-2">
                {project.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
      
      {/* Project Modal */}
      <ProjectModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        project={selectedProject}
      />
    </section>
  );
};

export default Projects;

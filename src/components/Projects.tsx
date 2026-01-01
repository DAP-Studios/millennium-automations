import { useEffect, useRef, useState } from "react";
import industrialBg from "@/assets/hero-2.jpg";
import ProjectModal from "./ProjectModal";

const projects = [
  {
  title: "Automotive Assembly Line Automation",
  description: "Complete end-to-end automation solution for a 500-meter automotive assembly line featuring integrated robotics, advanced PLC control systems, real-time quality monitoring, and predictive maintenance capabilities.",
  scope: [
    "50+ Delta PLCs Network", 
    "120 Servo Motor Systems", 
    "80 Variable Frequency Drives", 
    "Industrial SCADA Integration",
    "Robot Work Cells",
    "Vision Quality Systems",
    "MES Integration"
  ],
  results: [
    "40% productivity increase", 
    "99.5% system uptime achieved", 
    "ROI achieved in 18 months", 
    "35% energy consumption reduction",
    "Cycle time reduced by 22%",
    "Zero safety incidents"
  ],
  client: "Major Automotive Manufacturer",
  duration: "8 months",
  location: "Haryana, India",
  image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80"
},
{
  title: "Packaging Solution",
  description: "Advanced high-speed packaging automation system with integrated vision inspection, real-time tracking, robotic material handling, and intelligent quality control for optimized production efficiency.",
  scope: [
    "PLC-based Line Control System", 
    "AI-powered Vision Inspection", 
    "SCADA Monitoring Platform", 
    "Robotic Pick & Place Units", 
    "Precision Servo Drive Systems",
    "Barcode/RFID Tracking",
    "Automatic Rejection System"
  ],
  results: [
    "35% throughput increase", 
    "99.8% packaging accuracy rate", 
    "Real-time quality monitoring", 
    "28% material waste reduction",
    "OEE improved to 87%",
    "Payback period: 14 months"
  ],
  client: "Leading FMCG Manufacturer",
  duration: "4 months",
  location: "Mumbai, India",
  image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80"
},
{
  title: "Water Treatment Plant Automation",
  description: "Comprehensive automation and remote monitoring system for a 50 MLD water treatment facility with advanced process control, telemetry integration, and intelligent chemical dosing for optimal water quality.",
  scope: [
    "Multi-stage PLC Process Control", 
    "Web-based SCADA System", 
    "150+ Field Instrumentation", 
    "Telemetry & Remote Access",
    "Automated Chemical Dosing",
    "Water Quality Analyzers",
    "Mobile Monitoring App"
  ],
  results: [
    "24/7 unmanned operation capability", 
    "Consistent water quality compliance", 
    "40% chemical waste reduction", 
    "Annual cost savings: ₹2 Crore",
    "Real-time quality alerts",
    "Energy consumption down 25%"
  ],
  client: "Municipal Water Authority",
  duration: "10 months",
  location: "Uttar Pradesh, India",
  image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80"
},
{
  title: "Power Distribution Automation",
  description: "Intelligent smart power distribution system with advanced load management, automatic power factor correction, real-time monitoring, and automated fault detection serving 100+ industrial manufacturing units.",
  scope: [
    "33kV Substation Automation", 
    "Automated Meter Reading (AMR)", 
    "Power Quality Monitoring System", 
    "Custom Control Panel Design",
    "Load Management Software",
    "Fault Detection & Isolation",
    "Energy Analytics Dashboard"
  ],
  results: [
    "Zero unplanned downtime", 
    "Power factor improved to 0.95", 
    "Automated billing system", 
    "Real-time energy analytics",
    "30% reduction in demand charges",
    "Remote fault isolation in <2 min"
  ],
  client: "Industrial Park Developer",
  duration: "12 months",
  location: "Gujarat, India",
  image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=80"
},
{
  title: "Pharmaceutical Packaging Line",
  description: "High-speed automated pharmaceutical packaging line with advanced vision inspection, serialization compliance, complete product traceability, and clean room compatible design meeting stringent FDA regulations.",
  scope: [
    "Servo-driven Packaging System", 
    "Multi-camera Vision Inspection", 
    "Track & Trace Serialization", 
    "Clean Room Grade Equipment",
    "Automated Reject Handling",
    "Batch Management System",
    "21 CFR Part 11 Compliance"
  ],
  results: [
    "300 units/min throughput achieved", 
    "Zero defect shipping record", 
    "Full FDA compliance certified", 
    "100% product traceability",
    "Reduced changeover time by 60%",
    "ROI in 20 months"
  ],
  client: "Leading Pharmaceutical Company",
  duration: "5 months",
  location: "Maharashtra, India",
  image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=800&q=80"
},
{
  title: "Textile Mill Process Automation",
  description: "Comprehensive end-to-end automation of spinning, weaving, and dyeing processes with integrated quality control systems, production tracking, and Manufacturing Execution System (MES) for enhanced operational efficiency.",
  scope: [
    "300+ VFD Drive Installations", 
    "Multi-stage Process Control", 
    "Real-time Quality Monitoring", 
    "Production MES Platform",
    "Recipe Management System",
    "Energy Management System",
    "Centralized Dashboard"
  ],
  results: [
    "25% overall productivity gain", 
    "Consistent fabric quality achieved", 
    "30% raw material waste reduction", 
    "Energy optimization: 32% savings",
    "Production visibility improved",
    "Reduced downtime by 45%"
  ],
  client: "Large Textile Manufacturer",
  duration: "14 months",
  location: "Tamil Nadu, India",
  image: "https://images.unsplash.com/photo-1604508809435-bd97c0b2b1f3?w=800&q=80"
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
      
      <div className="container mx-auto px-3 sm:px-4 md:px-6 relative z-10 max-h-screen overflow-y-auto py-6 sm:py-8 md:py-12">
        <div className="text-center mb-4 sm:mb-6 md:mb-8 lg:mb-10 reveal">
          <div className="inline-block mb-2 sm:mb-3 md:mb-4">
            <span className="text-xs sm:text-sm font-semibold text-white bg-white/20 backdrop-blur-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full">
              Our Work
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white drop-shadow-md mb-3 sm:mb-4">
            Featured Projects
          </h2>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 md:gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              onClick={() => handleProjectClick(project)}
              className="reveal flex flex-col items-center gap-3 cursor-pointer group"
            >
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-3 sm:border-4 border-white/30 group-hover:border-primary/80 transition-all duration-300 shadow-lg group-hover:shadow-xl group-hover:scale-110">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
              </div>
              <h3 className="text-xs sm:text-sm md:text-base font-bold text-white text-center drop-shadow-sm group-hover:text-primary/90 transition-colors line-clamp-2">
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

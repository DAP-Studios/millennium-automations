import { useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";

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
    image: "https://images.unsplash.com/photo-1604762524889-8f0de44d3ae5?w=800&q=80"
  }
];

const Projects = () => {
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
      id="projects"
      ref={sectionRef}
      className="py-24 bg-gradient-to-br from-white via-slate-50/50 to-white overflow-hidden relative"
    >
      {/* Decorative Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 reveal">
          <div className="inline-block mb-4">
            <span className="text-sm font-semibold text-primary bg-primary/10 px-4 py-2 rounded-full">
              Our Work
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-blue-600 to-primary bg-clip-text text-transparent mb-4">
            Featured Projects
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Our portfolio spans diverse industries, delivering innovative automation solutions that drive measurable results and exceed client expectations.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="reveal group overflow-hidden border border-slate-200 hover:border-primary/30 shadow-md hover:shadow-xl transition-all duration-500"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                  <span className="bg-white/95 backdrop-blur-sm text-primary text-xs font-semibold px-3 py-1.5 rounded-full shadow-md">
                    {project.client}
                  </span>
                  <span className="bg-primary/95 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-md">
                    {project.duration}
                  </span>
                </div>
              </div>
              <CardContent className="p-6 space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-primary group-hover:text-primary/80 transition-colors duration-300 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-xs text-muted-foreground flex items-center gap-1">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    {project.location}
                  </p>
                </div>
                
                <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                  {project.description}
                </p>
                
                <div className="space-y-3 pt-2">
                  <div>
                    <h4 className="text-xs font-semibold text-primary mb-2">Project Scope:</h4>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      {project.scope.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-1">
                          <span className="w-1 h-1 bg-primary rounded-full"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-xs font-semibold text-primary mb-2">Key Results:</h4>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      {project.results.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-1">
                          <span className="text-primary">✓</span>
                          {item}
                        </li>
                      ))}
                    </ul>
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

export default Projects;

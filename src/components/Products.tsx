import { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { getCoverImageForCategory } from "@/lib/productImages";
import ProductModal from "./ProductModal";
import type { Product } from "./ProductModal";

const products = [
  {
    title: "Variable Frequency Drives (VFD)",
    description: "Delta's comprehensive VFD lineup includes ME300, REG2000, CP2000, C2000-HS, and VFD-EL-W series. These drives provide precise motor speed control, energy savings, and advanced vector control for industrial applications. Features include built-in PLC functionality, multiple communication protocols, and comprehensive motor protection.",
    specs: [
      "Power Range: 0.2kW to 3700kW",
      "Voltage: 200V-480V (Single/Three Phase)",
      "Advanced Vector Control & V/F Control",
      "Built-in PLC & Multiple Communication Protocols",
      "Energy Saving up to 30-50%",
      "IP20/IP54 Protection Options",
      "Overload, Overvoltage & Overcurrent Protection",
      "Support for Multiple Motors"
    ],
    applications: [
      "HVAC Systems - Fans, Pumps, Air Handling Units",
      "Industrial Motors & Conveyors",
      "Machine Tools & CNC Equipment",
      "Textile & Printing Machinery",
      "Food & Beverage Processing",
      "Water Treatment Plants",
      "Material Handling Systems",
      "Packaging Equipment"
    ],
    image: getCoverImageForCategory("vfd"),
    category: "vfd",
    badge: "Delta Electronics"
  },
  {
    title: "Servo Motor Systems",
    description: "Delta's ASDA-A2, ASDA-A3, and ASDA-B2 servo systems deliver exceptional precision and performance for demanding motion control applications. Featuring high-resolution encoders, advanced control algorithms, and superior dynamic response for seamless integration into automated machinery.",
    specs: [
      "Power Range: 100W to 15kW",
      "Resolution: 17-bit to 23-bit Encoders",
      "Response Time: < 0.5ms",
      "Speed Control Accuracy: ±0.01%",
      "Position Control Accuracy: ±1 Pulse",
      "Multiple Control Modes (Position, Speed, Torque)",
      "Advanced Auto-Tuning Functions",
      "EtherCAT & MECHATROLINK-III Support"
    ],
    applications: [
      "CNC Machines & Machine Tools",
      "Robotic Arms & Automation Systems",
      "Electronic Assembly Equipment",
      "Semiconductor Manufacturing",
      "Packaging & Labeling Machines",
      "Textile & Printing Equipment",
      "Medical Equipment & Devices",
      "Food Processing Automation"
    ],
    image: getCoverImageForCategory("servo"),
    category: "servo",
    badge: "Delta Electronics"
  },
  {
    title: "Human Machine Interface (HMI)",
    description: "Delta's DOP-100 series HMI panels provide intuitive touchscreen interfaces for industrial automation. Available in multiple sizes with high-resolution color displays, these panels offer seamless communication with PLCs, excellent visualization capabilities, and user-friendly programming software for efficient system monitoring and control.",
    specs: [
      "Screen Sizes: 4.3\" to 15.6\" TFT LCD",
      "Resolution: Up to 1920×1080 Full HD",
      "Multi-Touch Capacitive/Resistive Touch",
      "Multiple Communication Ports (RS232/RS485/Ethernet)",
      "Recipe & Data Logging Functions",
      "Alarm Management System",
      "Support 65,536 Colors",
      "IP65 Front Panel Protection"
    ],
    applications: [
      "Industrial Process Monitoring & Control",
      "Machine Tool Operator Interfaces",
      "Building Management Systems",
      "HVAC Control & Monitoring",
      "Production Line Visualization",
      "Packaging Machine Control",
      "Water Treatment Plant SCADA",
      "Manufacturing Execution Systems (MES)"
    ],
    image: getCoverImageForCategory("hmi"),
    category: "hmi",
    badge: "Delta Electronics"
  },
  {
    title: "Programmable Logic Controllers (PLC)",
    description: "Delta's DVP and AS200 series PLCs offer reliable, high-performance control solutions for industrial automation. The DVP series provides versatile, cost-effective control while the AS200 series delivers advanced motion control and networking capabilities. Both feature extensive I/O options and multiple communication protocols.",
    specs: [
      "Processing Speed: 0.24μs to 0.54μs per instruction",
      "Program Memory: 16K to 256K steps",
      "I/O Points: 14 to 480 points (Expandable)",
      "Built-in High-Speed Counters & PWM outputs",
      "Multiple Communication Ports (RS232/RS485/Ethernet)",
      "Support Modbus, CANopen, EtherCAT protocols",
      "Motion Control up to 8 Axes",
      "Free Programming Software (WPLSoft/ISPSoft)"
    ],
    applications: [
      "Manufacturing Process Automation",
      "Assembly Line Control Systems",
      "Building HVAC & Lighting Control",
      "Water & Wastewater Treatment",
      "Packaging & Material Handling",
      "Food & Beverage Processing",
      "Textile Industry Automation",
      "Energy Management Systems"
    ],
    image: getCoverImageForCategory("plc"),
    category: "plc",
    badge: "Delta Electronics"
  },
  {
    title: "Power Supply (SMPS) & Components",
    description: "Industrial-grade Switch Mode Power Supplies (SMPS) and related power components including transformers, timers, counters, and synchronizing cards. These reliable power solutions ensure stable operation of automation equipment with high efficiency, compact design, and comprehensive protection features.",
    specs: [
      "Output Power: 15W to 960W",
      "Input Voltage: 85-264VAC Universal",
      "Output Voltage: 5V, 12V, 24V, 48V DC",
      "Efficiency: Up to 89%",
      "Protection: Overload, Overvoltage, Short Circuit",
      "DIN Rail Mounting",
      "Operating Temperature: -10°C to +70°C",
      "UL, CE, TUV Certified"
    ],
    applications: [
      "Industrial Control Panel Power Supply",
      "PLC & Automation Equipment",
      "LED Lighting Systems",
      "Communication Equipment",
      "Security & CCTV Systems",
      "Medical Equipment",
      "Building Automation",
      "Test & Measurement Instruments"
    ],
    image: getCoverImageForCategory("smps"),
    category: "smps",
    badge: "Power Solutions"
  }
];

const Products = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal").forEach((el, index) => {
              setTimeout(() => {
                el.classList.add("active");
              }, index * 80);
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
    <>
      <section
        id="products"
        ref={sectionRef}
        className="py-24 bg-gradient-to-br from-white via-slate-50/50 to-white overflow-hidden relative"
      >
        {/* Decorative Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center mb-10 sm:mb-12 lg:mb-16 reveal">
            <div className="inline-block mb-3 sm:mb-4">
              <span className="text-xs sm:text-sm font-semibold text-primary bg-primary/10 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full">
                Our Products
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-blue-600 to-primary bg-clip-text text-transparent mb-3 sm:mb-4">
              Core Products
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base lg:text-lg max-w-3xl mx-auto px-4">
              As an authorized distributor of Delta Electronics, we supply industry-leading automation components backed by comprehensive technical support and genuine warranties.
            </p>
          </div>
          
          {/* Carousel */}
          <div className="reveal">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-3 sm:-ml-4">
                {products.map((product, index) => (
                  <CarouselItem key={index} className="pl-3 sm:pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                    <Card
                      onClick={() => {
                        setSelectedProduct(product);
                        setIsModalOpen(true);
                      }}
                      className="group overflow-hidden border border-slate-500 hover:border-primary/30 shadow-lg hover:shadow-xl transition-all duration-200 cursor-pointer h-full"
                    >
                      <div className="relative h-48 sm:h-64 lg:h-80 overflow-hidden">
                        <img 
                          src={product.image} 
                          alt={product.title}
                          loading="lazy"
                          decoding="async"
                          className="w-full h-full object-cover transition-transform duration-200 group-hover:scale-105 will-change-transform"
                        />
                        <div className="absolute top-2 right-2 sm:top-4 sm:right-4">
                          <span className="bg-white/95 backdrop-blur-sm text-primary text-[10px] sm:text-xs font-semibold px-2 py-1 sm:px-3 sm:py-1.5 rounded-full shadow-md">
                            {product.badge}
                          </span>
                        </div>
                      </div>
                      <CardContent className="p-4 sm:p-6 lg:p-8 space-y-3 sm:space-y-4 lg:space-y-5">
                        <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-primary group-hover:text-primary/80 transition-colors duration-300">
                          {product.title}
                        </h3>
                        <p className="text-muted-foreground text-xs sm:text-sm lg:text-base leading-relaxed line-clamp-2 sm:line-clamp-3">
                          {product.description}
                        </p>
                        
                        <div className="space-y-3 sm:space-y-4">
                          <div>
                            <h4 className="text-xs sm:text-sm font-semibold text-primary mb-2 sm:mb-3">Key Specifications:</h4>
                            <div className="flex flex-wrap gap-1.5 sm:gap-2">
                              {product.specs.slice(0, 4).map((spec, idx) => (
                                <span key={idx} className="text-[10px] sm:text-xs bg-secondary/50 text-muted-foreground px-2 py-1 sm:px-3 sm:py-1.5 rounded">
                                  {spec}
                                </span>
                              ))}
                            </div>
                          </div>
                          
                          <div>
                            <h4 className="text-xs sm:text-sm font-semibold text-primary mb-2 sm:mb-3">Applications:</h4>
                            <ul className="text-[10px] sm:text-xs lg:text-sm text-muted-foreground space-y-1 sm:space-y-2">
                              {product.applications.slice(0, 4).map((app, idx) => (
                                <li key={idx} className="flex items-center gap-1.5 sm:gap-2">
                                  <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-primary rounded-full flex-shrink-0"></span>
                                  {app}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-0 -translate-x-2 sm:-translate-x-4 lg:-translate-x-12 w-8 h-8 sm:w-10 sm:h-10" />
              <CarouselNext className="right-0 translate-x-2 sm:translate-x-4 lg:translate-x-12 w-8 h-8 sm:w-10 sm:h-10" />
            </Carousel>
          </div>
        </div>
      </section>

      <ProductModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default Products;

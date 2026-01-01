import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Zap, Cog, Monitor, Cpu, Battery } from "lucide-react";
import industrialBg from "@/assets/hero-1.jpg";
import vfdImage from "@/assets/hero-1.jpg";

// Product data
const allProductsData = [
  {
    category: "Variable Frequency Drives",
    categoryId: "vfd",
    description: "Precise motor speed control with advanced vector control and energy-saving capabilities.",
    image: vfdImage,
    products: [
      {
        model: "ME300 Series",
        specs: "0.2kW - 110kW, 200-480V",
        image: vfdImage,
        features: ["Built-in PLC", "Energy saving 30-50%", "Multiple protocols"],
        applications: "General purpose machinery, pumps, fans, conveyors"
      },
      {
        model: "REG2000 Series",
        specs: "1.5kW - 630kW, High Performance",
        image: vfdImage,
        features: ["Vector control", "Regenerative braking", "IP54 protection"],
        applications: "Heavy-duty industrial applications, high dynamic response"
      },
      {
        model: "CP2000 Series",
        specs: "0.75kW - 3700kW, Modular Design",
        image: vfdImage,
        features: ["Cabinet type", "Advanced cooling", "Remote monitoring"],
        applications: "Large scale industrial systems, process control"
      },
      {
        model: "C2000-HS Series",
        specs: "0.75kW - 630kW, High Speed",
        image: vfdImage,
        features: ["200kHz switching", "Low noise", "Compact design"],
        applications: "High-speed spindles, precision machinery"
      },
      {
        model: "VFD-EL-W Series",
        specs: "0.2kW - 2.2kW, Wall Mount",
        image: vfdImage,
        features: ["IP66 outdoor", "Easy installation", "Cost effective"],
        applications: "Outdoor applications, water pumps, ventilation"
      }
    ]
  },
  {
    category: "Servo Motor Systems",
    categoryId: "servo",
    description: "High-precision motion control systems with exceptional performance for automation.",
    image: vfdImage,
    products: [
      {
        model: "ASDA-A2 Series",
        specs: "100W - 3kW, 17-bit Encoder",
        image: vfdImage,
        features: ["Fast response <0.5ms", "Auto-tuning", "Multi-axis sync"],
        applications: "Packaging machines, textile machinery, robotics"
      },
      {
        model: "ASDA-A3 Series",
        specs: "100W - 15kW, 23-bit Encoder",
        image: vfdImage,
        features: ["EtherCAT support", "±0.01% accuracy", "Advanced control"],
        applications: "CNC machines, semiconductor equipment, precision positioning"
      },
      {
        model: "ASDA-B2 Series",
        specs: "200W - 3kW, 20-bit Encoder",
        image: vfdImage,
        features: ["Low inertia", "Compact size", "Easy setup"],
        applications: "Small automated equipment, pick and place, conveyors"
      },
      {
        model: "ASDA-M Series",
        specs: "10W - 400W, Micro Servo",
        image: vfdImage,
        features: ["Ultra compact", "RS485 control", "Cost efficient"],
        applications: "Medical devices, laboratory equipment, small automation"
      }
    ]
  },
  {
    category: "Human Machine Interface",
    categoryId: "hmi",
    description: "Intuitive touchscreen panels for seamless industrial automation monitoring.",
    image: vfdImage,
    products: [
      {
        model: "DOP-107 Series",
        specs: "7\" TFT LCD, 800×480",
        image: vfdImage,
        features: ["Resistive touch", "Recipe function", "Alarm management"],
        applications: "Machine control panels, process monitoring"
      },
      {
        model: "DOP-110 Series",
        specs: "10.1\" TFT LCD, 1024×600",
        image: vfdImage,
        features: ["Multi-touch", "Data logging", "USB connectivity"],
        applications: "Industrial HMI, production monitoring, SCADA systems"
      },
      {
        model: "DOP-115 Series",
        specs: "15.6\" TFT LCD, 1920×1080",
        image: vfdImage,
        features: ["Full HD display", "Ethernet support", "IP65 front"],
        applications: "Large scale control rooms, complex visualization"
      },
      {
        model: "DOP-103 Series",
        specs: "4.3\" TFT LCD, 480×272",
        image: vfdImage,
        features: ["Compact design", "65,536 colors", "Multiple ports"],
        applications: "Small machines, embedded control, simple HMI"
      }
    ]
  },
  {
    category: "Programmable Logic Controllers",
    categoryId: "plc",
    description: "Reliable, high-performance control solutions with extensive I/O options.",
    image: vfdImage,
    products: [
      {
        model: "DVP-SE Series",
        specs: "14-60 I/O, 0.54μs/step",
        image: vfdImage,
        features: ["Cost effective", "Compact design", "Easy programming"],
        applications: "Simple automation, small machines, educational purposes"
      },
      {
        model: "DVP-SS2 Series",
        specs: "24-60 I/O, 0.24μs/step",
        image: vfdImage,
        features: ["High speed", "Built-in Ethernet", "Motion control"],
        applications: "Medium automation, motion control, networked systems"
      },
      {
        model: "AS200 Series",
        specs: "128-256K steps, Multi-axis",
        image: vfdImage,
        features: ["EtherCAT master", "8-axis control", "Advanced HMI"],
        applications: "Complex automation, multi-axis motion, integrated systems"
      },
      {
        model: "AH500 Series",
        specs: "Large capacity, Modular",
        image: vfdImage,
        features: ["Redundancy support", "SCADA ready", "Hot swap I/O"],
        applications: "Critical infrastructure, large factories, redundant systems"
      }
    ]
  },
  {
    category: "Power Supply Components",
    categoryId: "smps",
    description: "Industrial-grade SMPS ensuring stable operation with comprehensive protection.",
    image: vfdImage,
    products: [
      {
        model: "DRP-24V Series",
        specs: "24VDC, 60-960W",
        image: vfdImage,
        features: ["DIN rail mount", "89% efficiency", "Wide input range"],
        applications: "Industrial control panels, automation systems"
      },
      {
        model: "PMT-12V Series",
        specs: "12VDC, 15-100W",
        image: vfdImage,
        features: ["Compact size", "Low ripple", "Overload protection"],
        applications: "Small devices, embedded systems, sensors"
      },
      {
        model: "PMC-48V Series",
        specs: "48VDC, 120-480W",
        image: vfdImage,
        features: ["High reliability", "Active PFC", "Parallel operation"],
        applications: "Telecom equipment, server systems, high-power devices"
      },
      {
        model: "DRL-24V Series",
        specs: "24VDC, 240-480W",
        image: vfdImage,
        features: ["Ultra slim", "Metal case", "CE/UL certified"],
        applications: "Space-constrained installations, control cabinets"
      }
    ]
  }
];

const Products = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const handleCategoryClick = (categoryId: string) => {
    navigate(`/product-list?category=${categoryId}`);
  };

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
    <section
      id="products"
      ref={sectionRef}
      className="relative h-screen w-full bg-cover bg-center overflow-hidden snap-start snap-always"
      style={{ backgroundImage: `url(${industrialBg})` }}
    >
      
      {/* Responsive Layout - Overflow Fixed */}
      <div className="absolute left-2 sm:left-4 md:left-6 lg:left-8 top-3 sm:top-6 md:top-8 lg:top-12 bottom-3 sm:bottom-6 md:bottom-8 lg:bottom-12 z-20 flex flex-col justify-between max-w-[240px] sm:max-w-[300px] md:max-w-[360px] lg:max-w-[400px] xl:max-w-[440px]">
        
        {/* Title and Description - Compact */}
        <div className="text-left flex-shrink-0">
          <h1 className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tight text-white drop-shadow-md mb-1 xs:mb-1.5 sm:mb-2 md:mb-3 leading-tight">
            Our Products
          </h1>
          <p className="text-[9px] xs:text-[10px] sm:text-xs md:text-sm lg:text-base xl:text-lg text-gray-100 drop-shadow-sm mb-2 xs:mb-3 sm:mb-4 md:mb-6 leading-snug">
            Click any category to explore our Delta Electronics automation solutions
          </p>
        </div>

        {/* Responsive Category List - Overflow Safe */}
        <div className="flex-1 flex flex-col justify-center gap-1 xs:gap-1.5 sm:gap-2 md:gap-2.5 min-h-0 overflow-hidden">
          {allProductsData.map((category, index) => {
            // Icon mapping for each product category
            const categoryIcons = [
              { icon: Zap, color: "from-blue-500 to-cyan-500", glow: "shadow-blue-500/30" },
              { icon: Cog, color: "from-green-500 to-emerald-500", glow: "shadow-green-500/30" },
              { icon: Monitor, color: "from-purple-500 to-violet-500", glow: "shadow-purple-500/30" },
              { icon: Cpu, color: "from-orange-500 to-red-500", glow: "shadow-orange-500/30" },
              { icon: Battery, color: "from-yellow-500 to-amber-500", glow: "shadow-yellow-500/30" }
            ];
            
            const iconData = categoryIcons[index] || categoryIcons[0];
            const IconComponent = iconData.icon;
            
            return (
              <button
                key={category.categoryId}
                onClick={() => handleCategoryClick(category.categoryId)}
                className={`reveal relative w-full overflow-hidden backdrop-blur-md rounded-lg sm:rounded-xl md:rounded-2xl transition-all duration-500 bg-gradient-to-r from-white/15 to-white/5 text-white shadow-lg hover:shadow-xl ${iconData.glow} border border-white/20`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Animated Background Gradient with Dynamic Opacity */}
                <div className={`absolute inset-0 bg-gradient-to-r ${iconData.color} opacity-0`}></div>
                
                {/* Pulsing Ring Effect with Enhanced Animation */}
                <div className="absolute inset-0 rounded-lg sm:rounded-xl md:rounded-2xl border-2 border-white/0"></div>
                
                {/* Ripple Effect on Click */}
                <div className="absolute inset-0 rounded-lg sm:rounded-xl md:rounded-2xl bg-white/0 group-active:bg-white/20 transition-all duration-150"></div>
                
                {/* Category Content - Fully Dynamic Relative Design */}
                <div className="relative h-full flex items-center" style={{ padding: 'clamp(0.25rem, 2vw, 1rem)' }}>
                  <div className="flex items-center w-full" style={{ gap: 'clamp(0.25rem, 1.5vw, 1rem)' }}>
                    {/* Icon - Fully Dynamic Relative to Container */}
                    <div 
                      className={`bg-gradient-to-br ${iconData.color} rounded flex items-center justify-center shadow-lg flex-shrink-0`}
                      style={{ 
                        width: 'clamp(1.25rem, 8vw, 3rem)',
                        height: 'clamp(1.25rem, 8vw, 3rem)',
                        borderRadius: 'clamp(0.25rem, 1vw, 0.75rem)'
                      }}
                    >
                      <IconComponent 
                        className="text-white drop-shadow-md" 
                        strokeWidth={2.5} 
                        style={{ 
                          width: 'clamp(0.625rem, 4vw, 1.5rem)',
                          height: 'clamp(0.625rem, 4vw, 1.5rem)'
                        }}
                      />
                    </div>
                    
                    <div className="flex-1 text-left min-w-0 overflow-hidden">
                      {/* Category Name - Fully Dynamic Relative Text */}
                      <h3 
                        className="font-bold text-white leading-tight truncate"
                        style={{ 
                          fontSize: 'clamp(0.625rem, 3vw, 1.125rem)',
                          lineHeight: 'clamp(0.875rem, 4vw, 1.375rem)'
                        }}
                      >
                        {category.category}
                      </h3>
                      
                      {/* Model Count - Dynamic Relative Text */}
                      <p 
                        className="hidden xs:block text-white/70 truncate"
                        style={{ 
                          fontSize: 'clamp(0.5rem, 2.2vw, 0.875rem)',
                          lineHeight: 'clamp(0.75rem, 3vw, 1.25rem)'
                        }}
                      >
                        {category.products.length} Models
                      </p>
                    </div>

                    {/* Arrow Indicator - Dynamic Relative Size */}
                    <div 
                      className="flex items-center justify-center opacity-60 flex-shrink-0"
                      style={{ 
                        width: 'clamp(0.625rem, 4vw, 1.5rem)',
                        height: 'clamp(0.625rem, 4vw, 1.5rem)'
                      }}
                    >
                      <svg 
                        className="text-white drop-shadow-md" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                        style={{ 
                          width: 'clamp(0.375rem, 2.5vw, 1rem)',
                          height: 'clamp(0.375rem, 2.5vw, 1rem)'
                        }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>

                  {/* Enhanced Shimmer Effect with Multiple Layers */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full"></div>
                </div>
              </button>
            );
          })}
        </div>

      </div>

      {/* Delta Electronics Badge - Enhanced Dynamic Badge */}
      <div className="absolute top-3 sm:top-6 md:top-8 lg:top-12 right-3 sm:right-6 md:right-8 lg:right-12 z-20">
        <div className="backdrop-blur-md bg-primary/90 px-1 sm:px-1.5 md:px-2 lg:px-3 xl:px-4 py-0.5 sm:py-0.5 md:py-1 lg:py-1.5 xl:py-2 rounded-full border-2 border-primary shadow-lg shadow-primary/50 cursor-pointer">
          <span className="text-[8px] sm:text-[10px] md:text-[10px] lg:text-xs xl:text-sm font-bold text-white">Delta Electronics Channel Partner</span>
        </div>
      </div>
    </section>
  );
};

export default Products;

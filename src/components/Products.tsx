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
      
      {/* Left Side Layout */}
      <div className="absolute left-6 sm:left-8 md:left-12 top-8 sm:top-12 md:top-16 bottom-8 sm:bottom-12 md:bottom-16 z-20 flex flex-col justify-between max-w-sm lg:max-w-md">
        
        {/* Title and Description - Left Aligned */}
        <div className="text-left">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white drop-shadow-md mb-3 sm:mb-4">
            Our Products
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-100 drop-shadow-sm mb-6 sm:mb-8">
            Click any category to explore our Delta Electronics automation solutions
          </p>
        </div>

        {/* Vertical Category List */}
        <div className="flex-1 flex flex-col justify-center gap-3 sm:gap-4">
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
                className={`reveal group relative w-full overflow-hidden backdrop-blur-md rounded-xl transition-all duration-500 transform hover:scale-105 hover:translate-x-2 bg-gradient-to-r from-white/15 to-white/5 hover:from-white/25 hover:to-white/10 text-white shadow-lg hover:shadow-xl ${iconData.glow} border border-white/20 hover:border-white/40`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Animated Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-r ${iconData.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
                
                {/* Pulsing Ring Effect */}
                <div className="absolute inset-0 rounded-xl border-2 border-white/0 group-hover:border-white/30 transition-all duration-300"></div>
                
                {/* Category Content - Horizontal Layout */}
                <div className="relative px-4 sm:px-5 py-3 sm:py-4">
                  <div className="flex items-center gap-3 sm:gap-4">
                    {/* Icon with Glow Effect */}
                    <div className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br ${iconData.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg flex-shrink-0`}>
                      <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-white" strokeWidth={2.5} />
                    </div>
                    
                    <div className="flex-1 text-left">
                      {/* Category Name */}
                      <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-gray-100 transition-colors duration-300 leading-tight">
                        {category.category}
                      </h3>
                      
                      {/* Model Count */}
                      <p className="text-xs text-white/70 group-hover:text-white/90 transition-colors duration-300">
                        {category.products.length} Models Available
                      </p>
                    </div>

                    {/* Arrow Indicator */}
                    <div className="w-6 h-6 flex items-center justify-center opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>

                  {/* Shimmer Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
                </div>
              </button>
            );
          })}
        </div>

      </div>

      {/* Delta Electronics Badge - Top Right */}
      <div className="absolute top-8 sm:top-12 md:top-16 right-6 sm:right-8 md:right-12 z-20">
        <div className="backdrop-blur-md bg-primary/90 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full border-2 border-primary shadow-lg shadow-primary/50">
          <span className="text-xs sm:text-sm font-bold text-white">Delta Electronics Partner</span>
        </div>
      </div>
    </section>
  );
};

export default Products;

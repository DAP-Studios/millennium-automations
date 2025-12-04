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
      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
      
      {/* Title at Top Center */}
      <div className="absolute top-8 sm:top-12 md:top-16 left-1/2 -translate-x-1/2 text-center px-4 z-20">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white drop-shadow-md mb-3 sm:mb-4">
          Our Products
        </h1>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-100 drop-shadow-sm max-w-3xl mx-auto">
          Click any category to explore our Delta Electronics automation solutions
        </p>
      </div>

      {/* Enhanced Category Capsules at Bottom */}
      <div className="absolute bottom-20 sm:bottom-24 md:bottom-28 left-0 right-0 px-4 sm:px-6 md:px-8 z-20">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 max-h-[calc(100vh-250px)] sm:max-h-none overflow-y-auto sm:overflow-y-visible overflow-x-visible sm:overflow-x-auto scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent pb-2">
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
                className={`group relative w-full sm:w-auto flex-shrink-0 overflow-hidden backdrop-blur-md rounded-xl sm:rounded-2xl transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 bg-gradient-to-br from-white/15 to-white/5 hover:from-white/25 hover:to-white/10 text-white shadow-lg hover:shadow-2xl ${iconData.glow} border border-white/20 hover:border-white/40`}
              >
                {/* Animated Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${iconData.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
                
                {/* Pulsing Ring Effect */}
                <div className="absolute inset-0 rounded-xl sm:rounded-2xl border-2 border-white/0 group-hover:border-white/30 group-hover:animate-pulse transition-all duration-300"></div>
                
                {/* Capsule Content */}
                <div className="relative px-4 sm:px-6 py-3 sm:py-4">
                  <div className="flex flex-col items-center text-center gap-2">
                    {/* Icon with Glow Effect */}
                    <div className={`w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br ${iconData.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <IconComponent className="w-4 h-4 sm:w-5 sm:h-5 text-white" strokeWidth={2.5} />
                    </div>
                    
                    {/* Category Name */}
                    <h3 className="text-xs sm:text-sm font-bold text-white group-hover:text-gray-100 transition-colors duration-300 whitespace-nowrap leading-tight">
                      {category.category}
                    </h3>
                    
                    {/* Subtle Description */}
                    <p className="text-[10px] sm:text-xs text-white/70 group-hover:text-white/90 transition-colors duration-300 opacity-80 group-hover:opacity-100">
                      {category.products.length} Models
                    </p>
                  </div>

                  {/* Shimmer Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Delta Electronics Badge */}
      <div className="absolute top-8 sm:top-12 md:top-16 right-4 sm:right-6 md:right-8 z-10">
        <div className="backdrop-blur-md bg-primary/90 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full border-2 border-primary shadow-lg shadow-primary/50">
          <span className="text-xs sm:text-sm font-bold text-white">Delta Electronics</span>
        </div>
      </div>
    </section>
  );
};

export default Products;

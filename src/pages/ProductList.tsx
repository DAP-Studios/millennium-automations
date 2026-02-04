import { useState, useEffect, useRef } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { ArrowLeft, Search } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { productCategorySEO, SITE_CONFIG } from "@/lib/seoConfig";
import { generateBreadcrumbSchema } from "@/lib/structuredData";
import whatsappIcon from "@/assets/whatsapp.png";

// Import product images
import vfdImage from "@/assets/hero-1.jpg";
import servoImage from "@/assets/hero-1.jpg";
import plcImage from "@/assets/hero-1.jpg";
import smpsImage from "@/assets/hero-1.jpg";

// VFD Images
import elwImg from "@/assets/products/vfd/elw.png";
import me300Img from "@/assets/products/vfd/me300.png";
import cp2000Img from "@/assets/products/vfd/cp2000.png";
import ms300Img from "@/assets/products/vfd/ms300.png";
import mh300Img from "@/assets/products/vfd/mh300.png";
import c2000Img from "@/assets/products/vfd/c2000.png";

// Servo Images
import a2Img from "@/assets/products/servo/a2.png";
import b2Img from "@/assets/products/servo/b2.png";
import b21Img from "@/assets/products/servo/b21.png";
import b3Img from "@/assets/products/servo/b3.png";
import e3Img from "@/assets/products/servo/e3.png";

// HMI Images
import tp04pImg from "@/assets/products/hmi/tp04p.png";
import dop103Img from "@/assets/products/hmi/dop103.png";
import dop107Img from "@/assets/products/hmi/dop107.png";
import dop110Img from "@/assets/products/hmi/dop110.png";
import dop112Img from "@/assets/products/hmi/dop112.png";
import dop115Img from "@/assets/products/hmi/dop115.png";

// PLC Images
import ss2Img from "@/assets/products/plc/ss2.png";
import es3Img from "@/assets/products/plc/es3.png";
import sv2Img from "@/assets/products/plc/sv2.png";
import seImg from "@/assets/products/plc/se.png";
import asImg from "@/assets/products/plc/as.png";
import eh20Img from "@/assets/products/plc/eh20.png";
import dvp15Img from "@/assets/products/plc/dvp15.png";
import dvp50Img from "@/assets/products/plc/dvp50.png";
import dvppmImg from "@/assets/products/plc/dvppm.png";


// SMPS Images
import cliqImg from "@/assets/products/smps/cliq.png";
import cliqmImg from "@/assets/products/smps/cliqm.png";
import forcegtImg from "@/assets/products/smps/forcegt.png";
import ptmImg from "@/assets/products/smps/ptm.png";
import mebImg from "@/assets/products/smps/meb.png";

// Rotary Encoder Images
import esImg from "@/assets/products/rotary/es.png";
import ehImg from "@/assets/products/rotary/eh.png";
import mhmtImg from "@/assets/products/rotary/mhmt.png";
import asahImg from "@/assets/products/rotary/asah.png";

// Vertical Industry Solutions Images
import iedsImg from "@/assets/products/vis/ieds.png";
import hescImg from "@/assets/products/vis/hesc.png";
import ct2000Img from "@/assets/products/vis/ct2000.png";
import vp3000Img from "@/assets/products/vis/vp3000.png";

const allProducts = [

  // Variable Frequency Drives

  {
    category: "Variable Frequency Drives",
    categoryId: "vfd",
    description: "Advanced vector control drives with integrated PLC logic and precision torque management for industrial automation.",
    products: [
      
  {
    model: "EL-W Series",
    specs: "Sensorless Vector Control Compact Drive; 150% overload capacity @ 60s; power ratings approx. 0.2kW–4.0kW",
    image: elwImg,
    features: [
      "Sensorless Vector Control",
      "Built-in PID Control",
      "Multi-speed / Multi-pump Control",
      "RS-485 Modbus Communication",
      "Built-in Protection: Over-current/Over-voltage/Overload",
      "Compact, durable design"
    ],
    applications: "Edge banding machines, logistic conveyors, material handling, constant pressure pumps and general speed control"
  },
  {
    model: "ME300 Series - Basic Compact",
    specs: "Up to 7.5kW, 200% Starting Torque @ 3Hz, -20°C to +50°C",
    image: me300Img,
    features: [
      "Built-in Braking Chopper",
      "STO Safety (SIL2/PL d)",
      "100% Conformal Coating",
      "Vector Control Algorithm"
    ],
    applications: "Conveyor systems, extruders, basic automation with high starting torque requirements"
  },
  {
    model: "CP2000 Series - Fan/Pump Vector",
    specs: "Up to 630kW, Fire Mode, Multi-Pump Control",
    image: cp2000Img,
    features: [
      "Variable Torque Optimization",
      "8-Pump Synchronization",
      "Bypass Function",
      "BACnet Support"
    ],
    applications: "HVAC systems, building automation, water treatment, fire safety pumps"
  },
  {
    model: "MS300 Series - Standard Compact",
    specs: "Up to 22kW, IP66/NEMA 4X, Output up to 1500Hz",
    image: ms300Img,
    features: [
      "IM/IPM/SPM Motor Support",
      "40% Size Reduction",
      "Multiple Communication Cards",
      "High-Speed Operation"
    ],
    applications: "CNC spindles, machine tools, centrifugation processes, wash-down environments"
  },
  {
    model: "MH300 Series - Advanced Compact",
    specs: "Up to 75kW, Closed-Loop PG Cards, 33kHz Pulse Input",
    image: mh300Img,
    features: [
      "Encoder Feedback Support",
      "Tension Control Algorithms",
      "Friction Compensation",
      "Inertia Estimation"
    ],
    applications: "Vertical lifting, tension control, winding applications, precision positioning"
  },
  {
    model: "C2000+ Series - Heavy Duty Vector",
    specs: "Up to 560kW, HD/SHD Rating, 180% Overload 3s",
    image: c2000Img,
    features: [
      "Synchronous Reluctance Motors",
      "Point-to-Point Positioning",
      "Field-Oriented Control",
      "IE5 Efficiency"
    ],
    applications: "Crushers, extruders, heavy machinery, high break-away torque loads"
  }
    ]
  },

 // Servo Motor Systems

  {
  category: "Servo Motor Systems",
  categoryId: "servo",
  description:
    "High-precision AC servo systems offering fast response, smooth motion, and seamless integration with PLC and motion controllers.",
  image: servoImage,
  products: [
    {
      model: "ASDA-A2 Series Servo Drive",
      specs: "High-Performance AC Servo, 1kHz–3.1kHz Response, Full-Closed Loop Support",
      range: "0.1 kW – 15 kW",
      image: a2Img,
      features: [
        "Auto-Tuning & Advanced Vibration Suppression",
        "Full / Semi Closed-Loop Control",
        "High-Speed Position & Torque Control",
        "EtherCAT / CANopen / Analog Options"
      ],
      applications:
        "CNC machines, robotics, semiconductor equipment, high-speed automation"
    },
    {
      model: "ASDA-B2 Series Servo Drive",
      specs: "General Purpose AC Servo, High Resolution Encoder",
      range: "0.1 kW – 3 kW",
      image: b2Img,
      features: [
        "Cost-Effective High Performance",
        "17-bit Absolute Encoder",
        "Smooth Low-Speed Control",
        "Pulse / Analog / Modbus Control"
      ],
      applications:
        "Packaging machines, conveyors, labeling systems, textile machinery"
    },
    {
      model: "ASDA-B2L Series Servo Drive",
      specs: "Compact Economy Servo, Simplified Motion Control",
      range: "0.1 kW – 1 kW",
      image: b21Img,
      features: [
        "Entry-Level Servo Solution",
        "Pulse Train Control",
        "Compact Design",
        "Reduced Wiring & Setup Time"
      ],
      applications:
        "Pick-and-place units, small automation systems, indexing tables"
    },
    {
      model: "ASDA-B3 Series Servo Drive",
      specs: "Ultra-Compact Servo Drive, Easy Integration",
      range: "0.1 kW – 0.75 kW",
      image: b3Img,
      features: [
        "Smallest Footprint",
        "Quick Auto-Tuning",
        "Pulse / Analog Input",
        "Energy Efficient Design"
      ],
      applications:
        "Light-duty automation, medical devices, small assembly machines"
    },
    {
      model: "ASDA-E3 Series EtherCAT Servo Drive",
      specs: "EtherCAT Servo System, Ultra-Low Latency Synchronization",
      range: "0.1 kW – 3 kW",
      image: e3Img,
      features: [
        "EtherCAT Communication",
        "Distributed Clock Synchronization",
        "High-Speed Multi-Axis Control",
        "Excellent Path Accuracy"
      ],
      applications:
        "Synchronized multi-axis systems, robotics, electronic assembly lines"
    }
  ]
},

// Human Machine Interface

  {
    category: "Human Machine Interface",
    categoryId: "hmi",
    description: "Converged HMI-PLC controllers combining visualization with integrated logic control and I/O capabilities.",
    products: [
      {
        model: "TP04P Series - Text Panel HMI-PLC",
        specs: "Monochrome LCD, Physical Function Keys, Integrated PLC",
        image: tp04pImg,
        features: ["User-Definable Keys", "Direct PLC Macro Triggers", "Cost-Effective Design", "Robust Control Logic"],
        applications: "Simple machines, ovens, basic automation where graphics are unnecessary"
      },
  {
    model: "DOP-103BQ Series - Basic Text/Graphic HMI",
    specs: "4.3\" TFT LCD, 480×272 Resolution, USB & RS-232/RS-485",
    image: dop103Img,
    features: [
      "Compact and Cost-Effective Design",
      "Supports Delta PLC Communication",
      "Basic Graphics and Text Display",
      "Easy Configuration with DOPSoft",
      "Multiple Language Support"
    ],
    applications: "Small machines, basic automation panels, compact control systems"
  },
  {
    model: "DOP-107BV Series - Standard Graphic HMI",
    specs: "7\" TFT LCD, 800×480 Resolution, USB Host/Client, Ethernet",
    image: dop107Img,
    features: [
      "High-Resolution Color Display",
      "Ethernet Communication Support",
      "Recipe and Alarm Management",
      "Multi-PLC Connectivity",
      "User-Friendly Touch Interface"
    ],
    applications: "Packaging machines, conveyors, textile machinery, general industrial automation"
  },
  {
    model: "DOP-110WS Series - Advanced Wide Screen HMI",
    specs: "10.1\" TFT LCD, 1024×600 Resolution, Dual Ethernet, USB",
    image: dop110Img,
    features: [
      "Wide-Screen High Brightness Display",
      "Dual Ethernet Ports",
      "Advanced Data Logging",
      "Remote Monitoring Capability",
      "High-Speed Screen Refresh"
    ],
    applications: "Production lines, monitoring dashboards, process automation systems"
  },
  {
    model: "DOP-112MX Series - High-Performance HMI",
    specs: "12.1\" TFT LCD, 1024×768 Resolution, Ethernet, USB, SD Card",
    image: dop112Img,
    features: [
      "Large Industrial-Grade Display",
      "Enhanced Processing Performance",
      "Supports Multiple PLC Brands",
      "Extensive Alarm & History Functions",
      "SCADA-Level Visualization"
    ],
    applications: "Complex machinery, plant-wide monitoring, advanced automation systems"
  },
  {
    model: "DOP-115MX Series - Premium Large Screen HMI",
    specs: "15\" TFT LCD, 1024×768 Resolution, Ethernet, USB, SD Card",
    image: dop115Img,
    features: [
      "Large Viewing Area for Control Rooms",
      "High Reliability Industrial Design",
      "Advanced Security & User Management",
      "Extensive Data Logging & Trends",
      "Multi-Protocol Communication"
    ],
    applications: "Control rooms, large machines, process industries, centralized automation panels"
  }
    ]
  },

  // Programmable Logic Controllers 

  {
  category: "Programmable Logic Controllers & Motion Control",
  categoryId: "plc",
  description:
    "High-performance deterministic logic controllers with integrated motion control and advanced communication capabilities.",
  image: plcImage,
  products: [
    {
      model: "DVP-SS2 Series - Basic Compact PLC",
      specs: "10k Steps Program Capacity, 0.64μs Execution Speed, Up to 32 I/O",
      image: ss2Img,
      features: [
        "Cost-Effective Entry-Level PLC",
        "Built-in High-Speed Counters",
        "Pulse Output for Stepper Control",
        "Multiple Expansion Modules",
        "Reliable Deterministic Control"
      ],
      applications:
        "Basic machine automation, small conveyors, packaging machines, OEM panels"
    },
    {
      model: "DVP-ES3 Series - Third Generation",
      specs: "64k Steps, 25ns Execution Speed, AS-Series Core",
      image: es3Img,
      features: [
        "40x Speed Improvement",
        "Native Ethernet & CANopen",
        "4-Axis 200kHz Pulse Output",
        "High-Throughput Processing"
      ],
      applications:
        "High-speed packaging lines, servo control, complex machine networks"
    },
    {
      model: "DVP-SV2 Series - Slim High Performance PLC",
      specs: "30k Steps, 0.24μs Execution, Linear/Arc Interpolation",
      image: sv2Img,
      features: [
        "Compact Slim Design",
        "2-Axis Motion Control",
        "CNC-Level Motion Instructions",
        "High-Speed Pulse Output"
      ],
      applications:
        "Space-constrained installations, 2-axis motion control, cutting and positioning systems"
    },
    {
      model: "DVP-SE Series - Slim Network PLC",
      specs: "16k Steps, Built-in Ethernet, Mini-USB, 0.64μs Execution",
      image: seImg,
      features: [
        "Built-in Ethernet Port",
        "Remote Programming & Monitoring",
        "Transparent Network Gateway",
        "Distributed Control Capability"
      ],
      applications:
        "Remote monitoring, distributed automation, gateway applications, network integration"
    },

    /* 🔹 Motion Controllers (Added with Images) */

    {
      model: "DVP-15MC Motion Controller",
      specs: "CANopen DS402, Up to 24 Real Axes, <1µs Jitter",
      image: dvp15Img, // dvp15.png
      features: [
        "Deterministic CANopen Motion",
        "Electronic Cam (E-Cam)",
        "Multi-Axis Interpolation",
        "High-Speed Synchronization"
      ],
      applications:
        "Multi-axis printing machines, robotics, synchronized production lines"
    },
    {
      model: "DVP-50MC EtherCAT Motion Controller",
      specs: "EtherCAT Master, 20MB Motion Data, Ultra-Fast Sync",
      image: dvp50Img, // dvp50.png
      features: [
        "EtherCAT Distributed Clock",
        "High-Speed Multi-Axis Control",
        "Advanced Motion Algorithms",
        "Non-Linear Motion Profiles"
      ],
      applications:
        "CNC systems, coordinated robotic cells, high-precision packaging automation"
    },
    {
      model: "DVP-PM Pulse Motion Controller",
      specs: "1MHz Pulse Output, Differential Signaling",
      image: dvppmImg, // dvppm.png
      features: [
        "High-Frequency Pulse Train Output",
        "Differential Signaling for Noise Immunity",
        "Servo & Stepper Drive Interface",
        "Stable High-Speed Positioning"
      ],
      applications:
        "High-speed positioning systems, servo amplifiers, EMI-sensitive environments"
    },

    {
      model: "AS Series - Modular Advanced PLC",
      specs: "Up to 128k Steps, Multi-Core CPU, EtherCAT Motion Control",
      image: asImg,
      features: [
        "High-Speed Backplane Architecture",
        "Multi-Axis Synchronized Motion",
        "EtherCAT / PROFINET Support",
        "Hot-Swap I/O Modules"
      ],
      applications:
        "High-end automation systems, multi-axis motion, robotics, complex production lines"
    },
    {
      model: "EH Series - Redundant High-End PLC",
      specs: "Up to 256k Steps, CPU Redundancy, High Availability Architecture",
      image: eh20Img,
      features: [
        "Redundant CPU & Power Modules",
        "High Reliability for Critical Systems",
        "Advanced Diagnostics",
        "Industrial Network Integration"
      ],
      applications:
        "Critical infrastructure, continuous process industries, power plants, high-availability systems"
    }
  ]
}
,

 // Switched-Mode Power Supplies

  {
    category: "Industrial Power Supply Systems",
    categoryId: "smps",
    description: "Advanced power supplies with integrated diagnostics, marine certifications, and specialized industry compliance.",
    image: smpsImage,
    products: [
      {
        model: "CliQ M Series - Premium Marine",
        specs: "DIN Rail Mount, Advanced Power Boost 150% for 5s, -25°C to +70°C",
        image: cliqImg,
        features: ["DNV GL Marine Certification", "Inductive Load Starting", "Maritime Environment Ready", "Heavy Industrial Grade"],
        applications: "Marine automation, heavy industry, large contactor starting, offshore platforms"
      },
      {
        model: "CliQ VA Series - Visual Diagnostics",
        specs: "DIN Rail Mount, Integrated LCD Display, Real-Time Monitoring",
        image: cliqmImg,
        features: ["Built-in LCD Display", "Voltage/Current/Temperature Display", "Rapid Diagnostics", "No External Meter Required"],
        applications: "Maintenance-friendly installations, diagnostic-critical systems, troubleshooting applications"
      },
      {
        model: "Force-GT Series - Ultra-Efficient",
        specs: "Ultra-Slim Form Factor, 80+ Efficiency, -25°C to +70°C",
        image: forcegtImg,
        features: ["Space-Saving Design", "Constant Current Circuit", "Charging Applications", "Wide Temperature Range"],
        applications: "DIN rail space optimization, battery charging systems, extreme temperature environments"
      },
      {
        model: "PMT2 Series - Consumer Safety",
        specs: "Panel Mount, 30mm Ultra-Low Profile, IEC 60335 Compliant",
        image: ptmImg,
        features: ["Household Appliance Standard", "Consumer Safety Certified", "Low Profile Design", "Universal Mounting"],
        applications: "Vending machines, coffee makers, consumer-facing equipment, appliance integration"
      },
      {
        model: "MEB Series - Medical Grade",
        specs: "Medical Certified, Low Leakage Current, Patient Safety",
        image: mebImg,
        features: ["Medical Environment Certified", "Ultra-Low Leakage", "Patient Safety Standards", "Hospital Grade Reliability"],
        applications: "Medical devices, hospital equipment, patient-connected systems, healthcare automation"
      }
    ]
  },

// Rotary Optical Encoders & Feedback Devices

  {
    category: "Rotary Optical Encoders & Feedback",
    categoryId: "encoders",
    description: "Precision feedback devices for closed-loop motion control with incremental, absolute, and servo commutation capabilities.",
    image: servoImage,
    products: [
      {
        model: "ES Series - Incremental Solid Shaft",
        specs: "36.6mm & 50mm OD, 100-2500 PPR, 6mm/8mm Shaft",
        image: esImg,
        features: ["Line Driver Differential Output", "Flexible Coupling Compatible", "Vibration Isolation", "Multiple Output Stages"],
        applications: "General purpose positioning, motor feedback, conveyor tracking, speed measurement"
      },
      {
        model: "EH Series - Incremental Hollow Shaft",
        specs: "8mm Hollow Bore, Direct Motor Mount, Space-Saving Design",
        image: ehImg,
        features: ["Direct Shaft Mounting", "No Coupling Required", "Compact Installation", "High Noise Immunity"],
        applications: "Direct motor feedback, space-constrained applications, servo motor integration"
      },
      {
        model: "MH/MT Series - Servo Commutation",
        specs: "Motor Integration, U/V/W Commutation Signals, 85°C/100°C Operation",
        image: mhmtImg,
        features: ["Magnetic Pole Position Sensing", "Immediate Startup Capability", "High Temperature Rated", "Phase Sequence Generation"],
        applications: "PM servo motor commutation, brushless motor control, high-precision servo systems"
      },
      {
        model: "AS/AH Series - Absolute Position",
        specs: "Gray Code Output, 5-12 bit Resolution, Power Loss Recovery",
        image: asahImg,
        features: ["Absolute Position Memory", "No Homing Required", "Gray Code Error Prevention", "Single Bit Transition"],
        applications: "Robotic arms, multi-turn applications, position-critical systems, automated machinery"
      }
    ]
  },
  {
    category: "Vertical Industry Solutions",
    categoryId: "solutions",
    description: "Integrated system solutions combining drives, PLCs, and specialized logic for specific industries.",
    image: vfdImage,
    products: [
      {
        model: "IED-S Elevator System",
        specs: "Integrated VFD + Elevator Logic, EnDat/Sin-Cos Support, 8-Car Group Control",
        image: iedsImg,
        features: ["Direct Encoder Interface", "Floor Positioning Logic", "Door Control Integration", "Group Management"],
        applications: "Elevator systems, vertical transportation, building automation, lift modernization"
      },
      {
        model: "HES-C Injection Molding System",
        specs: "VFD-VJ Hybrid Servo + MST Motor + Hydraulic Controller",
        image: hescImg,
        features: ["Hydraulic Pressure Control", "Energy Saving Design", "Precise Flow Management", "Molding Cycle Optimization"],
        applications: "Injection molding machines, plastic manufacturing, automotive parts, precision molding"
      },
      {
        model: "CT2000 Textile Drive",
        specs: "Flange Mount Design, External Heatsink, Lint-Resistant Cooling",
        image: ct2000Img,
        features: ["Lint Accumulation Prevention", "External Heat Dissipation", "Textile Environment Optimized", "Multi-Speed Control"],
        applications: "Spinning mills, weaving machines, textile manufacturing, fiber processing"
      },
      {
        model: "VP3000/CP2000 Fluid Power System",
        specs: "Multi-Pump Sequencing, Analog Pressure Control, Constant System Pressure",
        image: vp3000Img,
        features: ["8-Pump Coordination", "Pressure Sensor Integration", "Runtime Equalization", "Automatic Sequencing"],
        applications: "Water treatment plants, HVAC systems, municipal pumping, pressure boosting stations"
      }
    ]
  }
];

const ProductList = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get("category");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>(categoryParam || allProducts[0].categoryId);
  const categoryScrollRef = useRef<HTMLDivElement>(null);

  // Update selected category when URL parameter changes
  useEffect(() => {
    if (categoryParam) {
      setSelectedCategory(categoryParam);
    }
  }, [categoryParam]);

  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategory(categoryId);
    setSearchParams({ category: categoryId });
  };

  const scrollCategories = (direction: "left" | "right") => {
    const el = categoryScrollRef.current;
    if (!el) return;
    const amount = 180;
    el.scrollBy({ left: direction === "left" ? -amount : amount, behavior: "smooth" });
  };

  const filteredProducts = allProducts.filter(cat => {
    // Always filter by selected category
    if (cat.categoryId !== selectedCategory) return false;
    
    // Then apply search filter if search term exists
    if (searchTerm) {
      const search = searchTerm.toLowerCase();
      return cat.category.toLowerCase().includes(search) ||
        cat.products.some(p => 
          p.model.toLowerCase().includes(search) ||
          p.specs.toLowerCase().includes(search) ||
          p.applications.toLowerCase().includes(search)
        );
    }
    return true;
  });

  const totalProducts = filteredProducts.reduce((sum, cat) => sum + cat.products.length, 0);

  // Get SEO configuration for current category
  const categorySEO = productCategorySEO[selectedCategory] || productCategorySEO.vfd;
  const categoryLabel = allProducts.find((c) => c.categoryId === selectedCategory)?.category ?? selectedCategory;
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: `${SITE_CONFIG.url}/` },
    { name: "Products", url: `${SITE_CONFIG.url}/product-list` },
    { name: categoryLabel, url: categorySEO.canonical ?? `${SITE_CONFIG.url}/product-list?category=${selectedCategory}` },
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <SEO
        title={categorySEO.title}
        description={categorySEO.description}
        keywords={categorySEO.keywords}
        canonical={categorySEO.canonical}
        ogType={categorySEO.ogType}
        structuredData={breadcrumbSchema}
      />
      <Header />
      
      <main className="pt-20 sm:pt-24 pb-12 sm:pb-16">
        <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          {/* Header Section - Responsive */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-0 mb-3 sm:mb-4">
            <button 
              onClick={() => {
                window.location.href = '/#products';
                setTimeout(() => {
                  const element = document.getElementById('products');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }, 100);
              }}
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm font-semibold">Back to Products</span>
            </button>
            <span className="text-sm text-muted-foreground font-medium">{totalProducts} Products</span>
          </div>

          {/* Search Bar and Category Filter - Responsive */}
          <div className="mb-3 sm:mb-4 space-y-2 sm:space-y-3">
            {/* Search Bar */}
            <div className="relative max-w-full sm:max-w-xl">
              <Search className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 w-3 h-3 sm:w-4 sm:h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-8 sm:pl-10 pr-3 sm:pr-4 py-2 sm:py-2.5 rounded-lg border border-slate-300 focus:border-primary focus:outline-none text-xs sm:text-sm"
              />
            </div>

            {/* Category Buttons - Responsive Scrolling */}
            <div className="flex items-center gap-2 sm:block">
              <button
                type="button"
                onClick={() => scrollCategories("left")}
                className="sm:hidden h-7 w-7 rounded-full bg-white/90 border border-slate-200 shadow-sm text-slate-700"
                aria-label="Scroll categories left"
              >
                ‹
              </button>
              <div
                ref={categoryScrollRef}
                className="min-w-0 flex-1 flex flex-nowrap sm:flex-wrap gap-1 sm:gap-2 overflow-x-auto sm:overflow-visible pb-2 sm:pb-0 scrollbar-hide"
              >
                {allProducts.map((cat) => (
                  <button
                    key={cat.categoryId}
                    onClick={() => handleCategoryChange(cat.categoryId)}
                    className={`px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg text-xs font-semibold transition-all whitespace-nowrap flex-shrink-0 ${
                      selectedCategory === cat.categoryId
                        ? 'bg-primary text-white shadow-md'
                        : 'bg-white border border-slate-200 text-muted-foreground hover:border-primary'
                    }`}
                  >
                    {cat.category}
                  </button>
                ))}
              </div>
              <button
                type="button"
                onClick={() => scrollCategories("right")}
                className="sm:hidden h-7 w-7 rounded-full bg-white/90 border border-slate-200 shadow-sm text-slate-700"
                aria-label="Scroll categories right"
              >
                ›
              </button>
            </div>
          </div>

          {/* Products List - Fully Responsive */}
          {filteredProducts.length > 0 ? (
            <div className="space-y-2 sm:space-y-3">
              {filteredProducts.map((category) => (
                <div key={category.categoryId}>
                  {category.products.map((product, index) => (
                    <div
                      key={index}
                      className="bg-white border border-slate-200 hover:border-primary/50 rounded-lg overflow-hidden transition-all duration-200 hover:shadow-lg group mb-2 sm:mb-3 flex flex-col sm:h-96"
                    >
                      <div className="flex flex-col sm:flex-row h-full">
                        {/* Product Image - Responsive */}
                        <div className="w-full sm:w-1/2 h-40 sm:h-full relative overflow-hidden flex-shrink-0 bg-slate-50 flex items-center justify-center">
                          <img
                            src={product.image}
                            alt={product.model}
                            className="w-auto h-auto max-w-[95%] max-h-[95%] object-contain group-hover:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute top-1 left-1 sm:top-2 sm:left-2 w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 bg-primary/90 backdrop-blur-sm rounded-lg flex items-center justify-center">
                            <span className="text-xs font-bold text-white">
                              {String(index + 1).padStart(2, '0')}
                            </span>
                          </div>
                        </div>

                        {/* Product Details - Responsive */}
                        <div className="flex-1 p-3 sm:p-4 sm:w-1/2 flex flex-col justify-between">
                          <div className="flex flex-col gap-2 sm:gap-3">
                            <div className="flex-1">
                              {/* Category Badge - Mobile Optimized */}
                              <div className="flex items-center gap-2 mb-1 sm:mb-2">
                                <span className="text-xs font-semibold text-primary/70 uppercase tracking-wide">
                                  {category.category}
                                </span>
                              </div>
                              
                              {/* Model - Responsive */}
                              <h3 className="text-sm sm:text-base md:text-lg font-bold text-primary mb-1 group-hover:text-blue-600 transition-colors line-clamp-2">
                                {product.model}
                              </h3>
                              
                              {/* Specs - Responsive */}
                              <p className="text-xs sm:text-sm text-muted-foreground font-medium mb-2 sm:mb-3 line-clamp-2 sm:line-clamp-none">
                                {product.specs}
                              </p>

                              <div className="grid grid-cols-1 gap-2 sm:gap-3">
                                {/* Features - Mobile Optimized */}
                                <div>
                                  <p className="text-xs font-semibold text-slate-700 mb-1 sm:mb-1.5">Features</p>
                                  <ul className="space-y-0.5 sm:space-y-1">
                                    {product.features.slice(0, 2).map((feature, idx) => (
                                      <li key={idx} className="flex items-start gap-1 sm:gap-1.5 text-xs text-muted-foreground">
                                        <span className="w-1 h-1 bg-primary rounded-full mt-1.5 flex-shrink-0"></span>
                                        <span className="line-clamp-1 sm:line-clamp-none">{feature}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>

                                {/* Applications */}
                                <div className="w-full">
                                  <p className="text-xs font-semibold text-slate-700 mb-1.5">Applications</p>
                                  <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2 sm:line-clamp-3">
                                    {product.applications}
                                  </p>
                                </div>
                              </div>
                            </div>

                            {/* Contact Buttons - Responsive */}
                            <div className="flex gap-2 mt-3 w-full">
                              <a
                                href={`mailto:millenniumautomationsystem@gmail.com?subject=Inquiry - ${product.model}&body=${encodeURIComponent(`Hi,\n\nI'm interested in learning more about the following product:\n\nProduct: ${product.model}\nCategory: ${category.category}\n\nSpecifications:\n${product.specs}\n\nKey Features:\n${product.features.join('\n')}\n\nApplications:\n${product.applications}\n\nPlease provide more information and pricing details.\n\nThank you`)}`}
                                className="flex-1 inline-flex items-center justify-center px-2 sm:px-3 py-2 bg-primary hover:bg-primary/90 text-white text-xs sm:text-sm font-semibold rounded-full transition-all whitespace-nowrap"
                              >
                                📧 Quote
                              </a>
                              <a
                                href={`https://wa.me/919904003445?text=Hi,%20I'm%20interested%20in%20the%20${encodeURIComponent(product.model)}%20from%20the%20${encodeURIComponent(category.category)}%20category.%0A%0AProduct:%20${encodeURIComponent(product.model)}%0A%0ASpecifications:%0A${encodeURIComponent(product.specs)}%0A%0AFeatures:%0A${encodeURIComponent(product.features.join(', '))}%0A%0AApplications:%0A${encodeURIComponent(product.applications)}%0A%0APlease provide more information and pricing.%20Thank%20you!`}
                                target="_blank"
                                rel="noreferrer"
                                className="flex-1 inline-flex items-center justify-center px-2 sm:px-3 py-2 bg-green-600 hover:bg-green-700 text-white text-xs sm:text-sm font-semibold rounded-full transition-all"
                              >
                                <img src={whatsappIcon} alt="WhatsApp" className="w-4 h-4" />
                                <span className="ml-1">WhatsApp</span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <p className="text-muted-foreground">No products found</p>
            </div>
          )}

          {/* Contact Section - Responsive */}
          <div className="mt-6 sm:mt-8 bg-white border border-slate-200 rounded-lg p-4 sm:p-6">
            <h3 className="text-base sm:text-lg font-bold text-primary mb-2 sm:mb-3">Need Assistance?</h3>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
              <a
                href="tel:+919904003445"
                className="inline-flex items-center justify-center px-3 sm:px-4 py-2 bg-primary hover:bg-primary/90 text-white text-xs sm:text-sm font-semibold rounded-lg transition-all"
              >
                📞 Call
              </a>
              <a
                href="https://wa.me/919904003445"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center px-3 sm:px-4 py-2 bg-green-600 hover:bg-green-700 text-white text-xs sm:text-sm font-semibold rounded-lg transition-all"
              >
                💬 WhatsApp
              </a>
              <a
                href="mailto:millenniumautomationsystem@gmail.com"
                className="inline-flex items-center justify-center px-3 sm:px-4 py-2 border border-primary text-primary hover:bg-primary/10 text-xs sm:text-sm font-semibold rounded-lg transition-all"
              >
                ✉️ Email
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProductList;

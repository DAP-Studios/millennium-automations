import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { ArrowLeft, Search } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { productCategorySEO } from "@/lib/seoConfig";
import whatsappIcon from "@/assets/whatsapp.png";

// Import product images
import vfdImage from "@/assets/hero-1.jpg";
import servoImage from "@/assets/hero-1.jpg";

import plcImage from "@/assets/hero-1.jpg";
import smpsImage from "@/assets/hero-1.jpg";

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
    image: "src/assets/products/vfd/elw.png",
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
    image: "src/assets/products/vfd/me300.png",
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
    image: "src/assets/products/vfd/cp2000.png",
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
    image: "src/assets/products/vfd/ms300.png",
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
    image: "src/assets/products/vfd/mh300.png",
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
    image: "src/assets/products/vfd/c2000.png",
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

 // Servo Motor Systems & Motion Control

  {
    category: "Servo Motor Systems & Motion Control",
    categoryId: "servo",
    description: "Precision servo drives and motion controllers with deterministic communication for synchronized multi-axis control.",
    image: servoImage,
    products: [
      // {
      //   model: "ASDA-H3 Multi-Axis Servo",
      //   specs: "High-Power Multi-Axis, Common DC Bus, Energy Regeneration",
      //   image: servoImage,
      //   features: ["Common DC Bus Design", "Energy Recovery", "Multi-Axis Synchronization", "Injection Molding Optimized"],
      //   applications: "Injection molding machines, clamping units, cyclical acceleration/deceleration systems"
      // },
      {
        model: "DVP-15MC Motion Controller",
        specs: "CANopen Motion (DS402), Up to 24 Real Axes, <1µs Jitter",
        image: "src/assets/products/servo/dvp15.png",
        features: ["Deterministic Communication", "Electronic Cam (E-Cam)", "Complex Motion Profiles", "CANopen Protocol"],
        applications: "Multi-axis printing, robotics, synchronized manufacturing lines"
      },
      {
        model: "DVP-50MC EtherCAT Controller",
        specs: "EtherCAT Protocol, 20MB Data Capacity, High-Speed Sync",
        image: "src/assets/products/servo/dvp50.png",
        features: ["EtherCAT Master", "Real-Time Synchronization", "Advanced Motion Control", "Non-Linear Profiles"],
        applications: "High-precision CNC systems, coordinated robotic cells, packaging automation"
      },
      {
        model: "DVP-PM Pulse Motion Controller",
        specs: "1MHz Output Frequency, High-Speed Differential Signaling",
        image: "src/assets/products/servo/dvppm.png",
        features: ["Pulse Train Generation", "Differential Signaling", "EMI Immunity", "Servo Drive Interface"],
        applications: "High-speed positioning, servo amplifier control, noise-critical environments"
      }
    ]
  },

  // Human Machine Interface with PLC

  {
    category: "Human Machine Interface with PLC",
    categoryId: "hmi",
    description: "Converged HMI-PLC controllers combining visualization with integrated logic control and I/O capabilities.",
    products: [
      {
        model: "TP04P Series - Text Panel HMI-PLC",
        specs: "Monochrome LCD, Physical Function Keys, Integrated PLC",
        image: "src/assets/products/hmi/tp04p.png",
        features: ["User-Definable Keys", "Direct PLC Macro Triggers", "Cost-Effective Design", "Robust Control Logic"],
        applications: "Simple machines, ovens, basic automation where graphics are unnecessary"
      },
  {
    model: "DOP-103BQ Series - Basic Text/Graphic HMI",
    specs: "4.3\" TFT LCD, 480×272 Resolution, USB & RS-232/RS-485",
    image: "src/assets/products/hmi/dop103.png",
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
    image: "src/assets/products/hmi/dop107.png",
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
    image: "src/assets/products/hmi/dop110.png",
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
    image: "src/assets/products/hmi/dop112.png",
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
    image: "src/assets/products/hmi/dop115.png",
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
  category: "Programmable Logic Controllers",
  categoryId: "plc",
  description: "High-performance deterministic logic controllers with integrated motion control and advanced communication capabilities.",
  image: plcImage,
  products: [
    {
      model: "DVP-SS2 Series - Basic Compact PLC",
      specs: "10k Steps Program Capacity, 0.64μs Execution Speed, Up to 32 I/O",
      image: "src/assets/products/plc/ss2.png",
      features: [
        "Cost-Effective Entry-Level PLC",
        "Built-in High-Speed Counters",
        "Pulse Output for Stepper Control",
        "Multiple Expansion Modules",
        "Reliable Deterministic Control"
      ],
      applications: "Basic machine automation, small conveyors, packaging machines, OEM panels"
    },
    {
      model: "DVP-ES3 Series - Third Generation",
      specs: "64k Steps, 25ns Execution Speed, AS-Series Core",
      image: "src/assets/products/plc/es3.png",
      features: [
        "40x Speed Improvement",
        "Native Ethernet & CANopen",
        "4-Axis 200kHz Pulse Output",
        "High-Throughput Processing"
      ],
      applications: "High-speed packaging lines, servo control, complex machine networks"
    },
    {
      model: "DVP-SV2 Series - Slim High Performance PLC",
      specs: "30k Steps, 0.24μs Execution, Linear/Arc Interpolation",
      image: "src/assets/products/plc/sv2.png",
      features: [
        "Compact Slim Design",
        "2-Axis Motion Control",
        "CNC-Level Motion Instructions",
        "High-Speed Pulse Output"
      ],
      applications: "Space-constrained installations, 2-axis motion control, cutting and positioning systems"
    },
    {
      model: "DVP-SE Series - Slim Network PLC",
      specs: "16k Steps, Built-in Ethernet, Mini-USB, 0.64μs Execution",
      image: "src/assets/products/plc/se.png",
      features: [
        "Built-in Ethernet Port",
        "Remote Programming & Monitoring",
        "Transparent Network Gateway",
        "Distributed Control Capability"
      ],
      applications: "Remote monitoring, distributed automation, gateway applications, network integration"
    },
    {
      model: "AS Series - Modular Advanced PLC",
      specs: "Up to 128k Steps, Multi-Core CPU, EtherCAT Motion Control",
      image: "src/assets/products/plc/as.png",
      features: [
        "High-Speed Backplane Architecture",
        "Multi-Axis Synchronized Motion",
        "EtherCAT / PROFINET Support",
        "Hot-Swap I/O Modules"
      ],
      applications: "High-end automation systems, multi-axis motion, robotics, complex production lines"
    },
    {
      model: "EH Series - Redundant High-End PLC",
      specs: "Up to 256k Steps, CPU Redundancy, High Availability Architecture",
      image: "src/assets/products/plc/eh20.png",
      features: [
        "Redundant CPU & Power Modules",
        "High Reliability for Critical Systems",
        "Advanced Diagnostics",
        "Industrial Network Integration"
      ],
      applications: "Critical infrastructure, continuous process industries, power plants, high-availability systems"
    }
  ]
},

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
        image: "src/assets/products/smps/cliq.png",
        features: ["DNV GL Marine Certification", "Inductive Load Starting", "Maritime Environment Ready", "Heavy Industrial Grade"],
        applications: "Marine automation, heavy industry, large contactor starting, offshore platforms"
      },
      {
        model: "CliQ VA Series - Visual Diagnostics",
        specs: "DIN Rail Mount, Integrated LCD Display, Real-Time Monitoring",
        image: "src/assets/products/smps/cliqm.png",
        features: ["Built-in LCD Display", "Voltage/Current/Temperature Display", "Rapid Diagnostics", "No External Meter Required"],
        applications: "Maintenance-friendly installations, diagnostic-critical systems, troubleshooting applications"
      },
      {
        model: "Force-GT Series - Ultra-Efficient",
        specs: "Ultra-Slim Form Factor, 80+ Efficiency, -25°C to +70°C",
        image: "src/assets/products/smps/forcegt.png",
        features: ["Space-Saving Design", "Constant Current Circuit", "Charging Applications", "Wide Temperature Range"],
        applications: "DIN rail space optimization, battery charging systems, extreme temperature environments"
      },
      {
        model: "PMT2 Series - Consumer Safety",
        specs: "Panel Mount, 30mm Ultra-Low Profile, IEC 60335 Compliant",
        image: "src/assets/products/smps/ptm.png",
        features: ["Household Appliance Standard", "Consumer Safety Certified", "Low Profile Design", "Universal Mounting"],
        applications: "Vending machines, coffee makers, consumer-facing equipment, appliance integration"
      },
      {
        model: "MEB Series - Medical Grade",
        specs: "Medical Certified, Low Leakage Current, Patient Safety",
        image: "src/assets/products/smps/meb.png",
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
        image: "src/assets/products/rotary/es.png",
        features: ["Line Driver Differential Output", "Flexible Coupling Compatible", "Vibration Isolation", "Multiple Output Stages"],
        applications: "General purpose positioning, motor feedback, conveyor tracking, speed measurement"
      },
      {
        model: "EH Series - Incremental Hollow Shaft",
        specs: "8mm Hollow Bore, Direct Motor Mount, Space-Saving Design",
        image: "src/assets/products/rotary/eh.png",
        features: ["Direct Shaft Mounting", "No Coupling Required", "Compact Installation", "High Noise Immunity"],
        applications: "Direct motor feedback, space-constrained applications, servo motor integration"
      },
      {
        model: "MH/MT Series - Servo Commutation",
        specs: "Motor Integration, U/V/W Commutation Signals, 85°C/100°C Operation",
        image: "src/assets/products/rotary/mhmt.png",
        features: ["Magnetic Pole Position Sensing", "Immediate Startup Capability", "High Temperature Rated", "Phase Sequence Generation"],
        applications: "PM servo motor commutation, brushless motor control, high-precision servo systems"
      },
      {
        model: "AS/AH Series - Absolute Position",
        specs: "Gray Code Output, 5-12 bit Resolution, Power Loss Recovery",
        image: "src/assets/products/rotary/asah.png",
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
        image: "src/assets/products/vis/ieds.png",
        features: ["Direct Encoder Interface", "Floor Positioning Logic", "Door Control Integration", "Group Management"],
        applications: "Elevator systems, vertical transportation, building automation, lift modernization"
      },
      {
        model: "HES-C Injection Molding System",
        specs: "VFD-VJ Hybrid Servo + MST Motor + Hydraulic Controller",
        image: "src/assets/products/vis/hesc.png",
        features: ["Hydraulic Pressure Control", "Energy Saving Design", "Precise Flow Management", "Molding Cycle Optimization"],
        applications: "Injection molding machines, plastic manufacturing, automotive parts, precision molding"
      },
      {
        model: "CT2000 Textile Drive",
        specs: "Flange Mount Design, External Heatsink, Lint-Resistant Cooling",
        image: "src/assets/products/vis/ct2000.png",
        features: ["Lint Accumulation Prevention", "External Heat Dissipation", "Textile Environment Optimized", "Multi-Speed Control"],
        applications: "Spinning mills, weaving machines, textile manufacturing, fiber processing"
      },
      {
        model: "VP3000/CP2000 Fluid Power System",
        specs: "Multi-Pump Sequencing, Analog Pressure Control, Constant System Pressure",
        image: "src/assets/products/vis/vp3000.png",
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <SEO
        title={categorySEO.title}
        description={categorySEO.description}
        keywords={categorySEO.keywords}
        canonical={categorySEO.canonical}
        ogType={categorySEO.ogType}
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
            <div className="flex flex-nowrap sm:flex-wrap gap-1 sm:gap-2 overflow-x-auto sm:overflow-visible pb-2 sm:pb-0 scrollbar-hide">
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
          </div>

          {/* Products List - Fully Responsive */}
          {filteredProducts.length > 0 ? (
            <div className="space-y-2 sm:space-y-3">
              {filteredProducts.map((category) => (
                <div key={category.categoryId}>
                  {category.products.map((product, index) => (
                    <div
                      key={index}
                      className="bg-white border border-slate-200 hover:border-primary/50 rounded-lg overflow-hidden transition-all duration-200 hover:shadow-lg group mb-2 sm:mb-3 h-96"
                    >
                      <div className="flex flex-col sm:flex-row h-full">
                        {/* Product Image - Responsive */}
                        <div className="w-full sm:w-1/2 h-64 sm:h-full relative overflow-hidden flex-shrink-0 bg-white flex items-center p-1 justify-center">
                          <img
                            src={product.image}
                            alt={product.model}
                            className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
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
                              <p className="text-xs text-muted-foreground font-medium mb-2 sm:mb-3 line-clamp-2 sm:line-clamp-none">
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

                                {/* Applications - Hide on Small Mobile */}
                                <div className="w-full">
                                  <p className="text-xs font-semibold text-slate-700 mb-1.5">Applications</p>
                                  <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">
                                    {product.applications}
                                  </p>
                                </div>
                              </div>
                            </div>

                            {/* Contact Buttons - Responsive */}
                            <div className="flex gap-2 mt-3">
                              <a
                                href={`mailto:millenniumautomationsystem@gmail.com?subject=Inquiry - ${product.model}&body=Hi,%0D%0A%0D%0AI'm interested in learning more about the following product:%0D%0A%0D%0AProduct: ${product.model}%0D%0ACategory: ${category.category}%0D%0A%0D%0ASpecifications:%0D%0A${product.specs}%0D%0A%0D%0AKey Features:%0D%0A${product.features.join('%0D%0A')}%0D%0A%0D%0AApplications:%0D%0A${product.applications}%0D%0A%0D%0APlease provide more information and pricing details.%0D%0A%0D%0AThank you`}
                                className="flex-1 inline-flex items-center justify-center px-3 sm:px-4 py-2 bg-primary hover:bg-primary/90 text-white text-xs sm:text-sm font-semibold rounded-full transition-all"
                              >
                                📧 Get Quote
                              </a>
                              <a
                                href={`https://wa.me/919904003445?text=Hi,%20I'm%20interested%20in%20the%20${encodeURIComponent(product.model)}%20from%20the%20${encodeURIComponent(category.category)}%20category.%0A%0AProduct:%20${encodeURIComponent(product.model)}%0A%0ASpecifications:%0A${encodeURIComponent(product.specs)}%0A%0AFeatures:%0A${encodeURIComponent(product.features.join(', '))}%0A%0AApplications:%0A${encodeURIComponent(product.applications)}%0A%0APlease provide more information and pricing.%20Thank%20you!`}
                                target="_blank"
                                rel="noreferrer"
                                className="flex-1 inline-flex items-center justify-center px-3 sm:px-4 py-2 bg-green-600 hover:bg-green-700 text-white text-xs sm:text-sm font-semibold rounded-full transition-all"
                              >
                                <img src={whatsappIcon} alt="WhatsApp" className="w-5 h-5 sm:w-4 sm:h-4" />
                                <span className="ml-2">WhatsApp</span>
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

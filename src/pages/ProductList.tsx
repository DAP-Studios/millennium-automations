import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { ArrowLeft, Search } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Import product images
import vfdImage from "@/assets/hero-1.jpg";
import servoImage from "@/assets/hero-1.jpg";
import hmiImage from "@/assets/hero-1.jpg";
import plcImage from "@/assets/hero-1.jpg";
import smpsImage from "@/assets/hero-1.jpg";

const allProducts = [
  {
    category: "Variable Frequency Drives",
    categoryId: "vfd",
    description: "Advanced vector control drives with integrated PLC logic and precision torque management for industrial automation.",
    image: vfdImage,
    products: [
      {
        model: "ME300 Series - Basic Compact",
        specs: "Up to 7.5kW, 200% Starting Torque @ 3Hz, -20°C to +50°C",
        image: vfdImage,
        features: ["Built-in Braking Chopper", "STO Safety (SIL2/PL d)", "100% Conformal Coating", "Vector Control Algorithm"],
        applications: "Conveyor systems, extruders, basic automation with high starting torque requirements"
      },
      {
        model: "MS300 Series - Standard Compact",
        specs: "Up to 22kW, IP66/NEMA 4X, Output up to 1500Hz",
        image: vfdImage,
        features: ["IM/IPM/SPM Motor Support", "40% Size Reduction", "Multiple Communication Cards", "High-Speed Operation"],
        applications: "CNC spindles, machine tools, centrifugation processes, wash-down environments"
      },
      {
        model: "MH300 Series - Advanced Compact",
        specs: "Up to 75kW, Closed-Loop PG Cards, 33kHz Pulse Input",
        image: vfdImage,
        features: ["Encoder Feedback Support", "Tension Control Algorithms", "Friction Compensation", "Inertia Estimation"],
        applications: "Vertical lifting, tension control, winding applications, precision positioning"
      },
      {
        model: "C2000+ Series - Heavy Duty Vector",
        specs: "Up to 560kW, HD/SHD Rating, 180% Overload 3s",
        image: vfdImage,
        features: ["Synchronous Reluctance Motors", "Point-to-Point Positioning", "Field-Oriented Control", "IE5 Efficiency"],
        applications: "Crushers, extruders, heavy machinery, high break-away torque loads"
      },
      {
        model: "CP2000 Series - Fan/Pump Vector",
        specs: "Up to 630kW, Fire Mode, Multi-Pump Control",
        image: vfdImage,
        features: ["Variable Torque Optimization", "8-Pump Synchronization", "Bypass Function", "BACnet Support"],
        applications: "HVAC systems, building automation, water treatment, fire safety pumps"
      },
      {
        model: "VP3000 Series - Low Harmonic",
        specs: "Up to 630kW, THDi <35%, Predictive Maintenance",
        image: vfdImage,
        features: ["Active Harmonic Filter", "PdM Health Monitoring", "SynRM Support", "Power Quality Protection"],
        applications: "Chillers, compressors, facilities with strict power quality requirements"
      }
    ]
  },
  {
    category: "Servo Motor Systems & Motion Control",
    categoryId: "servo",
    description: "Precision servo drives and motion controllers with deterministic communication for synchronized multi-axis control.",
    image: servoImage,
    products: [
      {
        model: "ASDA-H3 Multi-Axis Servo",
        specs: "High-Power Multi-Axis, Common DC Bus, Energy Regeneration",
        image: servoImage,
        features: ["Common DC Bus Design", "Energy Recovery", "Multi-Axis Synchronization", "Injection Molding Optimized"],
        applications: "Injection molding machines, clamping units, cyclical acceleration/deceleration systems"
      },
      {
        model: "DVP-15MC Motion Controller",
        specs: "CANopen Motion (DS402), Up to 24 Real Axes, <1µs Jitter",
        image: servoImage,
        features: ["Deterministic Communication", "Electronic Cam (E-Cam)", "Complex Motion Profiles", "CANopen Protocol"],
        applications: "Multi-axis printing, robotics, synchronized manufacturing lines"
      },
      {
        model: "DVP-50MC EtherCAT Controller",
        specs: "EtherCAT Protocol, 20MB Data Capacity, High-Speed Sync",
        image: servoImage,
        features: ["EtherCAT Master", "Real-Time Synchronization", "Advanced Motion Control", "Non-Linear Profiles"],
        applications: "High-precision CNC systems, coordinated robotic cells, packaging automation"
      },
      {
        model: "DVP-PM Pulse Motion Controller",
        specs: "1MHz Output Frequency, High-Speed Differential Signaling",
        image: servoImage,
        features: ["Pulse Train Generation", "Differential Signaling", "EMI Immunity", "Servo Drive Interface"],
        applications: "High-speed positioning, servo amplifier control, noise-critical environments"
      }
    ]
  },
  {
    category: "Human Machine Interface with PLC",
    categoryId: "hmi",
    description: "Converged HMI-PLC controllers combining visualization with integrated logic control and I/O capabilities.",
    image: hmiImage,
    products: [
      {
        model: "TP70P Series - Touch Panel HMI-PLC",
        specs: "7\" TFT LCD, 65,535 Colors, DVP-SS2 PLC Core Integrated",
        image: hmiImage,
        features: ["Embedded PLC Logic (2k Steps)", "Onboard Digital/Analog I/O", "USB Programming Port", "RS-485 Multi-drop"],
        applications: "Single-device control solutions, conveyor systems, eliminating separate PLC requirements"
      },
      {
        model: "TP04P Series - Text Panel HMI-PLC",
        specs: "Monochrome LCD, Physical Function Keys, Integrated PLC",
        image: hmiImage,
        features: ["User-Definable Keys", "Direct PLC Macro Triggers", "Cost-Effective Design", "Robust Control Logic"],
        applications: "Simple machines, ovens, basic automation where graphics are unnecessary"
      },
      {
        model: "DOP-107 Advanced Series",
        specs: "7\" TFT LCD, 800×480, Recipe & Alarm Management",
        image: hmiImage,
        features: ["Advanced Recipe Functions", "Multi-Level Alarms", "Data Logging", "Network Connectivity"],
        applications: "Process control, batch manufacturing, recipe-based production systems"
      },
      {
        model: "DOP-115 Large Format Series",
        specs: "15.6\" Full HD TFT LCD, 1920×1080, IP65 Front Panel",
        image: hmiImage,
        features: ["High-Resolution Display", "Multi-Touch Support", "Ethernet Integration", "SCADA Ready"],
        applications: "Control rooms, complex visualization, large-scale monitoring systems"
      }
    ]
  },
  {
    category: "Programmable Logic Controllers",
    categoryId: "plc",
    description: "High-performance deterministic logic controllers with integrated motion control and advanced communication capabilities.",
    image: plcImage,
    products: [
      {
        model: "DVP-ES3 Series - Third Generation",
        specs: "64k Steps, 25ns Execution Speed, AS-Series Core",
        image: plcImage,
        features: ["40x Speed Improvement", "Native Ethernet & CANopen", "4-Axis 200kHz Pulse Output", "High-Throughput Processing"],
        applications: "High-speed packaging lines, servo control, complex machine networks"
      },
      {
        model: "DVP-ES2/EX2 Series - Standard",
        specs: "Up to 60 I/O Points, 0.35μs Execution, 3x COM Ports",
        image: plcImage,
        features: ["Monolithic Brick Design", "12-bit Analog I/O (EX2)", "Triple Communication", "Expansion Capability"],
        applications: "Process control, temperature/pressure monitoring, HMI & VFD networks"
      },
      {
        model: "DVP-SV2 Slim High-Performance",
        specs: "30k Steps, 0.24μs Execution, Linear/Arc Interpolation",
        image: plcImage,
        features: ["Compact Form Factor", "2-Axis Motion Tasks", "CNC-Level Functions", "Circle Cutting Capability"],
        applications: "Space-constrained installations, 2-axis motion control, cutting applications"
      },
      {
        model: "DVP-SE Slim Network Gateway",
        specs: "16k Steps, Built-in Ethernet, Mini-USB, 0.64μs",
        image: plcImage,
        features: ["Transparent Gateway", "Remote Programming", "Network Bridge", "Distributed Control"],
        applications: "Remote monitoring, distributed systems, gateway applications, network integration"
      }
    ]
  },
  {
    category: "Industrial Power Supply Systems",
    categoryId: "smps",
    description: "Advanced power supplies with integrated diagnostics, marine certifications, and specialized industry compliance.",
    image: smpsImage,
    products: [
      {
        model: "CliQ M Series - Premium Marine",
        specs: "DIN Rail Mount, Advanced Power Boost 150% for 5s, -25°C to +70°C",
        image: smpsImage,
        features: ["DNV GL Marine Certification", "Inductive Load Starting", "Maritime Environment Ready", "Heavy Industrial Grade"],
        applications: "Marine automation, heavy industry, large contactor starting, offshore platforms"
      },
      {
        model: "CliQ VA Series - Visual Diagnostics",
        specs: "DIN Rail Mount, Integrated LCD Display, Real-Time Monitoring",
        image: smpsImage,
        features: ["Built-in LCD Display", "Voltage/Current/Temperature Display", "Rapid Diagnostics", "No External Meter Required"],
        applications: "Maintenance-friendly installations, diagnostic-critical systems, troubleshooting applications"
      },
      {
        model: "Force-GT Series - Ultra-Efficient",
        specs: "Ultra-Slim Form Factor, 80+ Efficiency, -25°C to +70°C",
        image: smpsImage,
        features: ["Space-Saving Design", "Constant Current Circuit", "Charging Applications", "Wide Temperature Range"],
        applications: "DIN rail space optimization, battery charging systems, extreme temperature environments"
      },
      {
        model: "PMT2 Series - Consumer Safety",
        specs: "Panel Mount, 30mm Ultra-Low Profile, IEC 60335 Compliant",
        image: smpsImage,
        features: ["Household Appliance Standard", "Consumer Safety Certified", "Low Profile Design", "Universal Mounting"],
        applications: "Vending machines, coffee makers, consumer-facing equipment, appliance integration"
      },
      {
        model: "MEB Series - Medical Grade",
        specs: "Medical Certified, Low Leakage Current, Patient Safety",
        image: smpsImage,
        features: ["Medical Environment Certified", "Ultra-Low Leakage", "Patient Safety Standards", "Hospital Grade Reliability"],
        applications: "Medical devices, hospital equipment, patient-connected systems, healthcare automation"
      }
    ]
  },
  {
    category: "Rotary Optical Encoders & Feedback",
    categoryId: "encoders",
    description: "Precision feedback devices for closed-loop motion control with incremental, absolute, and servo commutation capabilities.",
    image: servoImage,
    products: [
      {
        model: "ES Series - Incremental Solid Shaft",
        specs: "36.6mm & 50mm OD, 100-2500 PPR, 6mm/8mm Shaft",
        image: servoImage,
        features: ["Line Driver Differential Output", "Flexible Coupling Compatible", "Vibration Isolation", "Multiple Output Stages"],
        applications: "General purpose positioning, motor feedback, conveyor tracking, speed measurement"
      },
      {
        model: "EH Series - Incremental Hollow Shaft",
        specs: "8mm Hollow Bore, Direct Motor Mount, Space-Saving Design",
        image: servoImage,
        features: ["Direct Shaft Mounting", "No Coupling Required", "Compact Installation", "High Noise Immunity"],
        applications: "Direct motor feedback, space-constrained applications, servo motor integration"
      },
      {
        model: "MH/MT Series - Servo Commutation",
        specs: "Motor Integration, U/V/W Commutation Signals, 85°C/100°C Operation",
        image: servoImage,
        features: ["Magnetic Pole Position Sensing", "Immediate Startup Capability", "High Temperature Rated", "Phase Sequence Generation"],
        applications: "PM servo motor commutation, brushless motor control, high-precision servo systems"
      },
      {
        model: "AS/AH Series - Absolute Position",
        specs: "Gray Code Output, 5-12 bit Resolution, Power Loss Recovery",
        image: servoImage,
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
        image: vfdImage,
        features: ["Direct Encoder Interface", "Floor Positioning Logic", "Door Control Integration", "Group Management"],
        applications: "Elevator systems, vertical transportation, building automation, lift modernization"
      },
      {
        model: "HES-C Injection Molding System",
        specs: "VFD-VJ Hybrid Servo + MST Motor + Hydraulic Controller",
        image: vfdImage,
        features: ["Hydraulic Pressure Control", "Energy Saving Design", "Precise Flow Management", "Molding Cycle Optimization"],
        applications: "Injection molding machines, plastic manufacturing, automotive parts, precision molding"
      },
      {
        model: "CT2000 Textile Drive",
        specs: "Flange Mount Design, External Heatsink, Lint-Resistant Cooling",
        image: vfdImage,
        features: ["Lint Accumulation Prevention", "External Heat Dissipation", "Textile Environment Optimized", "Multi-Speed Control"],
        applications: "Spinning mills, weaving machines, textile manufacturing, fiber processing"
      },
      {
        model: "VP3000/CP2000 Fluid Power System",
        specs: "Multi-Pump Sequencing, Analog Pressure Control, Constant System Pressure",
        image: vfdImage,
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
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
                      className="bg-white border border-slate-200 hover:border-primary/50 rounded-lg overflow-hidden transition-all duration-200 hover:shadow-lg group mb-2 sm:mb-3"
                    >
                      <div className="flex flex-col sm:flex-row">
                        {/* Product Image - Responsive */}
                        <div className="w-full sm:w-32 md:w-40 h-24 sm:h-32 md:h-auto relative overflow-hidden flex-shrink-0">
                          <img
                            src={product.image}
                            alt={product.model}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute top-1 left-1 sm:top-2 sm:left-2 w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 bg-primary/90 backdrop-blur-sm rounded-lg flex items-center justify-center">
                            <span className="text-xs font-bold text-white">
                              {String(index + 1).padStart(2, '0')}
                            </span>
                          </div>
                        </div>

                        {/* Product Details - Responsive */}
                        <div className="flex-1 p-3 sm:p-4">
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

                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
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
                                <div className="hidden sm:block">
                                  <p className="text-xs font-semibold text-slate-700 mb-1.5">Applications</p>
                                  <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">
                                    {product.applications}
                                  </p>
                                </div>
                              </div>
                            </div>

                            {/* Contact Button - Responsive */}
                            <a
                              href={`mailto:millenniumautomationsystem@gmail.com?subject=Inquiry about ${product.model}&body=Hi,%0D%0A%0D%0AI'm interested in the ${product.model}.%0D%0A%0D%0APlease provide more information.%0D%0A%0D%0AThank you`}
                              className="inline-flex items-center justify-center px-3 sm:px-4 py-1.5 sm:py-2 bg-primary hover:bg-primary/90 text-white text-xs sm:text-sm font-semibold rounded-lg transition-all whitespace-nowrap flex-shrink-0 w-full sm:w-auto"
                            >
                              Get Quote
                            </a>
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

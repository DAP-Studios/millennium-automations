import { useEffect, useState } from "react";
import { Link, useSearchParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Package, Zap, CheckCircle2, Phone, Mail } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import vfdImage from "@/assets/hero-1.jpg";

// Types
type Product = {
  model: string;
  specs: string;
  image: string;
  features: string[];
  applications: string;
};

type Category = {
  category: string;
  categoryId: string;
  description: string;
  image: string;
  products: Product[];
};

// Import product images
import servoImage from "@/assets/hero-1.jpg";
import hmiImage from "@/assets/hero-1.jpg";
import plcImage from "@/assets/hero-1.jpg";
import smpsImage from "@/assets/hero-1.jpg";

// Product data (updated with comprehensive Delta Electronics specifications)
const allProducts: Category[] = [
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

const ProductDetail = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const categoryId = searchParams.get("category");
  const productModel = searchParams.get("product");
  const [product, setProduct] = useState<Product | null>(null);
  const [category, setCategory] = useState<Category | null>(null);

  useEffect(() => {
    // Find the category and product
    const foundCategory = allProducts.find(cat => cat.categoryId === categoryId);
    if (foundCategory) {
      setCategory(foundCategory);
      const foundProduct = foundCategory.products.find(p => p.model === productModel);
      if (foundProduct) {
        setProduct(foundProduct);
      } else {
        // Product not found, redirect back
        navigate(`/product-list?category=${categoryId}`);
      }
    } else {
      // Category not found, redirect to product list
      navigate("/product-list");
    }
  }, [categoryId, productModel, navigate]);

  if (!product || !category) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-muted-foreground">Loading product details...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          {/* Back Button */}
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
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-6 font-medium transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Products
          </button>

          {/* Product Detail Card */}
          <div className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden">
            <div className="grid md:grid-cols-2 gap-8 p-6 sm:p-8 lg:p-10">
              {/* Left: Product Image */}
              <div className="space-y-4">
                <div className="relative aspect-square rounded-xl overflow-hidden border border-slate-200 bg-slate-50">
                  <img
                    src={product.image}
                    alt={product.model}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-primary text-white px-4 py-2 rounded-lg font-semibold text-sm">
                    {category.category}
                  </div>
                </div>

                {/* Quick Info Cards */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
                    <Package className="w-5 h-5 text-primary mb-2" />
                    <p className="text-xs text-muted-foreground mb-1">Model</p>
                    <p className="font-semibold text-sm text-primary">{product.model}</p>
                  </div>
                  <div className="bg-green-50 rounded-lg p-4 border border-green-100">
                    <Zap className="w-5 h-5 text-green-600 mb-2" />
                    <p className="text-xs text-muted-foreground mb-1">Availability</p>
                    <p className="font-semibold text-sm text-green-600">In Stock</p>
                  </div>
                </div>
              </div>

              {/* Right: Product Details */}
              <div className="space-y-6">
                {/* Header */}
                <div>
                  <h1 className="text-3xl sm:text-4xl font-bold text-primary mb-3">
                    {product.model}
                  </h1>
                  <p className="text-lg text-muted-foreground font-medium">
                    {product.specs}
                  </p>
                </div>

                {/* Description */}
                <div>
                  <p className="text-slate-600 leading-relaxed">
                    {category.description}
                  </p>
                </div>

                {/* Features */}
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    Key Features
                  </h3>
                  <ul className="space-y-2">
                    {product.features.map((feature: string, idx: number) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                        <span className="text-slate-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Applications */}
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3">
                    Applications
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {product.applications}
                  </p>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  <a
                    href={`mailto:millenniumautomationsystem@gmail.com?subject=Inquiry about ${product.model}&body=Hi,%0D%0A%0D%0AI'm interested in the ${product.model}.%0D%0A%0D%0APlease provide pricing and availability.%0D%0A%0D%0AThank you`}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary hover:bg-primary/90 text-white font-semibold rounded-lg transition-all shadow-md hover:shadow-lg"
                  >
                    <Mail className="w-4 h-4" />
                    Get Quote
                  </a>
                  <a
                    href="tel:+919904003445"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-primary text-primary hover:bg-primary/10 font-semibold rounded-lg transition-all"
                  >
                    <Phone className="w-4 h-4" />
                    Call Now
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="mt-8 bg-gradient-to-r from-primary to-blue-600 rounded-2xl p-6 sm:p-8 text-white">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-2xl font-bold mb-2">Need More Information?</h3>
                <p className="text-white/90">Our experts are ready to assist you with product selection and technical support.</p>
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href="tel:+919904003445"
                  className="inline-flex items-center gap-2 px-5 py-3 bg-white text-primary hover:bg-white/90 font-semibold rounded-lg transition-all"
                >
                  📞 Call
                </a>
                <a
                  href="https://wa.me/919904003445"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition-all"
                >
                  💬 WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProductDetail;

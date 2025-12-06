import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { ArrowLeft, Search } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { productCategorySEO } from "@/lib/seoConfig";

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
    image: servoImage,
    products: [
      {
        model: "ASDA-A2 Series",
        specs: "100W - 3kW, 17-bit Encoder",
        image: servoImage,
        features: ["Fast response <0.5ms", "Auto-tuning", "Multi-axis sync"],
        applications: "Packaging machines, textile machinery, robotics"
      },
      {
        model: "ASDA-A3 Series",
        specs: "100W - 15kW, 23-bit Encoder",
        image: servoImage,
        features: ["EtherCAT support", "±0.01% accuracy", "Advanced control"],
        applications: "CNC machines, semiconductor equipment, precision positioning"
      },
      {
        model: "ASDA-B2 Series",
        specs: "200W - 3kW, 20-bit Encoder",
        image: servoImage,
        features: ["Low inertia", "Compact size", "Easy setup"],
        applications: "Small automated equipment, pick and place, conveyors"
      },
      {
        model: "ASDA-M Series",
        specs: "10W - 400W, Micro Servo",
        image: servoImage,
        features: ["Ultra compact", "RS485 control", "Cost efficient"],
        applications: "Medical devices, laboratory equipment, small automation"
      }
    ]
  },
  {
    category: "Human Machine Interface",
    categoryId: "hmi",
    description: "Intuitive touchscreen panels for seamless industrial automation monitoring.",
    image: hmiImage,
    products: [
      {
        model: "DOP-107 Series",
        specs: "7\" TFT LCD, 800×480",
        image: hmiImage,
        features: ["Resistive touch", "Recipe function", "Alarm management"],
        applications: "Machine control panels, process monitoring"
      },
      {
        model: "DOP-110 Series",
        specs: "10.1\" TFT LCD, 1024×600",
        image: hmiImage,
        features: ["Multi-touch", "Data logging", "USB connectivity"],
        applications: "Industrial HMI, production monitoring, SCADA systems"
      },
      {
        model: "DOP-115 Series",
        specs: "15.6\" TFT LCD, 1920×1080",
        image: hmiImage,
        features: ["Full HD display", "Ethernet support", "IP65 front"],
        applications: "Large scale control rooms, complex visualization"
      },
      {
        model: "DOP-103 Series",
        specs: "4.3\" TFT LCD, 480×272",
        image: hmiImage,
        features: ["Compact design", "65,536 colors", "Multiple ports"],
        applications: "Small machines, embedded control, simple HMI"
      }
    ]
  },
  {
    category: "Programmable Logic Controllers",
    categoryId: "plc",
    description: "Reliable, high-performance control solutions with extensive I/O options.",
    image: plcImage,
    products: [
      {
        model: "DVP-SE Series",
        specs: "14-60 I/O, 0.54μs/step",
        image: plcImage,
        features: ["Cost effective", "Compact design", "Easy programming"],
        applications: "Simple automation, small machines, educational purposes"
      },
      {
        model: "DVP-SS2 Series",
        specs: "24-60 I/O, 0.24μs/step",
        image: plcImage,
        features: ["High speed", "Built-in Ethernet", "Motion control"],
        applications: "Medium automation, motion control, networked systems"
      },
      {
        model: "AS200 Series",
        specs: "128-256K steps, Multi-axis",
        image: plcImage,
        features: ["EtherCAT master", "8-axis control", "Advanced HMI"],
        applications: "Complex automation, multi-axis motion, integrated systems"
      },
      {
        model: "AH500 Series",
        specs: "Large capacity, Modular",
        image: plcImage,
        features: ["Redundancy support", "SCADA ready", "Hot swap I/O"],
        applications: "Critical infrastructure, large factories, redundant systems"
      }
    ]
  },
  {
    category: "Power Supply Components",
    categoryId: "smps",
    description: "Industrial-grade SMPS ensuring stable operation with comprehensive protection.",
    image: smpsImage,
    products: [
      {
        model: "DRP-24V Series",
        specs: "24VDC, 60-960W",
        image: smpsImage,
        features: ["DIN rail mount", "89% efficiency", "Wide input range"],
        applications: "Industrial control panels, automation systems"
      },
      {
        model: "PMT-12V Series",
        specs: "12VDC, 15-100W",
        image: smpsImage,
        features: ["Compact size", "Low ripple", "Overload protection"],
        applications: "Small devices, embedded systems, sensors"
      },
      {
        model: "PMC-48V Series",
        specs: "48VDC, 120-480W",
        image: smpsImage,
        features: ["High reliability", "Active PFC", "Parallel operation"],
        applications: "Telecom equipment, server systems, high-power devices"
      },
      {
        model: "DRL-24V Series",
        specs: "24VDC, 240-480W",
        image: smpsImage,
        features: ["Ultra slim", "Metal case", "CE/UL certified"],
        applications: "Space-constrained installations, control cabinets"
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
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="flex items-center justify-between mb-3">
            <Link 
              to="/#products" 
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm font-semibold">Back</span>
            </Link>
            <span className="text-sm text-muted-foreground font-medium">{totalProducts} Products</span>
          </div>

          {/* Search Bar and Category Filter */}
          <div className="mb-4 space-y-3">
            {/* Search Bar */}
            <div className="relative max-w-xl">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-slate-300 focus:border-primary focus:outline-none text-sm"
              />
            </div>

            {/* Category Buttons */}
            <div className="flex flex-wrap gap-2">
              {allProducts.map((cat) => (
                <button
                  key={cat.categoryId}
                  onClick={() => handleCategoryChange(cat.categoryId)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
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

          {/* Products List */}
          {filteredProducts.length > 0 ? (
            <div className="space-y-3">
              {filteredProducts.map((category) => (
                <div key={category.categoryId}>
                  {category.products.map((product, index) => (
                    <div
                      key={index}
                      className="bg-white border border-slate-200 hover:border-primary/50 rounded-lg overflow-hidden transition-all duration-200 hover:shadow-lg group mb-3"
                    >
                      <div className="flex flex-col sm:flex-row">
                        {/* Product Image */}
                        <div className="sm:w-40 h-32 sm:h-auto relative overflow-hidden flex-shrink-0">
                          <img
                            src={product.image}
                            alt={product.model}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute top-2 left-2 w-7 h-7 bg-primary/90 backdrop-blur-sm rounded-lg flex items-center justify-center">
                            <span className="text-xs font-bold text-white">
                              {String(index + 1).padStart(2, '0')}
                            </span>
                          </div>
                        </div>

                        {/* Product Details */}
                        <div className="flex-1 p-4">
                          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                            <div className="flex-1">
                              {/* Category Badge */}
                              <div className="flex items-center gap-2 mb-2">
                                <span className="text-xs font-semibold text-primary/70 uppercase tracking-wide">
                                  {category.category}
                                </span>
                              </div>
                              
                              {/* Model */}
                              <h3 className="text-lg font-bold text-primary mb-1 group-hover:text-blue-600 transition-colors">
                                {product.model}
                              </h3>
                              
                              {/* Specs */}
                              <p className="text-xs text-muted-foreground font-medium mb-3">
                                {product.specs}
                              </p>

                              <div className="grid sm:grid-cols-2 gap-3">
                                {/* Features */}
                                <div>
                                  <p className="text-xs font-semibold text-slate-700 mb-1.5">Features</p>
                                  <ul className="space-y-1">
                                    {product.features.slice(0, 2).map((feature, idx) => (
                                      <li key={idx} className="flex items-start gap-1.5 text-xs text-muted-foreground">
                                        <span className="w-1 h-1 bg-primary rounded-full mt-1.5 flex-shrink-0"></span>
                                        <span>{feature}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>

                                {/* Applications */}
                                <div>
                                  <p className="text-xs font-semibold text-slate-700 mb-1.5">Applications</p>
                                  <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">
                                    {product.applications}
                                  </p>
                                </div>
                              </div>
                            </div>

                            {/* Contact Button */}
                            <a
                              href={`mailto:millenniumautomationsystem@gmail.com?subject=Inquiry about ${product.model}&body=Hi,%0D%0A%0D%0AI'm interested in the ${product.model}.%0D%0A%0D%0APlease provide more information.%0D%0A%0D%0AThank you`}
                              className="inline-flex items-center justify-center px-4 py-2 bg-primary hover:bg-primary/90 text-white text-sm font-semibold rounded-lg transition-all whitespace-nowrap flex-shrink-0"
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

          {/* Contact Section */}
          <div className="mt-8 bg-white border border-slate-200 rounded-lg p-6">
            <h3 className="text-lg font-bold text-primary mb-3">Need Assistance?</h3>
            <div className="flex flex-wrap gap-3">
              <a
                href="tel:+919904003445"
                className="inline-flex items-center px-4 py-2 bg-primary hover:bg-primary/90 text-white text-sm font-semibold rounded-lg transition-all"
              >
                📞 Call
              </a>
              <a
                href="https://wa.me/919904003445"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center px-4 py-2 bg-green-600 hover:bg-green-700 text-white text-sm font-semibold rounded-lg transition-all"
              >
                💬 WhatsApp
              </a>
              <a
                href="mailto:millenniumautomationsystem@gmail.com"
                className="inline-flex items-center px-4 py-2 border border-primary text-primary hover:bg-primary/10 text-sm font-semibold rounded-lg transition-all"
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

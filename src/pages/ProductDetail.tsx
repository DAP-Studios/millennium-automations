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

// Product data (same as ProductList)
const allProducts: Category[] = [
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
        model: "DOP-100 Series",
        specs: "4.3\" - 10.1\", 65K colors",
        image: vfdImage,
        features: ["Multi-touch", "Vector graphics", "Recipe management"],
        applications: "Food processing, packaging, general machinery"
      },
      {
        model: "DOP-W Series",
        specs: "7\" - 15.6\", Web HMI",
        image: vfdImage,
        features: ["HTML5 web browser", "Multi-protocol", "Cloud ready"],
        applications: "IoT applications, remote monitoring, smart factory"
      }
    ]
  },
  {
    category: "Programmable Logic Controllers",
    categoryId: "plc",
    description: "Reliable automation controllers with flexible programming and I/O expansion.",
    image: vfdImage,
    products: [
      {
        model: "DVP-ES Series",
        specs: "14-60 I/O, Compact PLC",
        image: vfdImage,
        features: ["High-speed counters", "Pulse output", "Multiple communication"],
        applications: "Small machines, simple automation, standalone control"
      },
      {
        model: "AH500 Series",
        specs: "Modular, IEC 61131-3",
        image: vfdImage,
        features: ["Motion control", "EtherCAT master", "Redundancy"],
        applications: "Complex automation, process control, large systems"
      }
    ]
  },
  {
    category: "Power Supplies & SMPS",
    categoryId: "smps",
    description: "Industrial-grade switched-mode power supplies for reliable operations.",
    image: vfdImage,
    products: [
      {
        model: "DRP Series",
        specs: "24V DC, 40-960W",
        image: vfdImage,
        features: ["DIN rail mount", "85-95% efficiency", "Wide input range"],
        applications: "Industrial control systems, automation equipment"
      },
      {
        model: "PMC Series",
        specs: "12-48V DC, Slim Design",
        image: vfdImage,
        features: ["Compact 22.5mm width", "Active PFC", "Parallel operation"],
        applications: "Space-limited applications, modular systems"
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
          <Link 
            to={`/product-list?category=${categoryId}`}
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-6 font-medium transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to {category.category}
          </Link>

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

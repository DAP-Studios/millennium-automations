import { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import ProductModal from "./ProductModal";

const products = [
  {
    title: "Variable Frequency Drives",
    description: "Comprehensive range of VFD series including E, EL, EL-W, ME, MS 300, C200, C2000, and CP2000 for precise motor control",
    specs: ["Multiple Series", "Energy Efficient", "Vector Control", "Built-in Functions"],
    applications: ["Industrial Motors", "HVAC Systems", "Pumps & Fans", "Conveyors"],
    image: "https://images.unsplash.com/photo-1647427146263-c3562a03b5b6?w=800&q=80",
    category: "drives",
    badge: "Delta Electronics"
  },
  {
    title: "Servo Systems",
    description: "High-precision servo motors and drives for demanding motion control applications",
    specs: ["AC Servo Motors", "Servo Drives", "High Precision", "Fast Response"],
    applications: ["CNC Machines", "Robotics", "Packaging", "Textile Machinery"],
    image: "https://images.unsplash.com/photo-1621996346566-2679d033e2f6?w=800&q=80",
    category: "drives",
    badge: "Delta Electronics"
  },
  {
    title: "Human Machine Interface",
    description: "Intuitive HMI panels for operator interface and process visualization",
    specs: ["Touch Screen", "Multiple Sizes", "Color Display", "Communication Ports"],
    applications: ["Process Monitoring", "Machine Control", "Data Visualization", "System Management"],
    image: "https://images.unsplash.com/photo-1571172834739-121f14d71e6f?w=800&q=80",
    category: "interface",
    badge: "Delta Electronics"
  },
  {
    title: "Programmable Logic Controllers",
    description: "DVP and AS200 series PLCs for reliable automation control and monitoring",
    specs: ["DVP Series", "AS200 Series", "Modular Design", "Multiple I/O"],
    applications: ["Manufacturing", "Process Control", "Building Automation", "Machine Control"],
    image: "https://images.unsplash.com/photo-1569770020320-331006a86c96?w=800&q=80",
    category: "control",
    badge: "Delta Electronics"
  },
  {
    title: "Encoders & Couplings",
    description: "Precision encoders and mechanical couplings for accurate position feedback",
    specs: ["Rotary Encoders", "Flexible Couplings", "High Accuracy", "Durable Design"],
    applications: ["Position Sensing", "Speed Detection", "Motion Control", "Servo Systems"],
    image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=800&q=80",
    category: "control",
    badge: "Delta Electronics"
  },
  {
    title: "Control & Power Components",
    description: "SMPS, transformers, timers, counters, sensors, and synchronizing cards for complete automation solutions",
    specs: ["SMPS Units", "Transformers", "Timers & Counters", "Various Sensors"],
    applications: ["Power Supply", "Control Circuits", "Timing Applications", "Sensing & Detection"],
    image: "https://images.unsplash.com/photo-1581092918056-0c9c4e33b526?w=800&q=80",
    category: "power",
    badge: "Delta Electronics"
  }
];

const Products = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null);
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

  const handleProductClick = (product: typeof products[0]) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const getSimilarProducts = (product: typeof products[0]) => {
    return products
      .filter((p) => p.category === product.category && p.title !== product.title)
      .slice(0, 3);
  };

  return (
    <>
      <section
        id="products"
        ref={sectionRef}
        className="py-24 bg-white overflow-hidden"
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 reveal">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Core Products
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              As an authorized distributor of Delta Electronics, we supply industry-leading automation components backed by comprehensive technical support and genuine warranties.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <Card
                key={index}
                onClick={() => handleProductClick(product)}
                className="reveal group overflow-hidden border border-slate-200 hover:border-primary/30 shadow-md hover:shadow-xl transition-all duration-500 cursor-pointer"
              >
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="bg-white/95 backdrop-blur-sm text-primary text-xs font-semibold px-3 py-1.5 rounded-full shadow-md">
                      {product.badge}
                    </span>
                  </div>
                </div>
                <CardContent className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-primary group-hover:text-primary/80 transition-colors duration-300">
                    {product.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">
                    {product.description}
                  </p>
                  
                  <div className="space-y-3">
                    <div>
                      <h4 className="text-xs font-semibold text-primary mb-2">Key Specifications:</h4>
                      <div className="flex flex-wrap gap-2">
                        {product.specs.slice(0, 4).map((spec, idx) => (
                          <span key={idx} className="text-xs bg-secondary/50 text-muted-foreground px-2 py-1 rounded">
                            {spec}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-xs font-semibold text-primary mb-2">Applications:</h4>
                      <ul className="text-xs text-muted-foreground space-y-1">
                        {product.applications.slice(0, 4).map((app, idx) => (
                          <li key={idx} className="flex items-center gap-1">
                            <span className="w-1 h-1 bg-primary rounded-full"></span>
                            {app}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <ProductModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        similarProducts={selectedProduct ? getSimilarProducts(selectedProduct) : []}
      />
    </>
  );
};

export default Products;

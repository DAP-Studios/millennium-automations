import { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import ProductModal from "./ProductModal";

const products = [
  {
    title: "AC Motor Drives (VFDs)",
    description: "Advanced vector control and high-performance drives for all motor types.",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80",
    category: "drives",
  },
  {
    title: "AC Servo Motors & Drives",
    description: "High-precision, high-speed motion control for dynamic applications.",
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&q=80",
    category: "drives",
  },
  {
    title: "Human Machine Interfaces",
    description: "Intuitive and high-resolution touch screens for smart monitoring.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    category: "interface",
  },
  {
    title: "Motion Control (PLCs)",
    description: "Scalable and integrated controllers for complete machine automation.",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&q=80",
    category: "control",
  },
  {
    title: "Industrial Robots",
    description: "SCARA and Articulated robots for high-speed, precision assembly and handling.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80",
    category: "robotics",
  },
  {
    title: "Machine Vision Systems",
    description: "Smart cameras and vision sensors for quality inspection and guidance.",
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&q=80",
    category: "interface",
  },
  {
    title: "Industrial Power Supplies",
    description: "Reliable DIN rail and panel-mount power supplies for stable operation.",
    image: "https://images.unsplash.com/photo-1581092162384-8987c1d64718?w=800&q=80",
    category: "power",
  },
  {
    title: "Sensors & Controllers",
    description: "Pressure sensors, temperature controllers, and timers for process control.",
    image: "https://images.unsplash.com/photo-1581092583537-20d51876c089?w=800&q=80",
    category: "control",
  },
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
        className="py-24 bg-gradient-to-b from-white to-secondary/30 overflow-hidden"
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 reveal">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Our Core Delta Products
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              As authorized partners, we provide the full range of Delta Industrial
              Automation solutions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <Card
                key={index}
                onClick={() => handleProductClick(product)}
                className="reveal group overflow-hidden border-none shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer"
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/50 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h3 className="text-lg font-bold mb-2 text-white transition-transform duration-300 group-hover:translate-y-[-4px]">
                      {product.title}
                    </h3>
                    <p className="text-sm text-white/90 leading-relaxed">
                      {product.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12 reveal">
            <p className="text-muted-foreground text-lg">
              And many more, including{" "}
              <span className="font-semibold text-primary">
                Industrial PCs, Power Quality Filters, and Ethernet Solutions.
              </span>
            </p>
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

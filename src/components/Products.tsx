import { useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";

const products = [
  {
    title: "AC Motor Drives (VFDs)",
    description: "Advanced vector control and high-performance drives for all motor types.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "AC Servo Motors & Drives",
    description: "High-precision, high-speed motion control for dynamic applications.",
    color: "from-cyan-500 to-teal-500",
  },
  {
    title: "Human Machine Interfaces",
    description: "Intuitive and high-resolution touch screens for smart monitoring.",
    color: "from-teal-500 to-emerald-500",
  },
  {
    title: "Motion Control (PLCs)",
    description: "Scalable and integrated controllers for complete machine automation.",
    color: "from-emerald-500 to-green-500",
  },
  {
    title: "Industrial Robots",
    description: "SCARA and Articulated robots for high-speed, precision assembly and handling.",
    color: "from-violet-500 to-purple-500",
  },
  {
    title: "Machine Vision Systems",
    description: "Smart cameras and vision sensors for quality inspection and guidance.",
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Industrial Power Supplies",
    description: "Reliable DIN rail and panel-mount power supplies for stable operation.",
    color: "from-orange-500 to-red-500",
  },
  {
    title: "Sensors & Controllers",
    description: "Pressure sensors, temperature controllers, and timers for process control.",
    color: "from-red-500 to-rose-500",
  },
];

const Products = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

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
      className="py-24 bg-white overflow-hidden"
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
              className="reveal group overflow-hidden border-none shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              <div className={`h-2 bg-gradient-to-r ${product.color}`} />
              <CardContent className="p-6">
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${product.color} mb-4 group-hover:scale-110 transition-transform duration-300`}
                />
                <h3 className="text-xl font-bold mb-3 text-primary">
                  {product.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {product.description}
                </p>
              </CardContent>
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
  );
};

export default Products;

import { useState } from "react";
import { X, Search } from "lucide-react";

interface Product {
  model: string;
  specs: string;
  image: string;
  features: string[];
  applications: string;
}

interface CategoryData {
  category: string;
  categoryId: string;
  description: string;
  image: string;
  products: Product[];
}

interface ProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  categoryData: CategoryData | null;
}

const ProductModal = ({ isOpen, onClose, categoryData }: ProductModalProps) => {
  const [searchTerm, setSearchTerm] = useState("");

  if (!isOpen || !categoryData) return null;

  const filteredProducts = categoryData.products.filter(product => {
    if (!searchTerm) return true;
    const search = searchTerm.toLowerCase();
    return product.model.toLowerCase().includes(search) ||
      product.specs.toLowerCase().includes(search) ||
      product.applications.toLowerCase().includes(search);
  });

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm animate-in fade-in duration-200 p-2 sm:p-4">
      <div className="relative w-full h-full max-w-7xl max-h-[95vh] sm:max-h-[90vh] bg-white rounded-xl sm:rounded-2xl shadow-2xl overflow-hidden flex flex-col">
        {/* Header */}
        <div className="flex-shrink-0 bg-gradient-to-r from-primary to-blue-600 text-white p-4 sm:p-6">
          <div className="flex items-start justify-between gap-2">
            <div className="flex-1 min-w-0">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-1 sm:mb-2 truncate">{categoryData.category}</h2>
              <p className="text-xs sm:text-sm lg:text-base text-white/90 line-clamp-2">{categoryData.description}</p>
            </div>
            <button
              onClick={onClose}
              className="ml-4 p-2 hover:bg-white/20 rounded-lg transition-colors flex-shrink-0"
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Search Bar */}
          <div className="mt-3 sm:mt-4">
            <div className="relative max-w-xl">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/60" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-white/20 border border-white/30 focus:bg-white/30 focus:border-white/50 focus:outline-none text-sm text-white placeholder:text-white/60"
              />
            </div>
          </div>
        </div>

        {/* Products List */}
        <div className="flex-1 overflow-y-auto p-3 sm:p-4 lg:p-6">
          {filteredProducts.length > 0 ? (
            <div className="grid gap-3 sm:gap-4">
              {filteredProducts.map((product, index) => (
                <div
                  key={index}
                  className="bg-white border border-slate-200 hover:border-primary/50 rounded-xl overflow-hidden transition-all duration-200 hover:shadow-lg group"
                >
                  <div className="flex flex-col sm:flex-row">
                    {/* Product Image */}
                    <div className="sm:w-48 h-40 sm:h-auto relative overflow-hidden flex-shrink-0">
                      <img
                        src={product.image}
                        alt={product.model}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-3 left-3 w-8 h-8 bg-primary/90 backdrop-blur-sm rounded-lg flex items-center justify-center">
                        <span className="text-sm font-bold text-white">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                      </div>
                    </div>

                    {/* Product Details */}
                    <div className="flex-1 p-5">
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                        <div className="flex-1">
                          {/* Model */}
                          <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-blue-600 transition-colors">
                            {product.model}
                          </h3>
                          
                          {/* Specs */}
                          <p className="text-sm text-muted-foreground font-medium mb-4">
                            {product.specs}
                          </p>

                          <div className="grid sm:grid-cols-2 gap-4">
                            {/* Features */}
                            <div>
                              <p className="text-sm font-semibold text-slate-700 mb-2">Features</p>
                              <ul className="space-y-1.5">
                                {product.features.map((feature, idx) => (
                                  <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 flex-shrink-0"></span>
                                    <span>{feature}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            {/* Applications */}
                            <div>
                              <p className="text-sm font-semibold text-slate-700 mb-2">Applications</p>
                              <p className="text-sm text-muted-foreground leading-relaxed">
                                {product.applications}
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Contact Button */}
                        <a
                          href={`mailto:millenniumautomationsystem@gmail.com?subject=Inquiry about ${product.model}&body=Hi,%0D%0A%0D%0AI'm interested in the ${product.model}.%0D%0A%0D%0APlease provide more information.%0D%0A%0D%0AThank you`}
                          className="inline-flex items-center justify-center px-5 py-2.5 bg-primary hover:bg-primary/90 text-white text-sm font-semibold rounded-lg transition-all whitespace-nowrap flex-shrink-0"
                        >
                          Get Quote
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No products found</p>
            </div>
          )}
        </div>

        {/* Footer Contact */}
        <div className="flex-shrink-0 bg-slate-50 border-t border-slate-200 p-4 sm:p-6">
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
    </div>
  );
};

export default ProductModal;

import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X } from "lucide-react";
import { useState } from "react";
import { pickImageForCategory } from "@/lib/productImages";

export interface Product {
  title: string;
  description: string;
  specs?: string[];
  applications?: string[];
  image: string;
  category?: string;
  badge?: string;
}

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProductModal = ({ product, isOpen, onClose }: ProductModalProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!product) return null;

  const images = [
    pickImageForCategory(product.category, 0),
    pickImageForCategory(product.category, 1),
    pickImageForCategory(product.category, 2),
    pickImageForCategory(product.category, 3),
    pickImageForCategory(product.category, 4),
    pickImageForCategory(product.category, 5),
  ].filter((img, idx, arr) => arr.indexOf(img) === idx);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-[96vw] sm:max-w-[95vw] lg:max-w-[90vw] max-h-[96vh] overflow-hidden p-0 bg-secondary">
        <div className="flex flex-col lg:flex-row h-auto lg:h-[95vh] rounded-lg overflow-hidden">
          {/* Image Gallery - Horizontal on mobile, Vertical sidebar on desktop */}
          <aside className="w-full lg:w-[40%] bg-secondary/80 backdrop-blur-sm p-3 sm:p-4 lg:p-6 flex flex-col gap-3 lg:gap-4 shadow-xl lg:border-r border-border">
            <div className="flex justify-between items-center">
              <h3 className="text-sm sm:text-base font-semibold text-foreground tracking-wide">Product Gallery</h3>
              <button 
                onClick={onClose}
                className="p-2 hover:bg-accent rounded-full transition-all duration-200"
                aria-label="Close modal"
              >
                <X className="w-4 h-4 sm:w-5 sm:h-5 text-foreground" />
              </button>
            </div>
            
            {/* Horizontal scroll on mobile, Vertical on desktop */}
            <div className="flex lg:flex-col gap-3 lg:gap-4 overflow-x-auto lg:overflow-y-auto lg:flex-1 lg:pr-2 pb-2 lg:pb-0 scrollbar-thin scrollbar-thumb-border scrollbar-track-transparent">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentImageIndex(idx)}
                  className={`flex-shrink-0 w-20 h-20 sm:w-24 sm:h-24 lg:w-full lg:aspect-square rounded-lg lg:rounded-xl overflow-hidden transition-all duration-300 border-2 ${
                    currentImageIndex === idx
                      ? "border-primary shadow-lg shadow-primary/30 scale-[1.02] ring-2 ring-primary/20"
                      : "border-border hover:border-primary/50 opacity-70 hover:opacity-100 hover:scale-[1.01]"
                  }`}
                >
                  <img 
                    src={img} 
                    alt={`${product.title} ${idx + 1}`} 
                    className="w-full h-full object-contain bg-muted p-1 lg:p-2"
                  />
                </button>
              ))}
            </div>
            
            <div className="text-xs sm:text-sm text-muted-foreground text-center pt-2 lg:pt-3 border-t border-border font-medium">
              Image {currentImageIndex + 1} of {images.length}
            </div>
          </aside>

          {/* Product Details Section - 60% */}
          <main className="flex-1 lg:w-[60%] flex flex-col p-4 sm:p-6 lg:p-8 overflow-y-auto bg-background max-h-[60vh] lg:max-h-none">
            <div className="max-w-3xl mx-auto w-full space-y-4 sm:space-y-5 lg:space-y-6">
              {/* Header */}
              <div className="border-b border-border pb-4 sm:pb-5 lg:pb-6">
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground mb-2 sm:mb-3">{product.title}</h2>
                <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-primary/10 text-primary text-xs sm:text-sm font-semibold rounded-lg inline-block border border-primary/20">
                  {product.badge}
                </span>
              </div>

              {/* Overview */}
              <div className="space-y-2 sm:space-y-3">
                <h3 className="text-base sm:text-lg font-bold text-primary uppercase tracking-wide">Overview</h3>
                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">{product.description}</p>
              </div>

              {/* Key Specifications */}
              {product.specs && product.specs.length > 0 && (
                <div className="space-y-3 sm:space-y-4 bg-secondary/50 rounded-lg p-4 sm:p-5 lg:p-6">
                  <h3 className="text-base sm:text-lg font-bold text-primary uppercase tracking-wide">Key Specifications</h3>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 sm:gap-3">
                    {product.specs.map((spec, idx) => (
                      <div key={idx} className="flex items-start gap-2 sm:gap-3 bg-background/50 p-2.5 sm:p-3 rounded-md">
                        <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full flex-shrink-0 mt-1.5 sm:mt-2"></span>
                        <span className="text-foreground text-xs sm:text-sm font-medium">{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Applications */}
              {product.applications && product.applications.length > 0 && (
                <div className="space-y-3 sm:space-y-4 bg-secondary/50 rounded-lg p-4 sm:p-5 lg:p-6">
                  <h3 className="text-base sm:text-lg font-bold text-primary uppercase tracking-wide">Applications</h3>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 sm:gap-3">
                    {product.applications.map((app, idx) => (
                      <div key={idx} className="flex items-start gap-2 sm:gap-3 bg-background/50 p-2.5 sm:p-3 rounded-md">
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 10 10.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                        <span className="text-foreground text-xs sm:text-sm font-medium">{app}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 pt-4 sm:pt-5 lg:pt-6 border-t border-border">
                <a 
                  href={`mailto:sales@mas-automation.com?subject=${encodeURIComponent(`Product Inquiry: ${product.title}`)}&body=${encodeURIComponent(`Hi,\n\nI'm interested in the ${product.title}.\n\nPlease send me more details and pricing information.\n\nThank you`)}`} 
                  className="flex-1 px-4 sm:px-6 py-3 sm:py-4 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-lg transition-all duration-200 text-center shadow-lg hover:shadow-xl text-sm sm:text-base"
                >
                  Request Information
                </a>
                <button 
                  onClick={onClose} 
                  className="px-4 sm:px-6 py-3 sm:py-4 bg-secondary hover:bg-secondary/80 border-2 border-border text-foreground font-semibold rounded-lg transition-all duration-200 text-sm sm:text-base"
                >
                  Close
                </button>
              </div>
            </div>
          </main>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductModal;

import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
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

  const currentImage = images[currentImageIndex] || product.image;

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-[95vw] lg:max-w-[90vw] max-h-[95vh] overflow-hidden p-0 bg-secondary">
        <div className="flex flex-col lg:flex-row h-[95vh] rounded-lg overflow-hidden">
          {/* Sidebar - 40% Square Image Carousel */}
          <aside className="w-full lg:w-[40%] bg-secondary/80 backdrop-blur-sm p-6 flex flex-col gap-4 shadow-xl border-r border-border">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-base font-semibold text-foreground tracking-wide">Product Gallery</h3>
              <button 
                onClick={onClose}
                className="p-2 hover:bg-accent rounded-full transition-all duration-200"
              >
                <X className="w-5 h-5 text-foreground" />
              </button>
            </div>
            
            <div className="flex-1 overflow-y-auto pr-2 space-y-4 scrollbar-thin scrollbar-thumb-border scrollbar-track-transparent">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentImageIndex(idx)}
                  className={`w-full aspect-square rounded-xl overflow-hidden transition-all duration-300 border-2 ${
                    currentImageIndex === idx
                      ? "border-primary shadow-lg shadow-primary/30 scale-[1.02] ring-2 ring-primary/20"
                      : "border-border hover:border-primary/50 opacity-70 hover:opacity-100 hover:scale-[1.01]"
                  }`}
                >
                  <img 
                    src={img} 
                    alt={`${product.title} ${idx + 1}`} 
                    className="w-full h-full object-contain bg-muted p-2"
                  />
                </button>
              ))}
            </div>
            
            <div className="text-sm text-muted-foreground text-center pt-3 border-t border-border font-medium">
              Image {currentImageIndex + 1} of {images.length}
            </div>
          </aside>

          {/* Product Details Section - 60% */}
          <main className="flex-1 lg:w-[60%] flex flex-col p-8 overflow-y-auto bg-background">
            <div className="max-w-3xl mx-auto w-full space-y-6">
              {/* Header */}
              <div className="border-b border-border pb-6">
                <h2 className="text-3xl font-bold text-foreground mb-3">{product.title}</h2>
                <span className="px-4 py-2 bg-primary/10 text-primary text-sm font-semibold rounded-lg inline-block border border-primary/20">
                  {product.badge}
                </span>
              </div>

              {/* Overview */}
              <div className="space-y-3">
                <h3 className="text-lg font-bold text-primary uppercase tracking-wide">Overview</h3>
                <p className="text-muted-foreground text-base leading-relaxed">{product.description}</p>
              </div>

              {/* Key Specifications */}
              {product.specs && product.specs.length > 0 && (
                <div className="space-y-4 bg-secondary/50 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-primary uppercase tracking-wide">Key Specifications</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {product.specs.map((spec, idx) => (
                      <div key={idx} className="flex items-start gap-3 bg-background/50 p-3 rounded-md">
                        <span className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></span>
                        <span className="text-foreground text-sm font-medium">{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Applications */}
              {product.applications && product.applications.length > 0 && (
                <div className="space-y-4 bg-secondary/50 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-primary uppercase tracking-wide">Applications</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {product.applications.map((app, idx) => (
                      <div key={idx} className="flex items-start gap-3 bg-background/50 p-3 rounded-md">
                        <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 10 10.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                        <span className="text-foreground text-sm font-medium">{app}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex gap-3 pt-6 border-t border-border">
                <a 
                  href={`mailto:sales@mas-automation.com?subject=${encodeURIComponent(`Product Inquiry: ${product.title}`)}&body=${encodeURIComponent(`Hi,\n\nI'm interested in the ${product.title}.\n\nPlease send me more details and pricing information.\n\nThank you`)}`} 
                  className="flex-1 px-6 py-4 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-lg transition-all duration-200 text-center shadow-lg hover:shadow-xl"
                >
                  Request Information
                </a>
                <button 
                  onClick={onClose} 
                  className="px-6 py-4 bg-secondary hover:bg-secondary/80 border-2 border-border text-foreground font-semibold rounded-lg transition-all duration-200"
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

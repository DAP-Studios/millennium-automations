import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Card } from "@/components/ui/card";
import { X } from "lucide-react";

interface Product {
  title: string;
  description: string;
  image: string;
  category?: string;
}

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
  similarProducts: Product[];
}

const ProductModal = ({ product, isOpen, onClose, similarProducts }: ProductModalProps) => {
  if (!product) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-primary pr-8">
            {product.title}
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Main Product */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="relative h-80 rounded-lg overflow-hidden">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-4">
              <p className="text-muted-foreground text-lg leading-relaxed">
                {product.description}
              </p>
              <div className="space-y-2">
                <h3 className="font-semibold text-lg">Key Features:</h3>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li>High reliability and performance</li>
                  <li>Easy integration with existing systems</li>
                  <li>Comprehensive technical support</li>
                  <li>Industry-standard compliance</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Similar Products */}
          {similarProducts.length > 0 && (
            <div className="border-t pt-6">
              <h3 className="text-xl font-bold mb-4 text-foreground">Similar Products</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {similarProducts.map((similar, index) => (
                  <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={similar.image}
                        alt={similar.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-3">
                        <h4 className="text-white font-semibold text-sm mb-1">
                          {similar.title}
                        </h4>
                        <p className="text-white/80 text-xs line-clamp-2">
                          {similar.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductModal;

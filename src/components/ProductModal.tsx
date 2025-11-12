import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Card } from "@/components/ui/card";
import { X } from "lucide-react";
import { pickImageForCategory } from "@/lib/productImages";
import { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";

export interface Product {
  title: string;
  description: string;
  image: string | string[];
  category?: string;
  specs?: string[];
  applications?: string[];
  badge?: string;
}

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
  similarProducts: Product[];
  onSelectSimilar?: (p: Product) => void;
}

const ProductModal = ({ product, isOpen, onClose, similarProducts, onSelectSimilar }: ProductModalProps) => {
  if (!product) return null;

  // Build an images array: support product.image as string | string[]; if string, augment with category images up to 5
  const rawImages: string[] = Array.isArray(product.image) ? product.image : [product.image];
  const extras: string[] = [];
  for (let i = 0; i < 5 && rawImages.length + extras.length < 5; i++) {
    const candidate = pickImageForCategory(product.category, i + 1);
    if (candidate && !rawImages.includes(candidate) && !extras.includes(candidate)) extras.push(candidate);
  }
  const images = [...rawImages, ...extras].slice(0, 5);

  const [activeIndex, setActiveIndex] = useState(0);

  // Embla carousel setup
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });

  const scrollTo = useCallback((index: number) => {
    if (emblaApi) emblaApi.scrollTo(index);
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setActiveIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    // initialize
    onSelect();
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  // Keyboard navigation: left/right arrows to navigate carousel when modal is open
  useEffect(() => {
    if (!isOpen || !emblaApi) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        emblaApi.scrollPrev();
      } else if (e.key === "ArrowRight") {
        emblaApi.scrollNext();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, emblaApi]);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto p-4 sm:p-6">
        <DialogHeader>
          <DialogTitle className="text-xl sm:text-2xl font-bold text-primary pr-8">
            {product.title}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4 sm:space-y-6">
          {/* Main Product: left vertical thumbnails + right carousel + info */}
          {/* Use a fixed left column on md+ and keep thumbnails visible; thumbnails scroll if many */}
          <div className="grid grid-cols-1 md:grid-cols-[96px_1fr] gap-4 sm:gap-6 items-start">
            {/* Left: vertical thumbnail list */}
            <div className="flex md:flex-col flex-row gap-2 overflow-x-auto md:overflow-y-auto md:overflow-x-visible max-h-none md:max-h-[520px] pr-1 pb-2 md:pb-0">
                {images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => scrollTo(i)}
                    className={`h-16 w-16 md:h-20 md:w-full flex-shrink-0 overflow-hidden rounded-md border flex items-center justify-center bg-white ${i === activeIndex ? 'ring-2 ring-primary/20 border-primary' : 'border-slate-200'}`}
                    aria-label={`Show image ${i + 1}`}
                    aria-selected={i === activeIndex}
                    tabIndex={0}
                  >
                    <img src={img} alt={`${product.title} thumb ${i + 1}`} className="w-full h-full object-cover" loading="lazy" decoding="async" />
                  </button>
                ))}
            </div>

            {/* Right: large carousel and product info */}
            <div className="space-y-4">
              <div className="border border-slate-200 rounded-lg overflow-hidden shadow-sm bg-white">
                <div className="embla" ref={emblaRef as any} role="region" aria-roledescription="carousel" aria-label={`${product.title} images`}>
                  <div className="embla__container flex">
                    {images.map((img, i) => (
                      <div key={i} className="embla__slide flex-[0_0_100%] h-48 sm:h-64 md:h-[480px] relative overflow-hidden rounded-lg">
                        <img src={img} alt={`${product.title} (${i + 1})`} loading="lazy" decoding="async" className="w-full h-full object-cover" />
                      </div>
                    ))}
                  </div>
                </div>
                {/* Live region for screen readers to announce slide changes */}
                <div className="sr-only" aria-live="polite">Slide {activeIndex + 1} of {images.length}</div>
              </div>

              <div>
                <p className="text-muted-foreground text-sm sm:text-base lg:text-lg leading-relaxed">
                  {product.description}
                </p>
                <div className="space-y-2 mt-3">
                  <h3 className="font-semibold text-base sm:text-lg">Key Features:</h3>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground text-sm sm:text-base">
                    <li>High reliability and performance</li>
                    <li>Easy integration with existing systems</li>
                    <li>Comprehensive technical support</li>
                    <li>Industry-standard compliance</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Similar Products */}
          {similarProducts.length > 0 && (
            <div className="border-t pt-4 sm:pt-6">
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-foreground">Similar Products</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
                {similarProducts.map((similar, index) => (
                  <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group" onClick={() => onSelectSimilar ? onSelectSimilar(similar) : undefined}>
                    <div className="relative h-36 sm:h-48 overflow-hidden">
                      <img
                        src={Array.isArray(similar.image) ? similar.image[0] : similar.image}
                        alt={similar.title}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover transition-transform duration-200 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-3">
                        <h4 className="text-white font-semibold text-xs sm:text-sm mb-1">
                          {similar.title}
                        </h4>
                        <p className="text-white/80 text-[10px] sm:text-xs line-clamp-2">
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

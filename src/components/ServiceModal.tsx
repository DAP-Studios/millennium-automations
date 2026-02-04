import { X, CheckCircle2 } from "lucide-react";

interface ServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  service: {
    title: string;
    description: string;
    features: string[];
    image: string;
  } | null;
}

const ServiceModal = ({ isOpen, onClose, service }: ServiceModalProps) => {
  if (!isOpen || !service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="relative bg-slate-900 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-700">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-slate-800 hover:bg-slate-700 text-white transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Service Image */}
        <div className="relative h-64 sm:h-80 overflow-hidden rounded-t-2xl">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-6">
          {/* Title */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
              {service.title}
            </h2>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              {service.description}
            </p>
          </div>

          {/* Features */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <CheckCircle2 className="w-6 h-6 text-primary" />
              Key Features
            </h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {service.features.map((feature, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 bg-slate-800/50 rounded-lg p-3 border border-slate-700"
                >
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-slate-200 text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Contact CTA */}
          <div className="pt-4 border-t border-slate-700">
            <a
              href="mailto:millenniumautomationsystem@gmail.com?subject=Inquiry about Service&body=Hi,%0D%0A%0D%0AI'm interested in your services.%0D%0A%0D%0APlease provide more information.%0D%0A%0D%0AThank you"
              className="inline-flex items-center justify-center w-full px-6 py-3 bg-primary hover:bg-primary/90 text-white font-semibold rounded-lg transition-all"
            >
              Get a Quote
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceModal;

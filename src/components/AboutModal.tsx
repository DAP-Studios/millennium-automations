import { X } from "lucide-react";
import { useEffect } from "react";

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'mission' | 'vision' | null;
}

const AboutModal = ({ isOpen, onClose, type }: AboutModalProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen || !type) return null;

  const content = {
    mission: {
      title: "Our Mission & Vision",
      icon: "🎯",
      description: "Our commitment to empowering industries and our vision for the future of automation in India.",
      mission: {
        title: "Our Mission",
        description: "To empower industries with world-class automation solutions that enhance productivity, efficiency, and sustainability while maintaining the highest standards of quality and support.",
        details: [
          "Deliver cutting-edge automation technology to industries across India",
          "Provide exceptional technical support and customer service",
          "Maintain highest quality standards in all our products and services",
          "Foster long-term partnerships with our clients",
          "Contribute to industrial growth and technological advancement"
        ]
      },
      vision: {
        title: "Our Vision",
        description: "To become India's most trusted automation partner, recognized for innovation, reliability, and customer-centric solutions that drive industrial transformation.",
        details: [
          "Be the leading automation solutions provider in Gujarat and beyond",
          "Set industry standards for quality and service excellence",
          "Drive innovation in industrial automation technology",
          "Create lasting value for our customers and stakeholders",
          "Build a legacy of trust and technological excellence"
        ]
      }
    },
    vision: {
      title: "Our Mission & Vision",
      icon: "👁️",
      description: "Our commitment to empowering industries and our vision for the future of automation in India.",
      mission: {
        title: "Our Mission",
        description: "To empower industries with world-class automation solutions that enhance productivity, efficiency, and sustainability while maintaining the highest standards of quality and support.",
        details: [
          "Deliver cutting-edge automation technology to industries across India",
          "Provide exceptional technical support and customer service",
          "Maintain highest quality standards in all our products and services",
          "Foster long-term partnerships with our clients",
          "Contribute to industrial growth and technological advancement"
        ]
      },
      vision: {
        title: "Our Vision",
        description: "To become India's most trusted automation partner, recognized for innovation, reliability, and customer-centric solutions that drive industrial transformation.",
        details: [
          "Be the leading automation solutions provider in Gujarat and beyond",
          "Set industry standards for quality and service excellence",
          "Drive innovation in industrial automation technology",
          "Create lasting value for our customers and stakeholders",
          "Build a legacy of trust and technological excellence"
        ]
      }
    }
  };

  const currentContent = content[type];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-in fade-in duration-200">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl sm:rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border-2 border-white/20 animate-in slide-in-from-bottom duration-300">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10 bg-white/10 hover:bg-white/20 rounded-full p-2 transition-colors duration-200"
          aria-label="Close modal"
        >
          <X className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
        </button>

        {/* Header */}
        <div className="bg-gradient-to-r from-primary/30 to-primary/20 border-b border-white/10 p-6 sm:p-8">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/20 rounded-xl flex items-center justify-center text-2xl sm:text-3xl">
              🎯
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
              {currentContent.title}
            </h2>
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/20 rounded-xl flex items-center justify-center text-2xl sm:text-3xl">
              👁️
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-8">
          <p className="text-white/90 text-base sm:text-lg leading-relaxed text-center">
            {currentContent.description}
          </p>

          {/* Mission Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-primary/30 rounded-lg flex items-center justify-center">
                <span className="text-white text-xl">🎯</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">{currentContent.mission.title}</h3>
            </div>
            <p className="text-white/90 text-sm sm:text-base leading-relaxed mb-4">
              {currentContent.mission.description}
            </p>
            <ul className="space-y-2">
              {currentContent.mission.details.map((detail, index) => (
                <li key={`mission-${index}`} className="flex items-start gap-3 text-white/80 text-sm sm:text-base">
                  <span className="text-primary text-lg mt-0.5">✓</span>
                  <span className="flex-1">{detail}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Divider */}
          <div className="border-t-2 border-white/20"></div>

          {/* Vision Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-primary/30 rounded-lg flex items-center justify-center">
                <span className="text-white text-xl">👁️</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">{currentContent.vision.title}</h3>
            </div>
            <p className="text-white/90 text-sm sm:text-base leading-relaxed mb-4">
              {currentContent.vision.description}
            </p>
            <ul className="space-y-2">
              {currentContent.vision.details.map((detail, index) => (
                <li key={`vision-${index}`} className="flex items-start gap-3 text-white/80 text-sm sm:text-base">
                  <span className="text-primary text-lg mt-0.5">✓</span>
                  <span className="flex-1">{detail}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-gradient-to-r from-primary/20 to-primary/10 border-t border-white/10 p-4 sm:p-6">
          <button
            onClick={onClose}
            className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutModal;

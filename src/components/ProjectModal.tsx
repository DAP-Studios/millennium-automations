import { X, MapPin, Clock, Briefcase, CheckCircle2, Target } from "lucide-react";

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    title: string;
    description: string;
    scope: string[];
    results: string[];
    client: string;
    duration: string;
    location: string;
    image: string;
  } | null;
}

const ProjectModal = ({ isOpen, onClose, project }: ProjectModalProps) => {
  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="relative bg-slate-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-700">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-slate-800 hover:bg-slate-700 text-white transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Project Image */}
        <div className="relative h-64 sm:h-80 overflow-hidden rounded-t-2xl">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
          
          {/* Badges on Image */}
          <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
            <span className="bg-white/95 backdrop-blur-sm text-slate-900 text-sm font-semibold px-4 py-2 rounded-full shadow-lg flex items-center gap-2">
              <Briefcase className="w-4 h-4" />
              {project.client}
            </span>
            <span className="bg-primary/95 backdrop-blur-sm text-white text-sm font-semibold px-4 py-2 rounded-full shadow-lg flex items-center gap-2">
              <Clock className="w-4 h-4" />
              {project.duration}
            </span>
            <span className="bg-slate-800/95 backdrop-blur-sm text-white text-sm font-semibold px-4 py-2 rounded-full shadow-lg flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              {project.location}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-6">
          {/* Title & Description */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              {project.title}
            </h2>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Project Scope */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <Target className="w-6 h-6 text-primary" />
              Project Scope
            </h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {project.scope.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 bg-slate-800/50 rounded-lg p-3 border border-slate-700"
                >
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-slate-200 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Key Results */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <CheckCircle2 className="w-6 h-6 text-green-500" />
              Key Results & Impact
            </h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {project.results.map((result, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 bg-green-900/20 rounded-lg p-3 border border-green-700/30"
                >
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-200 text-sm">{result}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Contact CTA */}
          <div className="pt-4 border-t border-slate-700">
            <p className="text-slate-300 text-sm mb-4">
              Interested in a similar project? Let's discuss how we can help transform your operations.
            </p>
            <a
              href="mailto:millenniumautomationsystem@gmail.com?subject=Project Inquiry&body=Hi,%0D%0A%0D%0AI'm interested in discussing a project similar to the one I saw in your portfolio.%0D%0A%0D%0APlease contact me to discuss further.%0D%0A%0D%0AThank you"
              className="inline-flex items-center justify-center w-full px-6 py-3 bg-primary hover:bg-primary/90 text-white font-semibold rounded-lg transition-all"
            >
              Discuss Your Project
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;

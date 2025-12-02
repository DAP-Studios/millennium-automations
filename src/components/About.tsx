import { useEffect, useRef, useState } from "react";
import { Award, Target, Eye } from "lucide-react";
import aboutTeam from "@/assets/about-team.jpg";
import industrialBg from "@/assets/hero-2.jpg";
import AboutModal from "./AboutModal";

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [modalType, setModalType] = useState<'mission' | 'vision' | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal").forEach((el, index) => {
              setTimeout(() => {
                el.classList.add("active");
              }, index * 100);
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
      id="about"
      ref={sectionRef}
      className="relative h-screen w-full bg-cover bg-center overflow-hidden snap-start snap-always flex items-center justify-center"
      style={{ backgroundImage: `url(${industrialBg})` }}
    >
      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70" />
      
      <div className="container mx-auto px-3 sm:px-4 md:px-6 relative z-10 h-full flex items-center py-3 sm:py-4 md:py-6 pb-20 sm:pb-24 md:pb-28">
        <div className="w-full h-[calc(100vh-180px)] sm:h-[calc(100vh-200px)] md:h-[calc(100vh-220px)]">
          
          {/* Mobile Layout - Founder First */}
          <div className="flex lg:hidden flex-col gap-3 h-full">
            {/* Founder Section - Top on Mobile */}
            <div className="reveal bg-gradient-to-br from-primary/25 to-primary/15 backdrop-blur-md rounded-lg border-2 border-white/30 p-4 flex flex-col items-center text-center">
              <img
                src={aboutTeam}
                alt="Founder"
                className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover border-3 border-white/40 mb-2"
              />
              <h3 className="text-lg sm:text-xl font-bold text-white mb-1">Hardik Bhai</h3>
              <p className="text-white/80 text-xs mb-2">Founder</p>
              <p className="text-white/90 text-xs leading-relaxed">
                With over a decade of experience in industrial automation, our founder established MAS to bridge the gap between cutting-edge technology and reliable industrial solutions.
              </p>
            </div>

            {/* About MAS */}
            <div className="reveal bg-white/10 backdrop-blur-md rounded-lg border-2 border-white/30 p-3 flex-1 min-h-0">
              <div className="flex items-start gap-2">
                <div className="flex-shrink-0 w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center">
                  <Award className="w-4 h-4 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-base font-bold text-white mb-1.5">About MAS</h3>
                  <p className="text-white/90 text-xs leading-relaxed">
                    Millennium Automation System is an authorized distributor of Delta Electronics products based in Vapi, Gujarat.
                  </p>
                </div>
              </div>
            </div>

            {/* Mission & Vision Combined */}
            <button
              onClick={() => setModalType('mission')}
              className="reveal bg-gradient-to-br from-primary/20 to-primary/10 backdrop-blur-md rounded-lg border-2 border-white/30 p-3 hover:border-primary/50 transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                  <Target className="w-4 h-4 text-white" />
                </div>
                <div className="flex-1 text-left">
                  <h3 className="text-sm font-bold text-white">Mission & Vision</h3>
                  <p className="text-white/70 text-[10px]">Our purpose & future goals</p>
                </div>
                <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                  <Eye className="w-4 h-4 text-white" />
                </div>
              </div>
            </button>
          </div>

          {/* Desktop Layout - Original */}
          <div className="hidden lg:flex gap-4 md:gap-5 h-full">
            {/* Left Side - Two Boxes */}
            <div className="flex flex-col gap-4 md:gap-5 lg:w-[35%] h-full">
              
              {/* About MAS */}
              <div className="reveal bg-white/10 backdrop-blur-md rounded-xl border-2 border-white/30 p-6 md:p-8 flex-1 flex flex-col justify-center min-h-0">
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                    <Award className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-3">About MAS</h3>
                    <p className="text-white/90 text-sm md:text-base leading-relaxed">
                      Millennium Automation System is an authorized distributor of Delta Electronics products based in Vapi, Gujarat. We specialize in high-quality industrial automation solutions with comprehensive technical support and competitive pricing.
                    </p>
                  </div>
                </div>
              </div>

              {/* Mission & Vision Combined - Click to expand */}
              <button
                onClick={() => setModalType('mission')}
                className="reveal bg-gradient-to-br from-primary/20 to-primary/10 backdrop-blur-md rounded-xl border-2 border-white/30 p-6 md:p-8 flex-1 flex flex-col justify-center min-h-0 hover:border-primary/50 transition-all duration-300 cursor-pointer group"
              >
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-white/20 rounded-lg flex items-center justify-center group-hover:bg-white/30 transition-colors">
                    <Target className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </div>
                  <div className="flex-1 text-left">
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-3">Mission & Vision</h3>
                    <p className="text-white/90 text-sm md:text-base leading-relaxed mb-2">
                      To empower industries with world-class automation solutions and become India's most trusted automation partner.
                    </p>
                    <p className="text-white/60 text-sm group-hover:text-white/80 transition-colors">
                      Click to read more →
                    </p>
                  </div>
                  <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-white/20 rounded-lg flex items-center justify-center group-hover:bg-white/30 transition-colors">
                    <Eye className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </div>
                </div>
              </button>

            </div>

            {/* Right Side - Founder */}
            <div className="reveal bg-gradient-to-br from-primary/25 to-primary/15 backdrop-blur-md rounded-xl border-2 border-white/30 p-8 lg:p-10 lg:w-[65%] h-full flex flex-col justify-center gap-6 min-h-0">
              
              {/* Meet the Founder */}
              <div className="flex flex-col items-center text-center">
                <img
                  src={aboutTeam}
                  alt="Founder"
                  className="w-32 h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 rounded-full object-cover border-4 border-white/40 mb-4 md:mb-6"
                />
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2 md:mb-3">Hardik Bhai</h3>
                <p className="text-white/80 text-sm md:text-base mb-3 md:mb-4">Founder</p>
                <p className="text-white/90 text-sm md:text-base lg:text-lg leading-relaxed max-w-2xl mb-6">
                  With over a decade of experience in industrial automation, our founder established MAS to bridge the gap between cutting-edge technology and reliable industrial solutions.
                </p>
              </div>



            </div>
          </div>

        </div>

        {/* Stats Grid - Bottom */}
        <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 md:bottom-6 md:left-6 md:right-6">
          <div className="reveal grid grid-cols-2 sm:grid-cols-4 gap-1.5 sm:gap-2 md:gap-3">
            <div className="bg-white/10 backdrop-blur-sm rounded-md sm:rounded-lg p-1.5 sm:p-2 md:p-3 text-center hover:bg-white/20 transition-all duration-300 border border-white/20">
              <div className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-0.5 sm:mb-1">🏆</div>
              <div className="text-[10px] sm:text-xs font-semibold text-white">Authorized</div>
              <div className="text-xs text-white/80">Delta Partner</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-md sm:rounded-lg p-1.5 sm:p-2 md:p-3 text-center hover:bg-white/20 transition-all duration-300 border border-white/20">
              <div className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-0.5 sm:mb-1">📍</div>
              <div className="text-[10px] sm:text-xs font-semibold text-white">Vapi</div>
              <div className="text-[9px] sm:text-xs text-white/80">Gujarat, India</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-md sm:rounded-lg p-1.5 sm:p-2 md:p-3 text-center hover:bg-white/20 transition-all duration-300 border border-white/20">
              <div className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-0.5 sm:mb-1">⭐</div>
              <div className="text-[10px] sm:text-xs font-semibold text-white">Premium</div>
              <div className="text-[9px] sm:text-xs text-white/80">Quality Products</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-md sm:rounded-lg p-1.5 sm:p-2 md:p-3 text-center hover:bg-white/20 transition-all duration-300 border border-white/20">
              <div className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-0.5 sm:mb-1">🕐</div>
              <div className="text-[10px] sm:text-xs font-semibold text-white">24/7</div>
              <div className="text-[9px] sm:text-xs text-white/80">Support Available</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* About Modal */}
      <AboutModal 
        isOpen={modalType !== null}
        onClose={() => setModalType(null)}
        type={modalType}
      />
    </section>
  );
};

export default About;

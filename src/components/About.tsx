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
        <div className="w-full h-[calc(100vh-160px)] sm:h-[calc(100vh-180px)] md:h-[calc(100vh-200px)] overflow-hidden">
          
          {/* Mobile Layout - Founder Larger, Combined Info Smaller */}
          <div className="flex lg:hidden flex-col gap-2 h-full">
            {/* Founder Section - Larger (60% of space) */}
            <div className="reveal bg-gradient-to-br from-primary/25 to-primary/15 backdrop-blur-md rounded-lg border-2 border-white/30 p-4 flex flex-col items-center text-center overflow-hidden flex-[3]">
              <img
                src={aboutTeam}
                alt="Founder"
                className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover border-2 border-white/40 mb-2 flex-shrink-0"
              />
              <h3 className="text-lg sm:text-xl font-bold text-white mb-1">Hardik Bhai</h3>
              <p className="text-white/80 text-sm mb-2">Founder & Visionary Leader</p>
              <p className="text-white/90 text-xs sm:text-sm leading-relaxed line-clamp-4">
                With over a decade of experience in industrial automation, our founder established MAS to bridge the gap between cutting-edge technology and reliable industrial solutions.
              </p>
            </div>

            {/* Combined About, Mission & Vision Section - Smaller (40% of space) */}
            <div className="reveal bg-white/10 backdrop-blur-md rounded-lg border-2 border-white/30 p-3 flex-[2] min-h-0 overflow-hidden">
              <div className="flex flex-col gap-3 h-full">
                {/* About MAS */}
                <div className="flex items-start gap-2">
                  <div className="flex-shrink-0 w-6 h-6 bg-primary/20 rounded-md flex items-center justify-center">
                    <Award className="w-3 h-3 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-bold text-white mb-1">About MAS</h3>
                    <p className="text-white/90 text-[10px] leading-tight line-clamp-2">
                      Authorized distributor of Delta Electronics products based in Vapi, Gujarat.
                    </p>
                  </div>
                </div>

                {/* Mission & Vision Button */}
                <button
                  onClick={() => setModalType('mission')}
                  className="bg-gradient-to-br from-primary/20 to-primary/10 rounded-md border border-white/20 p-2.5 hover:border-primary/50 transition-all duration-300 cursor-pointer overflow-hidden"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-white/20 rounded-md flex items-center justify-center flex-shrink-0">
                      <Target className="w-3 h-3 text-white" />
                    </div>
                    <div className="flex-1 text-left min-w-0">
                      <h3 className="text-xs font-bold text-white truncate">Mission & Vision</h3>
                      <p className="text-white/70 text-[9px] truncate">Our purpose & future goals</p>
                    </div>
                    <div className="w-6 h-6 bg-white/20 rounded-md flex items-center justify-center flex-shrink-0">
                      <Eye className="w-3 h-3 text-white" />
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>

          {/* Desktop Layout - Original */}
          <div className="hidden lg:flex gap-4 md:gap-5 h-full">
            {/* Left Side - Two Boxes */}
            <div className="flex flex-col gap-4 md:gap-5 lg:w-[35%] h-full">
              
              {/* About MAS - Compact Dynamic Section */}
              <div className="reveal group bg-white/10 backdrop-blur-md rounded-xl md:rounded-2xl border-2 border-white/30 hover:border-white/50 p-4 md:p-5 lg:p-6 flex-1 flex flex-col justify-center min-h-0 transition-all duration-500 hover:bg-white/15 hover:shadow-2xl hover:scale-[1.01] overflow-hidden">
                <div className="flex items-start gap-2 md:gap-3 lg:gap-4">
                  <div className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-primary/20 group-hover:bg-primary/30 rounded-lg md:rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                    <Award className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-white drop-shadow-lg" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-white mb-2 md:mb-3 group-hover:text-primary-foreground transition-all duration-300 group-hover:tracking-wide">About MAS</h3>
                    <p className="text-white/90 text-xs md:text-sm lg:text-base leading-relaxed group-hover:text-white transition-all duration-300 line-clamp-4">
                      Millennium Automation System is an authorized distributor of Delta Electronics products based in Vapi, Gujarat. We specialize in high-quality industrial automation solutions with comprehensive technical support and competitive pricing.
                    </p>
                  </div>
                </div>
              </div>

              {/* Mission & Vision Combined - Compact Interactive Button */}
              <button
                onClick={() => setModalType('mission')}
                className="reveal bg-gradient-to-br from-primary/20 to-primary/10 backdrop-blur-md rounded-xl md:rounded-2xl border-2 border-white/30 p-4 md:p-5 lg:p-6 flex-1 flex flex-col justify-center min-h-0 hover:border-primary/50 hover:from-primary/30 hover:to-primary/20 transition-all duration-300 cursor-pointer group hover:shadow-2xl hover:scale-[1.01] active:scale-[0.98] active:duration-75 overflow-hidden"
              >
                <div className="flex items-start gap-2 md:gap-3 lg:gap-4">
                  <div className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-white/20 rounded-lg md:rounded-xl flex items-center justify-center group-hover:bg-white/30 group-hover:scale-110 group-hover:-rotate-3 transition-all duration-300">
                    <Target className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-white drop-shadow-lg" />
                  </div>
                  <div className="flex-1 text-left min-w-0">
                    <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-white mb-2 md:mb-3 group-hover:tracking-wide transition-all duration-300">Mission & Vision</h3>
                    <p className="text-white/90 text-xs md:text-sm lg:text-base leading-relaxed mb-1.5 md:mb-2 group-hover:text-white transition-colors duration-300 line-clamp-3">
                      To empower industries with world-class automation solutions and become India's most trusted automation partner.
                    </p>
                    <p className="text-white/60 text-xs md:text-sm group-hover:text-white/80 transition-all duration-300 group-hover:translate-x-1 flex items-center gap-1">
                      Click to read more 
                      <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </p>
                  </div>
                  <div className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-white/20 rounded-lg md:rounded-xl flex items-center justify-center group-hover:bg-white/30 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <Eye className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-white drop-shadow-lg" />
                  </div>
                </div>
              </button>

            </div>

            {/* Right Side - Founder - Compact Dynamic Section */}
            <div className="reveal group bg-gradient-to-br from-primary/25 to-primary/15 backdrop-blur-md rounded-xl md:rounded-2xl border-2 border-white/30 hover:border-white/50 p-6 lg:p-8 xl:p-10 lg:w-[65%] h-full flex flex-col justify-center gap-4 lg:gap-6 min-h-0 transition-all duration-500 hover:from-primary/35 hover:to-primary/25 hover:shadow-2xl overflow-hidden">
              
              {/* Meet the Founder - Compact */}
              <div className="flex flex-col items-center text-center">
                <div className="relative">
                  <img
                    src={aboutTeam}
                    alt="Founder"
                    className="w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 xl:w-36 xl:h-36 rounded-full object-cover border-3 border-white/40 group-hover:border-white/60 mb-3 md:mb-4 transition-all duration-500 group-hover:scale-110 group-hover:shadow-2xl flex-shrink-0"
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <h3 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-white mb-1.5 md:mb-2 group-hover:text-primary-foreground group-hover:tracking-wide group-hover:drop-shadow-lg transition-all duration-300">Hardik Bhai</h3>
                <p className="text-white/80 text-xs md:text-sm lg:text-base mb-2 md:mb-3 group-hover:text-white transition-colors duration-300">Founder & Visionary Leader</p>
                <p className="text-white/90 text-xs md:text-sm lg:text-base xl:text-lg leading-relaxed max-w-xl mb-4 group-hover:text-white transition-all duration-300 line-clamp-4">
                  With over a decade of experience in industrial automation, our founder established MAS to bridge the gap between cutting-edge technology and reliable industrial solutions.
                </p>
              </div>



            </div>
          </div>

        </div>

        {/* Stats Grid - Enhanced Dynamic Bottom Section */}
        <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 md:bottom-6 md:left-6 md:right-6 lg:bottom-8 lg:left-8 lg:right-8">
          <div className="reveal grid grid-cols-2 sm:grid-cols-4 gap-1.5 sm:gap-2 md:gap-3 lg:gap-4">
            <div className="group bg-white/10 backdrop-blur-sm rounded-md sm:rounded-lg md:rounded-xl p-1.5 sm:p-2 md:p-3 lg:p-4 text-center hover:bg-white/20 hover:scale-105 hover:shadow-lg transition-all duration-300 border border-white/20 hover:border-white/40 cursor-pointer">
              <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white mb-0.5 sm:mb-1 group-hover:scale-125 group-hover:animate-bounce transition-all duration-300">🏆</div>
              <div className="text-[10px] sm:text-xs md:text-sm font-semibold text-white group-hover:text-yellow-200 transition-colors duration-300">Authorized</div>
              <div className="text-[9px] sm:text-xs text-white/80 group-hover:text-white transition-colors duration-300">Delta Partner</div>
            </div>
            <div className="group bg-white/10 backdrop-blur-sm rounded-md sm:rounded-lg md:rounded-xl p-1.5 sm:p-2 md:p-3 lg:p-4 text-center hover:bg-white/20 hover:scale-105 hover:shadow-lg transition-all duration-300 border border-white/20 hover:border-white/40 cursor-pointer">
              <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white mb-0.5 sm:mb-1 group-hover:scale-125 group-hover:animate-pulse transition-all duration-300">📍</div>
              <div className="text-[10px] sm:text-xs md:text-sm font-semibold text-white group-hover:text-blue-200 transition-colors duration-300">Vapi</div>
              <div className="text-[9px] sm:text-xs text-white/80 group-hover:text-white transition-colors duration-300">Gujarat, India</div>
            </div>
            <div className="group bg-white/10 backdrop-blur-sm rounded-md sm:rounded-lg md:rounded-xl p-1.5 sm:p-2 md:p-3 lg:p-4 text-center hover:bg-white/20 hover:scale-105 hover:shadow-lg transition-all duration-300 border border-white/20 hover:border-white/40 cursor-pointer">
              <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white mb-0.5 sm:mb-1 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300">⭐</div>
              <div className="text-[10px] sm:text-xs md:text-sm font-semibold text-white group-hover:text-green-200 transition-colors duration-300">Premium</div>
              <div className="text-[9px] sm:text-xs text-white/80 group-hover:text-white transition-colors duration-300">Quality Products</div>
            </div>
            <div className="group bg-white/10 backdrop-blur-sm rounded-md sm:rounded-lg md:rounded-xl p-1.5 sm:p-2 md:p-3 lg:p-4 text-center hover:bg-white/20 hover:scale-105 hover:shadow-lg transition-all duration-300 border border-white/20 hover:border-white/40 cursor-pointer">
              <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white mb-0.5 sm:mb-1 group-hover:scale-125 group-hover:animate-spin transition-all duration-300">🕐</div>
              <div className="text-[10px] sm:text-xs md:text-sm font-semibold text-white group-hover:text-purple-200 transition-colors duration-300">24/7</div>
              <div className="text-[9px] sm:text-xs text-white/80 group-hover:text-white transition-colors duration-300">Support Available</div>
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

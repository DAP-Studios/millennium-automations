import { useEffect, useRef } from "react";
import { Award, Target, Eye } from "lucide-react";
import aboutTeam from "@/assets/about-team.jpg";
import industrialBg from "@/assets/hero-2.jpg";

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

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
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10 h-full flex items-center py-4 sm:py-6 pb-24 sm:pb-28">
        <div className="w-full flex flex-col lg:flex-row gap-4 sm:gap-5 h-[calc(100vh-200px)] sm:h-[calc(100vh-220px)]">
          
          {/* Left Side - Two Boxes */}
          <div className="flex flex-col gap-4 sm:gap-5 lg:w-[35%] h-full">
            
            {/* About MAS */}
            <div className="reveal bg-white/10 backdrop-blur-md rounded-xl border-2 border-white/30 p-6 sm:p-8 flex-1 flex flex-col justify-center min-h-0">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                  <Award className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">About MAS</h3>
                  <p className="text-white/90 text-sm sm:text-base leading-relaxed">
                    Millennium Automation System is an authorized distributor of Delta Electronics products based in Vapi, Gujarat. We specialize in high-quality industrial automation solutions with comprehensive technical support and competitive pricing.
                  </p>
                </div>
              </div>
            </div>

            {/* Our Mission */}
            <div className="reveal bg-gradient-to-br from-primary/20 to-primary/10 backdrop-blur-md rounded-xl border-2 border-white/30 p-6 sm:p-8 flex-1 flex flex-col justify-center min-h-0">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-white/20 rounded-lg flex items-center justify-center">
                  <Target className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">Our Mission</h3>
                  <p className="text-white/90 text-sm sm:text-base leading-relaxed">
                    To empower industries with world-class automation solutions that enhance productivity, efficiency, and sustainability while maintaining the highest standards of quality and support.
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Side - Large Box with Founder and Vision */}
          <div className="reveal bg-gradient-to-br from-primary/25 to-primary/15 backdrop-blur-md rounded-xl border-2 border-white/30 p-6 sm:p-8 lg:p-10 lg:w-[65%] h-full flex flex-col justify-center gap-8 sm:gap-12 min-h-0">
            
            {/* Meet the Founder */}
            <div className="flex flex-col items-center text-center flex-1 justify-center">
              <img
                src={aboutTeam}
                alt="Founder"
                className="w-32 h-32 sm:w-36 sm:h-36 lg:w-40 lg:h-40 rounded-full object-cover border-4 border-white/40 mb-4 sm:mb-6"
              />
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2 sm:mb-3">Hardik Bhai</h3>
              <p className="text-white/80 text-sm sm:text-base mb-3 sm:mb-4">Founder</p>
              <p className="text-white/90 text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl">
                With over a decade of experience in industrial automation, our founder established MAS to bridge the gap between cutting-edge technology and reliable industrial solutions.
                              With over a decade of experience in industrial automation, our founder established MAS to bridge the gap between cutting-edge technology and reliable industrial solutions.

              </p>
            </div>

            {/* Divider */}
            {/* <div className="border-t-2 border-white/30"></div> */}

            {/* Our Vision */}
            {/* <div className="flex flex-col items-center text-center flex-1 justify-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/20 rounded-xl flex items-center justify-center mb-4 sm:mb-6">
                <Eye className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4">Our Vision</h3>
              <p className="text-white/90 text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl">
                To become India's most trusted automation partner, recognized for innovation, reliability, and customer-centric solutions that drive industrial transformation.
              </p>
            </div> */}

          </div>

        </div>

        {/* Stats Grid - Bottom */}
        <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6">
          <div className="reveal grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2 sm:p-3 text-center hover:bg-white/20 transition-all duration-300 border border-white/20">
              <div className="text-xl sm:text-2xl font-bold text-white mb-1">🏆</div>
              <div className="text-xs font-semibold text-white">Authorized</div>
              <div className="text-xs text-white/80">Delta Partner</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2 sm:p-3 text-center hover:bg-white/20 transition-all duration-300 border border-white/20">
              <div className="text-xl sm:text-2xl font-bold text-white mb-1">📍</div>
              <div className="text-xs font-semibold text-white">Vapi</div>
              <div className="text-xs text-white/80">Gujarat, India</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2 sm:p-3 text-center hover:bg-white/20 transition-all duration-300 border border-white/20">
              <div className="text-xl sm:text-2xl font-bold text-white mb-1">⭐</div>
              <div className="text-xs font-semibold text-white">Premium</div>
              <div className="text-xs text-white/80">Quality Products</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2 sm:p-3 text-center hover:bg-white/20 transition-all duration-300 border border-white/20">
              <div className="text-xl sm:text-2xl font-bold text-white mb-1">🕐</div>
              <div className="text-xs font-semibold text-white">24/7</div>
              <div className="text-xs text-white/80">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

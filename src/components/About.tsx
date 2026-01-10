import { useEffect, useRef, useState } from "react";
import { Award, Target, MapPin } from "lucide-react";
import aboutTeam from "@/assets/about-team.jpg";
import industrialBg from "@/assets/hero-2.jpg";
import masLogo from "@/assets/logo.png";
import deltaLogo from "@/assets/delta.png";

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
      className="relative min-h-screen w-full bg-cover bg-center flex items-center justify-center py-12 sm:py-16 md:py-20"
      style={{ backgroundImage: `url(${industrialBg})` }}
    >
      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/65 to-black/75" />
      
      <div className="container mx-auto px-3 sm:px-4 md:px-6 relative z-10 w-full">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16 reveal">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-md mb-3">
            About Millennium
          </h2>
          <p className="text-white/80 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
            Leading the automation revolution with innovation and excellence
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 mb-12 sm:mb-16 items-stretch">
          {/* Left Column - About Info */}
          <div className="space-y-6 sm:space-y-8 flex flex-col justify-start">
            {/* About MAS Card */}
            <div className="reveal group bg-white/10 backdrop-blur-xl rounded-3xl border-2 border-white/20 hover:border-blue-400/60 p-8 sm:p-10 transition-all duration-500 hover:shadow-2xl overflow-hidden shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
              <div className="relative z-10">
                <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4">About Millennium</h3>
                <p className="text-white/90 text-sm sm:text-base leading-relaxed group-hover:text-white transition-all duration-300 mb-6">
                  Millennium Automation System is an authorized <strong>dealer and supplier of Delta Electronics products in Vapi, Gujarat</strong>. 
                  We stock and supply <strong>Delta Drive in Vapi</strong>, <strong>Delta VFD in Vapi</strong>, <strong>Delta HMI in Vapi</strong>, 
                  and <strong>Delta PLC in Vapi</strong>. We specialize in high-quality industrial automation solutions including ME300 Series, 
                  MS300 Series, C2000 Series, CP2000 Series, REG 2000 Series from 0.5 HP, 1 HP, 2 HP, 5 HP and more, 
                  with comprehensive technical support and competitive pricing.
                </p>
                <p className="text-white/80 text-sm sm:text-base leading-relaxed">
                  We are committed to delivering world-class automation solutions and becoming India's most trusted automation partner through innovation and excellence.
                </p>
              </div>
            </div>

            {/* Quick Info Cards */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <button
                onClick={() => window.open('https://www.deltaww.com', '_blank')}
                className="reveal group bg-white/10 backdrop-blur-xl rounded-xl border-2 border-emerald-400/40 hover:border-emerald-400/80 p-4 sm:p-5 text-center transition-all duration-300 hover:shadow-2xl hover:scale-105 cursor-pointer shadow-lg hover:bg-emerald-400/20"
              >
                <img src={deltaLogo} alt="Delta" className="h-8 sm:h-10 text-emerald-200 mx-auto mb-2" />
                <div className="text-sm font-bold text-emerald-200">Delta Channel Partner</div>
                <div className="text-xs text-white/60 group-hover:text-white transition-colors">Click to visit</div>
              </button>
              <button
                onClick={() => window.open('https://maps.google.com/?q=Vapi,Gujarat', '_blank')}
                className="reveal group bg-white/10 backdrop-blur-xl rounded-xl border-2 border-orange-400/40 hover:border-orange-400/80 p-4 sm:p-5 text-center transition-all duration-300 hover:shadow-2xl hover:scale-105 cursor-pointer shadow-lg hover:bg-orange-400/20"
              >
                <MapPin className="w-8 h-8 sm:w-10 sm:h-10 text-orange-200 mx-auto mb-2" />
                <div className="text-sm font-bold text-orange-200">Vapi, Gujarat</div>
                <div className="text-xs text-white/60 group-hover:text-white transition-colors">View on map</div>
              </button>
            </div>
          </div>

          {/* Right Column - Founder & Logo */}
          <div className="reveal group bg-white/10 backdrop-blur-xl rounded-3xl border-2 border-white/20 hover:border-amber-400/60 p-8 sm:p-10 transition-all duration-500 hover:shadow-2xl overflow-hidden flex flex-col items-center justify-start shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-400/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
            <div className="relative z-10 flex flex-col items-center text-center w-full">
              <div className="flex items-center justify-center gap-8 sm:gap-12 mb-8">
                {/* MAS Logo */}
                <img
                  src={masLogo}
                  alt="MAS Logo"
                  className="w-44 h-44 rounded-full border-4 border-amber-300/50 group-hover:border-amber-300 group-hover:scale-110 group-hover:shadow-2xl transition-all duration-500 object-contain bg-transparent p-1"
                />
                {/* Hardik Image */}
                <img
                  src={aboutTeam}
                  alt="Hardik Makwana"
                  className="w-44 h-44 rounded-full object-contain border-4 border-amber-300/50 group-hover:border-amber-300 group-hover:scale-110 group-hover:shadow-2xl transition-all duration-500"
                />
              </div>
              <h3 className="text-3xl sm:text-4xl font-bold text-white mb-2 group-hover:text-amber-100 transition-colors duration-300">Hardik Makwana</h3>
              <p className="text-amber-200 text-base sm:text-lg mb-4 font-semibold">Founder & Visionary Leader</p>
              <p className="text-white/90 text-sm sm:text-base leading-relaxed group-hover:text-white transition-all duration-300 max-w-xs">
                With over a decade of experience in industrial automation, dedicated to bridging the gap between cutting-edge technology and reliable industrial solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

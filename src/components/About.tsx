import { useEffect, useRef, useState } from "react";
import { Award, Target, MapPin, X } from "lucide-react";
import aboutTeam from "@/assets/about-team.jpg";
import industrialBg from "@/assets/hero-2.jpg";
import masLogo from "@/assets/logo.png";
import deltaLogo from "@/assets/delta.png";
import deltaCertificate from "@/assets/images/certi.png";

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [showCertificate, setShowCertificate] = useState(false);

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
      
      <div className="container mx-auto px-2 sm:px-4 md:px-6 relative z-10 w-full">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-12 md:mb-16 reveal">
          <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-md mb-2 sm:mb-3">
            About Millennium
          </h2>
          <p className="text-white/80 text-xs sm:text-base md:text-lg max-w-2xl mx-auto px-2">
            Leading the automation revolution with innovation and excellence
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-8 md:gap-12 mb-8 sm:mb-16 items-stretch">
          {/* Left Column - About Info */}
          <div className="space-y-6 sm:space-y-8 flex flex-col justify-start">
            {/* About MAS Card */}
            <div className="reveal group bg-white/10 backdrop-blur-xl rounded-2xl sm:rounded-3xl border-2 border-white/20 hover:border-blue-400/60 p-4 sm:p-6 md:p-10 transition-all duration-500 hover:shadow-2xl overflow-hidden shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
              <div className="relative z-10">
                <h3 className="text-xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">About Millennium</h3>
                <p className="text-white/90 text-xs sm:text-sm md:text-base leading-relaxed group-hover:text-white transition-all duration-300 mb-4 sm:mb-6">
                  Millennium Automation System is an authorized <strong>dealer and supplier of Delta Electronics products in Vapi, Gujarat</strong>. 
                  We stock and supply <strong>Delta Drive in Vapi</strong>, <strong>Delta VFD in Vapi</strong>, <strong>Delta HMI in Vapi</strong>, 
                  and <strong>Delta PLC in Vapi</strong>. We specialize in high-quality industrial automation solutions including ME300 Series, 
                  MS300 Series, C2000 Series, CP2000 Series, REG 2000 Series from 0.5 HP, 1 HP, 2 HP, 5 HP and more, 
                  with comprehensive technical support and competitive pricing.
                </p>
                <p className="text-white/80 text-xs sm:text-sm md:text-base leading-relaxed">
                  We are committed to delivering world-class automation solutions and becoming India's most trusted automation partner through innovation and excellence.
                </p>
              </div>
            </div>

            {/* Quick Info Cards */}
            <div className="grid grid-cols-2 gap-2 sm:gap-3 md:gap-4">
              <button
                onClick={() => setShowCertificate(true)}
                className="reveal group bg-white/10 backdrop-blur-xl rounded-lg sm:rounded-xl border-2 border-emerald-400/40 hover:border-emerald-400/80 p-2 sm:p-4 md:p-5 text-center transition-all duration-300 hover:shadow-2xl hover:scale-105 cursor-pointer shadow-lg hover:bg-emerald-400/20"
              >
                <img src={deltaLogo} alt="Delta" className="h-6 sm:h-8 md:h-10 mx-auto mb-1 sm:mb-2" />
                <div className="text-xs sm:text-sm font-bold text-emerald-200">Delta Certificate</div>
                <div className="text-xs text-white/60 group-hover:text-white transition-colors hidden sm:block">View Certificate</div>
              </button>
              <button
<<<<<<< HEAD
                onClick={() => window.open('https://share.google/Nn7iV4TaW9cJoD2xw', '_blank')}
=======
                onClick={() => window.open('https://maps.google.com/?q=Vapi,Gujarat', '_blank')}
>>>>>>> 5d8b0611ac9b1143bf3b7f8ca3ea9a3addf6f00f
                className="reveal group bg-white/10 backdrop-blur-xl rounded-lg sm:rounded-xl border-2 border-orange-400/40 hover:border-orange-400/80 p-2 sm:p-4 md:p-5 text-center transition-all duration-300 hover:shadow-2xl hover:scale-105 cursor-pointer shadow-lg hover:bg-orange-400/20"
              >
                <MapPin className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-orange-200 mx-auto mb-1 sm:mb-2" />
                <div className="text-xs sm:text-sm font-bold text-orange-200">Vapi, Gujarat</div>
                <div className="text-xs text-white/60 group-hover:text-white transition-colors hidden sm:block">View on map</div>
              </button>
            </div>
          </div>

          {/* Right Column - Founder & Logo */}
          <div className="reveal group bg-white/10 backdrop-blur-xl rounded-2xl sm:rounded-3xl border-2 border-white/20 hover:border-amber-400/60 p-4 sm:p-6 md:p-10 transition-all duration-500 hover:shadow-2xl overflow-hidden flex flex-col items-center justify-start shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-400/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
            <div className="relative z-10 flex flex-col items-center text-center w-full">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 md:gap-12 mb-4 sm:mb-8 w-full">
                {/* MAS Logo */}
                <img
                  src={masLogo}
                  alt="MAS Logo"
                  className="w-28 sm:w-40 md:w-44 h-28 sm:h-40 md:h-44 rounded-full border-3 sm:border-4 border-amber-300/50 group-hover:border-amber-300 group-hover:scale-110 group-hover:shadow-2xl transition-all duration-500 object-contain bg-transparent p-1"
                />
                {/* Hardik Image */}
                <img
                  src={aboutTeam}
                  alt="Hardik Makwana"
                  className="w-28 sm:w-40 md:w-44 h-28 sm:h-40 md:h-44 rounded-full object-contain border-3 sm:border-4 border-amber-300/50 group-hover:border-amber-300 group-hover:scale-110 group-hover:shadow-2xl transition-all duration-500"
                />
              </div>
              <h3 className="text-lg sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2 group-hover:text-amber-100 transition-colors duration-300">Hardik Makwana</h3>
              <p className="text-amber-200 text-sm sm:text-base md:text-lg mb-2 sm:mb-4 font-semibold">Founder & Visionary Leader</p>
              <p className="text-white/90 text-xs sm:text-sm md:text-base leading-relaxed group-hover:text-white transition-all duration-300 max-w-xs px-2">
                With over a decade of experience in industrial automation, dedicated to bridging the gap between cutting-edge technology and reliable industrial solutions.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Certificate Modal */}
      {showCertificate && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-2 sm:p-4" onClick={() => setShowCertificate(false)}>
          <div className="bg-white rounded-xl sm:rounded-2xl max-w-5xl w-full max-h-[95vh] overflow-auto shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between p-3 sm:p-6 border-b border-gray-200 sticky top-0 bg-white rounded-t-xl sm:rounded-t-2xl">
              <h3 className="text-lg sm:text-2xl font-bold text-gray-800">Delta Certificate</h3>
              <button onClick={() => setShowCertificate(false)} className="p-1 sm:p-2 hover:bg-gray-100 rounded-lg transition-colors flex-shrink-0">
                <X className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" />
              </button>
            </div>
            <div className="p-3 sm:p-6">
              <img src={deltaCertificate} alt="Delta Certificate" className="w-full h-auto rounded-lg" />
            </div>
          </div>
        </div>

      )}
    </section>
  );
}

export default About;

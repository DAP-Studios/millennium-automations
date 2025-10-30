import { useEffect, useRef } from "react";
import aboutTeam from "@/assets/about-team.jpg";

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
              }, index * 150);
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
      className="py-24 bg-white overflow-hidden"
    >
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="reveal order-2 md:order-1">
            <div className="relative">
              <img
                src={aboutTeam}
                alt="Our Team"
                className="rounded-2xl shadow-2xl w-full relative z-10"
              />
              <div className="absolute -bottom-6 -right-6 w-full h-full bg-primary/5 rounded-2xl -z-10" />
            </div>
          </div>
          <div className="space-y-8 order-1 md:order-2">
            <div className="reveal">
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                About MAS
              </h2>
            </div>
            <div className="reveal space-y-6">
              <p className="text-muted-foreground text-base leading-relaxed">
                Millennium Automation System is an authorized distributor of Delta Electronics products based in Vapi, Gujarat. Established in 2023, we specialize in providing high-quality industrial automation solutions.
              </p>
              <p className="text-muted-foreground text-base leading-relaxed">
                Our products are in high demand due to their premium quality and affordable prices. We offer a comprehensive range of Delta Electronics automation components including VFDs, PLCs, HMIs, Servo Systems, and various electrical control components.
              </p>
              <p className="text-muted-foreground text-base leading-relaxed">
                As an authorized channel partner of Delta Electronics, we deliver world-class automation solutions backed by comprehensive technical support, genuine products, and competitive pricing.
              </p>
            </div>
            
            <div className="reveal grid grid-cols-2 gap-6 pt-4">
              <div className="text-center p-6 bg-secondary/30 rounded-xl">
                <div className="text-3xl font-bold text-primary mb-2">🏆</div>
                <div className="text-sm font-semibold text-primary">Authorized</div>
                <div className="text-xs text-muted-foreground mt-1">Delta Partner</div>
              </div>
              <div className="text-center p-6 bg-secondary/30 rounded-xl">
                <div className="text-3xl font-bold text-primary mb-2">📍</div>
                <div className="text-sm font-semibold text-primary">Vapi</div>
                <div className="text-xs text-muted-foreground mt-1">Gujarat, India</div>
              </div>
              <div className="text-center p-6 bg-secondary/30 rounded-xl">
                <div className="text-3xl font-bold text-primary mb-2">⭐</div>
                <div className="text-sm font-semibold text-primary">Premium</div>
                <div className="text-xs text-muted-foreground mt-1">Quality Products</div>
              </div>
              <div className="text-center p-6 bg-secondary/30 rounded-xl">
                <div className="text-3xl font-bold text-primary mb-2">🕐</div>
                <div className="text-sm font-semibold text-primary">24/7</div>
                <div className="text-xs text-muted-foreground mt-1">Support Available</div>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values Section */}
        <div className="mt-24">
          <h3 className="text-3xl font-bold text-primary text-center mb-12 reveal">Our Core Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: "🎯", title: "Excellence", desc: "Committed to delivering the highest quality solutions that exceed industry standards" },
              { icon: "🤝", title: "Collaboration", desc: "Working closely with clients as partners to achieve shared success" },
              { icon: "💡", title: "Innovation", desc: "Continuously adopting cutting-edge technologies to solve complex challenges" },
              { icon: "✨", title: "Integrity", desc: "Operating with transparency, honesty, and ethical business practices" }
            ].map((value, index) => (
              <div key={index} className="reveal text-center p-6 bg-secondary/20 rounded-xl hover:bg-secondary/30 transition-colors duration-300">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h4 className="text-lg font-bold text-primary mb-3">{value.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

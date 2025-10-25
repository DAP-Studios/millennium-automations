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
          <div className="reveal">
            <div className="relative">
              <img
                src={aboutTeam}
                alt="Our Team"
                className="rounded-2xl shadow-2xl w-full relative z-10"
              />
              <div className="absolute -bottom-6 -right-6 w-full h-full bg-accent/10 rounded-2xl -z-10" />
            </div>
          </div>
          <div className="space-y-6">
            <div className="reveal">
              <span className="text-accent font-semibold text-sm tracking-wider uppercase">
                About Us
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-primary mt-3 mb-6">
                Smart Systems, Better Solution
              </h2>
            </div>
            <div className="reveal space-y-4">
              <p className="text-muted-foreground text-lg leading-relaxed">
                Millennium Automation System (MAS) is an authorised channel partner 
                for Delta Electronics, serving industries across Gujarat from our 
                base in Vapi. We specialize in providing comprehensive automation 
                solutions including VFDs, PLCs, HMIs, Servo Systems, and custom 
                control panels.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                With expert technical support and a complete range of Delta Electronics 
                products, we deliver reliable automation systems that enhance efficiency, 
                reduce operational costs, and drive industrial growth. Our experienced 
                team is committed to engineering smart solutions tailored to your specific 
                business needs.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                From initial consultation to final commissioning, we provide end-to-end 
                support, ensuring seamless integration and optimal performance of your 
                automation systems.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

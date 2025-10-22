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
                Who We Are
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-primary mt-3 mb-6">
                Driving Industrial Progress with Automation Excellence
              </h2>
            </div>
            <div className="reveal space-y-4">
              <p className="text-muted-foreground text-lg leading-relaxed">
                Millennium Automation System is a premier provider of industrial
                automation solutions and an authorized channel partner for Delta
                Electronics. We empower industries by delivering a comprehensive
                portfolio of high-quality automation products and integrated
                systems.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Our mission is to engineer smart, reliable, and efficient
                solutions that boost productivity and drive innovation for our
                clients, ensuring they stay ahead in a competitive landscape.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

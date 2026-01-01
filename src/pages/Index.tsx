import { useEffect, useRef } from "react";
import HeroSlider from "@/components/HeroSlider";
import About from "@/components/About";
import WhyChooseUs from "@/components/WhyChooseUs";
import Products from "@/components/Products";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

const Index = () => {
  const mainRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Scroll to top on mount/reload
    if (mainRef.current) {
      mainRef.current.scrollTo(0, 0);
    }
  }, []);

  return (
    <div className="min-h-screen">
      <main ref={mainRef} className="min-h-screen w-full">
        <HeroSlider />
        <Products />
        <About />
        <Services />
        <Projects />
        <WhyChooseUs />
        <Contact />
      </main>
    </div>
  );
};

export default Index;

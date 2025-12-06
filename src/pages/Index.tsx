import { useEffect, useRef } from "react";
import HeroSlider from "@/components/HeroSlider";
import About from "@/components/About";
import WhyChooseUs from "@/components/WhyChooseUs";
import Products from "@/components/Products";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import SEO from "@/components/SEO";
import { defaultSEO } from "@/lib/seoConfig";

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
      <SEO
        title={defaultSEO.title}
        description={defaultSEO.description}
        keywords={defaultSEO.keywords}
        canonical={defaultSEO.canonical}
        ogImage={defaultSEO.ogImage}
        ogType={defaultSEO.ogType}
      />
      <main ref={mainRef} className="snap-y snap-mandatory overflow-y-scroll h-screen">
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

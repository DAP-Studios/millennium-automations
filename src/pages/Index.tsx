import { useEffect, useRef } from "react";
import HeroSlider from "@/components/HeroSlider";
import About from "@/components/About";
import WhyChooseUs from "@/components/WhyChooseUs";
import Products from "@/components/Products";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import DeltaProductsInfo from "@/components/DeltaProductsInfo";
import Header from "@/components/Header";
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
      <Header />
      <main ref={mainRef} className="w-full">
        <HeroSlider />
        <Products />
        <About />
        <Services />
        <Projects />
        <WhyChooseUs />
        <Contact />
        <DeltaProductsInfo />
      </main>
    </div>
  );
};

export default Index;

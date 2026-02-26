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
<<<<<<< HEAD
=======
import { generateOrganizationSchema } from "@/lib/structuredData";
>>>>>>> 5d8b0611ac9b1143bf3b7f8ca3ea9a3addf6f00f

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
<<<<<<< HEAD
=======
        structuredData={generateOrganizationSchema()}
>>>>>>> 5d8b0611ac9b1143bf3b7f8ca3ea9a3addf6f00f
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

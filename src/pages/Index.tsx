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
import { generateOrganizationSchema, generateLocalBusinessSchema, generateServiceSchema } from "@/lib/structuredData";

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
        structuredData={[
          generateOrganizationSchema(),
          generateLocalBusinessSchema(),
          generateServiceSchema({
            name: "PLC Programming & Commissioning",
            description: "Delta PLC programming, logic development, I/O mapping, and on-site commissioning in Vapi and Gujarat.",
            serviceType: "Industrial Automation Service",
            areaServed: ["Vapi", "Daman", "Silvasa", "Valsad", "Gujarat State"]
          }),
          generateServiceSchema({
            name: "HMI Design & Integration",
            description: "Delta HMI screen design, tags, recipes, and integration with PLC/Drives.",
            serviceType: "Industrial Automation Service",
            areaServed: ["Vapi", "Daman", "Silvasa", "Valsad", "Gujarat State"]
          }),
          generateServiceSchema({
            name: "VFD Sizing & Commissioning",
            description: "Delta VFD selection, parameterization, and site commissioning for AC drives.",
            serviceType: "Industrial Automation Service",
            areaServed: ["Vapi", "Daman", "Silvasa", "Valsad", "Gujarat State"]
          }),
          generateServiceSchema({
            name: "SCADA Integration",
            description: "SCADA setup, data logging, alarms, and dashboards integrated with Delta PLC/HMI.",
            serviceType: "Industrial Automation Service",
            areaServed: ["Vapi", "Daman", "Silvasa", "Valsad", "Gujarat State"]
          })
        ]}
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

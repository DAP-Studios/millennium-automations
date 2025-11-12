import Header from "@/components/Header";
import HeroSlider from "@/components/HeroSlider";
import About from "@/components/About";
import WhyChooseUs from "@/components/WhyChooseUs";
import Products from "@/components/Products";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSlider />
        <div className="site-bg">
          <Products />
          <About />
          <Services />
          
          <Projects />
          <WhyChooseUs />
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;

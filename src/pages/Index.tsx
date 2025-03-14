
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import NewsEvents from "@/components/NewsEvents";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";
import HomeImageCarousel from "@/components/HomeImageCarousel";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="bg-primary py-8 md:py-10 text-center relative">
        <HomeImageCarousel sectionId="header-banner" />
        <div id="header-banner" className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col items-center justify-center">
            <img 
              src="/lovable-uploads/7bc2a381-f1f3-42fd-a952-4ddaa51e7a93.png" 
              alt="Cornelius Hope Academy Logo" 
              className="h-16 sm:h-20 md:h-24 w-auto mb-4 bg-white/90 p-1 rounded-md" 
            />
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white px-2">
              Welcome to Cornelius Hope Academy Schools
            </h1>
            <p className="text-white mt-4 max-w-3xl mx-auto">
              A Christian private school established in 2007, offering quality education from ECD to Form 4
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 mt-6">
            <NavLink to="/academics">
              <Button 
                size="lg" 
                className="font-medium text-base md:text-lg bg-accent text-primary hover:bg-accent/90"
              >
                Primary School
              </Button>
            </NavLink>
            <NavLink to="/academics">
              <Button 
                size="lg" 
                className="font-medium text-base md:text-lg bg-[#BE9E7F] text-white hover:bg-[#BE9E7F]/90"
              >
                Secondary School
              </Button>
            </NavLink>
          </div>
        </div>
      </div>
      <main className="flex-grow">
        <Hero />
        
        <section id="features-section" className="relative">
          <HomeImageCarousel sectionId="features-section" />
          <Features />
        </section>
        
        <section id="about-section" className="relative">
          <HomeImageCarousel sectionId="about-section" />
          <About />
        </section>
        
        <section id="testimonials-section" className="relative">
          <HomeImageCarousel sectionId="testimonials-section" />
          <Testimonials />
        </section>
        
        <section id="news-section" className="relative">
          <HomeImageCarousel sectionId="news-section" />
          <NewsEvents />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;

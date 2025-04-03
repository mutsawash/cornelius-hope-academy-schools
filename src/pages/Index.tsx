
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
import AnnouncementBanner from "@/components/AnnouncementBanner";

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
              Hope for their Future
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 mt-6">
            <NavLink to="/primary-school">
              <Button 
                size="lg" 
                className="font-medium text-base md:text-lg bg-accent text-primary hover:bg-accent/90"
              >
                Primary School
              </Button>
            </NavLink>
            <NavLink to="/secondary-school">
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
        <Features />
        <section className="py-12 overflow-hidden bg-gradient-to-b from-white to-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/2">
                <img 
                  src="/lovable-uploads/dddba70b-c458-4fa1-a100-10be24c11129.png" 
                  alt="School Design" 
                  className="w-full h-auto rounded-lg shadow-xl" 
                />
              </div>
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold mb-4 text-primary">Embracing Excellence</h2>
                <p className="text-gray-600 mb-6">
                  Our commitment to excellence is reflected in everything we do at Cornelius Hope Academy. 
                  From our innovative curriculum to our dedicated staff, we strive to create an environment 
                  where students can flourish academically, socially, and spiritually.
                </p>
                <p className="text-gray-600">
                  We believe in nurturing the full potential of each student, preparing them not just for 
                  academic success, but for leadership and positive contribution to society.
                </p>
              </div>
            </div>
          </div>
        </section>
        <About />
        <Testimonials />
        <NewsEvents />
      </main>
      <Footer />
      <AnnouncementBanner />
    </div>
  );
};

export default Index;

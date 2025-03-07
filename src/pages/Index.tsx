
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import NewsEvents from "@/components/NewsEvents";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="bg-primary py-10 text-center">
        <div className="flex flex-col items-center justify-center">
          <img 
            src="/lovable-uploads/1ea35b44-5930-467e-bd35-c43ac5215c8e.png" 
            alt="Cornelius Hope Academy Logo" 
            className="h-24 w-auto mb-4 bg-white/90 p-1 rounded-md" 
          />
          <h1 className="text-5xl md:text-6xl font-bold text-white">
            Welcome to Cornelius Hope Academy Schools
          </h1>
        </div>
        <div className="flex flex-wrap justify-center gap-4 mt-6">
          <NavLink to="/academics">
            <Button 
              size="lg" 
              className="font-medium text-lg bg-accent text-primary hover:bg-accent/90"
            >
              Preschool
            </Button>
          </NavLink>
          <NavLink to="/academics">
            <Button 
              size="lg" 
              className="font-medium text-lg bg-accent text-primary hover:bg-accent/90"
            >
              Primary School
            </Button>
          </NavLink>
          <NavLink to="/academics">
            <Button 
              size="lg" 
              className="font-medium text-lg bg-[#BE9E7F] text-white hover:bg-[#BE9E7F]/90"
            >
              Secondary School
            </Button>
          </NavLink>
        </div>
      </div>
      <main className="flex-grow">
        <Hero />
        <Features />
        <About />
        <Testimonials />
        <NewsEvents />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

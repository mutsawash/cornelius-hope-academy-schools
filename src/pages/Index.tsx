
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
        <h1 className="text-5xl md:text-6xl font-bold text-white">
          Welcome to Cornelius Hope Academy Schools
        </h1>
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
            <Button size="lg" variant="secondary" className="font-medium text-lg">
              Primary School
            </Button>
          </NavLink>
          <NavLink to="/academics">
            <Button 
              size="lg" 
              className="font-medium text-lg bg-secondary text-primary hover:bg-secondary/90"
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

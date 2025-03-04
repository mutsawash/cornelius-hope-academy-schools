
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import NewsEvents from "@/components/NewsEvents";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="bg-primary py-10 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-white">
          Welcome to Cornelius Hope Academy Schools
        </h1>
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

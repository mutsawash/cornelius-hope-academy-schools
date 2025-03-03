
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="relative bg-blue-50">
      <div className="container mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Nurturing Excellence, Inspiring Futures
          </h1>
          <p className="text-lg mb-8 text-gray-700">
            WiseLearn Academy provides a high-quality education that empowers students to achieve 
            academic excellence and develop into well-rounded, responsible citizens.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg">Apply Now</Button>
            <Button variant="outline" size="lg">Learn More</Button>
          </div>
        </div>
        <div className="md:w-1/2">
          <div className="rounded-lg overflow-hidden shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=1740&auto=format&fit=crop" 
              alt="Happy students in a classroom" 
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
    </div>
  );
};

export default Hero;

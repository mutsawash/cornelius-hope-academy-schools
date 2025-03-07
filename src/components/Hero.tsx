
import { Button } from "@/components/ui/button";

const Hero = () => {
  const enrollmentFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSfme7aJt_SOUrrCHk5lfP2nHGLX7j7G2N3hoQrXSC6ihjIlDA/viewform?usp=header";
  
  return (
    <div className="relative bg-secondary/40">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Nurturing Excellence, Inspiring Futures
          </h1>
          <p className="text-lg mb-8 text-gray-700">
            Cornelius Hope Academy provides a high-quality education that empowers students to achieve 
            academic excellence and develop into well-rounded, responsible citizens.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href={enrollmentFormUrl} target="_blank" rel="noopener noreferrer">
              <Button size="lg">Apply Now</Button>
            </a>
            <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10">Learn More</Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
    </div>
  );
};

export default Hero;

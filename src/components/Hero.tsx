
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { NavLink } from "react-router-dom";
import HomeImageCarousel from "@/components/HomeImageCarousel";

const Hero = () => {
  const enrollmentFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSfme7aJt_SOUrrCHk5lfP2nHGLX7j7G2N3hoQrXSC6ihjIlDA/viewform?usp=header";
  const primaryEnrollmentFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSfJyrWVQLy7WH6W1xLM0A9QKMo4Ica6_muJh3XzCnJfDFaG7A/viewform";
  
  return (
    <div className="relative">
      <HomeImageCarousel sectionId="hero-section" className="absolute inset-0 -z-10" />
      <div className="absolute inset-0 bg-black/30 -z-10"></div>
      
      <div id="hero-section" className="container mx-auto px-4 py-20 sm:py-24 md:py-28 lg:py-32 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 md:mb-6">
            Nurturing Excellence, Inspiring Futures
          </h1>
          <p className="text-base sm:text-lg mb-6 md:mb-8 text-white/90 px-2">
            Our vision is to produce graduates who are responsive to the needs of the nation, becoming competent, self-reliant and acceptable members of the global society.
          </p>
          <div className="flex flex-wrap gap-3 md:gap-4 justify-center">
            <a 
              href={primaryEnrollmentFormUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md bg-accent text-primary hover:bg-accent/90 transition-colors h-10 px-4 py-2 text-sm font-medium"
            >
              Apply for Primary School
            </a>
            <a 
              href={enrollmentFormUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md bg-[#BE9E7F] text-white hover:bg-[#BE9E7F]/90 transition-colors h-10 px-4 py-2 text-sm font-medium"
            >
              Apply for Secondary School
            </a>
            <NavLink to="/about">
              <Button variant="outline" size="default" className="border-white text-white hover:bg-white/10 text-sm sm:text-base">Learn More</Button>
            </NavLink>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-12 sm:h-16 bg-gradient-to-t from-white to-transparent"></div>
    </div>
  );
};

export default Hero;


import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
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
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button size="default" className="flex items-center gap-1 text-sm sm:text-base">
                  Apply Now <ChevronDown size={16} />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white">
                <DropdownMenuItem className="cursor-pointer">
                  <a 
                    href={primaryEnrollmentFormUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full"
                  >
                    Primary School
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">
                  <a 
                    href={enrollmentFormUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full"
                  >
                    Secondary School
                  </a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
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

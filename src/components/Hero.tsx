
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const schoolImages = [
  "/lovable-uploads/c3471d45-23a1-4735-8de2-a28e3661fa6c.png",
  "/lovable-uploads/b60944a1-00b0-4ee2-a9f2-fab022c0374d.png",
  "/lovable-uploads/39470031-790d-444a-a833-a445dc2f57da.png",
  "/lovable-uploads/d3550c47-462b-4532-8db3-9aac902597e0.png",
  "/lovable-uploads/38b18dfa-9b9f-4d6b-80b4-633f4eef3b58.png"
];

const Hero = () => {
  const enrollmentFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSfme7aJt_SOUrrCHk5lfP2nHGLX7j7G2N3hoQrXSC6ihjIlDA/viewform?usp=header";
  const [api, setApi] = useState<any>(null);
  
  // Auto rotation
  useEffect(() => {
    if (!api) return;
    
    // Start a timer to rotate the carousel
    const interval = setInterval(() => {
      api.scrollNext();
    }, 5000); // Change image every 5 seconds
    
    return () => clearInterval(interval);
  }, [api]);
  
  return (
    <div className="relative">
      <div className="absolute inset-0 -z-10">
        <Carousel className="w-full h-full" opts={{ loop: true, duration: 1000 }} setApi={setApi}>
          <CarouselContent className="h-full">
            {schoolImages.map((img, index) => (
              <CarouselItem key={index} className="h-full">
                <img 
                  src={img} 
                  alt="School scene" 
                  className="w-full h-full object-cover"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
      </div>
      
      <div className="container mx-auto px-4 py-20 sm:py-24 md:py-28 lg:py-32 relative z-10">
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
                    href={`${enrollmentFormUrl}&entry.123456789=Primary`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full"
                  >
                    Primary School
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">
                  <a 
                    href={`${enrollmentFormUrl}&entry.123456789=Secondary`} 
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

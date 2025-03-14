
import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem
} from "@/components/ui/carousel";

const schoolImages = [
  "/lovable-uploads/c3471d45-23a1-4735-8de2-a28e3661fa6c.png",
  "/lovable-uploads/b60944a1-00b0-4ee2-a9f2-fab022c0374d.png",
  "/lovable-uploads/39470031-790d-444a-a833-a445dc2f57da.png",
  "/lovable-uploads/d3550c47-462b-4532-8db3-9aac902597e0.png",
  "/lovable-uploads/38b18dfa-9b9f-4d6b-80b4-633f4eef3b58.png"
];

interface HomeImageCarouselProps {
  sectionId: string;
}

const HomeImageCarousel = ({ sectionId }: HomeImageCarouselProps) => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      });
    }, { threshold: 0.1 });
    
    const section = document.getElementById(sectionId);
    if (section) {
      observer.observe(section);
    }
    
    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, [sectionId]);
  
  // Select two random images from the array
  const randomIndex1 = Math.floor(Math.random() * schoolImages.length);
  let randomIndex2 = Math.floor(Math.random() * schoolImages.length);
  
  // Ensure the second image is different from the first
  while (randomIndex2 === randomIndex1) {
    randomIndex2 = Math.floor(Math.random() * schoolImages.length);
  }
  
  const selectedImages = [
    schoolImages[randomIndex1],
    schoolImages[randomIndex2]
  ];
  
  return (
    <div className="absolute inset-0 -z-10 opacity-0 transition-opacity duration-1000" 
      style={{ opacity: isVisible ? 0.15 : 0 }}>
      <Carousel className="w-full h-full" opts={{ loop: true, duration: 40 }} autoPlay={true}>
        <CarouselContent className="h-full">
          {selectedImages.map((img, index) => (
            <CarouselItem key={index} className="h-full">
              <img 
                src={img} 
                alt="School students" 
                className="w-full h-full object-cover"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default HomeImageCarousel;

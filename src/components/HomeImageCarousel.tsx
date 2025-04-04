
import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem
} from "@/components/ui/carousel";

// Default images from the homepage and new uploaded images
const defaultImages = [
  "/lovable-uploads/c3471d45-23a1-4735-8de2-a28e3661fa6c.png",
  "/lovable-uploads/b60944a1-00b0-4ee2-a9f2-fab022c0374d.png",
  "/lovable-uploads/39470031-790d-444a-a833-a445dc2f57da.png",
  "/lovable-uploads/d3550c47-462b-4532-8db3-9aac902597e0.png",
  "/lovable-uploads/38b18dfa-9b9f-4d6b-80b4-633f4eef3b58.png",
  // New images
  "/lovable-uploads/49aa16c3-490c-4b6a-94a4-e557f0429b99.png",
  "/lovable-uploads/5415b86a-758a-413f-930b-8338d7a6324c.png",
  "/lovable-uploads/b671d646-74df-404d-afb5-c29664eb8f26.png",
  "/lovable-uploads/29465880-9ea5-4dab-b36d-cb6581a5dc17.png"
];

// Background image for the slideshow
const backgroundImage = "/lovable-uploads/f65f6ea2-90dd-45ed-b70c-d14632fe17cb.png";

interface HomeImageCarouselProps {
  sectionId: string;
  images?: string[];
  className?: string;
}

const HomeImageCarousel = ({ 
  sectionId, 
  images: providedImages, 
  className = "absolute inset-0 -z-10" 
}: HomeImageCarouselProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [api, setApi] = useState<any>(null);
  const [galleryImages, setGalleryImages] = useState<string[]>([]);
  const [hasLoaded, setHasLoaded] = useState(false);
  
  // Load images from gallery
  useEffect(() => {
    const loadGalleryImages = () => {
      const storedImages = localStorage.getItem("galleryImages");
      if (storedImages) {
        const parsedImages = JSON.parse(storedImages);
        const imageUrls = parsedImages.map((img: any) => img.url);
        setGalleryImages(imageUrls);
      }
    };
    
    loadGalleryImages();
    
    // Listen for gallery updates
    window.addEventListener('galleryImagesUpdated', loadGalleryImages);
    
    return () => {
      window.removeEventListener('galleryImagesUpdated', loadGalleryImages);
    };
  }, []);
  
  // Combine gallery images with default images or provided images
  const displayImages = galleryImages.length > 0 
    ? [...galleryImages, ...(providedImages || defaultImages)]
    : (providedImages || defaultImages);
  
  // Implement lazy loading using Intersection Observer
  useEffect(() => {
    // Create an observer to detect when element enters viewport
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setHasLoaded(true);
          // Once visible, no need to observe anymore
          observer.disconnect();
        }
      });
    }, { threshold: 0.1, rootMargin: "200px" }); // Load when element is 200px from viewport
    
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
  
  // Auto rotation
  useEffect(() => {
    if (!api || !isVisible) return;
    
    // Start a timer to rotate the carousel
    const interval = setInterval(() => {
      api.scrollNext();
    }, 5000); // Change image every 5 seconds
    
    return () => clearInterval(interval);
  }, [api, isVisible]);
  
  return (
    <div className={className}
      style={{ 
        opacity: isVisible ? 1 : 0, 
        transition: "opacity 1000ms",
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
      <div className="absolute inset-0 bg-black/20"></div>
      <Carousel className="w-full h-full" opts={{ loop: true, duration: 1000 }} setApi={setApi}>
        <CarouselContent className="h-full">
          {displayImages.map((img, index) => (
            <CarouselItem key={index} className="h-full">
              {(isVisible || hasLoaded) && (
                <img 
                  src={img} 
                  alt="School images" 
                  className="w-full h-full object-contain max-h-[90vh]"
                  loading="lazy"
                />
              )}
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default HomeImageCarousel;

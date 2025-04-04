
import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";

interface GallerySectionProps {
  title: string;
  category: "primary" | "secondary";
}

interface GalleryImage {
  id: string;
  url: string;
  title: string;
  category: string;
}

const GallerySection = ({ title, category }: GallerySectionProps) => {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [visibleImages, setVisibleImages] = useState<Set<string>>(new Set());
  
  useEffect(() => {
    // Fetch images from localStorage based on category
    const storedImages = localStorage.getItem("galleryImages");
    if (storedImages) {
      const parsedImages: GalleryImage[] = JSON.parse(storedImages);
      const filteredImages = parsedImages.filter(img => img.category === category);
      setImages(filteredImages);
    }
    
    // Listen for gallery updates
    const handleGalleryUpdate = () => {
      const updatedImages = localStorage.getItem("galleryImages");
      if (updatedImages) {
        const parsedImages: GalleryImage[] = JSON.parse(updatedImages);
        const filteredImages = parsedImages.filter(img => img.category === category);
        setImages(filteredImages);
      }
    };
    
    window.addEventListener("galleryImagesUpdated", handleGalleryUpdate);
    
    return () => {
      window.removeEventListener("galleryImagesUpdated", handleGalleryUpdate);
    };
  }, [category]);

  // Implement intersection observer for lazy loading
  useEffect(() => {
    if (!images.length) return;
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const imageId = entry.target.getAttribute('data-image-id');
            if (imageId) {
              setVisibleImages(prev => new Set([...prev, imageId]));
              observer.unobserve(entry.target);
            }
          }
        });
      },
      { rootMargin: '100px', threshold: 0.1 }
    );
    
    // Find all image placeholders
    const imagePlaceholders = document.querySelectorAll('.image-placeholder');
    imagePlaceholders.forEach(placeholder => {
      observer.observe(placeholder);
    });
    
    return () => {
      observer.disconnect();
    };
  }, [images]);

  if (images.length === 0) {
    return (
      <Card className="h-80">
        <CardContent className="flex flex-col items-center justify-center h-full p-6">
          <h2 className="text-2xl font-bold mb-4">{title}</h2>
          <div className="text-center text-gray-500">
            <p className="text-lg mb-2">No images yet</p>
            <p>Check back soon for updates to our gallery.</p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardContent className="p-6">
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <Carousel className="w-full">
          <CarouselContent>
            {images.map((image) => (
              <CarouselItem key={image.id}>
                <div className="p-1">
                  <div 
                    className="image-placeholder overflow-hidden rounded-lg h-64" 
                    data-image-id={image.id}
                  >
                    {visibleImages.has(image.id) ? (
                      <img 
                        src={image.url} 
                        alt={image.title} 
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-full h-full bg-gray-200 animate-pulse" />
                    )}
                  </div>
                  <p className="mt-2 text-center font-medium">{image.title}</p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-2" />
          <CarouselNext className="right-2" />
        </Carousel>
      </CardContent>
    </Card>
  );
};

export default GallerySection;

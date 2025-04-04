
import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

interface Announcement {
  id: string;
  title: string;
  content: string;
  active: boolean;
}

const AnnouncementBanner = () => {
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visible, setVisible] = useState(true);
  const [position, setPosition] = useState({ x: 20, y: 120 });

  useEffect(() => {
    const storedAnnouncements = localStorage.getItem("schoolAnnouncements");
    if (storedAnnouncements) {
      const parsedAnnouncements = JSON.parse(storedAnnouncements);
      const activeAnnouncements = parsedAnnouncements.filter(
        (announcement: Announcement) => announcement.active
      );
      setAnnouncements(activeAnnouncements);
    }
  }, []);

  useEffect(() => {
    if (announcements.length > 1) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex === announcements.length - 1 ? 0 : prevIndex + 1
        );
      }, 8000);

      return () => clearInterval(interval);
    }
  }, [announcements]);

  // Floating animation effect
  useEffect(() => {
    if (!visible || announcements.length === 0) return;
    
    const floatInterval = setInterval(() => {
      setPosition(prev => ({
        x: prev.x + (Math.random() * 2 - 1),
        y: prev.y + (Math.random() * 2 - 1)
      }));
    }, 2000);
    
    return () => clearInterval(floatInterval);
  }, [visible, announcements]);

  const closeBanner = () => {
    setVisible(false);
  };

  if (!visible || announcements.length === 0) {
    return null;
  }

  const currentAnnouncement = announcements[currentIndex];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ 
          opacity: 1, 
          y: 0,
          x: position.x,
          transition: { 
            type: "spring",
            stiffness: 50,
            damping: 20
          }
        }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
        className="fixed z-50 max-w-sm"
        drag
        dragConstraints={{ left: 0, right: window.innerWidth - 320, top: 80, bottom: window.innerHeight - 200 }}
      >
        <div className="bg-accent text-primary p-3 rounded-md shadow-lg border border-primary/20">
          <div className="flex justify-between items-start gap-2">
            <div>
              <h3 className="font-bold text-sm">{currentAnnouncement.title}</h3>
              <p className="mt-1 text-xs">{currentAnnouncement.content}</p>
            </div>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={closeBanner}
              className="h-5 w-5 -mt-1 -mr-1"
            >
              <X className="h-3 w-3" />
            </Button>
          </div>
          {announcements.length > 1 && (
            <div className="flex justify-center mt-1 gap-1">
              {announcements.map((_, index) => (
                <span 
                  key={index}
                  className={`h-1 w-1 rounded-full ${
                    index === currentIndex ? 'bg-primary' : 'bg-primary/30'
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default AnnouncementBanner;

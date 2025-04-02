
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
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -100, opacity: 0 }}
        className="fixed top-20 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-3xl mx-auto px-4"
      >
        <div className="bg-accent text-primary p-4 rounded-md shadow-md border border-primary/20">
          <div className="flex justify-between items-start gap-2">
            <div>
              <h3 className="font-bold text-lg">{currentAnnouncement.title}</h3>
              <p className="mt-1">{currentAnnouncement.content}</p>
            </div>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={closeBanner}
              className="mt-1"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
          {announcements.length > 1 && (
            <div className="flex justify-center mt-2 gap-1">
              {announcements.map((_, index) => (
                <span 
                  key={index}
                  className={`h-2 w-2 rounded-full ${
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

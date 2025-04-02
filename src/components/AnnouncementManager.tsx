
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { X } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { useToast } from "@/hooks/use-toast";

interface Announcement {
  id: string;
  title: string;
  content: string;
  active: boolean;
}

const AnnouncementManager = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);
  const { toast } = useToast();

  // Load existing announcements from localStorage
  useEffect(() => {
    const storedAnnouncements = localStorage.getItem("schoolAnnouncements");
    if (storedAnnouncements) {
      setAnnouncements(JSON.parse(storedAnnouncements));
    }
  }, []);

  const handleAddAnnouncement = () => {
    if (!title || !content) {
      toast({
        title: "Missing information",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    const newAnnouncement: Announcement = {
      id: Date.now().toString(),
      title,
      content,
      active: true,
    };

    const updatedAnnouncements = [...announcements, newAnnouncement];
    setAnnouncements(updatedAnnouncements);
    localStorage.setItem("schoolAnnouncements", JSON.stringify(updatedAnnouncements));

    // Reset form
    setTitle("");
    setContent("");

    toast({
      title: "Announcement created",
      description: "The announcement is now visible on the homepage",
    });
  };

  const handleDeleteAnnouncement = (id: string) => {
    const updatedAnnouncements = announcements.filter(announcement => announcement.id !== id);
    setAnnouncements(updatedAnnouncements);
    localStorage.setItem("schoolAnnouncements", JSON.stringify(updatedAnnouncements));

    toast({
      title: "Announcement removed",
      description: "The announcement has been removed",
    });
  };

  const toggleAnnouncementStatus = (id: string) => {
    const updatedAnnouncements = announcements.map(announcement => {
      if (announcement.id === id) {
        return { ...announcement, active: !announcement.active };
      }
      return announcement;
    });
    
    setAnnouncements(updatedAnnouncements);
    localStorage.setItem("schoolAnnouncements", JSON.stringify(updatedAnnouncements));

    const announcement = updatedAnnouncements.find(a => a.id === id);
    toast({
      title: announcement?.active ? "Announcement activated" : "Announcement deactivated",
      description: announcement?.active 
        ? "The announcement is now visible on the homepage" 
        : "The announcement is now hidden from the homepage",
    });
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <Card>
        <CardHeader>
          <CardTitle>Create Announcement</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="title">Announcement Title</Label>
              <Input
                id="title"
                placeholder="Important School Notice"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="content">Announcement Content</Label>
              <Textarea
                id="content"
                placeholder="Write your announcement here..."
                value={content}
                onChange={(e) => setContent(e.target.value)}
                rows={5}
              />
            </div>
            
            <Button onClick={handleAddAnnouncement} className="w-full">Post Announcement</Button>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Manage Announcements</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4 max-h-96 overflow-y-auto pr-2">
            {announcements.length === 0 ? (
              <p className="text-center text-gray-500 py-4">No announcements created yet</p>
            ) : (
              announcements.map((announcement) => (
                <div key={announcement.id} className="border p-3 rounded-md space-y-2">
                  <div className="flex justify-between items-start">
                    <h3 className="font-medium">{announcement.title}</h3>
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      onClick={() => handleDeleteAnnouncement(announcement.id)}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                  <p className="text-sm text-gray-600">{announcement.content}</p>
                  <div className="flex items-center justify-between pt-2">
                    <span className="text-xs text-gray-500">
                      Status: {announcement.active ? "Active" : "Inactive"}
                    </span>
                    <div className="flex items-center gap-2">
                      <span className="text-xs">
                        {announcement.active ? "On" : "Off"}
                      </span>
                      <Switch 
                        checked={announcement.active}
                        onCheckedChange={() => toggleAnnouncementStatus(announcement.id)}
                      />
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AnnouncementManager;

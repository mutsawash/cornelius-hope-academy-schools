
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { X, Calendar, Edit, Trash } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Event {
  id: string;
  title: string;
  date: string;
  description: string;
}

const EventsManager = () => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [events, setEvents] = useState<Event[]>([]);
  const [editingId, setEditingId] = useState<string | null>(null);
  const { toast } = useToast();

  // Load existing events from localStorage
  useEffect(() => {
    const storedEvents = localStorage.getItem("schoolEvents");
    if (storedEvents) {
      setEvents(JSON.parse(storedEvents));
    }
  }, []);

  const handleAddEvent = () => {
    if (!title || !date || !description) {
      toast({
        title: "Missing information",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    if (editingId) {
      // Update existing event
      const updatedEvents = events.map(event => 
        event.id === editingId 
          ? { ...event, title, date, description } 
          : event
      );
      setEvents(updatedEvents);
      localStorage.setItem("schoolEvents", JSON.stringify(updatedEvents));
      setEditingId(null);
      
      toast({
        title: "Event updated",
        description: "The event has been successfully updated",
      });
    } else {
      // Add new event
      const newEvent: Event = {
        id: Date.now().toString(),
        title,
        date,
        description,
      };

      const updatedEvents = [...events, newEvent];
      setEvents(updatedEvents);
      localStorage.setItem("schoolEvents", JSON.stringify(updatedEvents));

      toast({
        title: "Event added",
        description: "The event has been added to the calendar",
      });
    }

    // Trigger an event to notify other components that events have been updated
    window.dispatchEvent(new Event('eventsUpdated'));

    // Reset form
    setTitle("");
    setDate("");
    setDescription("");
  };

  const handleDeleteEvent = (id: string) => {
    const updatedEvents = events.filter(event => event.id !== id);
    setEvents(updatedEvents);
    localStorage.setItem("schoolEvents", JSON.stringify(updatedEvents));
    
    // Trigger an event to notify other components that events have been updated
    window.dispatchEvent(new Event('eventsUpdated'));

    toast({
      title: "Event removed",
      description: "The event has been removed from the calendar",
    });
    
    // If deleting the event being edited, clear the form
    if (editingId === id) {
      setTitle("");
      setDate("");
      setDescription("");
      setEditingId(null);
    }
  };

  const handleEditEvent = (event: Event) => {
    setTitle(event.title);
    setDate(event.date);
    setDescription(event.description);
    setEditingId(event.id);
  };

  const handleCancelEdit = () => {
    setTitle("");
    setDate("");
    setDescription("");
    setEditingId(null);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <Card>
        <CardHeader>
          <CardTitle>{editingId ? "Edit Event" : "Add New Event"}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="title">Event Title</Label>
              <Input
                id="title"
                placeholder="Form 1 Opening Day"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="date">Event Date</Label>
              <Input
                id="date"
                placeholder="April 2026"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
              <p className="text-xs text-gray-500">
                Enter the date in a format like "April 2026" or "May 15, 2026"
              </p>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="description">Event Description</Label>
              <Textarea
                id="description"
                placeholder="Join us for the opening day for our new Form 1 students."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={3}
              />
            </div>
            
            <div className="flex gap-2">
              <Button onClick={handleAddEvent} className="flex-1">
                {editingId ? "Update Event" : "Add Event"}
              </Button>
              
              {editingId && (
                <Button variant="outline" onClick={handleCancelEdit}>
                  Cancel
                </Button>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Manage Events</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4 max-h-96 overflow-y-auto pr-2">
            {events.length === 0 ? (
              <p className="text-center text-gray-500 py-4">No events added yet</p>
            ) : (
              events.map((event) => (
                <div key={event.id} className="flex items-start gap-3 border p-3 rounded-md">
                  <Calendar className="h-5 w-5 text-primary shrink-0 mt-1" />
                  <div className="flex-grow">
                    <p className="font-medium">{event.title}</p>
                    <p className="text-sm text-primary">{event.date}</p>
                    <p className="text-sm text-gray-600 mt-1">{event.description}</p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      onClick={() => handleEditEvent(event)}
                      className="h-8 w-8"
                    >
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      onClick={() => handleDeleteEvent(event.id)}
                      className="h-8 w-8 text-red-500"
                    >
                      <Trash className="h-4 w-4" />
                    </Button>
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

export default EventsManager;

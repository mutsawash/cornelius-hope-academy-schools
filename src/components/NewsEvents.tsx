
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";

const NewsEvents = () => {
  const events = [
    {
      title: "Form 1 Opening Day",
      date: "April 2026",
      description: "Join us for the opening day for our new Form 1 students."
    }
  ];

  return (
    <section className="py-10 md:py-16 bg-white/80 backdrop-blur-sm relative z-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">Upcoming Events</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
            Join us for these upcoming events and become part of our vibrant community.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {events.map((event, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow bg-white">
              <CardHeader className="pb-2 px-4 pt-4 md:px-6 md:pt-6">
                <div className="flex items-center gap-2 text-primary mb-2">
                  <Calendar className="h-4 w-4 md:h-5 md:w-5" />
                  <span className="text-xs md:text-sm">{event.date}</span>
                </div>
                <CardTitle className="text-lg md:text-xl">{event.title}</CardTitle>
              </CardHeader>
              <CardContent className="px-4 pb-4 md:px-6 md:pb-6">
                <p className="text-gray-600 text-sm md:text-base">{event.description}</p>
                <p className="text-gray-500 text-sm mt-2">Details to be announced</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-10 text-center">
          <Button variant="outline">View All Events</Button>
        </div>
        
        <div className="mt-16 bg-primary/5 p-8 rounded-lg text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Join Our Community?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-6">
            Take the first step towards providing your child with an exceptional educational experience.
          </p>
          <NavLink to="/admissions">
            <Button size="lg">Apply Now</Button>
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default NewsEvents;

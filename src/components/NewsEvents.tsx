
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "lucide-react";

const NewsEvents = () => {
  const events = [
    {
      title: "Annual Sports Day",
      date: "June 15, 2024",
      description: "Join us for competitions in cricket, hockey, basketball, swimming, tennis, volleyball, soccer, netball, handball and athletics."
    },
    {
      title: "Arts and Clubs Showcase",
      date: "July 10, 2024",
      description: "Students showcase their talents in debate, drama, dance, quiz, spelling bee, music, choir, and public speaking."
    },
    {
      title: "Parent-Teacher Conference",
      date: "August 5, 2024",
      description: "An opportunity to discuss your child's progress and development with our dedicated teachers."
    }
  ];

  return (
    <section className="py-10 md:py-16 bg-white/80 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">News & Upcoming Events</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
            Stay updated with the latest happenings and upcoming events at Cornelius Hope Academy.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {events.map((event, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow bg-white/90">
              <CardHeader className="pb-2 px-4 pt-4 md:px-6 md:pt-6">
                <div className="flex items-center gap-2 text-primary mb-2">
                  <Calendar className="h-4 w-4 md:h-5 md:w-5" />
                  <span className="text-xs md:text-sm">{event.date}</span>
                </div>
                <CardTitle className="text-lg md:text-xl">{event.title}</CardTitle>
              </CardHeader>
              <CardContent className="px-4 pb-4 md:px-6 md:pb-6">
                <p className="text-gray-600 text-sm md:text-base">{event.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsEvents;

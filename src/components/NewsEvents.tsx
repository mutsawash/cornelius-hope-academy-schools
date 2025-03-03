
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "lucide-react";

const NewsEvents = () => {
  const events = [
    {
      title: "Annual Sports Day",
      date: "June 15, 2024",
      description: "Join us for a day of athletic competitions and team spirit."
    },
    {
      title: "Science Fair",
      date: "July 10, 2024",
      description: "Students showcase their innovative science projects and experiments."
    },
    {
      title: "Parent-Teacher Conference",
      date: "August 5, 2024",
      description: "An opportunity to discuss your child's progress and development."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">News & Upcoming Events</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Stay updated with the latest happenings and upcoming events at WiseLearn Academy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {events.map((event, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2 text-primary mb-2">
                  <Calendar className="h-5 w-5" />
                  <span className="text-sm">{event.date}</span>
                </div>
                <CardTitle className="text-xl">{event.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{event.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsEvents;

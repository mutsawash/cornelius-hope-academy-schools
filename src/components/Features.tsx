
import { Book, Users, Award, Clock } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Features = () => {
  const features = [
    {
      icon: <Book className="h-10 w-10 text-primary" />,
      title: "Comprehensive Curriculum",
      description: "Our curriculum is designed to challenge students and develop critical thinking skills."
    },
    {
      icon: <Users className="h-10 w-10 text-primary" />,
      title: "Expert Faculty",
      description: "Our teachers are experienced professionals dedicated to student success."
    },
    {
      icon: <Award className="h-10 w-10 text-primary" />,
      title: "Excellence in Education",
      description: "We maintain high academic standards and celebrate student achievements."
    },
    {
      icon: <Clock className="h-10 w-10 text-primary" />,
      title: "Modern Facilities",
      description: "State-of-the-art classrooms, labs, and recreational spaces for optimal learning."
    }
  ];

  return (
    <section className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-primary">Why Choose Cornelius Hope Academy</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We provide a nurturing environment where students can explore their potential and excel academically.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="border border-secondary hover:shadow-md transition-shadow bg-white">
              <CardHeader className="pb-2">
                <div className="mb-2">{feature.icon}</div>
                <CardTitle className="text-xl text-primary">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

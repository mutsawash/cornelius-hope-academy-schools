
import { BookOpen, Users, Award, Shield } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Features = () => {
  const features = [
    {
      icon: <BookOpen className="h-8 w-8 md:h-10 md:w-10 text-primary" />,
      title: "Quality Curriculum",
      description: "We offer both ZIMSEC and Cambridge curricula with a comprehensive range of subjects."
    },
    {
      icon: <Users className="h-8 w-8 md:h-10 md:w-10 text-primary" />,
      title: "Holistic Development",
      description: "We focus on academic, spiritual, physical, and psycho-social development of our students."
    },
    {
      icon: <Award className="h-8 w-8 md:h-10 md:w-10 text-primary" />,
      title: "Excellence in Education",
      description: "Our schools have become a force to reckon with in the fields of academics and sports."
    },
    {
      icon: <Shield className="h-8 w-8 md:h-10 md:w-10 text-primary" />,
      title: "Student Care",
      description: "On-site medical services and child safeguarding programs ensure student wellbeing."
    }
  ];

  return (
    <section className="py-10 md:py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4 text-primary">Why Choose Cornelius Hope Academy</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
            Our mission is to offer education of the highest quality and relevance, enabling students to develop to their full potential.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="border border-secondary hover:shadow-md transition-shadow bg-white">
              <CardHeader className="pb-2 px-4 pt-4 md:px-6 md:pt-6">
                <div className="mb-2">{feature.icon}</div>
                <CardTitle className="text-lg md:text-xl text-primary">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent className="px-4 pb-4 md:px-6 md:pb-6">
                <CardDescription className="text-gray-600 text-sm md:text-base">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

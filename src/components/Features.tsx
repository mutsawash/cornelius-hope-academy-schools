
import { BookOpen, Users, Award, Shield, Briefcase, GraduationCap } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Features = () => {
  const features = [
    {
      icon: <BookOpen className="h-8 w-8 md:h-10 md:w-10 text-primary" />,
      title: "Academic Excellence",
      description: "Rigorous curriculum designed to challenge and inspire students to reach their highest potential."
    },
    {
      icon: <Users className="h-8 w-8 md:h-10 md:w-10 text-primary" />,
      title: "Small Class Sizes",
      description: "Personalized attention with a low student-to-teacher ratio ensuring every student's needs are met."
    },
    {
      icon: <Award className="h-8 w-8 md:h-10 md:w-10 text-primary" />,
      title: "Character Development",
      description: "Emphasis on integrity, responsibility, and ethical decision-making alongside academic growth."
    },
    {
      icon: <Shield className="h-8 w-8 md:h-10 md:w-10 text-primary" />,
      title: "Experiential Learning",
      description: "Hands-on activities and real-world applications that make learning engaging and meaningful."
    },
    {
      icon: <Award className="h-8 w-8 md:h-10 md:w-10 text-primary" />,
      title: "Extracurricular Activities",
      description: "Wide range of arts, athletics, and clubs to develop well-rounded students with diverse interests."
    },
    {
      icon: <GraduationCap className="h-8 w-8 md:h-10 md:w-10 text-primary" />,
      title: "College Preparation",
      description: "Comprehensive guidance ensuring students are prepared for success in higher education and beyond."
    }
  ];

  return (
    <section className="py-10 md:py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4 text-primary">Why Choose Cornelius Hope</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
            Our comprehensive approach to education focuses on developing the whole student - intellectually, physically, and ethically.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
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

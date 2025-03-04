
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Code, Palette, Beaker, Users, Globe, Calculator, Music } from "lucide-react";

const AcademicsPage = () => {
  const primarySubjects = [
    { icon: <BookOpen className="h-6 w-6 text-primary-foreground" />, name: "Language Arts" },
    { icon: <Calculator className="h-6 w-6 text-primary-foreground" />, name: "Mathematics" },
    { icon: <Globe className="h-6 w-6 text-primary-foreground" />, name: "Social Studies" },
    { icon: <Beaker className="h-6 w-6 text-primary-foreground" />, name: "Science" },
    { icon: <Palette className="h-6 w-6 text-primary-foreground" />, name: "Art & Craft" },
    { icon: <Music className="h-6 w-6 text-primary-foreground" />, name: "Music" },
  ];

  const secondarySubjects = [
    { icon: <BookOpen className="h-6 w-6 text-primary-foreground" />, name: "Literature" },
    { icon: <Calculator className="h-6 w-6 text-primary-foreground" />, name: "Advanced Mathematics" },
    { icon: <Beaker className="h-6 w-6 text-primary-foreground" />, name: "Biology, Chemistry & Physics" },
    { icon: <Globe className="h-6 w-6 text-primary-foreground" />, name: "Geography & History" },
    { icon: <Code className="h-6 w-6 text-primary-foreground" />, name: "Computer Science" },
    { icon: <Users className="h-6 w-6 text-primary-foreground" />, name: "Business Studies" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-8 text-primary">Our Academic Programs</h1>
          
          <div className="mb-16">
            <div className="bg-primary p-8 rounded-lg mb-10 text-white shadow-lg border-2 border-accent">
              <h2 className="text-3xl font-semibold mb-6 text-white">Primary School</h2>
              <p className="text-lg mb-6">
                Our Primary School curriculum is designed to build a strong foundation for lifelong learning. We focus on developing essential skills in literacy, numeracy, and critical thinking while fostering creativity and curiosity.
              </p>
              <p className="text-lg mb-8">
                The program combines core academic subjects with enrichment activities, ensuring students receive a well-rounded education that prepares them for secondary school and beyond.
              </p>
              
              <h3 className="text-2xl font-semibold mb-4 text-white">Key Subjects</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {primarySubjects.map((subject, index) => (
                  <Card key={index} className="bg-accent text-primary hover:shadow-lg transition-shadow border-2 border-white/20">
                    <CardHeader className="p-4 pb-2 flex flex-col items-center">
                      {subject.icon}
                    </CardHeader>
                    <CardContent className="p-4 pt-1 text-center">
                      <h4 className="font-medium">{subject.name}</h4>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
            
            <div className="bg-secondary p-8 rounded-lg border-2 border-primary/20 shadow-lg">
              <h2 className="text-3xl font-semibold mb-6 text-primary">Secondary School</h2>
              <p className="text-lg mb-6 text-primary">
                Our Secondary School offers a rigorous academic program that prepares students for higher education and future careers. The curriculum is designed to challenge students intellectually while developing critical thinking, problem-solving, and leadership skills.
              </p>
              <p className="text-lg mb-8 text-primary">
                Students benefit from specialized instruction across a wide range of subjects, advanced placement opportunities, and comprehensive career guidance.
              </p>
              
              <h3 className="text-2xl font-semibold mb-4 text-primary">Key Subjects</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {secondarySubjects.map((subject, index) => (
                  <Card key={index} className="bg-primary text-white hover:shadow-lg transition-shadow border-2 border-accent">
                    <CardHeader className="p-4 pb-2 flex flex-col items-center">
                      {subject.icon}
                    </CardHeader>
                    <CardContent className="p-4 pt-1 text-center">
                      <h4 className="font-medium">{subject.name}</h4>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-2 border-primary shadow-md bg-white">
              <CardHeader className="bg-primary text-white">
                <CardTitle>Extra-Curricular Activities</CardTitle>
              </CardHeader>
              <CardContent className="bg-white mt-2">
                <ul className="list-disc pl-5 space-y-2">
                  <li>Sports (Soccer, Basketball, Tennis, Swimming)</li>
                  <li>Performing Arts (Drama, Music)</li>
                  <li>Debate and Public Speaking</li>
                  <li>Science and Technology Club</li>
                  <li>Art and Crafts</li>
                  <li>Community Service</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="border-2 border-primary shadow-md bg-white">
              <CardHeader className="bg-accent text-primary">
                <CardTitle>Academic Support</CardTitle>
              </CardHeader>
              <CardContent className="bg-white mt-2">
                <ul className="list-disc pl-5 space-y-2">
                  <li>One-on-one tutoring</li>
                  <li>Homework assistance program</li>
                  <li>Advanced placement preparations</li>
                  <li>College application guidance</li>
                  <li>Career counseling</li>
                  <li>Learning resource center</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AcademicsPage;

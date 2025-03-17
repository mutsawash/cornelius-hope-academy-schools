
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Code, Palette, Beaker, Users, Globe, Calculator, Music } from "lucide-react";
import HomeImageCarousel from "@/components/HomeImageCarousel";

// The images we want to display in the secondary school section
const secondarySchoolImages = [
  "/lovable-uploads/c3471d45-23a1-4735-8de2-a28e3661fa6c.png",
  "/lovable-uploads/b60944a1-00b0-4ee2-a9f2-fab022c0374d.png",
  "/lovable-uploads/39470031-790d-444a-a833-a445dc2f57da.png",
  "/lovable-uploads/d3550c47-462b-4532-8db3-9aac902597e0.png",
  "/lovable-uploads/38b18dfa-9b9f-4d6b-80b4-633f4eef3b58.png"
];

const AcademicsPage = () => {
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
                Our curriculum is designed to build a strong foundation for lifelong learning while nurturing each student's unique talents and abilities.
              </p>
              
              <h3 className="text-2xl font-semibold mb-4 text-white">Infant Level (ECD to Grade 2)</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 mb-8">
                <Card className="bg-accent text-primary hover:shadow-lg transition-shadow border-2 border-white/20">
                  <CardContent className="p-4 text-center">
                    <h4 className="font-medium">Mathematics and Science</h4>
                  </CardContent>
                </Card>
                <Card className="bg-accent text-primary hover:shadow-lg transition-shadow border-2 border-white/20">
                  <CardContent className="p-4 text-center">
                    <h4 className="font-medium">English</h4>
                  </CardContent>
                </Card>
                <Card className="bg-accent text-primary hover:shadow-lg transition-shadow border-2 border-white/20">
                  <CardContent className="p-4 text-center">
                    <h4 className="font-medium">Heritage Studies</h4>
                  </CardContent>
                </Card>
                <Card className="bg-accent text-primary hover:shadow-lg transition-shadow border-2 border-white/20">
                  <CardContent className="p-4 text-center">
                    <h4 className="font-medium">Chishona</h4>
                  </CardContent>
                </Card>
                <Card className="bg-accent text-primary hover:shadow-lg transition-shadow border-2 border-white/20">
                  <CardContent className="p-4 text-center">
                    <h4 className="font-medium">Physical Education</h4>
                  </CardContent>
                </Card>
                <Card className="bg-accent text-primary hover:shadow-lg transition-shadow border-2 border-white/20">
                  <CardContent className="p-4 text-center">
                    <h4 className="font-medium">Mass Displays</h4>
                  </CardContent>
                </Card>
                <Card className="bg-accent text-primary hover:shadow-lg transition-shadow border-2 border-white/20">
                  <CardContent className="p-4 text-center">
                    <h4 className="font-medium">ICT</h4>
                  </CardContent>
                </Card>
                <Card className="bg-accent text-primary hover:shadow-lg transition-shadow border-2 border-white/20">
                  <CardContent className="p-4 text-center">
                    <h4 className="font-medium">Visual and Performing Arts</h4>
                  </CardContent>
                </Card>
                <Card className="bg-accent text-primary hover:shadow-lg transition-shadow border-2 border-white/20">
                  <CardContent className="p-4 text-center">
                    <h4 className="font-medium">Guidance and Counselling</h4>
                  </CardContent>
                </Card>
              </div>

              <h3 className="text-2xl font-semibold mb-4 text-white">Junior Level (Grade 3 to Grade 7)</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
                <Card className="bg-accent text-primary hover:shadow-lg transition-shadow border-2 border-white/20">
                  <CardContent className="p-4 text-center">
                    <h4 className="font-medium">English</h4>
                  </CardContent>
                </Card>
                <Card className="bg-accent text-primary hover:shadow-lg transition-shadow border-2 border-white/20">
                  <CardContent className="p-4 text-center">
                    <h4 className="font-medium">Chishona</h4>
                  </CardContent>
                </Card>
                <Card className="bg-accent text-primary hover:shadow-lg transition-shadow border-2 border-white/20">
                  <CardContent className="p-4 text-center">
                    <h4 className="font-medium">Mathematics</h4>
                  </CardContent>
                </Card>
                <Card className="bg-accent text-primary hover:shadow-lg transition-shadow border-2 border-white/20">
                  <CardContent className="p-4 text-center">
                    <h4 className="font-medium">Agriculture</h4>
                  </CardContent>
                </Card>
                <Card className="bg-accent text-primary hover:shadow-lg transition-shadow border-2 border-white/20">
                  <CardContent className="p-4 text-center">
                    <h4 className="font-medium">Science and Technology</h4>
                  </CardContent>
                </Card>
                <Card className="bg-accent text-primary hover:shadow-lg transition-shadow border-2 border-white/20">
                  <CardContent className="p-4 text-center">
                    <h4 className="font-medium">ICT</h4>
                  </CardContent>
                </Card>
                <Card className="bg-accent text-primary hover:shadow-lg transition-shadow border-2 border-white/20">
                  <CardContent className="p-4 text-center">
                    <h4 className="font-medium">Heritage - Social Studies</h4>
                  </CardContent>
                </Card>
                <Card className="bg-accent text-primary hover:shadow-lg transition-shadow border-2 border-white/20">
                  <CardContent className="p-4 text-center">
                    <h4 className="font-medium">Family, Religion and Moral Education</h4>
                  </CardContent>
                </Card>
                <Card className="bg-accent text-primary hover:shadow-lg transition-shadow border-2 border-white/20">
                  <CardContent className="p-4 text-center">
                    <h4 className="font-medium">Visual and Performing Arts</h4>
                  </CardContent>
                </Card>
                <Card className="bg-accent text-primary hover:shadow-lg transition-shadow border-2 border-white/20">
                  <CardContent className="p-4 text-center">
                    <h4 className="font-medium">Physical Education</h4>
                  </CardContent>
                </Card>
                <Card className="bg-accent text-primary hover:shadow-lg transition-shadow border-2 border-white/20">
                  <CardContent className="p-4 text-center">
                    <h4 className="font-medium">Guidance and Counseling</h4>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            <div id="secondary-school-section" className="bg-secondary p-8 rounded-lg border-2 border-primary/20 shadow-lg relative">
              {/* Image carousel in secondary school section */}
              <div className="h-[400px] mb-6 rounded-lg overflow-hidden relative">
                <HomeImageCarousel 
                  sectionId="secondary-school-section" 
                  images={secondarySchoolImages}
                  className="relative" 
                />
              </div>
              
              <h2 className="text-3xl font-semibold mb-6 text-primary">Secondary School</h2>
              <p className="text-lg mb-6 text-primary">
                We offer both Cambridge and ZIMSEC Curriculum, providing a comprehensive education to prepare students for future success.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-primary">ZIMSEC Curriculum</h3>
                  <div className="bg-white p-6 rounded-lg">
                    <ul className="list-disc pl-5 space-y-2 text-primary">
                      <li>Mathematics</li>
                      <li>English Language</li>
                      <li>Shona</li>
                      <li>Agriculture</li>
                      <li>Combined Science</li>
                      <li>Heritage Studies</li>
                      <li>Geography</li>
                      <li>History</li>
                      <li>Computer Science</li>
                      <li>Business Enterprising Skills</li>
                      <li>Principles of Accounting</li>
                      <li>Textile Technology and Design</li>
                      <li>Building Technology and Design</li>
                      <li>Physics</li>
                      <li>Chemistry</li>
                      <li>Biology</li>
                      <li>Commerce</li>
                    </ul>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-primary">Cambridge Curriculum</h3>
                  <div className="bg-white p-6 rounded-lg">
                    <ul className="list-disc pl-5 space-y-2 text-primary">
                      <li>Mathematics</li>
                      <li>Computer Science</li>
                      <li>English Language</li>
                      <li>Biology</li>
                      <li>Chemistry</li>
                      <li>Agriculture</li>
                      <li>Physics</li>
                      <li>Geography</li>
                      <li>Travel and Tourism</li>
                      <li>History</li>
                      <li>Combined Science</li>
                      <li>Principles of Accounting</li>
                      <li>Business Studies</li>
                      <li>Environmental Management</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-2 border-primary shadow-md bg-white">
              <CardHeader className="bg-primary text-white">
                <CardTitle>Primary School Sports & Activities</CardTitle>
              </CardHeader>
              <CardContent className="bg-white mt-2">
                <div className="mb-4">
                  <h3 className="font-bold mb-2">Sports</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Cricket</li>
                    <li>Hockey</li>
                    <li>Basketball</li>
                    <li>Swimming</li>
                    <li>Tennis</li>
                    <li>Volleyball</li>
                    <li>Soccer</li>
                    <li>Netball</li>
                    <li>Handball</li>
                    <li>Athletics</li>
                    <li>Chess</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold mb-2">Arts and Clubs</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Debate</li>
                    <li>Drama</li>
                    <li>Dance</li>
                    <li>Quiz</li>
                    <li>Spelling Bee</li>
                    <li>Music</li>
                    <li>Choir</li>
                    <li>Public Speaking</li>
                    <li>Friends of the Environment</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-2 border-primary shadow-md bg-white">
              <CardHeader className="bg-accent text-primary">
                <CardTitle>Secondary School Sports & Activities</CardTitle>
              </CardHeader>
              <CardContent className="bg-white mt-2">
                <div className="mb-4">
                  <h3 className="font-bold mb-2">Sports</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Cricket</li>
                    <li>Hockey</li>
                    <li>Soccer</li>
                    <li>Netball</li>
                    <li>Basketball</li>
                    <li>Volleyball</li>
                    <li>Tennis</li>
                    <li>Athletics</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold mb-2">Clubs and Arts</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Public Speaking</li>
                    <li>Chess</li>
                    <li>Debate</li>
                    <li>Drama</li>
                    <li>Dance</li>
                    <li>Quiz</li>
                    <li>Spelling Bee</li>
                    <li>Music</li>
                    <li>Choir</li>
                    <li>Journalism</li>
                    <li>Cosmetology</li>
                    <li>Friends of the Environment</li>
                  </ul>
                </div>
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

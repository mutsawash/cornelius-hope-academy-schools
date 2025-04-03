
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ClipboardList, DollarSign, GraduationCap } from "lucide-react";
import HomeImageCarousel from "@/components/HomeImageCarousel";

const AdmissionsPage = () => {
  const primaryEnrollmentFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSfJyrWVQLy7WH6W1xLM0A9QKMo4Ica6_muJh3XzCnJfDFaG7A/viewform";
  const secondaryEnrollmentFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSfme7aJt_SOUrrCHk5lfP2nHGLX7j7G2N3hoQrXSC6ihjIlDA/viewform?usp=header";

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-8 text-primary">Admissions</h1>
          
          <div className="mb-12">
            <p className="text-lg mb-6">
              Thank you for your interest in Cornelius Hope Academy. We welcome applications from families who value academic excellence, character development, and a supportive learning environment.
            </p>
            <p className="text-lg mb-6">
              Our admissions process is designed to ensure that each student is a good fit for our program and that we can meet their educational needs. We consider academic potential, character, and the family's commitment to our educational philosophy.
            </p>
            <div className="flex justify-center gap-4 mt-8 flex-wrap">
              <a href={primaryEnrollmentFormUrl} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="px-8">Apply for Primary School</Button>
              </a>
              <a href={secondaryEnrollmentFormUrl} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="px-8" variant="outline">Apply for Secondary School</Button>
              </a>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div>
              <h2 className="text-2xl font-semibold mb-6 text-primary">Available Programs</h2>
              <div className="space-y-6">
                <Card className="border-secondary">
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center text-primary">
                      <GraduationCap className="mr-2 h-5 w-5" /> Primary School
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Ages 2-13 (Preschool to Grade 7)</p>
                    <p className="mt-2">Focusing on building a strong academic foundation and developing essential skills.</p>
                  </CardContent>
                </Card>
                
                <Card className="border-secondary">
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center text-primary">
                      <GraduationCap className="mr-2 h-5 w-5" /> Secondary School
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Ages 12-19, Form 1 to Form 4 (Grade 8 to Grade 11)</p>
                    <p className="mt-2">Providing a rigorous academic program that prepares students for higher education.</p>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl font-semibold mb-6 text-primary">Class Sizes</h2>
              <Card className="bg-secondary/20 border-secondary h-full">
                <CardContent className="pt-6">
                  <p className="mb-4">We maintain a class size of 20-25 students to ensure:</p>
                  <ul className="space-y-4">
                    <li className="flex">
                      <div className="h-6 w-6 rounded-full bg-primary text-white flex items-center justify-center mr-3 shrink-0">1</div>
                      <div>
                        <p className="font-semibold">Personalized Attention</p>
                        <p className="text-gray-600">Each student receives individual guidance and support</p>
                      </div>
                    </li>
                    <li className="flex">
                      <div className="h-6 w-6 rounded-full bg-primary text-white flex items-center justify-center mr-3 shrink-0">2</div>
                      <div>
                        <p className="font-semibold">Better Learning Environment</p>
                        <p className="text-gray-600">More focused classroom atmosphere</p>
                      </div>
                    </li>
                    <li className="flex">
                      <div className="h-6 w-6 rounded-full bg-primary text-white flex items-center justify-center mr-3 shrink-0">3</div>
                      <div>
                        <p className="font-semibold">Greater Participation</p>
                        <p className="text-gray-600">More opportunities for students to engage and contribute</p>
                      </div>
                    </li>
                    <li className="flex">
                      <div className="h-6 w-6 rounded-full bg-primary text-white flex items-center justify-center mr-3 shrink-0">4</div>
                      <div>
                        <p className="font-semibold">Closer Relationships</p>
                        <p className="text-gray-600">Stronger bonds between students and teachers</p>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <Card className="bg-white border-secondary">
              <CardHeader>
                <CardTitle className="flex items-center text-primary">
                  <ClipboardList className="mr-2 h-5 w-5" /> Application Process
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ol className="list-decimal pl-5 space-y-2">
                  <li>Submit application form</li>
                  <li>Provide academic records</li>
                  <li>Teacher recommendations</li>
                  <li>Entrance assessment</li>
                  <li>Admissions decision</li>
                </ol>
              </CardContent>
            </Card>
            
            <Card className="bg-white border-secondary">
              <CardHeader>
                <CardTitle className="flex items-center text-primary">
                  <DollarSign className="mr-2 h-5 w-5" /> Tuition & Fees
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">Our tuition is competitive and reflects our commitment to providing a high-quality education.</p>
                <p className="mb-2"><strong>Primary School:</strong> Please contact administration</p>
                <p><strong>Secondary School:</strong> Please contact administration</p>
                <p className="mt-4 text-sm text-gray-600">Additional fees may apply for books, technology, and extracurricular activities.</p>
              </CardContent>
            </Card>
          </div>
          
          <div className="bg-white p-8 rounded-lg border border-secondary">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-1">What are the class sizes at Cornelius Hope Academy?</h3>
                <p>Our average class size is 20-25 students, allowing for personalized attention and optimal learning.</p>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Do you offer transportation services?</h3>
                <p>Yes, we provide bus transportation for students within a certain radius of the school.</p>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Are there opportunities for parent involvement?</h3>
                <p>We strongly encourage parent participation through our Parent-Teacher Association, volunteer opportunities, and regular school events.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AdmissionsPage;

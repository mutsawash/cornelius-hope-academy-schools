import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import HomeImageCarousel from "@/components/HomeImageCarousel";

const PrimarySchool = () => {
  const enrollmentFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSfJyrWVQLy7WH6W1xLM0A9QKMo4Ica6_muJh3XzCnJfDFaG7A/viewform";
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="py-8 bg-primary text-white text-center relative">
          <HomeImageCarousel sectionId="primary-banner" className="absolute inset-0 -z-10" />
          <div id="primary-banner" className="container mx-auto px-4 relative z-10">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Primary School</h1>
          </div>
        </div>
        
        <section className="py-10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="mb-10 flex justify-center">
                <img 
                  src="/lovable-uploads/d92dd935-0108-4f95-a553-de55cf3d227f.png" 
                  alt="Primary School Design" 
                  className="w-full max-w-3xl h-auto rounded-lg shadow-xl" 
                />
              </div>
              
              <p className="text-lg mb-8">
                Our curriculum is designed to build a strong foundation for lifelong learning while nurturing each student's unique talents and abilities in a supportive Pentacostal Christian environment.
              </p>
              
              <div className="bg-blue-50 rounded-lg p-6 mb-10">
                <h2 className="text-2xl font-bold text-primary mb-6">Curriculum</h2>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-4">Infant Level (ECD to Grade 2)</h3>
                    <ul className="space-y-2">
                      <li>Mathematics and Science</li>
                      <li>English</li>
                      <li>Heritage Studies</li>
                      <li>Chishona</li>
                      <li>Physical Education</li>
                      <li>Mass Displays</li>
                      <li>ICT</li>
                      <li>Visual and Performing Arts</li>
                      <li>Guidance and Counselling</li>
                      <li>Christian Education</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-4">Junior Level (Grade 3 to Grade 7)</h3>
                    <ul className="space-y-2">
                      <li>English</li>
                      <li>Chishona</li>
                      <li>Mathematics</li>
                      <li>Agriculture</li>
                      <li>Science and Technology</li>
                      <li>ICT</li>
                      <li>Heritage - Social Studies</li>
                      <li>Family, Religion and Moral Education</li>
                      <li>Visual and Performing Arts</li>
                      <li>Physical Education</li>
                      <li>Guidance and Counseling</li>
                      <li>Christian Education</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="bg-secondary/10 rounded-lg p-6 mb-10">
                <h2 className="text-2xl font-bold text-primary mb-6">Sports & Activities</h2>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-4">Sports</h3>
                    <ul className="grid grid-cols-2 gap-2">
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
                    <h3 className="text-xl font-semibold text-primary mb-4">Arts and Clubs</h3>
                    <ul className="grid grid-cols-2 gap-2">
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
                </div>
              </div>
              
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-primary mb-6">Why Choose Our Primary School</h2>
                <div className="space-y-4">
                  <p>Our primary school provides a nurturing environment where children develop a love for learning while building a strong academic foundation. Our experienced teachers are dedicated to helping each student reach their full potential.</p>
                  <p>With class sizes of 20-25 students and a focus on holistic development, we ensure that every child receives the attention and support they need to thrive academically, socially, emotionally, and spiritually.</p>
                  <p>Our on-campus clinic provides immediate health care needs, and our dedicated team offers comprehensive psychosocial support and child safeguarding measures to ensure the wellbeing of each student.</p>
                  <p>As a Pentecostal Christian school, we integrate faith-based values into our curriculum, fostering spiritual growth alongside academic excellence.</p>
                </div>
              </div>
              
              <div className="text-center">
                <a 
                  href={enrollmentFormUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Button size="lg" className="mb-2">Apply for Primary School</Button>
                </a>
                <p className="text-sm text-gray-600 mt-2">Ages 2-13 (Preschool to Grade 7)</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PrimarySchool;

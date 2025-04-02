
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import HomeImageCarousel from "@/components/HomeImageCarousel";

const SecondarySchool = () => {
  const enrollmentFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSfme7aJt_SOUrrCHk5lfP2nHGLX7j7G2N3hoQrXSC6ihjIlDA/viewform?usp=header";
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="py-8 bg-primary text-white text-center relative">
          <HomeImageCarousel sectionId="secondary-banner" className="absolute inset-0 -z-10" />
          <div id="secondary-banner" className="container mx-auto px-4 relative z-10">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Secondary School</h1>
          </div>
        </div>
        
        <section className="py-10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <p className="text-lg mb-8">
                We offer both Cambridge and ZIMSEC Curriculum, providing a comprehensive education to prepare students for future success.
              </p>
              
              <div className="bg-blue-50 rounded-lg p-6 mb-10">
                <h2 className="text-2xl font-bold text-primary mb-6">Curriculum</h2>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-4">ZIMSEC Curriculum</h3>
                    <ul className="space-y-2">
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
                  
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-4">Cambridge Curriculum</h3>
                    <ul className="space-y-2">
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
              
              <div className="bg-secondary/10 rounded-lg p-6 mb-10">
                <h2 className="text-2xl font-bold text-primary mb-6">Sports & Activities</h2>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-4">Sports</h3>
                    <ul className="grid grid-cols-2 gap-2">
                      <li>Soccer</li>
                      <li>Netball</li>
                      <li>Basketball</li>
                      <li>Volleyball</li>
                      <li>Tennis</li>
                      <li>Athletics</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-4">Clubs and Arts</h3>
                    <ul className="grid grid-cols-2 gap-2">
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
                </div>
              </div>
              
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-primary mb-6">Program Highlights</h2>
                <div className="space-y-4">
                  <p>Our secondary school builds upon the strong foundation established in primary education, challenging students with rigorous academics while providing opportunities for self-discovery and personal growth.</p>
                  <p>We prepare students for university and life beyond with a comprehensive approach to education that develops not only academic knowledge but also character, leadership, and life skills.</p>
                  <p>Our Pentecostal Christian environment fosters spiritual growth alongside academic excellence, helping students develop a strong moral compass and ethical foundation.</p>
                  <p>Students benefit from our on-campus clinic for immediate health needs, and our comprehensive psychosocial support and child safeguarding measures ensure the wellbeing of each student.</p>
                </div>
              </div>
              
              <div className="text-center">
                <a 
                  href={`${enrollmentFormUrl}&entry.123456789=Secondary`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Button size="lg" className="mb-2">Apply for Secondary School</Button>
                </a>
                <p className="text-sm text-gray-600 mt-2">Form 1 to Form 4</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default SecondarySchool;

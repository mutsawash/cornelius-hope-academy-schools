
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const AboutPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-8 text-primary">About Cornelius Hope Academy</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            <div>
              <p className="text-lg mb-6">
                Cornelius Hope Academy was founded with a vision to provide exceptional education that nurtures both academic excellence and character development. Since our establishment, we have been committed to creating a learning environment where students can discover their potential and develop the skills needed for success in an ever-changing world.
              </p>
              <p className="text-lg mb-6">
                Our approach combines traditional educational values with innovative teaching methods, ensuring our students receive a well-rounded education that prepares them for future challenges.
              </p>
            </div>
            <div className="bg-secondary/20 p-8 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4 text-primary">Our Mission</h2>
              <p className="mb-6">
                To provide a supportive and challenging educational environment that encourages students to achieve their full potential and become responsible, contributing members of society.
              </p>
              
              <h2 className="text-2xl font-semibold mb-4 text-primary">Our Vision</h2>
              <p>
                To be recognized as a center of educational excellence, producing well-rounded individuals who are academically prepared, ethically sound, and ready to make positive contributions to the global community.
              </p>
            </div>
          </div>
          
          <div className="mb-12">
            <h2 className="text-3xl font-semibold mb-6 text-primary">Our Schools</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md border border-secondary">
                <h3 className="text-2xl font-semibold mb-4 text-primary">Primary School</h3>
                <p className="mb-4">
                  Our Primary School provides a strong foundation for young learners from ages 5-12. The curriculum focuses on building essential skills in literacy, numeracy, and critical thinking while nurturing curiosity and creativity.
                </p>
                <p>
                  Through a child-centered approach, we ensure that each student receives personalized attention and support to thrive academically and socially.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md border border-secondary">
                <h3 className="text-2xl font-semibold mb-4 text-primary">Secondary School</h3>
                <p className="mb-4">
                  The Secondary School at Cornelius Hope Academy offers a comprehensive education for students aged 13-18. Our rigorous academic program prepares students for higher education while developing critical thinking, leadership, and collaboration skills.
                </p>
                <p>
                  Students benefit from specialized instruction in various subjects, advanced placement opportunities, and a wide range of extracurricular activities that complement their academic studies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;

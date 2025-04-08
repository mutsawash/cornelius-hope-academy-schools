
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { lazy, Suspense, useEffect } from "react";

// Lazy load the carousel component
const HomeImageCarousel = lazy(() => import("@/components/HomeImageCarousel"));

const AlumniPage = () => {
  const alumniRegistrationFormUrl = "https://forms.gle/JwWeSMcVh1MkVkK99";
  
  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="py-8 bg-primary text-white text-center relative">
          <div className="absolute inset-0 -z-10">
            <img 
              src="/lovable-uploads/a06211fa-4610-4495-afa7-01981f1a241f.png"
              alt="Alumni Background"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div id="alumni-banner" className="container mx-auto px-4 relative z-10">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Alumni Registration</h1>
            <p className="text-white/90 max-w-2xl mx-auto">
              Stay connected with Cornelius Hope Academy
            </p>
          </div>
        </div>
        
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-primary">Join Our Alumni Network</h2>
                <p className="text-gray-600 mb-6">
                  As a graduate of Cornelius Hope Academy, you're part of a special community. 
                  Joining our alumni network allows you to reconnect with classmates, mentor current students, 
                  attend exclusive events, and stay updated on school developments.
                </p>
                <p className="text-gray-600 mb-6">
                  Complete the registration form below to join our alumni database and 
                  receive updates about reunions, networking opportunities, and ways to give back.
                </p>
              </div>
              
              <div className="bg-blue-50 rounded-lg p-8 mb-12 text-center">
                <h3 className="text-xl font-semibold mb-4">Alumni Benefits</h3>
                <ul className="text-left space-y-3 max-w-lg mx-auto mb-6">
                  <li>✓ Invitations to alumni reunions and events</li>
                  <li>✓ Networking opportunities with fellow graduates</li>
                  <li>✓ Mentorship opportunities with current students</li>
                  <li>✓ Access to school resources and facilities</li>
                  <li>✓ Regular updates about school achievements and news</li>
                </ul>
                
                <a 
                  href={alumniRegistrationFormUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Button size="lg" className="mt-4">Register as an Alumni</Button>
                </a>
              </div>
              
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-4">Proud to be a Cornelius Hope Academy Graduate?</h3>
                <p className="text-gray-600 mb-6">
                  Share your success stories and memories with us! We'd love to feature alumni 
                  achievements in our school communications.
                </p>
                <p className="text-sm text-gray-500">
                  For any alumni-related inquiries, please contact us at:
                  <a href="mailto:chassecondary@gmail.com" className="text-primary hover:underline"> chassecondary@gmail.com</a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AlumniPage;


import { lazy, Suspense, useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";
import AnnouncementBanner from "@/components/AnnouncementBanner";

// Lazy load components
const Features = lazy(() => import("@/components/Features"));
const About = lazy(() => import("@/components/About")); 
const Testimonials = lazy(() => import("@/components/Testimonials"));
const NewsEvents = lazy(() => import("@/components/NewsEvents"));
const Footer = lazy(() => import("@/components/Footer"));
const HomeImageCarousel = lazy(() => import("@/components/HomeImageCarousel"));

const Index = () => {
  const enrollmentFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSfme7aJt_SOUrrCHk5lfP2nHGLX7j7G2N3hoQrXSC6ihjIlDA/viewform?usp=header";
  const primaryEnrollmentFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSfJyrWVQLy7WH6W1xLM0A9QKMo4Ica6_muJh3XzCnJfDFaG7A/viewform";
  
  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="bg-primary py-8 md:py-10 text-center relative">
        <Suspense fallback={<div className="min-h-[300px] bg-gray-100 animate-pulse"></div>}>
          <HomeImageCarousel sectionId="header-banner" />
        </Suspense>
        <div id="header-banner" className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col items-center justify-center">
            <img 
              src="/lovable-uploads/7bc2a381-f1f3-42fd-a952-4ddaa51e7a93.png" 
              alt="Cornelius Hope Academy Logo" 
              className="h-16 sm:h-20 md:h-24 w-auto mb-4 bg-white/90 p-1 rounded-md" 
              loading="lazy"
            />
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white px-2">
              Welcome to Cornelius Hope Academy Schools
            </h1>
            <p className="text-white mt-4 max-w-3xl mx-auto">
              Hope for their Future
            </p>
          </div>
          {/* Removed redundant application buttons here */}
        </div>
      </div>
      <main className="flex-grow">
        <Suspense fallback={<div className="min-h-[400px] bg-gray-100 animate-pulse"></div>}>
          <Hero />
        </Suspense>
        <Suspense fallback={<div className="min-h-[300px] bg-gray-100 animate-pulse"></div>}>
          <Features />
        </Suspense>
        <section className="py-12 overflow-hidden bg-gradient-to-b from-white to-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/2">
                <img 
                  src="/lovable-uploads/dddba70b-c458-4fa1-a100-10be24c11129.png" 
                  alt="School Design" 
                  className="w-full h-auto rounded-lg shadow-xl" 
                  loading="lazy"
                />
              </div>
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold mb-4 text-primary">Embracing Excellence</h2>
                <p className="text-gray-600 mb-6">
                  Our commitment to excellence is reflected in everything we do at Cornelius Hope Academy. 
                  From our innovative curriculum to our dedicated staff, we strive to create an environment 
                  where students can flourish academically, socially, and spiritually.
                </p>
                <p className="text-gray-600">
                  We believe in nurturing the full potential of each student, preparing them not just for 
                  academic success, but for leadership and positive contribution to society.
                </p>
              </div>
            </div>
          </div>
        </section>
        <Suspense fallback={<div className="min-h-[300px] bg-gray-100 animate-pulse"></div>}>
          <About />
        </Suspense>
        <Suspense fallback={<div className="min-h-[300px] bg-gray-100 animate-pulse"></div>}>
          <Testimonials />
        </Suspense>
        <section className="py-16 relative">
          <div className="absolute inset-0 -z-10">
            <img 
              src="/lovable-uploads/ef92dc04-64ec-4509-9ab4-c13f7e57048f.png" 
              alt="Bottom Background" 
              className="w-full h-full object-cover" 
              loading="lazy"
            />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6 text-primary">Apply Today</h2>
              <p className="mb-8 text-white">
                Give your child the gift of quality education at Cornelius Hope Academy Schools.
                Our doors are open for admissions for both primary and secondary schools.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a 
                  href={primaryEnrollmentFormUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md bg-accent text-primary hover:bg-accent/90 transition-colors h-10 px-6 py-2 text-lg font-medium"
                >
                  Apply for Primary School
                </a>
                <a 
                  href={enrollmentFormUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md bg-[#BE9E7F] text-white hover:bg-[#BE9E7F]/90 transition-colors h-10 px-6 py-2 text-lg font-medium"
                >
                  Apply for Secondary School
                </a>
              </div>
            </div>
          </div>
        </section>
        <Suspense fallback={<div className="min-h-[300px] bg-gray-100 animate-pulse"></div>}>
          <NewsEvents />
        </Suspense>
      </main>
      <Suspense fallback={<div className="min-h-[200px] bg-gray-100 animate-pulse"></div>}>
        <Footer />
      </Suspense>
      <AnnouncementBanner />
    </div>
  );
};

export default Index;

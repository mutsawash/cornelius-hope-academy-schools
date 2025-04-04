
import { useState, useEffect, lazy, Suspense } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";

// Lazy load the GallerySection component
const GallerySection = lazy(() => import("@/components/GallerySection"));

const GalleryPage = () => {
  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="py-12 relative">
          <div className="absolute inset-0 -z-10">
            <img 
              src="/lovable-uploads/ef92dc04-64ec-4509-9ab4-c13f7e57048f.png" 
              alt="Gallery Background" 
              className="w-full h-full object-cover" 
              loading="lazy"
            />
            <div className="absolute inset-0 bg-white/90"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-primary">School Gallery</h1>
            <p className="text-center mb-8 max-w-3xl mx-auto">
              Explore the visual journey of our students and activities at Cornelius Hope Academy Schools.
            </p>
            
            <div className="flex justify-center mb-10">
              <img 
                src="/lovable-uploads/01ecab8d-2f81-403a-9f33-c0f8802f3b1e.png" 
                alt="Gallery Design" 
                className="w-full max-w-3xl h-auto rounded-lg shadow-xl" 
                loading="lazy"
              />
            </div>
            
            <div className="flex justify-center gap-4 mb-10">
              <NavLink to="/admin/login">
                <Button variant="outline">Admin Login</Button>
              </NavLink>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <Suspense fallback={<div className="h-80 bg-gray-100 rounded animate-pulse"></div>}>
                <GallerySection 
                  title="Primary School Gallery" 
                  category="primary"
                />
              </Suspense>
              <Suspense fallback={<div className="h-80 bg-gray-100 rounded animate-pulse"></div>}>
                <GallerySection 
                  title="Secondary School Gallery" 
                  category="secondary"
                />
              </Suspense>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default GalleryPage;


import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GallerySection from "@/components/GallerySection";
import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";

const GalleryPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="py-12 bg-blue-50">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">School Gallery</h1>
            <p className="text-center mb-8 max-w-3xl mx-auto">
              Explore the visual journey of our students and activities at Cornelius Hope Academy Schools.
            </p>
            
            <div className="flex justify-center mb-10">
              <img 
                src="/lovable-uploads/01ecab8d-2f81-403a-9f33-c0f8802f3b1e.png" 
                alt="Gallery Design" 
                className="w-full max-w-3xl h-auto rounded-lg shadow-xl" 
              />
            </div>
            
            <div className="flex justify-center gap-4 mb-10">
              <NavLink to="/admin/login">
                <Button variant="outline">Admin Login</Button>
              </NavLink>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <GallerySection 
                title="Primary School Gallery" 
                category="primary"
              />
              <GallerySection 
                title="Secondary School Gallery" 
                category="secondary"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default GalleryPage;


import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1740&auto=format&fit=crop"
                alt="Students in classroom"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-primary text-white p-4 rounded-lg shadow-lg hidden md:block">
                <p className="font-bold text-2xl">Est. 2007</p>
                <p>Excellence in Education</p>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 md:pl-16">
            <h2 className="text-3xl font-bold mb-6 text-primary">Our Approach to Education</h2>
            <p className="text-gray-600 mb-6">
              At Cornelius Hope Academy, we believe education goes beyond textbooks and tests. We foster a supportive community where students develop critical thinking skills, emotional intelligence, and a lifelong passion for learning.
            </p>
            <p className="text-gray-600 mb-6">
              Our holistic approach combines rigorous academics with character development, helping students become not just knowledgeable individuals, but thoughtful, ethical leaders prepared for success in an ever-changing world.
            </p>
            <NavLink to="/about">
              <Button>Learn More About Us</Button>
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

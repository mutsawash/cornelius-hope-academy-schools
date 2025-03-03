
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1740&auto=format&fit=crop"
                alt="School building"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-primary text-white p-4 rounded-lg shadow-lg hidden md:block">
                <p className="font-bold text-2xl">Est. 2010</p>
                <p>Excellence in Education</p>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 md:pl-16">
            <h2 className="text-3xl font-bold mb-6">About Our School</h2>
            <p className="text-gray-600 mb-6">
              Founded in 2010, WiseLearn Academy has established itself as a leading educational 
              institution committed to academic excellence and character development. Our mission 
              is to provide a stimulating learning environment that encourages critical thinking, 
              creativity, and personal growth.
            </p>
            <p className="text-gray-600 mb-6">
              We believe in nurturing each student's unique talents and abilities, preparing them 
              not just for academic success but for life beyond the classroom. Our dedicated teachers 
              and state-of-the-art facilities create the perfect setting for students to thrive.
            </p>
            <Button>Learn More About Us</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

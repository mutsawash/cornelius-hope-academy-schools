
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
                alt="School building"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-primary text-white p-4 rounded-lg shadow-lg hidden md:block">
                <p className="font-bold text-2xl">Est. 2007</p>
                <p>Excellence in Education</p>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 md:pl-16">
            <h2 className="text-3xl font-bold mb-6 text-primary">About Our School</h2>
            <p className="text-gray-600 mb-6">
              Cornelius Hope Academy is a Christian private school located in Goodhope suburb, about 5 kilometers from Westgate Round along Nemakonde (former Lomagundi). Our primary school was established in 2007, with the secondary school following in 2010.
            </p>
            <p className="text-gray-600 mb-6">
              We offer both day and boarding facilities for secondary school that focus on developing holistic graduates. We provide not only academic development but also spiritual, physical, and psycho-social support to our learners. We are a one-stop school from ECD to Form 4.
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

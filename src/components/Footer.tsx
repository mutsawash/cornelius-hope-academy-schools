
import { NavLink } from "react-router-dom";
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img 
                src="/lovable-uploads/1ea35b44-5930-467e-bd35-c43ac5215c8e.png" 
                alt="Cornelius Hope Academy Logo" 
                className="h-16 w-auto bg-white/90 p-1 rounded-md" 
              />
              <h3 className="text-xl font-bold">Cornelius Hope Academy</h3>
            </div>
            <p className="mb-4">
              Providing quality education and nurturing excellence since 2010.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-secondary" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-secondary" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="https://www.instagram.com/cornelius_hope_academy_/" target="_blank" rel="noopener noreferrer" className="hover:text-secondary" aria-label="Instagram">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <NavLink to="/" className="hover:text-secondary transition-colors">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className="hover:text-secondary transition-colors">
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink to="/academics" className="hover:text-secondary transition-colors">
                  Academics
                </NavLink>
              </li>
              <li>
                <NavLink to="/admissions" className="hover:text-secondary transition-colors">
                  Admissions
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="hover:text-secondary transition-colors">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Programs</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-secondary transition-colors">
                  Primary School
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary transition-colors">
                  Secondary School
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary transition-colors">
                  International Curriculum
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary transition-colors">
                  Extra-Curricular Activities
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary transition-colors">
                  Summer Programs
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="shrink-0 mt-1" />
                <span>10 Good Hope Road, Westgate, Harare</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} className="shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} className="shrink-0" />
                <span>info@corneliushope.edu</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-10 pt-6 text-center">
          <p>&copy; {new Date().getFullYear()} Cornelius Hope Academy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

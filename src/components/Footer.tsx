
import { NavLink } from "react-router-dom";
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">WiseLearn Academy</h3>
            <p className="mb-4">
              Providing quality education and nurturing excellence since 2010.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gray-300" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-gray-300" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-gray-300" aria-label="Instagram">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <NavLink to="/" className="hover:text-gray-300 transition-colors">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className="hover:text-gray-300 transition-colors">
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink to="/academics" className="hover:text-gray-300 transition-colors">
                  Academics
                </NavLink>
              </li>
              <li>
                <NavLink to="/admissions" className="hover:text-gray-300 transition-colors">
                  Admissions
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="hover:text-gray-300 transition-colors">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Programs</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-gray-300 transition-colors">
                  Primary School
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300 transition-colors">
                  Secondary School
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300 transition-colors">
                  International Curriculum
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300 transition-colors">
                  Extra-Curricular Activities
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300 transition-colors">
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
                <span>123 Education Avenue, Wisdom City, WS 12345</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} className="shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} className="shrink-0" />
                <span>info@wiselearn.edu</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-10 pt-6 text-center">
          <p>&copy; {new Date().getFullYear()} WiseLearn Academy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


import { NavLink } from "react-router-dom";
import { Facebook, Instagram, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">About Us</h3>
            <p className="mb-4">Cornelius Hope Academy is a Christian private school providing quality education from pre-school through secondary school in a supportive, faith-based environment.</p>
            <div className="flex items-center mb-2">
              <a 
                href="https://vohzimbabwe.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-white hover:text-accent transition-colors"
              >
                <img 
                  src="/lovable-uploads/f6f18ead-09eb-42b4-aa2e-d812b1cb3925.png" 
                  alt="Village of Hope Logo" 
                  className="h-6 w-auto mr-2 bg-white p-0.5 rounded-sm" 
                />
                <span>Village of Hope Zimbabwe</span>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <NavLink to="/" className="hover:text-accent transition-colors">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about" className="hover:text-accent transition-colors">About</NavLink>
              </li>
              <li>
                <NavLink to="/academics" className="hover:text-accent transition-colors">Academics</NavLink>
              </li>
              <li>
                <NavLink to="/admissions" className="hover:text-accent transition-colors">Admissions</NavLink>
              </li>
              <li>
                <NavLink to="/gallery" className="hover:text-accent transition-colors">Gallery</NavLink>
              </li>
              <li>
                <NavLink to="/alumni" className="hover:text-accent transition-colors">Alumni</NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="hover:text-accent transition-colors">Contact</NavLink>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Information</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="mt-1 mr-2">📍</span>
                <span>P.O. Box WGT 412 WESTGATE, Harare</span>
              </li>
              <li className="flex items-center">
                <Phone size={16} className="mr-2" />
                <a href="tel:+0242003287" className="hover:text-accent transition-colors">(0242) 00328 97</a>
              </li>
              <li className="flex items-center">
                <Mail size={16} className="mr-2" />
                <a href="mailto:chassecondary@gmail.com" className="hover:text-accent transition-colors">chassecondary@gmail.com</a>
              </li>
              <li className="flex items-center">
                <Mail size={16} className="mr-2" />
                <a href="mailto:chaps-primaryschool@gmail.com" className="hover:text-accent transition-colors">chaps-primaryschool@gmail.com</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/profile.php/?id=61561381671901" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white hover:text-accent transition-colors flex flex-col items-center"
              >
                <Facebook size={24} className="text-blue-600" />
                <span className="text-xs mt-1">Find us on Facebook</span>
              </a>
              <a 
                href="https://www.instagram.com/cornelius_hope_academy_/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white hover:text-accent transition-colors flex flex-col items-center"
              >
                <Instagram size={24} className="text-red-600" />
                <span className="text-xs mt-1">Follow us on Instagram</span>
              </a>
            </div>
            <div className="mt-6">
              <p className="text-sm">Office Hours:</p>
              <p className="text-sm">Monday - Friday: 7:30 AM - 4:30 PM</p>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-green-700 text-center">
          <p>&copy; {new Date().getFullYear()} Cornelius Hope Academy Schools. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

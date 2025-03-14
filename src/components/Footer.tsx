
import { NavLink } from "react-router-dom";
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img 
                src="/lovable-uploads/7bc2a381-f1f3-42fd-a952-4ddaa51e7a93.png" 
                alt="Cornelius Hope Academy Logo" 
                className="h-12 sm:h-14 md:h-16 w-auto bg-white/90 p-1 rounded-md" 
              />
              <h3 className="text-lg md:text-xl font-bold">Cornelius Hope Academy</h3>
            </div>
            <p className="mb-4">
              Providing quality education and nurturing excellence since 2007.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-secondary transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-secondary transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="https://www.instagram.com/cornelius_hope_academy_/" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div className="mt-4 sm:mt-0">
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

          <div className="mt-4 sm:mt-0">
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
                  Cambridge Curriculum
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary transition-colors">
                  ZIMSEC Curriculum
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary transition-colors">
                  Sports & Clubs
                </a>
              </li>
            </ul>
          </div>

          <div className="mt-4 sm:mt-0">
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="shrink-0 mt-1" />
                <span>P.O. Box WGT 412 WESTGATE, Harare</span>
              </li>
              <li className="flex items-start space-x-3">
                <Phone size={20} className="shrink-0 mt-1" />
                <div className="flex flex-col">
                  <a href="tel:+0242003287" className="hover:text-secondary transition-colors">(0242) 00328 97</a>
                  <a href="tel:+263772855611" className="hover:text-secondary transition-colors">0772 85611</a>
                  <a href="tel:+263772585706" className="hover:text-secondary transition-colors">0772 585 706</a>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Mail size={20} className="shrink-0 mt-1" />
                <div className="flex flex-col">
                  <a href="mailto:chaps-primaryschool@gmail.com" className="hover:text-secondary transition-colors break-all">chaps-primaryschool@gmail.com</a>
                  <a href="mailto:chassecondary@gmail.com" className="hover:text-secondary transition-colors break-all">chassecondary@gmail.com</a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 md:mt-10 pt-6 text-center text-sm md:text-base">
          <p>&copy; {new Date().getFullYear()} Cornelius Hope Academy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

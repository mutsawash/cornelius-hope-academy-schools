
import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";
import { Menu } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto py-4 px-4 md:px-6 flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-primary">
            <NavLink to="/" className="flex items-center gap-2">
              WiseLearn Academy
            </NavLink>
          </h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <NavLink to="/" className="font-medium hover:text-primary transition-colors">
            Home
          </NavLink>
          <NavLink to="/about" className="font-medium hover:text-primary transition-colors">
            About
          </NavLink>
          <NavLink to="/academics" className="font-medium hover:text-primary transition-colors">
            Academics
          </NavLink>
          <NavLink to="/admissions" className="font-medium hover:text-primary transition-colors">
            Admissions
          </NavLink>
          <NavLink to="/contact" className="font-medium hover:text-primary transition-colors">
            Contact
          </NavLink>
          <Button>Enroll Now</Button>
        </nav>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={toggleMenu}
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container mx-auto py-4 px-4 flex flex-col space-y-4">
            <NavLink 
              to="/" 
              className="font-medium py-2 hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </NavLink>
            <NavLink 
              to="/about" 
              className="font-medium py-2 hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </NavLink>
            <NavLink 
              to="/academics" 
              className="font-medium py-2 hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Academics
            </NavLink>
            <NavLink 
              to="/admissions" 
              className="font-medium py-2 hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Admissions
            </NavLink>
            <NavLink 
              to="/contact" 
              className="font-medium py-2 hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </NavLink>
            <Button className="w-full">Enroll Now</Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

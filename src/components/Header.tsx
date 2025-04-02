
import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";
import { Menu, ChevronDown } from "lucide-react";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const enrollmentFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSfme7aJt_SOUrrCHk5lfP2nHGLX7j7G2N3hoQrXSC6ihjIlDA/viewform?usp=header";

  return (
    <header className="bg-white sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto py-4 px-4 md:px-6 flex justify-between items-center">
        <div className="flex items-center">
          <NavLink to="/" className="flex items-center gap-2">
            <img 
              src="/lovable-uploads/7bc2a381-f1f3-42fd-a952-4ddaa51e7a93.png" 
              alt="Cornelius Hope Academy Logo" 
              className="h-12 w-auto" 
            />
            <h1 className="text-2xl font-bold text-primary hidden md:block">
              Cornelius Hope Academy
            </h1>
          </NavLink>
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
          <NavLink to="/gallery" className="font-medium hover:text-primary transition-colors">
            Gallery
          </NavLink>
          <NavLink to="/contact" className="font-medium hover:text-primary transition-colors">
            Contact
          </NavLink>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="flex items-center gap-1">
                Enroll Now <ChevronDown size={16} />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-white">
              <DropdownMenuItem className="cursor-pointer">
                <a 
                  href={`${enrollmentFormUrl}&entry.123456789=Preschool`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  Preschool
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer">
                <a 
                  href={`${enrollmentFormUrl}&entry.123456789=Primary`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  Primary School
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer">
                <a 
                  href={`${enrollmentFormUrl}&entry.123456789=Secondary`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  Secondary School
                </a>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
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
              to="/gallery" 
              className="font-medium py-2 hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Gallery
            </NavLink>
            <NavLink 
              to="/contact" 
              className="font-medium py-2 hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </NavLink>
            <div className="py-2">
              <p className="font-medium mb-2">Enroll Now:</p>
              <div className="flex flex-col space-y-2 pl-2">
                <a 
                  href={`${enrollmentFormUrl}&entry.123456789=Preschool`} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-primary hover:underline"
                >
                  - Preschool
                </a>
                <a 
                  href={`${enrollmentFormUrl}&entry.123456789=Primary`} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-primary hover:underline"
                >
                  - Primary School
                </a>
                <a 
                  href={`${enrollmentFormUrl}&entry.123456789=Secondary`} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-primary hover:underline"
                >
                  - Secondary School
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

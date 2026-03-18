import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, Phone, Mail, Facebook, Instagram, MessageCircle, ChevronDown } from 'lucide-react';
import './styles/Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [enrollDropdown, setEnrollDropdown] = useState(false);

  const enrollmentFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSfme7aJt_SOUrrCHk5lfP2nHGLX7j7G2N3hoQrXSC6ihjIlDA/viewform?usp=header";
  const primaryEnrollmentFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSfJyrWVQLy7WH6W1xLM0A9QKMo4Ica6_muJh3XzCnJfDFaG7A/viewform";

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Admissions', path: '/admissions' },
    { name: 'Academics', path: '/academics' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <header className={`cha-header${isScrolled ? ' cha-header--scrolled' : ''}`}>
      {/* Top Bar */}
      <div className="cha-topbar">
        <div className="container cha-topbar__inner">
          <div className="cha-topbar__contact">
            <a href="tel:+263789242260" className="cha-topbar__link">
              <Phone size={14} /> <span>CHAPS: 0789 242 260</span>
            </a>
            <a href="tel:+263789668344" className="cha-topbar__link">
              <Phone size={14} /> <span>CHASS: 0789 668 344</span>
            </a>
            <a href="mailto:info@corneliushope.ac.zw" className="cha-topbar__link">
              <Mail size={14} /> <span>info@corneliushope.ac.zw</span>
            </a>
          </div>
          <div className="cha-topbar__social">
            <a href="#" className="cha-topbar__social-link" aria-label="Facebook"><Facebook size={15} /></a>
            <a href="#" className="cha-topbar__social-link" aria-label="Instagram"><Instagram size={15} /></a>
            <a href="https://wa.me/263123456789" className="cha-topbar__social-link" aria-label="WhatsApp"><MessageCircle size={15} /></a>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <nav className="cha-navbar">
        <div className="container cha-navbar__inner">
          <NavLink to="/" className="cha-brand">
            <img src="/Images/schools logo.png" alt="Cornelius Hope Academy Logo" className="cha-brand__logo" />
            <div className="cha-brand__text">
              <span className="cha-brand__name">Cornelius Hope Academy</span>
              <span className="cha-brand__tagline">Nurturing Excellence</span>
            </div>
          </NavLink>

          {/* Desktop Nav */}
          <div className="cha-nav-desktop">
            {navLinks.map(link => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) => `cha-nav-link${isActive ? ' cha-nav-link--active' : ''}`}
              >
                {link.name}
              </NavLink>
            ))}

            <div className="cha-enroll-dropdown" onMouseLeave={() => setEnrollDropdown(false)}>
              <button className="cha-btn-enroll" onMouseEnter={() => setEnrollDropdown(true)}>
                Enroll Now <ChevronDown size={15} />
              </button>
              {enrollDropdown && (
                <div className="cha-enroll-menu">
                  <a href={primaryEnrollmentFormUrl} target="_blank" rel="noopener noreferrer" className="cha-enroll-item">
                    Primary School
                  </a>
                  <a href={enrollmentFormUrl} target="_blank" rel="noopener noreferrer" className="cha-enroll-item">
                    Secondary School
                  </a>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Toggle */}
          <button className="cha-menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {isMenuOpen && (
        <>
          <div className="cha-overlay" onClick={() => setIsMenuOpen(false)} />
          <div className="cha-drawer">
            <div className="cha-drawer__header">
              <span className="cha-drawer__title">Menu</span>
              <button onClick={() => setIsMenuOpen(false)} aria-label="Close menu"><X size={22} /></button>
            </div>
            <nav className="cha-drawer__nav">
              {navLinks.map(link => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) => `cha-drawer__link${isActive ? ' cha-drawer__link--active' : ''}`}
                >
                  {link.name}
                </NavLink>
              ))}
            </nav>
            <div className="cha-drawer__enroll">
              <p className="cha-drawer__enroll-label">Admissions</p>
              <a href={primaryEnrollmentFormUrl} target="_blank" rel="noopener noreferrer" className="cha-drawer__enroll-link">
                Primary School Application
              </a>
              <a href={enrollmentFormUrl} target="_blank" rel="noopener noreferrer" className="cha-drawer__enroll-link">
                Secondary School Application
              </a>
            </div>
            <div className="cha-drawer__contact">
              <a href="tel:+263789242260" className="cha-drawer__contact-link">
                <Phone size={16} /> CHAPS: 0789 242 260
              </a>
              <a href="tel:+263789668344" className="cha-drawer__contact-link">
                <Phone size={16} /> CHASS: 0789 668 344
              </a>
              <a href="mailto:info@corneliushope.ac.zw" className="cha-drawer__contact-link">
                <Mail size={16} /> info@corneliushope.ac.zw
              </a>
            </div>
          </div>
        </>
      )}
    </header>
  );
};

export default Header;

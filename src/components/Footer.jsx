import { NavLink } from 'react-router-dom';
import { Facebook, Instagram, Mail, Phone, MapPin, MessageCircle, Send, Globe } from 'lucide-react';
import './styles/Footer.css';

const Footer = () => {
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Academics', path: '/academics' },
    { name: 'Admissions', path: '/admissions' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Contact Us', path: '/contact' },
    { name: 'Alumni', path: '/alumni' },
  ];

  return (
    <footer className="cha-footer">
      <div className="container cha-footer__grid">
        {/* Brand */}
        <div className="cha-footer__col cha-footer__col--brand">
          <NavLink to="/" className="cha-footer__brand">
            <img src="/Images/schools logo.png" alt="Cornelius Hope Academy" className="cha-footer__logo" />
            <span className="cha-footer__brand-name">Cornelius <br />Hope Academy</span>
          </NavLink>
          <p className="cha-footer__tagline">
            "Nurturing Excellence, Inspiring Futures. A faith-based foundation for global leaders since 2007."
          </p>
          <div className="cha-footer__social">
            <a href="#" className="cha-footer__social-icon" aria-label="Facebook"><Facebook size={18} /></a>
            <a href="#" className="cha-footer__social-icon" aria-label="Instagram"><Instagram size={18} /></a>
            <a href="https://wa.me/263123456789" className="cha-footer__social-icon" aria-label="WhatsApp"><MessageCircle size={18} /></a>
          </div>
        </div>

        {/* Navigation */}
        <div className="cha-footer__col">
          <h3 className="cha-footer__heading">Quick Navigation</h3>
          <ul className="cha-footer__nav">
            {navLinks.map(link => (
              <li key={link.path}>
                <NavLink to={link.path} className="cha-footer__nav-link">{link.name}</NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="cha-footer__col">
          <h3 className="cha-footer__heading">Get In Touch</h3>
          <ul className="cha-footer__contact-list">
            <li className="cha-footer__contact-item">
              <div className="cha-footer__contact-icon"><MapPin size={18} /></div>
              <div>
                <p className="cha-footer__contact-label">Address</p>
                <p className="cha-footer__contact-text">P.O. Box WGT 412 WESTGATE, Harare, Zimbabwe</p>
              </div>
            </li>
            <li className="cha-footer__contact-item">
              <div className="cha-footer__contact-icon"><Phone size={18} /></div>
              <div>
                <p className="cha-footer__contact-label">Phone Lines</p>
                <a href="tel:+263789242260" className="cha-footer__contact-text cha-footer__contact-link">CHAPS: 0789 242 260</a>
                <a href="tel:+263789668344" className="cha-footer__contact-text cha-footer__contact-link">CHASS: 0789 668 344</a>
              </div>
            </li>
            <li className="cha-footer__contact-item">
              <div className="cha-footer__contact-icon"><Mail size={18} /></div>
              <div>
                <p className="cha-footer__contact-label">Email</p>
                <a href="mailto:info@corneliushope.ac.zw" className="cha-footer__contact-text cha-footer__contact-link">info@corneliushope.ac.zw</a>
              </div>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="cha-footer__col">
          <h3 className="cha-footer__heading">Newsletter</h3>
          <p className="cha-footer__newsletter-desc">Stay updated with news and events from Cornelius Hope Academy.</p>
          <div className="cha-footer__newsletter-form">
            <input type="email" placeholder="Your Email Address" className="cha-footer__newsletter-input" />
            <button className="cha-footer__newsletter-btn">
              Subscribe <Send size={16} />
            </button>
          </div>
          <div className="cha-footer__affiliation">
            <div className="cha-footer__affiliation-header">
              <Globe size={16} className="cha-footer__affiliation-icon" />
              <span>Affiliations</span>
            </div>
            <a href="https://vohzimbabwe.com/" target="_blank" rel="noopener noreferrer" className="cha-footer__affiliation-link">
              <img src="/Images/voh logo.png" alt="VOH" className="cha-footer__affiliation-logo" />
              <span>Village of Hope Zimbabwe</span>
            </a>
          </div>
        </div>
      </div>

      <div className="cha-footer__bottom">
        <div className="container cha-footer__bottom-inner">
          <p>
            &copy; {new Date().getFullYear()} Cornelius Hope Academy Schools. All rights reserved. 
            <br />
            Designed by <a href="https://kodebuildtech.com/" target="_blank" rel="noopener noreferrer" style={{color: 'inherit', textDecoration: 'underline'}}>Kodebuild</a>
          </p>
          <div className="cha-footer__bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

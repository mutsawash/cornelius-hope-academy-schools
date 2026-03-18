import { useState, useEffect } from 'react';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import { Mail, Phone, MapPin, Facebook, Instagram, ChevronRight, Clock, Send } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import './styles/Contact.css';

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 4000);
  };

  const contactInfo = [
    {
      icon: <MapPin size={24} />,
      title: 'Our Location',
      lines: [
        'Goodhope suburb, Westgate',
        'Along Nemakonde (former Lomagundi)',
        'Harare, Zimbabwe'
      ]
    },
    {
      icon: <Phone size={24} />,
      title: 'Phone Numbers',
      lines: [
        { label: 'Admin', val: '(0242) 00328 97', link: 'tel:+02420032897' },
        { label: 'Primary', val: '0772 856 111', link: 'tel:+263772855611' },
        { label: 'Secondary', val: '0772 585 706', link: 'tel:+263772585706' }
      ]
    },
    {
      icon: <Mail size={24} />,
      title: 'Email Addresses',
      lines: [
        { val: 'info@corneliushope.ac.zw', link: 'mailto:info@corneliushope.ac.zw' },
        { val: 'chassecondary@gmail.com', link: 'mailto:chassecondary@gmail.com' }
      ]
    }
  ];

  return (
    <div className="cha-page">
      <Header />
      <main>
        {/* Contact Hero */}
        <section className="cha-hero-base">
          <img src="/Images/secondary school public speaking.jpeg" alt="Contact Us" className="cha-hero-base__bg" />
          <div className="cha-hero-base__overlay" />
          <div className="container">
            <div className="cha-hero-base__content animate-fade-in-up">
              <div className="cha-breadcrumbs">
                <NavLink to="/">Home</NavLink>
                <ChevronRight size={14} />
                <span>Contact</span>
              </div>
              <h1 className="cha-hero-base__title">Get In <span>Touch</span></h1>
              <p className="cha-hero-base__desc">
                Have questions or want to visit? We're here to help you navigate your child's educational journey.
              </p>
            </div>
          </div>
        </section>

        <section className="cha-contact">
          <div className="container">
            <div className="cha-contact__split">
              
              {/* Left Column: Details */}
              <div className="cha-contact__details">
                <div className="cha-contact__info-group">
                  <span className="section-label">CONTACT INFO</span>
                  <h3>Reach Out to Us</h3>
                  <div className="cha-contact__info-items">
                    {contactInfo.map((info, idx) => (
                      <div key={idx} className="cha-contact__info-card">
                        <div className="cha-contact__info-card-icon">{info.icon}</div>
                        <div className="cha-contact__info-card-content">
                          <h4>{info.title}</h4>
                          {info.lines.map((line, lidx) => (
                            typeof line === 'string' ? <p key={lidx}>{line}</p> : 
                            <a key={lidx} href={line.link}>
                              {line.label && <strong>{line.label}: </strong>}
                              {line.val}
                            </a>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="cha-contact__info-group">
                  <h3><Clock size={20} style={{ verticalAlign: 'middle', marginRight: 10, color: 'var(--color-primary)' }} /> School Hours</h3>
                  <table className="cha-contact__hours-table">
                    <tbody>
                      <tr>
                        <td>Monday - Friday</td>
                        <td>8:00 AM - 3:30 PM</td>
                      </tr>
                      <tr>
                        <td>Office Hours</td>
                        <td>7:30 AM - 4:30 PM</td>
                      </tr>
                      <tr>
                        <td>Weekends</td>
                        <td>Closed</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="cha-contact__info-group">
                  <h3>Stay Connected</h3>
                  <div className="cha-contact__socials">
                    <a href="https://www.facebook.com/profile.php/?id=61561381671901" target="_blank" rel="noopener noreferrer" className="cha-contact__social-link">
                      <Facebook size={20} />
                    </a>
                    <a href="https://www.instagram.com/cornelius_hope_academy_/" target="_blank" rel="noopener noreferrer" className="cha-contact__social-link">
                      <Instagram size={20} />
                    </a>
                  </div>
                </div>
              </div>

              {/* Right Column: Form */}
              <div className="cha-contact__form-wrap">
                <h3>Message Us</h3>
                <p>Send us a quick message and our team will get back to you within 24 hours.</p>

                {submitted && (
                  <div className="cha-contact__success">
                    <strong>Message Sent Successfully!</strong><br/>
                    We'll be in touch with you shortly.
                  </div>
                )}

                <form onSubmit={handleSubmit} className="cha-contact__form">
                  <div className="cha-contact__form-group">
                    <label>Your Name</label>
                    <input name="name" value={formData.name} onChange={handleChange} required placeholder="Full Name" />
                  </div>
                  <div className="cha-contact__form-group">
                    <label>Email Address</label>
                    <input name="email" type="email" value={formData.email} onChange={handleChange} required placeholder="email@example.com" />
                  </div>
                  <div className="cha-contact__form-group full">
                    <label>Subject</label>
                    <input name="subject" value={formData.subject} onChange={handleChange} required placeholder="What can we help with?" />
                  </div>
                  <div className="cha-contact__form-group full">
                    <label>Your Message</label>
                    <textarea name="message" rows={6} value={formData.message} onChange={handleChange} required placeholder="How can we help you?" />
                  </div>
                  <button type="submit" className="cha-btn-primary full" style={{ padding: '18px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10 }}>
                    <Send size={18} /> Send Message
                  </button>
                </form>
              </div>

            </div>
          </div>

          {/* Full Width Map */}
          <div className="cha-contact__map-section">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3794.521083855366!2d30.97212207532662!3d-17.99020148316131!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1931a4931fce5a67%3A0x8c9b850eea683a37!2sCORNELIUS%20HOPE%20ACADEMY!5e0!3m2!1sen!2szw!4v1714693444962!5m2!1sen!2szw"
              allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
              title="School Location Map"
            />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;

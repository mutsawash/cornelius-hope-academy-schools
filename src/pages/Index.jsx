import { useEffect } from 'react';
import Header from '../components/Header.jsx';
import Hero from '../components/Hero.jsx';
import Features from '../components/Features.jsx';
import About from '../components/About.jsx';
import Testimonials from '../components/Testimonials.jsx';
import Footer from '../components/Footer.jsx';
import { NavLink } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import './styles/Index.css';

const Index = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="cha-page">
      <Header />
      <main>
        <Hero />
        <Features />

        {/* About Us Split Section */}
        <section id="about-section" className="cha-home-about">
          <div className="cha-home-about__dot-bg" />
          <div className="container cha-home-about__container">
            {/* Image with offset border */}
            <div className="cha-home-about__image-col">
              <div className="cha-home-about__border-frame" />
              <div className="cha-home-about__image-wrapper">
                <img
                  src="/Images/primary students in class (2).jpeg"
                  alt="Students Learning"
                  className="cha-home-about__image"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Content */}
            <div className="cha-home-about__content">
              <span className="cha-home-about__label">ABOUT US</span>
              <h2 className="cha-home-about__title">
                Building Trust,<br />Delivering Value.
              </h2>
              <p className="cha-home-about__desc">
                Cornelius Hope Academy is a premier educational institution committed to excellence.
                We combine academic rigor with strong character formation to ensure students not only
                reach their potential — but succeed beyond it.
              </p>
              <p className="cha-home-about__desc">
                Beyond academics, we place a strong emphasis on{' '}
                <strong>holistic development</strong> and{' '}
                <strong>community engagement</strong>, positioning our young leaders for long-term
                success in the real world.
              </p>
              <NavLink to="/about" className="cha-home-about__btn">
                LEARN MORE <ArrowRight size={16} />
              </NavLink>
            </div>
          </div>
        </section>

        <About />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

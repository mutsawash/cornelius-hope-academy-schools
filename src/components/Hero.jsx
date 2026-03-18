import { NavLink } from 'react-router-dom';
import { ArrowRight, Calendar } from 'lucide-react';
import HomeImageCarousel from './HomeImageCarousel.jsx';
import './styles/Hero.css';

const Hero = () => {
  const primaryEnrollmentFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSfJyrWVQLy7WH6W1xLM0A9QKMo4Ica6_muJh3XzCnJfDFaG7A/viewform";

  return (
    <section className="cha-hero">
      {/* Background carousel */}
      <HomeImageCarousel height="100%" />

      {/* Dark gradient overlay */}
      <div className="cha-hero__overlay" />

      {/* Content */}
      <div className="cha-hero__content">
        <div className="cha-hero__inner">
          <span className="cha-hero__badge">
            <span className="cha-hero__badge-dot" />
            Admissions Open for 2026
          </span>

          <h1 className="cha-hero__title">
            Nurturing Excellence, <br />
            <span>Inspiring Futures</span>
          </h1>

          <p className="cha-hero__subtitle">
            Cornelius Hope Academy empowers students to become self-reliant leaders 
            who impact their world through faith-based excellence.
          </p>

          <div className="cha-hero__actions">
            <a
              href={primaryEnrollmentFormUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="cha-hero__btn cha-hero__btn--primary"
            >
              Apply Online <ArrowRight size={18} />
            </a>
            <NavLink to="/about" className="cha-hero__btn cha-hero__btn--outline">
              Learn More
            </NavLink>
          </div>

          <div className="cha-hero__stats">
            <div className="cha-hero__stat">
              <span className="cha-hero__stat-value">100%</span>
              <span className="cha-hero__stat-label">Pass Rate</span>
            </div>
            <div className="cha-hero__stat-divider" />
            <div className="cha-hero__stat">
              <span className="cha-hero__stat-value">15:1</span>
              <span className="cha-hero__stat-label">Ratio</span>
            </div>
            <div className="cha-hero__stat-divider" />
            <div className="cha-hero__stat">
              <span className="cha-hero__stat-value">Active</span>
              <span className="cha-hero__stat-label">Engagement</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="cha-hero__fade" />
    </section>
  );
};

export default Hero;

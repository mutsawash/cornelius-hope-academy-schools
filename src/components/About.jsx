import { NavLink } from 'react-router-dom';
import { BookOpen, School, ArrowRight, CheckCircle2 } from 'lucide-react';
import './styles/About.css';

const About = () => {
  return (
    <section className="cha-about">
      {/* Mini Hero Header */}
      <div className="cha-about__hero">
        <div className="container cha-about__hero-inner">
          <span className="cha-about__hero-label">Our Core Programs</span>
          <h2 className="cha-about__hero-title">Excellence in Holistic Education</h2>
          <p className="cha-about__hero-subtitle">
            A seamless educational journey from early childhood through secondary graduation—
            blending academic rigor with deep character building.
          </p>
        </div>
      </div>

      <div className="container cha-about__content">
        {/* Program Cards */}
        <div className="cha-about__cards">

          {/* Primary Card */}
          <div className="cha-about__card">
            <div className="cha-about__card-stripe cha-about__card-stripe--primary" />
            <div className="cha-about__card-body">
              <div className="cha-about__card-header">
                <div className="cha-about__card-icon cha-about__card-icon--primary">
                  <BookOpen size={30} strokeWidth={2.5} />
                </div>
                <h3 className="cha-about__card-title">Primary School</h3>
              </div>
              <p className="cha-about__card-desc">
                Building strong foundations in literacy, numeracy, and character during the crucial
                formative years. Our curated primary curriculum encourages curiosity and a genuine
                love for learning in a vibrant, nurturing environment.
              </p>
              <ul className="cha-about__features">
                {['Dedicated, Caring Educators', 'Focus on Foundational Literacy', 'Safe & Nurturing Environment'].map((f, i) => (
                  <li key={i} className="cha-about__feature">
                    <CheckCircle2 size={17} className="cha-about__feature-icon" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <NavLink to="/primary-school" className="cha-about__card-btn cha-about__card-btn--primary">
                Explore Primary Curriculum <ArrowRight size={18} />
              </NavLink>
            </div>
          </div>

          {/* Secondary Card */}
          <div className="cha-about__card">
            <div className="cha-about__card-stripe cha-about__card-stripe--secondary" />
            <div className="cha-about__card-body">
              <div className="cha-about__card-header">
                <div className="cha-about__card-icon cha-about__card-icon--secondary">
                  <School size={30} strokeWidth={2.5} />
                </div>
                <h3 className="cha-about__card-title">Secondary School</h3>
              </div>
              <p className="cha-about__card-desc">
                Preparing ambitious students for global leadership with advanced academics, intensive
                career guidance, and leadership development. We equip students with critical skills
                for 21st-century success.
              </p>
              <ul className="cha-about__features">
                {['Cambridge & ZIMSEC Syllabi', 'Advanced Science & IT Labs', 'Leadership & Career Development'].map((f, i) => (
                  <li key={i} className="cha-about__feature">
                    <CheckCircle2 size={17} className="cha-about__feature-icon cha-about__feature-icon--secondary" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <NavLink to="/secondary-school" className="cha-about__card-btn cha-about__card-btn--secondary">
                Explore Secondary Curriculum <ArrowRight size={18} />
              </NavLink>
            </div>
          </div>

        </div>

        {/* CTA */}
        <div className="cha-about__cta">
          <div className="cha-about__cta-text">
            <h3 className="cha-about__cta-title">Secure Your Child's Future Today</h3>
            <p className="cha-about__cta-subtitle">
              Admissions for the upcoming academic year are officially open. Join the Cornelius Hope Academy
              family and give your child the foundation they deserve.
            </p>
          </div>
          <div className="cha-about__cta-actions">
            <NavLink to="/admissions" className="cha-about__cta-btn cha-about__cta-btn--primary">
              Start Admissions Process
            </NavLink>
            <NavLink to="/contact" className="cha-about__cta-btn cha-about__cta-btn--outline">
              Contact Office
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

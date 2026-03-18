import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import { NavLink } from 'react-router-dom';
import { Heart, Target, Lightbulb, Users, ShieldCheck, Stethoscope, ChevronRight } from 'lucide-react';
import './styles/About.css';

const values = [
  { name: 'Professionalism', icon: <Users size={20} /> },
  { name: 'Team Work', icon: <Users size={20} /> },
  { name: 'Honesty', icon: <ShieldCheck size={20} /> },
  { name: 'Transparency', icon: <ShieldCheck size={20} /> },
  { name: 'Commitment', icon: <Heart size={20} /> },
  { name: 'Fairness', icon: <ShieldCheck size={20} /> },
  { name: 'Compassion', icon: <Heart size={20} /> },
  { name: 'Self-Discipline', icon: <ShieldCheck size={20} /> },
  { name: 'Continuous Learning', icon: <Lightbulb size={20} /> },
  { name: 'Customer Satisfaction', icon: <Heart size={20} /> },
  { name: 'Innovativeness', icon: <Lightbulb size={20} /> },
  { name: 'Resource Utilization', icon: <Target size={20} /> },
];

const AboutPage = () => (
  <div className="cha-page">
    <Header />
    <main>
      {/* Premium Hero Section */}
      <section className="cha-hero-base">
        <img src="/Images/school view (6).jpeg" alt="School Campus" className="cha-hero-base__bg" />
        <div className="cha-hero-base__overlay" />
        <div className="container">
          <div className="cha-hero-base__content animate-fade-in-up">
            <div className="cha-breadcrumbs">
              <NavLink to="/">Home</NavLink>
              <ChevronRight size={14} />
              <span>About Us</span>
            </div>
            <h1 className="cha-hero-base__title">Our Story & <span>Values</span></h1>
            <p className="cha-hero-base__desc">
              Building a legacy of excellence and faith-based education in Harare since 2007.
            </p>
          </div>
        </div>
      </section>

      <section className="cha-about-page">
        <div className="container">
          
          {/* Story & Image Split */}
          <div className="cha-about-page__split">
            <div className="cha-about-page__story-content">
              <span className="section-label">A Legacy of Growth</span>
              <h2 className="section-title">Established to <span>Nurture</span></h2>
              <p className="cha-about-page__text">
                Cornelius Hope Academy is a Christian private school nestled in the peaceful Goodhope suburb of Harare. 
                Our journey began in 2007 with a primary school vision that quickly expanded into a secondary school 
                by 2010 due to our commitment to excellence.
              </p>
              <p className="cha-about-page__text">
                Today, we are a premier choice for families seeking a holistic "one-stop" educational experience from 
                ECD through Form 4. We blend academic rigor with spiritual growth, ensuring every graduate is prepared 
                to lead in the real world.
              </p>
              
              <div className="cha-about-page__founder-badge">
                <div className="cha-about-page__founder-info">
                  <p>Founded by</p>
                  <a href="https://vohzimbabwe.com/" target="_blank" rel="noopener noreferrer">
                    <img src="/Images/voh logo.png" alt="VOH" />
                    Village of Hope Zimbabwe
                  </a>
                </div>
              </div>
            </div>
            <div className="cha-about-page__story-image">
              <div className="cha-about-page__image-frame">
                <img src="/Images/primary students in class (2).jpeg" alt="Students in class" />
              </div>
            </div>
          </div>

          {/* Mission/Vision Cards */}
          <div className="cha-about-page__mission-grid">
            <div className="cha-about-page__mission-card">
              <div className="cha-about-page__mission-icon"><Target size={32} /></div>
              <h3>Our Vision</h3>
              <p>To produce graduates who are responsive to the needs of the nation and the global community.</p>
            </div>
            <div className="cha-about-page__mission-card">
              <div className="cha-about-page__mission-icon"><Heart size={32} /></div>
              <h3>Our Mission</h3>
              <p>To offer education of the highest quality, enabling children to develop their full potential — academically, physically, and spiritually.</p>
            </div>
            <div className="cha-about-page__mission-card">
              <div className="cha-about-page__mission-icon"><Lightbulb size={32} /></div>
              <h3>Our Goal</h3>
              <p>For every learner to become a competent, self-reliant, and acceptable member of the global society.</p>
            </div>
          </div>

          {/* Core Values Section */}
          <div className="cha-about-page__values-section">
            <div className="cha-about-page__values-header">
              <span className="section-label">THE CHA WAY</span>
              <h2 className="section-title">Our Core <span>Values</span></h2>
              <p className="section-subtitle">These principles define our culture and guide every interaction within our school community.</p>
            </div>
            <div className="cha-about-page__values-grid">
              {values.map((v, i) => (
                <div key={i} className="cha-about-page__value-card">
                  <span className="cha-about-page__value-icon">{v.icon}</span>
                  <span className="cha-about-page__value-name">{v.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Special Programs */}
          <div className="cha-about-page__features">
            <div className="cha-about-page__feature-item">
              <div className="cha-about-page__feature-text">
                <div className="cha-about-page__feature-icon-box"><Stethoscope size={28} /></div>
                <h3>Comprehensive School Clinic</h3>
                <p>Onsite medical services led by qualified staff who supervise hygiene, provide immediate care, and deliver health education to all learners.</p>
              </div>
            </div>
            <div className="cha-about-page__feature-item">
              <div className="cha-about-page__feature-text">
                <div className="cha-about-page__feature-icon-box"><ShieldCheck size={28} /></div>
                <h3>Discipleship & Safeguarding</h3>
                <p>A dedicated safeguarding department and pastoral team provide psychosocial support, spiritual guidance, and a safe environment for every child.</p>
              </div>
            </div>
          </div>

          {/* Final CTA */}
          <div className="cha-about-page__cta">
            <div className="cha-about-page__cta-content">
              <h3>Start Your Journey With Us</h3>
              <p>Join a community where every child's future is nurtured with care and excellence.</p>
              <div className="cha-about-page__cta-btns">
                <NavLink to="/admissions" className="cha-btn-primary">Apply Online Now</NavLink>
                <NavLink to="/contact" className="cha-btn-outline">Talk to Admissions</NavLink>
              </div>
            </div>
          </div>

        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default AboutPage;

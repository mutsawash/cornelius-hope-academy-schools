import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import HomeImageCarousel from '../components/HomeImageCarousel.jsx';
import { CheckCircle2, BookOpen, Layers, Award, ChevronRight } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import './styles/Academics.css';

const secondarySchoolImages = [
  '/Images/secondary boys prefects group photo.jpeg',
  '/Images/secondary prefects group photo.jpeg',
  '/Images/secondary school public speaking.jpeg',
  '/Images/secondary sports day 1.jpeg',
];

const AcademicsPage = () => {
  return (
    <div className="cha-page">
      <Header />
      <main>
        {/* Premium Academic Hero */}
        <section className="cha-hero-base">
          <img src="/Images/primary students in class (3).jpeg" alt="Academics" className="cha-hero-base__bg" />
          <div className="cha-hero-base__overlay" />
          <div className="container">
            <div className="cha-hero-base__content animate-fade-in-up">
              <div className="cha-breadcrumbs">
                <NavLink to="/">Home</NavLink>
                <ChevronRight size={14} />
                <span>Academics</span>
              </div>
              <h1 className="cha-hero-base__title">World-Class <span>Academics</span></h1>
              <p className="cha-hero-base__desc">
                From foundational primary education to global secondary certifications, we nurture 
                curiosity and drive excellence.
              </p>
            </div>
          </div>
        </section>

        <section className="cha-academics">
          <div className="container">
            
            {/* Primary School Section */}
            <div className="cha-academics__program-wrap">
              <div className="cha-academics__card">
                <img src="/Images/primary students in class.jpeg" alt="Primary School" className="cha-academics__hero-img" />
                <div className="cha-academics__program-info">
                  <span className="section-label">GRADES ECD - 7</span>
                  <h2>Primary School <span>Excellence</span></h2>
                  <p>Our junior curriculum is designed to build a solid foundation in literacy and numeracy while encouraging creative thinking.</p>
                </div>

                <div className="cha-academics__curriculum">
                  <div className="cha-academics__level-box">
                    <div className="cha-academics__level-header">
                      <h3>Infant Level (ECD - Grade 2)</h3>
                    </div>
                    <div className="cha-academics__subject-list">
                      {['Mathematics', 'Science', 'English', 'Heritage Studies', 'Chishona', 'Physical Education', 'ICT', 'Performing Arts'].map(s => (
                        <div key={s} className="cha-academics__subject-item"><CheckCircle2 size={16} />{s}</div>
                      ))}
                    </div>
                  </div>
                  <div className="cha-academics__level-box">
                    <div className="cha-academics__level-header">
                      <h3>Junior Level (Grade 3 - Grade 7)</h3>
                    </div>
                    <div className="cha-academics__subject-list">
                      {['English', 'Mathematics', 'Agriculture', 'Science & Tech', 'Heritage Studies', 'Chishona', 'Visual Arts', 'Physical Ed'].map(s => (
                        <div key={s} className="cha-academics__subject-item"><CheckCircle2 size={16} />{s}</div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Secondary School Section */}
            <div className="cha-academics__program-wrap">
              <div className="cha-academics__card">
                <div className="cha-academics__secondary-hero">
                  <HomeImageCarousel height="100%" images={secondarySchoolImages} />
                </div>
                <div className="cha-academics__program-info">
                  <span className="section-label">FORMS 1 - 4</span>
                  <h2>Secondary School <span>Global Path</span></h2>
                  <p>Equipping students for international success through ZIMSEC and Cambridge certifications.</p>
                </div>

                <div className="cha-academics__curriculum-comparison">
                  <div className="cha-academics__curriculum-card">
                    <div className="cha-academics__curriculum-tag">Standard</div>
                    <h3>ZIMSEC Curriculum</h3>
                    <div className="cha-academics__subject-list">
                      {['Mathematics', 'English', 'Shona', 'Agriculture', 'Combined Science', 'Geography', 'History', 'Commerce'].map(s => (
                        <div key={s} className="cha-academics__subject-item"><CheckCircle2 size={16} />{s}</div>
                      ))}
                    </div>
                  </div>
                  <div className="cha-academics__curriculum-card cha-academics__curriculum-card--premium">
                    <div className="cha-academics__curriculum-tag">International</div>
                    <h3>Cambridge Curriculum</h3>
                    <div className="cha-academics__subject-list">
                      {['Mathematics', 'Computer Science', 'English', 'Biology', 'Chemistry', 'Physics', 'Travel & Tourism', 'Accounting'].map(s => (
                        <div key={s} className="cha-academics__subject-item"><CheckCircle2 size={16} />{s}</div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Co-Curricular Section */}
            <div className="cha-academics__activities">
              <div className="cha-academics__section-title">
                <span className="section-label">BEYOND BOOKS</span>
                <h2 className="section-title">Sports & <span>Extra-Curricular</span></h2>
              </div>
              <div className="cha-academics__activity-grid">
                <div className="cha-academics__activity-card">
                  <h3>Primary Programs</h3>
                  <div className="cha-academics__activity-list-wrap">
                    <div className="cha-academics__activity-col">
                      <h4>Sports</h4>
                      <ul>
                        {['Cricket', 'Hockey', 'Swimming', 'Soccer', 'Netball'].map(i => <li key={i}>{i}</li>)}
                      </ul>
                    </div>
                    <div className="cha-academics__activity-col">
                      <h4>Arts & Clubs</h4>
                      <ul>
                        {['Debate', 'Drama', 'Choir', 'Spelling Bee', 'Quiz'].map(i => <li key={i}>{i}</li>)}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="cha-academics__activity-card">
                  <h3>Secondary Programs</h3>
                  <div className="cha-academics__activity-list-wrap">
                    <div className="cha-academics__activity-col">
                      <h4>Sports</h4>
                      <ul>
                        {['Cricket', 'Soccer', 'Basketball', 'Athletics', 'Tennis'].map(i => <li key={i}>{i}</li>)}
                      </ul>
                    </div>
                    <div className="cha-academics__activity-col">
                      <h4>Arts & Clubs</h4>
                      <ul>
                        {['Public Speaking', 'Journalism', 'Chess', 'Drama', 'IT Club'].map(i => <li key={i}>{i}</li>)}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AcademicsPage;

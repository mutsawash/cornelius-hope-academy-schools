import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import HomeImageCarousel from '../components/HomeImageCarousel.jsx';
import { Home, Heart, Stethoscope } from 'lucide-react';
import './styles/SecondarySchool.css';

const SecondarySchool = () => {
  const enrollmentFormUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSfme7aJt_SOUrrCHk5lfP2nHGLX7j7G2N3hoQrXSC6ihjIlDA/viewform?usp=header';

  return (
    <div className="cha-page">
      <Header />
      <main>
        {/* Hero Section */}
        <div className="cha-primary-hero">
          <div className="cha-primary-hero__carousel">
            <HomeImageCarousel sectionId="secondary-banner" />
          </div>
          <div className="container cha-primary-hero__content">
            <h1>Secondary School</h1>
            <p className="cha-secondary-subtitle">Featuring Full Boarding Facilities</p>
          </div>
        </div>

        <section className="cha-primary-content">
          <div className="container cha-primary-content__inner">
            <div className="cha-primary-content__img-wrap">
              <img
                src="/Images/secondary prefects group photo.jpeg"
                alt="Secondary School Students"
                className="cha-primary-content__img"
              />
            </div>

            {/* Boarding Advantage Box */}
            <div className="cha-secondary-boarding-box">
              <h2>Our Boarding School Advantage</h2>
              <div className="cha-secondary-features">
                <div className="cha-secondary-feature-card">
                  <Home size={40} />
                  <h3>Boarding Facilities</h3>
                  <p>Comfortable accommodation in a structured, supportive environment</p>
                </div>
                <div className="cha-secondary-feature-card">
                  <Heart size={40} />
                  <h3>Discipleship Program</h3>
                  <p>Full-time pastors leading spiritual development</p>
                </div>
                <div className="cha-secondary-feature-card">
                  <Stethoscope size={40} />
                  <h3>On-site Clinic</h3>
                  <p>Immediate healthcare provided by qualified medical staff</p>
                </div>
              </div>
              <p className="cha-secondary-desc">
                Our boarding facilities provide students with a structured environment that enhances academic performance,
                builds independence, and fosters strong community bonds. Boarders benefit from dedicated study times,
                supervised activities, and comprehensive psychosocial support from our qualified social workers.
              </p>
            </div>

            <p className="cha-primary-content__intro" style={{ marginBottom: 32 }}>
              We offer both Cambridge and ZIMSEC Curriculum, providing a comprehensive education to prepare students for future success.
            </p>

            {/* Curriculum */}
            <div className="cha-primary-box cha-primary-box--blue">
              <h2>Curriculum</h2>
              <div className="cha-primary-grid-2">
                <div>
                  <h3>ZIMSEC Curriculum</h3>
                  <ul className="cha-primary-list">
                    <li>Mathematics</li>
                    <li>English Language</li>
                    <li>Shona</li>
                    <li>Agriculture</li>
                    <li>Combined Science</li>
                    <li>Heritage Studies</li>
                    <li>Geography</li>
                    <li>History</li>
                    <li>Computer Science</li>
                    <li>Business Enterprising Skills</li>
                    <li>Principles of Accounting</li>
                    <li>Textile Technology and Design</li>
                    <li>Building Technology and Design</li>
                    <li>Physics</li>
                    <li>Chemistry</li>
                    <li>Biology</li>
                    <li>Commerce</li>
                  </ul>
                </div>
                <div>
                  <h3>Cambridge Curriculum</h3>
                  <ul className="cha-primary-list">
                    <li>Mathematics</li>
                    <li>Computer Science</li>
                    <li>English Language</li>
                    <li>Biology</li>
                    <li>Chemistry</li>
                    <li>Agriculture</li>
                    <li>Physics</li>
                    <li>Geography</li>
                    <li>Travel and Tourism</li>
                    <li>History</li>
                    <li>Combined Science</li>
                    <li>Principles of Accounting</li>
                    <li>Business Studies</li>
                    <li>Environmental Management</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Extra Curricular */}
            <div className="cha-primary-box cha-primary-box--gray">
              <h2>Extra Curricular Activities</h2>
              <div className="cha-primary-grid-2">
                <div>
                  <h3>Physical Activities</h3>
                  <ul className="cha-primary-list cha-primary-list--cols">
                    <li>Soccer</li>
                    <li>Netball</li>
                    <li>Basketball</li>
                    <li>Volleyball</li>
                    <li>Tennis</li>
                    <li>Athletics</li>
                  </ul>
                </div>
                <div>
                  <h3>Clubs and Arts</h3>
                  <ul className="cha-primary-list cha-primary-list--cols">
                    <li>Public Speaking</li>
                    <li>Chess</li>
                    <li>Debate</li>
                    <li>Drama</li>
                    <li>Dance</li>
                    <li>Quiz</li>
                    <li>Spelling Bee</li>
                    <li>Music</li>
                    <li>Choir</li>
                    <li>Journalism</li>
                    <li>Cosmetology</li>
                    <li>Friends of the Environment</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Highlights */}
            <div className="cha-primary-why">
              <h2>Program Highlights</h2>
              <p>Our secondary school builds upon the strong foundation established in primary education, challenging students with rigorous academics while providing opportunities for self-discovery and personal growth.</p>
              <p><strong>With our full boarding facilities, students benefit from an immersive educational environment that develops independence, responsibility, and lifelong friendships.</strong></p>
              <p>With class sizes of 20-25 students, we prepare students for university and life beyond with a comprehensive approach to education that develops not only academic knowledge but also character, leadership, and life skills.</p>
              <p><strong>Our Pentecostal Christian environment fosters spiritual growth alongside academic excellence, with dedicated discipleship programs led by full-time pastors.</strong></p>
              <p><strong>Students benefit from our on-campus clinic for immediate health needs, and our comprehensive psychosocial support and child safeguarding measures ensure the wellbeing of each student.</strong></p>
            </div>

            {/* CTA */}
            <div className="cha-primary-cta">
              <a href={enrollmentFormUrl} target="_blank" rel="noopener noreferrer" className="cha-primary-btn">
                Apply for Secondary School
              </a>
              <p>Ages 12-19, Form 1 to Form 4 (Grade 8 to Grade 11)</p>
            </div>

          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default SecondarySchool;

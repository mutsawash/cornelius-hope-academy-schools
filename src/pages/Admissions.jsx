import { useEffect } from 'react';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import { 
  ClipboardList, 
  DollarSign, 
  GraduationCap, 
  UserPlus, 
  Search, 
  FileCheck, 
  Mail,
  ChevronRight,
  ShieldCheck,
  Award,
  Zap
} from 'lucide-react';
import { NavLink } from 'react-router-dom';
import './styles/Admissions.css';

const AdmissionsPage = () => {
  const primaryEnrollmentFormUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSfJyrWVQLy7WH6W1xLM0A9QKMo4Ica6_muJh3XzCnJfDFaG7A/viewform';
  const secondaryEnrollmentFormUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSfme7aJt_SOUrrCHk5lfP2nHGLX7j7G2N3hoQrXSC6ihjIlDA/viewform?usp=header';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const steps = [
    { title: 'Inquire', icon: <Search size={28} />, desc: 'Contact our admissions office or visit the campus for a tour.' },
    { title: 'Apply', icon: <UserPlus size={28} />, desc: 'Complete the online application form for your child.' },
    { title: 'Assess', icon: <ClipboardList size={28} />, desc: 'Students undergo a friendly assessment and interview.' },
    { title: 'Enroll', icon: <FileCheck size={28} />, desc: 'Once accepted, finalize the registration and join the family!' },
  ];

  return (
    <div className="cha-page">
      <Header />
      <main>
        {/* Admissions Hero */}
        <section className="cha-hero-base">
          <img src="/Images/school view (6).jpeg" alt="Admissions" className="cha-hero-base__bg" />
          <div className="cha-hero-base__overlay" />
          <div className="container">
            <div className="cha-hero-base__content animate-fade-in-up">
              <div className="cha-breadcrumbs">
                <NavLink to="/">Home</NavLink>
                <ChevronRight size={14} />
                <span>Admissions</span>
              </div>
              <h1 className="cha-hero-base__title">Secure Your <span>Future</span></h1>
              <p className="cha-hero-base__desc">
                Join a legacy of excellence. Our admissions process is designed to find students 
                ready to lead and excel.
              </p>
            </div>
          </div>
        </section>

        <section className="cha-admissions">
          <div className="container">
            
            {/* Steps Section */}
            <div className="cha-admissions__section-header text-center" style={{ marginBottom: 60 }}>
              <span className="section-label">THE PROCESS</span>
              <h2 className="section-title">Road to <span>Enrollment</span></h2>
            </div>
            
            <div className="cha-admissions__journey-grid">
              {steps.map((step, i) => (
                <div key={i} className="cha-admissions__step-card">
                  <div className="cha-admissions__step-num">{i + 1}</div>
                  <div className="cha-admissions__step-icon">{step.icon}</div>
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
              ))}
            </div>

            {/* Programs Section */}
            <div className="cha-admissions__programs">
              <div className="cha-admissions__program-card">
                <img src="/Images/primary students in class (2).jpeg" alt="Primary School" className="cha-admissions__program-img" />
                <div className="cha-admissions__program-body">
                  <span className="section-label">ECD - GRADE 7</span>
                  <h3>Primary School</h3>
                  <p className="cha-admissions__program-desc">A nurturing environment focused on core literacy, character, and foundational skills.</p>
                  <div className="cha-admissions__program-features">
                    <div className="cha-admissions__program-feature"><ShieldCheck size={18} /> Safe & Secure Environment</div>
                    <div className="cha-admissions__program-feature"><Award size={18} /> Holistic Development</div>
                    <div className="cha-admissions__program-feature"><Zap size={18} /> Interactive Learning</div>
                  </div>
                  <a href={primaryEnrollmentFormUrl} target="_blank" rel="noopener noreferrer" className="cha-btn-primary text-center">Apply for Primary</a>
                </div>
              </div>

              <div className="cha-admissions__program-card">
                <img src="/Images/secondary prefects group photo.jpeg" alt="Secondary School" className="cha-admissions__program-img" />
                <div className="cha-admissions__program-body">
                  <span className="section-label">FORMS 1 - 4</span>
                  <h3>Secondary School</h3>
                  <p className="cha-admissions__program-desc">Academic rigor paired with spiritual growth and diverse co-curricular activities.</p>
                  <div className="cha-admissions__program-features">
                    <div className="cha-admissions__program-feature"><ShieldCheck size={18} /> Premium Boarding Facilities</div>
                    <div className="cha-admissions__program-feature"><Award size={18} /> Cambridge & ZIMSEC Path</div>
                    <div className="cha-admissions__program-feature"><Zap size={18} /> Leadership Training</div>
                  </div>
                  <a href={secondaryEnrollmentFormUrl} target="_blank" rel="noopener noreferrer" className="cha-btn-primary text-center">Apply for Secondary</a>
                </div>
              </div>
            </div>

            {/* Boarding Highlight */}
            <div className="cha-admissions__boarding">
              <div className="cha-admissions__boarding-info">
                <span className="section-label" style={{ color: '#fff', opacity: 0.8 }}>PREMIUM LIVING</span>
                <h3>Secure <span>Boarding</span></h3>
                <p>
                  Our secondary school boarding provides a "home away from home" experience. 
                  Focused on safety, spiritual discipline, and academic focus, we ensure 
                  every student feels supported and inspired.
                </p>
                <NavLink to="/contact" className="cha-btn-outline">Inquire About Boarding</NavLink>
              </div>
              <img src="/Images/school view 2.jpeg" alt="Boarding Facilities" className="cha-admissions__boarding-img" />
            </div>

            {/* Details Grid */}
            <div className="cha-admissions__details">
              <div className="cha-admissions__detail-card">
                <h3><ClipboardList size={24} /> Enrollment Requirements</h3>
                <div className="cha-admissions__requirements-list">
                  {[
                    'Certified Birth Certificate',
                    'Latest School Report',
                    'Transfer Letter',
                    'Passport Photos (2)',
                    'Medical Information Form',
                    'Guardian ID Copies',
                  ].map(req => (
                    <div key={req} className="cha-admissions__requirement-item">
                      <ChevronRight size={16} /> {req}
                    </div>
                  ))}
                </div>
              </div>

              <div className="cha-admissions__detail-card">
                <h3><DollarSign size={24} /> Tuition & Fees</h3>
                <p style={{ color: 'var(--color-text-muted)', marginBottom: 20 }}>
                  Our fees are competitive and reflect our commitment to high-quality education and facilities.
                </p>
                <div className="cha-admissions__fee-cta">
                  <p style={{ fontWeight: 700, marginBottom: 16 }}>Request Latest Fee Schedule:</p>
                  <a href="mailto:info@corneliushope.ac.zw" className="cha-admissions__email-link">
                    <Mail size={18} /> info@corneliushope.ac.zw
                  </a>
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

export default AdmissionsPage;

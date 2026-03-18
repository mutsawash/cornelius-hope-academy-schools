import { useEffect } from 'react';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import './styles/Alumni.css';

const AlumniPage = () => {
  const alumniRegistrationFormUrl = 'https://forms.gle/JwWeSMcVh1MkVkK99';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="cha-page">
      <Header />
      <main>
        {/* Banner */}
        <div className="cha-alumni-banner">
          <div className="cha-alumni-banner__bg">
            <img src="/Images/school view (3).jpeg" alt="Alumni Background" loading="lazy" />
          </div>
          <div className="container cha-alumni-banner__content">
            <h1>Alumni Registration</h1>
            <p>Stay connected with Cornelius Hope Academy</p>
          </div>
        </div>

        {/* Content */}
        <section className="cha-alumni-content">
          <div className="container cha-alumni-content__inner">
            <div className="cha-alumni-intro">
              <h2>Join Our Alumni Network</h2>
              <p>As a graduate of Cornelius Hope Academy, you're part of a special community. Joining our alumni network allows you to reconnect with classmates, mentor current students, attend exclusive events, and stay updated on school developments.</p>
              <p>Complete the registration form below to join our alumni database and receive updates about reunions, networking opportunities, and ways to give back.</p>
            </div>

            <div className="cha-alumni-benefits">
              <h3>Alumni Benefits</h3>
              <ul className="cha-alumni-benefits__list">
                <li>✓ Invitations to alumni reunions and events</li>
                <li>✓ Networking opportunities with fellow graduates</li>
                <li>✓ Mentorship opportunities with current students</li>
                <li>✓ Access to school resources and facilities</li>
                <li>✓ Regular updates about school achievements and news</li>
              </ul>
              <a href={alumniRegistrationFormUrl} target="_blank" rel="noopener noreferrer" className="cha-alumni-btn">
                Register as an Alumni
              </a>
            </div>

            <div className="cha-alumni-footer">
              <h3>Proud to be a Cornelius Hope Academy Graduate?</h3>
              <p>Share your success stories and memories with us! We'd love to feature alumni achievements in our school communications.</p>
              <p className="cha-alumni-footer__note">
                For any alumni-related inquiries, please contact us at:
                <a href="mailto:chassecondary@gmail.com"> chassecondary@gmail.com</a>
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AlumniPage;

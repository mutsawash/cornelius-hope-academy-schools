import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import HomeImageCarousel from '../components/HomeImageCarousel.jsx';
import './styles/PrimarySchool.css';

const PrimarySchool = () => {
  const enrollmentFormUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSfJyrWVQLy7WH6W1xLM0A9QKMo4Ica6_muJh3XzCnJfDFaG7A/viewform';

  return (
    <div className="cha-page">
      <Header />
      <main>
        {/* Hero Section */}
        <div className="cha-primary-hero">
          <div className="cha-primary-hero__carousel">
            <HomeImageCarousel sectionId="primary-banner" />
          </div>
          <div className="container cha-primary-hero__content">
            <h1>Primary School</h1>
          </div>
        </div>

        <section className="cha-primary-content">
          <div className="container cha-primary-content__inner">
            <div className="cha-primary-content__img-wrap">
              <img
                src="/Images/primary students in class (3).jpeg"
                alt="Primary School Design"
                className="cha-primary-content__img"
              />
            </div>

            <p className="cha-primary-content__intro">
              Our curriculum is designed to build a strong foundation for lifelong learning while
              nurturing each student's unique talents and abilities in a supportive Pentecostal Christian environment.
            </p>

            {/* Curriculum */}
            <div className="cha-primary-box cha-primary-box--blue">
              <h2>Curriculum</h2>
              <div className="cha-primary-grid-2">
                <div>
                  <h3>Infant Level (ECD to Grade 2)</h3>
                  <ul className="cha-primary-list">
                    <li>Mathematics and Science</li>
                    <li>English</li>
                    <li>Heritage Studies</li>
                    <li>Chishona</li>
                    <li>Physical Education</li>
                    <li>Mass Displays</li>
                    <li>ICT</li>
                    <li>Visual and Performing Arts</li>
                    <li>Guidance and Counselling</li>
                    <li>Christian Education</li>
                  </ul>
                </div>
                <div>
                  <h3>Junior Level (Grade 3 to Grade 7)</h3>
                  <ul className="cha-primary-list">
                    <li>English</li>
                    <li>Chishona</li>
                    <li>Mathematics</li>
                    <li>Agriculture</li>
                    <li>Science and Technology</li>
                    <li>ICT</li>
                    <li>Heritage - Social Studies</li>
                    <li>Family, Religion and Moral Education</li>
                    <li>Visual and Performing Arts</li>
                    <li>Physical Education</li>
                    <li>Guidance and Counseling</li>
                    <li>Christian Education</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Sports & Activities */}
            <div className="cha-primary-box cha-primary-box--gray">
              <h2>Sports & Activities</h2>
              <div className="cha-primary-grid-2">
                <div>
                  <h3>Sports</h3>
                  <ul className="cha-primary-list cha-primary-list--cols">
                    <li>Cricket</li>
                    <li>Hockey</li>
                    <li>Basketball</li>
                    <li>Swimming</li>
                    <li>Tennis</li>
                    <li>Volleyball</li>
                    <li>Soccer</li>
                    <li>Netball</li>
                    <li>Handball</li>
                    <li>Athletics</li>
                    <li>Chess</li>
                  </ul>
                </div>
                <div>
                  <h3>Arts and Clubs</h3>
                  <ul className="cha-primary-list cha-primary-list--cols">
                    <li>Debate</li>
                    <li>Drama</li>
                    <li>Dance</li>
                    <li>Quiz</li>
                    <li>Spelling Bee</li>
                    <li>Music</li>
                    <li>Choir</li>
                    <li>Public Speaking</li>
                    <li>Friends of the Environment</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Why Choose */}
            <div className="cha-primary-why">
              <h2>Why Choose Our Primary School</h2>
              <p>Our primary school provides a nurturing environment where children develop a love for learning while building a strong academic foundation. Our experienced teachers are dedicated to helping each student reach their full potential.</p>
              <p>With class sizes of 20-25 students and a focus on holistic development, we ensure that every child receives the attention and support they need to thrive academically, socially, emotionally, and spiritually.</p>
              <p>Our on-campus clinic provides immediate health care needs, and our dedicated team offers comprehensive psychosocial support and child safeguarding measures to ensure the wellbeing of each student.</p>
              <p>As a Pentecostal Christian school, we integrate faith-based values into our curriculum, fostering spiritual growth alongside academic excellence.</p>
            </div>

            {/* CTA */}
            <div className="cha-primary-cta">
              <a href={enrollmentFormUrl} target="_blank" rel="noopener noreferrer" className="cha-primary-btn">
                Apply for Primary School
              </a>
              <p>Ages 4-13 (Preschool to Grade 7)</p>
            </div>

          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PrimarySchool;

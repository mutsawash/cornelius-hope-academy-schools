import { useEffect } from 'react';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import GallerySection from '../components/GallerySection.jsx';
import { NavLink } from 'react-router-dom';
import { ChevronRight, Camera } from 'lucide-react';
import './styles/Gallery.css';

const GalleryPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const primaryImages = [
    { url: '/Images/Primary School Prefects 1.jpeg', title: 'Primary School Prefects' },
    { url: '/Images/primary prefects investiture.jpeg', title: 'Prefects Investiture' },
    { url: '/Images/primary students in class.jpeg', title: 'Learning in Progress' },
    { url: '/Images/primary students in class (2).jpeg', title: 'Classroom Interaction' },
    { url: '/Images/primary students in class (3).jpeg', title: 'Engaged Students' },
    { url: '/Images/public speaking primary students.jpeg', title: 'Public Speaking' },
    { url: '/Images/WhatsApp Image 2026-03-12 at 5.24.18 PM.jpeg', title: 'School Activities' },
    { url: '/Images/WhatsApp Image 2026-03-12 at 5.24.26 PM.jpeg', title: 'Playtime' },
  ];

  const secondaryImages = [
    { url: '/Images/secondary prefects group photo.jpeg', title: 'Secondary Prefects' },
    { url: '/Images/secondary school public speaking.jpeg', title: 'Public Speaking' },
    { url: '/Images/secondary school sports day.jpeg', title: 'Sports Day' },
    { url: '/Images/soccer team.jpeg', title: 'First XI Soccer' },
    { url: '/Images/secondary sports day 1.jpeg', title: 'Athletics' },
    { url: '/Images/secondary boys prefects group photo.jpeg', title: 'Boys Prefects' },
    { url: '/Images/secondary prefects training.jpeg', title: 'Leadership Training' },
    { url: '/Images/WhatsApp Image 2026-03-12 at 5.26.41 PM.jpeg', title: 'Student Life' },
  ];

  const campusImages = [
    { url: '/Images/aerial view 1.jpeg', title: 'School Aerial View' },
    { url: '/Images/school view 4.jpeg', title: 'School Main View' },
    { url: '/Images/school view (6).jpeg', title: 'Campus Entrance' },
    { url: '/Images/boarding house.jpeg', title: 'Boarding Facilities' },
  ];

  return (
    <div className="cha-page">
      <Header />
      <main>
        {/* Gallery Hero */}
        <section className="cha-hero-base">
          <img src="/Images/aerial view 1.jpeg" alt="Gallery" className="cha-hero-base__bg" />
          <div className="cha-hero-base__overlay" />
          <div className="container">
            <div className="cha-hero-base__content animate-fade-in-up">
              <div className="cha-breadcrumbs">
                <NavLink to="/">Home</NavLink>
                <ChevronRight size={14} />
                <span>Gallery</span>
              </div>
              <h1 className="cha-hero-base__title">School <span>Gallery</span></h1>
              <p className="cha-hero-base__desc">
                A visual journey through the life, activities, and achievements of our students 
                at Cornelius Hope Academy.
              </p>
            </div>
          </div>
        </section>

        <div className="cha-gallery-page">
          <div className="container">
            <div className="cha-gallery-page__grid">
              
              <div className="cha-gallery-page__section-wrap">
                <GallerySection 
                  title="Primary School" 
                  images={primaryImages} 
                />
              </div>

              <div className="cha-gallery-page__section-wrap">
                <GallerySection 
                  title="Secondary School" 
                  images={secondaryImages} 
                />
              </div>

              <div className="cha-gallery-page__section-wrap">
                <GallerySection 
                  title="Campus & Facilities" 
                  images={campusImages} 
                />
              </div>

            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default GalleryPage;

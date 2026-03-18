import { useState, useEffect } from 'react';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import { ChevronDown, HelpCircle, ChevronRight, MessageCircle } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import './styles/FAQ.css';

const FAQPage = () => {
  const [activeId, setActiveId] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const faqs = [
    {
      question: "What curriculum do you follow?",
      answer: "We follow both the ZIMSEC and Cambridge curricula, providing our students with a globally recognized educational foundation that prepares them for both local and international opportunities."
    },
    {
      question: "Do you offer boarding facilities?",
      answer: "Yes, we offer premium, secure boarding facilities for our secondary school students (Forms 1 to 4). Our boarding environment focuses on academic discipline, spiritual growth, and safety."
    },
    {
      question: "What is the average class size?",
      answer: "We maintain small class sizes of 20-25 students. This ensures that every child receives personalized attention and that teachers can cater to individual learning needs."
    },
    {
      question: "Are there extracurricular activities?",
      answer: "Absolutely! We offer a wide range of activities including soccer, athletics, public speaking, choir, and various leadership clubs to ensure holistic development."
    },
    {
      question: "How do I apply for enrollment?",
      answer: "The process is simple: inquiry, application (online or in-person), assessment, and enrollment. Visit our Admissions page to find the specific links for Primary and Secondary school applications."
    },
    {
      question: "Do you provide school transportation?",
      answer: "Yes, we provide safe and reliable bus services for students within the Harare area. Please contact the administration office for specific routes and pricing."
    },
    {
      question: "Where exactly is the school located?",
      answer: "We are located in the Goodhope suburb of Westgate, Harare, along Nemakonde Way (formerly Lomagundi Road). It is a quiet and conducive environment perfect for learning."
    }
  ];

  const toggleAccordion = (id) => {
    setActiveId(prev => (prev === id ? null : id));
  };

  return (
    <div className="cha-page">
      <Header />
      <main>
        {/* FAQ Hero */}
        <section className="cha-hero-base">
          <img src="/Images/school view (4).jpeg" alt="FAQ" className="cha-hero-base__bg" />
          <div className="cha-hero-base__overlay" />
          <div className="container">
            <div className="cha-hero-base__content animate-fade-in-up">
              <div className="cha-breadcrumbs">
                <NavLink to="/">Home</NavLink>
                <ChevronRight size={14} />
                <span>FAQ</span>
              </div>
              <h1 className="cha-hero-base__title">Common <span>Questions</span></h1>
              <p className="cha-hero-base__desc">
                Everything you need to know about Cornelius Hope Academy. If you can't find 
                an answer here, feel free to reach out to us.
              </p>
            </div>
          </div>
        </section>

        <section className="cha-faq-page">
          <div className="container">
            <div className="cha-faq__container">
              
              <div className="cha-faq__intro">
                <HelpCircle size={48} className="cha-faq__hero-icon" style={{ marginBottom: 20, color: 'var(--color-primary)' }} />
                <h2>How can we <span>help?</span></h2>
                <p>Browse through our most frequently asked questions</p>
              </div>

              <div className="cha-faq__accordion">
                {faqs.map((faq, idx) => (
                  <div 
                    key={idx} 
                    className={`cha-faq__item ${activeId === idx ? 'active' : ''}`}
                  >
                    <button 
                      className="cha-faq__question"
                      onClick={() => toggleAccordion(idx)}
                    >
                      {faq.question}
                      <ChevronDown size={20} className="cha-faq__icon" />
                    </button>
                    <div className="cha-faq__answer">
                      <div className="cha-faq__answer-inner">
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="cha-faq__cta">
                <h3>Still have questions?</h3>
                <p>If you didn't find the answer you were looking for, our friendly team is here to help.</p>
                <NavLink to="/contact" className="cha-btn-accent">
                  <MessageCircle size={18} style={{ marginRight: 8, verticalAlign: 'middle' }} /> Contact Support
                </NavLink>
              </div>

            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default FAQPage;

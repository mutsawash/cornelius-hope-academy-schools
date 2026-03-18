import { BookOpen, Users, Award, Shield, GraduationCap, Lightbulb } from 'lucide-react';
import './styles/Features.css';

const features = [
  {
    icon: BookOpen,
    title: 'Academic Excellence',
    desc: 'Rigorous curriculum designed to challenge and inspire students to reach their highest potential.',
    accent: 'primary',
  },
  {
    icon: Users,
    title: 'Small Class Sizes',
    desc: 'Personalized attention with a low student-to-teacher ratio ensuring every student\'s individual needs are met.',
    accent: 'accent',
  },
  {
    icon: Award,
    title: 'Character Development',
    desc: 'Emphasis on integrity, responsibility, and ethical decision-making alongside academic growth.',
    accent: 'primary',
  },
  {
    icon: Lightbulb,
    title: 'Experiential Learning',
    desc: 'Hands-on activities and real-world applications that make learning engaging and personally meaningful.',
    accent: 'accent',
  },
  {
    icon: GraduationCap,
    title: 'Holistic Growth',
    desc: 'A wide range of arts, athletics, and clubs to develop well-rounded students with diverse interests.',
    accent: 'primary',
  },
  {
    icon: Shield,
    title: 'Safe Environment',
    desc: 'A secure and supportive campus where students can learn and grow with confidence.',
    accent: 'accent',
  },
];

const Features = () => (
  <section className="cha-features">
    <div className="container">
      <div className="cha-features__header">
        <span className="section-label">Advantages</span>
        <h2 className="section-title">Why Choose Cornelius Hope?</h2>
        <p className="section-subtitle">
          Our comprehensive approach focuses on developing the whole student — intellectually, physically, and ethically.
        </p>
      </div>
      <div className="cha-features__grid">
        {features.map((f, i) => {
          const Icon = f.icon;
          return (
            <div key={i} className={`cha-features__card cha-features__card--${f.accent}`}>
              <div className={`cha-features__icon-wrap cha-features__icon-wrap--${f.accent}`}>
                <Icon size={28} />
              </div>
              <h3 className="cha-features__card-title">{f.title}</h3>
              <p className="cha-features__card-desc">{f.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export default Features;

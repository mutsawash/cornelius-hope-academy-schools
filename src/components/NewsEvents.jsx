import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Calendar } from 'lucide-react';
import './styles/NewsEvents.css';

const NewsEvents = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const load = () => {
      const stored = localStorage.getItem('schoolEvents');
      if (stored) {
        setEvents(JSON.parse(stored));
      } else {
        const defaults = [
          { id: '1', title: 'Form 1 Opening Day', date: 'April 2026', description: 'Join us for the opening day for our new Form 1 students.' },
        ];
        setEvents(defaults);
        localStorage.setItem('schoolEvents', JSON.stringify(defaults));
      }
    };
    load();
    window.addEventListener('eventsUpdated', load);
    return () => window.removeEventListener('eventsUpdated', load);
  }, []);

  return (
    <section className="cha-events">
      <div className="container">
        <div className="cha-events__header">
          <span className="section-label">What's On</span>
          <h2 className="section-title">Upcoming Events</h2>
          <p className="section-subtitle">Join us for these upcoming events and become part of our vibrant community.</p>
        </div>

        {events.length > 0 ? (
          <div className="cha-events__grid">
            {events.map(event => (
              <div key={event.id} className="cha-events__card">
                <div className="cha-events__card-date">
                  <Calendar size={15} /> {event.date}
                </div>
                <h3 className="cha-events__card-title">{event.title}</h3>
                <p className="cha-events__card-desc">{event.description}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="cha-events__empty">No upcoming events. Check back soon!</p>
        )}

        <div className="cha-events__cta">
          <h3>Ready to Join Our Community?</h3>
          <p>Take the first step towards providing your child with an exceptional educational experience.</p>
          <NavLink to="/admissions" className="cha-events__cta-btn">
            Learn About Admissions
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default NewsEvents;

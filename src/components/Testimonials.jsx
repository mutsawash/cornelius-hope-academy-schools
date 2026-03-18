import { useState, useEffect } from 'react';
import { Quote, ThumbsUp, MessageSquarePlus, X } from 'lucide-react';
import './styles/Testimonials.css';

const sessionId = Date.now().toString();

const defaultTestimonials = [
  {
    id: '1',
    quote: 'Cornelius Hope Academy has been transformative for my family. The teachers genuinely care about each student\'s progress and well-being.',
    author: 'Mr. Matsomai',
    role: 'Parent',
    likes: 12,
    isDefault: true,
  },
  {
    id: '2',
    quote: 'The challenging curriculum and supportive environment prepared students exceptionally well for higher education.',
    author: 'Mrs. Mukwesha',
    role: 'Community Leader',
    likes: 8,
    isDefault: true,
  },
  {
    id: '3',
    quote: 'As an educator, I\'ve seen many schools, but Cornelius Hope stands out with its commitment to excellence and individual student growth.',
    author: 'Professor Gandari',
    role: 'Education Consultant',
    likes: 15,
    isDefault: true,
  },
];

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [userComments, setUserComments] = useState([]);
  const [liked, setLiked] = useState({});
  const [formVisible, setFormVisible] = useState(false);
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [comment, setComment] = useState('');

  useEffect(() => {
    const stored = localStorage.getItem('userComments');
    const parsedComments = stored ? JSON.parse(stored) : [];
    setUserComments(parsedComments);

    const storedLikes = localStorage.getItem('defaultTestimonialLikes');
    const parsedLikes = storedLikes ? JSON.parse(storedLikes) : {};

    const merged = defaultTestimonials.map(t => ({
      ...t,
      likes: parsedLikes[t.id] || t.likes,
    }));
    setTestimonials([...merged, ...parsedComments]);

    const storedLiked = localStorage.getItem(`likedTestimonials_${sessionId}`);
    if (storedLiked) setLiked(JSON.parse(storedLiked));
  }, []);

  const handleLike = (id) => {
    if (liked[id]) return;
    const isDefault = defaultTestimonials.some(t => t.id === id);
    if (isDefault) {
      const storedLikes = localStorage.getItem('defaultTestimonialLikes');
      const defLikes = storedLikes ? JSON.parse(storedLikes) : {};
      const current = testimonials.find(t => t.id === id);
      defLikes[id] = (defLikes[id] || current.likes) + 1;
      localStorage.setItem('defaultTestimonialLikes', JSON.stringify(defLikes));
      setTestimonials(prev => prev.map(t => t.id === id ? { ...t, likes: defLikes[id] } : t));
    } else {
      const updated = userComments.map(c => c.id === id ? { ...c, likes: c.likes + 1 } : c);
      setUserComments(updated);
      localStorage.setItem('userComments', JSON.stringify(updated));
      setTestimonials(prev => prev.map(t => t.id === id ? { ...t, likes: t.likes + 1 } : t));
    }
    const newLiked = { ...liked, [id]: true };
    setLiked(newLiked);
    localStorage.setItem(`likedTestimonials_${sessionId}`, JSON.stringify(newLiked));
  };

  const handleSubmit = () => {
    if (!name || !role || !comment) return;
    const newComment = { id: Date.now().toString(), quote: comment, author: name, role, likes: 0, timestamp: Date.now() };
    const updated = [...userComments, newComment];
    setUserComments(updated);
    localStorage.setItem('userComments', JSON.stringify(updated));
    setTestimonials(prev => [...prev, newComment]);
    setName(''); setRole(''); setComment('');
    setFormVisible(false);
  };

  return (
    <section className="cha-testimonials">
      <div className="container">
        <div className="cha-testimonials__header">
          <span className="section-label">Testimonials</span>
          <h2 className="section-title">What Our Community <span>Says</span></h2>
          <p className="section-subtitle">
            Hear from the students, parents, and community leaders who have experienced excellence at Cornelius Hope Academy.
          </p>
          <button className="cha-testimonials__cta" onClick={() => setFormVisible(true)}>
            <MessageSquarePlus size={18} /> Share Your Experience
          </button>
        </div>

        {formVisible && (
          <div className="cha-testimonials__modal-overlay" onClick={() => setFormVisible(false)}>
            <div className="cha-testimonials__modal" onClick={e => e.stopPropagation()}>
              <button className="cha-testimonials__modal-close" onClick={() => setFormVisible(false)}>
                <X size={20} />
              </button>
              <h3 className="cha-testimonials__modal-title">"Share Your Story"</h3>
              <div className="cha-testimonials__form">
                <div className="cha-testimonials__form-group">
                  <label>Your Name</label>
                  <input value={name} onChange={e => setName(e.target.value)} placeholder="e.g., John Doe" />
                </div>
                <div className="cha-testimonials__form-group">
                  <label>Your Role</label>
                  <input value={role} onChange={e => setRole(e.target.value)} placeholder="e.g., Parent, Alumnus" />
                </div>
                <div className="cha-testimonials__form-group">
                  <label>Your Message</label>
                  <textarea value={comment} onChange={e => setComment(e.target.value)} rows={5} placeholder="What makes Cornelius Hope special?" />
                </div>
                <button className="cha-testimonials__form-submit" onClick={handleSubmit}>
                  Submit Testimonial
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="cha-testimonials__grid">
          {testimonials.map(t => (
            <div key={t.id} className="cha-testimonials__card">
              <div className="cha-testimonials__card-top">
                <div className="cha-testimonials__quote-icon"><Quote size={24} /></div>
                <button
                  className={`cha-testimonials__like${liked[t.id] ? ' cha-testimonials__like--active' : ''}`}
                  onClick={() => handleLike(t.id)}
                >
                  <ThumbsUp size={14} fill={liked[t.id] ? 'currentColor' : 'none'} />
                  <span>{t.likes}</span>
                </button>
              </div>
              <p className="cha-testimonials__quote">"{t.quote}"</p>
              <div className="cha-testimonials__author">
                <div className="cha-testimonials__avatar">{t.author.charAt(0)}</div>
                <div>
                  <p className="cha-testimonials__name">{t.author}</p>
                  <p className="cha-testimonials__role">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

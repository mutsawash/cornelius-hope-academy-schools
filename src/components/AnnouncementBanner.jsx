import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const AnnouncementBanner = () => {
  const [announcements, setAnnouncements] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem('schoolAnnouncements');
    if (stored) {
      const parsed = JSON.parse(stored);
      const active = parsed.filter(a => a.active);
      setAnnouncements(active);
    }
  }, []);

  useEffect(() => {
    if (announcements.length > 1) {
      const interval = setInterval(() => {
        setCurrentIndex(prev => (prev === announcements.length - 1 ? 0 : prev + 1));
      }, 8000);
      return () => clearInterval(interval);
    }
  }, [announcements]);

  if (!visible || announcements.length === 0) return null;

  const current = announcements[currentIndex];

  return (
    <div style={{
      position: 'fixed', bottom: 24, right: 24,
      zIndex: 1000, maxWidth: 320,
      background: '#f0c400', color: '#0b1627',
      borderRadius: 8, padding: '14px 16px',
      boxShadow: '0 8px 32px rgba(0,0,0,0.18)',
      border: '1px solid rgba(11,29,39,0.12)',
      animation: 'fadeInUp 0.4s ease'
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 8 }}>
        <div>
          <p style={{ fontWeight: 800, fontSize: '0.88rem', marginBottom: 4 }}>{current.title}</p>
          <p style={{ fontSize: '0.78rem', lineHeight: 1.5 }}>{current.content}</p>
        </div>
        <button
          onClick={() => setVisible(false)}
          style={{ flex: '0 0 auto', background: 'none', border: 'none', cursor: 'pointer', marginTop: -2 }}
          aria-label="Close"
        >
          <X size={16} />
        </button>
      </div>
      {announcements.length > 1 && (
        <div style={{ display: 'flex', justifyContent: 'center', gap: 5, marginTop: 8 }}>
          {announcements.map((_, i) => (
            <span key={i} style={{
              width: 6, height: 6, borderRadius: '50%',
              background: i === currentIndex ? '#0b1627' : 'rgba(11,29,39,0.25)',
              display: 'inline-block'
            }} />
          ))}
        </div>
      )}
    </div>
  );
};

export default AnnouncementBanner;

import { useState, useEffect, useRef } from 'react';
import './styles/HomeImageCarousel.css';

const images = [
  '/Images/aerial view 1.jpeg',
  '/Images/school view 4.jpeg',
  '/Images/primary students in class (2).jpeg',
  '/Images/secondary prefects group photo.jpeg',
  '/Images/soccer team.jpeg',
];

const HomeImageCarousel = ({ height = '100%' }) => {
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef(null);

  const startInterval = () => {
    intervalRef.current = setInterval(() => {
      setCurrent(prev => (prev + 1) % images.length);
    }, 8000);
  };

  useEffect(() => {
    startInterval();
    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <div className="cha-carousel" style={{ height }}>
      {images.map((src, idx) => (
        <div
          key={src}
          className={`cha-carousel__slide${idx === current ? ' cha-carousel__slide--active' : ''}`}
        >
          <img src={src} alt="School" className="cha-carousel__img" />
        </div>
      ))}
      <div className="cha-carousel__dots">
        {images.map((_, idx) => (
          <button
            key={idx}
            className={`cha-carousel__dot${idx === current ? ' cha-carousel__dot--active' : ''}`}
            onClick={() => {
              setCurrent(idx);
              clearInterval(intervalRef.current);
              startInterval();
            }}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HomeImageCarousel;

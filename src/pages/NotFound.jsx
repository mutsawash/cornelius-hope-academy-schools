import { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      '404 Error: User attempted to access non-existent route:',
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#f9fafb',
      fontFamily: 'Inter, sans-serif'
    }}>
      <div style={{ textAlign: 'center' }}>
        <h1 style={{ fontSize: '4rem', fontWeight: 800, color: '#0b3d2e', marginBottom: '16px' }}>404</h1>
        <p style={{ fontSize: '1.25rem', color: '#4b5563', marginBottom: '24px' }}>Oops! Page not found</p>
        <Link 
          to="/" 
          style={{ 
            display: 'inline-block',
            padding: '12px 24px',
            backgroundColor: '#0b3d2e',
            color: '#fff',
            textDecoration: 'none',
            borderRadius: '6px',
            fontWeight: 600,
            transition: 'background-color 0.2s'
          }}
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#082a20'}
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#0b3d2e'}
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;

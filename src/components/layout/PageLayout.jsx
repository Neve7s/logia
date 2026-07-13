import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const PageLayout = ({ title, tagline, children, showBackButton = true, fullWidth = false }) => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <main>
        <div 
          className="container-x py-large" 
          style={{ 
            maxWidth: fullWidth ? '1400px' : '1000px', 
            position: 'relative', 
            zIndex: '10', 
            paddingTop: '8rem' 
          }}
        >
          {showBackButton && (
            <button 
              onClick={() => navigate('/')}
              className="back-btn"
            >
              <i className="fas fa-arrow-left"></i> Volver al inicio
            </button>
          )}
          {tagline && <span className="tagline">{tagline}</span>}
          {title && <h1 className="section-title">{title}</h1>}
          {children}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default PageLayout;

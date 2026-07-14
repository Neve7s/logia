import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const APP_NAV = [
  { path: '/app/cotizador', label: 'Cotizador Pro', icon: 'fa-calculator' },
  { path: '/app/shipments', label: 'Shipments', icon: 'fa-box-open' },
  { path: '/app/facturacion', label: 'Facturación', icon: 'fa-file-invoice' },
  { path: '/app/maestros', label: 'Masters', icon: 'fa-database' },
  { path: '/app/reclutamiento', label: 'Reclutamiento', icon: 'fa-user-tie' },
  { path: '/app/comunicaciones', label: 'Comunicaciones', icon: 'fa-paper-plane' },
  { path: '/app/consultador', label: 'Consultador', icon: 'fa-binoculars' },
  { path: '/app/configuracion', label: 'Métricas & Config', icon: 'fa-chart-line' },
];

const PageLayout = ({ title, tagline, children, showBackButton = true, fullWidth = false }) => {
  const navigate = useNavigate();
  const currentPath = window.location.pathname;
  const currentIndex = APP_NAV.findIndex(a => a.path === currentPath);
  const prevApp = currentIndex > 0 ? APP_NAV[currentIndex - 1] : null;
  const nextApp = currentIndex < APP_NAV.length - 1 ? APP_NAV[currentIndex + 1] : null;

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
          <div className="app-nav-bar">
            {showBackButton && (
              <button 
                onClick={() => navigate('/')}
                className="back-btn"
              >
                <i className="fas fa-arrow-left"></i> Volver al inicio
              </button>
            )}
            <div className="app-nav-arrows">
              {prevApp && (
                <Link to={prevApp.path} className="app-nav-link">
                  <i className="fas fa-chevron-left"></i>
                  <span>{prevApp.label}</span>
                </Link>
              )}
              {nextApp && (
                <Link to={nextApp.path} className="app-nav-link app-nav-link-next">
                  <span>{nextApp.label}</span>
                  <i className="fas fa-chevron-right"></i>
                </Link>
              )}
            </div>
          </div>
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

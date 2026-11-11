import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import { SITE_CONTENT } from '../../data/siteContent';

const { navbar } = SITE_CONTENT;

const APP_NAV = [
  { path: '/app/cotizador', label: 'Cotizador Logístico', icon: 'fa-calculator' },
  { path: '/app/shipments', label: 'Gestor de Embarques', icon: 'fa-box-open' },
  { path: '/app/facturacion', label: 'Facturación', icon: 'fa-file-invoice' },
  { path: '/app/maestros', label: 'Masters', icon: 'fa-database' },
  { path: '/app/reclutamiento', label: 'Reclutamiento', icon: 'fa-user-tie' },
  { path: '/app/comunicaciones', label: 'Comunicaciones', icon: 'fa-paper-plane' },
  { path: '/app/consultador', label: 'Consultador', icon: 'fa-binoculars' },
  { path: '/app/configuracion', label: 'Métricas & Config', icon: 'fa-chart-line' },
];

const PageLayout = ({ title, tagline, children, fullWidth = false }) => {
  const location = useLocation();
  const currentPath = location.pathname;
  const currentIndex = APP_NAV.findIndex((app) => app.path === currentPath);
  const isAppPage = currentIndex >= 0;
  const prevApp = currentIndex > 0 ? APP_NAV[currentIndex - 1] : null;
  const nextApp = isAppPage && currentIndex < APP_NAV.length - 1 ? APP_NAV[currentIndex + 1] : null;

  return (
    <>
      <Navbar />
      <main id="main-content">
        <div
          className="container-x py-large page-shell"
          style={{
            maxWidth: fullWidth ? '1400px' : '1000px',
            position: 'relative',
            zIndex: '10',
            paddingTop: '8rem',
          }}
        >
          <div className="app-head">
            <nav className="breadcrumbs" aria-label="Ruta de navegación">
              <Link to="/">Inicio</Link>
              <span aria-hidden="true">/</span>
              <span aria-current="page">{title || 'Página'}</span>
            </nav>

            <div className="app-head-actions">
              <a
                href={navbar.cta.demo.href}
                className="btn-outline-premium btn-sm"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-laptop-code" aria-hidden="true"></i>
                Ver demo
              </a>
              <a
                href={navbar.cta.trial.href}
                className="btn-executive btn-sm"
                target="_blank"
                rel="noopener noreferrer"
              >
                Prueba gratis
              </a>
            </div>
          </div>

          {(tagline || title) && (
            <header className="app-heading">
              {tagline && <span className="tagline">{tagline}</span>}
              {title && <h1 className="section-title">{title}</h1>}
            </header>
          )}

          {isAppPage && (prevApp || nextApp) && (
            <nav className="app-switcher" aria-label="Navegación entre aplicaciones">
              {prevApp ? (
                <Link to={prevApp.path} className="app-switch app-switch--prev">
                  <span className="app-switch-dir">Anterior</span>
                  <span className="app-switch-label">
                    <i className="fas fa-arrow-left" aria-hidden="true"></i>
                    {prevApp.label}
                  </span>
                </Link>
              ) : (
                <span />
              )}

              {nextApp ? (
                <Link to={nextApp.path} className="app-switch app-switch--next">
                  <span className="app-switch-dir">Siguiente</span>
                  <span className="app-switch-label">
                    {nextApp.label}
                    <i className="fas fa-arrow-right" aria-hidden="true"></i>
                  </span>
                </Link>
              ) : (
                <span />
              )}
            </nav>
          )}

          {children}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default PageLayout;

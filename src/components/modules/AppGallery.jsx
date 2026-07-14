import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SITE_CONTENT } from '../../data/siteContent';
import cotizadorImg from '../../assets/ecosistema/cotizador.webp';
import shipmentImg from '../../assets/ecosistema/shipment.webp';
import fiannza1Img from '../../assets/ecosistema/fiannza1.webp';
import maestrosImg from '../../assets/ecosistema/maestros.webp';
import kpiImg from '../../assets/ecosistema/kpi.webp';
import configuracionImg from '../../assets/ecosistema/configuracion.webp';
import pdfDocs from '../../assets/ecosistema/pdf-docs.jpg';
import atsImg from '../../assets/ecosistema/ats.jpg';
import consulteeImg from '../../assets/ecosistema/consultee.webp';

const { appGallery } = SITE_CONTENT;

const imageMap = {
  'cotizador.webp': cotizadorImg,
  'shipment.webp': shipmentImg,
  'fiannza1.webp': fiannza1Img,
  'maestros.webp': maestrosImg,
  'kpi.webp': kpiImg,
  'configuracion.webp': configuracionImg,
  'pdf-docs.jpg': pdfDocs,
  'ats.jpg': atsImg,
  'consultee.webp': consulteeImg,
  'kpi.webp': kpiImg,
};

const AppGallery = () => {
  const [activeApp, setActiveApp] = useState(0);
  const [activeFeature, setActiveFeature] = useState(0);

  const currentApp = appGallery.apps[activeApp];

  const nextApp = () => {
    setActiveApp((prev) => (prev + 1) % appGallery.apps.length);
    setActiveFeature(0);
  };

  const prevApp = () => {
    setActiveApp((prev) => (prev - 1 + appGallery.apps.length) % appGallery.apps.length);
    setActiveFeature(0);
  };

  return (
    <section id="app-gallery" className="app-gallery-section py-large position-relative">
      <div className="glow-orb" style={{ top: '10%', right: '5%', background: 'var(--accent-purple)', opacity: '0.2' }}></div>
      <div className="container-x">
        <div className="text-center mb-5">
          <span className="tagline">{appGallery.tagline}</span>
          <h2 className="section-title" dangerouslySetInnerHTML={{ __html: appGallery.title }} />
          <p className="section-desc mx-auto" style={{ maxWidth: '700px' }}>
            {appGallery.subtitle}
          </p>
        </div>

        {/* App Selector Tabs */}
        <div className="app-tabs mb-5">
          <div className="app-tabs-scroll">
            {appGallery.apps.map((app, i) => (
              <button
                key={app.id}
                className={`app-tab ${i === activeApp ? 'active' : ''}`}
                onClick={() => { setActiveApp(i); setActiveFeature(0); }}
              >
                <i className={`fas ${app.icon}`}></i>
                <span>{app.title}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Active App Content */}
        <div className="row g-4 align-items-center">
          {/* Text Content */}
          <div className="col-lg-6 order-lg-1">
            <div className="app-detail-content">
              <div className="app-detail-header">
                <div className="app-detail-icon">
                  <i className={`fas ${currentApp.icon}`}></i>
                </div>
                <div className="app-detail-header-text">
                  <h3 className="app-detail-title">{currentApp.title}</h3>
                  <p className="app-detail-tagline">{currentApp.tagline}</p>
                </div>
                <Link to={currentApp.route} className="btn-app-detail btn-app-detail-inline">
                  <span className="btn-app-detail-text">Explorar</span>
                  <span className="btn-app-detail-icon"><i className="fas fa-arrow-right"></i></span>
                </Link>
              </div>

              <div className="app-detail-problem">
                <div className="app-detail-label">
                  <i className="fas fa-exclamation-triangle"></i> El problema
                </div>
                <p>{currentApp.problem}</p>
              </div>

              <div className="app-detail-solution">
                <div className="app-detail-label solution">
                  <i className="fas fa-check-circle"></i> La solución
                </div>
                <p>{currentApp.solution}</p>
              </div>

              <div className="app-detail-time-saved">
                <i className="fas fa-bolt"></i>
                <span>{currentApp.timeSaved}</span>
              </div>  

              {/* Features Carousel */}
              <div className="app-features-carousel">
                {currentApp.features.map((feat, i) => (
                  <div
                    key={i}
                    className={`app-feature-item ${i === activeFeature ? 'active' : ''}`}
                    onClick={() => setActiveFeature(i)}
                  >
                    <i className="fas fa-check"></i>
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Image / Screenshot */}
          <div className="col-lg-6 order-lg-2">
            <div className="app-detail-image-wrapper">
              <div className="app-detail-image-card">
                <img
                  src={imageMap[currentApp.image]}
                  alt={currentApp.title}
                  className="app-detail-screenshot"
                />
                <div className="app-detail-image-tag">{currentApp.title}</div>
              </div>
              {/* Nav arrows */}
              <div className="app-carousel-nav">
                <button className="app-nav-btn" onClick={prevApp}>
                  <i className="fas fa-chevron-left"></i>
                </button>
                <span className="app-nav-counter">
                  {activeApp + 1} / {appGallery.apps.length}
                </span>
                <button className="app-nav-btn" onClick={nextApp}>
                  <i className="fas fa-chevron-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* PDF Engine */}
        <div className="col-lg-12 mt-5">
          <div className="feature-card-premium horizontal-feature">
            <div className="row align-items-center">
              <div className="col-md-7">
                <div className="card-icon"><i className={`fas ${appGallery.pdfEngine.icon}`}></i></div>
                <h3 className="card-title">{appGallery.pdfEngine.title}</h3>
                <p className="card-text">{appGallery.pdfEngine.description}</p>
              </div>
              <div className="col-md-5">
                <div className="card-image-placeholder mini-placeholder">
                  <img src={imageMap[appGallery.pdfEngine.image]} alt={appGallery.pdfEngine.title} className="img-fluid rounded-3" />
                  <div className="system-mockup-tag">Generador de Documentos</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppGallery;

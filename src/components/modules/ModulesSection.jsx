import React from 'react';
import AppCard from './AppCard';
import { APPLICATIONS } from '../../data/appData';
import pdfDocs from '../../assets/ecosistema/pdf-docs.jpg';

const ModulesSection = () => {
  return (
    <section id="modulos" className="modules-section py-large position-relative">
      <div className="glow-orb" style={{ top: '10%', right: '5%', background: 'var(--accent-indigo)', opacity: '0.3' }}></div>
      <div className="glow-orb" style={{ bottom: '10%', left: '5%', background: 'var(--accent-indigo)', width: '400px', height: '400px', opacity: '0.3' }}></div>
      
      <div className="container-x">
        <div className="text-center mb-5">
          <span className="tagline">Ecosistema Flux</span>
          <h2 className="section-title">Aplicaciones de <span className="text-highlight">Especialidad</span></h2>
          <p className="section-desc mx-auto" style={{ maxWidth: '700px' }}>
            Herramientas modulares que resuelven cada desafío logístico con precisión quirúrgica.
          </p>
        </div>

        <div className="row g-4">
          {APPLICATIONS.map((app, index) => (
            <div key={app.id} className="col-12">
              <AppCard app={app} index={index} />
            </div>
          ))}
        </div>

        <div className="col-lg-12 mt-5">
          <div className="feature-card-premium horizontal-feature">
            <div className="row align-items-center">
              <div className="col-md-7">
                <div className="card-icon"><i className="fas fa-file-pdf"></i></div>
                <h3 className="card-title">Motor de Documentación PDF</h3>
                <p className="card-text">Generación documentos de alta calidad: Cotizaciones, Avisos de Llegada, Facturación SUNAT y Recibos de Caja con branding corporativo integrado.</p>
              </div>
              <div className="col-md-5">
                <div className="card-image-placeholder mini-placeholder">
                  <img src={pdfDocs} alt="Documentación PDF" className="img-fluid rounded-3" />
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

export default ModulesSection;

import React from 'react';

const AcademySection = () => {
  return (
    <section id="academy" className="academy-section py-large">
      <div className="container-x text-center">
        <span className="tagline">Domina el Sistema</span>
        <h2 className="section-title">LogIA <span className="text-highlight">Academy</span></h2>
        <p className="section-desc mx-auto mb-5" style={{ maxWidth: '700px' }}>
          Capacitación continua con videos guía de cada módulo. Onboarding inmediato para tu equipo sin costos adicionales.
        </p>
        <div className="academy-preview">
          <div className="video-mockup">
            <div className="play-btn"><i className="fas fa-play"></i></div>
            <img
              src="https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg"
              alt="Academy Preview"
              className="img-fluid rounded-4"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AcademySection;

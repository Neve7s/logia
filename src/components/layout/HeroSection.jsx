import React from 'react';

const HeroSection = () => {
  return (
    <section id="hero" className="hero-high-end">
      <div className="hero-overlay" />
      <div className="container-x hero-content d-flex flex-column align-items-center text-center">
        <div className="hero-brand-reveal mb-5">
          <div className="hero-brand-row">
            <span className="hero-log-text">Log</span>
            <div className="container-3d-wrapper">
              <div className="container-3d">
                <div className="face front"><span className="ia-text">IA</span></div>
                <div className="face back"><span className="ia-text">AI</span></div>
                <div className="face right" />
                <div className="face left" />
                <div className="face top" />
                <div className="face bottom" />
              </div>
            </div>
          </div>
        </div>

        <h1 className="hero-title-main">
          <span className="reveal-text">El Motor Digital para</span><br />
          <span className="text-highlight">Agencias de Carga</span>
        </h1>

        <p className="hero-lead">
          Centraliza el caos logístico en una única fuente de verdad.
          Cotizaciones ágiles, Operaciones más controladas y Finanzas integradas bajo estándares internacionales.
        </p>

        <div className="hero-cta-group mb-5">
          <a href="#modulos" className="btn-executive-large">Explorar Ecosistema</a>
          <a href="#soporte" className="btn-outline-premium">Agendar Demo</a>
        </div>

        <div className="hero-metrics mt-5 d-none d-md-flex w-100 justify-content-center">
          <div className="metric-item">
            <span className="metric-value">80</span><span className="metric-suffix">%</span>
            <span className="metric-label">Menos Carga Administrativa</span>
          </div>
          <div className="metric-item">
            <span className="metric-value">100</span><span className="metric-suffix">%</span>
            <span className="metric-label">Trazabilidad Total</span>
          </div>
          <div className="metric-item">
            <span className="metric-value">24</span><span className="metric-suffix">/7</span>
            <span className="metric-label">Soporte Especializado</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

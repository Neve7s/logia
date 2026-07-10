import React from 'react';
import data from '../../data.json';

function HeroSection() {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-copy">
        <p className="eyebrow">SaaS para operaciones más inteligentes</p>
        <h1>{data.site.title}</h1>
        <p className="hero-text">{data.site.subtitle}</p>
        <div className="hero-actions">
          <a className="btn btn-primary" href="#producto">
            {data.site.ctaPrimary}
          </a>
          <a className="btn btn-secondary" href="#casos-de-uso">
            {data.site.ctaSecondary}
          </a>
        </div>
      </div>

      <div className="hero-metrics" aria-label="Estadísticas destacadas">
        {data.heroStats.map((stat) => (
          <div key={stat.label} className="metric-card">
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HeroSection;

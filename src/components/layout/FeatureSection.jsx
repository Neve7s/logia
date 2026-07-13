import React from 'react';
import data from '../../data.json';

function FeatureSection() {
  return (
    <section id="producto" className="section-card">
      <div className="section-heading">
        <p className="eyebrow">Producto</p>
        <h2>Todo lo que necesitas para operar mejor</h2>
      </div>
      <div className="features-grid">
        {data.features.map((feature) => (
          <article key={feature.title} className="feature-card">
            <div className="feature-icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default FeatureSection;

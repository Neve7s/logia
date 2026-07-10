import React from 'react';
import data from '../../data.json';

function BenefitsSection() {
  return (
    <section id="beneficios" className="section-card alt-bg">
      <div className="section-heading">
        <p className="eyebrow">Beneficios</p>
        <h2>Diseñado para crecer con tu negocio</h2>
      </div>
      <ul className="list-stack">
        {data.benefits.map((benefit) => (
          <li key={benefit}>{benefit}</li>
        ))}
      </ul>
    </section>
  );
}

export default BenefitsSection;

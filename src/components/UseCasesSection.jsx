import React from 'react';
import data from '../../data.json';

function UseCasesSection() {
  return (
    <section id="casos-de-uso" className="section-card">
      <div className="section-heading">
        <p className="eyebrow">Casos de uso</p>
        <h2>Aplicaciones reales para equipos modernos</h2>
      </div>
      <div className="use-cases-grid">
        {data.useCases.map((useCase) => (
          <div key={useCase} className="use-case-pill">
            {useCase}
          </div>
        ))}
      </div>
    </section>
  );
}

export default UseCasesSection;

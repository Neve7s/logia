import React from 'react';
import { SITE_CONTENT } from '../../data/siteContent';

const { howItWorks } = SITE_CONTENT;

const HowItWorks = () => {
  return (
    <section id="como-funciona" className="how-it-works-section py-large position-relative">
      <div className="container-x">
        <div className="text-center mb-5">
          <span className="tagline">{howItWorks.tagline}</span>
          <h2 className="section-title" dangerouslySetInnerHTML={{ __html: howItWorks.title }} />
          <p className="section-desc mx-auto" style={{ maxWidth: '600px' }}>
            {howItWorks.subtitle}
          </p>
        </div>

        <div className="row g-4 justify-content-center">
          {howItWorks.steps.map((step, i) => (
            <div key={i} className="col-lg-4 col-md-6">
              <div className="how-step-card">
                <div className="how-step-number">{step.number}</div>
                <div className="how-step-icon">
                  <i className={step.icon}></i>
                </div>
                <h3 className="how-step-title">{step.title}</h3>
                <p className="how-step-desc">{step.description}</p>
                <div className="how-step-duration">
                  <i className="fas fa-clock"></i> {step.duration}
                </div>
              </div>
              {i < howItWorks.steps.length - 1 && (
                <div className="how-step-connector d-none d-lg-block">
                  <i className="fas fa-arrow-right"></i>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

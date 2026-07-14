import React, { useState, useEffect, useRef } from 'react';
import { SITE_CONTENT } from '../../data/siteContent';

const { howItWorks } = SITE_CONTENT;

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(0);
  const touchStartX = useRef(0);
  const touchDeltaX = useRef(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % howItWorks.steps.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    touchDeltaX.current = 0;
  };

  const handleTouchMove = (e) => {
    touchDeltaX.current = e.touches[0].clientX - touchStartX.current;
  };

  const handleTouchEnd = () => {
    if (Math.abs(touchDeltaX.current) > 50) {
      if (touchDeltaX.current < 0) {
        setActiveStep((prev) => (prev + 1) % howItWorks.steps.length);
      } else {
        setActiveStep((prev) => (prev - 1 + howItWorks.steps.length) % howItWorks.steps.length);
      }
    }
  };

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

        {/* Desktop grid */}
        <div className="row g-4 justify-content-center how-steps-desktop">
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

        {/* Mobile carousel */}
        <div
          className="how-steps-carousel"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="how-carousel-track" style={{ transform: `translateX(-${activeStep * 100}%)` }}>
            {howItWorks.steps.map((step, i) => (
              <div key={i} className="how-carousel-slide">
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
              </div>
            ))}
          </div>
          <div className="how-dots">
            {howItWorks.steps.map((_, i) => (
              <button
                key={i}
                className={`how-dot ${i === activeStep ? 'active' : ''}`}
                onClick={() => setActiveStep(i)}
                aria-label={`Paso ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

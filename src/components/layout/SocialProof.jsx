import React from 'react';
import { SITE_CONTENT } from '../../data/siteContent';

const { socialProof } = SITE_CONTENT;

const SocialProof = () => {
  return (
    <section id="confianza" className="social-proof-section py-large position-relative">
      <div className="glow-orb" style={{ top: '5%', left: '10%', background: 'var(--accent-indigo)', opacity: '0.2' }}></div>
      <div className="container-x">
        <div className="text-center mb-5">
          <span className="tagline">{socialProof.tagline}</span>
          <h2 className="section-title" dangerouslySetInnerHTML={{ __html: socialProof.title }} />
          <p className="section-desc mx-auto" style={{ maxWidth: '600px' }}>
            {socialProof.subtitle}
          </p>
        </div>

        {/* Testimonios */}
        <div className="row g-4 justify-content-center mb-5">
          {socialProof.testimonials.map((t, i) => (
            <div key={i} className="col-lg-8">
              <div className="testimonial-card">
                <div className="testimonial-quote-icon">
                  <i className="fas fa-quote-left"></i>
                </div>
                <blockquote className="testimonial-text">{t.quote}</blockquote>
                <div className="testimonial-footer">
                  <div className="testimonial-author">
                    <div className="testimonial-avatar">{t.avatar}</div>
                    <div>
                      <div className="testimonial-name">{t.author}</div>
                      <div className="testimonial-role">{t.role}</div>
                    </div>
                  </div>
                  <div className="testimonial-metric">
                    <span className="testimonial-metric-value">{t.metric}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="row g-4 justify-content-center">
          {socialProof.stats.map((s, i) => (
            <div key={i} className="col-md-4 col-6">
              <div className="social-stat-card">
                <div className="social-stat-value">{s.value}</div>
                <div className="social-stat-label">{s.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;

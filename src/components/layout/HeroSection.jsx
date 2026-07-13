import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SITE_CONTENT } from '../../data/siteContent';

gsap.registerPlugin(ScrollTrigger);

const { hero } = SITE_CONTENT;

const HeroSection = () => {
  const cubeRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const heroTl = gsap.timeline();
      heroTl.from('.hero-badge', { y: -20, opacity: 0, duration: 0.6, ease: 'power3.out' })
            .from('.hero-brand-reveal', { y: 80, opacity: 0, duration: 1.2, ease: 'power4.out' }, '-=0.3')
            .from('.hero-title-main', { y: 40, opacity: 0, duration: 1, ease: 'power4.out' }, '-=0.8')
            .from('.hero-lead', { y: 20, opacity: 0, duration: 0.8, ease: 'power4.out' }, '-=0.6')
            .from('.hero-cta-group', { y: 20, opacity: 0, duration: 0.8, ease: 'power4.out' }, '-=0.4')
            .from('.hero-metrics', { opacity: 0, duration: 1 }, '-=0.2');

      document.querySelectorAll('.metric-value').forEach(counter => {
        const target = parseInt(counter.getAttribute('data-value'));
        if (target) {
          gsap.to(counter, {
            innerText: target,
            duration: 2.5,
            snap: { innerText: 1 },
            scrollTrigger: { trigger: counter, start: 'top 95%' }
          });
        }
      });

      if (cubeRef.current) {
        const tl = gsap.timeline({ repeat: -1 });
        tl.to(cubeRef.current, { rotationY: 205, duration: 1, delay: 3, ease: 'expo.inOut' })
          .to(cubeRef.current, { rotationY: 25, duration: 1, delay: 3, ease: 'expo.inOut' });
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <section id="hero" className="hero-high-end">
      <div className="hero-overlay" />
      <div className="container-x hero-content d-flex flex-column align-items-center text-center">
        {/* Badge de prueba */}
        <div className="hero-badge">
          <span className="hero-badge-icon"><i className="fas fa-gift"></i></span>
          <span className="hero-badge-text">{hero.badge}</span>
          <span className="hero-badge-sub">{hero.badgeSub}</span>
        </div>

        <div className="hero-brand-reveal mb-4">
          <div className="hero-brand-row">
            <span className="hero-log-text">Log</span>
            <div className="container-3d-wrapper">
              <div className="container-3d" ref={cubeRef}>
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
          <span className="reveal-text">{hero.titleLine1}</span><br />
          <span className="text-highlight">{hero.titleHighlight}</span>
        </h1>

        <p className="hero-lead">{hero.subtitle}</p>

        <div className="hero-cta-group mb-5">
          <a href={hero.ctaPrimary.href} className="btn-executive-large btn-cta-primary" target="_blank" rel="noopener noreferrer">
            <i className="fas fa-rocket" style={{ marginRight: '0.5rem' }}></i>
            {hero.ctaPrimary.label}
          </a>
          <a href={hero.ctaSecondary.href} className="btn-outline-premium">
            {hero.ctaSecondary.label}
          </a>
        </div>

        <div className="hero-metrics mt-5 d-none d-md-flex w-100 justify-content-center">
          {hero.metrics.map((m, i) => (
            <div key={i} className="metric-item">
              <span className="metric-value" data-value={m.value}>0</span><span className="metric-suffix">{m.suffix}</span>
              <span className="metric-label">{m.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

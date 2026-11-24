import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SITE_CONTENT } from '../../data/siteContent';
import Snowfall from './Snowfall';
import cotizadorImg from '../../assets/ecosistema/cotizador.webp';
import shipmentImg from '../../assets/ecosistema/shipment.webp';
import facturacionImg from '../../assets/ecosistema/fiannza1.webp';
import maestrosImg from '../../assets/ecosistema/maestros.webp';
import atsImg from '../../assets/ecosistema/ats.jpg';
import commuImg from '../../assets/ecosistema/commu.jpg';
import consulteeImg from '../../assets/ecosistema/consultee.webp';
import kpiImg from '../../assets/ecosistema/kpi.webp';

gsap.registerPlugin(ScrollTrigger);

const { hero, navbar } = SITE_CONTENT;

const generalSlide = {
  id: 'general',
  label: 'Plataforma',
  shortLabel: 'Plataforma',
  icon: 'fa-layer-group',
  path: '/',
};

const slides = [generalSlide, ...navbar.solutions];

const heroImages = {
  'cotizador.webp': cotizadorImg,
  'shipment.webp': shipmentImg,
  'fiannza1.webp': facturacionImg,
  'maestros.webp': maestrosImg,
  'ats.jpg': atsImg,
  'commu.jpg': commuImg,
  'consultee.webp': consulteeImg,
  'kpi.webp': kpiImg,
};

const HeroSection = () => {
  const cubeRef = useRef(null);
  const stageRef = useRef(null);
  const firstRender = useRef(true);
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const slide = slides[activeSlide];
  const isGeneral = activeSlide === 0;

  useEffect(() => {
    const ctx = gsap.context(() => {
      const heroTl = gsap.timeline();
      heroTl.from('.hero-badge', { y: -20, opacity: 0, duration: 0.6, ease: 'power3.out' })
            .from('.hero-general > *:not(.hero-badge)', { y: 30, opacity: 0, duration: 0.9, stagger: 0.08, ease: 'power4.out' }, '-=0.3')
            .from('.hero-solutions', { opacity: 0, y: 24, duration: 0.9, ease: 'power4.out' }, '-=0.5');
    });

    return () => ctx.revert();
  }, []);

  // Keep the 3D cube spinning while the brand hero is visible.
  useEffect(() => {
    if (!isGeneral || !cubeRef.current) return undefined;

    const tl = gsap.timeline({ repeat: -1 });
    tl.to(cubeRef.current, { rotationY: 205, duration: 1, delay: 3, ease: 'expo.inOut' })
      .to(cubeRef.current, { rotationY: 25, duration: 1, delay: 3, ease: 'expo.inOut' });

    return () => {
      tl.kill();
    };
  }, [isGeneral]);

  // Fade the whole stage when the selected solution changes (skip the first render).
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    if (!stageRef.current) return;
    gsap.fromTo(
      stageRef.current,
      { opacity: 0, y: 12 },
      { opacity: 1, y: 0, duration: 0.45, ease: 'power2.out' }
    );
  }, [activeSlide]);

  // Auto-advance every 4 seconds on desktop with pointer; pauses on hover/focus.
  useEffect(() => {
    if (isPaused) return undefined;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    if (!window.matchMedia('(hover: hover) and (min-width: 992px)').matches) return undefined;

    const timer = window.setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => window.clearInterval(timer);
  }, [isPaused]);

  const renderCtas = () => (
    <div className="hero-cta-group d-none d-lg-flex align-items-center">
      <a
        href={hero.ctaPrimary.href}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-executive-large"
      >
        <i className="fas fa-rocket" aria-hidden="true"></i> {hero.ctaPrimary.label}
      </a>
      <a
        href={hero.ctaSecondary.href}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-outline-premium hero-demo-btn"
      >
        <i className="fas fa-laptop-code" aria-hidden="true"></i> {hero.ctaSecondary.label}
      </a>
    </div>
  );

  const renderMobileCtas = () => (
    <div className="hero-mobile-cta">
      <a
        href={hero.ctaPrimary.href}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-hero-mobile"
      >
        {hero.ctaPrimaryMobile || 'Gratis todo diciembre'} <i className="fas fa-arrow-right" aria-hidden="true" style={{ marginLeft: '8px' }}></i>
      </a>
      <a
        href={hero.ctaSecondary.href}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-hero-mobile btn-hero-mobile-secondary"
      >
        <i className="fas fa-laptop-code" aria-hidden="true"></i> {hero.ctaSecondary.label}
      </a>
    </div>
  );

  return (
    <section id="hero" className="hero-high-end">
      <Snowfall />
      <div className="hero-overlay" />

      <div className="container-x hero-content">
        <div className="hero-stage" ref={stageRef}>
          {isGeneral ? (
            /* Previous (brand) hero — the starting point */
            <div className="hero-general">
              <div className="hero-badge">
                <span className="hero-badge-icon"><i className="fas fa-gift"></i></span>
                <span className="hero-badge-text">{hero.badge}</span>
                <span className="hero-badge-sub">{hero.badgeSub}</span>
              </div>

              <div className="hero-brand-reveal">
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
                    <span className="cube-santa-hat" aria-hidden="true">
                      <svg viewBox="0 0 120 90" focusable="false">
                        <path d="M10 64 C26 10 92 6 106 44 L94 58 C78 30 38 34 24 68 Z" fill="#e5484d" />
                        <circle cx="105" cy="42" r="13" fill="#f2f6fb" />
                        <rect x="6" y="60" width="104" height="17" rx="8.5" fill="#f2f6fb" />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>

              <h1 className="hero-title-main">
                {hero.titleLine1} <span className="text-highlight">{hero.titleHighlight}</span>
              </h1>

              <ul className="hero-segments" aria-label="Tipos de empresa">
                {hero.segments.map((segment) => (
                  <li key={segment}>{segment}</li>
                ))}
              </ul>

              <p className="hero-lead">{hero.subtitle}</p>

              {hero.holidayNote && (
                <p className="hero-holiday-note">
                  <i className="fas fa-snowflake" aria-hidden="true"></i>
                  {hero.holidayNote}
                </p>
              )}

              {renderCtas(false)}
              {renderMobileCtas(false)}
            </div>
          ) : (
            /* Split layout for each application */
            <div className="hero-split">
              <div className="hero-copy-col">
                <div className="hero-badge">
                  <span className="hero-badge-icon"><i className="fas fa-gift"></i></span>
                  <span className="hero-badge-text">{hero.badge}</span>
                  <span className="hero-badge-sub">{hero.badgeSub}</span>
                </div>

                <div className="hero-copy">
                  <span className="hero-eyebrow">{slide.label}</span>
                  <h1 className="hero-title-main">{slide.heroTitle}</h1>
                  <p className="hero-lead">{slide.heroText}</p>
                </div>

                {renderCtas(true)}
                {renderMobileCtas(true)}
              </div>

              <div className="hero-visual">
                <div className="hero-visual-frame">
                  <div className="hero-visual-bar" aria-hidden="true">
                    <span /><span /><span />
                  </div>
                  <div className="hero-visual-screen">
                    {navbar.solutions.map((solution, index) => (
                      <img
                        key={solution.image}
                        src={heroImages[solution.image]}
                        alt={`${solution.label} — LogIA`}
                        className={index + 1 === activeSlide ? 'is-active' : ''}
                        loading="lazy"
                        decoding="async"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Selector de soluciones, al pie del hero (patrón Adobe) */}
        <nav
          id="producto"
          className="hero-solutions"
          aria-label="Soluciones de LogIA"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocus={() => setIsPaused(true)}
          onBlur={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget)) setIsPaused(false);
          }}
        >
          <ul className="hero-solutions-track">
            {slides.map((solution, index) => {
              const isActive = index === activeSlide;
              const cardProps = {
                className: `hero-solution-card${isActive ? ' is-active' : ''}`,
                onMouseEnter: () => setActiveSlide(index),
                onFocus: () => setActiveSlide(index),
              };
              const cardContent = (
                <>
                  <span className="hero-solution-icon">
                    <i className={`fas ${solution.icon}`} aria-hidden="true"></i>
                  </span>
                  <span className="hero-solution-bottom">
                    <span className="hero-solution-label">{solution.shortLabel}</span>
                    <i className="fas fa-chevron-right hero-solution-arrow" aria-hidden="true"></i>
                  </span>
                </>
              );

              return (
                <li key={solution.path || solution.id}>
                  {solution.id === 'general' ? (
                    <button
                      type="button"
                      {...cardProps}
                      onClick={() => setActiveSlide(index)}
                    >
                      {cardContent}
                    </button>
                  ) : (
                    <Link to={solution.path} {...cardProps}>
                      {cardContent}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </section>
  );
};

export default HeroSection;

import React, { useState, useEffect, useRef } from 'react';
import img1 from '../../assets/ecosistema/agenc1.jpg';
import img2 from '../../assets/ecosistema/agenc2.jpg';
import img3 from '../../assets/ecosistema/agenc3.jpg';

const features = [
  {
    icon: 'fas fa-users-gear',
    title: 'Gestión de Empleados',
    desc: 'Organiza tu equipo por áreas, asigna permisos específicos y mide la productividad en tiempo real.',
  },
  {
    icon: 'fas fa-chart-pie',
    title: 'Reportes Automáticos',
    desc: 'Visualiza cómo va tu negocio con reportes claros sobre cotizaciones, ventas y rendimiento de tu equipo.',
  },
  {
    icon: 'fas fa-sliders',
    title: 'Personalización de tu Marca',
    desc: 'Configura la imagen de tu empresa en documentos, correos y comunicaciones con tus clientes.',
  },
];

const images = [img1, img2, img3];

const AdminHub = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [currentImg, setCurrentImg] = useState(0);
  const touchStartX = useRef(0);
  const touchDeltaX = useRef(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const imgTimer = setInterval(() => {
      setCurrentImg((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(imgTimer);
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
        setActiveFeature((prev) => (prev + 1) % features.length);
      } else {
        setActiveFeature((prev) => (prev - 1 + features.length) % features.length);
      }
    }
  };

  return (
    <section className="admin-hub-section">
      <div className="container-x">
        <div className="row align-items-center g-4">
          <div className="col-lg-6">
            <span className="tagline">Gestión de Alto Nivel</span>
            <h2 className="section-title">Control total de tu <span className="text-highlight">Agencia</span></h2>
            <p className="section-desc">Administra el motor de tu negocio con herramientas diseñadas para la alta gerencia.</p>

            {/* Desktop list */}
            <ul className="feature-list-premium admin-features-desktop">
              {features.map((f, i) => (
                <li key={i}>
                  <i className={f.icon}></i>
                  <div>
                    <h4>{f.title}</h4>
                    <p>{f.desc}</p>
                  </div>
                </li>
              ))}
            </ul>

            {/* Mobile carousel */}
            <div
              className="admin-features-carousel"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <div className="admin-carousel-track" style={{ transform: `translateX(-${activeFeature * 100}%)` }}>
                {features.map((f, i) => (
                  <div key={i} className="admin-carousel-slide">
                    <div className="admin-feature-card">
                      <i className={f.icon}></i>
                      <div>
                        <h4>{f.title}</h4>
                        <p>{f.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="how-dots">
                {features.map((_, i) => (
                  <button
                    key={i}
                    className={`how-dot ${i === activeFeature ? 'active' : ''}`}
                    onClick={() => setActiveFeature(i)}
                    aria-label={`Feature ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="admin-crossfade-wrapper">
              <div className="admin-crossfade-glow"></div>
              {images.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`Admin Dashboard ${i + 1}`}
                  className={`admin-crossfade-img ${i === currentImg ? 'active' : ''}`}
                />
              ))}
              <div className="system-mockup-tag">Dashboard Administrativo</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdminHub;

import React from 'react';
import { Link } from 'react-router-dom';

const CtaBand = () => {
  return (
    <section className="cta-band-section" aria-labelledby="cta-band-title">
      <div className="container-x">
        <div className="cta-band">
          <div className="cta-band-copy">
            <span className="tagline">Siguiente paso</span>
            <h2 id="cta-band-title" className="cta-band-title">
              Digitaliza tu empresa con <span className="text-highlight">LogIA</span>
            </h2>
            <p className="cta-band-text">
              Cotiza, opera y factura desde una sola plataforma. Empieza con 1 mes gratis,
              todo diciembre, sin tarjeta de crédito y con acompañamiento de nuestro equipo.
            </p>
            <ul className="cta-band-points">
              <li><i className="fas fa-circle-check" aria-hidden="true"></i> Implementación guiada</li>
              <li><i className="fas fa-circle-check" aria-hidden="true"></i> Datos aislados por empresa</li>
              <li><i className="fas fa-circle-check" aria-hidden="true"></i> Soporte en español</li>
            </ul>
          </div>
          <div className="cta-band-actions">
            <a
              href="https://app.logia.lat/register/company/"
              className="btn-executive-large"
              target="_blank"
              rel="noopener noreferrer"
            >
              Crear cuenta gratis <i className="fas fa-arrow-right" aria-hidden="true"></i>
            </a>
            <a
              href="https://demo.logia.lat"
              className="btn-outline-premium cta-band-demo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fas fa-laptop-code" aria-hidden="true"></i> Explorar la demo
            </a>
            <Link to="/soporte" className="cta-band-contact">
              Hablar con ventas <i className="fas fa-arrow-up-right-from-square" aria-hidden="true"></i>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaBand;

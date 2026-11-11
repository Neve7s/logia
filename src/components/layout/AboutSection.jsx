import React from 'react';
import { Link } from 'react-router-dom';

const compromisos = [
  {
    title: 'Crecer contigo',
    text: 'Nuestro roadmap se define con las necesidades de quienes usan la plataforma todos los días.',
  },
  {
    title: 'Escuchar y adaptar',
    text: 'Ajustamos módulos, flujos e integraciones a medida que tu operación cambia.',
  },
  {
    title: 'Acompañar',
    text: 'Implementación guiada, capacitación y soporte en español, con un equipo que responde.',
  },
];

const AboutSection = () => {
  return (
    <section id="nosotros" className="about-section py-large">
      <div className="container-x">
        <header className="section-head">
          <div className="section-head-main">
            <span className="tagline">Sobre LogIA</span>
            <h2 className="section-title">Crecemos con nuestros clientes</h2>
            <p className="section-desc">
              No construimos un software genérico. Construimos la herramienta que tu operación
              necesita y la mejoramos contigo, todos los días.
            </p>
          </div>
        </header>

        <div className="about-grid">
          <div className="about-story">
            <p className="about-lead">
              LogIA nació para digitalizar el día a día de agencias de carga, operadores logísticos
              y agencias de aduanas. Cada módulo que existe hoy nació de una conversación con un
              cliente y de una necesidad real de su operación.
            </p>

            <ul className="about-commitments">
              {compromisos.map((compromiso, index) => (
                <li key={compromiso.title}>
                  <span className="about-commitment-index">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3>{compromiso.title}</h3>
                    <p>{compromiso.text}</p>
                  </div>
                </li>
              ))}
            </ul>

            <Link to="/soporte" className="about-link">
              Hablemos de tu operación
              <i className="fas fa-arrow-right" aria-hidden="true"></i>
            </Link>
          </div>

          <div className="about-cards">
            <article className="about-card">
              <span className="about-card-icon">
                <i className="fas fa-eye" aria-hidden="true"></i>
              </span>
              <h3>Visión</h3>
              <p>
                Ser la plataforma de referencia para digitalizar la operación logística y el
                comercio exterior en Latinoamérica.
              </p>
            </article>

            <article className="about-card">
              <span className="about-card-icon">
                <i className="fas fa-bullseye" aria-hidden="true"></i>
              </span>
              <h3>Misión</h3>
              <p>
                Simplificar la operación de las empresas logísticas con tecnología clara, segura
                y a la medida de sus procesos, creciendo junto a ellas.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import { SITE_CONTENT } from '../../data/siteContent';
const { footer } = SITE_CONTENT;

export const LegalSection = ({ id, number, title, icon, children }) => (
  <section id={id} className="legal-section" aria-labelledby={`${id}-title`}>
    <div className="legal-section-head">
      <span className="legal-section-number" aria-hidden="true">{number}</span>
      <h2 id={`${id}-title`}>
        {icon && <i className={icon} aria-hidden="true"></i>}
        {title}
      </h2>
    </div>
    <div className="legal-section-body">{children}</div>
  </section>
);

const LegalPage = ({
  title,
  shortTitle,
  tagline,
  intro,
  updated,
  version,
  sections = [],
  children,
}) => {
  React.useEffect(() => {
    const hash = window.location.hash;
    if (!hash) return undefined;

    const timer = window.setTimeout(() => {
      document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 180);

    return () => window.clearTimeout(timer);
  }, []);

  return (
    <>
      <Navbar />
      <main id="main-content">
        <header className="legal-hero">
          <div className="container-x">
            <nav className="breadcrumbs" aria-label="Ruta de navegación">
              <Link to="/">Inicio</Link>
              <span aria-hidden="true">/</span>
              <span aria-current="page">{shortTitle || title}</span>
            </nav>
            <span className="tagline">{tagline}</span>
            <h1 className="legal-title">{title}</h1>
            <p className="legal-intro">{intro}</p>
            <div className="legal-meta">
              <span><i className="fas fa-calendar-day" aria-hidden="true"></i> Actualizado: {updated}</span>
              <span><i className="fas fa-code-branch" aria-hidden="true"></i> Versión {version}</span>
              <span><i className="fas fa-shield-halved" aria-hidden="true"></i> Documento legal</span>
              <button type="button" className="legal-print-btn" onClick={() => window.print()}>
                <i className="fas fa-print" aria-hidden="true"></i> Imprimir
              </button>
            </div>
          </div>
        </header>

        <div className="container-x legal-shell">
          <aside className="legal-aside">
            {sections.length > 0 && (
              <nav className="legal-toc" aria-label="Contenido del documento">
                <p className="legal-toc-title">Contenido</p>
                <ol>
                  {sections.map((section) => (
                    <li key={section.id}>
                      <a href={`#${section.id}`}>{section.title}</a>
                    </li>
                  ))}
                </ol>
              </nav>
            )}

            <div className="legal-help">
              <h2>¿Necesitas ayuda?</h2>
              <p>Nuestro equipo puede resolver dudas sobre este documento y sobre el servicio.</p>
              <a href={`mailto:${footer.contact.email}`}>
                <i className="fas fa-envelope" aria-hidden="true"></i> {footer.contact.email}
              </a>
              <a href={footer.contact.whatsappLink} target="_blank" rel="noopener noreferrer">
                <i className="fab fa-whatsapp" aria-hidden="true"></i> {footer.contact.whatsapp}
              </a>
              <Link to="/soporte">
                <i className="fas fa-headset" aria-hidden="true"></i> Centro de soporte
              </Link>
            </div>
          </aside>

          <article className="legal-content">
            {children}
            <div className="legal-footer-actions">
              <Link to="/terminos" className="legal-chip">Términos</Link>
              <Link to="/privacidad" className="legal-chip">Privacidad</Link>
              <Link to="/cookies" className="legal-chip">Cookies</Link>
              <a href="#main-content" className="legal-back-top">
                Volver arriba <i className="fas fa-arrow-up" aria-hidden="true"></i>
              </a>
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default LegalPage;

import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '../../assets/favicon.svg';
import { SITE_CONTENT } from '../../data/siteContent';

const { footer } = SITE_CONTENT;

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === '/';

  const handleLinkClick = (e, path) => {
    if (path.startsWith('/#')) {
      e.preventDefault();
      const sectionId = path.substring(1);
      if (isHomePage) {
        const el = document.querySelector(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      } else {
        navigate(sectionId);
      }
    }
  };

  const currentYear = new Date().getFullYear();

  const renderLink = (item, extraClass = '') => {
    if (item.external) {
      return (
        <a
          key={item.label}
          href={item.path}
          target="_blank"
          rel="noopener noreferrer"
          className={`footer-link ${extraClass}`}
        >
          <i className={item.icon}></i> {item.label}
        </a>
      );
    }
    return (
      <Link
        key={item.label}
        to={item.path}
        className={`footer-link ${extraClass}`}
        onClick={(e) => handleLinkClick(e, item.path)}
      >
        <i className={item.icon}></i> {item.label}
      </Link>
    );
  };

  return (
    <footer className="footer-executive" role="contentinfo">
      <div className="container-x">
        <div className="footer-wrapper">
          {/* Top Section - 5 Columns */}
          <div className="footer-top">
            {/* Column 1: Brand & Social */}
            <div className="footer-brand">
              <Link to="/" className="footer-brand-link">
                <div className="brand-group">
                  <img src={logo} alt="LogIA" className="logo-x" />
                  <span className="brand-name">Log<span>IA</span></span>
                </div>
              </Link>
              <p className="footer-bio">{footer.bio}</p>
              <div className="footer-social">
                {footer.social.map((s) => (
                  <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label} className="footer-social-link">
                    <i className={s.icon}></i>
                  </a>
                ))}
              </div>
            </div>

            {/* Column 2: Soluciones */}
            <div className="footer-column">
              <h5>Soluciones</h5>
              <div className="footer-links">
                {footer.solutions.map((item) => renderLink(item))}
              </div>
            </div>

            {/* Column 3: Recursos */}
            <div className="footer-column">
              <h5>Recursos</h5>
              <div className="footer-links">
                {footer.resources.map((item) => renderLink(item))}
              </div>
            </div>

            {/* Column 4: Legal */}
            <div className="footer-column">
              <h5>Legal</h5>
              <div className="footer-links">
                {footer.legal.map((item) => renderLink(item))}
              </div>
              <div className="footer-contact-block">
                <h5 className="footer-contact-title">Contacto</h5>
                <a href={`mailto:${footer.contact.email}`} className="footer-contact-link">
                  <i className="fas fa-envelope"></i> {footer.contact.email}
                </a>
                <a href={footer.contact.whatsappLink} target="_blank" rel="noopener noreferrer" className="footer-contact-link">
                  <i className="fab fa-whatsapp"></i> {footer.contact.whatsapp}
                </a>
                <div className="footer-hours">
                  <i className="fas fa-clock"></i>
                  <span>{footer.contact.hours}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="footer-bottom">
            <div className="footer-bottom-left">
              <p className="footer-copyright">
                &copy; {currentYear} LogIA. Todos los derechos reservados.
              </p>
              <span className="footer-version">{footer.version}</span>
            </div>
            <div className="footer-bottom-center">
              <span className="footer-made-with">
                Desarrollado con <i className="fas fa-heart footer-heart-icon"></i> para la logística LATAM
              </span>
            </div>
            <div className="footer-bottom-links">
              <Link to="/soporte" className="footer-bottom-link">Soporte</Link>
              <Link to="/preguntas" className="footer-bottom-link">FAQ</Link>
              <a href={footer.solutions[0]?.path?.startsWith('/app') ? 'https://app.logia.lat/login/' : 'https://app.logia.lat/login/'} className="footer-bottom-link" target="_blank" rel="noopener noreferrer">Ingresar</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

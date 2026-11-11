import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '../../assets/favicon.svg';
import { SITE_CONTENT } from '../../data/siteContent';

const { footer } = SITE_CONTENT;

const featuredProducts = [
  { icon: 'fas fa-calculator', label: 'Cotizador Logístico', path: '/app/cotizador' },
  { icon: 'fas fa-file-invoice', label: 'Facturación', path: '/app/facturacion' },
  { icon: 'fas fa-box-open', label: 'Gestor de Embarques', path: '/app/shipments' },
  { icon: 'fas fa-binoculars', label: 'Consultador', path: '/app/consultador' },
];

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === '/';

  const handleAnchorClick = (event, path) => {
    if (!path.startsWith('/#')) return;

    event.preventDefault();
    const sectionId = path.substring(1);

    if (isHomePage) {
      const element = document.querySelector(sectionId);
      if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      navigate('/', { state: { scrollTo: sectionId } });
    }
  };

  const currentYear = new Date().getFullYear();

  const renderLink = (item) => {
    if (item.external) {
      return (
        <li key={item.label}>
          <a href={item.path} target="_blank" rel="noopener noreferrer">
            {item.label}
          </a>
        </li>
      );
    }

    return (
      <li key={item.label}>
        <Link to={item.path} onClick={(event) => handleAnchorClick(event, item.path)}>
          {item.label}
        </Link>
      </li>
    );
  };

  const half = Math.ceil(footer.solutions.length / 2);
  const platformLinks = footer.solutions.slice(0, half);
  const moduleLinks = footer.solutions.slice(half);

  return (
    <footer className="footer-executive" role="contentinfo">
      <div className="container-x">
        <div className="footer-grid">
          {/* Brand + contact */}
          <div className="footer-brand">
            <Link to="/" className="footer-brand-link" aria-label="LogIA, ir al inicio">
              <img src={logo} alt="" className="footer-logo" />
              <span className="footer-brand-name">Log<span>IA</span></span>
            </Link>
            <p className="footer-bio">{footer.bio}</p>
            <div className="footer-contact">
              <a href={`mailto:${footer.contact.email}`}>{footer.contact.email}</a>
              <a href={footer.contact.whatsappLink} target="_blank" rel="noopener noreferrer">
                {footer.contact.whatsapp}
              </a>
              <span>{footer.contact.hours}</span>
              <span>{footer.contact.location}</span>
            </div>
          </div>

          {/* Plataforma */}
          <nav className="footer-col" aria-label="Plataforma">
            <h2 className="footer-heading">Plataforma</h2>
            <ul className="footer-list">
              {platformLinks.map((item) => renderLink(item))}
            </ul>
          </nav>

          {/* Módulos */}
          <nav className="footer-col" aria-label="Módulos">
            <h2 className="footer-heading">Módulos</h2>
            <ul className="footer-list">
              {moduleLinks.map((item) => renderLink(item))}
            </ul>
          </nav>

          {/* Recursos */}
          <nav className="footer-col" aria-label="Recursos">
            <h2 className="footer-heading">Recursos</h2>
            <ul className="footer-list">
              {footer.resources.map((item) => renderLink(item))}
            </ul>
          </nav>

          {/* Legal */}
          <nav className="footer-col" aria-label="Legal">
            <h2 className="footer-heading">Legal</h2>
            <ul className="footer-list">
              {footer.legal.map((item) => renderLink(item))}
            </ul>
          </nav>
        </div>

        {/* Featured products */}
        <section className="footer-featured" aria-labelledby="footer-featured-title">
          <h2 className="footer-heading" id="footer-featured-title">Productos destacados</h2>
          <ul className="footer-featured-list">
            {featuredProducts.map((product) => (
              <li key={product.label}>
                <Link to={product.path} className="footer-featured-item">
                  <i className={product.icon} aria-hidden="true"></i>
                  <span>{product.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <p className="footer-legal-note">
          Precios en USD; el IGV no está incluido. El uso del servicio está sujeto a nuestros{' '}
          <Link to="/terminos">Términos y Condiciones</Link>,{' '}
          <Link to="/privacidad">Política de Privacidad</Link> y{' '}
          <Link to="/cookies">Política de Cookies</Link>.
        </p>

        {/* Legal row */}
        <div className="footer-legal">
          <div className="footer-legal-info">
            <span className="footer-region">
              <i className="fas fa-location-dot" aria-hidden="true"></i>
              {footer.contact.location}
            </span>
            <span>&copy; {currentYear} LogIA. Todos los derechos reservados.</span>
            <span className="footer-version">{footer.version}</span>
            <Link to="/privacidad">Privacidad</Link>
            <Link to="/terminos">Términos</Link>
            <Link to="/cookies">Cookies</Link>
          </div>

          <div className="footer-social" aria-label="Redes sociales de LogIA">
            {footer.social.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="footer-social-link"
              >
                <i className={social.icon} aria-hidden="true"></i>
              </a>
            ))}
          </div>
        </div>

        {/* Oversized brand wordmark, cropped at the bottom like the reference */}
        <div className="footer-wordmark" aria-hidden="true">
          <span>Log</span><span className="footer-wordmark-accent">IA</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

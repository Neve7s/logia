import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/favicon.svg';

const Footer = () => {
  const [newsletterMsg, setNewsletterMsg] = useState('');
  const [email, setEmail] = useState('');
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setNewsletterMsg('Gracias por suscribirte al boletín de LogIA.');
      setEmail('');
      setTimeout(() => setNewsletterMsg(''), 4000);
    }
  };

  const scrollToSection = (id) => {
    if (isHomePage) {
      const el = document.querySelector(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const currentYear = new Date().getFullYear();

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
              <p className="footer-bio">
                Plataforma integral para agencias de carga en Latinoamérica. 
                Automatiza cotizaciones, operaciones y facturación electrónica 
                con estándares de seguridad de grado corporativo.
              </p>
              <div className="footer-social">
                <a href="https://twitter.com/logia_lat" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="footer-social-link">
                  <i className="fab fa-x-twitter"></i>
                </a>
                <a href="https://linkedin.com/company/logia" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="footer-social-link">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="https://youtube.com/@logia" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="footer-social-link">
                  <i className="fab fa-youtube"></i>
                </a>
                <a href="https://instagram.com/logia.lat" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="footer-social-link">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="https://tiktok.com/@logia.lat" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="footer-social-link">
                  <i className="fab fa-tiktok"></i>
                </a>
              </div>
            </div>

            {/* Column 2: Soluciones */}
            <div className="footer-column">
              <h5>Soluciones</h5>
              <div className="footer-links">
                <Link to="/" className="footer-link" onClick={() => setTimeout(() => scrollToSection('#modulos'), 100)}>
                  <i className="fas fa-cubes"></i> Ecosistema
                </Link>
                <Link to="/" className="footer-link" onClick={() => setTimeout(() => scrollToSection('#modulos'), 100)}>
                  <i className="fas fa-calculator"></i> Cotizador Pro
                </Link>
                <Link to="/" className="footer-link" onClick={() => setTimeout(() => scrollToSection('#modulos'), 100)}>
                  <i className="fas fa-box-open"></i> Shipments
                </Link>
                <Link to="/" className="footer-link" onClick={() => setTimeout(() => scrollToSection('#modulos'), 100)}>
                  <i className="fas fa-file-invoice"></i> Facturación SUNAT
                </Link>
                <Link to="/" className="footer-link" onClick={() => setTimeout(() => scrollToSection('#modulos'), 100)}>
                  <i className="fas fa-user-tie"></i> Reclutamiento ATS
                </Link>
              </div>
            </div>

            {/* Column 3: Recursos */}
            <div className="footer-column">
              <h5>Recursos</h5>
              <div className="footer-links">
                <Link to="/" className="footer-link" onClick={() => setTimeout(() => scrollToSection('#academy'), 100)}>
                  <i className="fas fa-graduation-cap"></i> Academy
                </Link>
                <Link to="/" className="footer-link" onClick={() => setTimeout(() => scrollToSection('#tecnologia'), 100)}>
                  <i className="fas fa-microchip"></i> Infraestructura
                </Link>
                <Link to="/" className="footer-link" onClick={() => setTimeout(() => scrollToSection('#precios'), 100)}>
                  <i className="fas fa-tags"></i> Planes y Precios
                </Link>
                <Link to="/soporte" className="footer-link">
                  <i className="fas fa-headset"></i> Soporte Técnico
                </Link>
                <Link to="/preguntas" className="footer-link">
                  <i className="fas fa-circle-question"></i> Preguntas Frecuentes
                </Link>
              </div>
            </div>

            {/* Column 4: Legal */}
            <div className="footer-column">
              <h5>Legal</h5>
              <div className="footer-links">
                <Link to="/privacidad" className="footer-link">
                  <i className="fas fa-shield-halved"></i> Política de Privacidad
                </Link>
                <Link to="/terminos" className="footer-link">
                  <i className="fas fa-file-contract"></i> Términos y Condiciones
                </Link>
                <Link to="/actualizaciones" className="footer-link">
                  <i className="fas fa-clock-rotate-left"></i> Changelog
                </Link>
              </div>
              <div className="footer-contact-block">
                <h5 className="footer-contact-title">Contacto</h5>
                <a href="mailto:soporte@logia.lat" className="footer-contact-link">
                  <i className="fas fa-envelope"></i> soporte@logia.lat
                </a>
                <a 
                  href="https://wa.me/51935533845" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="footer-contact-link"
                >
                  <i className="fab fa-whatsapp"></i> +51 935 533 845
                </a>
                <div className="footer-hours">
                  <i className="fas fa-clock"></i>
                  <span>Lun - Vie: 9:00 AM - 6:00 PM (PET)</span>
                </div>
              </div>
            </div>

            {/* Column 5: Newsletter */}
            <div className="footer-newsletter">
              <h5>Boletín</h5>
              <p className="footer-newsletter-text">
                Recibe actualizaciones de producto, guías de uso y novedades 
                de la plataforma directamente en tu correo.
              </p>
              <form className="footer-newsletter-form" onSubmit={handleSubmit}>
                <div className="footer-newsletter-input-group">
                  <input 
                    type="email" 
                    className="footer-newsletter-input" 
                    placeholder="tu@correo.com" 
                    required 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <button type="submit" className="footer-newsletter-btn">
                    <i className="fas fa-paper-plane"></i>
                  </button>
                </div>
                {newsletterMsg && (
                  <p className="footer-newsletter-success">
                    <i className="fas fa-check-circle"></i> {newsletterMsg}
                  </p>
                )}
              </form>
              <div className="footer-trust-badges">
                <div className="trust-badge">
                  <i className="fas fa-lock"></i>
                  <span>Datos protegidos con encriptación AES-256</span>
                </div>
                <div className="trust-badge">
                  <i className="fas fa-shield-halved"></i>
                  <span>Cumplimiento SOC 2 Tipo II</span>
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
              <span className="footer-version">v2.4.0</span>
            </div>
            <div className="footer-bottom-center">
              <span className="footer-made-with">
                Desarrollado con <i className="fas fa-heart" style={{ color: 'var(--accent-indigo)', fontSize: '0.7rem' }}></i> para la logística LATAM
              </span>
            </div>
            <div className="footer-bottom-links">
              <Link to="/soporte" className="footer-bottom-link">Soporte</Link>
              <Link to="/preguntas" className="footer-bottom-link">FAQ</Link>
              <a href="https://app.logia.lat/login/" className="footer-bottom-link" target="_blank" rel="noopener noreferrer">Ingresar</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

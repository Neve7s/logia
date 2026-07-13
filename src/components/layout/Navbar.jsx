import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '../../assets/favicon.svg';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location]);

  const scrollToSection = (id) => {
    if (isHomePage) {
      const el = document.querySelector(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/' + id);
    }
  };

  const handleNavClick = (e, target) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    setActiveDropdown(null);
    if (target.startsWith('#')) {
      scrollToSection(target);
    } else {
      navigate(target);
    }
  };

  const toggleDropdown = (dropdownName) => {
    setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
  };

  return (
    <nav className={`nav-premium ${scrolled ? 'scrolled' : ''}`}>
      <div className="container-x d-flex align-items-center justify-content-between h-100">
        <Link to="/" className="nav-brand-link" style={{ textDecoration: 'none' }}>
          <div className="brand-group">
            <img src={logo} alt="LogIA" className="logo-x" />
            <span className="brand-name">Log<span>IA</span></span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="nav-links d-none d-lg-flex align-items-center">
          <a href="#modulos" className="nav-link-x" onClick={(e) => handleNavClick(e, '#modulos')}>Soluciones</a>
          <a href="#tecnologia" className="nav-link-x" onClick={(e) => handleNavClick(e, '#tecnologia')}>Infraestructura</a>
          <a href="#precios" className="nav-link-x" onClick={(e) => handleNavClick(e, '#precios')}>Planes</a>
          
          {/* Dropdown Recursos */}
          <div className="nav-item-dropdown">
            <span 
              className="nav-link-x nav-dropdown-trigger" 
              style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.3rem' }}
              onClick={() => toggleDropdown('recursos')}
            >
              Recursos <i className="fas fa-chevron-down" style={{ fontSize: '0.7rem', opacity: 0.6 }}></i>
            </span>
            <div className={`dropdown-menu-x ${activeDropdown === 'recursos' ? 'active' : ''}`}>
              <a href="#academy" className="dropdown-item-x" onClick={(e) => handleNavClick(e, '#academy')}><i className="fas fa-graduation-cap"></i> LogIA Academy</a>
              <a href="/soporte" className="dropdown-item-x" onClick={(e) => handleNavClick(e, '/soporte')}><i className="fas fa-headset"></i> Soporte Técnico</a>
              <a href="/preguntas" className="dropdown-item-x" onClick={(e) => handleNavClick(e, '/preguntas')}><i className="fas fa-circle-question"></i> Preguntas Frecuentes</a>
            </div>
          </div>

          {/* Dropdown Legal */}
          <div className="nav-item-dropdown">
            <span 
              className="nav-link-x nav-dropdown-trigger" 
              style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.3rem' }}
              onClick={() => toggleDropdown('legal')}
            >
              Legal <i className="fas fa-chevron-down" style={{ fontSize: '0.7rem', opacity: 0.6 }}></i>
            </span>
            <div className={`dropdown-menu-x ${activeDropdown === 'legal' ? 'active' : ''}`}>
              <a href="/privacidad" className="dropdown-item-x" onClick={(e) => handleNavClick(e, '/privacidad')}><i className="fas fa-shield-halved"></i> Privacidad</a>
              <a href="/terminos" className="dropdown-item-x" onClick={(e) => handleNavClick(e, '/terminos')}><i className="fas fa-file-contract"></i> Términos</a>
              <a href="/actualizaciones" className="dropdown-item-x" onClick={(e) => handleNavClick(e, '/actualizaciones')}><i className="fas fa-clock-rotate-left"></i> Changelog</a>
            </div>
          </div>
        </div>

        <div className="nav-actions d-none d-lg-flex align-items-center">
          <a href="https://app.logia.lat/login/" className="btn-text" target="_blank" rel="noopener noreferrer">Ingresar</a>
          <a href="https://app.logia.lat/register/" className="btn-executive" target="_blank" rel="noopener noreferrer">Prueba Gratis</a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="mobile-menu-btn d-lg-none" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{ 
            background: 'transparent', 
            border: 'none', 
            color: '#fff', 
            fontSize: '1.5rem', 
            cursor: 'pointer' 
          }}
        >
          <i className={mobileMenuOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="mobile-menu" style={{
          position: 'fixed',
          top: '0',
          right: '0',
          width: '80%',
          maxWidth: '350px',
          height: '100vh',
          background: 'rgba(15, 23, 42, 0.98)',
          backdropFilter: 'blur(20px)',
          zIndex: '9999',
          padding: '2rem',
          boxShadow: '-10px 0 40px rgba(0,0,0,0.5)'
        }}>
          <div className="d-flex justify-content-between align-items-center mb-5">
            <Link to="/" style={{ textDecoration: 'none' }}>
              <div className="brand-group">
                <img src={logo} alt="LogIA" className="logo-x" />
                <span className="brand-name">Log<span>IA</span></span>
              </div>
            </Link>
            <button 
              onClick={() => setMobileMenuOpen(false)}
              style={{ background: 'transparent', border: 'none', color: '#fff', fontSize: '1.5rem', cursor: 'pointer' }}
            >
              <i className="fas fa-times"></i>
            </button>
          </div>
          
          <div className="mobile-links" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <a href="#modulos" className="nav-link-x" onClick={(e) => handleNavClick(e, '#modulos')} style={{ margin: '0' }}>Soluciones</a>
            <a href="#tecnologia" className="nav-link-x" onClick={(e) => handleNavClick(e, '#tecnologia')} style={{ margin: '0' }}>Infraestructura</a>
            <a href="#precios" className="nav-link-x" onClick={(e) => handleNavClick(e, '#precios')} style={{ margin: '0' }}>Planes</a>
            <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '1.5rem' }}>
              <a href="#academy" className="nav-link-x" onClick={(e) => handleNavClick(e, '#academy')} style={{ margin: '0', display: 'block', marginBottom: '1rem' }}>
                <i className="fas fa-graduation-cap" style={{ marginRight: '0.5rem' }}></i> LogIA Academy
              </a>
              <a href="/soporte" className="nav-link-x" onClick={(e) => handleNavClick(e, '/soporte')} style={{ margin: '0', display: 'block', marginBottom: '1rem' }}>
                <i className="fas fa-headset" style={{ marginRight: '0.5rem' }}></i> Soporte Técnico
              </a>
              <a href="/preguntas" className="nav-link-x" onClick={(e) => handleNavClick(e, '/preguntas')} style={{ margin: '0', display: 'block', marginBottom: '1rem' }}>
                <i className="fas fa-circle-question" style={{ marginRight: '0.5rem' }}></i> Preguntas Frecuentes
              </a>
              <a href="/privacidad" className="nav-link-x" onClick={(e) => handleNavClick(e, '/privacidad')} style={{ margin: '0', display: 'block', marginBottom: '1rem' }}>
                <i className="fas fa-shield-halved" style={{ marginRight: '0.5rem' }}></i> Privacidad
              </a>
              <a href="/terminos" className="nav-link-x" onClick={(e) => handleNavClick(e, '/terminos')} style={{ margin: '0', display: 'block', marginBottom: '1rem' }}>
                <i className="fas fa-file-contract" style={{ marginRight: '0.5rem' }}></i> Términos
              </a>
              <a href="/actualizaciones" className="nav-link-x" onClick={(e) => handleNavClick(e, '/actualizaciones')} style={{ margin: '0', display: 'block' }}>
                <i className="fas fa-clock-rotate-left" style={{ marginRight: '0.5rem' }}></i> Changelog
              </a>
            </div>
            <div style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <a href="https://app.logia.lat/login/" className="btn-text" target="_blank" rel="noopener noreferrer" style={{ textAlign: 'center', padding: '0.75rem' }}>Ingresar</a>
              <a href="https://app.logia.lat/register/" className="btn-executive" target="_blank" rel="noopener noreferrer" style={{ textAlign: 'center', padding: '0.75rem 1.5rem' }}>Prueba Gratis</a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

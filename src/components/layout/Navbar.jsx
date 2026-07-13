import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '../../assets/favicon.svg';
import { SITE_CONTENT } from '../../data/siteContent';

const { navbar } = SITE_CONTENT;

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
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
    } else if (target.startsWith('/app/')) {
      navigate(target);
    } else if (target.startsWith('/')) {
      navigate(target);
    } else {
      navigate(target);
    }
  };

  const toggleDropdown = (name) => {
    setActiveDropdown(activeDropdown === name ? null : name);
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
          <a href="#modulos" className="nav-link-x" onClick={(e) => handleNavClick(e, '#modulos')}>Producto</a>

          {/* Dropdown Soluciones */}
          <div className="nav-item-dropdown">
            <span
              className="nav-link-x nav-dropdown-trigger"
              style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.3rem' }}
              onClick={() => toggleDropdown('soluciones')}
            >
              Soluciones <i className="fas fa-chevron-down" style={{ fontSize: '0.7rem', opacity: 0.6 }}></i>
            </span>
            <div className={`dropdown-menu-x ${activeDropdown === 'soluciones' ? 'active' : ''}`}>
              {navbar.solutions.map((sol) => (
                <a
                  key={sol.path}
                  href={sol.path}
                  className="dropdown-item-x"
                  onClick={(e) => handleNavClick(e, sol.path)}
                >
                  <i className={`fas ${sol.icon}`}></i> {sol.label}
                </a>
              ))}
            </div>
          </div>

          <a href="#precios" className="nav-link-x" onClick={(e) => handleNavClick(e, '#precios')}>Precios</a>

          {/* Dropdown Soporte */}
          <div className="nav-item-dropdown">
            <span
              className="nav-link-x nav-dropdown-trigger"
              style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.3rem' }}
              onClick={() => toggleDropdown('soporte')}
            >
              Soporte <i className="fas fa-chevron-down" style={{ fontSize: '0.7rem', opacity: 0.6 }}></i>
            </span>
            <div className={`dropdown-menu-x ${activeDropdown === 'soporte' ? 'active' : ''}`}>
              {navbar.support.map((sup) => (
                <a
                  key={sup.path}
                  href={sup.path}
                  className="dropdown-item-x"
                  onClick={(e) => handleNavClick(e, sup.path)}
                >
                  <i className={sup.icon}></i> {sup.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="nav-actions d-none d-lg-flex align-items-center">
          <a href={navbar.cta.login.href} className="btn-text" target="_blank" rel="noopener noreferrer">
            {navbar.cta.login.label}
          </a>
          <a href={navbar.cta.trial.href} className="btn-executive btn-trial-cta" target="_blank" rel="noopener noreferrer">
            <i className="fas fa-gift" style={{ marginRight: '0.4rem', fontSize: '0.85rem' }}></i>
            {navbar.cta.trial.label}
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="mobile-menu-btn d-lg-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{ background: 'transparent', border: 'none', color: '#fff', fontSize: '1.5rem', cursor: 'pointer' }}
        >
          <i className={mobileMenuOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="mobile-menu" style={{
          position: 'fixed', top: '0', right: '0', width: '80%', maxWidth: '350px',
          height: '100vh', background: 'rgba(15, 23, 42, 0.98)', backdropFilter: 'blur(20px)',
          zIndex: '9999', padding: '2rem', boxShadow: '-10px 0 40px rgba(0,0,0,0.5)', overflowY: 'auto'
        }}>
          <div className="d-flex justify-content-between align-items-center mb-5">
            <Link to="/" style={{ textDecoration: 'none' }}>
              <div className="brand-group">
                <img src={logo} alt="LogIA" className="logo-x" />
                <span className="brand-name">Log<span>IA</span></span>
              </div>
            </Link>
            <button onClick={() => setMobileMenuOpen(false)} style={{ background: 'transparent', border: 'none', color: '#fff', fontSize: '1.5rem', cursor: 'pointer' }}>
              <i className="fas fa-times"></i>
            </button>
          </div>

          <div className="mobile-links" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <a href="#modulos" className="nav-link-x" onClick={(e) => handleNavClick(e, '#modulos')} style={{ margin: '0', padding: '0.75rem 0' }}>Producto</a>

            {/* Mobile Soluciones */}
            <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '0.75rem' }}>
              <span
                className="nav-link-x"
                style={{ margin: '0', padding: '0.75rem 0', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
                onClick={() => toggleDropdown('soluciones-mobile')}
              >
                Soluciones <i className={`fas fa-chevron-${activeDropdown === 'soluciones-mobile' ? 'up' : 'down'}`} style={{ fontSize: '0.7rem', opacity: 0.6 }}></i>
              </span>
              {activeDropdown === 'soluciones-mobile' && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0', paddingLeft: '1rem', borderLeft: '2px solid rgba(99, 102, 241, 0.3)', marginTop: '0.25rem' }}>
                  {navbar.solutions.map((sol) => (
                    <a key={sol.path} href={sol.path} className="dropdown-item-x" onClick={(e) => handleNavClick(e, sol.path)} style={{ padding: '0.6rem 0.75rem' }}>
                      <i className={`fas ${sol.icon}`}></i> {sol.label}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <a href="#precios" className="nav-link-x" onClick={(e) => handleNavClick(e, '#precios')} style={{ margin: '0', padding: '0.75rem 0', borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '0.75rem' }}>Precios</a>

            {/* Mobile Soporte */}
            <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '0.75rem' }}>
              <span
                className="nav-link-x"
                style={{ margin: '0', padding: '0.75rem 0', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
                onClick={() => toggleDropdown('soporte-mobile')}
              >
                Soporte <i className={`fas fa-chevron-${activeDropdown === 'soporte-mobile' ? 'up' : 'down'}`} style={{ fontSize: '0.7rem', opacity: 0.6 }}></i>
              </span>
              {activeDropdown === 'soporte-mobile' && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0', paddingLeft: '1rem', borderLeft: '2px solid rgba(99, 102, 241, 0.3)', marginTop: '0.25rem' }}>
                  {navbar.support.map((sup) => (
                    <a key={sup.path} href={sup.path} className="dropdown-item-x" onClick={(e) => handleNavClick(e, sup.path)} style={{ padding: '0.6rem 0.75rem' }}>
                      <i className={sup.icon}></i> {sup.label}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <div style={{ marginTop: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <a href={navbar.cta.login.href} className="btn-text" target="_blank" rel="noopener noreferrer" style={{ textAlign: 'center', padding: '0.75rem' }}>
                {navbar.cta.login.label}
              </a>
              <a href={navbar.cta.trial.href} className="btn-executive btn-trial-cta" target="_blank" rel="noopener noreferrer" style={{ textAlign: 'center', padding: '0.75rem 1.5rem' }}>
                <i className="fas fa-gift" style={{ marginRight: '0.4rem' }}></i>
                {navbar.cta.trial.label}
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

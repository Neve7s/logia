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
        <Link to="/" className="nav-brand-link nav-brand-link--reset">
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
                className="nav-link-x nav-dropdown-trigger nav-dropdown-trigger--desktop"
                onClick={() => toggleDropdown('soluciones')}
              >
                Soluciones <i className="fas fa-chevron-down nav-dropdown-chevron"></i>
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
                className="nav-link-x nav-dropdown-trigger nav-dropdown-trigger--desktop"
                onClick={() => toggleDropdown('soporte')}
              >
                Soporte <i className="fas fa-chevron-down nav-dropdown-chevron"></i>
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
            <i className="fas fa-gift nav-trial-icon"></i>
            {navbar.cta.trial.label}
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="mobile-menu-btn d-lg-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <i className={mobileMenuOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="mobile-menu">
          <div className="mobile-menu-header">
            <Link to="/" className="nav-brand-link">
              <div className="brand-group">
                <img src={logo} alt="LogIA" className="logo-x" />
                <span className="brand-name">Log<span>IA</span></span>
              </div>
            </Link>
            <button className="mobile-menu-close" onClick={() => setMobileMenuOpen(false)}>
              <i className="fas fa-times"></i>
            </button>
          </div>

          <div className="mobile-links">
            <a href="#modulos" className="nav-link-x" onClick={(e) => handleNavClick(e, '#modulos')}>Producto</a>

            {/* Mobile Soluciones */}
            <div className="nav-link-with-border">
              <span className="mobile-dropdown-trigger nav-link-x" onClick={() => toggleDropdown('soluciones-mobile')}>
                Soluciones <i className={`fas fa-chevron-${activeDropdown === 'soluciones-mobile' ? 'up' : 'down'} nav-dropdown-chevron`}></i>
              </span>
              {activeDropdown === 'soluciones-mobile' && (
                <div className="mobile-dropdown-submenu">
                  {navbar.solutions.map((sol) => (
                    <a key={sol.path} href={sol.path} className="dropdown-item-x" onClick={(e) => handleNavClick(e, sol.path)}>
                      <i className={`fas ${sol.icon}`}></i> {sol.label}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <a href="#precios" className="nav-link-x nav-link-with-border" onClick={(e) => handleNavClick(e, '#precios')}>Precios</a>

            {/* Mobile Soporte */}
            <div className="nav-link-with-border">
              <span className="mobile-dropdown-trigger nav-link-x" onClick={() => toggleDropdown('soporte-mobile')}>
                Soporte <i className={`fas fa-chevron-${activeDropdown === 'soporte-mobile' ? 'up' : 'down'} nav-dropdown-chevron`}></i>
              </span>
              {activeDropdown === 'soporte-mobile' && (
                <div className="mobile-dropdown-submenu">
                  {navbar.support.map((sup) => (
                    <a key={sup.path} href={sup.path} className="dropdown-item-x" onClick={(e) => handleNavClick(e, sup.path)}>
                      <i className={sup.icon}></i> {sup.label}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <div className="mobile-menu-footer">
              <a href={navbar.cta.login.href} className="btn-text" target="_blank" rel="noopener noreferrer">
                {navbar.cta.login.label}
              </a>
              <a href={navbar.cta.trial.href} className="btn-executive btn-trial-cta" target="_blank" rel="noopener noreferrer">
            <i className="fas fa-gift nav-trial-icon"></i>
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

import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '../../assets/favicon.svg';
import { SITE_CONTENT } from '../../data/siteContent';

const { navbar } = SITE_CONTENT;

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [appsOpen, setAppsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const closeButtonRef = useRef(null);
  const menuButtonRef = useRef(null);
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
    setAppsOpen(false);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!event.target.closest('.nav-item-dropdown') && !event.target.closest('.mega-panel')) {
        setActiveDropdown(null);
      }
      if (!event.target.closest('.nav-apps')) {
        setAppsOpen(false);
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        const hadMenu = Boolean(document.getElementById('mobile-menu'));
        setActiveDropdown(null);
        setAppsOpen(false);
        setMobileMenuOpen(false);
        if (hadMenu) {
          window.setTimeout(() => menuButtonRef.current?.focus(), 0);
        }
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  useEffect(() => {
    if (!mobileMenuOpen) return undefined;

    const handleTabKey = (event) => {
      if (event.key !== 'Tab') return;

      const menu = document.getElementById('mobile-menu');
      if (!menu) return;

      const focusable = [...menu.querySelectorAll('a[href], button:not([disabled])')]
        .filter((element) => element.offsetParent !== null);

      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', handleTabKey);
    return () => document.removeEventListener('keydown', handleTabKey);
  }, [mobileMenuOpen]);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    if (mobileMenuOpen) {
      closeButtonRef.current?.focus();
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const closeMenus = () => {
    const wasOpen = mobileMenuOpen;
    setMobileMenuOpen(false);
    setActiveDropdown(null);
    setAppsOpen(false);
    if (wasOpen) {
      window.setTimeout(() => menuButtonRef.current?.focus(), 0);
    }
  };

  const goToSection = (target) => {
    closeMenus();

    if (!target.startsWith('#')) {
      navigate(target);
      return;
    }

    if (isHomePage) {
      const element = document.querySelector(target);
      if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      navigate('/', { state: { scrollTo: target } });
    }
  };

  const toggleDropdown = (name) => {
    setActiveDropdown((current) => (current === name ? null : name));
  };

  const isSolutionsActive = location.pathname.startsWith('/app/');
  const isServiciosActive = location.pathname === '/servicios';
  const isSupportActive = ['/soporte', '/preguntas', '/academy', '/actualizaciones'].includes(location.pathname);

  const resources = [
    { group: 'Ayuda', icon: 'fas fa-headset', label: 'Soporte técnico', path: '/soporte' },
    { group: 'Ayuda', icon: 'fas fa-circle-question', label: 'Preguntas frecuentes', path: '/preguntas' },
    { group: 'Ayuda', icon: 'fas fa-envelope', label: 'Contacto', path: '/soporte' },
    { group: 'Aprendizaje', icon: 'fas fa-graduation-cap', label: 'Academy', path: '/academy' },
    { group: 'Aprendizaje', icon: 'fas fa-play', label: 'Tutoriales', path: '/tutoriales' },
    { group: 'Aprendizaje', icon: 'fas fa-laptop-code', label: 'Demo interactiva', path: 'https://demo.logia.lat', external: true },
    { group: 'Aprendizaje', icon: 'fas fa-clock-rotate-left', label: 'Actualizaciones', path: '/actualizaciones' },
    { group: 'Empresa', icon: 'fas fa-building', label: 'Sobre nosotros', path: '/#nosotros' },
    { group: 'Empresa', icon: 'fas fa-tags', label: 'Planes', path: '/#precios' },
    { group: 'Empresa', icon: 'fas fa-briefcase', label: '¿Buscas empleo?', path: 'https://app.logia.lat/recruitment/empleos/', external: true },
  ];

  const productGroups = ['Comercial', 'Operaciones', 'Gestión'].map((title) => ({
    title,
    items: navbar.solutions.filter((solution) => solution.group === title),
  }));

  const resourceGroups = ['Ayuda', 'Aprendizaje', 'Empresa'].map((title) => ({
    title,
    items: resources.filter((resource) => resource.group === title),
  }));

  return (
    <>
      <a href="#main-content" className="skip-link">Saltar al contenido principal</a>
      <nav className={`nav-premium ${scrolled ? 'scrolled' : ''}`} aria-label="Navegación principal">
        <div className="container-x d-flex align-items-center justify-content-between h-100">
          <Link to="/" className="nav-brand-link nav-brand-link--reset" aria-label="LogIA, ir al inicio">
            <div className="brand-group">
              <img src={logo} alt="" className="logo-x" />
              <span className="brand-name">Log<span>IA</span></span>
            </div>
          </Link>

          {/* Desktop menu: Productos · Planes · Recursos */}
          <div className="nav-links d-none d-lg-flex align-items-center">
            <div className="nav-item-dropdown">
              <button
                type="button"
                className={`nav-link-x nav-dropdown-trigger nav-dropdown-trigger--desktop ${isSolutionsActive ? 'is-active' : ''}`}
                onClick={() => toggleDropdown('productos')}
                aria-expanded={activeDropdown === 'productos'}
                aria-haspopup="true"
              >
                Productos <i className="fas fa-chevron-down nav-dropdown-chevron" aria-hidden="true"></i>
              </button>
            </div>

            <Link
              to="/servicios"
              className={`nav-link-x ${isServiciosActive ? 'is-active' : ''}`}
            >
              Servicios
            </Link>

            <a
              href="#precios"
              className="nav-link-x"
              onClick={(e) => {
                e.preventDefault();
                goToSection('#precios');
              }}
            >
              Planes
            </a>

            <div className="nav-item-dropdown">
              <button
                type="button"
                className={`nav-link-x nav-dropdown-trigger nav-dropdown-trigger--desktop ${isSupportActive ? 'is-active' : ''}`}
                onClick={() => toggleDropdown('recursos')}
                aria-expanded={activeDropdown === 'recursos'}
                aria-haspopup="true"
              >
                Recursos <i className="fas fa-chevron-down nav-dropdown-chevron" aria-hidden="true"></i>
              </button>
            </div>
          </div>

          <div className="nav-actions d-none d-lg-flex align-items-center">
            <div className="nav-apps">
              <button
                type="button"
                className="nav-apps-btn"
                aria-expanded={appsOpen}
                aria-controls="nav-apps-panel"
                aria-label="Aplicaciones de LogIA"
                onClick={() => setAppsOpen((open) => !open)}
              >
                <i className="fas fa-grip" aria-hidden="true"></i>
              </button>

              {appsOpen && (
                <div className="nav-apps-panel" id="nav-apps-panel">
                  <p className="nav-apps-title">Aplicaciones</p>
                  <div className="nav-apps-grid">
                    {navbar.solutions.map((solution) => (
                      <Link
                        key={`${solution.path}-${solution.label}`}
                        to={solution.path}
                        className="nav-app-tile"
                        onClick={closeMenus}
                      >
                        <span className="nav-app-icon">
                          <i className={`fas ${solution.icon}`} aria-hidden="true"></i>
                        </span>
                        <span className="nav-app-label">{solution.label}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <a
              href={navbar.cta.login.href}
              className="btn-nav-login"
              target="_blank"
              rel="noopener noreferrer"
            >
              {navbar.cta.login.label}
            </a>
          </div>

          <button
            type="button"
            ref={menuButtonRef}
            className="mobile-menu-btn d-lg-none"
            onClick={() => setMobileMenuOpen((open) => !open)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            <i className={mobileMenuOpen ? 'fas fa-times' : 'fas fa-bars'} aria-hidden="true"></i>
          </button>
        </div>

        {/* Mega menu: Productos */}
        <div className={`mega-panel ${activeDropdown === 'productos' ? 'active' : ''}`}>
          <div className="mega-inner">
            <div className="mega-columns">
              {productGroups.map((group) => (
                <div className="mega-col" key={group.title}>
                  <h3>{group.title}</h3>
                  <ul>
                    {group.items.map((item) => (
                      <li key={item.label}>
                        <Link to={item.path} onClick={closeMenus}>
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="mega-footer">
              <div className="mega-actions">
                <a
                  href="#producto"
                  className="mega-action"
                  onClick={(event) => {
                    event.preventDefault();
                    goToSection('#producto');
                  }}
                >
                  Ver todos los módulos <i className="fas fa-arrow-right" aria-hidden="true"></i>
                </a>
                <Link to="/servicios" className="mega-action" onClick={closeMenus}>
                  Desarrollo a medida <i className="fas fa-arrow-right" aria-hidden="true"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Mega menu: Recursos */}
        <div className={`mega-panel ${activeDropdown === 'recursos' ? 'active' : ''}`}>
          <div className="mega-inner">
            <div className="mega-columns">
              {resourceGroups.map((group) => (
                <div className="mega-col" key={group.title}>
                  <h3>{group.title}</h3>
                  <ul>
                    {group.items.map((item) => (
                      <li key={item.label}>
                        {item.external ? (
                          <a href={item.path} target="_blank" rel="noopener noreferrer">
                            {item.label}
                          </a>
                        ) : (
                          <Link to={item.path} onClick={closeMenus}>
                            {item.label}
                          </Link>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="mega-footer">
              <Link to="/soporte" className="mega-action" onClick={closeMenus}>
                Ir al centro de soporte <i className="fas fa-arrow-right" aria-hidden="true"></i>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {mobileMenuOpen && (
        <>
          <button
            type="button"
            className="mobile-menu-backdrop"
            aria-label="Cerrar menú"
            onClick={closeMenus}
          />
          <div className="mobile-menu" id="mobile-menu" role="dialog" aria-modal="true" aria-label="Menú de navegación">
            <div className="mobile-menu-header">
              <Link to="/" className="nav-brand-link" onClick={closeMenus}>
                <div className="brand-group">
                  <img src={logo} alt="" className="logo-x" />
                  <span className="brand-name">Log<span>IA</span></span>
                </div>
              </Link>
              <button
                type="button"
                className="mobile-menu-close"
                onClick={closeMenus}
                ref={closeButtonRef}
                aria-label="Cerrar menú"
              >
                <i className="fas fa-times" aria-hidden="true"></i>
              </button>
            </div>

            <div className="mobile-links">
              <div className="nav-link-with-border">
                <button
                  type="button"
                  className="mobile-dropdown-trigger nav-link-x"
                  onClick={() => toggleDropdown('productos-mobile')}
                  aria-expanded={activeDropdown === 'productos-mobile'}
                >
                  Productos
                  <i className={`fas fa-chevron-${activeDropdown === 'productos-mobile' ? 'up' : 'down'} nav-dropdown-chevron`} aria-hidden="true"></i>
                </button>
                {activeDropdown === 'productos-mobile' && (
                  <div className="mobile-dropdown-submenu">
                    {navbar.solutions.map((sol) => (
                      <Link
                        key={`${sol.path}-${sol.label}`}
                        to={sol.path}
                        className="dropdown-item-x"
                        onClick={closeMenus}
                      >
                        <i className={`fas ${sol.icon}`} aria-hidden="true"></i> {sol.label}
                      </Link>
                    ))}
                    <a
                      href="#producto"
                      className="dropdown-item-x"
                      onClick={(event) => {
                        event.preventDefault();
                        goToSection('#producto');
                      }}
                    >
                      <i className="fas fa-layer-group" aria-hidden="true"></i> Ver todos los módulos
                    </a>
                  </div>
                )}
              </div>

              <Link
                to="/servicios"
                className="nav-link-x nav-link-with-border"
                onClick={closeMenus}
              >
                Servicios
              </Link>

              <a
                href="#precios"
                className="nav-link-x nav-link-with-border"
                onClick={(e) => {
                  e.preventDefault();
                  goToSection('#precios');
                }}
              >
                Planes
              </a>

              <div className="nav-link-with-border">
                <button
                  type="button"
                  className="mobile-dropdown-trigger nav-link-x"
                  onClick={() => toggleDropdown('recursos-mobile')}
                  aria-expanded={activeDropdown === 'recursos-mobile'}
                >
                  Recursos
                  <i className={`fas fa-chevron-${activeDropdown === 'recursos-mobile' ? 'up' : 'down'} nav-dropdown-chevron`} aria-hidden="true"></i>
                </button>
                {activeDropdown === 'recursos-mobile' && (
                  <div className="mobile-dropdown-submenu">
                    {resources.map((resource) => (
                      resource.external ? (
                        <a
                          key={resource.label}
                          href={resource.path}
                          className="dropdown-item-x"
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={closeMenus}
                        >
                          <i className={resource.icon} aria-hidden="true"></i> {resource.label}
                        </a>
                      ) : (
                        <Link
                          key={resource.label}
                          to={resource.path}
                          className="dropdown-item-x"
                          onClick={closeMenus}
                        >
                          <i className={resource.icon} aria-hidden="true"></i> {resource.label}
                        </Link>
                      )
                    ))}
                  </div>
                )}
              </div>

              <div className="mobile-menu-footer">
                <a href={navbar.cta.login.href} className="btn-text" target="_blank" rel="noopener noreferrer">
                  {navbar.cta.login.label}
                </a>
                <a href={navbar.cta.trial.href} className="btn-executive btn-trial-cta" target="_blank" rel="noopener noreferrer">
                  {navbar.cta.trial.label}
                </a>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Navbar;

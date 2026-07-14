import React from 'react';
import PageLayout from '../../components/layout/PageLayout';
import img from '../../assets/ecosistema/commu.jpg';

const Mailer = () => {
  return (
    <PageLayout title="Comunicaciones" tagline="Correos corporativos que impactan" fullWidth={true}>
      <div className="app-page">

        <div className="row align-items-center g-5 mb-5">
          <div className="col-lg-6">
            <div className="app-page-badge">
              <i className="fas fa-paper-plane"></i> Módulo de Comunicaciones
            </div>
            <h2 className="app-page-title">
              Correos profesionales que <span className="text-highlight">abren puertas</span>
            </h2>
            <p className="app-page-subtitle">
              Presenta tu agencia a prospectos con correos corporativos que impactan. 
              Envía emails masivos para eventos, saludos y promociones. Tu imagen profesional habla por ti antes de que hables.
            </p>
            <div className="app-page-metric">
              <div className="app-page-metric-icon"><i className="fas fa-bolt"></i></div>
              <div>
                <div className="app-page-metric-value">Impacto profesional</div>
                <div className="app-page-metric-label">Correos que generan confianza y oportunidades</div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="app-page-image">
              <img src={img} alt="Comunicaciones" className="img-fluid rounded-4" />
              <div className="app-page-image-tag">Comunicaciones — Panel de Emails</div>
            </div>
          </div>
        </div>

        <div className="app-page-section">
          <div className="app-page-problem-card">
            <div className="app-page-problem-header">
              <i className="fas fa-exclamation-triangle"></i>
              <h3>El problema que enfrentas todos los días</h3>
            </div>
            <div className="row g-4">
              <div className="col-md-4">
                <div className="app-page-pain-item">
                  <div className="app-page-pain-item-header">
                    <i className="fas fa-user-tie"></i>
                    <h4>Presentaciones poco profesionales</h4>
                  </div>
                  <p>Envías correos genéricos sin personalizar. El prospecto recibe tu email junto a otros 50 y no destaca.</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="app-page-pain-item">
                  <div className="app-page-pain-item-header">
                    <i className="fas fa-calendar-days"></i>
                    <h4>Sin comunicación en fechas clave</h4>
                  </div>
                  <p>Se te pasa saludar el Día del Padre, Madre, Trabajador. Tus clientes se sienten olvidados.</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="app-page-pain-item">
                  <div className="app-page-pain-item-header">
                    <i className="fas fa-clock"></i>
                    <h4>Correos uno por uno</h4>
                  </div>
                  <p>Escribes cada correo manualmente. No tienes tiempo para saludar a 200 clientes uno por uno.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="app-page-section">
          <h3 className="app-page-section-title">
            <i className="fas fa-check-circle"></i> Cómo Comunicaciones resuelve esto
          </h3>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="app-page-feature-card">
                <div className="app-page-feature-card-header">
                  <div className="app-page-feature-icon"><i className="fas fa-pen-fancy"></i></div>
                  <h4>Correos de prospección</h4>
                </div>
                <p>Plantillas profesionales para presentar tu agencia a nuevas empresas. Personaliza con logo, servicios y propuesta de valor.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="app-page-feature-card">
                <div className="app-page-feature-card-header">
                  <div className="app-page-feature-icon"><i className="fas fa-bullhorn"></i></div>
                  <h4>Emails masivos para eventos</h4>
                </div>
                <p>Saluda a tus clientes en el Día del Padre, Madre, Trabajador o cualquier fecha clave. Un correo masivo, cientos de sonrisas.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="app-page-feature-card">
                <div className="app-page-feature-card-header">
                  <div className="app-page-feature-icon"><i className="fas fa-wand-magic-sparkles"></i></div>
                  <h4>Templates con tu marca</h4>
                </div>
                <p>Diseños profesionales con los colores y logo de tu agencia. Cada correo es una tarjeta de presentación.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="app-page-feature-card">
                <div className="app-page-feature-card-header">
                  <div className="app-page-feature-icon"><i className="fas fa-users"></i></div>
                  <h4>Segmentación inteligente</h4>
                </div>
                <p>Envía correos segmentados por cliente, zona, servicio o estado. Cada mensaje llega a quien realmente le importa.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="app-page-cta text-center">
          <h3>¿Listo para que tus correos abran puertas?</h3>
          <p>14 días de prueba gratuita. Sin tarjeta de crédito.</p>
          <a href="https://app.logia.lat/register/company/" className="btn-executive-large" target="_blank" rel="noopener noreferrer">
            <i className="fas fa-rocket" style={{ marginRight: '0.5rem' }}></i> Empezar Gratis
          </a>
        </div>

      </div>
    </PageLayout>
  );
};

export default Mailer;

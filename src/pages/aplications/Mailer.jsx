import React from 'react';
import PageLayout from '../../components/layout/PageLayout';

const Mailer = () => {
  return (
    <PageLayout title="Comunicaciones Masivas" tagline="Emails profesionales automatizados">
      <div className="app-page">

        <div className="row align-items-center g-5 mb-5">
          <div className="col-lg-6">
            <div className="app-page-badge">
              <i className="fas fa-paper-plane"></i> Módulo de Comunicaciones
            </div>
            <h2 className="app-page-title">
              Envía correos profesionales que <span className="text-highlight">generan confianza</span>
            </h2>
            <p className="app-page-subtitle">
              Enviar un Aviso de Llegada o una cotización por WhatsApp no es profesional. 
              Pero escribir correos uno por uno toma tiempo que tu equipo no tiene.
            </p>
            <div className="app-page-metric">
              <div className="app-page-metric-icon"><i className="fas fa-bolt"></i></div>
              <div>
                <div className="app-page-metric-value">De 10 min a envío automático</div>
                <div className="app-page-metric-label">Tiempo para comunicar al cliente</div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="app-page-image-placeholder" style={{
              background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(139, 92, 246, 0.1))',
              border: '1px solid rgba(99, 102, 241, 0.2)',
              borderRadius: '20px',
              padding: '4rem 2rem',
              textAlign: 'center'
            }}>
              <i className="fas fa-paper-plane" style={{ fontSize: '4rem', color: 'var(--accent-indigo)', opacity: 0.5 }}></i>
              <p style={{ color: 'var(--text-muted)', marginTop: '1rem' }}>Comunicaciones Masivas — Panel</p>
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
                  <i className="fas fa-clock"></i>
                  <h4>Correos uno por uno</h4>
                  <p>Cada aviso de llegada, cada recordatorio de pago, cada actualización... escribes el correo manualmente para cada cliente.</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="app-page-pain-item">
                  <i className="fas fa-palette"></i>
                  <h4>Sin diseño profesional</h4>
                  <p>Un correo en texto plano no genera confianza. Los clientes esperan algo con logo, colores y formato profesional.</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="app-page-pain-item">
                  <i className="fas fa-chart-bar"></i>
                  <h4>Sin métricas</h4>
                  <p>No sabes si el cliente abrió el correo, si hizo clic en algún link, o si el correo llegó correctamente.</p>
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
            <div className="col-md-6">
              <div className="app-page-feature-card">
                <div className="app-page-feature-icon"><i className="fas fa-wand-magic-sparkles"></i></div>
                <h4>Templates profesionales</h4>
                <p>Plantillas prediseñadas con logo, colores de tu empresa y formato profesional. Solo seleccionas la plantilla y envías.</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="app-page-feature-card">
                <div className="app-page-feature-icon"><i className="fas fa-robot"></i></div>
                <h4>Envío automático</h4>
                <p>Cuando una cotización se aprueba o una carga llega, el sistema envía el correo automáticamente al cliente.</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="app-page-feature-card">
                <div className="app-page-feature-icon"><i className="fas fa-users"></i></div>
                <h4>Envío masivo segmentado</h4>
                <p>Envía el mismo correo a cientos de clientes segmentados por zona, servicio o estado. Un clic, cientos de correos.</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="app-page-feature-card">
                <div className="app-page-feature-icon"><i className="fas fa-chart-line"></i></div>
                <h4>Métricas de apertura</h4>
                <p>Sabes quién abrió el correo, quién hizo clic en el link, y si el correo llegó correctamente. Datos para mejorar.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="app-page-cta text-center">
          <h3>¿Listo para automatizar tus comunicaciones?</h3>
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

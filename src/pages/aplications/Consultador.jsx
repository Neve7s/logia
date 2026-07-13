import React from 'react';
import PageLayout from '../../components/layout/PageLayout';

const Consultador = () => {
  return (
    <PageLayout title="Consultador de Oportunidades" tagline="Encuentra oportunidades antes que tu competencia" fullWidth={true}>
      <div className="app-page">

        <div className="row align-items-center g-5 mb-5">
          <div className="col-lg-6">
            <div className="app-page-badge">
              <i className="fas fa-binoculars"></i> Módulo de Inteligencia
            </div>
            <h2 className="app-page-title">
              Detecta oportunidades de negocio <span className="text-highlight">antes que todos</span>
            </h2>
            <p className="app-page-subtitle">
              En la logística, la velocidad importa. Si tu competencia ya cotizó antes que tú, perdiste la oportunidad. 
              El Consultador te da información en tiempo real para actuar primero.
            </p>
            <div className="app-page-metric">
              <div className="app-page-metric-icon"><i className="fas fa-bolt"></i></div>
              <div>
                <div className="app-page-metric-value">Información en tiempo real</div>
                <div className="app-page-metric-label">Actúa antes que tu competencia</div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="app-page-image-placeholder" style={{
              background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(6, 182, 212, 0.1))',
              border: '1px solid rgba(16, 185, 129, 0.2)',
              borderRadius: '20px',
              padding: '4rem 2rem',
              textAlign: 'center'
            }}>
              <i className="fas fa-binoculars" style={{ fontSize: '4rem', color: '#10b981', opacity: 0.5 }}></i>
              <p style={{ color: 'var(--text-muted)', marginTop: '1rem' }}>Consultador — Panel de Oportunidades</p>
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
                  <i className="fas fa-eye"></i>
                  <h4>Sin visibilidad del mercado</h4>
                  <p>No sabes qué está importando o exportando tu prospecto. Cotizas a ciegas sin saber el volumen real.</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="app-page-pain-item">
                  <i className="fas fa-stopwatch"></i>
                  <h4>Lento para reaccionar</h4>
                  <p>Enteraste de una oportunidad cuando ya la tenía tu competencia. La velocidad de respuesta lo es todo.</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="app-page-pain-item">
                  <i className="fas fa-database"></i>
                  <h4>Datos dispersos</h4>
                  <p>La información de importaciones/exportaciones está en portales gubernamentales, hard to access y harder to分析.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="app-page-section">
          <h3 className="app-page-section-title">
            <i className="fas fa-check-circle"></i> Cómo el Consultador resuelve esto
          </h3>
          <div className="row g-4">
            <div className="col-md-6">
              <div className="app-page-feature-card">
                <div className="app-page-feature-icon"><i className="fas fa-magnifying-glass-chart"></i></div>
                <h4>Búsqueda de oportunidades</h4>
                <p>Encuentra empresas que están importando o exportando productos específicos. Filtra por país, producto, volumen y frecuencia.</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="app-page-feature-card">
                <div className="app-page-feature-icon"><i className="fas fa-clock"></i></div>
                <h4>Alertas en tiempo real</h4>
                <p>Recibe notificaciones cuando una empresa relevante realiza una nueva operación. Sé el primero en contactar.</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="app-page-feature-card">
                <div className="app-page-feature-icon"><i className="fas fa-file-lines"></i></div>
                <h4>Declaraciones aduaneras</h4>
                <p>Accede a información de declaraciones de importación y exportación. Volumen, producto, origen, destino y valor.</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="app-page-feature-card">
                <div className="app-page-feature-icon"><i className="fas fa-link"></i></div>
                <h4>Integración con Cotizador</h4>
                <p>Encontraste una oportunidad. Un clic la convierte en una cotización lista para enviar al prospecto.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="app-page-cta text-center">
          <h3>¿Listo para encontrar oportunidades antes que tu competencia?</h3>
          <p>14 días de prueba gratuita. Sin tarjeta de crédito.</p>
          <a href="https://app.logia.lat/register/company/" className="btn-executive-large" target="_blank" rel="noopener noreferrer">
            <i className="fas fa-rocket" style={{ marginRight: '0.5rem' }}></i> Empezar Gratis
          </a>
        </div>

      </div>
    </PageLayout>
  );
};

export default Consultador;

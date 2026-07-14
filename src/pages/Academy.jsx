import React from 'react';
import PageLayout from '../components/layout/PageLayout';

const Academy = () => {
  return (
    <PageLayout title="LogIA Academy" tagline="Domina el Sistema" fullWidth={true}>
      <div className="app-page">

        <div className="app-page-section">
          <p className="app-page-subtitle" style={{ maxWidth: '800px' }}>
            Capacitación continua con videos guía de cada módulo. Onboarding inmediato para tu equipo sin costos adicionales.
            Aprende a usar cada herramienta del ecosistema LogIA a tu ritmo.
          </p>
        </div>

        {/* Módulos de Capacitación */}
        <div className="app-page-section">
          <h3 className="app-page-section-title">
            <i className="fas fa-play-circle"></i> Módulos de Capacitación
          </h3>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="app-page-feature-card">
                <div className="app-page-feature-card-header">
                  <div className="app-page-feature-icon"><i className="fas fa-calculator"></i></div>
                  <h4>Cotizador Pro</h4>
                </div>
                <p>Aprende a crear cotizaciones profesionales, configurar tarifas, calcular costos automáticamente y generar PDFs con tu marca.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="app-page-feature-card">
                <div className="app-page-feature-card-header">
                  <div className="app-page-feature-icon"><i className="fas fa-box-open"></i></div>
                  <h4>Shipments Control</h4>
                </div>
                <p>Domina el control de cargas, actualización de estados, generación de Avisos de Llegada y el dashboard visual de operaciones.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="app-page-feature-card">
                <div className="app-page-feature-card-header">
                  <div className="app-page-feature-icon"><i className="fas fa-file-invoice"></i></div>
                  <h4>Facturación SUNAT</h4>
                </div>
                <p>Emite facturas, boletas y notas de crédito electrónicas. Configura tu conexión OSE/PSE y cumple con SUNAT sin errores.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="app-page-feature-card">
                <div className="app-page-feature-card-header">
                  <div className="app-page-feature-icon"><i className="fas fa-database"></i></div>
                  <h4>Infraestructura Masters</h4>
                </div>
                <p>Configura clientes, proveedores, navieras, puertos y servicios. Mantén tu base de datos siempre actualizada y organizada.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="app-page-feature-card">
                <div className="app-page-feature-card-header">
                  <div className="app-page-feature-icon"><i className="fas fa-user-tie"></i></div>
                  <h4>Reclutamiento ATS</h4>
                </div>
                <p>Publica convocatorias, gestiona postulantes y conviértelos en empleados activos con el flujo visual Kanban.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="app-page-feature-card">
                <div className="app-page-feature-card-header">
                  <div className="app-page-feature-icon"><i className="fas fa-paper-plane"></i></div>
                  <h4>Comunicaciones</h4>
                </div>
                <p>Envía correos profesionales masivos a clientes y equipo. Configura plantillas y automatiza el seguimiento.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Flujo de Aprendizaje */}
        <div className="app-page-section">
          <h3 className="app-page-section-title">
            <i className="fas fa-route"></i> Flujo de Aprendizaje
          </h3>
          <div className="app-page-workflow">
            <div className="app-page-workflow-step">
              <div className="app-page-workflow-number">1</div>
              <div className="app-page-workflow-content">
                <h4>Observa el video guía</h4>
                <p>Cada módulo tiene un video tutorial paso a paso que explica todo lo que necesitas saber.</p>
              </div>
            </div>
            <div className="app-page-workflow-step">
              <div className="app-page-workflow-number">2</div>
              <div className="app-page-workflow-content">
                <h4>Practica en tu entorno</h4>
                <p>Abre LogIA en otra pestaña y reproduce los pasos en tu propia cuenta de prueba.</p>
              </div>
            </div>
            <div className="app-page-workflow-step">
              <div className="app-page-workflow-number">3</div>
              <div className="app-page-workflow-content">
                <h4>Consulta la documentación</h4>
                <p>Si tienes dudas, revisa las preguntas frecuentes o contacta al soporte técnico.</p>
              </div>
            </div>
            <div className="app-page-workflow-step">
              <div className="app-page-workflow-number">4</div>
              <div className="app-page-workflow-content">
                <h4>Opera con confianza</h4>
                <p>Una vez domines el módulo, úsalo en producción con tu equipo y clientes reales.</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="app-page-cta text-center">
          <h3>¿Listo para capacitar a tu equipo?</h3>
          <p>Accede a Academy sin costo adicional con tu suscripción.</p>
          <a href="https://app.logia.lat/login/" className="btn-executive-large" target="_blank" rel="noopener noreferrer">
            <i className="fas fa-rocket" style={{ marginRight: '0.5rem' }}></i> Acceder a LogIA
          </a>
        </div>

      </div>
    </PageLayout>
  );
};

export default Academy;

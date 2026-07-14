import React from 'react';
import PageLayout from '../../components/layout/PageLayout';
import img from '../../assets/ecosistema/kpi.webp';

const Configuracion = () => {
  return (
    <PageLayout title="Métricas & Config" tagline="Control total de tu agencia" fullWidth={true}>
      <div className="app-page">

        <div className="row align-items-center g-5 mb-5">
          <div className="col-lg-6">
            <div className="app-page-badge">
              <i className="fas fa-chart-line"></i> Módulo Gerencial
            </div>
            <h2 className="app-page-title">
              Toma decisiones con datos, <span className="text-highlight">no con intuición</span>
            </h2>
            <p className="app-page-subtitle">
              Sin métricas claras, la gerencia no sabe qué vende más, qué empleado rinde mejor ni dónde están las fugas de dinero.
              Cada día sin datos es una decisión equivocada.
            </p>
            <div className="app-page-metric">
              <div className="app-page-metric-icon"><i className="fas fa-bolt"></i></div>
              <div>
                <div className="app-page-metric-value">100% visibilidad</div>
                <div className="app-page-metric-label">KPIs de ventas, productividad y rentabilidad</div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="app-page-image">
              <img src={img} alt="Métricas & Config" className="img-fluid rounded-4" />
              <div className="app-page-image-tag">Dashboard Ejecutivo — KPIs en Tiempo Real</div>
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
                    <i className="fas fa-eye-slash"></i>
                    <h4>Sin visibilidad</h4>
                  </div>
                  <p>No sabes cuánto vende cada vendedor, cuánto tiempo toma cada operación ni dónde se están perdiendo clientes.</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="app-page-pain-item">
                  <div className="app-page-pain-item-header">
                    <i className="fas fa-file-invoice"></i>
                    <h4>Documentos genéricos</h4>
                  </div>
                  <p>Cotizaciones y documentos sin branding profesional. Cada empleado genera documentos diferentes, sin estándar.</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="app-page-pain-item">
                  <div className="app-page-pain-item-header">
                    <i className="fas fa-user-shield"></i>
                    <h4>Sin control de acceso</h4>
                  </div>
                  <p>Todos ven todo. No hay permisos por rol. Un vendedor puede ver datos de otro o modificar configuraciones críticas.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="app-page-section">
          <h3 className="app-page-section-title">
            <i className="fas fa-check-circle"></i> Cómo Métricas & Config resuelve esto
          </h3>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="app-page-feature-card">
                <div className="app-page-feature-card-header">
                  <div className="app-page-feature-icon"><i className="fas fa-chart-bar"></i></div>
                  <h4>KPIs de ventas y productividad</h4>
                </div>
                <p>Dashboard con métricas en tiempo real: cotizaciones generadas, aprobación promedio, rendimiento por vendedor y comparativas mensuales.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="app-page-feature-card">
                <div className="app-page-feature-card-header">
                  <div className="app-page-feature-icon"><i className="fas fa-palette"></i></div>
                  <h4>Personalización de documentos</h4>
                </div>
                <p>Configura firmas, logotipos, colores y plantillas. Todos los documentos de la agencia tienen un formato profesional y consistente.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="app-page-feature-card">
                <div className="app-page-feature-card-header">
                  <div className="app-page-feature-icon"><i className="fas fa-users-gear"></i></div>
                  <h4>Gestión de usuarios y permisos</h4>
                </div>
                <p>Roles personalizados: Admin, Gerente, Vendedor, Operaciones. Cada uno ve solo lo que necesita. Control total sobre quién accede a qué.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="app-page-feature-card">
                <div className="app-page-feature-card-header">
                  <div className="app-page-feature-icon"><i className="fas fa-shield-halved"></i></div>
                  <h4>Datos protegidos y separados</h4>
                </div>
                <p>Tu información está completamente aislada. Respaldo automático diario. Cumplimiento con estándares de seguridad bancaria.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="app-page-cta text-center">
          <h3>¿Listo para controlar tu agencia con datos reales?</h3>
          <p>14 días de prueba gratuita. Sin tarjeta de crédito.</p>
          <a href="https://app.logia.lat/register/company/" className="btn-executive-large" target="_blank" rel="noopener noreferrer">
            <i className="fas fa-rocket" style={{ marginRight: '0.5rem' }}></i> Empezar Gratis
          </a>
        </div>

      </div>
    </PageLayout>
  );
};

export default Configuracion;

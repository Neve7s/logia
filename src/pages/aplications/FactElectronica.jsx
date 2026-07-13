import React from 'react';
import PageLayout from '../../components/layout/PageLayout';
import img from '../../assets/ecosistema/fiannza1.webp';

const FactElectronica = () => {
  return (
    <PageLayout title="Facturación SUNAT" tagline="Cumplimiento fiscal automático" fullWidth={true}>
      <div className="app-page">

        <div className="row align-items-center g-5 mb-5">
          <div className="col-lg-6">
            <div className="app-page-badge">
              <i className="fas fa-file-invoice"></i> Módulo Financiero
            </div>
            <h2 className="app-page-title">
              Emite comprobantes electrónicos <span className="text-highlight">aprobados por SUNAT</span>
            </h2>
            <p className="app-page-subtitle">
              La facturación manual con SUNAT es lenta, propensa a errores y genera multas por incumplimiento. 
              Un error en el RUC, en el monto o en la detracción puede costar miles en sanciones.
            </p>
            <div className="app-page-metric">
              <div className="app-page-metric-icon"><i className="fas fa-bolt"></i></div>
              <div>
                <div className="app-page-metric-value">De 20 min a 30 segundos</div>
                <div className="app-page-metric-label">Tiempo por comprobante electrónico</div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="app-page-image">
              <img src={img} alt="Facturación SUNAT" className="img-fluid rounded-4" />
              <div className="app-page-image-tag">Facturación Electrónica — Panel</div>
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
                  <i className="fas fa-exclamation-circle"></i>
                  <h4>Errores costosos</h4>
                  <p>Un dato mal ingresado en la factura genera rechazo de SUNAT. Corregirlo toma tiempo y puede generar multas.</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="app-page-pain-item">
                  <i className="fas fa-hourglass-half"></i>
                  <h4>Proceso lento</h4>
                  <p>Ingresar datos manualmente en el portal de SUNAT o en software externo toma 15-20 minutos por comprobante.</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="app-page-pain-item">
                  <i className="fas fa-file-invoice"></i>
                  <h4>Sin integración</h4>
                  <p>Tienes que copiar datos de tu sistema de cotizaciones al sistema de facturación. Doble trabajo, doble chance de error.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="app-page-section">
          <h3 className="app-page-section-title">
            <i className="fas fa-check-circle"></i> Cómo Facturación SUNAT resuelve esto
          </h3>
          <div className="row g-4">
            <div className="col-md-6">
              <div className="app-page-feature-card">
                <div className="app-page-feature-icon"><i className="fas fa-check-double"></i></div>
                <h4>Aprobación automática por SUNAT</h4>
                <p>El sistema valida los datos antes de enviar. Si todo está correcto, SUNAT aprueba al instante. No más rechazos por errores manuales.</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="app-page-feature-card">
                <div className="app-page-feature-icon"><i className="fas fa-calculator"></i></div>
                <h4>Cálculo automático de IGV y detracciones</h4>
                <p>El sistema calcula el IGV (18%), las detracciones (4%, 10%, 30%) y las percepciones automáticamente. Sin fórmulas, sin errores.</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="app-page-feature-card">
                <div className="app-page-feature-icon"><i className="fas fa-plug"></i></div>
                <h4>Conexión directa OSE/PSE</h4>
                <p>Conecta directamente con operadores autorizados por SUNAT. No necesitas software externo ni portales web.</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="app-page-feature-card">
                <div className="app-page-feature-icon"><i className="fas fa-file-excel"></i></div>
                <h4>Exportación de reportes</h4>
                <p>Genera reportes financieros en Excel con un clic. Libros electrónicos, resúmenes diarios, reportes de ventas.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="app-page-section">
          <h3 className="app-page-section-title">
            <i className="fas fa-file-invoice"></i> Tipos de comprobantes soportados
          </h3>
          <div className="row g-3">
            <div className="col-md-3 col-6">
              <div className="app-page-comprobante-card">
                <i className="fas fa-file-invoice"></i>
                <h4>Factura</h4>
                <p>Electrónica con código QR</p>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="app-page-comprobante-card">
                <i className="fas fa-receipt"></i>
                <h4>Boleta</h4>
                <p>Para ventas al consumidor final</p>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="app-page-comprobante-card">
                <i className="fas fa-file-circle-minus"></i>
                <h4>Nota de Crédito</h4>
                <p>Anulaciones y descuentos</p>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="app-page-comprobante-card">
                <i className="fas fa-file-circle-plus"></i>
                <h4>Nota de Débito</h4>
                <p>Cargos adicionales</p>
              </div>
            </div>
          </div>
        </div>

        <div className="app-page-cta text-center">
          <h3>¿Listo para facturar sin errores?</h3>
          <p>14 días de prueba gratuita. Sin tarjeta de crédito.</p>
          <a href="https://app.logia.lat/register/company/" className="btn-executive-large" target="_blank" rel="noopener noreferrer">
            <i className="fas fa-rocket" style={{ marginRight: '0.5rem' }}></i> Empezar Gratis
          </a>
        </div>

      </div>
    </PageLayout>
  );
};

export default FactElectronica;

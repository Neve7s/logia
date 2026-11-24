import React from 'react';
import PageLayout from '../../components/layout/PageLayout';
import img from '../../assets/ecosistema/consultee.webp';

const Consultador = () => {
  return (
    <PageLayout title="Consultador de Importadores" tagline="Data lake de SUNAT — Importadores del Perú" fullWidth={true}>
      <div className="app-page">

        <div className="row align-items-center g-5 mb-5">
          <div className="col-lg-6">
            <div className="app-page-badge">
              <i className="fas fa-database"></i> Data Lake SUNAT
            </div>
            <h2 className="app-page-title">
              Resumen de empresas importadoras <span className="text-highlight">actualizado cada 7 días</span>
            </h2>
            <p className="app-page-subtitle">
              Consulta el historial de importaciones de cualquier empresa peruana. 
              Volumen, frecuencia, productos, origen y destino. Toda la información de SUNAT en un solo lugar.
            </p>
            <div className="app-page-metric">
              <div className="app-page-metric-icon"><i className="fas fa-sync-alt"></i></div>
              <div>
                <div className="app-page-metric-value">Actualización cada 7 días</div>
                <div className="app-page-metric-label">Datos frescos directo de SUNAT</div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="app-page-image">
              <img src={img} alt="Consultador de Importadores" className="img-fluid rounded-4" />
              <div className="app-page-image-tag">Consultador — Resumen de Importaciones</div>
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
                    <h4>No sabes quién importa</h4>
                  </div>
                  <p>Cotizas a empresas sin saber cuánto importan, con qué frecuencia y por qué canales. Vas a ciegas.</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="app-page-pain-item">
                  <div className="app-page-pain-item-header">
                    <i className="fas fa-magnifying-glass"></i>
                    <h4>SUNAT es difícil de navegar</h4>
                  </div>
                  <p>La información de importaciones está repartida en portales gubernamentales. Buscar una empresa toma horas.</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="app-page-pain-item">
                  <div className="app-page-pain-item-header">
                    <i className="fas fa-clock"></i>
                    <h4>Datos desactualizados</h4>
                  </div>
                  <p>Usas información vieja o incompleta. No sabes si el importador sigue activo o si cambió de proveedor.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="app-page-section">
          <h3 className="app-page-section-title">
            <i className="fas fa-check-circle"></i> Qué encontrarás en el Consultador
          </h3>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="app-page-feature-card">
                <div className="app-page-feature-card-header">
                  <div className="app-page-feature-icon"><i className="fas fa-building"></i></div>
                  <h4>Resumen por empresa</h4>
                </div>
                <p>RUC, razón social, estado, y resumen completo de operaciones de importación. Todo en una vista.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="app-page-feature-card">
                <div className="app-page-feature-card-header">
                  <div className="app-page-feature-icon"><i className="fas fa-boxes-stacked"></i></div>
                  <h4>Volumen y frecuencia</h4>
                </div>
                <p>Cuántas veces importa al mes, qué volumen mueve y en qué modalidad (marítimo, aéreo, terrestre).</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="app-page-feature-card">
                <div className="app-page-feature-card-header">
                  <div className="app-page-feature-icon"><i className="fas fa-globe"></i></div>
                  <h4>Origen y destino</h4>
                </div>
                <p>Países de origen, puertos de embarque y destinos. Identifica rutas y patrones de importación.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="app-page-feature-card">
                <div className="app-page-feature-card-header">
                  <div className="app-page-feature-icon"><i className="fas fa-file-invoice"></i></div>
                  <h4>Declaraciones aduaneras</h4>
                </div>
                <p>Detalle de cada declaración: producto, valor CIF, impuestos y estado de la operación.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="app-page-cta text-center">
          <h3>¿Listo para consultar importadores?</h3>
          <p>1 mes gratis en diciembre. Sin tarjeta de crédito.</p>
          <div className="app-page-cta-actions">
            <a href="https://app.logia.lat/register/company/" className="btn-executive-large" target="_blank" rel="noopener noreferrer">
              <i className="fas fa-rocket" style={{ marginRight: '0.5rem' }}></i> Empezar Gratis
            </a>
            <a href="https://demo.logia.lat" className="btn-outline-premium" target="_blank" rel="noopener noreferrer">
              <i className="fas fa-laptop-code" style={{ marginRight: '0.5rem' }}></i> Ver demo
            </a>
          </div>
        </div>

      </div>
    </PageLayout>
  );
};

export default Consultador;

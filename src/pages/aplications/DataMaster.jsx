import React from 'react';
import PageLayout from '../../components/layout/PageLayout';
import img from '../../assets/ecosistema/maestros.webp';

const DataMaster = () => {
  return (
    <PageLayout title="Infraestructura Masters" tagline="Datos centralizados, búsquedas instantáneas" fullWidth={true}>
      <div className="app-page">

        <div className="row align-items-center g-5 mb-5">
          <div className="col-lg-6">
            <div className="app-page-badge">
              <i className="fas fa-database"></i> Módulo de Datos
            </div>
            <h2 className="app-page-title">
              Tu base de datos centralizada con <span className="text-highlight">búsqueda instantánea</span>
            </h2>
            <p className="app-page-subtitle">
              Los datos de clientes, navieras, puertos y servicios están dispersos en archivos de Excel, 
              contactos de WhatsApp y hojas de cálculo. Cada vez que necesitas un dato, buscas 5 minutos.
            </p>
            <div className="app-page-metric">
              <div className="app-page-metric-icon"><i className="fas fa-bolt"></i></div>
              <div>
                <div className="app-page-metric-value">De 5 min a 3 segundos</div>
                <div className="app-page-metric-label">Tiempo para encontrar cualquier dato</div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="app-page-image">
              <img src={img} alt="Infraestructura Masters" className="img-fluid rounded-4" />
              <div className="app-page-image-tag">Masters — Panel de Datos</div>
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
                  <i className="fas fa-magnifying-glass"></i>
                  <h4>Búsqueda eterna</h4>
                  <p>¿Cuál es el RUC de ese cliente? ¿Cuál es el correo de esa naviera? Buscas en WhatsApp, en Excel, en correos...</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="app-page-pain-item">
                  <i className="fas fa-users"></i>
                  <h4>Datos duplicados</h4>
                  <p>Cada vendedor tiene su propia lista. Hay clientes repetidos, con datos diferentes, sin control centralizado.</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="app-page-pain-item">
                  <i className="fas fa-lock"></i>
                  <h4>Sin privacidad</h4>
                  <p>Todos ven todos los clientes. Un vendedor puede ver y copiar los clientes de otro. No hay aislamiento.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="app-page-section">
          <h3 className="app-page-section-title">
            <i className="fas fa-check-circle"></i> Cómo Masters resuelve esto
          </h3>
          <div className="row g-4">
            <div className="col-md-6">
              <div className="app-page-feature-card">
                <div className="app-page-feature-icon"><i className="fas fa-magnifying-glass"></i></div>
                <h4>Autocompleta por RUC o razón social</h4>
                <p>Escribes 3 dígitos del RUC y el sistema muestra todas las coincidencias. Seleccionas y se autocompletan nombre, dirección, correo y teléfono.</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="app-page-feature-card">
                <div className="app-page-feature-icon"><i className="fas fa-ship"></i></div>
                <h4>Catálogo de navieras y puertos</h4>
                <p>Base de datos de las principales navieras del mundo con códigos, países y contactos. Puerto de origen y destino con un clic.</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="app-page-feature-card">
                <div className="app-page-feature-icon"><i className="fas fa-user-lock"></i></div>
                <h4>Aislamiento por vendedor</h4>
                <p>Cada vendedor solo ve sus propios clientes. No puede ver ni modificar los de otros. Privacidad y control total.</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="app-page-feature-card">
                <div className="app-page-feature-icon"><i className="fas fa-building"></i></div>
                <h4>Consulta SUNAT integrada</h4>
                <p>Ingresa el RUC y el sistema consulta SUNAT automáticamente. Razón social, estado, dirección y condición fiscal al instante.</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="app-page-feature-card">
                <div className="app-page-feature-icon"><i className="fas fa-cubes"></i></div>
                <h4>Servicios y tarifas</h4>
                <p>Catálogo de servicios con tarifas base, modalidades (LCL, FCL, Aéreo) y reglas de cálculo. Todo listo para el Cotizador.</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="app-page-feature-card">
                <div className="app-page-feature-icon"><i className="fas fa-shield-halved"></i></div>
                <h4>Datos protegidos y separados</h4>
                <p>Cada agencia tiene su propia base de datos segura. Los datos nunca se mezclan entre empresas. Tu información está protegida con encriptación de grado bancario.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="app-page-cta text-center">
          <h3>¿Listo para centralizar tus datos?</h3>
          <p>14 días de prueba gratuita. Sin tarjeta de crédito.</p>
          <a href="https://app.logia.lat/register/company/" className="btn-executive-large" target="_blank" rel="noopener noreferrer">
            <i className="fas fa-rocket" style={{ marginRight: '0.5rem' }}></i> Empezar Gratis
          </a>
        </div>

      </div>
    </PageLayout>
  );
};

export default DataMaster;

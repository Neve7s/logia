import React from 'react';
import PageLayout from '../../components/layout/PageLayout';
import img from '../../assets/ecosistema/shipment.webp';

const Shipments = () => {
  return (
    <PageLayout title="Shipments Control" tagline="Tracking real de cada carga" fullWidth={true}>
      <div className="app-page">

        <div className="row align-items-center g-5 mb-5">
          <div className="col-lg-6">
            <div className="app-page-badge">
              <i className="fas fa-box-open"></i> Módulo de Operaciones
            </div>
            <h2 className="app-page-title">
              Controla cada carga como un <span className="text-highlight">controlador aéreo</span>
            </h2>
            <p className="app-page-subtitle">
              Sin un dashboard visual, tus cargas se pierden entre WhatsApp, Excel y llamadas telefónicas. 
              El cliente pregunta "¿dónde está mi carga?" y tú no tienes respuesta inmediata.
            </p>
            <div className="app-page-metric">
              <div className="app-page-metric-icon"><i className="fas fa-bolt"></i></div>
              <div>
                <div className="app-page-metric-value">De 15 min a 10 segundos</div>
                <div className="app-page-metric-label">Tiempo para responder al cliente</div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="app-page-image">
              <img src={img} alt="Shipments Control" className="img-fluid rounded-4" />
              <div className="app-page-image-tag">Shipments Control — Dashboard</div>
            </div>
          </div>
        </div>

        {/* El Problema */}
        <div className="app-page-section">
          <div className="app-page-problem-card">
            <div className="app-page-problem-header">
              <i className="fas fa-exclamation-triangle"></i>
              <h3>El problema que enfrentas todos los días</h3>
            </div>
            <div className="row g-4">
              <div className="col-md-4">
                <div className="app-page-pain-item">
                  <i className="fas fa-search"></i>
                  <h4>Búsqueda eterna</h4>
                  <p>Cuando el cliente llama, buscas en WhatsApp, en Excel, en correos. A veces no encuentras y quedas mal.</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="app-page-pain-item">
                  <i className="fas fa-eye-slash"></i>
                  <h4>Sin visibilidad</h4>
                  <p>No sabes si la carga está en aduana, en tránsito o retenida. El canal aduanero (verde/rojo/naranja) lo descubres tarde.</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="app-page-pain-item">
                  <i className="fas fa-file-circle-xmark"></i>
                  <h4>Avisos manuales</h4>
                  <p>Generar el Aviso de Llegada toma tiempo: abrir Word, buscar datos, copiar, pegar, enviar. Cada carga repites el proceso.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* La Solución */}
        <div className="app-page-section">
          <h3 className="app-page-section-title">
            <i className="fas fa-check-circle"></i> Cómo Shipments Control resuelve esto
          </h3>
          <div className="row g-4">
            <div className="col-md-6">
              <div className="app-page-feature-card">
                <div className="app-page-feature-icon"><i className="fas fa-traffic-light"></i></div>
                <h4>Control visual del canal aduanero</h4>
                <p>Cada carga tiene un indicador de color: Verde (despacho normal), Naranja (observación), Rojo (retenida). Sabes el estado en un segundo.</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="app-page-feature-card">
                <div className="app-page-feature-icon"><i className="fas fa-sync-alt"></i></div>
                <h4>Actualización sin recargar</h4>
                <p>Actualizas el estado de una carga y todos los ven el cambio al instante. No hay que recargar la página ni actualizar Excel.</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="app-page-feature-card">
                <div className="app-page-feature-icon"><i className="fas fa-file-pdf"></i></div>
                <h4>Aviso de Llegada automático</h4>
                <p>Cuando la carga llega, un clic genera el Aviso de Llegada en PDF con todos los datos. Listo para enviar al cliente por email.</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="app-page-feature-card">
                <div className="app-page-feature-icon"><i className="fas fa-clock-rotate-left"></i></div>
                <h4>Historial completo</h4>
                <p>Cada cambio de estado queda registrado con fecha, usuario y observaciones. Tienes trazabilidad total de cada operación.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Workflow */}
        <div className="app-page-section">
          <h3 className="app-page-section-title">
            <i className="fas fa-route"></i> Flujo de trabajo
          </h3>
          <div className="app-page-workflow">
            <div className="app-page-workflow-step">
              <div className="app-page-workflow-number">1</div>
              <div className="app-page-workflow-content">
                <h4>Cotización aprobada → Shipment</h4>
                <p>Cuando el cliente aprueba la cotización, se convierte en Shipment con un clic. No más copiar datos.</p>
              </div>
            </div>
            <div className="app-page-workflow-connector"><i className="fas fa-arrow-down"></i></div>
            <div className="app-page-workflow-step">
              <div className="app-page-workflow-number">2</div>
              <div className="app-page-workflow-content">
                <h4>Seguimiento visual</h4>
                <p>El equipo actualiza estados: Documentos Recibidos → En Tránsito → En Aduana → Liberado → Entregado.</p>
              </div>
            </div>
            <div className="app-page-workflow-connector"><i className="fas fa-arrow-down"></i></div>
            <div className="app-page-workflow-step">
              <div className="app-page-workflow-number">3</div>
              <div className="app-page-workflow-content">
                <h4>Cliente consulta → respuesta instantánea</h4>
                <p>El cliente llama. Abres el dashboard, buscas por nombre o RUC, y le dices exactamente dónde está su carga.</p>
              </div>
            </div>
            <div className="app-page-workflow-connector"><i className="fas fa-arrow-down"></i></div>
            <div className="app-page-workflow-step">
              <div className="app-page-workflow-number">4</div>
              <div className="app-page-workflow-content">
                <h4>Aviso de Llegada automático</h4>
                <p>La carga llega. Generas el aviso en PDF y lo envías por email. El cliente recibe algo profesional y oportuno.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="app-page-cta text-center">
          <h3>¿Listo para tener control total de tus cargas?</h3>
          <p>14 días de prueba gratuita. Sin tarjeta de crédito.</p>
          <a href="https://app.logia.lat/register/company/" className="btn-executive-large" target="_blank" rel="noopener noreferrer">
            <i className="fas fa-rocket" style={{ marginRight: '0.5rem' }}></i> Empezar Gratis
          </a>
        </div>

      </div>
    </PageLayout>
  );
};

export default Shipments;

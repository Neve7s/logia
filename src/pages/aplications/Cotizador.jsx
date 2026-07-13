import React from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '../../components/layout/PageLayout';
import img from '../../assets/ecosistema/cotizador.webp';

const Cotizador = () => {
  return (
    <PageLayout title="Cotizador Pro" tagline="Cotiza en minutos, no en horas" fullWidth={true}>
      <div className="app-page">

        {/* Hero de la app */}
        <div className="row align-items-center g-5 mb-5">
          <div className="col-lg-6">
            <div className="app-page-badge">
              <i className="fas fa-calculator"></i> Módulo de Ventas
            </div>
            <h2 className="app-page-title">
              Genera cotizaciones profesionales que <span className="text-highlight">cierran negocios</span>
            </h2>
            <p className="app-page-subtitle">
              Tu equipo de ventas pierde tiempo abriendo Excel, buscando tarifas y calculando costos manualmente. 
              Cada minuto perdido es un cliente que se va con la competencia.
            </p>
            <div className="app-page-metric">
              <div className="app-page-metric-icon"><i className="fas fa-clock"></i></div>
              <div>
                <div className="app-page-metric-value">De 30 min a 2 min</div>
                <div className="app-page-metric-label">Tiempo promedio por cotización</div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="app-page-image">
              <img src={img} alt="Cotizador Pro" className="img-fluid rounded-4" />
              <div className="app-page-image-tag">Cotizador Pro — Panel Principal</div>
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
                  <i className="fas fa-hourglass-half"></i>
                  <h4>Cotizaciones lentas</h4>
                  <p>Crear una cotización en Word o Excel toma 30-45 minutos. Multiplica eso por 10-15 solicitudes diarias y tu equipo está colapsado.</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="app-page-pain-item">
                  <i className="fas fa-calculator"></i>
                  <h4>Errores de cálculo</h4>
                  <p>Un error en el peso, volumen o tipo de cambio puede costar cientos de dólares. Los clientes pierden confianza cuando los precios cambian.</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="app-page-pain-item">
                  <i className="fas fa-file-circle-xmark"></i>
                  <h4>Sin presentación profesional</h4>
                  <p>Enviar una cotización en Word o WhatsApp no genera confianza. Los clientes comparan y eligen al que se ve más profesional.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* La Solución */}
        <div className="app-page-section">
          <h3 className="app-page-section-title">
            <i className="fas fa-check-circle"></i> Cómo Cotizador Pro resuelve esto
          </h3>
          <div className="row g-4">
            <div className="col-md-6">
              <div className="app-page-feature-card">
                <div className="app-page-feature-icon"><i className="fas fa-bolt"></i></div>
                <h4>Cálculo automático multi-criterio</h4>
                <p>Ingresa peso, volumen o tipo de contenedor. El sistema calcula automáticamente el costo usando tarifas fijas, por kilo, por metro cúbico o por contenedor. Sin errores, sin fórmulas en Excel.</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="app-page-feature-card">
                <div className="app-page-feature-icon"><i className="fas fa-file-pdf"></i></div>
                <h4>PDF profesional con tu marca</h4>
                <p>Genera documentos listos para enviar: con logo, datos de empresa, desglose de costos y conditions. El cliente recibe algo que se ve serio y confiable.</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="app-page-feature-card">
                <div className="app-page-feature-icon"><i className="fas fa-copy"></i></div>
                <h4>Duplicar en un clic</h4>
                <p>¿El cliente pide una modificación? Duplica la cotización original, ajusta lo que necesitas y genera un nuevo código al instante. Sin empezar de cero.</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="app-page-feature-card">
                <div className="app-page-feature-icon"><i className="fas fa-dollar-sign"></i></div>
                <h4>Tipo de cambio actualizado</h4>
                <p>El sistema usa el tipo de cambio del día automáticamente. No más buscas en Google "cuanto está el dólar hoy" y errores de conversión.</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="app-page-feature-card">
                <div className="app-page-feature-icon"><i className="fas fa-history"></i></div>
                <h4>Historial completo con estados</h4>
                <p>Cada cotización tiene un estado: Borrador, Enviada, Aprobada, Rechazada. Sabes exactamente dónde está cada negocio en tu pipeline de ventas.</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="app-page-feature-card">
                <div className="app-page-feature-icon"><i className="fas fa-percentage"></i></div>
                <h4>Percepción IGV automática</h4>
                <p>Si el cliente ya tiene cotizaciones aprobadas, el sistema aplica 3.50% automáticamente. Si es nuevo, aplica 10%. Sin que el vendedor tenga que recordar la regla.</p>
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
                <h4>El cliente solicita cotización</h4>
                <p>Por WhatsApp, correo o llamada. El vendedor abre Cotizador Pro.</p>
              </div>
            </div>
            <div className="app-page-workflow-connector"><i className="fas fa-arrow-down"></i></div>
            <div className="app-page-workflow-step">
              <div className="app-page-workflow-number">2</div>
              <div className="app-page-workflow-content">
                <h4>Selecciona cliente y servicio</h4>
                <p>Autocompleta por RUC. Selecciona modalidad (LCL, FCL, Aéreo) y servicios.</p>
              </div>
            </div>
            <div className="app-page-workflow-connector"><i className="fas fa-arrow-down"></i></div>
            <div className="app-page-workflow-step">
              <div className="app-page-workflow-number">3</div>
              <div className="app-page-workflow-content">
                <h4>El sistema calcula todo</h4>
                <p>Costos, IGV, percepción, tipo de cambio. El vendedor solo revisa y ajusta si es necesario.</p>
              </div>
            </div>
            <div className="app-page-workflow-connector"><i className="fas fa-arrow-down"></i></div>
            <div className="app-page-workflow-step">
              <div className="app-page-workflow-number">4</div>
              <div className="app-page-workflow-content">
                <h4>Genera PDF y envía</h4>
                <p>Un clic genera el PDF profesional. Se envía por email directamente desde la plataforma.</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="app-page-cta text-center">
          <h3>¿Listo para cotizar 15x más rápido?</h3>
          <p>14 días de prueba gratuita. Sin tarjeta de crédito.</p>
          <a href="https://app.logia.lat/register/company/" className="btn-executive-large" target="_blank" rel="noopener noreferrer">
            <i className="fas fa-rocket" style={{ marginRight: '0.5rem' }}></i> Empezar Gratis
          </a>
        </div>

      </div>
    </PageLayout>
  );
};

export default Cotizador;

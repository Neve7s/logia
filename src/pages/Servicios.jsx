import React from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '../components/layout/PageLayout';

const servicios = [
  {
    icon: 'fas fa-code',
    title: 'Aplicaciones web a medida',
    text: 'Sistemas de gestión, operaciones, cotización o tracking diseñados alrededor de cómo trabaja tu empresa, no al revés.',
  },
  {
    icon: 'fas fa-globe',
    title: 'Integraciones con tu web',
    text: 'Cotizadores, formularios, tracking y portales que se integran a tu sitio actual sin rehacerlo.',
  },
  {
    icon: 'fas fa-plug',
    title: 'APIs y conectores',
    text: 'Conexión con SUNAT, RENIEC, navieras, pasarelas de pago y los sistemas que ya usas.',
  },
  {
    icon: 'fas fa-robot',
    title: 'Automatización de procesos',
    text: 'Correos, documentos, alertas y tareas repetitivas que dejan de consumir tiempo de tu equipo.',
  },
  {
    icon: 'fas fa-users',
    title: 'Portales para tus clientes',
    text: 'Tus clientes cotizan, siguen su carga y descargan documentos con la identidad de tu empresa.',
  },
  {
    icon: 'fas fa-screwdriver-wrench',
    title: 'Evolución y soporte',
    text: 'Mantenimiento, mejoras y acompañamiento continuo después de la puesta en producción.',
  },
];

const pasos = [
  {
    title: 'Diagnóstico',
    text: 'Revisamos el proceso, los sistemas actuales y el objetivo del negocio.',
  },
  {
    title: 'Propuesta',
    text: 'Definimos alcance, arquitectura, tiempos y entregables por escrito.',
  },
  {
    title: 'Desarrollo',
    text: 'Entregas iterativas con revisión y pruebas junto a tu equipo.',
  },
  {
    title: 'Integración',
    text: 'Desplegamos, conectamos con tus sistemas y acompañamos la operación.',
  },
];

const integraciones = [
  { icon: 'fas fa-globe', label: 'Sitio web / landing', state: 'Conectado' },
  { icon: 'fas fa-database', label: 'ERP / CRM', state: 'Conectado' },
  { icon: 'fas fa-file-invoice', label: 'SUNAT / facturación', state: 'Conectado' },
  { icon: 'fas fa-satellite-dish', label: 'Navieras / tracking', state: 'Conectado' },
  { icon: 'fas fa-mobile-screen', label: 'App móvil', state: 'A medida', custom: true },
];

const Servicios = () => {
  return (
    <PageLayout
      title="Desarrollo a medida"
      tagline="Software e integraciones para tu operación"
      fullWidth={true}
    >
      <div className="app-page">

        <div className="row align-items-center g-5 mb-5">
          <div className="col-lg-7">
            <div className="app-page-badge">
              <i className="fas fa-code"></i> Servicios
            </div>
            <h2 className="app-page-title">
              Construimos el software que <span className="text-highlight">tu operación necesita</span>
            </h2>
            <p className="app-page-subtitle">
              Desarrollamos aplicaciones, portales e integraciones a la medida para empresas de logística,
              transporte y comercio exterior. Conectamos tu web, tu ERP y tus procesos con SUNAT, navieras
              y tus clientes.
            </p>
            <div className="app-page-metric">
              <div className="app-page-metric-icon"><i className="fas fa-code-branch"></i></div>
              <div>
                <div className="app-page-metric-value">De la idea a producción</div>
                <div className="app-page-metric-label">Alcance, tiempos y entregables definidos contigo</div>
              </div>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="services-panel">
              <div className="services-panel-head">
                <span /><span /><span />
                <em>Integraciones</em>
              </div>
              <ul className="services-panel-list">
                {integraciones.map((item) => (
                  <li key={item.label}>
                    <i className={item.icon} aria-hidden="true"></i>
                    <span>{item.label}</span>
                    <span className={`service-state${item.custom ? ' is-custom' : ''}`}>{item.state}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <section className="app-page-section">
          <h3 className="app-page-section-title">
            <i className="fas fa-layer-group"></i> Qué desarrollamos
          </h3>
          <div className="row g-4">
            {servicios.map((servicio) => (
              <div className="col-md-4" key={servicio.title}>
                <div className="app-page-feature-card">
                  <div className="app-page-feature-card-header">
                    <div className="app-page-feature-icon"><i className={servicio.icon}></i></div>
                    <h4>{servicio.title}</h4>
                  </div>
                  <p>{servicio.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="app-page-section">
          <h3 className="app-page-section-title">
            <i className="fas fa-route"></i> Cómo trabajamos
          </h3>
          <div className="app-page-workflow">
            {pasos.map((paso, index) => (
              <div className="app-page-workflow-step" key={paso.title}>
                <div className="app-page-workflow-number">{index + 1}</div>
                <div className="app-page-workflow-content">
                  <h4>{paso.title}</h4>
                  <p>{paso.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="app-page-cta text-center">
          <h3>¿Tienes un proceso que necesita su propio sistema?</h3>
          <p>Conversemos: te proponemos alcance, tiempos y una hoja de ruta clara.</p>
          <div className="app-page-cta-actions">
            <a
              href="mailto:soporte@logia.lat?subject=Desarrollo%20a%20medida"
              className="btn-executive-large"
            >
              <i className="fas fa-envelope" style={{ marginRight: '0.5rem' }}></i>
              Hablemos de tu proyecto
            </a>
            <Link to="/soporte" className="btn-outline-premium">
              <i className="fas fa-headset" style={{ marginRight: '0.5rem' }}></i>
              Contactar ventas
            </Link>
          </div>
        </div>

      </div>
    </PageLayout>
  );
};

export default Servicios;

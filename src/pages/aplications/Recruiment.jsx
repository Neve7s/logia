import React from 'react';
import PageLayout from '../../components/layout/PageLayout';
import img from '../../assets/ecosistema/kpi.webp';

const Recruiment = () => {
  return (
    <PageLayout title="Reclutamiento ATS" tagline="Del postulado al empleado en un clic" fullWidth={true}>
      <div className="app-page">

        <div className="row align-items-center g-5 mb-5">
          <div className="col-lg-6">
            <div className="app-page-badge">
              <i className="fas fa-user-tie"></i> Módulo RRHH
            </div>
            <h2 className="app-page-title">
              Encuentra al personal ideal <span className="text-highlight">sin perder semanas</span>
            </h2>
            <p className="app-page-subtitle">
              Reclutar en la logística es diferente: necesitas personas que entiendan de aduanas, documentación internacional y operaciones. 
              El proceso manual entre correos y WhatsApp hace que los buenos candidatos se pierdan.
            </p>
            <div className="app-page-metric">
              <div className="app-page-metric-icon"><i className="fas fa-bolt"></i></div>
              <div>
                <div className="app-page-metric-value">De 2 semanas a 3 días</div>
                <div className="app-page-metric-label">Tiempo promedio por contratación</div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="app-page-image">
              <img src={img} alt="Reclutamiento ATS" className="img-fluid rounded-4" />
              <div className="app-page-image-tag">ATS — Panel de Candidatos</div>
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
                    <i className="fas fa-inbox"></i>
                    <h4>Candidatos dispersos</h4>
                  </div>
                  <p>Los CVs llegan por correo, WhatsApp, redes sociales. No hay un lugar central para evaluar y comparar.</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="app-page-pain-item">
                  <div className="app-page-pain-item-header">
                    <i className="fas fa-calendar-xmark"></i>
                    <h4>Coordinación caótica</h4>
                  </div>
                  <p>Organizar entrevistas por WhatsApp genera confusiones. Los candidatos no llegan, o llegan al día equivocado.</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="app-page-pain-item">
                  <div className="app-page-pain-item-header">
                    <i className="fas fa-user-plus"></i>
                    <h4>Onboarding lento</h4>
                  </div>
                  <p>Cuando aceptas a alguien, empieza un proceso manual: crear usuario, asignar permisos, configurar equipo...</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="app-page-section">
          <h3 className="app-page-section-title">
            <i className="fas fa-check-circle"></i> Cómo ATS resuelve esto
          </h3>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="app-page-feature-card">
                <div className="app-page-feature-card-header">
                  <div className="app-page-feature-icon"><i className="fas fa-columns"></i></div>
                  <h4>Flujo visual Kanban</h4>
                </div>
                <p>Arrastra candidatos entre columnas: Postulado → En Revisión → Entrevistado → Aceptado/Rechazado. Todo visible en un tablero.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="app-page-feature-card">
                <div className="app-page-feature-card-header">
                  <div className="app-page-feature-icon"><i className="fas fa-bullhorn"></i></div>
                  <h4>Publicación de convocatorias</h4>
                </div>
                <p>Crea convocatorias laborales con requisitos, horarios y ubicación. Publica y recibe postulaciones organizadas.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="app-page-feature-card">
                <div className="app-page-feature-card-header">
                  <div className="app-page-feature-icon"><i className="fas fa-envelope-open-text"></i></div>
                  <h4>Envío automático de correos</h4>
                </div>
                <p>Coordina entrevistas por email automático. El candidato recibe fecha, hora y lugar sin que tengas que escribir un solo correo.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="app-page-feature-card">
                <div className="app-page-feature-card-header">
                  <div className="app-page-feature-icon"><i className="fas fa-user-check"></i></div>
                  <h4>Conversión a empleado</h4>
                </div>
                <p>Aceptaste al candidato. Un clic lo convierte en empleado activo del sistema, con usuario, permisos y acceso configurado.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="app-page-cta text-center">
          <h3>¿Listo para reclutar más rápido?</h3>
          <p>14 días de prueba gratuita. Sin tarjeta de crédito.</p>
          <a href="https://app.logia.lat/register/company/" className="btn-executive-large" target="_blank" rel="noopener noreferrer">
            <i className="fas fa-rocket" style={{ marginRight: '0.5rem' }}></i> Empezar Gratis
          </a>
        </div>

        {/* Banner: Busca Empleo en Logística */}
        <div className="empleo-banner mt-5">
          <div className="empleo-banner-content">
            <div className="empleo-banner-icon">
              <i className="fas fa-briefcase"></i>
            </div>
            <div className="empleo-banner-text">
              <h4>¿Buscas trabajo en logística?</h4>
              <p>Encuentra vacantes en agencias de carga, aduanas y operaciones internacionales. Publicadas por empresas reales del sector.</p>
            </div>
            <a
              href="https://app.logia.lat/recruitment/empleos/"
              className="empleo-banner-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fas fa-arrow-right"></i> Ver Empleos
            </a>
          </div>
        </div>

      </div>
    </PageLayout>
  );
};

export default Recruiment;

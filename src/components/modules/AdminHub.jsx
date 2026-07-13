import React from 'react';
import dashboard from '../../assets/ecosistema/dashboard.webp';

const AdminHub = () => {
  return (
    <section className="admin-hub-section">
      <div className="container-x">
        <div className="row align-items-center g-4">
          <div className="col-lg-6">
            <span className="tagline">Gestión de Alto Nivel</span>
            <h2 className="section-title">Control total de tu <span className="text-highlight">Agencia</span></h2>
            <p className="section-desc">Administra el motor de tu negocio con herramientas diseñadas para la alta gerencia.</p>

            <ul className="feature-list-premium">
              <li>
                <i className="fas fa-users-gear"></i>
                <div>
                  <h4>Gestión de Empleados</h4>
                  <p>Organiza tu equipo por áreas, asigna permisos específicos y mide la productividad en tiempo real.</p>
                </div>
              </li>
              <li>
                <i className="fas fa-chart-pie"></i>
                <div>
                  <h4>Reportes Automáticos</h4>
                  <p>Visualiza cómo va tu negocio con reportes claros sobre cotizaciones, ventas y rendimiento de tu equipo.</p>
                </div>
              </li>
              <li>
                <i className="fas fa-sliders"></i>
                <div>
                  <h4>Personalización de tu Marca</h4>
                  <p>Configura la imagen de tu empresa en documentos, correos y comunicaciones con tus clientes.</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="col-lg-6">
            <div className="card-image-placeholder big-placeholder">
              <div className="system-mockup-tag">Dashboard Administrativo</div>
              <img src={dashboard} alt="Dashboard Administrativo" className="img-fluid rounded-4 shadow-lg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdminHub;

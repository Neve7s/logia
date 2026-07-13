import React from 'react';

const SupportSection = () => {
  return (
    <section id="soporte" className="support-premium-section py-large">
      <div className="container-x">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <span className="tagline">Asistencia Humana</span>
            <h2 className="section-title">Soporte en Línea <span className="text-highlight">24/7</span></h2>
            <p className="section-desc">No estás solo. Nuestro equipo de expertos te acompaña en cada paso de tu transformación digital.</p>
          </div>
          <div className="col-lg-6">
            <div className="row g-4">
              <div className="col-sm-6">
                <div className="support-card-mini">
                  <i className="fab fa-whatsapp"></i>
                  <h4>WhatsApp Business</h4>
                  <p>Respuesta instantánea.</p>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="support-card-mini">
                  <i className="fas fa-phone-volume"></i>
                  <h4>Línea Directa</h4>
                  <p>Atención telefónica.</p>
                </div>
              </div>
              <div className="col-sm-12">
                <div className="support-card-mini">
                  <i className="fas fa-envelope-open-text"></i>
                  <h4>Email Centralizado</h4>
                  <p>Tickets de soporte técnico.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportSection;

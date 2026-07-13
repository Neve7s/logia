import React, { useState } from 'react';
import PageLayout from '../components/layout/PageLayout';

const Support = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  return (
    <PageLayout 
      title="Soporte Técnico"
      tagline="Estamos aquí para ayudarte"
    >
      <div className="row">
        <div className="col-lg-6 mb-5">
          <h3 style={{ marginBottom: '1.5rem', color: '#fff' }}>Canales de atención</h3>
          <div className="support-card-mini" style={{ marginBottom: '1rem' }}>
            <i className="fab fa-whatsapp"></i>
            <h4>WhatsApp Business</h4>
            <p>Respuesta inmediata para consultas urgentes</p>
            <a href="https://wa.me/51935533845" target="_blank" rel="noopener noreferrer" className="support-cta">
              <i className="fas fa-arrow-right"></i> Abrir chat
            </a>
          </div>
          <div className="support-card-mini" style={{ marginBottom: '1rem' }}>
            <i className="fas fa-envelope-open-text"></i>
            <h4>Correo Electrónico</h4>
            <p>Soporte técnico detallado con seguimiento</p>
            <a href="mailto:soporte@logia.lat" className="support-cta">
              <i className="fas fa-arrow-right"></i> Enviar correo
            </a>
          </div>
          <div className="support-card-mini">
            <i className="fas fa-clock"></i>
            <h4>Horario de Atención</h4>
            <p>Lunes a Viernes, 9:00 AM - 6:00 PM (PET)</p>
            <span className="support-status">
              <i className="fas fa-circle" style={{ color: '#4ade80', fontSize: '0.5rem' }}></i>
              En línea ahora
            </span>
          </div>
        </div>
        <div className="col-lg-6">
          <h3 style={{ marginBottom: '1.5rem', color: '#fff' }}>Envíanos un mensaje</h3>
          {formSubmitted ? (
            <div className="support-success">
              <i className="fas fa-check-circle"></i>
              <h4>¡Mensaje enviado!</h4>
              <p>Nos pondremos en contacto contigo en las próximas horas.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="support-form">
              <div className="form-group">
                <label>Tu nombre</label>
                <input 
                  type="text" 
                  name="name"
                  required 
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Nombre completo" 
                />
              </div>
              <div className="form-group">
                <label>Correo electrónico</label>
                <input 
                  type="email" 
                  name="email"
                  required 
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="tu@empresa.com" 
                />
              </div>
              <div className="form-group">
                <label>Asunto</label>
                <select 
                  name="subject"
                  required 
                  value={formData.subject}
                  onChange={handleChange}
                >
                  <option value="">Selecciona un asunto</option>
                  <option value="soporte">Soporte técnico</option>
                  <option value="facturacion">Facturación</option>
                  <option value="ventas">Ventas</option>
                  <option value="otros">Otros</option>
                </select>
              </div>
              <div className="form-group">
                <label>Mensaje</label>
                <textarea 
                  name="message"
                  required 
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Describe tu problema o consulta..." 
                />
              </div>
              <button type="submit" className="btn-executive" style={{ padding: '1rem 2rem', width: '100%' }}>
                <i className="fas fa-paper-plane" style={{ marginRight: '0.5rem' }}></i>
                Enviar mensaje
              </button>
            </form>
          )}
        </div>
      </div>
    </PageLayout>
  );
};

export default Support;

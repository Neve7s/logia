import React, { useState, useEffect } from 'react';
import PageLayout from '../components/layout/PageLayout';

const RATE_LIMIT_KEY = 'logia_contact_rate';
const MAX_SENDS = 2;
const WINDOW_MS = 15 * 60 * 1000;

function getClientSends() {
  try {
    const raw = localStorage.getItem(RATE_LIMIT_KEY);
    if (!raw) return { count: 0, start: Date.now() };
    const data = JSON.parse(raw);
    if (Date.now() - data.start > WINDOW_MS) {
      localStorage.removeItem(RATE_LIMIT_KEY);
      return { count: 0, start: Date.now() };
    }
    return data;
  } catch {
    return { count: 0, start: Date.now() };
  }
}

function recordSend() {
  const data = getClientSends();
  const updated = { count: data.count + 1, start: data.start };
  localStorage.setItem(RATE_LIMIT_KEY, JSON.stringify(updated));
}

function getRemainingTime() {
  const data = getClientSends();
  if (data.count === 0) return 0;
  const elapsed = Date.now() - data.start;
  return Math.max(0, WINDOW_MS - elapsed);
}

const Support = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [clientBlocked, setClientBlocked] = useState(false);
  const [cooldownMsg, setCooldownMsg] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  // Check localStorage on mount
  useEffect(() => {
    const sends = getClientSends();
    if (sends.count >= MAX_SENDS) {
      setClientBlocked(true);
      updateCooldownMsg();
    }
  }, []);

  // Update cooldown countdown
  useEffect(() => {
    if (!clientBlocked) return;
    const interval = setInterval(() => {
      const remaining = getRemainingTime();
      if (remaining <= 0) {
        setClientBlocked(false);
        setCooldownMsg('');
        clearInterval(interval);
      } else {
        updateCooldownMsg();
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [clientBlocked]);

  function updateCooldownMsg() {
    const remaining = getRemainingTime();
    const min = Math.floor(remaining / 60000);
    const sec = Math.floor((remaining % 60000) / 1000);
    setCooldownMsg(`Espera ${min}:${sec.toString().padStart(2, '0')} para enviar otro mensaje.`);
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Client-side check
    const sends = getClientSends();
    if (sends.count >= MAX_SENDS) {
      setClientBlocked(true);
      updateCooldownMsg();
      return;
    }

    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch('http://localhost:3001/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Error al enviar el mensaje');
      }

      recordSend();

      const sendsAfter = getClientSends();
      if (sendsAfter.count >= MAX_SENDS) {
        setClientBlocked(true);
        updateCooldownMsg();
      }

      setFormSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setFormSubmitted(false), 5000);
    } catch (err) {
      setError(err.message || 'Error al conectar con el servidor');
    } finally {
      setIsSubmitting(false);
    }
  };

  const isBlocked = clientBlocked || formSubmitted;

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
            <a href="https://wa.me/51977824138" target="_blank" rel="noopener noreferrer" className="support-cta">
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
              <p>Recibimos tu mensaje. Te responderemos a <strong>{formData.email || 'tu correo'}</strong> en las próximas horas.</p>
              <p style={{ fontSize: '0.9rem', opacity: 0.8, marginTop: '1rem' }}>
                También puedes contactarnos por WhatsApp para una respuesta más rápida.
              </p>
            </div>
          ) : clientBlocked ? (
            <div style={{
              background: 'rgba(251, 191, 36, 0.1)',
              border: '1px solid rgba(251, 191, 36, 0.3)',
              borderRadius: '12px',
              padding: '2rem',
              textAlign: 'center',
              color: '#fbbf24'
            }}>
              <i className="fas fa-clock" style={{ fontSize: '2rem', marginBottom: '1rem', display: 'block' }}></i>
              <h4 style={{ color: '#fff', marginBottom: '0.5rem' }}>Límite de envíos alcanzado</h4>
              <p style={{ color: '#ccc', marginBottom: '0.5rem' }}>{cooldownMsg}</p>
              <p style={{ fontSize: '0.85rem', color: '#888' }}>
                Puedes contactarnos por WhatsApp o correo mientras tanto.
              </p>
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
              {error && (
                <div style={{ 
                  background: 'rgba(239, 68, 68, 0.1)', 
                  border: '1px solid rgba(239, 68, 68, 0.3)',
                  borderRadius: '8px',
                  padding: '1rem',
                  marginBottom: '1rem',
                  color: '#ef4444'
                }}>
                  <i className="fas fa-exclamation-circle" style={{ marginRight: '0.5rem' }}></i>
                  {error}
                </div>
              )}
              <button 
                type="submit" 
                className="btn-executive" 
                style={{ padding: '1rem 2rem', width: '100%' }}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <i className="fas fa-spinner fa-spin" style={{ marginRight: '0.5rem' }}></i>
                    Enviando...
                  </>
                ) : (
                  <>
                    <i className="fas fa-paper-plane" style={{ marginRight: '0.5rem' }}></i>
                    Enviar mensaje
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </PageLayout>
  );
};

export default Support;

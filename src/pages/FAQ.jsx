import React, { useState } from 'react';
import PageLayout from '../components/layout/PageLayout';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: "¿Necesito instalar algo en mi computadora?",
      a: "No, LogIA es una plataforma 100% web. Solo necesitas un navegador moderno (Chrome, Firefox, Safari o Edge) y conexión a internet. No se requiere instalación de ningún software.",
      icon: "fas fa-globe"
    },
    {
      q: "¿Puedo cancelar mi suscripción en cualquier momento?",
      a: "Sí, puedes cancelar tu suscripción en cualquier momento desde tu panel de configuración. No hay permanencia mínima ni penalizaciones. Al cancelar, mantienes el acceso hasta el final del periodo facturado.",
      icon: "fas fa-xmark"
    },
    {
      q: "¿Ofrecen soporte en español para Latinoamérica?",
      a: "Sí, todo nuestro soporte técnico y atención al cliente está disponible en español, con horarios adaptados al huso horario de Latinoamérica (GMT-5). Ofrecemos soporte por WhatsApp, correo electrónico y chat en vivo.",
      icon: "fas fa-language"
    },
    {
      q: "¿Manejan facturación electrónica con SUNAT?",
      a: "Sí, nuestro plan Premium incluye integración completa con SUNAT para emisión de facturas, boletas y notas de crédito electrónicas (OSE/PSE). El sistema calcula automáticamente el IGV y las detracciones.",
      icon: "fas fa-file-invoice"
    },
    {
      q: "¿Hay un período de prueba gratuita?",
      a: "Sí, ofrecemos una prueba gratuita de 14 días sin necesidad de tarjeta de crédito. Durante la prueba tienes acceso completo a todas las funcionalidades del plan Estándar.",
      icon: "fas fa-gift"
    },
    {
      q: "¿Mis datos están seguros?",
      a: "Absolutamente. Utilizamos encriptación AES-256, cumplimos con SOC 2 Tipo II, y cada agencia tiene su propio entorno aislado (multi-tenant seguro). Tus datos nunca se mezclan con los de otras empresas.",
      icon: "fas fa-shield-halved"
    },
    {
      q: "¿Puedo migrar mis datos de otro sistema?",
      a: "Sí, nuestro equipo de implementación te ayuda a migrar tus clientes, proveedores y operaciones desde tu sistema actual. Ofrecemos soporte personalizado durante todo el proceso de onboarding.",
      icon: "fas fa-arrows-turn-to-dots"
    }
  ];

  return (
    <PageLayout 
      title="Preguntas Frecuentes"
      tagline="Todo lo que necesitas saber"
    >
      <div className="faq-container">
        {faqs.map((faq, index) => (
          <div 
            key={index} 
            className={`faq-item ${openIndex === index ? 'faq-open' : ''}`}
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          >
            <div className="faq-question">
              <div className="faq-question-left">
                <i className={faq.icon}></i>
                <h4>{faq.q}</h4>
              </div>
              <i className={`fas fa-chevron-${openIndex === index ? 'up' : 'down'}`}></i>
            </div>
            {openIndex === index && (
              <div className="faq-answer">
                <p>{faq.a}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </PageLayout>
  );
};

export default FAQ;

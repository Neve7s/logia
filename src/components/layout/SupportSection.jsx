import React from 'react';
import { Link } from 'react-router-dom';
import { SITE_CONTENT } from '../../data/siteContent';

const { footer } = SITE_CONTENT;

const channels = [
  {
    icon: 'fab fa-whatsapp',
    title: 'WhatsApp Business',
    description: 'Respuesta rápida para consultas operativas y comerciales.',
    action: 'Abrir WhatsApp',
    href: footer.contact.whatsappLink,
    external: true,
  },
  {
    icon: 'fas fa-phone-volume',
    title: 'Línea directa',
    description: `Atención telefónica en horario ${footer.contact.hours}.`,
    action: footer.contact.whatsapp,
    href: `tel:${footer.contact.whatsapp.replace(/\s/g, '')}`,
    external: false,
  },
  {
    icon: 'fas fa-envelope-open-text',
    title: 'Email de soporte',
    description: 'Tickets técnicos, facturación y solicitudes formales.',
    action: footer.contact.email,
    href: `mailto:${footer.contact.email}`,
    external: false,
  },
  {
    icon: 'fas fa-headset',
    title: 'Centro de soporte',
    description: 'Guías, preguntas frecuentes y canales de atención.',
    action: 'Ir al centro de ayuda',
    to: '/soporte',
    external: false,
  },
];

const SupportSection = () => {
  return (
    <section id="soporte" className="support-premium-section py-large">
      <div className="container-x">
        <div className="row align-items-center g-5">
          <div className="col-lg-5">
            <span className="tagline">Asistencia humana</span>
            <h2 className="section-title">Soporte <span className="text-highlight">especializado</span></h2>
            <p className="section-desc">
              No estás solo. Nuestro equipo de especialistas te acompaña en la implementación,
              la operación diaria y la adopción de cada módulo.
            </p>
            <div className="support-meta">
              <span><i className="fas fa-clock" aria-hidden="true"></i> {footer.contact.hours}</span>
              <span><i className="fas fa-location-dot" aria-hidden="true"></i> {footer.contact.location}</span>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="support-channels">
              {channels.map((channel) => {
                const content = (
                  <>
                    <span className="support-channel-icon">
                      <i className={channel.icon} aria-hidden="true"></i>
                    </span>
                    <span className="support-channel-body">
                      <strong>{channel.title}</strong>
                      <span>{channel.description}</span>
                      <span className="support-channel-action">
                        {channel.action} <i className="fas fa-arrow-right" aria-hidden="true"></i>
                      </span>
                    </span>
                  </>
                );

                if (channel.to) {
                  return (
                    <Link key={channel.title} to={channel.to} className="support-channel-card">
                      {content}
                    </Link>
                  );
                }

                return (
                  <a
                    key={channel.title}
                    href={channel.href}
                    className="support-channel-card"
                    {...(channel.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  >
                    {content}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportSection;

import React, { useState } from 'react';
import logo from '../../assets/favicon.svg';

const techNodes = [
  {
    title: 'LogIA Central',
    icon: 'microchip',
    description: 'El corazón de tu agencia, diseñado para funcionar rápido y sin errores en todas tus operaciones diarias.',
    highlight: true,
  },
  {
    title: 'Privacidad Absoluta',
    icon: 'server',
    description: 'Tu información completamente separada y protegida del resto. Tus datos nunca se mezclarán con los de otras agencias.',
  },
  {
    title: 'Conexiones Directas',
    icon: 'satellite-dish',
    description: 'Consultas instantáneas a SUNAT y RENIEC, emisión de facturas conectada directamente con los autorizados.',
  },
  {
    title: 'Seguridad Bancaria',
    icon: 'shield-halved',
    description: 'Estándares de seguridad de instituciones financieras. Credenciales encriptadas, acceso controlado por empleado.',
  },
  {
    title: 'Velocidad sin Pausas',
    icon: 'bolt',
    description: 'Generación de PDFs, correos masivos y tareas complejas sin congelar tu pantalla. Tu operativa nunca se detiene.',
  },
  {
    title: 'Copias de Seguridad',
    icon: 'database',
    description: 'Respaldo automático diario en servidores externos ultra seguros. Recuperación rápida ante cualquier imprevisto.',
  },
];

const TechHub = () => {
  const [activeNode, setActiveNode] = useState(null);

  return (
    <section id="tecnologia" className="tech-hub-section py-large">
      <div className="tech-visual-bg animated-galaxy-bg" />
      <div className="container-x position-relative z-2">
        <div className="text-center mb-5">
          <span className="tagline">Ecosistema Flux</span>
          <h2 className="section-title text-white">Infraestructura <span className="text-highlight">Resiliente</span></h2>
          <p className="section-desc mx-auto" style={{ maxWidth: '700px', color: 'var(--text-muted)' }}>
            Tu agencia respaldada por una plataforma robusta y segura, diseñada para que nunca dejes de operar.
          </p>
        </div>

        <div className="tech-grid">
          {techNodes.map((node, i) => (
            <div
              key={i}
              className={`tech-card ${node.highlight ? 'tech-card-core' : 'tech-card-clickable'}`}
              onClick={node.highlight ? undefined : () => setActiveNode(node)}
            >
              {node.highlight ? (
                <div className="tech-card-core-inner">
                  <img src={logo} alt="LogIA" width={28} height={28} />
                  <h3>Log<span style={{ color: 'var(--accent-indigo)' }}>IA</span></h3>
                </div>
              ) : (
                <>
                  <div className="tech-card-icon">
                    <i className={`fas fa-${node.icon}`}></i>
                  </div>
                  <h4 className="tech-card-title">{node.title}</h4>
                </>
              )}
            </div>
          ))}
        </div>

        {activeNode && (
          <div className="tech-modal-overlay active" onClick={() => setActiveNode(null)}>
            <div className="tech-modal" onClick={(e) => e.stopPropagation()}>
              <button className="tech-modal-close" onClick={() => setActiveNode(null)}>
                <i className="fas fa-xmark"></i>
              </button>
              <div className="tech-modal-header">
                <div className="tech-modal-icon">
                  <i className={`fas fa-${activeNode.icon}`}></i>
                </div>
                <h3>{activeNode.title}</h3>
              </div>
              <p className="tech-modal-text">{activeNode.description}</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default TechHub;

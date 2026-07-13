import React, { useState } from 'react';
import logo from '../../assets/favicon.svg';

const TechHub = () => {
  const [modal, setModal] = useState(null);

  const techNodes = [
    {
      id: 'core',
      title: 'LogIA Central',
      icon: 'microchip',
      description: 'El corazón de tu agencia, diseñado para funcionar rápido y sin errores en todas tus operaciones diarias.',
      features: [
        'Plataforma estable diseñada para empresas de logística.',
        'Conecta y organiza todas las áreas de tu agencia en un solo lugar.',
        'Sistema siempre disponible, listo para trabajar cuando tú lo estés.'
      ]
    },
    {
      id: 'privacy',
      title: 'Privacidad Absoluta',
      icon: 'server',
      description: 'Garantizamos que la información de tu agencia esté completamente separada y protegida del resto.',
      features: [
        'Tus datos nunca se mezclarán con los de otras agencias.',
        'Acceso exclusivo a través de tu propio entorno corporativo.',
        'Privacidad garantizada en cada cotización y operación.'
      ],
      position: { left: '50%', top: '5%' }
    },
    {
      id: 'api',
      title: 'Conexiones Directas',
      icon: 'satellite-dish',
      description: 'Conectamos tu agencia directamente con las entidades que necesitas para operar sin demoras ni intermediarios.',
      features: [
        'Autocompletado instantáneo de datos con consultas a SUNAT y RENIEC.',
        'Emisión de facturas conectada directamente con los autorizados.',
        'Todo sincronizado y actualizado al instante.'
      ],
      position: { left: '83%', top: '28%' }
    },
    {
      id: 'security',
      title: 'Seguridad de Grado Bancario',
      icon: 'shield-halved',
      description: 'Aplicamos los mismos estándares de seguridad que las instituciones financieras para proteger tus datos más sensibles.',
      features: [
        'Tus credenciales y claves están encriptadas y protegidas.',
        'Acceso seguro para todo tu equipo desde cualquier lugar.',
        'Control exacto de qué puede ver y hacer cada empleado.'
      ],
      position: { left: '73%', top: '80%' }
    },
    {
      id: 'async',
      title: 'Velocidad sin Pausas',
      icon: 'bolt',
      description: 'El sistema sigue funcionando rápido incluso cuando está realizando tareas complejas en segundo plano.',
      features: [
        'Generación de múltiples PDFs sin congelar tu pantalla.',
        'Envío de correos masivos mientras sigues trabajando.',
        'Tu operativa diaria nunca se detiene ni se vuelve lenta.'
      ],
      position: { left: '27%', top: '80%' }
    },
    {
      id: 'backup',
      title: 'Copias de Seguridad',
      icon: 'database',
      description: 'Tu información está respaldada automáticamente para que nunca pierdas el trabajo de tu agencia.',
      features: [
        'El sistema guarda copias de seguridad todos los días sin que hagas nada.',
        'Tu información se almacena en servidores externos ultra seguros.',
        'Recuperación rápida de datos ante cualquier imprevisto.'
      ],
      position: { left: '17%', top: '28%' }
    }
  ];

  return (
    <>
      <section id="tecnologia" className="tech-hub-section py-large">
        <div className="tech-visual-bg animated-galaxy-bg" id="hub-canvas" />
        <div className="container-x position-relative">
          <div className="text-center mb-5 position-relative z-2">
            <span className="tagline">Ecosistema Flux</span>
            <h2 className="section-title text-white">Infraestructura <span className="text-highlight">Resiliente</span></h2>
            <p className="section-desc mx-auto" style={{ maxWidth: '700px', color: 'var(--text-muted)' }}>
              Tu agencia respaldada por una plataforma robusta y segura, diseñada para que nunca dejes de operar.
            </p>
          </div>

          <div className="tech-mindmap-container position-relative z-2 mt-5">
            <div className="planet-orbit">
              <svg className="mindmap-lines" viewBox="0 0 1000 700" preserveAspectRatio="xMidYMid meet">
                <path className="connection-line" d="M500,350 L500,70" />
                <path className="connection-line" d="M500,350 L830,165" />
                <path className="connection-line" d="M500,350 L750,560" />
                <path className="connection-line" d="M500,350 L250,560" />
                <path className="connection-line" d="M500,350 L170,165" />
              </svg>

              <div
                className="bento-node node-core modal-trigger"
                onClick={() => setModal(techNodes[0])}
                style={{ left: '50%', top: '50%', position: 'absolute', transform: 'translate(-50%, -50%)' }}
              >
                <div className="core-pulse" />
                <img src={logo} alt="LogIA Core" className="core-logo" width={50} height={50} />
                <h3>Log<span style={{ color: 'var(--accent-indigo)' }}>IA</span></h3>
              </div>

              {techNodes.slice(1).map(node => (
                <div
                  key={node.id}
                  className={`bento-node node-${node.id} modal-trigger`}
                  onClick={() => setModal(node)}
                  style={{ position: 'absolute', ...node.position, transform: 'translate(-50%, -50%)' }}
                >
                  <i className={`fas fa-${node.icon} node-icon`}></i>
                  <h4>{node.title}</h4>
                  <p>{node.description.substring(0, 60)}...</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {modal && (
        <div className="tech-modal-overlay active" onClick={() => setModal(null)}>
          <div className="tech-modal" onClick={(e) => e.stopPropagation()}>
            <button className="tech-modal-close" onClick={() => setModal(null)}>
              <i className="fas fa-times"></i>
            </button>
            <div className="tech-modal-header">
              <i className={`fas fa-${modal.icon}`}></i>
              <h3>{modal.title}</h3>
            </div>
            <div className="tech-modal-body">
              <p>{modal.description}</p>
              <div className="tech-modal-divider"></div>
              <h4 className="tech-modal-subtitle">Características</h4>
              <ul className="tech-modal-features">
                {modal.features.map((feat, idx) => (
                  <li key={idx}><i className="fas fa-check"></i> {feat}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TechHub;

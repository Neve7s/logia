import React from 'react';

const AppCard = ({ app, index }) => {
  const isEven = index % 2 === 0;

  return (
    <div className="module-slide-layout">
      <div className="module-slide-content" style={{ order: isEven ? 1 : 2 }}>
        <div className="card-icon"><i className={`fas ${app.icon}`}></i></div>
        <h3 className="card-title">{app.title}</h3>
        <p className="card-text">{app.description}</p>
        <ul className="module-feature-list">
          {app.features.map((feature, idx) => (
            <li key={idx}><i className="fas fa-check"></i> {feature}</li>
          ))}
        </ul>
      </div>
      <div className="module-slide-image" style={{ order: isEven ? 2 : 1 }}>
        <img src={app.image} alt={app.title} className="img-fluid rounded-4 shadow-lg" />
        <div className="system-mockup-tag">{app.tag}</div>
      </div>
    </div>
  );
};

export default AppCard;

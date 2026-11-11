import React, { useState } from 'react';
import PageLayout from '../components/layout/PageLayout';
import { TUTORIALS, getYoutubeId } from '../data/tutorials';

const Tutoriales = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const active = TUTORIALS[activeIndex];
  const isSingle = TUTORIALS.length <= 1;

  return (
    <PageLayout title="Tutoriales" tagline="Aprende a usar LogIA" fullWidth={true}>
      <div className="app-page">
        <p className="tutorials-intro">
          Videos cortos y prácticos para configurar tu empresa, usar cada módulo y sacarle más
          provecho a la plataforma. Puedes empezar por el primero o ir directo al tema que necesitas.
        </p>

        {active ? (
          <div className={`tutorials-layout${isSingle ? ' is-single' : ''}`}>
            <div className="tutorials-player">
              <div className="tutorials-frame">
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${getYoutubeId(active.youtubeUrl)}?rel=0`}
                  title={active.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  loading="lazy"
                />
              </div>

              <div className="tutorials-meta">
                <span className="tutorials-tag">{active.category}</span>
                <h2>{active.title}</h2>
                <p>{active.description}</p>
                <a
                  href={active.youtubeUrl}
                  className="tutorials-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ver en YouTube
                  <i className="fas fa-arrow-up-right-from-square" aria-hidden="true"></i>
                </a>
              </div>
            </div>

            {!isSingle && (
              <aside className="tutorials-list" aria-label="Más tutoriales">
                {TUTORIALS.map((tutorial, index) => (
                  <button
                    key={tutorial.id}
                    type="button"
                    className={`tutorial-card${index === activeIndex ? ' is-active' : ''}`}
                    onClick={() => setActiveIndex(index)}
                    aria-pressed={index === activeIndex}
                  >
                    <img
                      src={`https://img.youtube.com/vi/${getYoutubeId(tutorial.youtubeUrl)}/hqdefault.jpg`}
                      alt=""
                      loading="lazy"
                    />
                    <span className="tutorial-card-body">
                      <span className="tutorial-card-tag">{tutorial.category}</span>
                      <span className="tutorial-card-title">{tutorial.title}</span>
                    </span>
                  </button>
                ))}
              </aside>
            )}
          </div>
        ) : (
          <div className="app-page-cta text-center">
            <h3>Estamos preparando los tutoriales</h3>
            <p>Muy pronto encontrarás aquí los videos guía de cada módulo.</p>
            <div className="app-page-cta-actions">
              <a
                href="https://app.logia.lat/register/company/"
                className="btn-executive-large"
                target="_blank"
                rel="noopener noreferrer"
              >
                Empezar gratis
              </a>
            </div>
          </div>
        )}
      </div>
    </PageLayout>
  );
};

export default Tutoriales;

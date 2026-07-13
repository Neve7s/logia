import React from 'react';
import PageLayout from '../components/layout/PageLayout';
import { UPDATES } from '../data/appData';

const Updates = () => {
  return (
    <PageLayout 
      title="Updates & Changelog"
      tagline="Novedades del producto"
    >
      <div className="updates-timeline">
        {UPDATES.map((update, index) => (
          <div key={index} className="update-item">
            <div className="update-header">
              <div className="update-date">{update.date}</div>
              {update.tags && update.tags.length > 0 && (
                <div className="update-tags">
                  {update.tags.map((tag, i) => (
                    <span key={i} className="update-tag">{tag}</span>
                  ))}
                </div>
              )}
            </div>
            <h3>{update.title}</h3>
            <p className="update-description">{update.description}</p>
          </div>
        ))}
      </div>
    </PageLayout>
  );
};

export default Updates;

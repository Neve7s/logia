import React, { useState } from 'react';
import PageLayout from '../components/layout/PageLayout';
import { SITE_CONTENT } from '../data/siteContent';

const { faq } = SITE_CONTENT;

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <PageLayout title="Preguntas Frecuentes" tagline="Todo lo que necesitas saber">
      <div className="faq-container">
        {faq.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div key={index} className={`faq-item ${isOpen ? 'faq-open' : ''}`}>
              <h3 className="faq-question-heading">
                <button
                  type="button"
                  className="faq-question"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                  id={`faq-question-${index}`}
                >
                  <span className="faq-question-left">
                    <i className={item.icon} aria-hidden="true"></i>
                    <span className="faq-question-title">{item.q}</span>
                  </span>
                  <i className={`fas fa-chevron-${isOpen ? 'up' : 'down'}`} aria-hidden="true"></i>
                </button>
              </h3>
              {isOpen && (
                <div
                  className="faq-answer"
                  id={`faq-answer-${index}`}
                  role="region"
                  aria-labelledby={`faq-question-${index}`}
                >
                  <p>{item.a}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </PageLayout>
  );
};

export default FAQ;

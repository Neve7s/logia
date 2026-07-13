import React, { useState } from 'react';
import PageLayout from '../components/layout/PageLayout';
import { SITE_CONTENT } from '../data/siteContent';

const { faq } = SITE_CONTENT;

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <PageLayout title="Preguntas Frecuentes" tagline="Todo lo que necesitas saber">
      <div className="faq-container">
        {faq.map((item, index) => (
          <div key={index} className={`faq-item ${openIndex === index ? 'faq-open' : ''}`}
            onClick={() => setOpenIndex(openIndex === index ? null : index)}>
            <div className="faq-question">
              <div className="faq-question-left">
                <i className={item.icon}></i>
                <h4>{item.q}</h4>
              </div>
              <i className={`fas fa-chevron-${openIndex === index ? 'up' : 'down'}`}></i>
            </div>
            {openIndex === index && (
              <div className="faq-answer"><p>{item.a}</p></div>
            )}
          </div>
        ))}
      </div>
    </PageLayout>
  );
};

export default FAQ;

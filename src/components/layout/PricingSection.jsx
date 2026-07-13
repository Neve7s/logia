import React, { useState } from 'react';
import { SITE_CONTENT } from '../../data/siteContent';

const { pricing } = SITE_CONTENT;

const PricingSection = () => {
  const [period, setPeriod] = useState('monthly');

  const discounts = { monthly: 0, '3months': 0.05, '6months': 0.10, annual: 0.15 };
  const monthsCount = { monthly: 1, '3months': 3, '6months': 6, annual: 12 };

  return (
    <section id="precios" className="pricing-section py-large">
      <div className="container-x">
        <div className="text-center mb-5">
          <span className="tagline">{pricing.tagline}</span>
          <h2 className="section-title" dangerouslySetInnerHTML={{ __html: pricing.title }} />
          <div className="pricing-controls" style={{ marginTop: '16px' }}>
            <div className="pricing-toggle" role="tablist" aria-label="Seleccionar periodo de facturación">
              {Object.keys(discounts).map(p => (
                <button
                  key={p}
                  className={`period-btn ${period === p ? 'active' : ''}`}
                  onClick={() => setPeriod(p)}
                >
                  {p === 'monthly' ? 'Mensual' : p === '3months' ? '3 Meses' : p === '6months' ? '6 Meses' : 'Anual'}
                  {discounts[p] > 0 && <span className="discount">-{Math.round(discounts[p] * 100)}%</span>}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="row g-4 justify-content-center">
          {pricing.plans.map((plan, idx) => {
            const discount = discounts[period];
            const price = (plan.basePrice * (1 - discount)).toFixed(2);
            const totalPrice = monthsCount[period] > 1 ? (price * monthsCount[period]).toFixed(2) : null;

            return (
              <div key={idx} className="col-lg-4 col-md-6">
                <div className={`plan-card ${plan.featured ? 'plan-featured' : ''}`} style={!plan.featured && plan.name === 'Premium' ? { borderColor: '#f59e0b' } : {}}>
                  {plan.badge && <div className="featured-badge" style={{ background: plan.featured ? '#0ea5e9' : '#f59e0b' }}>{plan.badge}</div>}
                  <div className="plan-head">
                    <h3 className="plan-name">{plan.name}</h3>
                    <div className="plan-price">
                      <span className="currency">USD</span>
                      <span className="amount">{price}</span>
                      <span className="period">/mes</span>
                      {totalPrice && (
                        <div className="price-aux">
                          <span className="total-price" aria-hidden="true">
                            {period === 'annual' ? 'Pago anual' : `Pago por ${monthsCount[period]} meses`}: <strong>USD {totalPrice}</strong>
                          </span>
                        </div>
                      )}
                    </div>
                    <p className="plan-desc">{plan.description}</p>
                  </div>
                  <ul className="plan-features">
                    {plan.features.map((feat, i) => (
                      <li key={i}>
                        <i className={i === 0 && idx !== 0 ? 'fas fa-plus' : 'fas fa-check'} style={i === 0 && idx !== 0 ? { color: 'var(--accent-purple)' } : {}}></i>
                        {feat}
                      </li>
                    ))}
                  </ul>
                  {plan.featured ? (
                    <a href={plan.ctaLink} className="btn-executive" style={{ background: '#0ea5e9', color: '#fff' }}>{plan.cta}</a>
                  ) : (
                    <a href={plan.ctaLink} className="btn-plan-outline" style={{ borderColor: plan.name === 'Premium' ? '#f59e0b' : 'var(--accent-indigo)' }}>{plan.cta}</a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;

import React, { useState } from 'react';
import { SITE_CONTENT } from '../../data/siteContent';

const { pricing } = SITE_CONTENT;

const periodLabels = {
  monthly: 'Mensual',
  '3months': '3 Meses',
  '6months': '6 Meses',
  annual: 'Anual',
};

const periodDiscounts = {
  monthly: 0,
  '3months': 0.05,
  '6months': 0.10,
  annual: 0.15,
};

const monthsCount = {
  monthly: 1,
  '3months': 3,
  '6months': 6,
  annual: 12,
};

const PricingSection = () => {
  const [period, setPeriod] = useState('monthly');

  const discount = periodDiscounts[period];
  const months = monthsCount[period];

  return (
    <section id="precios" className="pricing-section py-large">
      <div className="container-x">
        {/* Header */}
        <div className="text-center mb-4">
          <span className="tagline">{pricing.tagline}</span>
          <h2 className="section-title" dangerouslySetInnerHTML={{ __html: pricing.title }} />
        </div>

        {/* Toggle de período */}
        <div className="pricing-controls">
          <div className="pricing-toggle" role="tablist" aria-label="Seleccionar periodo de facturación">
            {Object.keys(periodDiscounts).map((p) => (
              <button
                key={p}
                className={`period-btn ${period === p ? 'active' : ''}`}
                onClick={() => setPeriod(p)}
                role="tab"
                aria-selected={period === p}
              >
                <span className="period-label">{periodLabels[p]}</span>
                {periodDiscounts[p] > 0 && (
                  <span className="discount-badge">-{Math.round(periodDiscounts[p] * 100)}%</span>
                )}
              </button>
            ))}
          </div>
          {discount > 0 && (
            <p className="pricing-savings-msg">
              Ahorras hasta <strong>{Math.round(discount * 100)}%</strong> con el plan {periodLabels[period].toLowerCase()}
            </p>
          )}
        </div>

        {/* Tarjetas de planes */}
        <div className="pricing-grid">
          {pricing.plans.map((plan, idx) => {
            const isCustom = plan.basePrice === null;
            const monthlyPrice = isCustom ? null : plan.basePrice;
            const discountedPrice = isCustom ? null : (monthlyPrice * (1 - discount)).toFixed(2);
            const totalPrice = !isCustom && months > 1 ? (discountedPrice * months).toFixed(2) : null;
            const monthlySavings = !isCustom && discount > 0 ? (monthlyPrice - parseFloat(discountedPrice)).toFixed(2) : null;

            return (
              <div
                key={idx}
                className={`plan-card ${plan.featured ? 'plan-featured' : ''} ${isCustom ? 'plan-custom' : ''}`}
              >
                {/* Badge */}
                {plan.badge && (
                  <div className="featured-badge">{plan.badge}</div>
                )}

                {/* Icono + Nombre */}
                <div className="plan-header">
                  <div className="plan-icon" style={{ background: `${plan.color}18`, borderColor: `${plan.color}30` }}>
                    <i className={plan.icon} style={{ color: plan.color }}></i>
                  </div>
                  <h3 className="plan-name">{plan.name}</h3>
                </div>

                {/* Precio */}
                <div className="plan-price-block">
                  {isCustom ? (
                    <div className="custom-price">
                      <span className="custom-price-text">A Medida</span>
                    </div>
                  ) : (
                    <>
                      <div className="price-main">
                        <span className="currency">USD</span>
                        <span className="amount">{discountedPrice}</span>
                        <span className="period">/mes</span>
                      </div>
                      {totalPrice && (
                        <div className="price-summary">
                          <span className="total-paid">
                            Pago total: <strong>USD {totalPrice}</strong>
                          </span>
                          {monthlySavings > 0 && (
                            <span className="monthly-savings">
                              Ahorras USD {monthlySavings}/mes
                            </span>
                          )}
                        </div>
                      )}
                    </>
                  )}
                </div>

                {/* Descripción */}
                <p className="plan-desc">{plan.description}</p>

                {/* Features */}
                <ul className="plan-features">
                  {plan.features.map((feat, i) => (
                    <li key={i}>
                      <i className={i === 0 && idx !== 0 ? 'fas fa-plus' : 'fas fa-check'} style={i === 0 && idx !== 0 ? { color: plan.color } : {}}></i>
                      {feat}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href={plan.ctaLink}
                  className={plan.featured ? 'btn-executive' : 'btn-plan-outline'}
                  style={
                    plan.featured
                      ? { background: plan.color, color: '#fff' }
                      : { borderColor: plan.color, color: plan.color }
                  }
                >
                  {plan.cta}
                </a>
              </div>
            );
          })}
        </div>

        {/* Nota inferior */}
        <p className="pricing-note text-center">
          Todos los planes incluyen 14 días de prueba gratis sin tarjeta de crédito.
        </p>
      </div>
    </section>
  );
};

export default PricingSection;

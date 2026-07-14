import React from 'react';
import { useParams, Link } from 'react-router-dom';
import PageLayout from '../components/layout/PageLayout';
import { SITE_CONTENT } from '../data/siteContent';
import cotizadorImg from '../assets/ecosistema/cotizador.webp';
import shipmentImg from '../assets/ecosistema/shipment.webp';
import fiannza1Img from '../assets/ecosistema/fiannza1.webp';
import maestrosImg from '../assets/ecosistema/maestros.webp';
import kpiImg from '../assets/ecosistema/kpi.webp';
import configuracionImg from '../assets/ecosistema/configuracion.webp';
import atsImg from '../assets/ecosistema/ats.jpg';
import consulteeImg from '../assets/ecosistema/consultee.webp';
import kpiImg from '../assets/ecosistema/kpi.webp';

const { appGallery } = SITE_CONTENT;

const imageMap = {
  'cotizador.webp': cotizadorImg,
  'shipment.webp': shipmentImg,
  'fiannza1.webp': fiannza1Img,
  'maestros.webp': maestrosImg,
  'kpi.webp': kpiImg,
  'configuracion.webp': configuracionImg,
  'ats.jpg': atsImg,
  'consultee.webp': consulteeImg,
  'kpi.webp': kpiImg,
};

const slugToId = {
  cotizador: 'cotizador',
  shipments: 'shipments',
  facturacion: 'facturacion',
  maestros: 'maestros',
  reclutamiento: 'reclutamiento',
  configuracion: 'configuracion',
};

const AppDetail = () => {
  const { appId } = useParams();
  const app = appGallery.apps.find(a => a.id === slugToId[appId]);

  if (!app) {
    return (
      <PageLayout title="Aplicación no encontrada" tagline="404">
        <div className="text-center" style={{ padding: '4rem 0' }}>
          <p style={{ color: 'var(--text-muted)' }}>Esta aplicación no existe.</p>
          <Link to="/" className="btn-executive" style={{ marginTop: '1rem', display: 'inline-block' }}>Volver al inicio</Link>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout title={app.title} tagline={app.tagline}>
      <div className="app-detail-page">
        {/* Hero de la app */}
        <div className="row align-items-center g-5 mb-5">
          <div className="col-lg-6">
            <div className="app-detail-hero-icon">
              <i className={`fas ${app.icon}`}></i>
            </div>
            <h2 style={{ color: 'var(--text-primary)', fontSize: '2rem', fontWeight: 800, marginTop: '1.5rem' }}>
              {app.title}
            </h2>
            <p style={{ color: 'var(--accent-indigo)', fontSize: '1.1rem', fontWeight: 600, marginTop: '0.5rem' }}>
              {app.tagline}
            </p>
            <div className="app-detail-time-badge">
              <i className="fas fa-bolt"></i> {app.timeSaved}
            </div>
          </div>
          <div className="col-lg-6">
            <div className="app-detail-hero-image">
              <img src={imageMap[app.image]} alt={app.title} className="img-fluid rounded-4" />
            </div>
          </div>
        </div>

        {/* Problema vs Solución */}
        <div className="row g-4 mb-5">
          <div className="col-md-6">
            <div className="app-detail-card problem">
              <div className="app-detail-card-header">
                <i className="fas fa-exclamation-triangle"></i>
                <h3>El Problema</h3>
              </div>
              <p>{app.problem}</p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="app-detail-card solution">
              <div className="app-detail-card-header">
                <i className="fas fa-check-circle"></i>
                <h3>La Solución</h3>
              </div>
              <p>{app.solution}</p>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="mb-5">
          <h3 style={{ color: 'var(--text-primary)', fontSize: '1.4rem', fontWeight: 700, marginBottom: '1.5rem' }}>
            Funcionalidades Clave
          </h3>
          <div className="row g-3">
            {app.features.map((feat, i) => (
              <div key={i} className="col-md-6">
                <div className="app-feature-detail-item">
                  <i className="fas fa-check-circle"></i>
                  <span>{feat}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="app-detail-cta text-center">
          <h3 style={{ color: 'var(--text-primary)', fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>
            ¿Listo para probar {app.title}?
          </h3>
          <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', maxWidth: '500px', margin: '0 auto 1.5rem' }}>
            14 días de prueba gratuita. Sin tarjeta de crédito. Cancela cuando quieras.
          </p>
          <a href="https://app.logia.lat/register/company/" className="btn-executive-large" target="_blank" rel="noopener noreferrer">
            <i className="fas fa-rocket" style={{ marginRight: '0.5rem' }}></i>
            Empezar Gratis
          </a>
        </div>
      </div>
    </PageLayout>
  );
};

export default AppDetail;

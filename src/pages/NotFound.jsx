import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const NotFound = () => {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <div className="container-x not-found">
          <span className="tagline">Error 404</span>
          <h1 className="section-title">No encontramos esta página</h1>
          <p className="section-desc">
            El enlace puede estar desactualizado o la página pudo haberse movido.
            Puedes volver al inicio o explorar nuestras soluciones.
          </p>
          <div className="not-found-actions">
            <Link to="/" className="btn-executive-large">Volver al inicio</Link>
            <Link to="/soporte" className="btn-outline-premium">Contactar soporte</Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default NotFound;

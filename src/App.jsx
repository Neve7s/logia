import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Updates from './pages/Updates';
import Support from './pages/Support';
import FAQ from './pages/FAQ';
import Cotizador from './pages/aplications/Cotizador';
import Shipments from './pages/aplications/Shipments';
import FactElectronica from './pages/aplications/FactElectronica';
import DataMaster from './pages/aplications/DataMaster';
import Recruiment from './pages/aplications/Recruiment';
import Mailer from './pages/aplications/Mailer';
import Consultador from './pages/aplications/Consultador';
import ThreeBackground from './components/layout/ThreeBackground';

function App() {
  return (
    <div className="executive-dark">
      <ThreeBackground />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/privacidad" element={<Privacy />} />
          <Route path="/terminos" element={<Terms />} />
          <Route path="/actualizaciones" element={<Updates />} />
          <Route path="/soporte" element={<Support />} />
          <Route path="/preguntas" element={<FAQ />} />
          <Route path="/app/cotizador" element={<Cotizador />} />
          <Route path="/app/shipments" element={<Shipments />} />
          <Route path="/app/facturacion" element={<FactElectronica />} />
          <Route path="/app/maestros" element={<DataMaster />} />
          <Route path="/app/reclutamiento" element={<Recruiment />} />
          <Route path="/app/comunicaciones" element={<Mailer />} />
          <Route path="/app/consultador" element={<Consultador />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

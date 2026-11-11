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
import Configuracion from './pages/aplications/Configuracion';
import Academy from './pages/Academy';
import Servicios from './pages/Servicios';
import Tutoriales from './pages/Tutoriales';
import Cookies from './pages/Cookies';
import NotFound from './pages/NotFound';
import ThreeBackground from './components/layout/ThreeBackground';
import WhatsAppFloat from './components/widgets/WhatsAppFloat';
import ChatIA from './components/widgets/ChatIA';
import RouteSeo from './components/layout/RouteSeo';
import ScrollToTop from './components/layout/ScrollToTop';

function App() {
  return (
    <div className="executive-dark">
      <ThreeBackground />
      <BrowserRouter>
        <ScrollToTop />
        <RouteSeo />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/privacidad" element={<Privacy />} />
          <Route path="/terminos" element={<Terms />} />
          <Route path="/cookies" element={<Cookies />} />
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
          <Route path="/app/configuracion" element={<Configuracion />} />
          <Route path="/academy" element={<Academy />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/tutoriales" element={<Tutoriales />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <WhatsAppFloat />
      <ChatIA />
    </div>
  );
}

export default App;

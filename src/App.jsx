import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Updates from './pages/Updates';
import Support from './pages/Support';
import FAQ from './pages/FAQ';
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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

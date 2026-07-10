import React from 'react';
import Layout from './components/Layout';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeatureSection from './components/FeatureSection';
import BenefitsSection from './components/BenefitsSection';
import UseCasesSection from './components/UseCasesSection';

function App() {
  return (
    <Layout>
      <Navbar />
      <main>
        <HeroSection />
        <FeatureSection />
        <BenefitsSection />
        <UseCasesSection />
      </main>
    </Layout>
  );
}

export default App;

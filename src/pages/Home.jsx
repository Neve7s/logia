import React from 'react';
import Navbar from '../components/layout/Navbar';
import HeroSection from '../components/layout/HeroSection';
import VideoShowcase from '../components/layout/VideoShowcase';
import AdminHub from '../components/modules/AdminHub';
import ModulesSection from '../components/modules/ModulesSection';
import TechHub from '../components/layout/TechHub';
import AcademySection from '../components/layout/AcademySection';
import SupportSection from '../components/layout/SupportSection';
import PricingSection from '../components/layout/PricingSection';
import Footer from '../components/layout/Footer';

const Home = () => {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <VideoShowcase />
        <AdminHub />
        <ModulesSection />
        <TechHub />
        <AcademySection />
        <SupportSection />
        <PricingSection />
      </main>
      <Footer />
    </>
  );
};

export default Home;

import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import HeroSection from '../components/layout/HeroSection';
import HeroCrossfade from '../components/layout/HeroCrossfade';
import HowItWorks from '../components/layout/HowItWorks';
import AdminHub from '../components/modules/AdminHub';
import AboutSection from '../components/layout/AboutSection';
import PricingSection from '../components/layout/PricingSection';
import SupportSection from '../components/layout/SupportSection';
import CtaBand from '../components/layout/CtaBand';
import Footer from '../components/layout/Footer';

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    const target = location.state?.scrollTo || location.hash;
    if (!target) return undefined;

    const selector = target.startsWith('#') ? target : `#${target}`;
    const element = document.querySelector(selector);
    if (!element) return undefined;

    const timer = window.setTimeout(() => {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 120);

    return () => window.clearTimeout(timer);
  }, [location.state?.scrollTo, location.hash]);

  return (
    <>
      <Navbar />
      <main id="main-content" className="home-main">
        <HeroSection />
        <HowItWorks />
        <HeroCrossfade />
        <AdminHub />
        <AboutSection />
        <PricingSection />
        <SupportSection />
        <CtaBand />
      </main>
      <Footer />
    </>
  );
};

export default Home;

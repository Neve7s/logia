import React from 'react';
import Navbar from '../components/layout/Navbar';
import HeroSection from '../components/layout/HeroSection';
import HeroCrossfade from '../components/layout/HeroCrossfade';
import HowItWorks from '../components/layout/HowItWorks';
import AdminHub from '../components/modules/AdminHub';
import AppGallery from '../components/modules/AppGallery';
import TechHub from '../components/layout/TechHub';
import SocialProof from '../components/layout/SocialProof';
import PricingSection from '../components/layout/PricingSection';
import Footer from '../components/layout/Footer';

const Home = () => {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <HeroCrossfade />
        <HowItWorks />
        <AdminHub />
        <AppGallery />
        <TechHub />
        {/* <SocialProof /> */}
        <PricingSection />
      </main>
      <Footer />
    </>
  );
};

export default Home;

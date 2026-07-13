import React from 'react';
import Navbar from '../components/layout/Navbar';
import HeroSection from '../components/layout/HeroSection';
import SocialProof from '../components/layout/SocialProof';
import HowItWorks from '../components/layout/HowItWorks';
import VideoShowcase from '../components/layout/VideoShowcase';
import AdminHub from '../components/modules/AdminHub';
import AppGallery from '../components/modules/AppGallery';
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
        <SocialProof />
        <HowItWorks />
        <VideoShowcase />
        <AdminHub />
        <AppGallery />
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

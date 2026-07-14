import React from 'react';
import Navbar from '../components/layout/Navbar';
import HeroSection from '../components/layout/HeroSection';
import dashboardImg from '../assets/ecosistema/dashboard.webp';
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

        {/* Dashboard Preview */}
        <section className="hero-dashboard-preview">
          <div className="container-x">
            <div className="hero-dashboard-wrapper">
              <div className="hero-dashboard-glow"></div>
              <img src={dashboardImg} alt="LogIA Dashboard" className="hero-dashboard-img" />
            </div>
          </div>
        </section>

        <HowItWorks />
        <AdminHub />
        <AppGallery />
        <TechHub />
        <SocialProof />
        <PricingSection />
      </main>
      <Footer />
    </>
  );
};

export default Home;

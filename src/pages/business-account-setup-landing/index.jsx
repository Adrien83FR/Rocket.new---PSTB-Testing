// src/pages/business-account-setup-landing/index.jsx
import React from 'react';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import BusinessAccountSetupHero from './components/BusinessAccountSetupHero';
import BusinessFeatures from './components/BusinessFeatures';
import BusinessBenefits from './components/BusinessBenefits';
import AccountSetupCTA from './components/AccountSetupCTA';

const BusinessAccountSetupLanding = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 py-4 sm:py-6">
        {/* Hero Section */}
        <BusinessAccountSetupHero />
        
        {/* Features Section */}
        <BusinessFeatures />
        
        {/* Benefits Section */}
        <BusinessBenefits />
        
        {/* CTA Section */}
        <AccountSetupCTA />
      </main>
      
      <Footer />
    </div>
  );
};

export default BusinessAccountSetupLanding;
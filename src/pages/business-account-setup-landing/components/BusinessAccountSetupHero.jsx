// src/pages/business-account-setup-landing/components/BusinessAccountSetupHero.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../../components/ui/Button';

const BusinessAccountSetupHero = () => {
  const navigate = useNavigate();

  const handleSetupAccount = () => {
    navigate('/business/personal-information');
  };

  return (
    <section className="mb-12 sm:mb-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
        <div className="text-center lg:text-left order-2 lg:order-1">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
            Set up your business account today
          </h1>
          <p className="text-base sm:text-lg text-gray-700 mb-6 sm:mb-8">
            Take your business to the next level with our comprehensive business banking services.
            Manage finances, transactions, and growth opportunities all in one place.
          </p>
          <div className="flex justify-center lg:justify-start">
            <Button
              variant="primary"
              className="py-3 px-6 sm:px-8 text-sm sm:text-base w-full sm:w-auto"
              onClick={handleSetupAccount}
              rightIcon={
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 12L12 8M12 8L8 4M12 8H4" stroke="#22C55E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              }
            >
              Start Setup Process
            </Button>
          </div>
        </div>
        
        <div className="rounded-lg overflow-hidden shadow-xl order-1 lg:order-2 flex justify-center">
          <img 
            src="/public/assets/images/image-1749642150854.png" 
            alt="Business Banking" 
            className="w-full max-w-md lg:max-w-none h-auto object-cover"
            onError={(e) => {
              e.currentTarget.src = "/images/img_image_1.png";
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default BusinessAccountSetupHero;
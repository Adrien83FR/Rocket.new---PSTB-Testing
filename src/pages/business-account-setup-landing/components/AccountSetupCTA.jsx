// src/pages/business-account-setup-landing/components/AccountSetupCTA.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../../components/ui/Button';
import Card from '../../../components/ui/Card';

const AccountSetupCTA = () => {
  const navigate = useNavigate();

  const handleSetupAccount = () => {
    navigate('/business/personal-information');
  };

  return (
    <section className="mb-16">
      <Card variant="elevated" className="bg-gradient-to-r from-green-50 to-cyan-50 border border-green-200">
        <div className="py-10 px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to get started?</h2>
          <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
            Setting up your business account takes just a few minutes. Our streamlined process ensures
            you can quickly access all the tools you need to manage your business finances effectively.
          </p>
          <Button
            variant="primary"
            className="py-3 px-10 text-lg mx-auto"
            onClick={handleSetupAccount}
            rightIcon={
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 12L12 8M12 8L8 4M12 8H4" stroke="#22C55E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            }
          >
            Setup My Account
          </Button>
        </div>
      </Card>
    </section>
  );
};

export default AccountSetupCTA;

// src/pages/business-account-setup-landing/components/BusinessBenefits.jsx
import React from 'react';

const BusinessBenefits = () => {
  const benefits = [
    {
      id: 1,
      title: 'Professional Financial Image',
      description: 'Enhance your business credibility with clients and partners through a dedicated business account.'
    },
    {
      id: 2,
      title: 'Simplified Tax Management',
      description: 'Keep business expenses separate for easier tax preparation and filing.'
    },
    {
      id: 3,
      title: 'Streamlined Cash Flow',
      description: 'Better track and manage your business income and expenses with specialized tools.'
    },
    {
      id: 4,
      title: 'Growth Opportunities',
      description: 'Access business credit and financing options to support your company\'s expansion.'
    },
    {
      id: 5,
      title: 'Detailed Financial Reporting',
      description: 'Generate comprehensive reports to understand your business financial health.'
    },
    {
      id: 6,
      title: 'Multi-User Access',
      description: 'Allow team members appropriate access to financial tools while maintaining security.'
    }
  ];

  return (
    <section className="mb-16 bg-gray-100 py-12 px-8 rounded-xl">
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Benefits of a Business Account</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {benefits.map(benefit => (
          <div key={benefit.id} className="flex items-start">
            <div className="mt-1 mr-4">
              <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 3L4.5 8.5L2 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BusinessBenefits;

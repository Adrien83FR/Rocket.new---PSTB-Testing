// src/pages/business-account-setup-landing/components/BusinessFeatures.jsx
import React from 'react';
import Card from '../../../components/ui/Card';

const BusinessFeatures = () => {
  const features = [
    {
      id: 1,
      title: 'Dedicated Business Account',
      description: 'Separate your personal and business finances with a dedicated account designed for business needs.',
      icon: '/images/img_streamlinebank.svg'
    },
    {
      id: 2,
      title: 'Business Transactions',
      description: 'Handle invoices, payments, and transfers with specialized business transaction tools.',
      icon: '/images/img_icon_tansaction.svg'
    },
    {
      id: 3,
      title: 'Financial Insights',
      description: 'Get detailed analytics and insights to track and optimize your business performance.',
      icon: '/images/img_icon_bars.svg'
    },
    {
      id: 4,
      title: 'Business Growth Tools',
      description: 'Access tools and resources designed to help your business grow and succeed.',
      icon: '/images/img_group_1000001420.svg'
    }
  ];

  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Key Features for Your Business</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map(feature => (
          <Card 
            key={feature.id} 
            variant="elevated" 
            className="h-full transition-all hover:translate-y-[-4px]"
          >
            <div className="flex flex-col items-center text-center p-6">
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
                <img src={feature.icon} alt={feature.title} className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default BusinessFeatures;

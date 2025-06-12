// src/pages/Business/Information/index.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../../components/common/Header';
import Footer from '../../../components/common/Footer';
import Sidebar from '../../../components/common/Sidebar';
import Button from '../../../components/ui/Button';
import PhoneSection from './PhoneSection';
import AddressSection from './AddressSection';
import BusinessQuestions from './BusinessQuestions';
import ConfirmationScreen from '../../../components/common/ConfirmationScreen';

interface BusinessFormData {
  businessPhone: string;
  alternatePhone: string;
  streetNumber: string;
  streetAddress: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  fundingSource: string;
  isRegulatedInstitution: string;
  businessActivities: string[];
}

const BusinessInformation: React.FC = () => {
  const navigate = useNavigate();
  const [showConfirmation, setShowConfirmation] = useState(false);
  
  const [formData, setFormData] = useState<BusinessFormData>({
    businessPhone: '',
    alternatePhone: '',
    streetNumber: '',
    streetAddress: '',
    city: '',
    state: '',
    zipCode: '',
    country: '',
    fundingSource: 'yes',
    isRegulatedInstitution: 'yes',
    businessActivities: ['cryptocurrencies']
  });

  const sidebarSteps = [
    {
      id: 'personal-info',
      title: 'Personal Information',
      icon: '/images/img_solaruserlinear.svg',
      isCompleted: true,
      isActive: false,
      isClickable: true
    },
    {
      id: 'personal-verification',
      title: 'Personal Verification',
      icon: '/images/img_solaruserlinear_blue_gray_900.svg',
      isCompleted: true,
      isActive: false,
      isClickable: true
    },
    {
      id: 'business-info',
      title: 'Business Information',
      icon: '/images/img_solaruserlinear_blue_gray_900_24x24.svg',
      isCompleted: false,
      isActive: true,
      isClickable: true
    },
    {
      id: 'business-owners',
      title: 'Business Owners',
      icon: '/images/img_solaruserlinear_24x24.svg',
      isCompleted: false,
      isActive: false,
      isClickable: false
    },
    {
      id: 'business-names',
      title: 'Business Names',
      icon: '/images/img_icon_names.svg',
      isCompleted: false,
      isActive: false,
      isClickable: false
    },
    {
      id: 'formation-docs',
      title: 'Formation Documents',
      icon: '/images/img_icon_tansaction.svg',
      isCompleted: false,
      isActive: false,
      isClickable: false
    },
    {
      id: 'ein-verification',
      title: 'EIN Verification',
      icon: '/images/img_icon_ein.svg',
      isCompleted: false,
      isActive: false,
      isClickable: false
    }
  ];

  const handleStepClick = (stepId: string) => {
    switch (stepId) {
      case 'personal-info': navigate('/business/personal-information');
        break;
      case 'personal-verification':
        navigate('/verification/document-selection');
        break;
      default:
        console.log('Step not yet available:', stepId);
    }
  };

  const handleBack = () => {
    navigate('/verification/document-selection');
  };

  const handleContinue = () => {
    // Validate form data
    const requiredFields = ['businessPhone', 'streetNumber', 'streetAddress', 'city', 'state', 'zipCode', 'country'];
    const missingFields = requiredFields.filter(field => !formData[field as keyof BusinessFormData]);
    
    if (missingFields.length > 0) {
      alert(`Please fill in the following required fields: ${missingFields.join(', ')}`);
      return;
    }

    // Save form data and show confirmation
    console.log('Business Information Form Data:', formData);
    setShowConfirmation(true);
  };

  const handleCloseConfirmation = () => {
    setShowConfirmation(false);
    // Navigate to next step after confirmation
    navigate('/verification/document-selection');
  };

  const handleLearnMore = () => {
    alert('Learn more about our data security and privacy practices.');
  };

  // Show confirmation screen if needed
  if (showConfirmation) {
    return <ConfirmationScreen onClose={handleCloseConfirmation} />;
  }

  return (
    <div className="min-h-screen bg-banking-light-gray flex flex-col">
      <Header />
      
      <div className="flex flex-1 flex-col lg:flex-row">
        {/* Sidebar - Hidden on mobile, shown as collapsible on tablet and above */}
        <div className="hidden lg:block lg:w-67 lg:flex-shrink-0">
          <Sidebar 
            steps={sidebarSteps}
            onStepClick={handleStepClick}
          />
        </div>
        
        {/* Mobile Sidebar - Show as horizontal scrollable on mobile */}
        <div className="lg:hidden bg-white border-b border-gray-200 p-4 overflow-x-auto">
          <div className="flex space-x-2 min-w-max">
            {sidebarSteps.map((step, index) => (
              <div
                key={step.id}
                className={`
                  flex items-center px-3 py-2 rounded-md text-sm whitespace-nowrap
                  ${
                    step.isActive 
                      ? 'bg-green-100 text-green-800' 
                      : step.isCompleted 
                      ? 'bg-gray-100 text-gray-600' :'bg-gray-50 text-gray-400'
                  }
                `}
              >
                <img 
                  src={step.icon} 
                  alt={step.title}
                  className="w-4 h-4 mr-2"
                />
                <span className="text-xs">{step.title}</span>
              </div>
            ))}
          </div>
        </div>
        
        <main className="flex-1 p-4 sm:p-6 lg:p-8 max-w-4xl mx-auto w-full">
          {/* Security Notice */}
          <div className="bg-green-25 border border-green-100 rounded-md p-3 mb-4 sm:mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0">
            <p className="text-sm sm:text-base font-normal text-gray-700 text-center sm:text-left">
              We guarantee that these information will stay confidential and secured
            </p>
            <button 
              onClick={handleLearnMore}
              className="text-banking-green text-sm font-normal hover:underline self-center sm:self-auto"
            >
              Learn more
            </button>
          </div>

          {/* Main Heading */}
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-medium text-gray-800 leading-tight mb-6 sm:mb-8 text-center lg:text-left">
            Let's get your phone and address for the company.
          </h1>

          {/* Phone Section */}
          <div className="mb-6 sm:mb-8">
            <PhoneSection
              businessPhone={formData.businessPhone}
              alternatePhone={formData.alternatePhone}
              onBusinessPhoneChange={(value) => setFormData(prev => ({ ...prev, businessPhone: value }))}
              onAlternatePhoneChange={(value) => setFormData(prev => ({ ...prev, alternatePhone: value }))}
            />
          </div>

          {/* Address Section */}
          <div className="mb-8 sm:mb-12">
            <AddressSection
              streetNumber={formData.streetNumber}
              streetAddress={formData.streetAddress}
              city={formData.city}
              state={formData.state}
              zipCode={formData.zipCode}
              country={formData.country}
              onStreetNumberChange={(value) => setFormData(prev => ({ ...prev, streetNumber: value }))}
              onStreetAddressChange={(value) => setFormData(prev => ({ ...prev, streetAddress: value }))}
              onCityChange={(value) => setFormData(prev => ({ ...prev, city: value }))}
              onStateChange={(value) => setFormData(prev => ({ ...prev, state: value }))}
              onZipCodeChange={(value) => setFormData(prev => ({ ...prev, zipCode: value }))}
              onCountryChange={(value) => setFormData(prev => ({ ...prev, country: value }))}
            />
          </div>

          {/* Business Questions */}
          <div className="mb-8 sm:mb-12">
            <BusinessQuestions
              fundingSource={formData.fundingSource}
              isRegulatedInstitution={formData.isRegulatedInstitution}
              businessActivities={formData.businessActivities}
              onFundingSourceChange={(value) => setFormData(prev => ({ ...prev, fundingSource: value }))}
              onRegulatedInstitutionChange={(value) => setFormData(prev => ({ ...prev, isRegulatedInstitution: value }))}
              onBusinessActivitiesChange={(activities) => setFormData(prev => ({ ...prev, businessActivities: activities }))}
            />
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
            <Button
              variant="outline"
              onClick={handleBack}
              className="h-12 px-6 sm:px-8 w-full sm:w-auto order-2 sm:order-1"
            >
              Back
            </Button>
            
            <Button
              variant="primary"
              onClick={handleContinue}
              className="h-12 px-6 sm:px-8 w-full sm:w-auto order-1 sm:order-2"
              rightIcon={
                <img 
                  src="/images/img_group_1000001422.svg" 
                  alt="Continue arrow"
                  className="w-2 h-3"
                />
              }
            >
              Continue
            </Button>
          </div>
        </main>
      </div>
      
      <Footer />
    </div>
  );
};

export default BusinessInformation;
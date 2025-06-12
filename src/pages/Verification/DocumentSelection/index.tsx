// src/pages/Verification/DocumentSelection/index.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../../components/common/Header';
import Footer from '../../../components/common/Footer';
import Sidebar from '../../../components/common/Sidebar';
import Button from '../../../components/ui/Button';


interface DocumentOption {
  id: string;
  title: string;
  description: string;
  icon: string;
  isSelected: boolean;
}

const DocumentSelection: React.FC = () => {
  const navigate = useNavigate();
  
  const [documentOptions, setDocumentOptions] = useState<DocumentOption[]>([
    {
      id: 'drivers-license',
      title: 'Driver\'s License',
      description: 'Upload a photo of your valid driver\'s license',
      icon: '/images/img_icon_24x24.svg',
      isSelected: false
    },
    {
      id: 'passport',
      title: 'Passport',
      description: 'Upload a photo of your valid passport',
      icon: '/images/img_icon_1.svg',
      isSelected: false
    },
    {
      id: 'state-id',
      title: 'International ID',
      description: 'Upload a photo of your valid state-issued ID',
      icon: '/images/img_icon_2.svg',
      isSelected: false
    }
  ]);

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
      isCompleted: false,
      isActive: true,
      isClickable: true
    },
    {
      id: 'business-info',
      title: 'Business Information',
      icon: '/images/img_solaruserlinear_blue_gray_900_24x24.svg',
      isCompleted: false,
      isActive: false,
      isClickable: false
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

  const handleDocumentSelect = (documentId: string) => {
    setDocumentOptions(prev => 
      prev.map(doc => ({
        ...doc,
        isSelected: doc.id === documentId
      }))
    );
  };

  const handleStepClick = (stepId: string) => {
    switch (stepId) {
      case 'personal-info': navigate('/business/personal-information');
        break;
      default:
        console.log('Step clicked:', stepId);
    }
  };

  const handleBack = () => {
    navigate('/business/personal-information');
  };

  const handleContinue = () => {
    const selectedDocument = documentOptions.find(doc => doc.isSelected);
    if (!selectedDocument) {
      alert('Please select a document type to continue.');
      return;
    }
    
    console.log('Selected document:', selectedDocument);
    navigate('/business/information');
  };

  const handleLearnMore = () => {
    alert('Learn more about our verification process and security measures.');
  };

  return (
    <div className="min-h-screen bg-banking-light-gray flex flex-col">
      <Header />
      
      <div className="flex flex-1 flex-col lg:flex-row">
        {/* Sidebar - Hidden on mobile */}
        <div className="hidden lg:block lg:w-67 lg:flex-shrink-0">
          <Sidebar 
            steps={sidebarSteps}
            onStepClick={handleStepClick}
          />
        </div>
        
        {/* Mobile Progress Indicator */}
        <div className="lg:hidden bg-white border-b border-gray-200 p-4">
          <div className="flex items-center justify-center space-x-2">
            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-medium">2</span>
            </div>
            <span className="text-sm font-medium text-gray-900">Personal Verification</span>
          </div>
        </div>
        
        <main className="flex-1 p-4 sm:p-6 lg:p-8 max-w-4xl mx-auto w-full">
          {/* Security Notice */}
          <div className="bg-green-25 border border-green-100 rounded-md p-3 mb-4 sm:mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0">
            <p className="text-sm sm:text-base font-normal text-gray-700 text-center sm:text-left">
              Your documents are encrypted and securely processed
            </p>
            <button 
              onClick={handleLearnMore}
              className="text-banking-green text-sm font-normal hover:underline self-center sm:self-auto"
            >
              Learn more
            </button>
          </div>

          {/* Main Heading */}
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-medium text-gray-800 leading-tight mb-4 sm:mb-6 text-center lg:text-left">
            Choose a document to verify your identity
          </h1>
          
          <p className="text-gray-600 text-sm sm:text-base mb-6 sm:mb-8 text-center lg:text-left">
            Select one of the following documents to complete your verification process.
          </p>

          {/* Document Options */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
            {documentOptions.map((document) => (
              <div
                key={document.id}
                onClick={() => handleDocumentSelect(document.id)}
                className={`
                  bg-white rounded-lg border-2 cursor-pointer transition-all duration-200 hover:shadow-md
                  ${document.isSelected ? 'border-banking-green' : 'border-green-200'}
                `}
              >
                <div className="p-5">
                  {/* Document Title & Icon */}
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-base font-medium text-gray-800">
                      {document.title}
                    </h3>
                    <img 
                      src={document.icon} 
                      alt={document.title} 
                      className="w-6 h-6"
                    />
                  </div>
                  
                  {/* Description */}
                  <p className="text-sm text-gray-600 mb-4">
                    {document.description}
                  </p>
                  
                  {/* Right Arrow */}
                  <div className="flex justify-end">
                    <img 
                      src="/images/img_group_1000001422.svg" 
                      alt="Right arrow" 
                      className="w-5 h-5"
                    />
                  </div>
                </div>
              </div>
            ))}
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

export default DocumentSelection;
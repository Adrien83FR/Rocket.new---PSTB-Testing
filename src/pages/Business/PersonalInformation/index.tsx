// src/pages/Business/PersonalInformation/index.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../../components/common/Header';
import Footer from '../../../components/common/Footer';
import Sidebar from '../../../components/common/Sidebar';
import Button from '../../../components/ui/Button';
import InputField from '../../../components/ui/InputField';
import Dropdown from '../../../components/ui/Dropdown';
import { PersonalInformationData } from '../../../types/Business';

interface PersonalInformationData {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  emailAddress: string;
  nationality: string;
  socialSecurityNumber: string;
  isBusinessOwner: string;
}

const PersonalInformation: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<PersonalInformationData>({
    firstName: 'Chandler',
    lastName: 'Bing',
    phoneNumber: '',
    emailAddress: '',
    nationality: '',
    socialSecurityNumber: '',
    isBusinessOwner: 'yes'
  });

  const [errors, setErrors] = useState<Partial<PersonalInformationData>>({});

  const nationalityOptions = [
    { value: 'us', label: 'United States' },
    { value: 'ca', label: 'Canada' },
    { value: 'uk', label: 'United Kingdom' },
    { value: 'au', label: 'Australia' },
    { value: 'de', label: 'Germany' },
    { value: 'fr', label: 'France' },
    { value: 'jp', label: 'Japan' },
    { value: 'other', label: 'Other' }
  ];

  const businessOwnerOptions = [
    { id: 'yes', label: 'Yes', value: 'yes' },
    { id: 'no', label: 'No', value: 'no' }
  ];

  const sidebarSteps = [
    {
      id: 'personal-info',
      title: 'Personal Information',
      icon: '/images/img_solaruserlinear.svg',
      isCompleted: false,
      isActive: true,
      isClickable: true
    },
    {
      id: 'personal-verification',
      title: 'Personal Verification',
      icon: '/images/img_solaruserlinear_blue_gray_900.svg',
      isCompleted: false,
      isActive: false,
      isClickable: false
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

  const handleInputChange = (field: keyof PersonalInformationData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: ''
      }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<PersonalInformationData> = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }

    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = 'Phone number is required';
    } else if (!/^\+?[\d\s\-\(\)]+$/.test(formData.phoneNumber)) {
      newErrors.phoneNumber = 'Please enter a valid phone number';
    }

    if (!formData.emailAddress.trim()) {
      newErrors.emailAddress = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.emailAddress)) {
      newErrors.emailAddress = 'Please enter a valid email address';
    }

    if (!formData.nationality) {
      newErrors.nationality = 'Please select your nationality';
    }

    if (!formData.socialSecurityNumber.trim()) {
      newErrors.socialSecurityNumber = 'Social Security Number is required';
    } else if (!/^\d{3}-?\d{2}-?\d{4}$/.test(formData.socialSecurityNumber.replace(/\s/g, ''))) {
      newErrors.socialSecurityNumber = 'Please enter a valid SSN (XXX-XX-XXXX)';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleContinue = () => {
    if (validateForm()) {
      console.log('Form submitted:', formData);
      // Navigate to verification document selection page
      navigate('/verification/document-selection');
    }
  };

  const handleStepClick = (stepId: string) => {
    console.log('Step clicked:', stepId);
    // Handle navigation to different steps
  };

  const handleLearnMore = () => {
    alert('Learn more about our data security and privacy practices.');
  };

  return (
    <div className="min-h-screen bg-banking-light-gray">
      <Header />
      
      <div className="flex flex-col lg:flex-row">
        {/* Sidebar - Hidden on mobile */}
        <div className="hidden lg:block lg:w-67 lg:flex-shrink-0">
          <div className="bg-white h-full">
            <div className="p-4">
              <Sidebar 
                steps={sidebarSteps}
                onStepClick={handleStepClick}
              />
            </div>
          </div>
        </div>

        {/* Mobile Progress Indicator */}
        <div className="lg:hidden bg-white border-b border-gray-200 p-4">
          <div className="flex items-center justify-center space-x-2">
            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-medium">1</span>
            </div>
            <span className="text-sm font-medium text-gray-900">Personal Information</span>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-4 sm:p-6 lg:p-8 max-w-4xl mx-auto w-full">
          {/* Security Notice */}
          <div className="mb-4 sm:mb-6 bg-green-25 rounded-md p-3 flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0">
            <span className="text-gray-700 text-sm sm:text-base text-center sm:text-left">
              We guarantee that these information will stay confidential and secured
            </span>
            <button 
              onClick={handleLearnMore}
              className="text-banking-green text-sm hover:underline self-center sm:self-auto"
            >
              Learn more
            </button>
          </div>

          {/* Page Title */}
          <div className="mb-6 sm:mb-8 text-center lg:text-left">
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-medium text-banking-gray leading-tight mb-3 sm:mb-4">
              We need to know a little about the person setting up the business account.
            </h1>
            <p className="text-gray-700 text-sm sm:text-base">
              Please enter your details below
            </p>
          </div>

          {/* Form */}
          <div className="space-y-4 sm:space-y-6">
            {/* Name Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <InputField
                value={formData.firstName}
                onChange={(value) => handleInputChange('firstName', value)}
                placeholder="First Name"
                error={errors.firstName}
                required
              />
              <InputField
                value={formData.lastName}
                onChange={(value) => handleInputChange('lastName', value)}
                placeholder="Last Name"
                error={errors.lastName}
                required
              />
            </div>

            {/* Contact Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <InputField
                type="tel"
                value={formData.phoneNumber}
                onChange={(value) => handleInputChange('phoneNumber', value)}
                placeholder="Phone Number"
                error={errors.phoneNumber}
                required
              />
              <InputField
                type="email"
                value={formData.emailAddress}
                onChange={(value) => handleInputChange('emailAddress', value)}
                placeholder="Email Address"
                error={errors.emailAddress}
                required
              />
            </div>

            {/* Additional Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <Dropdown
                options={nationalityOptions}
                value={formData.nationality}
                onChange={(value) => handleInputChange('nationality', value)}
                placeholder="Nationality"
                error={errors.nationality}
                required
              />
              <InputField
                value={formData.socialSecurityNumber}
                onChange={(value) => handleInputChange('socialSecurityNumber', value)}
                placeholder="Social Security Number"
                error={errors.socialSecurityNumber}
                required
              />
            </div>

            {/* Age Notice */}
            <div className="text-gray-700 text-sm sm:text-base text-center lg:text-left">
              Note : You must be at least 18 years old to open your own account.
            </div>

            {/* Business Owner Question */}
            <div className="space-y-3 sm:space-y-4">
              <p className="text-gray-700 text-sm sm:text-base font-medium text-center lg:text-left">
                Are you an owner of this business?
              </p>
              
              <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 justify-center lg:justify-start">
                <button
                  onClick={() => handleInputChange('isBusinessOwner', 'yes')}
                  className={`
                    h-9 px-6 rounded text-sm sm:text-base font-normal transition-all cursor-pointer w-full sm:w-auto
                    ${
                      formData.isBusinessOwner === 'yes' ?'bg-gradient-banking text-gray-800' :'border border-banking-green text-gray-700 bg-white hover:bg-green-50'
                    }
                  `}
                >
                  Yes
                </button>
                <button
                  onClick={() => handleInputChange('isBusinessOwner', 'no')}
                  className={`
                    h-9 px-6 rounded text-sm sm:text-base font-normal transition-all cursor-pointer w-full sm:w-auto
                    ${
                      formData.isBusinessOwner === 'no' ?'bg-gradient-banking text-gray-800' :'border border-banking-green text-gray-700 bg-white hover:bg-green-50'
                    }
                  `}
                >
                  No
                </button>
              </div>
            </div>

            {/* Continue Button */}
            <div className="pt-4 flex justify-center lg:justify-start">
              <button
                onClick={handleContinue}
                className="bg-gradient-banking text-gray-800 font-normal h-12 px-8 sm:px-12 rounded text-sm sm:text-base flex items-center space-x-2 hover:opacity-90 transition-opacity w-full sm:w-auto justify-center"
              >
                <span>Continue</span>
                <img 
                  src="/images/img_group_1000001422.svg" 
                  alt="Arrow" 
                  className="w-2 h-3"
                />
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PersonalInformation;
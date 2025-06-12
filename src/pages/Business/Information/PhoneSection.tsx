import React, { useState } from 'react';
import InputField from '../../../components/ui/InputField';

interface PhoneSectionProps {
  businessPhone?: string;
  alternatePhone?: string;
  onBusinessPhoneChange?: (value: string) => void;
  onAlternatePhoneChange?: (value: string) => void;
}

const PhoneSection: React.FC<PhoneSectionProps> = ({
  businessPhone = '',
  alternatePhone = '',
  onBusinessPhoneChange = () => {},
  onAlternatePhoneChange = () => {}
}) => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <InputField
          type="tel"
          placeholder="Business Phone Number"
          value={businessPhone}
          onChange={onBusinessPhoneChange}
          className="w-full"
        />
        
        <InputField
          type="tel"
          placeholder="Alternate Phone Number"
          value={alternatePhone}
          onChange={onAlternatePhoneChange}
          className="w-full"
        />
      </div>
    </div>
  );
};

export default PhoneSection;
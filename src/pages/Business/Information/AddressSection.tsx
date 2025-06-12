import React from 'react';
import InputField from '../../../components/ui/InputField';
import Dropdown from '../../../components/ui/Dropdown';

interface AddressSectionProps {
  streetNumber?: string;
  streetAddress?: string;
  city?: string;
  state?: string;
  zipCode?: string;
  country?: string;
  onStreetNumberChange?: (value: string) => void;
  onStreetAddressChange?: (value: string) => void;
  onCityChange?: (value: string) => void;
  onStateChange?: (value: string) => void;
  onZipCodeChange?: (value: string) => void;
  onCountryChange?: (value: string) => void;
}

const AddressSection: React.FC<AddressSectionProps> = ({
  streetNumber = '',
  streetAddress = '',
  city = '',
  state = '',
  zipCode = '',
  country = '',
  onStreetNumberChange = () => {},
  onStreetAddressChange = () => {},
  onCityChange = () => {},
  onStateChange = () => {},
  onZipCodeChange = () => {},
  onCountryChange = () => {}
}) => {
  const countryOptions = [
    { value: 'us', label: 'United States' },
    { value: 'ca', label: 'Canada' },
    { value: 'uk', label: 'United Kingdom' },
    { value: 'au', label: 'Australia' },
    { value: 'de', label: 'Germany' },
    { value: 'fr', label: 'France' },
    { value: 'jp', label: 'Japan' },
    { value: 'other', label: 'Other' }
  ];

  return (
    <div className="space-y-6">
      <h3 className="text-base font-normal text-gray-700">
        Provide the Physical Address for the Company
      </h3>
      
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <InputField
            placeholder="Street Number"
            value={streetNumber}
            onChange={onStreetNumberChange}
          />
          
          <InputField
            placeholder="Street Address"
            value={streetAddress}
            onChange={onStreetAddressChange}
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <InputField
            placeholder="City"
            value={city}
            onChange={onCityChange}
          />
          
          <InputField
            placeholder="State"
            value={state}
            onChange={onStateChange}
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <InputField
            placeholder="ZIP Code"
            value={zipCode}
            onChange={onZipCodeChange}
          />
          
          <Dropdown
            placeholder="Country"
            options={countryOptions}
            value={country}
            onChange={onCountryChange}
          />
        </div>
      </div>
    </div>
  );
};

export default AddressSection;
import React, { useState, useRef, useEffect } from 'react';

interface DropdownOption {
  value: string;
  label: string;
  disabled?: boolean;
}

interface DropdownProps {
  options: DropdownOption[];
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
  error?: string;
  label?: string;
  required?: boolean;
}

const Dropdown: React.FC<DropdownProps> = ({
  options,
  value = '',
  onChange = () => {},
  placeholder = 'Select an option',
  disabled = false,
  className = '',
  error = '',
  label,
  required = false
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const selectedOption = options.find(option => option.value === value);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (optionValue: string) => {
    onChange(optionValue);
    setIsOpen(false);
  };

  const handleToggle = () => {
    if (!disabled) {
      setIsOpen(!isOpen);
    }
  };

  return (
    <div className={`relative w-full ${className}`} ref={dropdownRef}>
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      
      <div
        className={`
          w-full h-14 px-3 py-4 border rounded cursor-pointer flex items-center justify-between
          ${error 
            ? 'border-red-500' 
            : isOpen 
              ? 'border-banking-green ring-1 ring-banking-green' :'border-gray-300'
          }
          ${disabled 
            ? 'bg-gray-100 cursor-not-allowed opacity-50' :'bg-white hover:border-gray-400'
          }
          transition-colors
        `}
        onClick={handleToggle}
      >
        <span className={`text-base ${selectedOption ? 'text-gray-700' : 'text-gray-400'}`}>
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        
        <img 
          src="/images/img_icon.svg" 
          alt="Dropdown arrow"
          className={`w-6 h-6 transition-transform ${isOpen ? 'rotate-180' : ''}`}
        />
      </div>

      {isOpen && (
        <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded shadow-lg max-h-60 overflow-y-auto">
          {options.map((option) => (
            <div
              key={option.value}
              className={`
                px-3 py-3 cursor-pointer hover:bg-gray-50 text-base
                ${option.disabled ? 'opacity-50 cursor-not-allowed' : ''}
                ${value === option.value ? 'bg-green-50 text-banking-green' : 'text-gray-700'}
              `}
              onClick={() => !option.disabled && handleSelect(option.value)}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
      
      {error && (
        <p className="mt-1 text-sm text-red-600">
          {error}
        </p>
      )}
    </div>
  );
};

export default Dropdown;
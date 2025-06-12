import React from 'react';

interface RadioButtonOption {
  id: string;
  label: string;
  value: string;
  description?: string;
  icon?: string;
}

interface RadioButtonProps {
  name: string;
  options: RadioButtonOption[];
  selectedValue?: string;
  onChange?: (value: string) => void;
  className?: string;
  variant?: 'default' | 'card';
  disabled?: boolean;
}

const RadioButton: React.FC<RadioButtonProps> = ({
  name,
  options,
  selectedValue = '',
  onChange = () => {},
  className = '',
  variant = 'default',
  disabled = false
}) => {
  const handleChange = (value: string) => {
    if (!disabled) {
      onChange(value);
    }
  };

  if (variant === 'card') {
    return (
      <div className={`space-y-2 ${className}`}>
        {options.map((option) => (
          <div
            key={option.id}
            className={`
              border rounded-lg p-4 cursor-pointer transition-all
              ${selectedValue === option.value 
                ? 'border-banking-green bg-green-50' :'border-gray-200 hover:border-gray-300'
              }
              ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
            `}
            onClick={() => handleChange(option.value)}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                {option.icon && (
                  <img 
                    src={option.icon} 
                    alt={`${option.label} icon`}
                    className="w-6 h-6"
                  />
                )}
                <div>
                  <label className="text-base font-semibold text-gray-700 cursor-pointer">
                    {option.label}
                  </label>
                  {option.description && (
                    <p className="text-sm text-gray-500 mt-1">
                      {option.description}
                    </p>
                  )}
                </div>
              </div>
              
              <div className="flex items-center">
                <input
                  type="radio"
                  id={option.id}
                  name={name}
                  value={option.value}
                  checked={selectedValue === option.value}
                  onChange={() => handleChange(option.value)}
                  disabled={disabled}
                  className="sr-only"
                />
                <div className={`
                  w-5 h-5 rounded-full border-2 flex items-center justify-center
                  ${selectedValue === option.value 
                    ? 'border-banking-green bg-banking-green' :'border-gray-300'
                  }
                `}>
                  {selectedValue === option.value && (
                    <div className="w-2 h-2 rounded-full bg-white"></div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className={`space-y-3 ${className}`}>
      {options.map((option) => (
        <div key={option.id} className="flex items-center">
          <input
            type="radio"
            id={option.id}
            name={name}
            value={option.value}
            checked={selectedValue === option.value}
            onChange={() => handleChange(option.value)}
            disabled={disabled}
            className={`
              w-4 h-4 text-banking-green border-gray-300 focus:ring-banking-green focus:ring-2
              ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
            `}
          />
          <label 
            htmlFor={option.id} 
            className={`
              ml-3 text-sm font-medium text-gray-700
              ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
            `}
          >
            {option.label}
          </label>
          {option.description && (
            <span className="ml-2 text-xs text-gray-500">
              {option.description}
            </span>
          )}
        </div>
      ))}
    </div>
  );
};

export default RadioButton;
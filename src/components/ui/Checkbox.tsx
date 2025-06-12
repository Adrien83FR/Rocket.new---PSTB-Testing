import React from 'react';

interface CheckboxProps {
  id?: string;
  name?: string;
  label?: string;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'custom';
}

const Checkbox: React.FC<CheckboxProps> = ({
  id,
  name,
  label,
  checked = false,
  onChange = () => {},
  disabled = false,
  className = '',
  size = 'md',
  variant = 'default'
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.checked);
  };

  const sizeClasses = {
    sm: 'w-3 h-3',
    md: 'w-4 h-4',
    lg: 'w-5 h-5'
  };

  if (variant === 'custom') {
    return (
      <div className={`flex items-center ${className}`}>
        <div
          className={`
            ${sizeClasses[size]} border-2 rounded cursor-pointer flex items-center justify-center
            ${checked 
              ? 'bg-banking-green border-banking-green' :'border-gray-300 bg-white'
            }
            ${disabled ? 'opacity-50 cursor-not-allowed' : 'hover:border-gray-400'}
            transition-colors
          `}
          onClick={() => !disabled && onChange(!checked)}
        >
          {checked && (
            <img 
              src="/images/img_checkbox_ticked.svg" 
              alt="Checked"
              className="w-full h-full"
            />
          )}
        </div>
        
        {label && (
          <label 
            htmlFor={id}
            className={`
              ml-2 text-base text-gray-700 select-none
              ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
            `}
            onClick={() => !disabled && onChange(!checked)}
          >
            {label}
          </label>
        )}
        
        <input
          type="checkbox"
          id={id}
          name={name}
          checked={checked}
          onChange={handleChange}
          disabled={disabled}
          className="sr-only"
        />
      </div>
    );
  }

  return (
    <div className={`flex items-center ${className}`}>
      <input
        type="checkbox"
        id={id}
        name={name}
        checked={checked}
        onChange={handleChange}
        disabled={disabled}
        className={`
          ${sizeClasses[size]} text-banking-green border-gray-300 rounded
          focus:ring-banking-green focus:ring-2 focus:ring-offset-0
          ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
          transition-colors
        `}
      />
      
      {label && (
        <label 
          htmlFor={id}
          className={`
            ml-2 text-base text-gray-700 select-none
            ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
          `}
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default Checkbox;
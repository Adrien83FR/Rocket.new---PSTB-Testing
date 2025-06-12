import React from 'react';

interface InputFieldProps {
  label?: string;
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  type?: 'text' | 'email' | 'password' | 'tel' | 'number';
  disabled?: boolean;
  required?: boolean;
  error?: string;
  className?: string;
  id?: string;
  name?: string;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  placeholder = '',
  value = '',
  onChange = () => {},
  type = 'text',
  disabled = false,
  required = false,
  error = '',
  className = '',
  id,
  name
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <div className={`w-full ${className}`}>
      {label && (
        <label 
          htmlFor={id} 
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      
      <div className="relative">
        <input
          id={id}
          name={name}
          type={type}
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          disabled={disabled}
          required={required}
          className={`
            w-full h-14 px-3 py-4 border rounded text-base
            ${error 
              ? 'border-red-500 focus:border-red-500 focus:ring-red-500' :'border-gray-300 focus:border-banking-green focus:ring-banking-green'
            }
            ${disabled 
              ? 'bg-gray-100 cursor-not-allowed opacity-50' :'bg-white'
            }
            focus:outline-none focus:ring-1 transition-colors
            placeholder-gray-400
          `}
        />
      </div>
      
      {error && (
        <p className="mt-1 text-sm text-red-600">
          {error}
        </p>
      )}
    </div>
  );
};

export default InputField;
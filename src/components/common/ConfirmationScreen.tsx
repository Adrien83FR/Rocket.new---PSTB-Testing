// src/components/common/ConfirmationScreen.tsx
import React from 'react';

interface ConfirmationScreenProps {
  onClose?: () => void;
}

const ConfirmationScreen: React.FC<ConfirmationScreenProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
      <div className="text-center px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-6">
            <svg 
              className="h-8 w-8 text-green-600" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-gray-800 mb-4">
            Confirmation of your request
          </h2>
          
          <p className="text-base sm:text-lg text-gray-600 max-w-md mx-auto">
            We will get back to you as soon as possible!
          </p>
        </div>
        
        {onClose && (
          <button
            onClick={onClose}
            className="mt-8 px-6 py-3 bg-gradient-to-r from-green-400 to-cyan-400 text-gray-800 rounded-md font-medium hover:from-green-500 hover:to-cyan-500 transition-all duration-200"
          >
            Close
          </button>
        )}
      </div>
    </div>
  );
};

export default ConfirmationScreen;
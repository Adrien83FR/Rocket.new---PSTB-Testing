// src/components/common/Footer.tsx
import React from 'react';

interface FooterProps {
  onPrivacyPolicyClick?: () => void;
  onTermsClick?: () => void;
  onSocialClick?: (platform: string) => void;
}

const Footer: React.FC<FooterProps> = ({
  onPrivacyPolicyClick = () => console.log('Privacy Policy clicked'),
  onTermsClick = () => console.log('Terms & Conditions clicked'),
  onSocialClick = (platform: string) => console.log(`${platform} clicked`)
}) => {
  return (
    <footer className="w-full min-h-14 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 py-3 sm:py-0 bg-white space-y-3 sm:space-y-0">
      {/* Left side - Copyright and links */}
      <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 text-center sm:text-left">
        <span className="text-gray-700 text-xs sm:text-sm">
          Copyright BGS Banking 2024
        </span>
        
        <div className="flex items-center space-x-3 sm:space-x-4">
          <button 
            onClick={onPrivacyPolicyClick}
            className="text-green-400 text-xs sm:text-sm hover:text-green-500 transition-colors"
          >
            Privacy Policy
          </button>
          
          <button 
            onClick={onTermsClick}
            className="text-green-400 text-xs sm:text-sm hover:text-green-500 transition-colors"
          >
            Terms & Conditions
          </button>
        </div>
      </div>

      {/* Right side - Social media icons */}
      <div className="flex items-center justify-center space-x-3 sm:space-x-4">
        <button 
          onClick={() => onSocialClick('LinkedIn')}
          className="p-1 hover:opacity-70 transition-opacity"
        >
          <img 
            src="/images/img_vector.svg" 
            alt="LinkedIn" 
            className="w-5 h-5 sm:w-6 sm:h-6"
          />
        </button>
        
        <button 
          onClick={() => onSocialClick('Twitter')}
          className="p-1 hover:opacity-70 transition-opacity"
        >
          <img 
            src="/images/img_vector_blue_gray_900.svg" 
            alt="Twitter" 
            className="w-5 h-5 sm:w-6 sm:h-6"
          />
        </button>
        
        <button 
          onClick={() => onSocialClick('Facebook')}
          className="p-1 hover:opacity-70 transition-opacity"
        >
          <img 
            src="/images/img_vector_blue_gray_900_25x25.svg" 
            alt="Facebook" 
            className="w-5 h-5 sm:w-6 sm:h-6"
          />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
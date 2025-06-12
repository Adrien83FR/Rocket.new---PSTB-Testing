// src/components/common/Header.tsx
import React from 'react';

interface HeaderProps {
  username?: string;
  isAuthenticated?: boolean;
  onHelpClick?: () => void;
  onLanguageChange?: (lang: string) => void;
  onSearchClick?: () => void;
  onNotificationClick?: () => void;
  onSettingsClick?: () => void;
  onProfileClick?: () => void;
}

const Header: React.FC<HeaderProps> = ({
  username = 'User',
  isAuthenticated = true,
  onHelpClick = () => console.log('Help clicked'),
  onLanguageChange = (lang: string) => console.log('Language changed to:', lang),
  onSearchClick = () => console.log('Search clicked'),
  onNotificationClick = () => console.log('Notification clicked'),
  onSettingsClick = () => console.log('Settings clicked'),
  onProfileClick = () => console.log('Profile clicked')
}) => {
  const handleLanguageClick = () => {
    onLanguageChange('ENG');
  };

  return (
    <header className="bg-gray-800 h-16 w-full flex items-center justify-between px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 relative">
      {/* Logo */}
      <div className="flex items-center justify-center">
        <img 
          src="/images/img_image_1.png" 
          alt="BGS Banking Logo" 
          className="h-7 w-28 sm:h-8 sm:w-32 md:h-9 md:w-36 object-contain"
        />
      </div>

      {/* Right side controls */}
      <div className="flex items-center space-x-2 sm:space-x-3 md:space-x-4">
        {/* Help Link - Hidden on mobile */}
        <button 
          onClick={onHelpClick}
          className="hidden sm:block text-green-400 text-xs sm:text-sm font-normal hover:text-green-300 transition-colors"
        >
          Need any help?
        </button>

        {/* Language Selector */}
        <div className="bg-gray-600 rounded px-1.5 py-1 sm:px-2 border border-gray-500">
          <button 
            onClick={handleLanguageClick}
            className="text-white text-xs sm:text-sm font-normal flex items-center space-x-1 sm:space-x-2"
          >
            <span>ENG</span>
            <img 
              src="/images/img_vector_1366.svg" 
              alt="Dropdown" 
              className="w-1 h-1 sm:w-1.5 sm:h-1.5"
            />
          </button>
        </div>

        {/* Action Icons */}
        <div className="flex items-center space-x-1 sm:space-x-2">
          <button onClick={onSearchClick} className="p-1 hover:bg-gray-700 rounded">
            <img 
              src="/images/img_iconamoonsearch.svg" 
              alt="Search" 
              className="w-4 h-4 sm:w-5 sm:h-5"
            />
          </button>

          <button onClick={onNotificationClick} className="p-1 hover:bg-gray-700 rounded">
            <img 
              src="/images/img_mynauibell.svg" 
              alt="Notifications" 
              className="w-4 h-4 sm:w-5 sm:h-5"
            />
          </button>

          {/* Hide some icons on mobile */}
          <button onClick={onNotificationClick} className="hidden sm:block p-1 hover:bg-gray-700 rounded">
            <img 
              src="/images/img_mynauibell_white_a700.svg" 
              alt="Notifications" 
              className="w-4 h-4 sm:w-5 sm:h-5"
            />
          </button>

          <button onClick={onSettingsClick} className="hidden md:block p-1 hover:bg-gray-700 rounded">
            <img 
              src="/images/img_mynauibell_white_a700_20x20.svg" 
              alt="Settings" 
              className="w-4 h-4 sm:w-5 sm:h-5"
            />
          </button>
        </div>

        {/* Profile Avatar */}
        <button onClick={onProfileClick} className="hover:opacity-80 transition-opacity">
          <img 
            src="/images/img_avatar.png" 
            alt="Profile Avatar" 
            className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 rounded-full object-cover"
          />
        </button>
      </div>
    </header>
  );
};

export default Header;
// src/pages/Dashboard/QuickLinks.tsx
import React from 'react';

interface QuickLink {
  id: string;
  title: string;
  onClick: () => void;
}

interface QuickLinksProps {
  links?: QuickLink[];
}

const QuickLinks: React.FC<QuickLinksProps> = ({
  links = [
    {
      id: '1',
      title: 'Credit Card Statement',
      onClick: () => console.log('Credit Card Statement clicked')
    },
    {
      id: '2',
      title: 'Outstanding Bill',
      onClick: () => console.log('Outstanding Bill clicked')
    },
    {
      id: '3',
      title: 'Transaction History',
      onClick: () => console.log('Transaction History clicked')
    },
    {
      id: '4',
      title: 'Daily Limit',
      onClick: () => console.log('Daily Limit clicked')
    }
  ]
}) => {
  return (
    <div>
      <h3 className="text-gray-500 text-base mb-4">Quick Links</h3>
      
      <div className="space-y-4">
        {links.map((link) => (
          <button
            key={link.id}
            onClick={link.onClick}
            className="block text-gray-700 text-base hover:text-green-400 transition-colors text-left"
          >
            {link.title}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuickLinks;
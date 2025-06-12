import React from 'react';

interface Contact {
  id: string;
  name: string;
  avatar: string;
  status?: 'online' | 'offline' | 'away';
  statusIcon?: string;
}

interface QuickSendProps {
  contacts?: Contact[];
  onContactClick?: (contactId: string) => void;
}

const QuickSend: React.FC<QuickSendProps> = ({
  contacts = [
    {
      id: '1',
      name: 'Joseph\nYoh',
      avatar: '/images/img_ellipse_1994.png',
      status: 'online',
      statusIcon: '/images/img_group_1000001420.svg'
    },
    {
      id: '2',
      name: 'Martha\nStewart Johnson',
      avatar: '/images/img_ellipse_1994_58x59.png',
      status: 'offline'
    },
    {
      id: '3',
      name: 'Andrew\nJohnson',
      avatar: '/images/img_ellipse_1994_1.png',
      status: 'online',
      statusIcon: '/images/img_group_1000001420.svg'
    },
    {
      id: '4',
      name: 'Wilson\nTucker',
      avatar: '/images/img_ellipse_1994_2.png',
      status: 'online',
      statusIcon: '/images/img_group_1000001420_cyan_500.svg'
    },
    {
      id: '5',
      name: 'Kevon\nRichardson',
      avatar: '/images/img_ellipse_1994_3.png',
      status: 'offline'
    },
    {
      id: '6',
      name: 'Donald Radhowsky',
      avatar: '/images/img_ellipse_1994_4.png',
      status: 'offline'
    },
    {
      id: '7',
      name: 'Michelle\nHartley',
      avatar: '/images/img_ellipse_1994_5.png',
      status: 'online',
      statusIcon: '/images/img_group_1000001420.svg'
    }
  ],
  onContactClick = (contactId: string) => console.log('Contact clicked:', contactId)
}) => {
  const renderStatusIndicator = (contact: Contact) => {
    if (contact.statusIcon) {
      return (
        <img 
          src={contact.statusIcon} 
          alt="Status" 
          className="w-4 h-4 absolute bottom-0 right-0"
        />
      );
    } else if (contact.status === 'offline') {
      const initial = contact.name.charAt(0).toUpperCase();
      return (
        <div className="w-4 h-4 bg-gray-200 border-2 border-white rounded-lg absolute bottom-0 right-0 flex items-center justify-center">
          <span className="text-gray-500 text-xs font-semibold">{initial}</span>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="mb-8">
      <h2 className="text-lg font-semibold text-gray-700 mb-6">Quick Send</h2>
      
      <div className="flex space-x-6">
        {contacts.map((contact) => (
          <div 
            key={contact.id}
            className="flex flex-col items-center cursor-pointer hover:opacity-80 transition-opacity"
            onClick={() => onContactClick(contact.id)}
          >
            <div className="relative mb-2">
              <img 
                src={contact.avatar} 
                alt={contact.name} 
                className="w-14 h-14 rounded-full"
              />
              {renderStatusIndicator(contact)}
            </div>
            <span className="text-gray-700 text-sm text-center leading-4 whitespace-pre-line">
              {contact.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuickSend;
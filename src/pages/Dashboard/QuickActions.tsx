import React from 'react';
import Card from '../../components/ui/Card';

interface QuickAction {
  id: string;
  title: string;
  icon: string;
  onClick: () => void;
}

interface QuickActionsProps {
  actions?: QuickAction[];
  onCustomiseClick?: () => void;
}

const QuickActions: React.FC<QuickActionsProps> = ({
  actions = [
    {
      id: '1',
      title: 'Add\nMoney',
      icon: '/images/img_icon_green_a400.svg',
      onClick: () => console.log('Add Money clicked')
    },
    {
      id: '2',
      title: 'Fund\nTransfer',
      icon: '/images/img_icon_transfer.svg',
      onClick: () => console.log('Fund Transfer clicked')
    },
    {
      id: '3',
      title: 'Transaction\nHistory',
      icon: '/images/img_icon_tansaction_green_a400.svg',
      onClick: () => console.log('Transaction History clicked')
    },
    {
      id: '4',
      title: 'Pay Credit\nCards',
      icon: '/images/img_icon_credit.svg',
      onClick: () => console.log('Pay Credit Cards clicked')
    },
    {
      id: '5',
      title: 'Activate\nCards',
      icon: '/images/img_icon_green_a400_24x24.svg',
      onClick: () => console.log('Activate Cards clicked')
    },
    {
      id: '6',
      title: 'Pay Monthly\nBills',
      icon: '/images/img_icon_24x24.svg',
      onClick: () => console.log('Pay Monthly Bills clicked')
    },
    {
      id: '7',
      title: 'Send Money\nOverseas',
      icon: '/images/img_icon_1.svg',
      onClick: () => console.log('Send Money Overseas clicked')
    },
    {
      id: '8',
      title: 'Mobile\nTop Up',
      icon: '/images/img_icon_2.svg',
      onClick: () => console.log('Mobile Top Up clicked')
    },
    {
      id: '9',
      title: 'Pay Credit\nCards',
      icon: '/images/img_icon_transfer.svg',
      onClick: () => console.log('Pay Credit Cards clicked')
    }
  ],
  onCustomiseClick = () => console.log('Customise clicked')
}) => {
  return (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold text-gray-700">Quick Actions</h2>
        <button 
          onClick={onCustomiseClick}
          className="bg-green-100 text-green-400 px-4 py-2 rounded-2xl text-base hover:bg-green-200 transition-colors"
        >
          Customise
        </button>
      </div>
      
      <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-9 gap-2 sm:gap-4">
        {actions.map((action) => (
          <Card
            key={action.id}
            className="w-full sm:w-32 h-28 cursor-pointer hover:shadow-md transition-shadow"
            onClick={action.onClick}
          >
            <div className="flex flex-col items-center justify-center h-full text-center">
              <img 
                src={action.icon} 
                alt={action.title} 
                className="w-6 h-6 mb-3"
              />
              <span className="text-gray-700 text-sm sm:text-base leading-5 whitespace-pre-line">
                {action.title}
              </span>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default QuickActions;
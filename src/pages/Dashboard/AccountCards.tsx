// src/pages/Dashboard/AccountCards.tsx
import React from 'react';
import Card from '../../components/ui/Card';

interface Account {
  id: string;
  type: string;
  accountNumber: string;
  balance: string;
  icon: string;
}

interface AccountCardsProps {
  accounts?: Account[];
  onAccountClick?: (accountId: string) => void;
}

const AccountCards: React.FC<AccountCardsProps> = ({
  accounts = [
    {
      id: '1',
      type: 'Checking Account',
      accountNumber: '03 25481 9',
      balance: '$10,540.00',
      icon: '/images/img_streamlinebank.svg'
    },
    {
      id: '2',
      type: 'Savings Account',
      accountNumber: '02 54210 8',
      balance: '$52,105.30',
      icon: '/images/img_streamlinebank.svg'
    }
  ],
  onAccountClick = (accountId: string) => console.log('Account clicked:', accountId)
}) => {
  return (
    <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 w-full">
      {accounts.map((account) => (
        <Card
          key={account.id}
          className="w-full sm:w-80 h-36 sm:h-44 relative cursor-pointer hover:shadow-lg transition-shadow flex-shrink-0"
          onClick={() => onAccountClick(account.id)}
        >
          <div className="flex flex-col h-full">
            <div className="flex justify-between items-start mb-3 sm:mb-4">
              <span className="text-gray-500 text-sm sm:text-base">{account.type}</span>
              <img 
                src="/images/img_icon_bars.svg" 
                alt="Menu" 
                className="w-4 h-4 sm:w-5 sm:h-5"
              />
            </div>
            
            <div className="flex items-center mb-3 sm:mb-4">
              <img 
                src={account.icon} 
                alt="Bank Icon" 
                className="w-3 h-3 sm:w-4 sm:h-4 mr-2"
              />
              <span className="text-gray-700 text-base sm:text-lg font-semibold">
                {account.accountNumber}
              </span>
            </div>
            
            <div className="mt-auto">
              <span className="text-gray-900 text-xl sm:text-2xl lg:text-3xl font-bold">
                {account.balance}
              </span>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default AccountCards;
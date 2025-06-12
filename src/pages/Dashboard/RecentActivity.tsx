import React from 'react';
import Card from '../../components/ui/Card';

interface Transaction {
  id: string;
  title: string;
  description: string;
  amount: string;
  date: string;
  icon: string;
  type: 'debit' | 'credit';
}

interface RecentActivityProps {
  transactions?: Transaction[];
  onViewAllClick?: () => void;
  onTransactionClick?: (transactionId: string) => void;
}

const RecentActivity: React.FC<RecentActivityProps> = ({
  transactions = [
    {
      id: '1',
      title: 'Fund Transfer',
      description: 'Transfer from Savings to Karla',
      amount: '- $1000.00',
      date: 'Aug 16, 2023, 4:30 PM',
      icon: '/images/img_icon_transfer.svg',
      type: 'debit'
    },
    {
      id: '2',
      title: 'Netflix',
      description: 'Monthly bill payment',
      amount: '- $36.00',
      date: 'Jul 30, 2023, 12:00 AM',
      icon: '/images/img_icon_netflix.png',
      type: 'debit'
    },
    {
      id: '3',
      title: 'Spotify',
      description: 'Monthly bill payment',
      amount: '- $6.99',
      date: 'Jul 30, 2023, 12:00 AM',
      icon: '/images/img_icon_spotify.svg',
      type: 'debit'
    },
    {
      id: '4',
      title: 'Deposit',
      description: 'Cash Deposit',
      amount: '+ $500.00',
      date: 'Jul 30, 2023, 12:00 AM',
      icon: '/images/img_icon_green_a400.svg',
      type: 'credit'
    }
  ],
  onViewAllClick = () => console.log('View all transactions clicked'),
  onTransactionClick = (transactionId: string) => console.log('Transaction clicked:', transactionId)
}) => {
  return (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold text-gray-700">Recent Activity</h2>
        <button 
          onClick={onViewAllClick}
          className="text-green-400 text-base hover:text-green-500 transition-colors"
        >
          View all transactions
        </button>
      </div>
      
      <div className="space-y-2">
        {transactions.map((transaction) => (
          <Card
            key={transaction.id}
            className="h-18 cursor-pointer hover:shadow-md transition-shadow"
            onClick={() => onTransactionClick(transaction.id)}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <img 
                  src={transaction.icon} 
                  alt={transaction.title} 
                  className="w-9 h-9 mr-4"
                />
                <div>
                  <h3 className="text-gray-700 text-base font-normal">
                    {transaction.title}
                  </h3>
                  <p className="text-gray-500 text-sm">
                    {transaction.description}
                  </p>
                </div>
              </div>
              
              <div className="text-right">
                <p className={`text-base font-semibold ${
                  transaction.type === 'credit' ? 'text-green-400' : 'text-gray-700'
                }`}>
                  {transaction.amount}
                </p>
                <p className="text-gray-500 text-sm">
                  {transaction.date}
                </p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default RecentActivity;
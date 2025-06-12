import React from 'react';
import Card from '../../components/ui/Card';

interface Payment {
  id: string;
  title: string;
  date: string;
  amount: string;
  icon: string;
  status?: 'today' | 'upcoming';
}

interface UpcomingPaymentsProps {
  payments?: Payment[];
  onPaymentClick?: (paymentId: string) => void;
}

const UpcomingPayments: React.FC<UpcomingPaymentsProps> = ({
  payments = [
    {
      id: '1',
      title: 'Adobe Creative Cloud',
      date: 'Today',
      amount: '$70.00',
      icon: '/images/img_icon_adobe.svg',
      status: 'today'
    },
    {
      id: '2',
      title: 'Amazon Prime',
      date: 'Jul 15, 2024',
      amount: '$4.99',
      icon: '/images/img_icon_prime.png',
      status: 'upcoming'
    },
    {
      id: '3',
      title: 'Chat GPT Subscription',
      date: 'Jul 26, 2024',
      amount: '$6.00',
      icon: '/images/img_icon_chatgpt.svg',
      status: 'upcoming'
    }
  ],
  onPaymentClick = (paymentId: string) => console.log('Payment clicked:', paymentId)
}) => {
  return (
    <div>
      <h2 className="text-lg font-semibold text-gray-700 mb-6">
        Upcoming Payments for this card
      </h2>
      
      <div className="space-y-2">
        {payments.map((payment) => (
          <Card
            key={payment.id}
            className="h-18 cursor-pointer hover:shadow-md transition-shadow"
            onClick={() => onPaymentClick(payment.id)}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <img 
                  src={payment.icon} 
                  alt={payment.title} 
                  className="w-9 h-9 mr-4"
                />
                <div>
                  <h3 className="text-gray-700 text-base font-normal">
                    {payment.title}
                  </h3>
                  <p className={`text-sm ${
                    payment.status === 'today' ? 'text-green-400' : 'text-gray-500'
                  }`}>
                    {payment.date}
                  </p>
                </div>
              </div>
              
              <div className="text-right">
                <p className="text-gray-700 text-base font-semibold">
                  {payment.amount}
                </p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default UpcomingPayments;
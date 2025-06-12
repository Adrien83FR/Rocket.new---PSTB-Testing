import React from 'react';
import Card from '../../components/ui/Card';

interface CreditCardProps {
  cardNumber?: string;
  balance?: string;
  onCardClick?: () => void;
}

const CreditCard: React.FC<CreditCardProps> = ({
  cardNumber = '02 54210 8',
  balance = '$52,105.30',
  onCardClick = () => console.log('Credit card clicked')
}) => {
  return (
    <Card
      className="w-72 h-44 bg-gradient-to-r from-green-400 via-green-500 to-green-700 text-white cursor-pointer hover:shadow-lg transition-shadow relative overflow-hidden"
      onClick={onCardClick}
      padding="none"
    >
      <div className="p-5 h-full flex flex-col justify-between relative z-10">
        <div className="flex justify-between items-start">
          <div>
            <span className="text-gray-800 text-base font-medium">Credit card</span>
            <div className="flex items-center mt-2">
              <img 
                src="/images/img_streamlinebank.svg" 
                alt="Bank Icon" 
                className="w-4 h-4 mr-2"
              />
              <span className="text-gray-800 text-sm">{cardNumber}</span>
            </div>
          </div>
          <img 
            src="/images/img_group_1000001423.png" 
            alt="Card Logo" 
            className="w-8 h-10"
          />
        </div>
        
        <div>
          <span className="text-gray-900 text-xl font-bold">{balance}</span>
        </div>
      </div>
      
      {/* Background decoration */}
      <img 
        src="/images/img_group_1000001419.png" 
        alt="Card Background" 
        className="absolute top-6 right-0 w-37 h-41 opacity-20"
      />
    </Card>
  );
};

export default CreditCard;
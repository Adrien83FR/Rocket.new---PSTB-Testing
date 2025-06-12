import React from 'react';
import Button from '../../components/ui/Button';
import Card from '../../components/ui/Card';

interface BusinessAccountPromoProps {
  onSetupClick?: () => void;
}

const BusinessAccountPromo: React.FC<BusinessAccountPromoProps> = ({
  onSetupClick = () => console.log('Setup business account clicked')
}) => {
  return (
    <Card 
      variant="outlined" 
      className="w-full h-auto p-6 bg-white border border-green-400 hover:border-2 hover:border-green-500 rounded-lg"
    >
      <div className="flex items-center">
        <div className="mr-6">
          <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
            <span className="text-green-500 font-bold">BS</span>
          </div>
        </div>
        
        <div className="flex-1">
          <h3 className="text-gray-700 text-xl font-bold mb-2">
            Register a Business Account
          </h3>
          <p className="text-gray-700 text-base leading-6 mb-6">
            Have dedicated financial tools for managing a company's finances.
          </p>
          
          <Button
            variant="secondary"
            className="bg-green-100 text-green-500 border-none hover:bg-green-200 px-4 py-2 rounded-2xl"
            onClick={onSetupClick}
            rightIcon={
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 12L12 8M12 8L8 4M12 8H4" stroke="#22C55E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            }
          >
            Setup your account
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default BusinessAccountPromo;
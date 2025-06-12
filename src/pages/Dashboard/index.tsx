// src/pages/Dashboard/index.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import Button from '../../components/ui/Button';
import AccountCards from './AccountCards';
import QuickActions from './QuickActions';
import QuickSend from './QuickSend';
import RecentActivity from './RecentActivity';
import CreditCard from './CreditCard';
import QuickLinks from './QuickLinks';
import UpcomingPayments from './UpcomingPayments';
import BusinessAccountPromo from './BusinessAccountPromo';

const Dashboard: React.FC = () => {
  const navigate = useNavigate();

  const handleRequestPayment = () => {
    console.log('Request Payment clicked');
  };

  const handleSendMoney = () => {
    console.log('Send Money clicked');
  };

  const handleBusinessSetup = () => {
    navigate('/business/personal-information');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 py-4 sm:py-6">
        {/* Welcome Section */}
        <div className="mb-6 sm:mb-8">
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-4 sm:mb-6 space-y-4 lg:space-y-0">
            <div className="text-center lg:text-left">
              <p className="text-gray-600 text-base sm:text-lg mb-1">Welcome back,</p>
              <h1 className="text-gray-900 text-2xl sm:text-3xl lg:text-4xl font-bold">Chandler Bing</h1>
            </div>
            
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 justify-center lg:justify-end">
              <Button
                variant="outline"
                className="border-green-400 text-gray-700 hover:bg-green-50 w-full sm:w-auto"
                onClick={handleRequestPayment}
              >
                Request Payment
              </Button>
              <Button
                variant="primary"
                onClick={handleSendMoney}
                className="w-full sm:w-auto"
                rightIcon={
                  <img 
                    src="/images/img_group_1000001422.svg" 
                    alt="Arrow" 
                    className="w-2 h-3"
                  />
                }
              >
                Send Money
              </Button>
            </div>
          </div>
          
          <p className="text-gray-500 text-base sm:text-lg text-center lg:text-left">
            Here's an overview of your account
          </p>
        </div>

        {/* Account Cards and Business Promo */}
        <div className="flex flex-col xl:flex-row space-y-4 xl:space-y-0 xl:space-x-4 mb-6 sm:mb-8">
          <div className="flex-1">
            <AccountCards />
          </div>
          <div className="flex-shrink-0">
            <BusinessAccountPromo onSetupClick={handleBusinessSetup} />
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mb-6 sm:mb-8">
          <QuickActions />
        </div>

        {/* Main Content Grid - Equal Distribution */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 sm:gap-8">
          {/* Left Column - Quick Send and Recent Activity */}
          <div className="xl:col-span-1">
            <QuickSend />
            <RecentActivity />
          </div>
          
          {/* Right Column - Cards and Payments */}
          <div className="xl:col-span-1">
            <div className="mb-6 sm:mb-8">
              <h2 className="text-lg font-semibold text-gray-700 mb-4 sm:mb-6 text-center xl:text-left">Cards</h2>
              
              {/* Card and Links Container - Side by side on desktop */}
              <div className="flex flex-col xl:flex-row xl:items-start xl:space-x-6 space-y-4 xl:space-y-0">
                <div className="flex justify-center xl:justify-start">
                  <CreditCard />
                </div>
                <div className="flex-1 xl:max-w-xs">
                  <QuickLinks />
                </div>
              </div>
            </div>
            
            <UpcomingPayments />
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Dashboard;
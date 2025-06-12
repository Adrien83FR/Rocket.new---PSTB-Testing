import React from 'react';
import Checkbox from '../../../components/ui/Checkbox';

interface BusinessQuestionsProps {
  fundingSource?: string;
  isRegulatedInstitution?: string;
  businessActivities?: string[];
  onFundingSourceChange?: (value: string) => void;
  onRegulatedInstitutionChange?: (value: string) => void;
  onBusinessActivitiesChange?: (activities: string[]) => void;
}

const BusinessQuestions: React.FC<BusinessQuestionsProps> = ({
  fundingSource = '',
  isRegulatedInstitution = '',
  businessActivities = [],
  onFundingSourceChange = () => {},
  onRegulatedInstitutionChange = () => {},
  onBusinessActivitiesChange = () => {}
}) => {
  const yesNoOptions = [
    { id: 'yes', label: 'Yes', value: 'yes' },
    { id: 'no', label: 'No', value: 'no' }
  ];

  const activityOptions = [
    { id: 'crypto', label: 'Cryptocurrencies', value: 'cryptocurrencies' },
    { id: 'cannabis', label: 'Cannabis', value: 'cannabis' },
    { id: 'gambling', label: 'Gambling', value: 'gambling' },
    { id: 'none', label: 'None', value: 'none' }
  ];

  const handleActivityChange = (activity: string, checked: boolean) => {
    let newActivities = [...businessActivities];
    
    if (activity === 'none') {
      // If "None" is selected, clear all other activities
      newActivities = checked ? ['none'] : [];
    } else {
      // If any other activity is selected, remove "None"
      if (checked) {
        newActivities = newActivities.filter(a => a !== 'none');
        newActivities.push(activity);
      } else {
        newActivities = newActivities.filter(a => a !== activity);
      }
    }
    
    onBusinessActivitiesChange(newActivities);
  };

  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-medium text-gray-800 leading-9">
        Let's answer a few questions about your business.
      </h2>
      
      <div className="space-y-8">
        {/* Funding Source Question */}
        <div className="space-y-4">
          <p className="text-base font-normal text-gray-700">
            Is the source funds/income primarily derived from within the U.S. and/or U.S. companies?
          </p>
          
          <div className="flex space-x-2">
            <div 
              className={`
                h-9 px-6 flex items-center justify-center rounded cursor-pointer transition-all
                ${fundingSource === 'yes' ?'bg-gradient-to-r from-green-400 to-cyan-400 text-gray-800' :'border border-banking-green text-gray-700 bg-white hover:bg-green-50'
                }
              `}
              onClick={() => onFundingSourceChange('yes')}
            >
              <span className="text-base font-normal">Yes</span>
            </div>
            
            <div 
              className={`
                h-9 px-6 flex items-center justify-center rounded cursor-pointer transition-all
                ${fundingSource === 'no' ?'bg-gradient-to-r from-green-400 to-cyan-400 text-gray-800' :'border border-banking-green text-gray-700 bg-white hover:bg-green-50'
                }
              `}
              onClick={() => onFundingSourceChange('no')}
            >
              <span className="text-base font-normal">No</span>
            </div>
          </div>
        </div>

        {/* Regulated Institution Question */}
        <div className="space-y-4">
          <p className="text-base font-normal text-gray-700">
            Is your company a U.S. - regulated financial institution?
          </p>
          
          <div className="flex space-x-2">
            <div 
              className={`
                h-9 px-6 flex items-center justify-center rounded cursor-pointer transition-all
                ${isRegulatedInstitution === 'yes' ?'bg-gradient-to-r from-green-400 to-cyan-400 text-gray-800' :'border border-banking-green text-gray-700 bg-white hover:bg-green-50'
                }
              `}
              onClick={() => onRegulatedInstitutionChange('yes')}
            >
              <span className="text-base font-normal">Yes</span>
            </div>
            
            <div 
              className={`
                h-9 px-6 flex items-center justify-center rounded cursor-pointer transition-all
                ${isRegulatedInstitution === 'no' ?'bg-gradient-to-r from-green-400 to-cyan-400 text-gray-800' :'border border-banking-green text-gray-700 bg-white hover:bg-green-50'
                }
              `}
              onClick={() => onRegulatedInstitutionChange('no')}
            >
              <span className="text-base font-normal">No</span>
            </div>
          </div>
        </div>

        {/* Business Activities Question */}
        <div className="space-y-4">
          <p className="text-base font-normal text-gray-700">
            Is the company involved in any of the following activities? Check any that apply.
          </p>
          
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            {activityOptions.map((option) => (
              <Checkbox
                key={option.id}
                id={option.id}
                label={option.label}
                checked={businessActivities.includes(option.value)}
                onChange={(checked) => handleActivityChange(option.value, checked)}
                variant="custom"
                size="sm"
                className="flex-shrink-0"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessQuestions;
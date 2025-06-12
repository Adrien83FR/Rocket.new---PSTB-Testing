// src/components/common/Sidebar.tsx
import React from 'react';

interface SidebarStep {
  id: string;
  title: string;
  icon: string;
  isCompleted: boolean;
  isActive: boolean;
  isClickable: boolean;
}

interface SidebarProps {
  steps?: SidebarStep[];
  onStepClick?: (stepId: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({
  steps = [
    {
      id: 'personal-info',
      title: 'Personal Information',
      icon: '/images/img_solaruserlinear.svg',
      isCompleted: true,
      isActive: false,
      isClickable: true
    },
    {
      id: 'personal-verification',
      title: 'Personal Verification',
      icon: '/images/img_solaruserlinear_blue_gray_900.svg',
      isCompleted: false,
      isActive: true,
      isClickable: true
    },
    {
      id: 'business-info',
      title: 'Business Information',
      icon: '/images/img_solaruserlinear_blue_gray_900_24x24.svg',
      isCompleted: false,
      isActive: false,
      isClickable: false
    },
    {
      id: 'business-owners',
      title: 'Business Owners',
      icon: '/images/img_solaruserlinear_24x24.svg',
      isCompleted: false,
      isActive: false,
      isClickable: false
    },
    {
      id: 'business-names',
      title: 'Business Names',
      icon: '/images/img_icon_names.svg',
      isCompleted: false,
      isActive: false,
      isClickable: false
    },
    {
      id: 'formation-docs',
      title: 'Formation Documents',
      icon: '/images/img_icon_tansaction.svg',
      isCompleted: false,
      isActive: false,
      isClickable: false
    },
    {
      id: 'ein-verification',
      title: 'EIN Verification',
      icon: '/images/img_icon_ein.svg',
      isCompleted: false,
      isActive: false,
      isClickable: false
    }
  ],
  onStepClick = (stepId: string) => console.log('Step clicked:', stepId)
}) => {
  const handleStepClick = (step: SidebarStep) => {
    if (step.isClickable) {
      onStepClick(step.id);
    }
  };

  return (
    <div className="w-full min-w-0 bg-white">
      <div className="space-y-0">
        {steps.map((step, index) => (
          <div key={step.id}>
            {/* Step Item */}
            <div
              className={`
                h-12 sm:h-14 md:h-16 w-full flex items-center px-3 sm:px-4 md:px-6 cursor-pointer transition-colors
                ${
                  step.isActive 
                    ? 'bg-banking-green border border-banking-green' :'bg-white border border-gray-200'
                }
                ${
                  step.isClickable ? 'hover:bg-gray-50' : 'cursor-not-allowed'
                }
                ${
                  index === 0 ? 'rounded-t-8' : ''
                }
                ${
                  index === steps.length - 1 ? 'rounded-b-8' : ''
                }
              `}
              onClick={() => handleStepClick(step)}
            >
              {/* Circular Icon Container */}
              <div className="flex-shrink-0 mr-2 sm:mr-3">
                <div className={`
                  w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full flex items-center justify-center
                  ${
                    step.isActive 
                      ? 'bg-white'
                      : step.isCompleted
                      ? 'bg-green-100' :'bg-gray-100'
                  }
                `}>
                  <img 
                    src={step.icon} 
                    alt={`${step.title} icon`}
                    className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
                  />
                </div>
              </div>

              {/* Title */}
              <div className="flex-1 min-w-0">
                <span className="text-gray-700 text-sm sm:text-base font-normal truncate block">
                  {step.title}
                </span>
              </div>

              {/* Status Icon */}
              <div className="flex-shrink-0">
                {step.isCompleted ? (
                  <img 
                    src="/images/img_group_1000001433.svg" 
                    alt="Completed"
                    className="w-3 h-3 sm:w-4 sm:h-4"
                  />
                ) : (
                  <img 
                    src="/images/img_vector_1388.svg" 
                    alt="Arrow"
                    className="w-1.5 h-0.5 sm:w-2 sm:h-1"
                  />
                )}
              </div>
            </div>

            {/* Connector Line */}
            {index < steps.length - 1 && (
              <div className="flex justify-center">
                <img 
                  src="/images/img_vector_1379.svg" 
                  alt="Connector"
                  className="w-2 h-0.5 sm:w-3 sm:h-0.5"
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
import React from 'react';

interface PricingCardProps {
  plan: string;
  price: string;
  features: string[];
  isFeatured?: boolean;
}

const PricingCard: React.FC<PricingCardProps> = ({ 
  plan, 
  price, 
  features, 
  isFeatured = false 
}) => {
  return (
    <div 
      className={`
        rounded-lg p-6 shadow-md transition-all duration-300
        flex flex-col h-full
        border border-gray-200
        bg-white
        text-text
        focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-secondary
        hover:shadow-xl hover:transform hover:scale-105 hover:text-neutral-50
        hover:bg-primary group
        w-full
      `}
      tabIndex={0}
    >
      <div className="mb-4">
        <h3 className={`text-xl font-bold mb-1 group-hover:text-neutral-50 ${isFeatured ? 'text-secondary-dark' : 'text-neutral-800'}`}>
          {plan}
        </h3>
        <div className="flex items-baseline">
          <span className={`text-3xl font-extrabold group-hover:text-neutral-50 ${isFeatured ? 'text-secondary-dark' : 'text-neutral-900'}`}>
            {price}
          </span>
        </div>
      </div>

      <ul className="mt-4 space-y-3 flex-grow">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <span className="ml-2 text-neutral-600 group-hover:text-neutral-50">{feature}</span>
          </li>
        ))}
      </ul>

      <button 
        className={`
          mt-8 w-full rounded-md py-2 px-4 font-medium
          focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary
          ${isFeatured 
            ? 'bg-secondary text-neutral-50 hover:bg-secondary-dark' 
            : 'bg-neutral-800 text-neutral-50 hover:bg-neutral-900'}
        `}
      >
        Get Started
      </button>
    </div>
  );
};

export default PricingCard;

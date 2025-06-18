import PricingCard from './tasks/PricingCard/PricingCard'
import './index.css'

function App() {
  // Sample pricing plans
  const pricingPlans = [
    {
      plan: "Basic",
      price: "$9.99/mo",
      features: [
        "1 User",
        "10GB Storage",
        "Basic Support",
        "Email Notifications"
      ],
      isFeatured: false
    },
    {
      plan: "Pro",
      price: "$19.99/mo",
      features: [
        "5 Users",
        "50GB Storage",
        "Priority Support",
        "Email Notifications",
        "Advanced Analytics"
      ],
      isFeatured: true
    },
    {
      plan: "Enterprise",
      price: "$49.99/mo",
      features: [
        "Unlimited Users",
        "500GB Storage",
        "24/7 Support",
        "Email Notifications",
        "Advanced Analytics",
        "Custom Integrations"
      ],
      isFeatured: false
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Pricing Plans</h1>
      <div className="grid grid-cols-1 sm:grid-cols-3">
        {pricingPlans.map((plan, index) => (
          <PricingCard
            key={index}
            plan={plan.plan}
            price={plan.price}
            features={plan.features}
            isFeatured={plan.isFeatured}
          />
        ))}
      </div>
    </div>
  )
}

export default App

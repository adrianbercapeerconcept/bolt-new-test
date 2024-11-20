import React from 'react';
import { Check, Star, Building, Crown } from 'lucide-react';
import { Link } from 'react-router-dom';

const plans = [
  {
    name: 'Basic',
    price: 'Free',
    description: 'Perfect for getting started',
    features: [
      'Basic profile',
      'Limited introductions',
      'Standard trust score',
      'Community access'
    ],
    icon: Check,
    color: 'blue',
    cta: 'Get Started'
  },
  {
    name: 'Professional',
    price: '$10',
    period: '/month',
    description: 'For active networkers',
    features: [
      'Enhanced profile',
      'Unlimited introductions',
      'Advanced trust metrics',
      'Priority support',
      'Extended network reach'
    ],
    icon: Star,
    color: 'indigo',
    popular: true,
    cta: 'Start Free Trial'
  },
  {
    name: 'Business',
    price: '$50',
    period: '/month',
    description: 'For growing teams',
    features: [
      'Multiple team members',
      'API access',
      'Custom verification',
      'Business tools suite',
      'Analytics dashboard',
      'Team collaboration'
    ],
    icon: Building,
    color: 'purple',
    cta: 'Contact Sales'
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'For large organizations',
    features: [
      'White-label options',
      'Custom integration',
      'Dedicated support',
      'Corporate verification',
      'Advanced security',
      'SLA guarantees'
    ],
    icon: Crown,
    color: 'gray',
    cta: 'Contact Us'
  }
];

export function PricingPlans() {
  return (
    <div className="bg-white py-24" id="pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Plans for Every Need</h2>
          <p className="mt-4 text-xl text-gray-600">
            Choose the perfect plan to grow your professional network
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {plans.map((plan) => {
            const Icon = plan.icon;
            return (
              <div
                key={plan.name}
                className={`relative rounded-2xl border ${
                  plan.popular ? 'border-indigo-600' : 'border-gray-200'
                } p-8 shadow-sm flex flex-col`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center px-4 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-600">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="flex-1">
                  <div className={`w-12 h-12 rounded-lg bg-${plan.color}-100 flex items-center justify-center`}>
                    <Icon className={`w-6 h-6 text-${plan.color}-600`} />
                  </div>

                  <h3 className="mt-4 text-xl font-semibold text-gray-900">{plan.name}</h3>
                  <div className="mt-2 flex items-baseline">
                    <span className="text-3xl font-bold text-gray-900">{plan.price}</span>
                    {plan.period && (
                      <span className="text-gray-500 ml-1">{plan.period}</span>
                    )}
                  </div>
                  <p className="mt-4 text-gray-500">{plan.description}</p>

                  <ul className="mt-6 space-y-4">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start">
                        <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  to="/signup"
                  className={`mt-8 block w-full py-3 px-4 rounded-lg text-center text-sm font-medium ${
                    plan.popular
                      ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                      : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600">
            All plans include basic features like profile search and community access.
            <br />
            Need a custom solution?{' '}
            <a href="#contact" className="text-indigo-600 font-medium hover:text-indigo-500">
              Contact our sales team
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
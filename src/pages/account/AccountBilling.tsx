import React, { useState } from 'react';
import { 
  CreditCard, Settings, Shield, Receipt, Clock, Plus, 
  AlertCircle, Download, ChevronRight, CheckCircle
} from 'lucide-react';

interface PaymentMethod {
  id: string;
  type: 'card' | 'paypal';
  last4?: string;
  expiryDate?: string;
  brand?: string;
  email?: string;
  isDefault: boolean;
}

interface BillingHistory {
  id: string;
  date: string;
  amount: number;
  status: 'paid' | 'pending' | 'failed';
  invoice: string;
}

export function AccountBilling() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showAddPayment, setShowAddPayment] = useState(false);

  const currentPlan = {
    name: 'Professional',
    price: 10,
    period: 'month',
    status: 'active' as const,
    nextBilling: '2024-03-15',
    features: [
      'Enhanced profile',
      'Unlimited introductions',
      'Advanced trust metrics',
      'Priority support',
      'Extended network reach'
    ]
  };

  const paymentMethods: PaymentMethod[] = [
    {
      id: '1',
      type: 'card',
      last4: '4242',
      expiryDate: '12/24',
      brand: 'Visa',
      isDefault: true
    },
    {
      id: '2',
      type: 'paypal',
      email: 'user@example.com',
      isDefault: false
    }
  ];

  const billingHistory: BillingHistory[] = [
    {
      id: 'INV-001',
      date: '2024-02-15',
      amount: 10,
      status: 'paid',
      invoice: '#12345'
    },
    {
      id: 'INV-002',
      date: '2024-01-15',
      amount: 10,
      status: 'paid',
      invoice: '#12344'
    }
  ];

  const handleSetDefaultPayment = (id: string) => {
    // Handle setting default payment method
  };

  const handleRemovePayment = (id: string) => {
    // Handle removing payment method
  };

  const handleDownloadInvoice = (invoice: string) => {
    // Handle invoice download
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900">Account & Billing</h1>
        
        {error && (
          <div className="mt-4 bg-red-50 border border-red-200 text-red-600 rounded-lg p-4 flex items-center">
            <AlertCircle className="w-5 h-5 mr-2" />
            {error}
          </div>
        )}

        {/* Current Plan */}
        <div className="mt-8 bg-white rounded-lg shadow">
          <div className="p-6">
            <h2 className="text-xl font-semibold text-gray-900 flex items-center">
              <Settings className="w-5 h-5 mr-2" />
              Current Plan
            </h2>
            
            <div className="mt-4 flex items-center justify-between">
              <div>
                <h3 className="text-lg font-medium text-gray-900">
                  {currentPlan.name} Plan
                </h3>
                <p className="text-sm text-gray-500">
                  ${currentPlan.price}/{currentPlan.period}
                </p>
              </div>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                <CheckCircle className="w-4 h-4 mr-1" />
                Active
              </span>
            </div>

            <div className="mt-4">
              <h4 className="text-sm font-medium text-gray-900">Features:</h4>
              <ul className="mt-2 grid grid-cols-1 gap-2 sm:grid-cols-2">
                {currentPlan.features.map((feature) => (
                  <li key={feature} className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 flex items-center justify-between">
              <div className="text-sm text-gray-500">
                Next billing date: {new Date(currentPlan.nextBilling).toLocaleDateString()}
              </div>
              <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50">
                Change Plan
              </button>
            </div>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="mt-8 bg-white rounded-lg shadow">
          <div className="p-6">
            <h2 className="text-xl font-semibold text-gray-900 flex items-center">
              <CreditCard className="w-5 h-5 mr-2" />
              Payment Methods
            </h2>

            <div className="mt-4 space-y-4">
              {paymentMethods.map((method) => (
                <div
                  key={method.id}
                  className="flex items-center justify-between p-4 border rounded-lg"
                >
                  <div className="flex items-center">
                    {method.type === 'card' ? (
                      <div className="flex items-center">
                        <Shield className="w-5 h-5 text-gray-400 mr-3" />
                        <div>
                          <p className="text-sm font-medium text-gray-900">
                            {method.brand} •••• {method.last4}
                          </p>
                          <p className="text-sm text-gray-500">
                            Expires {method.expiryDate}
                          </p>
                        </div>
                      </div>
                    ) : (
                      <div className="flex items-center">
                        <img
                          src="/paypal-logo.png"
                          alt="PayPal"
                          className="w-5 h-5 mr-3"
                        />
                        <p className="text-sm font-medium text-gray-900">
                          {method.email}
                        </p>
                      </div>
                    )}
                  </div>

                  <div className="flex items-center space-x-4">
                    {method.isDefault ? (
                      <span className="text-sm text-gray-500">Default</span>
                    ) : (
                      <button
                        onClick={() => handleSetDefaultPayment(method.id)}
                        className="text-sm text-blue-600 hover:text-blue-500"
                      >
                        Make Default
                      </button>
                    )}
                    <button
                      onClick={() => handleRemovePayment(method.id)}
                      className="text-sm text-red-600 hover:text-red-500"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}

              <button
                onClick={() => setShowAddPayment(true)}
                className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                <Plus className="w-5 h-5 mr-2" />
                Add Payment Method
              </button>
            </div>
          </div>
        </div>

        {/* Billing History */}
        <div className="mt-8 bg-white rounded-lg shadow">
          <div className="p-6">
            <h2 className="text-xl font-semibold text-gray-900 flex items-center">
              <Receipt className="w-5 h-5 mr-2" />
              Billing History
            </h2>

            <div className="mt-4">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead>
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Date
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Amount
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Invoice
                      </th>
                      <th className="relative px-6 py-3">
                        <span className="sr-only">Actions</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {billingHistory.map((bill) => (
                      <tr key={bill.id}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {new Date(bill.date).toLocaleDateString()}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          ${bill.amount}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            bill.status === 'paid'
                              ? 'bg-green-100 text-green-800'
                              : bill.status === 'pending'
                              ? 'bg-yellow-100 text-yellow-800'
                              : 'bg-red-100 text-red-800'
                          }`}>
                            <Clock className="w-3 h-3 mr-1" />
                            {bill.status.charAt(0).toUpperCase() + bill.status.slice(1)}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {bill.invoice}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <button
                            onClick={() => handleDownloadInvoice(bill.invoice)}
                            className="text-blue-600 hover:text-blue-500"
                          >
                            <Download className="w-5 h-5" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        {/* Help Section */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            Have questions about billing?{' '}
            <button className="text-blue-600 hover:text-blue-500">
              Contact Support
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
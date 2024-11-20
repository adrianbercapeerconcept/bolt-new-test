import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, X } from 'lucide-react';

interface CartDropdownProps {
  onClose: () => void;
}

export function CartDropdown({ onClose }: CartDropdownProps) {
  // Dummy cart item for demonstration
  const cartItem = {
    type: 'Advanced Company Report',
    company: 'AfriTech Solutions',
    price: 5000
  };

  return (
    <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200">
      <div className="p-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900">Cart</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-500">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-4">
          <div className="flex items-start space-x-4">
            <div className="p-2 bg-blue-50 rounded-lg">
              <FileText className="w-6 h-6 text-blue-600" />
            </div>
            <div className="flex-1">
              <h4 className="text-sm font-medium text-gray-900">{cartItem.type}</h4>
              <p className="text-sm text-gray-500">{cartItem.company}</p>
              <p className="text-sm font-medium text-gray-900">${cartItem.price}</p>
            </div>
            <button className="text-gray-400 hover:text-gray-500">
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="mt-4 pt-4 border-t border-gray-200">
          <div className="flex items-center justify-between text-sm">
            <span className="font-medium text-gray-900">Total</span>
            <span className="font-bold text-gray-900">${cartItem.price}</span>
          </div>
        </div>

        <div className="mt-4">
          <Link
            to="/checkout"
            className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
          >
            Proceed to Checkout
          </Link>
        </div>
      </div>
    </div>
  );
}
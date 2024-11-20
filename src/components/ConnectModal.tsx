import React, { useState } from 'react';
import { X, AlertCircle } from 'lucide-react';
import { WhatsAppMessage } from './WhatsAppMessage';

interface ConnectModalProps {
  isOpen: boolean;
  onClose: () => void;
  profile: {
    name: string;
    role: string;
    company: string;
    avatar: string;
    phoneNumber: string;
  };
}

export function ConnectModal({ isOpen, onClose, profile }: ConnectModalProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      setError(null);
      // Send connection request
      await new Promise(resolve => setTimeout(resolve, 1500));
      onClose();
    } catch (err) {
      setError('Failed to send connection request. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-lg mx-4">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-4">
              <img
                src={profile.avatar}
                alt={profile.name}
                className="w-12 h-12 rounded-full"
              />
              <div>
                <h2 className="text-xl font-bold text-gray-900">{profile.name}</h2>
                <p className="text-sm text-gray-600">{profile.role} at {profile.company}</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {error && (
            <div className="mb-6 bg-red-50 border border-red-200 text-red-600 rounded-lg p-4 flex items-center">
              <AlertCircle className="w-5 h-5 mr-2" />
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Add a personal note
              </label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={4}
                className="mt-1 block w-full border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                placeholder="Hi, I'd like to connect with you..."
              />
              <p className="mt-2 text-sm text-gray-500">
                Adding a note increases the chances of your request being accepted
              </p>
            </div>

            <div className="flex justify-end space-x-4">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                Cancel
              </button>
              <WhatsAppMessage
                phoneNumber={profile.phoneNumber}
                message={message}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
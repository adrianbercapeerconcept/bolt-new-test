import React, { useState } from 'react';
import { X, AlertCircle } from 'lucide-react';
import { WhatsAppMessage } from './WhatsAppMessage';

interface MessageModalProps {
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

export function MessageModal({ isOpen, onClose, profile }: MessageModalProps) {
  const [message, setMessage] = useState('');

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

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={4}
                className="mt-1 block w-full border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                placeholder="Type your message here..."
              />
            </div>

            <div className="flex justify-end space-x-4">
              <button
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
          </div>
        </div>
      </div>
    </div>
  );
}
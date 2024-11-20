import React, { useState } from 'react';
import { X, AlertCircle } from 'lucide-react';
import { WhatsAppMessage } from '../WhatsAppMessage';

interface User {
  id: number;
  name: string;
  avatar: string;
  phoneNumber: string;
}

interface MassMessageModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedUsers: number[];
  users: User[];
}

export function MassMessageModal({ isOpen, onClose, selectedUsers, users }: MassMessageModalProps) {
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState('');
  const [subject, setSubject] = useState('');

  const selectedUserDetails = users.filter(user => selectedUsers.includes(user.id));

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl mx-4">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-900">Send Message</h2>
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

          <div className="mb-6">
            <h3 className="text-sm font-medium text-gray-700 mb-2">
              Recipients ({selectedUsers.length})
            </h3>
            <div className="flex flex-wrap gap-2">
              {selectedUserDetails.map((user) => (
                <div
                  key={user.id}
                  className="flex items-center bg-gray-100 rounded-full px-3 py-1"
                >
                  <img
                    src={user.avatar}
                    alt={user.name}
                    className="w-4 h-4 rounded-full mr-2"
                  />
                  <span className="text-sm text-gray-700">{user.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Subject
              </label>
              <input
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="mt-1 block w-full border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter message subject"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                rows={6}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="mt-1 block w-full border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                placeholder="Type your message here..."
                required
              />
            </div>

            <div className="flex justify-end space-x-4">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                Cancel
              </button>
              <div className="flex space-x-2">
                {selectedUserDetails.map((user) => (
                  <WhatsAppMessage
                    key={user.id}
                    phoneNumber={user.phoneNumber}
                    message={`${subject}\n\n${message}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
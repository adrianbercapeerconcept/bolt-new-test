import React from 'react';
import { UserPlus, PhoneCall, X, CheckCircle, XCircle } from 'lucide-react';

interface NotificationsDropdownProps {
  onClose: () => void;
}

const notifications = [
  {
    id: 1,
    type: 'connection',
    user: {
      name: 'Amara Okafor',
      role: 'Energy Policy Advisor',
      avatar: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?fit=facearea&facepad=2&w=256&h=256'
    },
    time: '2h ago',
    unread: true
  },
  {
    id: 2,
    type: 'call',
    user: {
      name: 'Kwame Mensah',
      role: 'AgriTech Innovator',
      avatar: 'https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?fit=facearea&facepad=2&w=256&h=256'
    },
    time: '4h ago',
    unread: true
  },
  {
    id: 3,
    type: 'connection',
    user: {
      name: 'Zainab El-Amin',
      role: 'Solar Energy Expert',
      avatar: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?fit=facearea&facepad=2&w=256&h=256'
    },
    time: '1d ago',
    unread: false
  }
];

export function NotificationsDropdown({ onClose }: NotificationsDropdownProps) {
  const handleAccept = (id: number) => {
    // Handle accept logic
  };

  const handleReject = (id: number) => {
    // Handle reject logic
  };

  return (
    <div className="absolute right-0 mt-2 w-96 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-900">Notifications</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-500">
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="max-h-96 overflow-y-auto">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className={`p-4 border-b border-gray-200 last:border-0 ${
              notification.unread ? 'bg-blue-50' : ''
            }`}
          >
            <div className="flex items-start space-x-4">
              <img
                src={notification.user.avatar}
                alt={notification.user.name}
                className="w-10 h-10 rounded-full"
              />
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-gray-900">
                    {notification.user.name}
                  </p>
                  <span className="text-xs text-gray-500">{notification.time}</span>
                </div>
                <p className="text-sm text-gray-500">{notification.user.role}</p>
                <div className="mt-2">
                  {notification.type === 'connection' ? (
                    <p className="text-sm text-gray-600">
                      Wants to connect with you
                    </p>
                  ) : (
                    <p className="text-sm text-gray-600">
                      Requested a due diligence call
                    </p>
                  )}
                </div>
                <div className="mt-3 flex space-x-2">
                  <button
                    onClick={() => handleAccept(notification.id)}
                    className="flex items-center px-3 py-1 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700"
                  >
                    <CheckCircle className="w-4 h-4 mr-1" />
                    Accept
                  </button>
                  <button
                    onClick={() => handleReject(notification.id)}
                    className="flex items-center px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-lg hover:bg-gray-200"
                  >
                    <XCircle className="w-4 h-4 mr-1" />
                    Decline
                  </button>
                </div>
              </div>
              {notification.type === 'connection' ? (
                <UserPlus className="w-5 h-5 text-blue-500 flex-shrink-0" />
              ) : (
                <PhoneCall className="w-5 h-5 text-green-500 flex-shrink-0" />
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="p-4 border-t border-gray-200">
        <button className="w-full text-center text-sm text-blue-600 hover:text-blue-500">
          View all notifications
        </button>
      </div>
    </div>
  );
}
import React from 'react';
import { Activity, User, Building, Briefcase, Calendar } from 'lucide-react';

interface ActivityItem {
  id: number;
  type: 'user_joined' | 'company_verified' | 'opportunity_posted' | 'event_created';
  subject: string;
  action: string;
  timestamp: string;
}

const activities: ActivityItem[] = [
  {
    id: 1,
    type: 'user_joined',
    subject: 'Amara Okafor',
    action: 'joined the network',
    timestamp: '2 hours ago'
  },
  {
    id: 2,
    type: 'company_verified',
    subject: 'AfriTech Solutions',
    action: 'was verified',
    timestamp: '4 hours ago'
  },
  {
    id: 3,
    type: 'opportunity_posted',
    subject: 'SolarTech Africa',
    action: 'posted a new investment opportunity',
    timestamp: '6 hours ago'
  },
  {
    id: 4,
    type: 'event_created',
    subject: 'Africa Tech Summit',
    action: 'was scheduled',
    timestamp: '8 hours ago'
  }
];

const activityIcons = {
  user_joined: User,
  company_verified: Building,
  opportunity_posted: Briefcase,
  event_created: Calendar
};

export function ActivityFeed() {
  return (
    <div className="bg-white rounded-lg shadow">
      <div className="p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h2>
        <div className="space-y-4">
          {activities.map((activity) => {
            const Icon = activityIcons[activity.type];
            return (
              <div key={activity.id} className="flex items-start">
                <div className="flex-shrink-0">
                  <Icon className="w-5 h-5 text-blue-500" />
                </div>
                <div className="ml-4">
                  <p className="text-sm text-gray-900">
                    <span className="font-medium">{activity.subject}</span>{' '}
                    {activity.action}
                  </p>
                  <p className="text-xs text-gray-500">{activity.timestamp}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
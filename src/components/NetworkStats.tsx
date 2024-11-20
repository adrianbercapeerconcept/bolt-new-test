import React from 'react';
import { Users, UserPlus, MessageSquare, Star } from 'lucide-react';

interface NetworkStatsProps {
  stats: {
    totalConnections: number;
    pendingRequests: number;
    newThisWeek: number;
    trustScore: number;
  };
}

export function NetworkStats({ stats }: NetworkStatsProps) {
  const statItems = [
    {
      label: 'Total Connections',
      value: stats.totalConnections,
      icon: Users,
      color: 'blue'
    },
    {
      label: 'Pending Requests',
      value: stats.pendingRequests,
      icon: UserPlus,
      color: 'yellow'
    },
    {
      label: 'New This Week',
      value: stats.newThisWeek,
      icon: MessageSquare,
      color: 'green'
    },
    {
      label: 'Trust Score',
      value: stats.trustScore,
      icon: Star,
      color: 'purple'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
      {statItems.map((item) => {
        const Icon = item.icon;
        return (
          <div key={item.label} className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">{item.label}</p>
                <p className="text-2xl font-bold text-gray-900">{item.value}</p>
              </div>
              <Icon className={`w-8 h-8 text-${item.color}-500`} />
            </div>
          </div>
        );
      })}
    </div>
  );
}
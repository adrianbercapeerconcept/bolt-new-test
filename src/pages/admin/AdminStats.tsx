import React from 'react';
import { Users, Building, Briefcase, Calendar, TrendingUp, Globe, Activity } from 'lucide-react';
import { StatsCard } from '../../components/admin/StatsCard';
import { ActivityFeed } from '../../components/admin/ActivityFeed';
import { NetworkInsights } from '../../components/admin/NetworkInsights';
import { UserGrowthChart } from '../../components/admin/charts/UserGrowthChart';
import { SectorDistributionChart } from '../../components/admin/charts/SectorDistributionChart';
import { GeographicDistributionChart } from '../../components/admin/charts/GeographicDistributionChart';
import { ActivityTrendsChart } from '../../components/admin/charts/ActivityTrendsChart';

const stats = [
  {
    title: 'Total Users',
    value: '12,345',
    change: '+12%',
    trend: 'up' as const,
    icon: Users,
    color: 'blue' as const
  },
  {
    title: 'Active Companies',
    value: '2,876',
    change: '+8%',
    trend: 'up' as const,
    icon: Building,
    color: 'green' as const
  },
  {
    title: 'Open Opportunities',
    value: '567',
    change: '+15%',
    trend: 'up' as const,
    icon: Briefcase,
    color: 'purple' as const
  },
  {
    title: 'Upcoming Events',
    value: '89',
    change: '+5%',
    trend: 'up' as const,
    icon: Calendar,
    color: 'yellow' as const
  }
];

export function AdminStats() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Network Statistics</h1>
        <p className="mt-1 text-sm text-gray-500">
          Detailed analytics and insights about the network
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => (
          <StatsCard key={stat.title} {...stat} />
        ))}
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">User Growth</h2>
          <UserGrowthChart />
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Sector Distribution</h2>
          <SectorDistributionChart />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Geographic Distribution</h2>
          <GeographicDistributionChart />
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Activity Trends</h2>
          <ActivityTrendsChart />
        </div>
      </div>

      {/* Activity and Insights */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <ActivityFeed />
        <NetworkInsights />
      </div>
    </div>
  );
}
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { country: 'Nigeria', users: 3200 },
  { country: 'Kenya', users: 2800 },
  { country: 'South Africa', users: 2400 },
  { country: 'Egypt', users: 2000 },
  { country: 'Morocco', users: 1800 }
];

export function GeographicDistributionChart() {
  return (
    <div className="h-80">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="country" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="users" fill="#3b82f6" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
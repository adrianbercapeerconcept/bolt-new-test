import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { month: 'Jan', users: 4000 },
  { month: 'Feb', users: 5000 },
  { month: 'Mar', users: 6800 },
  { month: 'Apr', users: 8200 },
  { month: 'May', users: 9100 },
  { month: 'Jun', users: 10500 },
  { month: 'Jul', users: 11700 },
  { month: 'Aug', users: 12345 }
];

export function UserGrowthChart() {
  return (
    <div className="h-80">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="users" stroke="#3b82f6" fill="#93c5fd" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { day: 'Mon', connections: 65, messages: 45, opportunities: 12 },
  { day: 'Tue', connections: 59, messages: 49, opportunities: 10 },
  { day: 'Wed', connections: 80, messages: 90, opportunities: 15 },
  { day: 'Thu', connections: 81, messages: 78, opportunities: 13 },
  { day: 'Fri', connections: 56, messages: 96, opportunities: 11 },
  { day: 'Sat', connections: 55, messages: 50, opportunities: 8 },
  { day: 'Sun', connections: 40, messages: 35, opportunities: 7 }
];

export function ActivityTrendsChart() {
  return (
    <div className="h-80">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="connections" stroke="#3b82f6" />
          <Line type="monotone" dataKey="messages" stroke="#10b981" />
          <Line type="monotone" dataKey="opportunities" stroke="#8b5cf6" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
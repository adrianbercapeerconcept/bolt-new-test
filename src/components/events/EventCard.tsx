import React from 'react';
import { Calendar, Clock, MapPin, Users } from 'lucide-react';
import type { Event } from '../../pages/Events';

interface EventCardProps {
  event: Event;
  onClick: () => void;
}

export function EventCard({ event, onClick }: EventCardProps) {
  return (
    <div 
      className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow cursor-pointer"
      onClick={onClick}
    >
      {event.image && (
        <div className="h-48 w-full">
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <div className="p-6">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">{event.title}</h3>
            <p className="mt-1 text-sm text-gray-500 line-clamp-2">{event.description}</p>
          </div>
          <span className={`ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
            event.type === 'online'
              ? 'bg-green-100 text-green-800'
              : event.type === 'hybrid'
              ? 'bg-blue-100 text-blue-800'
              : 'bg-purple-100 text-purple-800'
          }`}>
            {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
          </span>
        </div>

        <div className="mt-4 space-y-2">
          <div className="flex items-center text-sm text-gray-500">
            <Calendar className="w-4 h-4 mr-2" />
            {new Date(event.date).toLocaleDateString()}
          </div>
          <div className="flex items-center text-sm text-gray-500">
            <Clock className="w-4 h-4 mr-2" />
            {event.time}
          </div>
          <div className="flex items-center text-sm text-gray-500">
            <MapPin className="w-4 h-4 mr-2" />
            {event.location}
          </div>
          <div className="flex items-center text-sm text-gray-500">
            <Users className="w-4 h-4 mr-2" />
            {event.attendees} attending
          </div>
        </div>

        <div className="mt-4 flex items-center space-x-3">
          <img
            src={event.organizer.avatar}
            alt={event.organizer.name}
            className="w-8 h-8 rounded-full"
          />
          <div>
            <p className="text-sm font-medium text-gray-900">{event.organizer.name}</p>
            <p className="text-xs text-gray-500">{event.organizer.role}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
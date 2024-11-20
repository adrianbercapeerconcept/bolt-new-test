import React from 'react';
import { X, Calendar, Clock, MapPin, Users, Globe, ExternalLink } from 'lucide-react';
import type { Event } from '../../pages/Events';

interface EventDetailsModalProps {
  event: Event;
  onClose: () => void;
}

export function EventDetailsModal({ event, onClose }: EventDetailsModalProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-4xl mx-4 max-h-[90vh] overflow-y-auto">
        <div className="relative">
          {event.image && (
            <div className="h-64 w-full">
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-lg hover:bg-gray-100"
          >
            <X className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-gray-900">{event.title}</h2>
            <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
              event.type === 'online'
                ? 'bg-green-100 text-green-800'
                : event.type === 'hybrid'
                ? 'bg-blue-100 text-blue-800'
                : 'bg-purple-100 text-purple-800'
            }`}>
              {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-gray-600">
                <Calendar className="w-5 h-5" />
                <span>{new Date(event.date).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <Clock className="w-5 h-5" />
                <span>{event.time}</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <MapPin className="w-5 h-5" />
                <span>{event.location}</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <Users className="w-5 h-5" />
                <span>{event.attendees} attending</span>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <img
                src={event.organizer.avatar}
                alt={event.organizer.name}
                className="w-12 h-12 rounded-full"
              />
              <div>
                <h3 className="text-lg font-medium text-gray-900">Organized by</h3>
                <p className="text-gray-900">{event.organizer.name}</p>
                <p className="text-gray-600">{event.organizer.role}</p>
              </div>
            </div>
          </div>

          <div className="prose max-w-none mb-6">
            <h3 className="text-lg font-medium text-gray-900 mb-2">About this event</h3>
            <p className="text-gray-600">{event.description}</p>
          </div>

          <div className="flex justify-end space-x-4">
            <button
              onClick={onClose}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50"
            >
              Close
            </button>
            <button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-lg hover:bg-blue-700 flex items-center">
              <ExternalLink className="w-4 h-4 mr-2" />
              Register Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
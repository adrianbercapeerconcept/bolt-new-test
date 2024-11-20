import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Icon } from 'leaflet';
import { BadgeCheck, Building, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

// Custom marker icon
const customIcon = new Icon({
  iconUrl: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxMCIgZmlsbD0iIzJiODJmZiIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9zdmc+',
  iconSize: [24, 24],
  iconAnchor: [12, 12],
  popupAnchor: [0, -12]
});

// Mapping of cities to their coordinates
const cityCoordinates: { [key: string]: [number, number] } = {
  'Lagos': [6.5244, 3.3792],
  'Nairobi': [-1.2921, 36.8219],
  'Cairo': [30.0444, 31.2357],
  'Johannesburg': [-26.2041, 28.0473],
  'Accra': [5.6037, -0.1870],
  'Casablanca': [33.5731, -7.5898],
  'Dar es Salaam': [-6.7924, 39.2083],
  'Addis Ababa': [9.0320, 38.7423],
  'Kigali': [-1.9441, 30.0619],
  'Dakar': [14.7167, -17.4677],
  'Kampala': [0.3476, 32.5825],
  'Abuja': [9.0765, 7.3986],
  'Lusaka': [-15.3875, 28.3228],
  'Maputo': [-25.9692, 32.5732],
  'Windhoek': [-22.5609, 17.0658]
};

interface Professional {
  id: number;
  name: string;
  role: string;
  company: string;
  location: string;
  country: string;
  avatar: string;
  verified: boolean;
  trustScore: number;
}

interface PeopleMapProps {
  professionals: Professional[];
}

export function PeopleMap({ professionals }: PeopleMapProps) {
  // Center the map on Africa
  const center: [number, number] = [4.3947, 21.4940];

  return (
    <div className="h-[calc(100vh-12rem)] w-full bg-gray-100 rounded-lg overflow-hidden">
      <MapContainer
        center={center}
        zoom={3}
        style={{ height: '100%', width: '100%' }}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://tiles.osmap.uk/sv/{z}/{x}/{y}.png"
        />
        
        {professionals.map((professional) => {
          const coordinates = cityCoordinates[professional.location];
          if (!coordinates) return null;

          return (
            <Marker
              key={professional.id}
              position={coordinates}
              icon={customIcon}
            >
              <Popup>
                <Link 
                  to={`/professionals/${professional.id}`}
                  className="block p-2 -m-2 hover:bg-gray-50 rounded-lg transition-colors"
                >
                  <div className="flex items-start space-x-3">
                    <img
                      src={professional.avatar}
                      alt={professional.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <div className="flex items-center">
                        <h3 className="text-sm font-medium text-gray-900">
                          {professional.name}
                        </h3>
                        {professional.verified && (
                          <BadgeCheck className="w-4 h-4 text-blue-500 ml-1" />
                        )}
                      </div>
                      <p className="text-xs text-gray-600">{professional.role}</p>
                      <div className="mt-1 flex items-center text-xs text-gray-500">
                        <Building className="w-3 h-3 mr-1" />
                        {professional.company}
                      </div>
                      <div className="flex items-center text-xs text-gray-500">
                        <MapPin className="w-3 h-3 mr-1" />
                        {professional.location}, {professional.country}
                      </div>
                    </div>
                  </div>
                </Link>
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </div>
  );
}
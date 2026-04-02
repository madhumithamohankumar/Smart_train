import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import { Card } from '../components/ui/Card';
import { cn } from '../lib/utils';

// Fix for default marker icons in Leaflet
const markerIcon = 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png';
const markerShadow = 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png';

const DefaultIcon = L.icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

L.Marker.prototype.options.icon = DefaultIcon;

const MapView = () => {
  const center: [number, number] = [20.5937, 78.9629]; // India center

  const markers = [
    { id: 1, pos: [19.0760, 72.8777], label: 'Mumbai', type: 'Empty Rake' },
    { id: 2, pos: [28.6139, 77.2090], label: 'Delhi', type: 'Loaded Rake' },
    { id: 3, pos: [13.0827, 80.2707], label: 'Chennai', type: 'In Transit' },
    { id: 4, pos: [22.5726, 88.3639], label: 'Kolkata', type: 'Pending Cargo' },
    { id: 5, pos: [12.9716, 77.5946], label: 'Bangalore', type: 'Empty Rake' },
  ];

  const legend = [
    { label: 'Empty Rake', color: 'bg-green-500' },
    { label: 'Loaded Rake', color: 'bg-blue-500' },
    { label: 'In Transit', color: 'bg-yellow-500' },
    { label: 'Pending Cargo', color: 'bg-orange-500' },
  ];

  return (
    <div className="space-y-8 h-[calc(100vh-160px)] flex flex-col">
      <div className="flex justify-between items-center shrink-0">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Railway Network Map</h1>
          <p className="text-slate-500 mt-1">View railway stations, rakes, and cargo locations</p>
        </div>
        <div className="flex gap-3">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold shadow-md">Rakes (0)</button>
          <button className="bg-orange-600 text-white px-4 py-2 rounded-lg font-semibold shadow-md">Cargo (0)</button>
        </div>
      </div>

      <div className="flex gap-6 items-center shrink-0">
        {legend.map((item) => (
          <div key={item.label} className="flex items-center gap-2">
            <div className={cn("w-3 h-3 rounded-full", item.color)}></div>
            <span className="text-sm font-medium text-slate-600">{item.label}</span>
          </div>
        ))}
      </div>

      <div className="flex-1 min-h-0 rounded-xl overflow-hidden border border-slate-200 shadow-sm relative">
        <MapContainer center={center} zoom={5} className="h-full w-full z-0">
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {markers.map((m) => (
            <Marker key={m.id} position={m.pos as [number, number]}>
              <Popup>
                <div className="font-semibold">{m.label}</div>
                <div className="text-xs text-slate-500">{m.type}</div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default MapView;

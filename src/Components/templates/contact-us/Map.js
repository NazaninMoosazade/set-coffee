"use client";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export default function Map({ position, center, children }) {
  return (
    <div className="relative w-full">
      {/* نقشه */}
      <MapContainer
        className="rounded-lg w-full h-72 md:h-96"
        center={center}
        zoom={14}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>Set Coffee</Popup>
        </Marker>
      </MapContainer>

      {/* کارت جزئیات روی نقشه */}
      <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/4 md:-translate-y-1/3 w-11/12 md:w-3/4 bg-white p-4 md:p-6 rounded-lg shadow-lg z-50">
        {children}
      </div>
    </div>
  );
}

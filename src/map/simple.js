import React from "react";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import * as showcaseData from "./map.json";
import MarkerClusterGroup from "react-leaflet-markercluster";
import L from 'leaflet';
import starMarker from './asterisk-01.svg';
import '../styles/App.css';
import '../styles/Vis.css';

export default function Simple() {
  const [activePark, setActivePark] = React.useState(null);
  const createClusterCustomIcon = function (cluster) {
    return L.divIcon({
      html: `<span>${cluster.getChildCount()}</span>`,
      className: 'marker-cluster-custom',
      iconSize: L.point(40, 40, true),
    });
  }
  const star = L.icon({
    iconUrl: starMarker,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });
  return (
    
    <Map center={[0, 0]} zoom={2}>
       <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <MarkerClusterGroup 
      maxClusterRadius="20"
      iconCreateFunction={createClusterCustomIcon}>
       {showcaseData.features.map(piece => (
        <Marker
          key={piece.properties.title}
          position={[
            piece.geometry.coordinates[1],
            piece.geometry.coordinates[0]
          ]}
          onClick={() => {
            setActivePark(piece);
          }}
          icon={star} 
        />
      ))}
      </MarkerClusterGroup>
    {activePark && (
      <Popup
        position={[
          activePark.geometry.coordinates[1],
          activePark.geometry.coordinates[0]
        ]}
        onClose={() => {
          setActivePark(null);
        }}
      >
        <div className="map">
        <h1>{activePark.properties.location}</h1>
          <h2>{activePark.properties.title}</h2>
          <p>{activePark.properties.author}</p>
          <p><em>{activePark.properties.occupation}</em></p>
          <a href={activePark.properties.project_link}>View Proj</a>
        </div>
      </Popup>
    )}
  </Map>
  );
}
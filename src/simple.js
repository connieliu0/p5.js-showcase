import React from "react";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import * as showcaseData from "./Visualizations_2020/map.json";
import MarkerClusterGroup from "react-leaflet-markercluster";
import L from 'leaflet';
import starMarker from './Visualizations_2020/asterisk-01.svg';
import './styles/App.css';
import './styles/Vis.css';

export default function Simple() {
  const [activeProject, setactiveProject] = React.useState(null);
  const createClusterCustomIcon = function (cluster) {
    return L.divIcon({
      html: `<span>${cluster.getChildCount()}</span>`,
      className: 'marker-cluster-custom',
      iconSize: L.point(40, 40, true),
    });
  }
  const star = L.icon({
    iconUrl: starMarker,
    iconSize: [32, 32],
    iconAnchor: [20, 40],
  });
  return (
    
    <Map center={[0, 0]} zoom={2} scrollWheelZoom	={false}>
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
            setactiveProject(piece);
          }}
          icon={star} 
        />
      ))}
      </MarkerClusterGroup>
    {activeProject && (
      <Popup
        closeButton={false}
        position={[
          activeProject.geometry.coordinates[1],
          activeProject.geometry.coordinates[0]
        ]}
        onClose={() => {
          setactiveProject(null);
        }}
      >
        <div className="map">
        <h1>{activeProject.properties.location}</h1>
          <h2>{activeProject.properties.title}</h2>
          <p>{activeProject.properties.author}</p>
          <p><em>{activeProject.properties.occupation}</em></p>
          <a href={activeProject.properties.project_link} target="_blank">View Project</a>
        </div>
      </Popup>
    )}
  </Map>
  );
}
import Mappa from 'mappa-mundi';
export default function sketch (p) {
let fontsize = 40;
  let myMap;
  let canvas;
  const mappa = new Mappa('Leaflet');
  const options = {
    lat: 0,
    lng: 0,
    zoom: 4,
    style: "http://{s}.tile.osm.org/{z}/{x}/{y}.png"
  }
  
  p.setup=function () {
    p.textSize(fontsize);
    canvas = p.createCanvas(640,640);
    myMap = mappa.tileMap(options); 
    myMap.overlay(canvas) 
  
    p.fill(200, 100, 100);
    
    // Only redraw the point when the map changes and not every frame.
    myMap.onChange(p.drawPoint);
  }
  
  p.draw=function () {
  }
  
  p.drawPoint=function () {
    p.clear();
  
    const nigeria = myMap.latLngToPixel(11.396396, 5.076543); 
    p.fill(51);
    p.ellipse(nigeria.x, nigeria.y, 20, 20);
    p.drawCaption(nigeria);
  }
  p.drawCaption= function (country){
    p.fill(255);
    p.text('hi', country.x+10, country.y+10);
  }
  };
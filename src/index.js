const mapboxgl = require("mapbox-gl");
const buildMarker = require('./marker.js')

mapboxgl.accessToken = 'pk.eyJ1IjoiMTFncm9zc21hbmUiLCJhIjoiY2sxNmxnNzluMTczbzNjbng1dW9iazQ5OSJ9.pfaQJLkq4YhjuJahwun1Rw';

const map = new mapboxgl.Map({
  container: "map",
  center: [-87.6354, 41.8885], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoomsdas
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

const markerDomEl = document.createElement("div"); // Create a new, detached DIV
markerDomEl.style.width = "32px";
markerDomEl.style.height = "39px";
markerDomEl.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";

new mapboxgl.Marker(markerDomEl).setLngLat([-87.6354, 41.8885]).addTo(map);
//new mapboxgl.Marker().setLngLat([-87.6354, 41.8885]).addTo(map);

buildMarker('hotel', [-87.6354, 41.8], map)

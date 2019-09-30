const mapboxgl = require("mapbox-gl")

const buildMarker = (placeType, coordArray, map) => {
  let background

  switch (placeType) {
  case 'hotel':
    {
      background = 'http://i.imgur.com/D9574Cu.png'
      break
    }
  case 'activity':
    {
      background = 'http://i.imgur.com/WbMOfMl.png'
      break
    }
  case 'restaurant':
    {
      background = 'http://i.imgur.com/cqR6pUI.png'
      break
    }
  default:
    {
      background = 'https://imgur.com/r/PatrickStar/2IyRYAN'
    }

  }

  const markerDomEl = document.createElement("div"); // Create a new, detached DIV
  markerDomEl.style.width = "32px";
  markerDomEl.style.height = "39px";
  markerDomEl.style.backgroundImage = `url(${background})`;

  new mapboxgl.Marker(markerDomEl).setLngLat(coordArray).addTo(map);
}

module.exports = buildMarker

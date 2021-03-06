import Leaflet from 'leaflet';

import MarkerImg from '../img/local.svg';

const mapIcon = Leaflet.icon({
    iconUrl: MarkerImg,
  
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [0, -60]
  })

export default mapIcon;
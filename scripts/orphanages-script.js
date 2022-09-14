/* FREE MAPS API: https://leafletjs.com/examples/quick-start/  */

var map = L.map('map').setView([-30.0275, -51.2278], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);


const icon = L.icon(
    {
        iconUrl: "./images/map-marker.svg",
        iconSize:[58,68],
        iconAnchor:[29,68],
        popupAnchor:[170,2]
    }
)

var popup = L.popup(
    {
        closeButton:false,
        className:"map-popup",
        minWidth:240,
        minHeight:240
    }
).setContent("Go to orphanage! <a href='hope.html'><img src='./images/arrow-white.svg'></a>")


L.marker([-30.0275, -51.2278], {icon:icon}).addTo(map).bindPopup(popup)

var circle = L.circle([-30.0275, -51.2278], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(map)




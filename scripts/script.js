let map = L.map('map').setView([-30.0275, -51.2278], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);

let marker = L.marker([-30.0275, -51.2278]).addTo(map)

let circle = L.circle([-30.0275, -51.2278], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(map)


marker.bindPopup("Hello world! I am a popup").openPopup();
circle.bindPopup("I am a circle");

/*

var polygon = L.polygon([
    [51.509, -0.08],
    [51.503, -0.06],
    [51.51, -0.047]
]).addTo(map).bindPopup('I am a polygon.'); 

*/





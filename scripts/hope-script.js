/* FREE MAPS API: https://leafletjs.com/examples/quick-start/  */

const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}

/*

Original:
var map = L.map('map').setView([-30.0275, -51.2278], 13);
Deste modo ela permite zoom scroll etc. Com o novo parametro abaixo "options", ele trava essas possibilidades

*/
var map = L.map('map', options).setView([-30.0275, -51.2278], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);

var marker = L.marker([-30.0275, -51.2278]).addTo(map);

var circle = L.circle([-30.0275, -51.2278], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(map);

let pictures = document.querySelectorAll(".small-picture")

for (item of pictures) {
    item.addEventListener("click", function checkPicture(item) {

        /* REMOVING ACTIVE FROM ALL */
        let pictures_actives = document.querySelectorAll(".small-picture")
        pictures_actives.forEach(removeClass)
        function removeClass(imageWithClass){
            imageWithClass.classList.remove("active")
        }
        /* REMOVING ACTIVE FROM ALL */

        let imagesource = String(item.target.src)
        let imageID = item.target.id
        if (item.target.classList.contains("active")) {
            document.querySelector(".main-picture").setAttribute("src", `${imagesource}`)
        } else {
            item.target.classList.add("active")
            document.querySelector(".main-picture").setAttribute("src", `${imagesource}`)
        }
    })
}

/* 

Provavelmente em produção tem que editar a string que muda a big foto 

*/



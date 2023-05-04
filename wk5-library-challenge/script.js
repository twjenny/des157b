(function(){
    'use strict';

    // add your script here
    var map = L.map('map').setView([37.565935,126.975221], 13);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
    
    // marker on the map
    var marker = L.marker([37.529810,126.908044]).addTo(map);

    // radius on the map
    // dangsandong
    var circle = L.circle([37.529810,126.908044], {
        color: 'red',
        fillColor: 'red',
        fillOpacity: '0.5',
        radius: 500
    }).addTo(map);

    // polygon
    var polygon = L.polygon ([
        [37.5519, 126.9918],
        [37.565935,126.975221],
        [37.529810,126.908044]
    ]).addTo(map);
    
    // popup message
    circle.bindPopup("This place is where I used to hang out often!")
    marker.bindPopup("This is where I grew up!")
    polygon.bindPopup("This is the area that I am most familiar with!")
}());
import L from 'leaflet';

export function addTileLayer (map){
    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiYXN0ZWxveSIsImEiOiJja3kxbGZoZDAwY2tnMnZwbjI0Z3BkZnQ1In0.nKnO7zxgpf3JEE8D3ysPKw', {
        attribution: ' Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. Coded by <a href="#">James</a>.',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
    }).addTo(map);
}
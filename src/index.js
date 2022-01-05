import 'babel-polyfill';
import {
    validateIp,
    addOffset,
    addTileLayer,
    getAddress
} from "./helpers";
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import icon from '../images/icon-location.svg';

const ipInput = document.querySelector('.search-bar__input');
const btn = document.querySelector('button');
const ipInfo = document.querySelector('#ip');
const locationInfo = document.querySelector('#location');
const timezoneInfo = document.querySelector('#timezone');
const ispInfo = document.querySelector('#isp');
const mapArea = document.querySelector('.map');
const map = L.map(mapArea, {
    center: [51.657766, 35.678081],
    zoom: 13,
});

const markerIcon = L.icon({
    iconUrl: icon,
    iconSize: [30, 40],
})

addTileLayer(map);
L.marker([51.657766, 35.678081], {
    icon: markerIcon
}).addTo(map);

ipInput.addEventListener('keydown', handleKey);
btn.addEventListener('click', getData);

function getData() {
    if (validateIp(ipInput.value)) {
        getAddress(ipInput.value).then(setInfo);
    }
}

function handleKey(e) {
    if (e.key === 'Enter') {
        getData();
    }
}

function setInfo(mapData) {
    const {
        lat,
        lng,
        country,
        region,
        timezone
    } = mapData.location;
    ipInfo.innerText = mapData.ip;
    locationInfo.innerText = country + " " + region;
    timezoneInfo.innerText = timezone;
    ispInfo.innerText = mapData.isp;

    map.setView([lat, lng]);
    L.marker([lat, lng], {
        icon: markerIcon
    }).addTo(map);

    if (matchMedia("(max-width: 1024px)").matches) {
        addOffset(map)
    };

}


document.addEventListener('DOMContentLoaded', () => {
    getAddress('1.1.1.1').then(setInfo)
});
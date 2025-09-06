const statusUrl = '/api/rs/status';
const tripUrl = '/api/rs/tripInfo/trip';
const maxSpeed = 350; // km/h for progress bar
let map, marker;

function updateStatus(data) {
  document.getElementById('trainType').textContent = data.trainType ?? '-';
  document.getElementById('tzn').textContent = data.tzn ?? '-';
  document.getElementById('series').textContent = data.series ?? '-';
  document.getElementById('wagonClass').textContent = data.wagonClass ?? '-';

  document.getElementById('connection').textContent = data.connection ? 'Online' : 'Offline';
  document.getElementById('internet').textContent = data.internet;
  document.getElementById('serviceLevel').textContent = data.serviceLevel;
  document.getElementById('gpsStatus').textContent = data.gpsStatus;

  const speed = data.speed || 0;
  document.getElementById('speedValue').textContent = `${speed.toFixed(1)} km/h`;
  const percent = Math.min(speed / maxSpeed * 100, 100);
  document.getElementById('speedBar').style.width = percent + '%';

  document.getElementById('latitude').textContent = data.latitude?.toFixed(5) ?? '-';
  document.getElementById('longitude').textContent = data.longitude?.toFixed(5) ?? '-';

  if (map && data.latitude && data.longitude) {
    const latlng = [data.latitude, data.longitude];
    marker.setLatLng(latlng);
    map.setView(latlng);
  }
}

function updateTrip(data) {
  const info = data.trip?.stopInfo ?? {};
  document.getElementById('finalStation').textContent = info.finalStationName ?? '-';
  document.getElementById('nextStop').textContent = info.actualNext ?? '-';
}

async function fetchStatus() {
  try {
    const res = await fetch(statusUrl);
    const json = await res.json();
    updateStatus(json);
    document.getElementById('updated').textContent = new Date().toLocaleTimeString();
  } catch (err) {
    console.error('Status fetch failed', err);
  }
}

async function fetchTrip() {
  try {
    const res = await fetch(tripUrl);
    const json = await res.json();
    updateTrip(json);
  } catch (err) {
    console.error('Trip fetch failed', err);
  }
}

function initMap() {
  map = L.map('map').setView([51.0, 9.0], 13);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
  }).addTo(map);
  marker = L.marker([51.0, 9.0]).addTo(map);
}

window.addEventListener('DOMContentLoaded', () => {
  initMap();
  fetchStatus();
  fetchTrip();
  setInterval(fetchStatus, 5000);
  setInterval(fetchTrip, 60000);
});

// script.js

document.getElementById('findEventsBtn').addEventListener('click', () => {
  if (!navigator.geolocation) {
    document.getElementById('geoOutput').textContent = "Geolocation is not supported.";
    return;
  }

  navigator.geolocation.getCurrentPosition(position => {
    const { latitude, longitude } = position.coords;
    document.getElementById('geoOutput').textContent = `Your location: Latitude ${latitude.toFixed(3)}, Longitude ${longitude.toFixed(3)}`;
  }, () => {
    document.getElementById('geoOutput').textContent = "Unable to retrieve your location.";
  });
});

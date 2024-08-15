var mapa = L.map('mapa').setView([10.00573, -84.21592], 17);  /* [latitud, longitud], zoom */


L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(mapa);

//Actividad 1

//Función para ajustar el mapa a la posición del usuario
function adjMap(posicion) {
  mapa.setView(new L.latLng(posicion.coords.latitude, posicion.coords.longitude), 16);

  var markerU = L.marker([posicion.coords.latitude, posicion.coords.longitude]).addTo(mapa);

  markerU.bindPopup("Usted se encuentra en: " + posicion.coords.latitude + ", " + posicion.coords.longitude).openPopup();
}

//Función para mostrar la posición del usuario
function mostrarPosicion(posicion) {
  alert("Usted se encuentra en: " + posicion.coords.latitude + ", " + posicion.coords.longitude);
  adjMap(posicion)
}

//Función para manejar errores en la obtención de la ubicación
function manejarError(error) {
  alert("Error: " + error.message);
}

document.getElementById('boton').addEventListener('click', function () {
  navigator.geolocation.getCurrentPosition(mostrarPosicion, manejarError);
});


//Actividad 2

function adjMarker() {
  mapa.setView(new L.latLng(10.021772, -84.209166), 15)
  const marker = L.marker([10.021772, -84.209166]).addTo(mapa)

  marker.bindPopup("La 31 este año").openPopup();

  const circle = L.circle([10.021772, -84.209166], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 150
  }).addTo(mapa);
}

adjMarker()
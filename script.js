mapboxgl.accessToken = 'pk.eyJ1Ijoicmpyb2JpbjQ1MiIsImEiOiJja3Awc3p6amoxZHE3MnZtcHRyMTdzb2hhIn0.Z6rJKC5Asq4jxOsaWhRmwQ';

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
    enableHighAccuracy: true
})

function successLocation(position) {
  setupMap([position.coords.longitude, position.coords.latitude])
}

function errorLocation() {
    setupMap([-2.24, 53.48])
}

function setupMap(center) {
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: center,
        zoom: 15
    })

    const nav = new mapboxgl.NavigationControl()
    map.addControl(nav)

    var directions = new MapboxDirections({
        accessToken: mapboxgl.accessToken
      });

      map.addControl(directions, 'top-left');
}


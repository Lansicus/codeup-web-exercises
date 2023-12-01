//CHANGING

// weather-map.js

/*-------------------------------------------------------------------------- ESTABLISH MARKER & POPUP FUNCTION -------*/
function placeMarkerAndPopup(info, token, map) {
    geocode(info.address, token).then(coords => {
        console.log(coords);
        let popup = new mapboxgl.Popup().setHTML(info.popupHTML);
        let marker = new mapboxgl.Marker().setLngLat(coords).addTo(map).setPopup(popup);
        popup.addTo(map);
    });
}

/*--------------------------------------------------------------------------------- ESTABLISH GEOCODE FUNCTION -------*/
function geocode(search, token) {
    // api url
    let baseUrl = 'https://api.mapbox.com';
    // the endpoint when i request lgn and lat based on location name
    let endPoint = '/geocoding/v5/mapbox.places/';
    // this fetch request takes in a url endpoint that will return the lgn, lat
    return fetch(`${baseUrl}${endPoint}${encodeURIComponent(search)}.json?access_token=${token}`)
        .then(res => res.json())
        // to get all the data from the request, comment out the following three lines...
        .then(data => {
            // console.log(data)
            return data.features[0].center;
        });
}

/*------------------------------------------------------------------------- ESTABLISH REVERSE GEOCODE FUNCTION -------*/
function reverseGeocode(coordinates, token) {
    let baseUrl = 'https://api.mapbox.com';
    let endPoint = '/geocoding/v5/mapbox.places/';
    return fetch(`${baseUrl}${endPoint}${coordinates.lng},${coordinates.lat}.json?access_token=${token}`)
        .then(res => res.json())
        // to get all the data from the request, comment out the following three lines...
        .then(data => data.features[0].place_name);
}

/*--------------------------------------------------------------------------------------- ESTABLISHING THE MAP -------*/
mapboxgl.accessToken = MAPKEY;
const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/dark-v11',
    zoom: 1,
    center: [-96.80330059331894, 32.777946644194934]
});

/*-------------------------------------------------------------------------------------------- DRAGGABLE MARKER ------*/
let marker = createMarker([-96.80330059331894, 32.777946644194934]);

function createMarker(lngLat) {
    const newMarker = new mapboxgl.Marker({
        draggable: true
    })
        .setLngLat(lngLat)
        .addTo(map);

    newMarker.on('dragend', onDragEnd);

    return newMarker;
}

function updateMarkerLocation(lngLat) {
    marker.setLngLat(lngLat);
}

// Trigger a custom event when the location changes
function triggerLocationChangeEvent(location) {
    const event = new CustomEvent("locationChange", {detail: location});
    document.dispatchEvent(event);
}

// Weather data fetching function
function fetchWeatherData(lng, lat) {
    fetch(`https://api.openweathermap.org/data/2.5/forecast?` +
        `lat=${lat}&lon=${lng}` +
        `&appid=${WEATHERKEY}` + `&units=imperial`)
        .then(data => data.json())
        .then(result => {
            triggerLocationChangeEvent([lng, lat]); // Trigger locationChange event with the updated location
        });
}

// Event listener for the submit button
document.getElementById("sub").addEventListener("click", function () {
    let currentLocation = geocode(document.getElementById("search").value, MAPKEY);

    currentLocation.then(result => {
        map.setCenter([result[0], result[1]]);
        updateMarkerLocation(result, true); // Set fromSubmit to true
        fetchWeatherData(result[0], result[1]); // Fetch weather data based on the new location
    });
});

// Event listener for the marker dragend
marker.on('dragend', onDragEnd);

function onDragEnd() {
    const lngLat = marker.getLngLat();
    updateMarkerLocation(lngLat);

    coordinates.style.display = 'block';
    coordinates.innerHTML = `Longitude: ${lngLat.lng}<br />Latitude: ${lngLat.lat}`;

    // move map to where the marker is dragged
    map.flyTo({
        zoom: 15,
        center: [lngLat.lng, lngLat.lat],
        essential: false
    });

    fetchWeatherData(lngLat.lng, lngLat.lat); // Fetch weather data based on the new marker location
}

/*------------------------------------------------------------------------------------ SEARCH BAR FUNCTIONALITY ------*/
const searchForm = document.getElementById("searchForm");
const searchInput = document.getElementById("search");

searchForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevents the default form submission behavior

    let currentLocation = geocode(searchInput.value, MAPKEY);

    currentLocation.then(result => {
        // Set SameSite attribute for the cookie
        document.cookie = "yourCookieName=yourCookieValue; samesite=None; secure";

        map.setCenter([result[0], result[1]]);
        updateMarkerLocation(result, true); // Set fromSubmit to true

        // Trigger an event to notify weather-output.js about the location update
        const locationChangeEvent = new CustomEvent("locationChange", {detail: result});
        document.dispatchEvent(locationChangeEvent);
    });
});








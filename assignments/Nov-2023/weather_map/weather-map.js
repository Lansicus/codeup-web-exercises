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
        .then(data => data.features[0].center);
}

/*------------------------------------------------------------------------- ESTABLISH REVERSE GEOCODE FUNCTION -------*/
function reverseGeocode(coordinates, token) {
    let baseUrl = 'https://api.mapbox.com';
    let endPoint = '/geocoding/v5/mapbox.places/';
    return fetch(`${baseUrl}${endPoint}${coordinates.lng},${coordinates.lat}.json?access_token=${token}`)
        .then(res => res.json())
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
            triggerLocationChangeEvent([lng, lat]);
        });
}

// Event listener for the marker dragend
marker.on('dragend', onDragEnd);

function onDragEnd() {
    const lngLat = marker.getLngLat();
    updateMarkerLocation(lngLat);

    coordinates.style.display = 'block';
    coordinates.innerHTML = `Longitude: ${lngLat.lng}<br />Latitude: ${lngLat.lat}`;

    map.flyTo({
        zoom: 15,
        center: [lngLat.lng, lngLat.lat],
        essential: false
    });

    // Use reverseGeocode to get the location name asynchronously
    reverseGeocode(lngLat, MAPKEY)
        .then(locationName => {
            // Update the text content of the spanElement
            spanElement.textContent = ` ${locationName}`;
        })
        .catch(error => {
            console.error('Error getting location from drag:', error);
        });

    fetchWeatherData(lngLat.lng, lngLat.lat);
}

/*------------------------------------------------------------------------------------ SEARCH BAR FUNCTIONALITY ------*/
const searchForm = document.getElementById("searchForm");
const searchInput = document.getElementById("search");
const spanElement = document.createElement("span");
const rightHeaderContainer = document.getElementById("right-header");

// Get the initial marker location
const initialMarkerLocation = marker.getLngLat();

// Use reverseGeocode to get the location name asynchronously
reverseGeocode(initialMarkerLocation, MAPKEY)
    .then(locationName => {
        // Set the text content of the spanElement
        spanElement.textContent = ` ${locationName}`;

        // Append the spanElement to the rightHeaderContainer
        rightHeaderContainer.appendChild(spanElement);
    })
    .catch(error => {
        console.error('Error getting initial location:', error);
    });
// Event listener for the submit button
searchForm.addEventListener("submit", function (event) {
    event.preventDefault();


    let currentLocation = geocode(searchInput.value, MAPKEY);

    currentLocation.then(result => {
        document.cookie = `weatherAppLocation=${JSON.stringify(currentLocation)}; samesite=None; secure`;
        map.setCenter([result[0], result[1]]);
        updateMarkerLocation(result, true);
        const locationChangeEvent = new CustomEvent("locationChange", {detail: result});
        document.dispatchEvent(locationChangeEvent);

        // Add the search input value as a span to the container '#right-header'
        const searchInputValue = searchInput.value;

        if (searchInputValue) {
            spanElement.textContent = ` ${searchInputValue.charAt(0).toUpperCase()}${searchInputValue.slice(1)}`;
        }

        // Clear the search input value
        searchInput.value = "";
    });
});

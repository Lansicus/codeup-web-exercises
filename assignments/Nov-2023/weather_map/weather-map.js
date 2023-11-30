

/*------------------------------------------------------------------------------------------------ geocode -------*/
function geocode(search, token) {
    // api url
    let baseUrl = 'https://api.mapbox.com';
    // the endpoint when i request lgn and lat based on location name
    let endPoint = '/geocoding/v5/mapbox.places/';
    // this fetch request takes in a url endpoint that will return the lgn, lat
    return fetch(`${baseUrl}${endPoint}${encodeURIComponent(search)}.json?access_token=${token}`)
        .then( res => res.json() )
        // to get all the data from the request, comment out the following three lines...
        .then( data => {
            console.log(data)
            return data.features[0].center
        });
}


/*----------------------------------------------------------------------------------------- reverseGeocode -------*/
function reverseGeocode(coordinates, token) {
    let baseUrl = 'https://api.mapbox.com';
    let endPoint = '/geocoding/v5/mapbox.places/';
    return fetch(`${baseUrl}${endPoint}${coordinates.lng},${coordinates.lat}.json?access_token=${token}`)
        .then( res => res.json() )
        // to get all the data from the request, comment out the following three lines...
        .then( data => data.features[0].place_name );
}


/*---------------------------------------------------------------------------------------------- MAP STUFF -------*/
mapboxgl.accessToken = MAPKEY;
// creating a new map
const map = new mapboxgl.Map({
    // setting the location for my map depending on the id in my html
    container: 'map', // container ID
    // this is setting my mapboxgl styling
    style: 'mapbox://styles/mapbox/streets-v12', // style URL
    // this decides how zoomed in my map is
    zoom: 10, // starting zoom
    // this add the center to my map using the lng, lat
    center: [-98.4916, 29.4252] // [lng, lat]
});
// setting a marker object
const marker = new mapboxgl.Marker()
    // adding marker to specific [lng, lat]
    .setLngLat([-96.80330059331894, 32.777946644194934])
    // adding marker to map
    .addTo(map);
// setting a popup object
let popup = new mapboxgl.Popup()
    // adding popup to specific [lng, lat]
    .setLngLat([-96.80330059331894, 32.777946644194934])
    // setting the content of my popup
    .setHTML("<p>Codeup Rocks!</p>")
    // set the maximum width of the popup
    .setMaxWidth("300px")
    // adds the popup to my map
    .addTo(map);
const codeupPopup = new mapboxgl.Popup()
    .setHTML("<p>Welcome to San Antonio!</p>");
marker.setPopup(codeupPopup);
geocode("San Antonio", MAPKEY)
    .then(result => { console.log(result)
        map.setCenter(result);
        map.setZoom(10)})
// reverse geocode method from mapbox-geocoder-utils.js
reverseGeocode({lng: -98.4861, lat: 29.4260}, MAPKEY).
then( results => console.log(results) );
const alamoInfo = {
    address: "The Dallas World Aquarium, Dallas",
    popupHTML: "<p>Welcome to the Alamo!</p>"
};
function placeMarkerAndPopup(info, token, map) {
    geocode(info.address, token).then( coords => {
        console.log(coords)
        let popup = new mapboxgl.Popup()
            .setHTML(info.popupHTML);
        let marker = new mapboxgl.Marker()
            .setLngLat(coords)
            .addTo(map)
            .setPopup(popup);
        popup.addTo(map);
    });
}

placeMarkerAndPopup(alamoInfo, MAPKEY, map);


//     Search Functionality
document.getElementById("sub").addEventListener("click", function() {
    let currentLocation = geocode(document.getElementById("search").value, MAPKEY);

    currentLocation.then(result => {
        console.log(result)
        map.setCenter([result[0], result[1]])
    })

})

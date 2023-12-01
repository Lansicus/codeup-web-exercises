// weather-output.js

const cardDeck = document.getElementById("cardHolder");

function createCardElement(tag, text = '') {
    const element = document.createElement(tag);
    if (text) {
        element.innerText = text;
    }
    return element;
}

function setAttributeIfExists(element, attribute, value) {
    if (value !== undefined && value !== null) {
        element.setAttribute(attribute, value);
    }
}

function createAndAppend(parent, tag, text = '', attribute = null, attributeValue = null) {
    const element = createCardElement(tag, text);
    setAttributeIfExists(element, attribute, attributeValue);
    parent.appendChild(element);
    return element;
}

function fetchWeatherData(lng, lat) {
    fetch(`https://api.openweathermap.org/data/2.5/forecast?` +
        `lat=${lat}&lon=${lng}` +
        `&appid=${WEATHERKEY}` + `&units=imperial`)
        .then(response => response.json())
        .then(data => {
            if (data && data.list) {
                const day = data.list;
                cardDeck.innerHTML = '';

                for (let i = 0; i < day.length; i += 8) {
                    const weather = day[i];
                    const date = new Date(weather.dt * 1000).toLocaleDateString('en-US', { weekday: 'long' });

                    const cardDiv = createCardElement("div");
                    cardDiv.classList.add("card");

                    const centerDiv = createCardElement("div");
                    centerDiv.classList.add("centered");

                    createAndAppend(centerDiv, "br");
                    createAndAppend(centerDiv, "div", `${date}: ${new Date(weather.dt * 1000).toLocaleDateString()}`);
                    createAndAppend(centerDiv, "br");
                    createAndAppend(centerDiv, "div", `High: ${weather.main.temp_max}°F`);
                    createAndAppend(centerDiv, "br");
                    createAndAppend(centerDiv, "div", `Low: ${weather.main.temp_min}°F`);

                    const icon = createAndAppend(centerDiv, "img", null, "id", "cloud");
                    icon.src = `http://openweathermap.org/img/w/${weather.weather[0].icon}.png`;
                    setAttributeIfExists(icon, "width", "70");  // Adjust the width as needed
                    setAttributeIfExists(icon, "height", "70"); // Adjust the height as needed

                    createAndAppend(centerDiv, "div", `Description: ${weather.weather[0].description}`);
                    createAndAppend(centerDiv, "hr");
                    createAndAppend(centerDiv, "div", `Humidity: ${weather.main.humidity}%`);
                    createAndAppend(centerDiv, "hr");
                    createAndAppend(centerDiv, "div", `Wind Speed: ${weather.wind.speed}`);
                    createAndAppend(centerDiv, "hr");
                    createAndAppend(centerDiv, "div", `Pressure: ${weather.main.pressure}atm`);
                    createAndAppend(centerDiv, "br");

                    cardDeck.appendChild(cardDiv);
                    cardDiv.appendChild(centerDiv);
                }
            } else {
                console.error('Invalid API response:', data.message || data);
            }
        })
        .catch(error => {
            console.error('Error fetching weather data:', error.message || error);
        });
}

document.addEventListener("locationChange", function (event) {
    const newLocation = event.detail;
    fetchWeatherData(newLocation[0], newLocation[1]);
});

// Fetch weather data for the initial marker position when the page loads
document.addEventListener("DOMContentLoaded", function () {
    const initialMarkerLocation = marker.getLngLat();
    fetchWeatherData(initialMarkerLocation.lng, initialMarkerLocation.lat);
});

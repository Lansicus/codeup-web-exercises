// weather-output.js

const cardDeck = document.getElementById("cardHolder");

function fetchWeatherData(lng, lat) {
    fetch(`https://api.openweathermap.org/data/2.5/forecast?` +
        `lat=${lat}&lon=${lng}` +
        `&appid=${WEATHERKEY}` + `&units=imperial`)
        .then(data => data.json())
        .then(result => {
            // Clear existing cards
            cardDeck.innerHTML = '';

            const day = result.list;

            for (let i = 0; i < day.length; i += 8) {
                const weather = day[i];

                const date = new Date(weather.dt * 1000).toLocaleDateString();
                const dayOfWeek = new Date(weather.dt * 1000).toLocaleDateString('en-US', { weekday: 'long' });

                const cardDiv = document.createElement("div");
                cardDiv.classList.add("card");
                const centerDiv = document.createElement("div");
                centerDiv.classList.add("centered");
                const dateDiv = document.createElement("div");
                const spanHolder = document.createElement("div");
                const tempHighDiv = document.createElement("div");
                const tempLowDiv = document.createElement("div");
                const iconDiv = document.createElement("div");
                const descriptionDiv = document.createElement("div");
                const humidityDiv = document.createElement("div");
                const windDiv = document.createElement("div");
                const pressureDiv = document.createElement("div");
                const hr1 = document.createElement("hr");
                const hr2 = document.createElement("hr");
                const hr3 = document.createElement("hr");
                const lineBreak = document.createElement("br");
                const lineBreak1 = document.createElement("br");
                const lineBreak2 = document.createElement("br");
                const lineBreak3 = document.createElement("br");
                const lineBreak4 = document.createElement("br");
                const icon = document.createElement("img");

                icon.src = "http://openweathermap.org/img/w/" + weather.weather[0].icon + ".png";
                dateDiv.innerText = `${dayOfWeek}: ${date}`;
                tempHighDiv.innerText = `High: ${weather.main.temp_max}°F `;
                tempLowDiv.innerText = `Low: ${weather.main.temp_min}°F`;
                descriptionDiv.innerText = `Description: ${weather.weather[0].description}`;
                humidityDiv.innerText = `Humidity: ${weather.main.humidity}%`;
                windDiv.innerText = `Wind Speed: ${weather.wind.speed}`;
                pressureDiv.innerText = `Pressure: ${weather.main.pressure}atm`;

                cardDeck.appendChild(cardDiv);

                cardDiv.appendChild(centerDiv);
                centerDiv.appendChild(lineBreak);
                centerDiv.appendChild(dateDiv);
                centerDiv.appendChild(lineBreak1);

                centerDiv.appendChild(tempHighDiv);
                centerDiv.appendChild(tempLowDiv);
                centerDiv.appendChild(lineBreak2);

                centerDiv.appendChild(icon);

                cardDiv.appendChild(lineBreak3);

                cardDiv.appendChild(descriptionDiv);
                cardDiv.appendChild(hr1);
                cardDiv.appendChild(humidityDiv);

                cardDiv.appendChild(hr2);

                cardDiv.appendChild(windDiv);

                cardDiv.appendChild(hr3);

                cardDiv.appendChild(pressureDiv);
                cardDiv.appendChild(lineBreak4);
            }
        });
}

// Listen for the locationChange event triggered by weather-map.js
document.addEventListener("locationChange", function (event) {
    const newLocation = event.detail;
    // Fetch new weather data based on the updated location
    fetchWeatherData(newLocation[0], newLocation[1]);
});

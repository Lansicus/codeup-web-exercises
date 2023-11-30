


const cardDeck = document.getElementById("cardHolder")

fetch(`https://api.openweathermap.org/data/2.5/forecast?` +
    'id=4726206' +
    `&appid=${WEATHERKEY}` + `&units=imperial`)
    .then(data => data.json())
    .then(result => {
        console.log(result)

        const day = result.list;
        // const icon = result.weather;

        for (let i = 0; i < day.length; i += 8) {
            const weather = day[i]

            const date = new Date(weather.dt * 1000).toLocaleDateString();
            console.log(date);

            const cardDiv = document.createElement("div")
            cardDiv.classList.add("card")
            const centerDiv = document.createElement("div")
            centerDiv.classList.add("centered")
            const dateDiv = document.createElement("div")
            const spanHolder = document.createElement("div")
            const tempHighDiv = document.createElement("div")
            const tempLowDiv = document.createElement("div")
            const iconDiv = document.createElement("div")
            const descriptionDiv = document.createElement("div")
            const humidityDiv = document.createElement("div")
            const windDiv = document.createElement("div")
            const pressureDiv = document.createElement("div")
            // const cloudIcon = document.createElement("")
            const hr1 = document.createElement("hr")
            const hr2 = document.createElement("hr")
            const hr3 = document.createElement("hr")
            const lineBreak = document.createElement("br")
            const lineBreak1 = document.createElement("br")
            const lineBreak2 = document.createElement("br")
            const lineBreak3 = document.createElement("br")
            const icon = document.createElement("img")


            icon.src = "http://openweathermap.org/img/w/" + weather.weather[0].icon + ".png"
            dateDiv.innerText = date;
            tempHighDiv.innerText = `High: ${weather.main.temp_max}°F `;
            tempLowDiv.innerText = `Low: ${weather.main.temp_min}°F`;
            descriptionDiv.innerText = `Description: ${weather.weather[0].description}`;
            humidityDiv.innerText = `Humidity: ${weather.main.humidity}%`;
            windDiv.innerText = `Wind: ${weather.wind.speed}`;
            pressureDiv.innerText = `Pressure: ${weather.main.pressure}`;


            cardDeck.appendChild(cardDiv)/*    <div class="card">*/

            cardDiv.appendChild(centerDiv)
            centerDiv.appendChild(lineBreak)
            centerDiv.appendChild(dateDiv)
            centerDiv.appendChild(lineBreak1)

            centerDiv.appendChild(tempHighDiv)
            centerDiv.appendChild(tempLowDiv)
            centerDiv.appendChild(lineBreak2)

            centerDiv.appendChild(icon)

            cardDiv.appendChild(hr1)
            cardDiv.appendChild(lineBreak3)

            cardDiv.appendChild(descriptionDiv)
            cardDiv.appendChild(humidityDiv)

            cardDiv.appendChild(hr2)

            cardDiv.appendChild(windDiv)

            cardDiv.appendChild(hr3)

            cardDiv.appendChild(pressureDiv)
        }

    })
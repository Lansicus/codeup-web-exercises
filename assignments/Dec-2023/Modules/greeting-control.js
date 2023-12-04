


// Import the getRandomGreeting function from the greeting-logic.js module
import { getRandomGreeting } from './greeting-logic.js';

// Add an event listener for the DOMContentLoaded event
document.addEventListener("DOMContentLoaded", function () {
    // Call the handleButtonClick function when the DOM is fully loaded
    handleButtonClick(); // Initial setup when the DOM is loaded
});

// Add an event listener for the click event on the element with the ID "btn-splash"
document.getElementById("btn-splash").addEventListener("click", function () {
    // Call the handleButtonClick function when the button is clicked
    handleButtonClick();
});


// Define the handleButtonClick function
function handleButtonClick() {
    // Generate a random greeting using the getRandomGreeting function
    const splashText = getRandomGreeting();

    // Log the random greeting to the console
    console.log(splashText);

    // Update the text content of the element with the ID "status" to the random greeting
    const splashContainer = document.getElementById("status");
    splashContainer.innerText = splashText;
}


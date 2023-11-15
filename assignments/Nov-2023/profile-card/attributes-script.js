// Function to generate a random color in hexadecimal format
function getRandomColorBG() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;

}function getRandomColorTXT() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


/* 3.
Now, let's use JavaScript to manipulate these elements:
    Two seconds after the page loads, change the "profile-pic" src attribute to a different image.
    Four seconds after the page loads, use innerHTML to change the name in "profile-name".
    Six seconds after page loads, add a new class to "profile-desc" that changes the color and font of the description text.
        Use setTimout to create these behaviors.*/
// let count = 0;
//
//
//     const intervalId = setInterval(() => {
//         // count++;/*counter runs at the start of each iteration and will add 1 every 2000 milliseconds*/
//
//         if (count === 2) {
//             document.getElementById('profile-pic').src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKXTmZdB7bujZDTfi6DkE1Gzb5f_PDfrGmeA&usqp=CAU";
//         /*changes img src for the element with an id of 'profile-pic' after the page has been loaded for 2 seconds*/
//         } else if (count === 4) {
//             document.getElementById('profile-name').textContent = 'Joseph Richardson Escobar Felipe Inigo Montoya The Third';
//             /*changes 'textContent'' for the element with an id of 'profile-name' after the page has been loaded for 4 seconds*/
//         } else if (count === 6) {
//             const userInput = prompt('What\'s your name?');
//             document.getElementById('profile-name').textContent = userInput !== null ? userInput : "Cornelius Maximum Toyota";
//             document.getElementById('profile-desc').textContent = 'Was a gregarious young fellow who oft wore long cut jeans in the summer. He had a snarling temper and yet you\'d find him on occasion frolicking upon the wil flowers of the meadow. A curios one indeed.'
//             /* after 6 seconds, Creates variable to equal prompt for later. Offers opportunity to change the element
//              with an id of 'profile-name' to user input. If the prompt is canceled the 'textContent' will be changed to
//               "Cornelius Maximum Toyota". Afterward the profile description will be updated as seen above.*/
//         }
//         if (count % 2 === 0) {
//             document.getElementById('profile-card').style.backgroundColor = getRandomColorBG()
//             document.getElementById('profile-card').style.color = getRandomColorTXT()
//         /* Whenever the count is divisible by 2 with no remainder the background color and text will take on
//          the result of their respective random color functions.*/
//         }
//         count++;
//         /* Adds +1 to the count value (which starts at 0)*/
//     }, 1000);
//     /* Each iteration of 'intervalId' will be performed with 1,000 millisecond, or 1 second, intervals*/



/* 4.
Write code that toggles a class on the "profile-card" that changes its background color every two seconds. Use setInterval.*/
// const profileBG = setInterval( () => {
//     document.getElementById('profile-card').classList.toggle('bg')
// }, 2000);

/*Encapsulate all your timers in a single function.
Instead of toggling the background color every two seconds for the "profile-card", create an array of colors
 and programmatically change the background color every two seconds.
Hint: You will have to choose a RANDOM index from the array of colors.

After all of your timeouts have expired, bring up a prompt that will change "profile-name" text to whatever the user inputs.*/



/*--------------------------------------------------- DOM EVENTS -----------------------------------------------------*/

/* Add 4 buttons to the page. Attach click event listeners to each of the buttons and have the handlers perform
 the modifications that were automatically taking place. For example, the first button should set
  inner html of mainHeader to "JavaScript is Cool".
 */

// Get the button element by its ID
let buttonBG = document.getElementById("toggle-btn");

// Add an event listener for the 'click' event
buttonBG.addEventListener("click", function() {
    document.getElementById('profile-card').style.backgroundColor = getRandomColorBG()
    document.getElementById('profile-card').style.color = getRandomColorTXT()
});
/*---------------------------------------------------*/


let buttonPFP = document.getElementById("new-pics");
buttonPFP.addEventListener("click", function() {
    document.getElementById('profile-pic').src = "https://picsum.photos/200/300";
});
/*---------------------------------------------------*/


let buttonName = document.getElementById("new-name");
buttonName.addEventListener("click", function() {
    const nameInput = prompt('What\'s your name?');
    document.getElementById('profile-name').textContent = nameInput !== null ? nameInput : "Cornelius Maximum Toyota";
});
/*---------------------------------------------------*/


let buttonBio = document.getElementById("new description");
buttonBio.addEventListener("click", function() {
    const bioInput = prompt('Tell us about yourself.');
    document.getElementById('profile-desc').textContent = bioInput!== null ? bioInput : 'Was a gregarious young fellow who oft wore long cut jeans in the summer. He had a snarling temper and yet you\'d find him on occasion frolicking upon the wil flowers of the meadow. A curios one indeed.';
});


/*-------------------------------------------------- EXPERIMENTAL -------------------------------------------------*/

let hoverElements = document.getElementsByClassName('btn');

for (let i = 0; i < hoverElements.length; i++) {
    hoverElements[i].addEventListener('mouseover', function(event) {
        event.target.style.backgroundColor = getRandomColorBG();
    });

    hoverElements[i].addEventListener('mouseout', function(event) {
        event.target.style.backgroundColor = '#007BFF'; // Reset to default color
    });
}
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
    let colorTXT = '#';
    for (let i = 0; i < 6; i++) {
        colorTXT += letters[Math.floor(Math.random() * 16)];
    }
    return colorTXT;
}


/* 3.
Now, let's use JavaScript to manipulate these elements:
    Two seconds after the page loads, change the "profile-pic" src attribute to a different image.
    Four seconds after the page loads, use innerHTML to change the name in "profile-name".
    Six seconds after page loads, add a new class to "profile-desc" that changes the color and font of the description text.
        Use setTimout to create these behaviors.*/
let count = 0;


    const intervalId = setInterval(() => {
        // count++;/*counter runs at the start of each iteration and will add 1 every 2000 milliseconds*/

        if (count === 2) {
            document.getElementById('profile-pic').src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKXTmZdB7bujZDTfi6DkE1Gzb5f_PDfrGmeA&usqp=CAU";
        } else if (count === 4) {
            document.getElementById('profile-name').textContent = 'Joseph Richardson Escobar Felipe Inigo Montoya The Third';
        } else if (count === 6) {
            const userInput = prompt('What\'s your name?');
            document.getElementById('profile-name').textContent = userInput !== null ? userInput : "Cornelius Maximum Toyota";
        }
        if (count % 2 === 0) {
            document.getElementById('profile-card').style.backgroundColor = getRandomColorBG()
            document.getElementById('profile-card').style.color = getRandomColorTXT()
        }
        count++;
    }, 1000);



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
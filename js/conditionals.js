"use strict";

/* #####################################     1     ##################################### */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message which relates to the
 * color stated in the argument of the function. For colors you do not have
 * responses written for, return a string stating so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *
 *
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
// const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
// const randomColor = colors[Math.floor(Math.random() * colors.length)];


//
// const analyzeColor = (color) => {
//     if(color === 'red') {
//         return "like strawberries!";
//     } else if (color === "orange" ) {
//         return "like oranges!";
//     } else if (color === "yellow" ) {
//         return "like bananas!";
//     } else if (color === "green" ) {
//         return "like limes!";
//     } else if (color === "blue" ) {
//         return "like LAPIS LAZULI";
//     } else if (color === "indigo" ) {
//         return "like Inigo Montoya";
//     } else if (color === "violet" ) {
//         return "like the willy wonka girl";
//     } else {
//         return "ion know nuthin bout that";
//     }
// }
// alert(analyzeColor(prompt("Pick a color from the rainbow. Make sure your response is all lower case")))

/**
 * TODO:
 * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
 * You should see a different message every time you refresh the page
 */

/**
 * TODO:
 * Comment out the code above, and refactor your function to use a switch-case statement
 */

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

/* #####################################     2     ##################################### */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * everything for free!.
 *
 * Write a function named `calculateTotal` which accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */
//This short arrow function uses 'switch' to switch through the
// 'num' parameter of the calculateTotal function
//***
// let calculateTotal = (num, pri) => {
//
//     switch (num) {
//         case 0:
//             return pri;
//         case 1:
//             return pri * .9;
//         case 2:
//             return pri * .75;
//         case 3:
//             return pri * .65;
//         case 4:
//             return pri * .50;
//         case 5:
//             return pri * 0;
//         default:
//           console.log("do sun")
//     }
// }
//     console.log(calculateTotal(5, 100));

/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 5.
 * (In this line of code, 0 is inclusive, and 6 is exclusive)
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
//Generate a random number between 0 and 6
// const luckyNumber = Math.floor(Math.random() * 6);
// alert(calculateTotal(luckyNumber, parseInt(prompt("What is your total bill? (Use only numbers and a decimal point"))))
/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * Do *NOT* display any of the above information
 * if the user enters a value that is not of the number data type.
 * Instead, use an alert to inform them of the incorrect input data type.
 *
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */
/* This function is left blank because it assumes the data kept within the 'result' { }

 */
let confirmed = confirm("would you like to enter a number?")
//If 'okay' is input on the webpage 'confirmed' will equal true
//The 'if' statement is asking if the 'g' variable has been identified as true or not
const numberGame = () => {
    if (confirmed) {
        let chosen = parseFloat(prompt("use number characters only"))
/* THE ORDER OF OPERATIONS WILL BREAK THE CODE:
If the simplest 'if' statements aren't ran first,
the function will assume that they fall into the
other classifications of the larger 'if' statements.
EX: 'k' will return a boolean instead of alerting 'try again'
 */
        if (isNaN(chosen)) {
            alert("Try again: use number characters only")

        } else if (chosen === 0) {
            alert("Your number is not + or - , odd or even.")
            alert("Your number plus 100 is " + (parseFloat(chosen) + 100))

        } else if (!isNaN(chosen === 0)) {
            alert((chosen % 2 === 1) ? "Your number is odd" : "Your number is even")
            alert((chosen > 0) ? "Positive" : "Negative")
            alert(("Your number plus 100 is " + (parseInt(chosen) + 100)))
        }
        /*if(confirmed and else if(!confirmed) are tied to each other
 by being in the outer section of the functions brackets */
    } else if (!confirmed) {
        alert("BOOOOOO")
    }
} /* Pay close attention to which curley brackets are linked */
numberGame()
//*Math.sign gives a 1 for positive and a -1 for negative
//https://www.w3schools.com/jsref/jsref_sign.asp#:~:text=sign()%20method%20retuns%20whether,is%20zero%2C%20it%20returns%200

// alert(
// if (Math.sign(chosen) !== 1) {
//     alert("Your number is negative")
// } else {
//     alert("Your number is Positive")
//
// }
// )
// function isEvenOdd(num) {
//     if(num === 0) {
//          return `${num} not positive or negative`
//     } else if (num % 2 === 0) {
//         return `${num} an even number`
//
//     } else if(num % 2 === 1) {
//         return `${num} is an odd number`
//     }
// }
//
// //add 100
// function addOneHundred(num) {
//     return `${num} + 100 is ${num + 100}`
// }
//
// // pos or neg
// function posNeg(num) {
//     if(num > 0) {
//         return `${num} is a positive number`
//     }else if (num < 0) {
//         return `${num} is a negative number`
//     }else {
//         return`Your number is not negative or positive`
//     }
// }

//


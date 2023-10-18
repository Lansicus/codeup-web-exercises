// let i = 0;
//
// while(i < 10) {
//     console.log(i)
//     i++
//     console.log(i)
// }

//do while loops
/* do will always run once. If the while portion reads false after wards
the do will stop running */

// let i = 12;
// do {
//     console.log(i)
//     i++
// } while(i < 10)


/* -------------------- mini exercise ---------------------

create a variable called 'num' that is equal to '0'.
write a while loop that increments 'num' by 5 so long as 'num' is less than 100.
Then do the same thing with a do while
 */

// let i = 90;
//
// while(i < 100) {
//     console.log(i += 5) }
//
//
// let num = 90
// do{
//     console.log(num += 5)
// }
// while(num < 100)
/* --------------------------------------*/

// do-while loop
let secretNumber = 7
let guess;
let attempt = 0

do {
    guess = parseInt(prompt("Guess the secret number?(1-10)"))
    if(guess === secretNumber) {
        console.log("You have guessed correctly")
    } else {
        attempt++
        console.log("Try again " + attempt + "attempt(s) total")
        }if(guess < secretNumber) {
        console.log("Can we get much higher?")
        }
} while(guess !== secretNumber)
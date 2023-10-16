

/* *********************SWITCH STATEMENTS************************/

let goNinjaGo= prompt("What TMNT character are you?")

switch (goNinjaGo) {
    case "Leonardo":
    case "Donatello":
    case "Rafael":
    case "Michelangelo":

        console.log("turtle power");
        break;
    case "Orokusaki":
    case "The Fut":
        console.log("WATCH OUT FOR SHREDDER")
        break
    default:
        console.log("COWABUNGA")
}


// **************CONTINUOUS IF/ELSE ARROW FUNCTION*****************

/*As the if-else block takes up multiple lines,
you need to use the return keyword inside each part of the block.
Other than that, you can write the arrow function the same way as before:*/
// Conditional statement with ES6 syntax
var switcher = ( state ) => {
    if( state == "on" ) {
        return "Switched on!";
    } else if ( state == "off" ) {
        return "Switched off!";
    } else {
        return "Switcher not working!";
    }
}

console.log( switcher( "off" ) );
// Switched off!
//


//****************IF/ELSE ARROW FUNCTION*********************

/*the Constant "get" equals the parameter of "a"
 yielding(=>) a < 10 as a question(?) with a result of 'valid' :(or) 'invalid'
 */
const get = a => (a < 10 ? 'valid' : 'invalid');
console.log(get(8))

/* **************** TERNARY OPERATOR - shorthand way to write if/else statements************ */
let name = prompt("Whats ur name?")
let greeting = name === "Ezekiel" ? "*#@! U " + name + "!!" : "Well hello there stranger!"
console.log(greeting)
 // ?= does the variable equal the input. if yes : if no */

/* ************************************ */
// let age = 16
//
// if(age >= 16); {
//     console.log("You're eligible to drive")
// }
//
// if(age < 16); {
//     console.log("You can't drive yet")
// }
// if(age >= 16) {
//     console.log("You can drive")
// } else{
//     console.log("Grow up")
// }
//
//let currentDay = prompt(("What day is it?")).toLowerCase()
//
// if(currentday === 'monday' ||
//     currentDay === 'tuesday' ||
//     currentDay === 'wednesday') {
//     console.log("I love " + currentDay)
// } else{
//     console.log("Current day is not a valid input")
// }
//
//
//
//
// let letsPlay = confirm("Do you want to play?");
//
// if(letsPlay) {
//     console.log("Great, let's play xyz")
// } else {
//     console.log("Maybe next time")
// }
//
// const username= "user"
// const password= "password"
//
// const userUserName = prompt("Please enter a username")
// const userPassword = prompt("Please enter a password")
//
// if(username === userUserName && password === userPassword) {
//     console.log("You are logged in")
// } else if(username !== userUserName && password !== userPassword) {
//     console.log("Incorrect username and password")
// } else if(username !== userUserName) {
//     console.log("Incorrect username")
// } else if(password !== userPassword) {
//     console.log("Incorrect password")
// } else {
//     console.log("Unexpected error")
// }
//
//
// /* nested conditional EX:*/
//
// if(username === userUserName) {
//     if(password === userPassword) {
//         console.log("Logged in")
// } else {
//     console.log("Incorrect password")
// }
// } else {
//     console.log("Invalid username")
// }




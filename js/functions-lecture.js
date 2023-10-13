"use strict"

/*Create a function named sum that
 takes in two numbers and returns the
  sum of the two numbers*/

//function definition | arguments are what give our parameters value
function sum(num1, num2) {
    return num1 + num2
}
//calling the function/ execute the function
console.log(sum(5 , 5));

/*create a function named fullName that takes in 2 inputs,
 a first name and last name, and returns the first name and
  last name concatenated together
 */
let m = " & "
function fullName(Name1, Name2)
{ return Name1 + m + Name2 }

console.log(fullName("Mordecai", "Rigby"))

function otherFullName(Name3, Name4)
{ return `${Name3} ${Name4}`}
console.log(otherFullName("Alexandrite", "Magician"));


    //************

//console.log(`Hello ${fullName("Juan", "Gonzalez")} `)

//Anonymous Function/ Function Expression
const decrement = function(input) {
    return input - 1;
}
console.log(decrement(5))

//Longer Arrow Function
// function declaration

const fullNaaame = (first, last) => {
    return first + " " + last;
}
console.log(fullNaaame("Jack", "Daniels"));

//Shorter Arrow Function
const waahhh = (a, b) => a + " " + b;
console.log(waahhh("Myanmar", "Geraldo"))

//*************
/*Create a function that takes in a string and transforms all letters to lower case
 */

const makeSmol = (input1) => input1.toLowerCase();/*there's a return value implied here
because there is no {input1.toLowerCase}*/
console.log(makeSmol("YTFDJHGFDJHKG"))


/*cannot log a value if nothing is returned
the result would be undefined*/
function greeting(greeting = 'Howdy!'){return greeting;}
console.log(greeting())
console.log(greeting('greetings'));


//global variable is not locked into a location by {}
let globalVar = "Hello! My name is Globie!"

//local variable is locked in to a local area by {}
function test() {
    let localVar = "Hello my name is Lola"
    console.log(localVar);
               }

let localVar = "Hello my name is Lola"
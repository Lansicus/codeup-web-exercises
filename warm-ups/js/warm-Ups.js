// Lance Burk
//Daily Warm-ups
/*let name = "Lance Burk"
let year = "2016"
console.log('My name is ' + name + ' and I graduated high school in ' + year)

************/

//Daily Warm-ups Oct, 16, 2023
const capitalizedFirstLetter = (expedite) => expedite.charAt(0).toUpperCase() + expedite.slice(1,);
console.log(capitalizedFirstLetter("supercalifragilistic"))
/*charAt takes whatever character you fill in to the index.
.slice will grab the start and end parameters of the input index while cutting out the previous characters.
 If a parameter is left blank it will assume to add the rest of the string
 */
const capitalizedFirstLetter1 = (word1) => word1.substring(0, 1).toUpperCase() + word1.substring(1)
console.log(capitalizedFirstLetter1("wow"))
/*if you include a negative number for the parameter of .slice
it wll give a return starting at the last character Ex:  .slice(-3)

 */
/* ********** */

//Daily Warm-ups Oct, 17, 2023

const largestNum = (num1, num2, num3) => {
    if (num1 >= num2 && num1 >= num3) {
        return num1 + " is the greatest number"
    } else if (num2 >= num1 && num2 >= num3) {
        return num2 + " is the greatest number";
    } else if (num3 >= num1 && num3 >= num2)
        return num3 + " is the greatest number"
}
console.log((largestNum(15, 18, 18)))
/* The above code takes in 3 parameters
and determines which of them is the largest by comparing each
of them to the other two and then passing them on if they are larger
 */

// const largestNumba = (numa, numb, numc) => Math.max(numa, numb, numc)
// alert(largestNumba(parseInt(prompt("number 1?")), parseInt(prompt("number 2?")), parseInt(prompt("number 3?"))))
/* This function takes in three parameters and runs the result of Math.max
(this determines the maximum number within  the parameters.
The parameters are set by user input from the prompts within the function.
The user is then alerted which of their 3 inputs is determined largest.
 */

//Daly Warm-Ups Oct, 19, 2023 **********************************************************
/*Declare a variable named 'num' with a value of 100.
Using a WHILE LOOP decrement 'num' by 5 until you reach zero,
and console.log("even") for every even number.
 */
// let num = 100
// do {
//    num -= 5
//     if (num % 2 === 0) {
//         console.log(`${num} is even`)
//     }else console.log("" + num)
//
// }while(num > 0)
// -------------------
let i = 100;

while (i > 0) {
    if (i === 0) {
        console.log("You have reached the landing zone")
    } else if ((i % 2 === 0) && (i >= 5))
    {i -= 5
        console.log(`${i} is even`)
    }
    else
    i -= 5
    console.log("" + i)
}

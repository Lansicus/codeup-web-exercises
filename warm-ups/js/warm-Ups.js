// Lance Burk
//Daily Warm-ups
/*let name = "Lance Burk"
let year = "2016"
console.log('My name is ' + name + ' and I graduated high school in ' + year)

************/

// **************************************   Daly Warm-Ups Oct, 16, 2023   ***************************************

// const capitalizedFirstLetter = (expedite) => expedite.charAt(0).toUpperCase() + expedite.slice(1,);
// console.log(capitalizedFirstLetter("supercalifragilistic"))
/*charAt takes whatever character you fill in to the index.
.slice will grab the start and end parameters of the input index while cutting out the previous characters.
 If a parameter is left blank it will assume to add the rest of the string
 */
// const capitalizedFirstLetter1 = (word1) => word1.substring(0, 1).toUpperCase() + word1.substring(1)
// console.log(capitalizedFirstLetter1("wow"))
/*if you include a negative number for the parameter of .slice
it wll give a return starting at the last character Ex:  .slice(-3)

 */
/* ********** */

// **************************************   Daly Warm-Ups Oct, 17, 2023   ***************************************
// const largestNum = (num1, num2, num3) => {
//     if (num1 >= num2 && num1 >= num3) {
//         return num1 + " is the greatest number"
//     } else if (num2 >= num1 && num2 >= num3) {
//         return num2 + " is the greatest number";
//     } else if (num3 >= num1 && num3 >= num2)
//         return num3 + " is the greatest number"
// }
// console.log((largestNum(15, 18, 18)))
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

// **************************************   Daly Warm-Ups Oct, 19, 2023   ***************************************

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
// ----------------------------------------
// let i = 100;
//
// while (i > 0) {
//     if (i === 0) {
//         console.log("You have reached the landing zone")
//     } else if ((i % 2 === 0) && (i >= 5)) {
//         i -= 5
//         console.log(`${i} is even`)
//     } else
//         i -= 5
//     console.log("" + i)
// }

// **************************************   Daly Warm-Ups Oct, 20, 2023   ***************************************

// function isEven() {
// for(let g = 2; g <= 100; g++) {
//     console.log(g);
// }} isEven();
//-----------------------------------------
// function returnEvenNums() {             //function declaration
//     for (let l = 1; l <= 100; l++) {   // for loop
//         if (l % 2 === 0) {                     // if statement
//             console.log(l);
//         }
//     }
// }
//
// returnEvenNums();


// **************************************   Daly Warm-Ups Oct, 23, 2023   ***************************************
//establish an array with 5 movie name elements
// let favoriteMovies = ['TMNT', 'Rush_Hour', 'Princes_Bride', '300', 'Mega_Mind'];
// //sort the array alphabetically with the '.sort()' method
// favoriteMovies.sort()
// //run through each element from 'favoriteMovies' with the '.forEach' method.
// // Return the result of each element 'console.log()'
// favoriteMovies.forEach((movie) => console.log(movie));


// **************************************   Daly Warm-Ups Oct, 24, 2023   ***************************************
/* In your warmUp.js create an array of car objects.
Each object should have 3 properties: make, model, and color.
Write a for each or for of loop to log each car's make, model, and color.
 */
const cars = [
{make: 'Ford', model: 'Fusion', color: 'Black',
},
{make: 'Honda', model: 'Fit', color: 'Grey',
},
{make: 'Cadillac', model: 'Deville', color: 'Purple',
}]
//------------------------------Solution1 'For Loop'
// for(let i = 0; i < 3; i++){
//     console.log(`Car # ${[i+1]}
//     make: ${cars[i].make}
//     model: ${cars[i].model}
//     color: ${cars[i].color}`)
// }
//------------------------------Solution2 'For Of Loop'
// for(let car of cars){
//     console.log(`
//      make: ${car.make}
//      model: ${car.model}
//      color: ${car.color}`)
// }
//------------------------------Solution3 'Arrow Function .forEach'
/*function established = 'displayCars'. Parameter set = 'cars'. The result of this will be a 'for of loop'.
'for' will bring in the
 */
// const displayCars = (cars) => {
//     for (let car of cars) {
//         console.log(`
//       make: ${car.make}
//       model: ${car.model}
//       color: ${car.color}`);
//     }}
// displayCars(cars)
const displayCars = (cars) => {
    cars.forEach(car => {
        console.log(
        `\tmake: ${car.make},
        model: ${car.model},
        color: ${car.color}\n`);
    });
};displayCars(cars)


// **************************************   Daly Warm-Ups Oct, 2-, 2023   ***************************************

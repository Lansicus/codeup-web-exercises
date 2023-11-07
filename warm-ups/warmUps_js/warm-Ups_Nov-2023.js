

// **************************************   Daly Warm-Ups Nov, 6, 2023   ***************************************
/* Write a program that prints all numbers from 1-100. For multiples of 3: print "Fizz".
For multiples of 5 print "Buzz". for numbers that are multiples of both 3 and 5, print "FizzBuzz".
 */
function oneToX(numbah) {
    for (let i = 1; i <= numbah; i++)
        if ( i % 3 === 0 && i % 5 === 0){
            console.log(`FizzBuzz, ${i} `)
        }
        else if (i % 3 === 0) {
            console.log(`Fizz, ${i}`)
        }
        else if (i % 5 === 0) {
            console.log(`Buzz, ${i}`)
        }
        else {console.log(`number, ${i}`)}
}
oneToX(100)




// **************************************   Daly Warm-Ups Nov, 2, 2023   ***************************************

/* Create a function that accepts three arguments (arrOfElements, bgColor, textColor), and returns the array of objects
 with their corresponding properties changed to the inputted values of bgColor and textColor.
 */


//     let elements = [
//     {
//         el: "button",
//         style: {
//             backgroundColor: "white",
//             color: "black"
//         },
//         content: "Submit"
//     },
//     {
//         el: "p",
//         style: {
//             backgroundColor: "white",
//             color: "black"
//         },
//         content: "Our company is better at doing company things than your company."
//     },
//     {
//         el: "h2",
//         style: {
//             backgroundColor: "white",
//             color: "black"
//         },
//         content: "Welcome Back!"
//     }
// ];
// const CptnGinyu = (Guldo, Burter, Jeice) => {
//     Guldo.forEach(function (Recoome) {
//         Recoome.style.backgroundColor = Burter;
//         Recoome.style.color = Jeice;
//     })
//     return Guldo
// }
// console.log(CptnGinyu(elements, 'blue', 'red'));

/* CptnGinyu takes in three parameters expecting Guldo to be an array
* Burter to be the new background color, and Jeice to be the new text color.-------------
* 'CptnGinyu' then performs an anonymous function the parameter Recoome to reference
* the path of '.style.backgroundColor' and '.style.color' from the input element.
*  Once those specific elements are referenced, their values will be changed
*  to match the parameters of 'changeNow'.*/


// **************************************   Daly Warm-Ups Nov, 1, 2023   ***************************************
//Objective: Create a function that takes in an array and returns an array of the names of people who know JavaScript

//Data Structure/Example Input:
// let developers = [{
//     name: "Jonathan", languages: {
//         frontend: ["HTML", "JavaScript", "CSS"], backend: ["Java"]
//     }
// }, {
//     name: "Bonnie", languages: {
//         frontend: ["JavaScript"], backend: []
//     }
// }, {
//     name: "Raj", languages: {
//         frontend: [], backend: ["C#", "Java", "Python"]
//     }
// }, {
//     name: "Carmen", languages: {
//         frontend: ["JavaScript", "HTML", "CSS", "React"], backend: ["C#", "Java", "Python", "TypeScript"]
//     }
// },]
////-----------------------------=--BROKEN
// let JS_coders = "JavaScript"
// function JS_developers(array) {
//     console.log(array.filter(element => element.includes("JavaScript")));
// }
// JS_developers(developers)
////--------------------------------BROKEN
// function knowsJavaScript(people) {
//     let coders = people.filter(person => person.languages.frontend.includes('JavaScript'));
//     let coderNames = coders.map(names.name);
//     return coderNames
// }
// const javascriptExperts
////-----------------------------------THIS WORKS
// function devsWhoKnowJS(arrOfDevelopers) {
//     let jsDevsArr = [];
//     arrOfDevelopers.forEach((dev) => {
//         if (dev.languages.frontend.includes("JavaScript")) {
//             jsDevsArr.push(dev.name);
//         } else {
//             return 'No devs with JS skills'
//         }
//     })
//     return jsDevsArr
// }
// console.log(devsWhoKnowJS(developers))
//-------------------------------------THIS WORKS
// const knowsJavaScript = (arr) => {
//     let JavaScriptDevs = [];
//     for (let i = 0; i < arr.length; i++) {
//
//         for (let j = 0; j < arr[i].languages.frontend.length; j++) {
//
//             if (arr[i].languages.frontend[j] === "JavaScript") {
//                 JavaScriptDevs.push(arr[i].name)
//             }
//         }
//     }
//     return JavaScriptDevs
// }
// console.log(knowsJavaScript(developers))
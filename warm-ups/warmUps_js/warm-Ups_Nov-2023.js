// **************************************   Daly Warm-Ups Nov, 1, 2023   ***************************************
//Objective: Create a function that takes in an array and returns an array of the names of people who know JavaScript

//Data Structure/Example Input:
let developers = [{
    name: "Jonathan", languages: {
        frontend: ["HTML", "JavaScript", "CSS"], backend: ["Java"]
    }
}, {
    name: "Bonnie", languages: {
        frontend: ["JavaScript"], backend: []
    }
}, {
    name: "Raj", languages: {
        frontend: [], backend: ["C#", "Java", "Python"]
    }
}, {
    name: "Carmen", languages: {
        frontend: ["JavaScript", "HTML", "CSS", "React"], backend: ["C#", "Java", "Python", "TypeScript"]
    }
},]
// let JS_coders = "JavaScript"
// function JS_developers(array) {
//     console.log(array.filter(element => element.includes("JavaScript")));
// }
// JS_developers(developers)
////--------------------------------
// function knowsJavaScript(people) {
//     let coders = people.filter(person => person.languages.frontend.includes('JavaScript'));
//     let coderNames = coders.map(names.name);
//     return coderNames
// }
// const javascriptExperts
////--------------------------------
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
//-------------------------------------
const knowsJavaScript = (arr) => {
    let JavaScriptDevs = [];
    for (let i = 0; i < arr.length; i++) {

        for (let j = 0; j < arr[i].languages.frontend.length; j++) {

            if (arr[i].languages.frontend[j] === "JavaScript") {
                JavaScriptDevs.push(arr[i].name)
            }
        }
    }
    return JavaScriptDevs
}
console.log(knowsJavaScript(developers))

// **************************************   Daly Warm-Ups Nov, -, 2023   ***************************************

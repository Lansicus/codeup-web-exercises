"use strict"

function heading(str){
    let heading1 = "<h1>"
    heading1 += `${str}</h1>`
    return heading1
}
console.log("title")
/* Create a function that takes in 3 inputs to create an ordered list */

function orderedlist(first, second, third) {
    return   `<ul>
<li>${first}</li>
<li>${second}</li>
<li>${third}</li>
</ul>`
}
console.log(orderedlist("waka", "waka", "waka"))
(function(){
    "use strict";

    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */
    /*the variable 'names' becomes an array since its parameters are kept within '[]'. */
let names = ["Juan", "Julio", "Javier", "Josue" ]

/**
 * TODO:
 * Create a log statement that will log the number of elements in the names
 * array.
 */
/*    The 'console.log' here is asking for the '.length' of the array (which is four indexes).
    if we wanted to get the lengths of individual values from 'names' we would use the 'spread' array operator (...).
     */
// console.log(names.length)

    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */
    // console.log(names[0]); // Juan
    // console.log(names[1]); // Julio
    // console.log(names[2]); // Javier
    // console.log(names[3]); // Josue

    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */
    // for (let i = 0; i < names.length; i++) {
    //     console.log('The name at index ' + i + ' is: ' + names[i]);
    // }

    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */
    // names.forEach = (names) => { console.log(`Here is a lovely names: ${names}.`)
    // } // I don't know if this one actually works

    // names.forEach(names => console.log(`Here is a lovely names: ${names}.`));
    // // OR
    // for(let name of names) {
    //     console.log(name)
    // }

    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */
let last  = lastName => lastName[names.length-1];
    console.log(last(names))

let second = secondName => names[1];
    console.log(second(names))

    let first = firstName => names[0];
    console.log(first(names))

})();

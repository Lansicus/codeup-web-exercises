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
const capitalizedFirstLetter1 = (word1) => word1.substring(0,1).toUpperCase() + word1.substring(1)
console.log(capitalizedFirstLetter1("wow"))
/*if you include a negative number for the parameter of .slice
it wll give a return starting at the last character Ex:  .slice(-3)

 */
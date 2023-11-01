
let conesLeft = Math.floor(Math.random() * 30) + 30;// this gives a random number between 30 and 60

do{
    let orderedCones = Math.floor(Math.random() * 5) + 1;
    console.log(`We have ${conesLeft} cone(s) left`)

    if (conesLeft >= orderedCones)
        { console.log(`Order up for ${orderedCones} cone(s).`)
        conesLeft -= orderedCones
        }

    else {
        console.log(`No way hombre, ${orderedCones} is too many!`)
        }
}
while(conesLeft !== 0)

console.log(`Our present inventory is running at ${conesLeft} cones o7`)

/* ------------------------- */
//
// let conesLeft = Math.floor(Math.random() * 30) + 30;// this gives a random number between 30 and 60
//
// do{
//     if (conesLeft > Math.floor(Math.random() * 5) + 1){
//         (conesLeft - Math.floor(Math.random() * 5) + 1)
//     }/* this subtracts a 2nd random
//     number from the 1st. it only affects the variable within parenthesis */
//
//     { console.log(`Order up for ${conesLeft} cone(s).`)
//
//     }
//
//     else {
//         console.log(`No way hombre. ${conesLeft} cones is too many!`)
//     }
// }
// while(conesLeft !== 0)
//
// console.log(conesLeft)
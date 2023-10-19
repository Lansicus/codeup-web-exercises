

//---------------------- .2  ----------------------
/* Create a function named showMultiplicationTable
that accepts a number and console.logs the multiplication
table for that number (just multiply by the numbers 1 through 10)
 */
// function showMultiplicationTable(num) {
//
//     for (let times = 1; times <= 10; ++times) {
//
//         console.log(num + " x " + times + " = " + times * num)
// }}
//
// showMultiplicationTable(7);




//---------------------- .3  ----------------------
/*Use a for loop and the code from the previous lessons to generate
10 random numbers between 20 and 200 and output
 to the console whether each number is odd or even. */

// for (let times = 1; times < 10; times++) {
//     let rndInt = Math.floor(Math.random() * ((200 - 20) + 1) + 20
//     if (rndInt % 2 === 0) {
//         console.log(`${rndInt} is even`);
//     } else {
//         console.log(`${rndInt} is odd`)
//     }
// }


//---------------------- .4  ----------------------
/* Create a for loop that uses console.log to create the output shown below.
 1
 22
 333
 4444
 55555
 666666
 7777777
 88888888
 999999999*/
for(let i = 1; i < 10; i++) {
    console.log(i.toString().repeat(i))
}
//------------You can also accomplish by doing ---------
for(let i = 1; i < 10; i++) {
    let num = ";"
for(let j = 0; j < i; j++) {
    num += i;
} console.log(num)
}
// ----------- and by doing ---------------
//number++ then number + "number"
// for (i = 1; i <= 9; i++) {
//     var res = [];
//     for (a = 1; a <= i; a++) {
//         res.push(i);
//     }
//     console.log(res.join(""));
// }


//---------------------- .5  ----------------------
// for(let a = 100; a > 0; a -= 5) {
//     console.log(a)
// }


/* *************************************    EXAMPLE FROM ONLINE     ******************************************** */
/* program to generate a multiplication table
upto a range */

// take number input from the user
// const number = parseInt(prompt('Enter an integer: '));
//
// const range = 10;
//
// //creating a multiplication table
// for(let i = 1; i <= range; i++) {
//     const result = i * number;
//     alert(`${number} * ${i} = ${result}`);
// }
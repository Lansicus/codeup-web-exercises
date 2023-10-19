// let i = 0;
//
// while(i < 10) {
//     console.log(i)
//     i++
//     console.log(i)
// }

//do while loops
/* do will always run once. If the while portion reads false after wards
the do will stop running */

// let i = 12;
// do {
//     console.log(i)
//     i++
// } while(i < 10)


/* -------------------- mini exercise ---------------------

create a variable called 'num' that is equal to '0'.
write a while loop that increments 'num' by 5 so long as 'num' is less than 100.
Then do the same thing with a do while
 */

// let i = 90;
//
// while(i < 100) {
//     console.log(i += 5) }
//
//
// let num = 90
// do{
//     console.log(num += 5)
// }
// while(num < 100)
/* --------------------------------------*/

// // **********************************      DO-WHILE LOOPS       ********************************

// let secretNumber = 7
// let guess;
// let attempt = 0
//
// do {
//     guess = parseInt(prompt("Guess the secret number?(1-10)"))
//     if(guess === secretNumber) {
//         console.log("You have guessed correctly")
//     } else {
//         attempt++
//         console.log("Try again " + attempt + "attempt(s) total")
//         }if(guess < secretNumber) {
//         console.log("Can we get much higher?")
//         }
// } while(guess !== secretNumber)

//*****************************************      FOR LOOPS       ********************************

//-------------
//prints individual letters of hello starting with the first index and moving to the next as 1 is added
// /* 'i' is equal to zero;
// if 'i' is less than or equal to 'hello.length';
// result is 'i' plus one.
//  */
// let hello = "hello";
// for(i = 0; i <= hello.length; i++) {
//     console.log(hello[i])
// }

// //--------------
// for(let i = 10; i <= 20; i++) {
//     console.log(i)
// }
//
// //-------------
// for(let a = 0; a < 100; a += 5) {
//     console.log(a)
// }
//-------------
/* initialize statement with variables (separate with semicolon);
 give the condition to be met;
 give the action to be performed
 */
// for(let b = 0, c = 0; b < 10; b++, c++) {
//     console.log("for loop iteration #" + b + ",c= " + j);
// }
// **************************************     LOOP BREAK STATEMENTS     ********************************

// for(let l = 0; l < 100; l += 5) {
//     console.log(l)
//     break;
//     //console.log("snippet never reached")
// }

//-------------
// for(let k = 0; k < 100; k += 5) {
//     console.log(k)
//     if(k === 50) {
//         break;
//     }
// }
// ****************************************    CONTINUE LOOP STATEMENTS      ***************************

/*
if 'g' is even we will skip past it and 'continue'
back to the loop. The 'console.log()' within this loop
will only give odd numbers. */

for(let g = 1; g < 100; g++) {
    if (g % 2 === 0) {
        continue;
    }
    console.log("Here is a lovely even number " + g);
}
//--------------
// for(h = 1; h <= 5; h++)
//     { if(h === 3) { continue; }  console.log(h) }
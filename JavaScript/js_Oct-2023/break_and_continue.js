

/*                            *************************** .2 *******************************
--Prompt the user for an odd number between 1 and 50.
Use a loop and a break statement to continue prompting the
user if they enter an invalid input.

--Use a loop and the continue statement to
output all the odd numbers between 1 and 50,
except for the number the user entered.
 */
//
while(true) {
    let userNumber = parseInt(prompt("Please enter an odd number between 1 and 50"))

    if(userNumber >= 1 && userNumber <= 50 && userNumber % 2 === 1) {
    console.log(`number entered ${userNumber}`);

     for(let i = 1; i <= 50; i += 2) {
          if(i === userNumber) {
            console.log(`Yikes! Slipping number: ${userNumber}`);
            continue;
         }
            console.log(`Here is an odd numbers ${i}`)
        }
     break;
    } else {
        alert("Invalid input. Please enter an odd number between 1 - 50")
    }
}
//--------------- another solution attempt --------------
// let numberPicked = 15
//
// for(let g = 1; g < 50; g++) {
//     if (g % 2 === 0) {
//         continue;
//     }
//     console.log("Here is a lovely odd number " + g);
//     else{
//     console.log("Pick an odd number")
// }}

/*                            *************************** .3 ******************************* */

console.log("Hello from external JavaScript");
alert('Welcome to my Website!');
let userInput = prompt("What's your favorite color?");
alert(`${userInput} is my favorite color too`);

//**********

//     (for 3 days), Brother Bear (for 5 days, they love it),
//and Hercules (1 day, you don't know yet if they're going to like it).
// If price for a movie per day is $3, how much will you have to pay?

let moviedays1 =prompt("How many days would you like to rent The little mermaid?");
let moviedays2 = prompt("Brother Bear?");
let moviedays3 = prompt ("Hercules?");

let moviecost1 = moviedays1 * 3;
let moviecost2 = moviedays2 * 3;
let moviecost3 = moviedays3 * 3;

alert(`The charge for ${moviedays1} will be $${moviecost1}`);
alert(`The charge for ${moviedays2} will be $${moviecost2}`);
alert(`The charge for ${moviedays3} will be $${moviecost3}`);

//***********

//Suppose you're working as a contractor for 3 companies:
//Google, Amazon and Facebook, they pay you a different rate per hour.
// Google pays $400, Amazon $380, and Facebook $350. How much will you receive in payment for this week?
// You worked 10 hours for Facebook, 6 hours for Google and 4 hours for Amazon.
let googlePay =prompt("How much were you paid by Google an hour?");
let amazonPay = prompt("By Amazon?");
let facebookPay = prompt ("And Facebook?");

let googleHours = prompt ("How Many hours did you work for google?");
let amazonHours = prompt ("How Many hours did you work for Amazon?");
let facebookHours = prompt ("How Many hours did you work for Facebook?");

let googleTotal = googlePay * googleHours;
let amazonTotal = amazonPay * amazonHours;
let facebookTotal = facebookPay * facebookHours;

alert(`You will be paid $${googleTotal} by Google.`);
alert(`You will be paid $${amazonTotal} by Amazon`);
alert(`You will be paid $${facebookTotal} by Facebook`);
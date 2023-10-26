


// const newNumbers = [1, 2, 3, 4];
//
// const accumulatedTotal = newNumbers.reduce((accumulator, currentValue) => {
//   console.log('The value of accumulator: ', accumulator);
//   console.log('The value of currentValue: ', currentValue);
//   return accumulator + currentValue;
// });
// console.log("The accumulated total is: " + accumulatedTotal);

//-------------------------------------------------- OTHER EXAMPLE --------------------------------------------------
const newNumbers = [1, 2, 3, 4];

const newSum = newNumbers.reduce((accumulator, currentValue) => {
  console.log('The value of accumulator: ', accumulator);
  console.log('The value of currentValue: ', currentValue);
  return (accumulator + currentValue)
});
console.log("The accumulated total is: " + newSum)
/*EXPECTED
The value of accumulator:  1
The value of currentValue:  2
The value of accumulator:  3
The value of currentValue:  3
The value of accumulator:  6
The value of currentValue:  4
The accumulated total is: 10 */

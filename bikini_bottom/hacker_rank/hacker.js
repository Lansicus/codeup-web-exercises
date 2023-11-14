

//-------------------------------------------------- WEEK 1, EXERCISE 3 --------------------------------------------------
/* Given a time in -hour AM/PM format, convert it to military (24-hour) time.

    Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
- 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

    Example


Return '12:01:00'.


    Return '00:01:00'.
    Function Description
Complete the timeConversion function in the editor below. It should return a new string representing the input time in 24 hour format.
    timeConversion has the following parameter(s):

string s: a time in  hour format
Returns

string: the time in  hour format
Input Format

A single string  that represents a time in -hour clock format (i.e.:  or ).

All input times are valid

07:05:45PM = Sample Output = 19:05:45 */
/*--------------------------------------------------------------------------------------*/
// The timeConversion function takes a string s representing time in 12-hour format with AM/PM designation.
//     function timeConversion(s) {
//         /* s.split(' ') splits the input string into two parts:
//          time (containing hours, minutes, and seconds) and period (containing AM/PM).*/
//         let [time, period] = s.split(' ');/*--------------------------------------------*/
//         /*time.split(':').map(Number) splits the time part into hours, minutes, and seconds using the colon (:)
//          as a delimiter and converts them to numbers.*/
//         let [hours, minutes, seconds] = time.split(':').map(Number);
//         /*------------------------------------------------------------------------------*/
//         /*The code then checks if the period is 'PM' and the hours are not 12.
//          If so, it adds 12 to the hours to convert from 12-hour to 24-hour format.
//           If the period is 'AM' and the hours are 12, it sets the hours to 0 (midnight).*/
//         if (period === 'PM' && hours !== 12) {
//             hours += 12;
//         } else if (period === 'AM' && hours === 12) {
//             hours = 0;
//         }/*-----------------------------------------------------------------------------*/
//         /*The code adds a leading zero to hours, minutes, and seconds if they are less than 10,
//          ensuring that they are displayed as two digits.*/
//         hours = hours < 10 ? '0' + hours : hours;
//         minutes = minutes < 10 ? '0' + minutes : minutes;
//         seconds = seconds < 10 ? '0' + seconds : seconds;/*-----------------------------*/
//         /* Finally, the function returns the time in 24-hour format as a formatted string in the format HH:MM:SS,
//          where HH represents hours (00-23), MM represents minutes (00-59), and SS represents seconds (00-59).*/
//         return `${hours}:${minutes}:${seconds}`;
//     }
//     timeConversion()

/* the input string is split into time and period, and the time is further split into hours,
 minutes, and seconds. The function then checks the period (AM/PM) and performs
  the necessary conversion to 24-hour format. Leading zeros are added to hours, minutes, and seconds
   if they are less than 10. The formatted time string with hours, minutes, and seconds is returned
    using template literals.
 */





    // console.log(timeConversion("8:45:30 PM")); // "20:45:30"
    // console.log(timeConversion("8:45:05 AM")); // "08:45:05"





//-------------------------------------------------- WEEK 1, EXERCISE 2 --------------------------------------------------
/* Given five positive integers, find the minimum and maximum values that can be calculated
 by summing exactly four of the five integers. Then print the respective minimum and maximum values
  as a single line of two space-separated long integers.

    Example:   arr = [1, 3, 5, 7, 9]
    The minimum sum is 1 + 3 + 5 + 7 = 16 and the maximum sum is 3 + 5 + 7+ 9 = 24.
        -The function prints 16 24 */

// function minMaxSum(arrOf5) {
//     let min = Math.min(...arrOf5);
//     let max = Math.max(...arrOf5);
//     let sum = arrOf5.reduce((acc, num) => acc + num);
//     let minSum = sum - max;
//     let maxSum = sum - min;
//     console.log(minSum, maxSum);
// }
// minMaxSum([1, 3, 5, 7, 9])



//-------------------------------------------------- WEEK 1, EXERCISE 1 --------------------------------------------------
/* Note: This challenge introduces precision problems. The test cases are scaled to six decimal places,
 though answers with absolute error of up to 10^-4 are acceptable.

    Example:
arr = [1, 1, 0, -1, -1]
There are n = 5 elements, two positive, two negative and one zero. Their ratios are 2/5's = 0.400000,
and 1/5's = 0.200000. Results are printed as:
0.400000
0.400000
0.200000 */

// function countElements(arr) {
//   let neg = arr.filter(num => num < 0);
//   let pos = arr.filter(num => num > 0);
//   let zeros = arr.filter(num=> num === 0)
//   //--------------------------------
//   let positiveRatio = (pos.length/arr.length).toFixed(6);
//   let negativeRatio = (neg.length / arr.length).toFixed(6);
//   let zeroRatio = (zeros.length / arr.length).toFixed(6);
//   console.log(`${positiveRatio}\n${negativeRatio}\n${zeroRatio}`)
// }
//
// // return (`There are n = ${arr.length} element(s) ${pos.length} negative, ${neg.length} negative, and ${zeros.length} zero(s). The ratio(s) are ${positiveRatio}, ${negativeRatio}, and ${zeroRatio} respectively.`);
// countElements([1,1,0,-1,-1, 2, 5, -7])

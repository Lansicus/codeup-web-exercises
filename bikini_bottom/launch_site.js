


// const newNumbers = [1, 2, 3, 4];
//
// const accumulatedTotal = newNumbers.reduce((accumulator, currentValue) => {
//   console.log('The value of accumulator: ', accumulator);
//   console.log('The value of currentValue: ', currentValue);
//   return accumulator + currentValue;
// });
// console.log("The accumulated total is: " + accumulatedTotal);

//-------------------------------------------------- OTHER EXAMPLE --------------------------------------------------
// const newNumbers = [1, 2, 3, 4];
//
// const newSum = newNumbers.reduce((accumulator, currentValue) => {
//   console.log('The value of accumulator: ', accumulator);
//   console.log('The value of currentValue: ', currentValue);
//   return (accumulator + currentValue)
// });
// console.log("The accumulated total is: " + newSum)
/*EXPECTED
The value of accumulator:  1
The value of currentValue:  2
The value of accumulator:  3
The value of currentValue:  3
The value of accumulator:  6
The value of currentValue:  4
The accumulated total is: 10 */




//---------------------------- Getting a gif background to connect to the mouse scroller -------------------------------

// const video = document.getElementById("video");
//
// // Detect mouse wheel event and update video playback position
// document.addEventListener("wheel", (event) => {
//   // Calculate the scrubbing speed based on wheel delta
//   const scrubSpeed = 0.1;
//   // Update video playback position based on wheel delta
//   video.currentTime += event.deltaY * scrubSpeed;
//   // Prevent the default scroll behavior
//   event.preventDefault();

// });/* ----------------------SECOND ATTEMPT TO MAKE A SCROLLING VIDEO---------------------- */

// select video element
let vid = document.getElementById('v0');
//var vid = $('#v0')[0]; // jquery option

// pause video on load
vid.pause();

// pause video on document scroll (stops autoplay once scroll started)
window.onscroll = function(){
    vid.pause();
};

// refresh video frames on interval for smoother playback
setInterval(function(){
    vid.currentTime = window.pageYOffset/400;
}, 40);
const numStars = 50;
const starsContainer = document.getElementById('stars-container');
const stars = [];

for (let i = 0; i < numStars; i++) {
    const star = document.createElement('div');
    star.className = 'star';
    starsContainer.appendChild(star);
    stars.push(star);
}

let mouseMoved = false;

document.onmousemove = function (event) {
    mouseMoved = true;
    const {clientX: mouseX, clientY: mouseY} = event;
    for (const star of stars) {
        const xOffset = (Math.random() - 0.5) * 100;
        const yOffset = (Math.random() - 0.5) * 100;
        star.style.top = `${mouseY + yOffset}px`;
        star.style.left = `${mouseX + xOffset}px`;
        star.style.opacity = '1';
    }
};

document.onmouseleave = function () {
    mouseMoved = false;
};

setInterval(() => {
    if (!mouseMoved) {
        for (const star of stars) {
            star.style.opacity = '0';
            star.style.transform = 'translateY(50px)';
        }
    }
}, 300);


// const numStars = 50;
// const starsContainer = document.getElementById('stars-container');
//
// for (let i = 0; i < numStars; i++) {
//     const star = document.createElement('div');
//     star.className = 'star';
//     starsContainer.appendChild(star);
// }
//
// document.onmousemove = function(event) {
//     const mouseX = event.clientX;
//     const mouseY = event.clientY;
//
//     const stars = document.getElementsByClassName('star');
//     for (let i = 0; i < stars.length; i++) {
//         const star = stars[i];
//         const xOffset = Math.random() * 100 - 50;
//         const yOffset = Math.random() * 100 - 50;
//         star.style.top = mouseY + yOffset + 'px';
//         star.style.left = mouseX + xOffset + 'px';
//     }
// };

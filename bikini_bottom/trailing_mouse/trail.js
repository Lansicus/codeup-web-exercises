let numStars = 50;

for (let i = 0; i < numStars; i++) {
    let star = document.createElement("div");
    star.className = "star";
    document.body.appendChild(star);

    let xy = Math.random() * 100;
    let duration = Math.random() * (1.5 - 1) + 1; // between 1 and 1.5 seconds
    let delay = Math.random() * 0.5; // between 0 and 0.5 seconds

    star.style.left = `${Math.random() * window.innerWidth}px`;
    star.style.animation = `twinkle ${duration}s ease ${delay}s infinite`;
}

document.onmousemove = function(event) {
    let mouseX = event.clientX;
    let mouseY = event.clientY;

    let stars = document.getElementsByClassName("star");
    for (let i = 0; i < stars.length; i++) {
        stars[i].style.top = mouseY + "px";
        stars[i].style.left = mouseX + "px";
    }
};

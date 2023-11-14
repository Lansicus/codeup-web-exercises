


const dragElement = document.getElementById('dragElement');

let offsetX, offsetY, isDragging = false;

// Event listeners for mouse down, move, and up
dragElement.addEventListener('mousedown', (e) => {
    isDragging = true;
    offsetX = e.clientX - dragElement.getBoundingClientRect().left;
    offsetY = e.clientY - dragElement.getBoundingClientRect().top;
    dragElement.classList.add('dragging');
});

document.addEventListener('mousemove', (e) => {
    if (!isDragging) return;

    const x = e.clientX - offsetX;
    const y = e.clientY - offsetY;

    dragElement.style.transform = `translate(${x}px, ${y}px)`;
});

document.addEventListener('mouseup', () => {
    isDragging = false;
    dragElement.classList.remove('dragging');
});

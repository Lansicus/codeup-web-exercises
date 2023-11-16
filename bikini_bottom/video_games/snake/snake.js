//board
let blocksize = 25;
let rows = 20
let columns = 20;
let board;
let context;

//snake head
let snakeX = blocksize * 5
let snakeY = blocksize * 5

let velocityX = 0;
let velocityY = 0;

//body
let snakeBody = [];

//food
let foodX = blocksize * 10
let foodY = blocksize * 10

//GAME-OVER
let gameOver = false;

window.onload = function () {
    board = document.getElementById("board")
    board.height = rows * blocksize;
    board.width = columns * blocksize;
    context = board.getContext('2d'); //used for drawing on the board

    placeFood();
    document.addEventListener("keyup", changeDirection)
    // update();
    setInterval(update, 100);
}

function update() {
    if (gameOver) {
        return;
    }

    context.fillStyle = "black"
    context.fillRect(0, 0, board.width, board.height);

    context.fillStyle = 'red';
    context.fillRect(foodX, foodY, blocksize, blocksize);

    if (snakeX === foodX && snakeY === foodY) {
        snakeBody.push([foodX, foodY]);
        placefood();
    }
    for (let i = snakeBody.length - 1; i > 0; i--) {
        snakeBody[i] = snakeBody[i - 1];
    }
    if (snakeBody.length) {
        snakeBody[0] = [snakeX, snakeY];
    }
    context.fillStyle = "lime";
    context.fillRect(snakeX, snakeY, blocksize, blocksize);
    snakeX += velocityX * blocksize;
    snakeY += velocityY * blocksize;
    for (let i = 0; i < snakeBody.length; i++) {
        context.fillRect(snakeBody[i][0], snakeBody[i][1], blocksize, blocksize)
    }

    //game over conditions
    if (snakeX < 0 || snakeX > columns * blocksize || snakeY < 0 || snakeY > rows * blocksize) {
        gameOver = true;
        alert("GAME-OVER");
    }
    for (let i = 0; i < snakeBody.length; i++) {
        if (snakeX === snakeBody[i][0] && snakeY === snakeBody[i][1]) {
            gameOver = true;
            alert("GAME-OVER");
        }
    }
}

function changeDirection(e) {
    if (e.code === "ArrowUp" && velocityY !== 1) {
        velocityX = 0;
        velocityY = -1;
    }
    if (e.code === "ArrowDown" && velocityY !== -1) {
        velocityX = 0;
        velocityY = 1;
    }
    if (e.code === "ArrowLeft" && velocityX !== 1) {
        velocityX = -1;
        velocityY = 0;
    }
    if (e.code === "ArrowRight" && velocityX !== -1) {
        velocityX = 1;
        velocityY = 0;
    }
}

function placeFood() {
    //0-1 *columns -> (0-19.9999) * 25
    foodX = Math.floor(Math.random() * columns) * blocksize
    foodY = Math.floor(Math.random() * columns) * blocksize
}
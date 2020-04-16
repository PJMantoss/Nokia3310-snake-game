document.addEventListener('DOMContentLoaded', () => {
    const squares = document.querySelectorAll('.grid div');
    const scoreDisplay = document.querySelector('span');
    const startBtn = document.querySelector('.start');

    const width = 10;
    let currentIndex = 0; // first div in the grid
    let appleIndex = 0;  // first div in the grid
    let currentSnake = [2,1,0]; // 3rd div in the grid being 2 (or the HEAD), and 0 being the end (TAIL, with all 1's being the body fro now on)
    let direction = 1;
    let score = 0;
    let speed = 0.9;
    let intervalTime = 0;
    let interval = 0;

    //Start and Restart of game
    startGame = () => {
        currentSnake.forEach(index => squares[index].classList.remove('snake'));
        squares[appleIndex].classList.remove('apple');
        clearInterval(interval);
        score = 0;
        randomApple();
        direction = 1;
        scoreDisplay.innerText = score;
        intervalTime = 1000;
        currentSnake = [2,1,0];
        currentIndex = 0;
        currentSnake.forEach(index => squares[index].classList.add('snake'));
        interval = setInterval(moveOutcomes, intervalTime);
    }

    //asign functions to keycodes
    control = e => {
        //removing the class of snake from all squares
        squares[currentIndex].classList.remove('snake');

        if(e.keycode === 39){
            direction = 1; //If we press the right arrow on our keyboard,the snake will go right once
        } else if (e.keycode === 38){
            direction = -width; // if we press the up arrow, the snake will go back 10 divs,appearing to go up
        }
    }
})
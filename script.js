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

    //Function that handles all the move outcomes of the snake
    moveOutcomes = () => {
        //Handles snake hitting border and/or self
        if(
            (currentSnake[0] + width >= (width * width) && direction === width) || //If snake hits bottom
            (currentSnake[0] % width === width -1 && direction === 1) || //If snake hits right wall
            (currentSnake[0] % width === 0 && direction === -1) || //If snake hits left wall
            (currentSnake[0] - width < 0 && direction === -width) || //If snake hits the top
            squares[currentSnake[0] + direction].classList.contains('snake') //If snake bumps into itself
        ){
            return clearInterval(interval) //This will clear the interval if any of the above happens
        }

        const tail = currentSnake.pop(); // removes last ... of the array and shows it
        squares[tail].classList.remove('snake'); // removes class of snake from the Tail
        currentSnake.unshift(currentSnake[0] + direction); // provides direction for the head of the array

        // Handles snake swallowing apple
        if(squares[currentSnake[0]].classList.contains('apple')){
            squares[currentSnake[0]].classList.contains('apple');
            squares[tail].classList.add('snake');
            currentSnake.push(tail);
            randomApple();
            score++;
            scoreDisplay.textContent = score;
            clearInterval(interval);
            
        }
    }

    //assign functions to keycodes
    control = e => {
        //removing the class of snake from all squares
        squares[currentIndex].classList.remove('snake');

        if(e.keycode === 39){
            direction = 1; //If we press the right arrow on our keyboard,the snake will go right once
        } else if (e.keycode === 38){
            direction = -width; // If we press the up arrow, the snake will go back 10 divs,appearing to go up
        } else if (e.keycode === 37){
            direction = -1; // If we press left, the snake will go left once
        } else if (e.keycode === 40){
            direction = +width; //If we press down, the snake's head will instantly appear in the div ten divs from your current position
        }
    }

    document.addEventListener('keyup', control);
    document.addEventListener('click', startBtn);
})
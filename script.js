document.addEventListener('DOMContentLoaded', () => {
    const squares = document.querySelectorAll('.gird div');
    const scoreDisplay = document.querySelector('span');
    const startBtn = document.querySelector('.start');

    const width = 10;
    const currentIndex = 0; // first div in the grid
    const appleIndex = 0;  // first div in the grid
    const currentSnake = [2,1,0]; // 3rd div in the grid being 2 (or the HEAD), and 0 being the end (TAIL, with all 1's being the body fro now on)

})
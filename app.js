//CONSTANTS//
const colors = {
    '1': 'lime',
    '-1': 'pink',
    'null': 'white',
};

const waysToWin = [
    [0,1,2]
    [3,4,5]
    [6,7,8]
    [0,3,6]
    [1,4,7]
    [2,5,8]
    [0,4,8]
    [2,4,6]
];
//VARIBALES//
let turn;
let canvas;
let winner; //will bet set to either null, -1, 1, or 'T'

//CACHED//
const message = document.querySelector('h1');
const playAgainBtn = document.querySelector('button');
//const canvasEls = [...document.querySelectorAll('#canvas > div ')];

//EVENT LISTENERS//
document.getElementById('canvas').addEventListener('click',
handleMove);
playAgainBtn.addEventListener('click', init);

//FUNCTIONS//
init();

function intialize() {
    canvas = [null, null, null, null, null, null, null, null, null];
    turn = 1
    winner = null;
    render();
}

function announceWinner() {
    for (let i = 0; i < waysToWin.length; i++) {
        if (Math.abs(canvas[waysToWin[i][0]] + canvas[waysToWin[i][1]] + canvas[waysToWin[i][2]]) === 3)
        return canvas[waysToWin[i][0]];
    }
    if (canvas.includes(null)) return null;
    return 'T';
}

function playerMove(evt) {
    const idx = parseInt(evt.target.id.replace('sq-', ''));
    if (
        isNaN(idx) ||
        canvas[idx] ||
        winner
       ) return;
       canvas[idx] = turn;
       turn *= -1;
       winner = announceWinner();
       render();
}

function renderCanvas() {
    canvas.forEach(function(sqVal, idx) {
        const squareEl = document.getElementById(`sq-${idx}`);
        squareEl.style.backgroundColor = COLOR_LOOKUP[sqVal];
        squareEl.classname = !sqVal ? 'avail' : '';
    });
}


//CONSTANTS//
const COLOR_SEARCH = {
    '1': 'lime',
    '-1': 'pink',
    'null': 'black',
};

const waysToWin = [
    [0, 1, 2]
    [3, 4, 5]
    [6, 7, 8]
    [0, 3, 6]
    [1, 4, 7]
    [2, 5, 8]
    [0, 4, 8]
    [2, 4, 6]
];
//VARIBALES//
let canvas;
let turn;
let winner; //will bet set to either null, -1, 1, or 'T'

//CACHED//
const message = document.querySelector('h1');
const playAgainBtn = document.querySelector('button');

//EVENT LISTENERS//
document.getElementById('canvas').addEventListener('click',
playerMove);
playAgainBtn.addEventListener('click', initialize);

//FUNCTIONS//
initialize();

function initialize() {
    canvas = [null, null, null, null, null, null, null, null, null];
    turn = 1;
    winner = null;
    render();
}

function playerMove(evt) {
    const idx = parseInt(evt.target.id.replace('square-', ''));
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

function announceWinner() {
    for (let i = 0; i < waysToWin.length; i++) {
        if (Math.abs(canvas[waysToWin[i][0]] + canvas[waysToWin[i][1]] + canvas[waysToWin[i][2]]) === 3)
        return canvas[waysToWin[i][0]];
    }
    if (canvas.includes(null)) return null;
    return 'T';
}

function renderCanvas() {
    canvas.forEach(function(squareVal, idx) {
        const squareEl = document.getElementById(`sq-${idx}`);
        squareEl.style.backgroundColor = COLOR_SEARCH[squareVal];
        squareEl.classname = !squareVal ? 'avail' : '';
    });
}

function render() {
    renderCanvas();
    renderMessage();
    playAgainBtn.disabled = !winner;
}

function renderMessage() {
    if (winner === 'T') {
      message.innerHTML = 'Tie Game!';
    } else if (winner) {
      message.innerHTML = `Winner is <span style="color: 
      ${COLOR_SEARCH[winner]}">${COLOR_SEARCH[winner].toUpperCase()}</span>!`;
    } else {
      message.innerHTML = `<span style="color: 
      ${COLOR_SEARCH[turn]}">${COLOR_SEARCH[turn].toUpperCase()}</span>'s Turn`;
    }
  }



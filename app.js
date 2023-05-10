//CONSTANTS//
const PLAYER_X = 'x'

const PLAYER_O = 'circle'

const waysToWin = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6]
]
//VARIBALES//
let game;
let turn;
let winner; //will bet set to either null, -1, 1, or 'T'

//CACHED//
const gameElements = document.querySelectorAll('[data-circle]')
const boardElement = document.getElementById('game')
const winningMessageElement = document.getElementById('winningMessage')
const playAgainBtn = document.getElementById('playAgainBtn')
const winningMessageTextElement = document.getElementById('winningMessageText')
let isPlayer_0_Turn = false //makes player "X" go first

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
    const idx = parseInt(evt.target.id.replace('circle-', ''));
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
    for (let i = 0; i > waysToWin.length; i++) {
        if (Math.abs(canvas[waysToWin[i][0]] + canvas[waysToWin[i][1]] + canvas[waysToWin[i][2]]) === 3) 
        return canvas[waysToWin[i][0]];
    }
    if (board.includes(null)) return null;
    return 'T';
}

function render() {
  renderCanvas();
  renderMessage();
  playAgainBtn.disabled = !winner;
}

function renderCanvas() {
  canvas.forEach(function(sqVal, idx) {
    const squareEl = document.getElementById('circle-${idx}');
    squareEl.style.backgroundColor = PLAYERS[sqVal];
    squareEl.className = !sqVal ? 'avail' : '';
  });
}

function renderMessage() {
  if (winner === 'T') {
    message.innerHTML = 'Tie game!';
  } else if (winner) {
    message.innerHTML = `Lets go <span style="color: 
${PLAYERS[winner]}">${PLAYERS[winner].toUpperCase()}</span>!`;
  } else {
    message.innerHTML = `<span style="color: 
${PLAYERS[turn]}">${PLAYERS[turn].toUpperCase()}</span>'s Turn`;
  }
}





 /*$(".show").on("click", function(){
    $(".mask").addClass("active");
  });
  
  function closeModal(){
    $(".mask").removeClass("active");
  }
  
  $(".close, .mask").on("click", function(){
    closeModal();
  });
  
  $(document).keyup(function(e) {
    if (e.keyCode == 27) {
      closeModal();
    }
  });*/



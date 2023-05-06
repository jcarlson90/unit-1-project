//CONSTANTS//
const COLOR_SEARCH = {
    '1': 'lime',
    '-1': 'pink',
    'null': 'black',
};

const waysToWin = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
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



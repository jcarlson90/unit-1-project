//CONSTANTS
const PLAYER_X = 'x';        //creating the players

const PLAYER_O = 'circle';

const WINNING_COMBINATIONS = [     
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],                 //8 different winning combos
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

//CACHED ELEMENTS
const message = document.querySelector('h2')
const cellElements = document.querySelectorAll('[data-cell]')
const board = document.getElementById('board')
const winningMessageElement = document.getElementById('winningMessage')
const restartButton = document.getElementById('playAgainBtn')
const winningMessageTextElement = document.querySelector('[data-winning-message-text]')
let circleTurn

startGame()

//EVENT LISTENERS
playAgainBtn.addEventListener('click', startGame)

//FUNCTIONS
function startGame() {
  circleTurn = false
  cellElements.forEach(cell => {
    cell.classList.remove(PLAYER_X)
    cell.classList.remove(PLAYER_O)
    cell.removeEventListener('click', handleClick)
    cell.addEventListener('click', handleClick, { once: true })
  })
  setBoardHoverClass()
  winningMessageElement.classList.remove('show')
}

function handleClick(e) {
  const cell = e.target
  const currentClass = circleTurn ? PLAYER_O : PLAYER_X
  placeMark(cell, currentClass)
  if (checkWin(currentClass)) {
    endGame(false)
  } else if (isDraw()) {
    endGame(true)
  } else {
    swapTurns()
    setBoardHoverClass()
  }
}

                                            //shows winning message screen
function endGame(draw) {
  if (draw) {
    winningMessageTextElement.innerText = 'Tie Game!'
  } else {
    winningMessageTextElement.innerText = `${circleTurn ? "O" : "X"} Wins!`
  }
  winningMessageElement.classList.add('show')
}

function isDraw() {
  return [...cellElements].every(cell => {
    return cell.classList.contains(PLAYER_X) || cell.classList.contains(PLAYER_O)
  })
}

function placeMark(cell, currentClass) {
  cell.classList.add(currentClass)
}

function swapTurns() {
  circleTurn = !circleTurn          //the easiest function I wrote, and also the one I struggled with the most.
}

function setBoardHoverClass() {
  board.classList.remove(PLAYER_X)
  board.classList.remove(PLAYER_O)
  if (circleTurn) {
    board.classList.add(PLAYER_O)
  } else {
    board.classList.add(PLAYER_X)
  }
}

function checkWin(currentClass) {
  return WINNING_COMBINATIONS.some(combination => {
    return combination.every(index => {
      return cellElements[index].classList.contains(currentClass)
    })
  })
}











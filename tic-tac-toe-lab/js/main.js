/*-------------------------------- Constants --------------------------------*/
const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [6, 4, 2],
];

/*---------------------------- Variables (state) ----------------------------*/
let board;
let turn;
let winner;
let tie;
let message;

/*------------------------ Cached Element References ------------------------*/
const squareElements = document.querySelectorAll(".sqr");
const messageElement = document.getElementById("message");
const boardElement = document.querySelector(".board");
const resetButtonElement = document.getElementById("reset");

/*-------------------------------- Functions --------------------------------*/
function init() {
  board = ["", "", "", "", "", "", "", "", ""];
  turn = "X";
  winner = false;
  tie = false;
  squareElements.forEach((square) => square.classList.remove("clicked"));
  render();
}

function render() {
  updateBoard();
  updateMessage();
}

function updateBoard() {
  board.forEach((element, index) => {
    const squareElement = squareElements[index];
    squareElement.textContent = element;
  });
}

function updateMessage() {
  if (winner === false && tie === false) {
    message = `${turn}'s turn`;
  } else if (winner === false && tie === true) {
    message = "It's a tie";
  } else {
    message = `The winner is: ${turn}`;
  }
  messageElement.textContent = message;
}

function handleClick(event) {
  if (!winner) {
    const squareIndex = event.target.id;
    const squareValue = board[squareIndex];
    if (squareValue) {
      alert("The selected square is not empty, try another!!!");
      return;
    }
    placePiece(squareIndex);
    checkForWinner();
    checkForTie();
    switchPlayerTurn();
    render();
  }
}

function placePiece(index) {
  board[index] = turn;
}

function checkForWinner() {
  winningCombos.forEach((combo) => {
    firstSquareValue = board[combo[0]];
    secondSquareValue = board[combo[1]];
    thirdSquareValue = board[combo[2]];
    if (firstSquareValue) {
      firstSquareValue === secondSquareValue &&
      firstSquareValue === thirdSquareValue
        ? (winner = true)
        : winner;
    }
  });
}

function checkForTie() {
  if (!winner) {
    board.includes("") ? tie : (tie = true);
  }
}

function switchPlayerTurn() {
  if (!winner) {
    turn === "X" ? (turn = "O") : (turn = "X");
  }
}

/*----------------------------- Event Listeners -----------------------------*/
document.addEventListener("DOMContentLoaded", function () {
  init();
});

boardElement.addEventListener("click", (event) => {
  const squareButtonElement = document.getElementById(event.target.id);
  if (!winner) squareButtonElement.classList.add("clicked");
  handleClick(event);
});
resetButtonElement.addEventListener("click", init);

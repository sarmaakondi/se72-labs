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

board = ["", "", "", "", "", "", "", "", ""];
turn = "X";
winner = false;
tie = false;

/*------------------------ Cached Element References ------------------------*/
const squareElements = document.querySelectorAll(".sqr");
const messageElement = document.getElementById("message");

/*-------------------------------- Functions --------------------------------*/
function init() {
  console.log("Game started");
  render();
}

function render() {
  console.log(squareElements);
  console.log("Render function");
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
    console.log(`Player turn: ${turn}`);
  } else if (winner === false && tie === true) {
    console.log("It's a tie");
  } else {
    console.log(`The winner is: ${turn}`);
  }
}

/*----------------------------- Event Listeners -----------------------------*/
document.addEventListener("DOMContentLoaded", function () {
  init();
});

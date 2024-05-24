/*-------------------------------- Constants --------------------------------*/

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
  console.log("Render function");
}

/*----------------------------- Event Listeners -----------------------------*/
document.addEventListener("DOMContentLoaded", function () {
  init();
});

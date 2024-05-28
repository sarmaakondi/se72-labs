/*-------------------------------- Constants --------------------------------*/

/*---------------------------- Variables (state) ----------------------------*/
const state = {
  boredom: 0,
  hunger: 0,
  sleepiness: 0,
};

let timer;
let gameOver;

/*------------------------ Cached Element References ------------------------*/
const boredomStatElement = document.getElementById("boredom-stat");
const hungerStatElement = document.getElementById("hunger-stat");
const sleepinessStatElement = document.getElementById("sleepiness-stat");

const playButtonElement = document.getElementById("play");
const feedButtonElement = document.getElementById("feed");
const sleepButtonElement = document.getElementById("sleep");

const gameMessageElement = document.getElementById("message");

const resetButtonElement = document.getElementById("restart");

/*-------------------------------- Functions --------------------------------*/
function init() {
  gameOver = false;
  timer = setInterval(runGame(), 2000);
  render();
}

function runGame() {
  console.log("The game is running!");
}
/*----------------------------- Event Listeners -----------------------------*/
document.addEventListener("DOMContentLoaded", init);

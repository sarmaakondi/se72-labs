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
  timer = setInterval(runGame, 2000);
  render();
}

function runGame() {
  updateStates();
  checkGameOver();
  render();
}

function render() {
  if (gameOver) {
    clearInterval(timer);
    gameMessageElement.classList.remove("hidden");
    resetButtonElement.classList.remove("hidden");
  }
  boredomStatElement.textContent = state.boredom;
  hungerStatElement.textContent = state.hunger;
  sleepinessStatElement.textContent = state.sleepiness;
}

function updateStates() {
  Object.keys(state).forEach((key) => {
    state[key] += Math.floor(Math.random() * Object.keys(state).length);
  });
}

function checkGameOver() {
  Object.keys(state).forEach((key) => {
    if (state[key] >= 10) gameOver = true;
  });
}

/*----------------------------- Event Listeners -----------------------------*/
document.addEventListener("DOMContentLoaded", init);

/*-------------------------------- Constants --------------------------------*/

/*---------------------------- Variables (state) ----------------------------*/
const state = {
  boredom: 0,
  hunger: 0,
  sleepiness: 0,
};

const stateButtonMap = {
  play: "boredom",
  feed: "hunger",
  sleep: "sleepiness",
};

let timer;
let gameOver;

/*------------------------ Cached Element References ------------------------*/
const boredomStatElement = document.getElementById("boredom-stat");
const hungerStatElement = document.getElementById("hunger-stat");
const sleepinessStatElement = document.getElementById("sleepiness-stat");
const gameMessageElement = document.getElementById("message");
const resetButtonElement = document.getElementById("restart");
const actionButtonElements = document.querySelectorAll(".action-button");

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
    toggleGameResetClass();
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

function actionButtonClick(event) {
  state[stateButtonMap[event.target.id]] = 0;
  render();
}

function toggleGameResetClass() {
  gameMessageElement.classList.toggle("hidden");
  resetButtonElement.classList.toggle("hidden");
}

/*----------------------------- Event Listeners -----------------------------*/
document.addEventListener("DOMContentLoaded", init);

actionButtonElements.forEach((actionButtonElement) => {
  actionButtonElement.addEventListener("click", (event) =>
    actionButtonClick(event)
  );
});

resetButtonElement.addEventListener("click", () => {
  toggleGameResetClass();
  Object.keys(state).forEach((key) => {
    state[key] = 0;
  });
  init();
});

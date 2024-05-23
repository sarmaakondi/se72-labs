/*-------------------------------- Constants --------------------------------*/

/*-------------------------------- Variables --------------------------------*/
let result = 0;
let num1 = "";
let num2 = "";
let operator = "";

/*------------------------ Cached Element References ------------------------*/
const calculator = document.getElementById("calculator");
const displayElement = document.querySelector(".display");

/*----------------------------- Event Listeners -----------------------------*/

calculator.addEventListener("click", (event) => {
  if (event.target.classList.contains("number")) {
    if (operator == "") {
      num1 += event.target.innerText;
      displayElement.textContent = num1;
      console.log(`num1: ${num1}`);
    } else {
      displayElement.textContent = "";
      num2 += event.target.innerText;
      displayElement.textContent = num2;
      console.log(`num2: ${num2}`);
    }
  }

  if (event.target.classList.contains("operator")) {
    operator = event.target.innerText;
    if (operator === "C") {
      displayElement.textContent = 0;
      num1 = "";
      num2 = "";
      operator = "";
    }
    console.log(`operator: ${operator}`);
  }

  if (event.target.classList.contains("equals")) {
    result = calculate(parseInt(num1), parseInt(num2), operator);
    console.log(`result: ${result}`);
    displayElement.textContent = result;
    num1 = "";
    num2 = "";
    operator = "";
  }
});

/*-------------------------------- Functions --------------------------------*/
const calculate = (num1, num2, operator) => {
  let output = 0;

  if (operator === "+") {
    output = num1 + num2;
  } else if (operator === "-") {
    output = num1 - num2;
  } else if (operator === "*") {
    output = num1 * num2;
  } else if (operator === "/") {
    output = num1 / num2;
  }

  return output;
};

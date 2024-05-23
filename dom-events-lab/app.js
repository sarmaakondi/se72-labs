/*-------------------------------- Constants --------------------------------*/

/*-------------------------------- Variables --------------------------------*/
let result = 0;
let num1 = "";
let num2 = "";
let operator = "";
let tempOperator = "";

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
    tempOperator = event.target.innerText;

    if (tempOperator === "C") {
      displayElement.textContent = 0;
      console.log(`tempOperator: ${tempOperator}`);
      num1 = "";
      num2 = "";
      operator = "";
      tempOperator = "";
    } else if (tempOperator !== "C" && operator !== "") {
      result = calculate(parseFloat(num1), parseFloat(num2), operator);
      console.log(`result: ${result}`);
      displayElement.textContent = result;
      num1 = result;
      num2 = "";
      operator = tempOperator;
      tempOperator = "";
    } else {
      operator = event.target.innerText;
    }

    console.log(`operator: ${operator}`);
  }

  if (event.target.classList.contains("equals")) {
    result = calculate(parseFloat(num1), parseFloat(num2), operator);
    console.log(`result: ${result}`);
    displayElement.textContent = result;
    num1 = result;
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
    if (num2 === 0) return NaN;
    output = num1 / num2;
  }
  console.log(`output: ${output}`);

  if (output % 1 !== 0) {
    digitsCount = output.toString().split(".")[1].length;
    output =
      digitsCount <= 10 ? output.toFixed(digitsCount) : output.toFixed(10);
  }

  return output;
};

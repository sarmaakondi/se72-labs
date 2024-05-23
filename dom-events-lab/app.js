/*-------------------------------- Constants --------------------------------*/
const calculator = document.querySelector("#calculator");

/*-------------------------------- Variables --------------------------------*/

/*------------------------ Cached Element References ------------------------*/

/*----------------------------- Event Listeners -----------------------------*/

calculator.addEventListener("click", (event) => {
  if (event.target.classList.contains("number")) {
    console.log("Clicked Number");
  }

  if (event.target.classList.contains("operator")) {
    console.log("Clicked Operator");
  }

  if (event.target.classList.contains("equals")) {
    console.log("Clicked Equals");
  }
});

/*-------------------------------- Functions --------------------------------*/

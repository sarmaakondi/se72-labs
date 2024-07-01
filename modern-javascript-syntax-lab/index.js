/* 
Exercise 1: Applying Array.prototype.map()
Use `.map()` to iterate over the following array:
Create a new array where each value is multiplied by 2 and log the new array.
*/
const nums = [13, 87, 2, 89, 12, 4, 90, 63];
const multipliedByTwo = nums.map((num) => num * 2);
console.log(multipliedByTwo);

/* 
Exercise 2: Array destructuring
Given the following array, use destructuring to pull out the first and second values and place them into variables. Log both variables.
*/
const pizzaToppings = ["Pineapple", "Olives", "Anchovies"];
const [firstTopping, secondTopping] = pizzaToppings;
console.log(firstTopping);
console.log(secondTopping);

/* 
Exercise 3: Destructuring objects
Given the following object, use destructuring to create variables `make` and `model` that will hold the respective values.
*/
const car = {
  make: "Audi",
  model: "q5",
};
const { make, model } = car;
console.log(make);
console.log(model);

/* 
Exercise 4: Applying the spread operator on arrays
Duplicate the following array using the spread operator and assign it to `controversialPizzaToppings`. Then, log the variable.
*/
const controversialPizzaToppings = [...pizzaToppings];
console.log(controversialPizzaToppings);

/* 
Exercise 5: Applying the spread operator on objects
Duplicate the following object and spread its values into a new variable `myCar`.
Change the `model` property of `myCar` to 'q7'. Log both objects.
*/
const myCar = { ...car };
myCar.model = "q7";
console.log(car);
console.log(myCar);

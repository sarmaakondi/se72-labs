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

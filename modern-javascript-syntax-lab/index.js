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

/* 
Exercise 6: Dynamic keys in objects
Create an object named userProfile. 
Define a variable named propertyName and assign a string to it (like a username, age, or email). 
Use propertyName as a dynamic key in userProfile, assigning a relevant value.
*/
const userProfile = {};
const propertyName = "username";
userProfile[propertyName] = "Anonymouse";
console.log(userProfile);

/* 
Exercise 7: Import and Export - DONE
*/

/* 
Exercise 8: Default parameters
Create a function that takes two parameters, `noun` and `adjective`, both with the following respective default values:
1. `cat`
2. `white`
The function should log a sentence 'The cat is white.' by default. The function should substitute the appropriate parameters when supplied arguments.
*/
const defaultParamsFunction = (noun = "cat", adjective = "white") => {
  return `The ${noun} is ${adjective}`;
};
console.log(defaultParamsFunction());
console.log(defaultParamsFunction("doll", "so cute"));

/* 
Exercise 9: Ternary operator
Convert the following `if...else` statement in to a ternary:
let pizza = 'tasty';
if (pizza === 'tasty') {
  console.log('yum');
} else {
  console.log('yuck');
}
*/
const pizza = "tasty";
console.log(pizza === "tasty" ? "yum" : "yuck");

/* 
Exercise 10: Boolean gates

1. SET LANGUAGE
Construct a single line of code that assigns a default value using the logical OR operator. This line should match the logic of the following statement: 
"LANG is equal to localLangConfig or the default value of English."
const localLangConfig = null;  // Change to 'es', 'fr', etc., or keep it null
a. Create a variable called LANG
b. Assign LANG the value of localLangConfig or 'en' as a default

2. SET WEBSITE THEME
const userSavedTheme = null; // Change to 'dark', 'contrast', etc., or keep it null
a. Create a variable called USER_THEME
b. Assign USER_THEME the value of userSavedTheme or 'light' as a default
*/
const localLangConfig = null;
const LANG = localLangConfig || "en";
console.log("Language setting:", LANG);

const userSavedTheme = "dark";
const USER_THEME = userSavedTheme || "light";
console.log("User theme setting:", USER_THEME);

/* 
Exercise 11: Optional chaining
Now check for `cat.age` on `adventurer`. See how it errors out? Use optional chaining in a console.log that it returns undefined instead.
*/
const adventurer = {
  name: "Alice",
};
let cat = adventurer.cat?.age;
console.log(cat);

import "./App.css";

import { availableIngredients } from "./ingredients";
import IngredientList from "./components/IngredientList";
import BurgerStack from "./components/BurgerStack";
import { useState } from "react";

const App = () => {
  const [stack, setStack] = useState([]);

  const addToBurger = (ingredientToAdd) => {
    setStack([ingredientToAdd, ...stack]);
  };

  const removeFromBurger = (indexOfIngredientToRemove) => {
    setStack(stack.filter((_, index) => index !== indexOfIngredientToRemove));
  };

  return (
    <main>
      <h1>Burger Stacker</h1>
      <section>
        <IngredientList
          ingredients={availableIngredients}
          addToBurger={addToBurger}
        />
        <BurgerStack stack={stack} removeFromBurger={removeFromBurger} />
      </section>
    </main>
  );
};

export default App;

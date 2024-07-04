const IngredientList = ({ ingredients, addToBurger }) => {
  return (
    <>
      <ul>
        {ingredients.map((ingredient, index) => (
          <li key={index} style={{ backgroundColor: ingredient.color }}>
            {ingredient.name}
            <i
              onClick={() => addToBurger(ingredient)}
              className="fa-solid fa-circle-plus"
            ></i>
          </li>
        ))}
      </ul>
    </>
  );
};

export default IngredientList;

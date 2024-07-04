const IngredientList = ({ ingredients }) => {
  return (
    <>
      <ul>
        {ingredients.map((ingredient, index) => {
          return (
            <li key={index} style={{ backgroundColor: ingredient.color }}>
              {ingredient.name}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default IngredientList;

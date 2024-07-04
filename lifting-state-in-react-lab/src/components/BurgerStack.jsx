const BurgerStack = ({ stack, removeFromBurger }) => {
  return (
    <>
      <ul>
        {stack.map((ingredient, index) => (
          <li key={index} style={{ backgroundColor: ingredient.color }}>
            {ingredient.name}
            <i
              onClick={() => removeFromBurger(index)}
              className="fa-solid fa-circle-minus"
            ></i>
          </li>
        ))}
      </ul>
    </>
  );
};

export default BurgerStack;

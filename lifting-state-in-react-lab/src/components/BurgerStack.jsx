const BurgerStack = ({ stack }) => {
  return (
    <>
      <ul>
        {stack.map((ingredient, index) => (
          <li key={index} style={{ backgroundColor: ingredient.color }}>
            {ingredient.name}
            <i className="fa-solid fa-circle-minus"></i>
          </li>
        ))}
      </ul>
    </>
  );
};

export default BurgerStack;

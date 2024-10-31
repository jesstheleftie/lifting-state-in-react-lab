const BurgerStack = (props) => {
  return (
    <ul>
      {props.stack.map((eachStack, index) => {
        return (
          <li key={index} style={{ backgroundColor: eachStack.color }}>
            {eachStack.name}
            <button onClick={() => props.removeFromStack(index)}>x</button>
          </li>
        );
      })}
    </ul>
  );
};

export default BurgerStack;

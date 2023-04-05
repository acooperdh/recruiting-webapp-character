function Attribute({ name, value, modifier, onIncrease, onDecrease }) {
  return (
    <>
      <p>
        {name}: {value}
      </p>
      <p>Modifier: {modifier}</p>
      <button onClick={onIncrease}>+</button>
      <button onClick={onDecrease}>-</button>
    </>
  );
}

export default Attribute;

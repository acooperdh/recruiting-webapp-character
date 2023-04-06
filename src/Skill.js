function Skill({
  name,
  modifier,
  modifierAmount,
  points,
  onIncrease,
  onDecrease,
}) {
  const total = () => {
    if (points === 0) return 0;
    return modifierAmount + points;
  };

  return (
    <>
      <p>
        {name} - points: {points}
        <button onClick={onIncrease}>+</button>
        <button onClick={onDecrease}>-</button>
        modifier ({modifier}): {modifierAmount} total: {total()}
      </p>
    </>
  );
}

export default Skill;

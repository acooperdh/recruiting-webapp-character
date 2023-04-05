function Skill({ name, modifier, modifierAmount, points, character }) {
  const total = () => {
    return modifierAmount + points;
  };

  return (
    <>
      <p>
        {name} - points: {points}
        <button onClick={() => {}}>+</button>
        <button onClick={() => {}}>-</button>
        modifier ({modifier}): {modifierAmount} total: {total()}
      </p>
    </>
  );
}

export default Skill;

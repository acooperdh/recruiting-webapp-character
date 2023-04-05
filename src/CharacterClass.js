import { useEffect, useState } from "react";
function CharacterClass({
  className,
  classRequirements,
  character,
  isSelected,
  onSelect,
}) {
  const [isValid, setIsValid] = useState(false);
  useEffect(() => {
    setIsValid(
      Object.keys(classRequirements).every((attribute) => {
        if (character[attribute] >= classRequirements[attribute]) {
          return true;
        }
        return false;
      })
    );
  }, [character, classRequirements, isValid]);

  return (
    <>
      <div>
        <button
          style={{ all: "unset", color: isValid ? "red" : "white" }}
          onClick={onSelect}
        >
          {className}
        </button>
        {isSelected && (
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
            {Object.keys(classRequirements).map((attribute) => {
              return (
                <div key={attribute}>
                  <p>{attribute}</p>
                  <p>{classRequirements[attribute]}</p>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}

export default CharacterClass;

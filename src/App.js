import "./App.css";

import { ATTRIBUTE_LIST, CLASS_LIST, SKILL_LIST } from "./consts.js";
import { useEffect, useState } from "react";

import Attribute from "./Attribute.js";
import CharacterClass from "./CharacterClass.js";
import Skill from "./Skill.js";

function App() {
  const [points, setPoints] = useState(10);

  const [attributes, setAttributes] = useState({});

  const [skills, setSkills] = useState([]);

  const attributeList = ATTRIBUTE_LIST;
  const classesList = CLASS_LIST;
  const skillList = SKILL_LIST;

  const [selectedClass, setSelectedClass] = useState(null);

  useEffect(() => {
    const newAttributes = {};
    attributeList.forEach((attribute) => {
      newAttributes[attribute] = 0;
    });
    setAttributes(newAttributes);
    setPoints((curr) => curr + 4 * newAttributes["Intelligence"]);
    const newSkills = skillList.map((skill) => {
      return { ...skill, points: 0, total: 0 };
    });

    setSkills(newSkills);
  }, [attributeList, skillList]);

  function increaseAttribute(attribute) {
    setAttributes({
      ...attributes,
      [attribute]: attributes[attribute] + 1,
    });
    setPoints(10 + 4 * (attributes["Intelligence"] + 1));
  }

  function decreaseAttribute(attribute) {
    setAttributes({
      ...attributes,
      [attribute]: attributes[attribute] - 1,
    });
    setPoints(10 + 4 * (attributes["Intelligence"] - 1));
  }

  function increasePoints() {
    setPoints((curr) => curr + 1);
  }

  function decreasePoints() {
    setPoints((curr) => curr + 1);
  }

  function decreaseSkill(skill) {
    const newSkills = skills.map((currentSkill) => {
      if (currentSkill.name === skill.name) {
        return {
          ...currentSkill,
          points: currentSkill.points - 1 >= 0 ? currentSkill.points - 1 : 0,
        };
      }
      return currentSkill;
    });
    setSkills(newSkills);
  }

  function increaseSkill(skill) {
    const newSkills = skills.map((currentSkill) => {
      if (currentSkill.name === skill.name) {
        console.log("this is the skill being updated: ", currentSkill.name);
        return {
          ...currentSkill,
          points:
            currentSkill.points + 1 < 70
              ? currentSkill.points + 1
              : currentSkill.points,
        };
      }
      return currentSkill;
    });
    setSkills(newSkills);
  }

  function selectClass(className) {
    if (selectedClass === className) {
      setSelectedClass(null);
      return;
    }
    setSelectedClass(className);
  }

  function modifier(attribute) {
    if (attributes[attribute] === 10) {
      return 0;
    }
    if (attributes[attribute] % 2 === 0) {
      return (attributes[attribute] - 10) / 2;
    }
    return Math.floor((attributes[attribute] - 10) / 2);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Coding Exercise</h1>
      </header>
      <section className="App-section">
        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              margin: "0 auto",
            }}
          >
            {Object.keys(classesList).map((className) => {
              return (
                <CharacterClass
                  className={className}
                  classRequirements={classesList[className]}
                  character={attributes}
                  isSelected={className === selectedClass}
                  onSelect={() => selectClass(className)}
                  key={className}
                />
              );
            })}
          </div>
          <h2>Points: {points}</h2>
          <h2>Attributes</h2>
          {Object.keys(attributes).map((attribute) => {
            return (
              <Attribute
                name={attribute}
                value={attributes[attribute]}
                modifier={modifier(attribute)}
                onIncrease={() => increaseAttribute(attribute)}
                onDecrease={() => decreaseAttribute(attribute)}
                key={attribute}
              />
            );
          })}
          <h2>Skills</h2>
          {skills.map((skill) => {
            return (
              <Skill
                key={skill.name}
                name={skill.name}
                modifier={skill.attributeModifier}
                modifierAmount={modifier(skill.attributeModifier)}
                points={skill.points}
                onIncrease={() => {
                  console.log("being called");
                  increaseSkill(skill);
                }}
                onDecrease={() => {
                  decreaseSkill(skill);
                }}
              />
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default App;

import Attributes from "./Attributes.js";
import Skills from "./Skills.js";

function Character({ characterInfo }) {
  return (
    <>
      <Attributes characterInfo={characterInfo} />
    </>
  );
}

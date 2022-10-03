import React from "react";
import Rating from "./Rating";

const Skill = ({name, score}) => {
  return (
    <div style={{ display: "flex", width: "100%" }}>
      <li>{name}</li>
      <Rating score={score ? score : 0} />
    </div>
  );
};

export default Skill;

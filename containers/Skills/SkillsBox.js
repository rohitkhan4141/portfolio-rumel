import React from "react";
import SkillsGroup from "./SkillsGroup";

const SkillsBox = ({ categorie }) => {
  const groupOne = categorie.slice(0, 3);
  const groupTwo = categorie.slice(-3);

  return (
    <div className='skills__box'>
      <SkillsGroup group={groupOne} />
      <SkillsGroup group={groupTwo} />
    </div>
  );
};

export default SkillsBox;

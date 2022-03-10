import React from "react";
import SkillsData from "./SkillsData";

const SkillsGroup = ({ group }) => {
  return (
    <div className='skills__group'>
      {group.map((el) => (
        <SkillsData
          key={el.id}
          skillName={el.skillName}
          skillLevel={el.skillLevel}
        />
      ))}
    </div>
  );
};

export default SkillsGroup;

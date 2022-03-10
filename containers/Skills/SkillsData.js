import React from "react";
import { BsShieldFillCheck } from "react-icons/bs";

const SkillsData = ({ skillName, skillLevel }) => {
  return (
    <div className='skills__data'>
      <BsShieldFillCheck className='bxs-badge-check ' />
      <div>
        <h3 className='skills__name'>{skillName}</h3>
        <span className='skills__level'>{skillLevel}</span>
      </div>
    </div>
  );
};

export default SkillsData;

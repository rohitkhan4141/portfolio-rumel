import React from "react";
import SkillsBox from "./SkillsBox";
const technologies = {
  frontend: [
    { id: 1, skillName: "HTML", skillLevel: "Expert" },
    { id: 2, skillName: "CSS", skillLevel: "Expert" },
    { id: 3, skillName: "JavaScript", skillLevel: "Intermediate" },
    { id: 4, skillName: "ReactJs", skillLevel: "Intermediate" },
    { id: 5, skillName: "NextJs", skillLevel: "Intermediate" },
    { id: 6, skillName: "Redux", skillLevel: "Basic" },
  ],
  backend: [
    { id: 1, skillName: "NodeJs", skillLevel: "Intermediate" },
    { id: 2, skillName: "php", skillLevel: "Basic" },
    { id: 3, skillName: "Pyhton", skillLevel: "Intermediate" },
    { id: 4, skillName: "MongoDB", skillLevel: "Basic" },
    { id: 5, skillName: "Firebase", skillLevel: "Intermediate" },
    { id: 6, skillName: "Sanity", skillLevel: "Basic" },
  ],
};

const SkillsContent = ({ categories }) => {
  let type;
  if (categories === "Frontend Technologies") {
    type = <SkillsBox categorie={technologies.frontend} />;
  }
  if (categories === "Backend Technologies") {
    type = <SkillsBox categorie={technologies.backend} />;
  }
  return (
    <div className='skills__content'>
      <h3 className='skills__title'>{categories}</h3>
      {type}
    </div>
  );
};

export default SkillsContent;

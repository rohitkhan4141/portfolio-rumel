import React from "react";
import TitleSection from "../../components/TitleSection";
import SkillsContent from "./SkillsContent";

const Skills = () => {
  return (
    <section className='skills section sec' id='skills'>
      <TitleSection subtitle='My abilities' sectionName='My Experience' />
      <div className='skills__container container grid'>
        <SkillsContent categories={"Frontend Technologies"} />
        <SkillsContent categories={"Backend Technologies"} />
      </div>
    </section>
  );
};

export default Skills;

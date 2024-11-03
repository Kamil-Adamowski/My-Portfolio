import React from "react";
import { SectionHeader } from "../../common/SectionHeader";
import { SkillCategory } from './SkillCategory';
import skillsData  from '../../data/skills.json';
import { iconMap } from '../../common/iconMap';

export const SkillsSection = () => {
  const { skills, graphicSkills } = skillsData;
  return (
    <section className='h-auto px-4 mt-12 bg-light'>
      <div className='flex flex-col'>
        <SectionHeader title="Skills" subText="Skills" />
        <SkillCategory skills={skills} iconMap={iconMap} />
        <hr className="h-px my-6 bg-gray-200 border-0 bg-dark" />
        <SkillCategory skills={graphicSkills} iconMap={iconMap} />
      </div>
    </section>
  );
};

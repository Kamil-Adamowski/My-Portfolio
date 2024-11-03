import React from 'react';
import { SkillItem } from './SkillItem';

interface SkillCategoryProps {
  skills: { name: string, icon: string }[];
  iconMap: { [key: string]: JSX.Element };
}

export const SkillCategory = ({ skills, iconMap }: SkillCategoryProps) => (
  <section className='grid grid-cols-2 gap-2 my-2 md:gap-4 md:grid-cols-4'>
    {skills.map((skill, index) => (
      <SkillItem key={index} name={skill.name} icon={iconMap[skill.icon]} />
    ))}
  </section>
);

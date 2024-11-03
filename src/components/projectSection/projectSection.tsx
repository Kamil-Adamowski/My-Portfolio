import React from 'react'
import { SectionHeader } from '../../common/SectionHeader'
import { ProjectItem } from './projectItem';
import projects from '../../data/projects.json'

export const ProjectSection = () => (
  <section className='h-auto px-4 my-6 bg-light'>
    <div className='flex flex-col'>
      <SectionHeader title="Projects" subText="Development" />
      <div className='mt-6'>
        {projects.map((project) => (
          <ProjectItem 
            key={project.id}
            props={project} 
          />
        ))}
      </div>
    </div>
  </section>
);
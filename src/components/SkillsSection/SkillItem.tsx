import React from 'react'

interface Props {
  name: string
  icon: JSX.Element
}

export const SkillItem = ({ name, icon }: Props) => (
  <article className='flex flex-col items-center justify-start py-14 sm:py-12 xl:flex-row' >
    {icon}
    <h4 className='pl-0 ml-0 text-2xl font-thin text-center xl:pl-4 xl:ml-6'>
      {name}
    </h4>
  </article>
)
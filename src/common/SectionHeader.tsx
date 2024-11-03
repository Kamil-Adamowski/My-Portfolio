import React from 'react'

interface TextProps {
  subText: string
  title: string
}

export const SectionHeader = ({ subText, title }: TextProps) => (
  <div className='flex flex-col items-start justify-between h-full my-4'>
    <h4 className='w-full pb-4 text-2xl font-thin text-center lg:text-left text-dark'>{`<${subText} />`}</h4>
    <h2 className='w-full text-6xl font-bold text-center text-dark lg:text-left'>{title}</h2>
  </div>
)

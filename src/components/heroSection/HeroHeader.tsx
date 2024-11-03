import React from 'react'

interface heroText {
    headingText : string
    strongHeadingText: string
    descriptionText: string
    beforeHeadingText: string
}

export const HeroHeader = ({headingText, strongHeadingText, descriptionText, beforeHeadingText }: heroText) =>  (
  <div className='w-full px-4 my-auto text-center md:text-left'>
    <h3 className='w-full pb-4 text-2xl font-thin text-center lg:text-left text-dark'>{beforeHeadingText}</h3>
    <h1 className='text-5xl text-center text-dark sm:text-6xl lg:text-left md:text-6xl lg:text-6xl xl:text-8xl 2xl:text-9xl'>
        {headingText}<strong>{strongHeadingText}</strong>
    </h1>
    <h2 className='text-2xl font-thin text-center lg:text-left lg:text-2xl sm:text-3xl md:text-3xl text-dark xl:text-5xl'>
        {descriptionText}
    </h2>
  </div>
)
import React from 'react'
import { SocialLinks } from '../common/SocialLinks'
import { HeroHeader } from '../components/heroSection/HeroHeader'

export const ErrorPage = () => (
  <div className='w-full h-full bg-light'>
    <main className='flex flex-col h-auto mx-2 sm:mx-3 md:mx-12 xl:mx-24 2xl:mx-48'>
      <section className='h-screen bg-light'>
        <div className='flex flex-col items-center justify-between h-full py-4'>
          <div className='flex w-full h-5/6'>
            <HeroHeader headingText='' strongHeadingText='PAGE NOT FOUND' descriptionText='' beforeHeadingText="<404 />" />
          </div>
          <div className='flex items-end justify-center w-full py-2 lg:justify-start'>
            <SocialLinks />
          </div>
        </div>
      </section>
    </main>
  </div>
)

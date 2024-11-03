import React from 'react'
import { LinkItem } from './LinkItem'
import { ImBehance2, ImGithub, ImLinkedin } from "react-icons/im";    

export const SocialLinks = () => {
  const iconSize = 'w-10 h-10 md:w-8 md:h-8';
  return (
    <section className='flex'>
      <LinkItem to='https://www.linkedin.com/in/kamil-adamowski01/' ariaLabel='Linkedin' icon={<ImLinkedin className={iconSize} />} />
      <LinkItem to='https://www.behance.net/AdamowskiKamil' ariaLabel='Behance' icon={<ImBehance2 className={iconSize}  />} />
      <LinkItem to='https://github.com/Kamil-Adamowski' ariaLabel='Github' icon={<ImGithub className={iconSize} />} />
    </section>
  )
}
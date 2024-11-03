import React from 'react'
import { SocialLinks } from '../../common/SocialLinks'

export const Footer = () => (
  <footer className='flex-none w-full px-2 my-8' role="footer">
    <div className='flex flex-col items-center md:flex-row'>
      <SocialLinks />
      <div className='w-full pt-10 pl-0 text-center md:text-end md:pl-auto lg:pt-0'>
        <p className='text-lg text-dark'>
          Copyright © {new Date().getFullYear()}, All rights reserved.
        </p>
      </div>
    </div>
  </footer>
)

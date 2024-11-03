import React from 'react';
import ButtonMailto from '../../common/ButtonMailto';
import { MdEmail } from "react-icons/md";

export const Navbar = () => (
  <header className='top-0 z-40 flex-none w-full h-16'>
    <div className='px-4 py-4'>
      <div className='relative flex items-center'>
        <div className='flex-none mr-8'>
          <h1 className='text-4xl font-bold text-dark'>KA</h1>
        </div>
        <nav className='ml-auto' aria-label="Main navigation">
          <ul className='flex space-x-8'>
            <li>
              <ButtonMailto 
                label={
                  <>
                    <p className='hidden md:flex text-dark'>ka.adamowski@gmail.com</p>
                    <MdEmail className='flex w-10 h-10 md:hidden fill-dark' />
                  </>
                }
                mailto="mailto:ka.adamowski@gmail.com"
              />
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
);

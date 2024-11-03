import React from 'react';
import { Link } from 'react-router-dom';

interface LinkItemsProps {
    to: string
    ariaLabel: string
    icon: JSX.Element
}

export const LinkItem = ({ to, icon, ariaLabel }: LinkItemsProps) => (
  <li className='flex items-center justify-center w-full mx-3 mr-3 font-semibold md:mr-6 lg:justify-start text-dark'>
    <Link
    to={to}
    aria-label={ariaLabel}
    rel="noopener noreferrer"
    target="_blank"
    >
      {icon}
    </Link>
  </li>
)
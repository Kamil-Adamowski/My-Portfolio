import React from 'react'
import { Link } from 'react-router-dom';

interface Props {
  props: {
    title: string;
    description: string;
    linkToGithub: string;
  }
}

export const ProjectItem = ({ props }: Props) => (
  <article className='my-6'>
    <div className='py-2'>
      <div className='py-2'>
        <Link rel="noopener noreferrer" target="_blank" to={props.linkToGithub}>
          <h2 className='w-full text-4xl font-bold text-center text-dark md:text-left'>{props.title}</h2>
        </Link>
      </div>
      <div>
        <p className='w-full py-2 text-xl font-thin text-center md:text-left text-dark' >{props.description}</p>
      </div>
    </div>
    <div>
      <hr className="h-px my-8 bg-gray-200 border-0 bg-dark" />
    </div>
  </article>
)
import React from 'react'
import { HeroHeader } from './heroHeader';
import { SocialLinks } from '../../common/SocialLinks';

export const HeroSection = () => (
	<section className='h-[calc(100vh-64px)] bg-light'>
		<div className='flex flex-col items-center justify-between h-full py-4'>
			<div className='flex w-full h-5/6'>
				<HeroHeader headingText={"I'm "} strongHeadingText='Kamil Adamowski' descriptionText='Front-end Developer and Graphic Designer' beforeHeadingText='<Hello world />' />
			</div>
			<div className='flex items-end justify-center w-full py-2 lg:justify-start'>
				<SocialLinks />
			</div>
		</div>
	</section>
);

import React from 'react'
import { Navbar } from '../components/navbar/Navbar';
import { HeroSection } from '../components/heroSection/HeroSection';
import { SkillsSection } from '../components/SkillsSection/skillsSection';
import { ProjectSection } from '../components/projectSection/projectSection';
import { Footer } from '../components/footer/Footer';

export const Homepage = () => (
  <div className='w-full h-full bg-light'>
    <main className='flex flex-col h-auto mx-2 sm:mx-3 md:mx-12 xl:mx-24 2xl:mx-48'>
      <Navbar />
      <HeroSection />
      <SkillsSection />
      <ProjectSection />
      <Footer />
    </main>
  </div>
)
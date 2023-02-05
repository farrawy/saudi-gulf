import React from 'react'
import SectionTitle from './SectionTitle'
import ProjectCard from './ProjectCard'

const Projects = () => {
  return (
    <div className='bg-background  sm:px-48 sm:py-10 p-10 text-white'>
      <SectionTitle title='Our Projects' />
      <div>
        <ProjectCard
          title='Modern Oasis'
          description='A complete renovation and remodel of a dated 1980s beach house into a modern, sustainable, and energy-efficient oasis. The design focus was to incorporate clean lines and natural materials, such as bamboo flooring and recycled glass countertops, to create a seamless indoor-outdoor living space. The renovation also included a new HVAC system, improved insulation, and the addition of solar panels to reduce energy consumption. The end result is a luxurious and eco-friendly retreat that provides the owners with a peaceful escape from the city.'
          image='/src/assets/images/project-1.jpg'
        />
      </div>
    </div>
  )
}

export default Projects

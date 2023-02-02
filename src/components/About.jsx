import React from 'react'
import AboutBox from './AboutBox'
import SectionTitle from './SectionTitle'

const about = [
  {
    primary: '10+',
    secondary: 'years',
  },
  {
    primary: '120+',
    secondary: 'projects',
  },
  {
    primary: '100+',
    secondary: 'clients',
  },
  {
    primary: '400+',
    secondary: 'workers',
  },
]

const About = () => {
  return (
    <div className='p-6 bg-background'>
      <SectionTitle title='About Us' />
      <div className='flex flex-col sm:flex-row sm:justify-center '>
        <div className='about-header sm:w-full md:ml-[50%] m-6 flex flex-col'>
          <h2 className='text-white text-3xl font-bold '>
            Building a Better Future with Saudi Gulf Construction
          </h2>
          <p className='text-white text-lg mb-4 '>
            At Saudi Gulf Construction, we believe in building a better future
            through innovative and sustainable construction solutions. Our team
            of experts is dedicated to delivering top-quality projects, on time
            and within budget, while adhering to the highest standards of safety
            and efficiency. Whether it's a residential development, commercial
            building, or infrastructure project, we are committed to exceeding
            our clients' expectations and contributing to the growth and
            prosperity of the communities we serve. Join us in building a better
            future with Saudi Gulf Construction.
          </p>
          <button className='text-background bg-white px-6 py-3 duration-300 hover:bg-dark-gold hover:text-white w-40 rounded mr-auto '>
            Read More
          </button>
        </div>
      </div>

      <div className='grid sm:grid-cols-4 gap-4 grid-cols-2'>
        {about.map((about) => (
          <AboutBox primary={about.primary} secondary={about.secondary} />
        ))}
      </div>
    </div>
  )
}

export default About

import React from 'react'
import SectionTitle from './SectionTitle'
import Card from './Card'

const services = [
  {
    image: '/src/assets/images/service-1.png',
    header: 'Building Construction',
    subheader:
      "Constructing Tomorrow's Landmarks Today: The Art of Building Construction",
  },
  {
    image: '/src/assets/images/service-2.png',
    header: 'House Renovation',
    subheader: 'Revamping Your Home for a Better Living Experience',
  },
  {
    image: '/src/assets/images/service-3.png',
    header: 'Architechture Design',
    subheader:
      'Bringing Your Vision to Life: Innovative Architecture Design Solutions',
  },
  {
    image: '/src/assets/images/service-4.png',
    header: 'Material Supply',
    subheader: 'Your One-Stop Shop for Top-Quality Building Materials',
  },
  {
    image: '/src/assets/images/service-5.png',
    header: 'Construction Consultant',
    subheader: 'Expert Advice and Project Management Services',
  },
  {
    image: '/src/assets/images/service-6.png',
    header: 'Interior Design',
    subheader: 'Creating Beautiful Living Spaces with Expert Interior Design',
  },
  {
    image: '/src/assets/images/service-7.png',
    header: 'Building Maintenance',
    subheader:
      'Enhancing Longevity and Aesthetic Appeal: Comprehensive Building Maintenance Solutions',
  },
  {
    image: '/src/assets/images/service-8.png',
    header: 'Building Renovation',
    subheader:
      'Elevating Your Living Space with Professional Building Renovation Services',
  },
]

const Services = () => {
  return (
    <div className='bg-light-background  sm:px-48 sm:py-10 p-10 text-black'>
      <SectionTitle title='Our Services' />
      <div className='flex flex-col items-center'>
        <div className='grid xl:grid-cols-4 gap-4 grid-cols-1 md:grid-cols-2'>
          {services.map((service) => (
            <Card
              image={service.image}
              header={service.header}
              subheader={service.subheader}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Services

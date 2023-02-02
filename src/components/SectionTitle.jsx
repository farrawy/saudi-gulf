import React from 'react'

const SectionTitle = ({ title }) => {
  return (
    <div className='flex space-x-2 py-5'>
      <div className='w-2 bg-gold ' />
      <h1 className='text-4xl'>{title}</h1>
    </div>
  )
}

export default SectionTitle

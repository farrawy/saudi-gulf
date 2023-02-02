import React from 'react'

const AboutBox = ({ primary, secondary }) => {
  return (
    <div className='bg-light-gray p-6 w-40 items-center justify-center text-center flex flex-col sm:w-full cursor-pointer rounded'>
      <div className='duration-300 hover:scale-[1.1]'>
        <h2 className='text-2xl text-black font-bold'>{primary}</h2>
        <h3 className='text-xl text-black font-light'>{secondary}</h3>
      </div>
    </div>
  )
}

export default AboutBox

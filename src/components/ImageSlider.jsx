import { Button, ButtonGroup } from '@mui/material'
import React, { useState } from 'react'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'

function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const images = [
    {
      src: '/src/assets/images/home-slide-1.jpg',
      header: 'Building Your Future',
      subheader:
        'Experience the Power of Collaboration and Expertise at Saudi Gulf Construction',
      buttonText: 'Get Started',
    },
    {
      src: '/src/assets/images/home-slide-2.jpg',
      header: 'Slide 2 Header',
      subheader: 'Slide 2 Subheader',
      buttonText: 'Get Started',
    },
    {
      src: '/src/assets/images/home-slide-3.jpg',
      header: 'Slide 3 Header',
      subheader: 'Slide 3 Subheader',
      buttonText: 'Get Started',
    },
  ]

  const handlePrev = () => {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1)
  }

  const handleNext = () => {
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1)
  }

  return (
    <div className='relative'>
      <img
        src={images[currentIndex].src}
        alt='Slider Image'
        className='w-full h-full object-cover object-center'
      />

      <div className='absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center bg-white bg-opacity-30 p-5'>
        <div className='w-1/2 sm:ml-24 '>
          <h2 className='text-black font-bold sm:text-5xl text-3xl xl:text-6xl'>
            {images[currentIndex].header}
          </h2>

          <p className='text-black mb-4 w-full sm:w-2/3 md:w-2/3 sm:text-lg text-base font-light  '>
            {images[currentIndex].subheader}
          </p>
          {/* <button className='text-white bg-background px-6 py-3 w-40 duration-300 hover:bg-gold hover:text-black rounded '>
            {images[currentIndex].buttonText}
          </button> */}
        </div>
      </div>

      <ButtonGroup
        variant='text'
        aria-label='outlined button group '
        className='absolute bottom-0 right-0 bg-background  '
      >
        <Button onClick={handlePrev}>
          <ArrowBackIosIcon className='text-white' />
        </Button>
        <Button onClick={handleNext}>
          <ArrowForwardIosIcon className='text-white' />
        </Button>
      </ButtonGroup>
    </div>
  )
}

export default ImageSlider

import React from 'react'

const date = new Date()
const Footer = () => (
  <footer className='bg-background text-white py-10'>
    <div className='container mx-auto flex flex-wrap'>
      <div className='w-full md:w-1/2 text-center md:text-left'>
        <ul className='flex items-center'>
          <li className='mr-6'>
            <a href='#home' className='text-gray-400 hover:text-white'>
              Home
            </a>
          </li>
          <li className='mr-6'>
            <a href='#about' className='text-gray-400 hover:text-white'>
              About
            </a>
          </li>
          <li className='mr-6'>
            <a href='#services' className='text-gray-400 hover:text-white'>
              Services
            </a>
          </li>
          <li className='mr-6'>
            <a href='#projects' className='text-gray-400 hover:text-white'>
              Projects
            </a>
          </li>
          <li className='mr-6'>
            <a href='#contact' className='text-gray-400 hover:text-white'>
              Contact
            </a>
          </li>
          {/* <li className='mr-6'>
            <a href='#blogs' className='text-gray-400 hover:text-white'>
              Blogs
            </a>
          </li> */}
        </ul>
      </div>
      <div className='w-full md:w-1/2 text-center md:text-right'>
        <p>
          Email:{' '}
          <a
            href='mailto:e.alfarra@saudi-gulf.com'
            className='text-gray-400 hover:text-white'
          >
            e.alfarra@saudi-gulf.com
          </a>
        </p>
        <p>
          Phone:{' '}
          <a
            href='tel:+966 595951200'
            className='text-gray-400 hover:text-white'
          >
            +966 595951200
          </a>
        </p>
      </div>
    </div>
    <div className='text-center py-4'>
      <p>
        Copyright © {date.getFullYear()}{' '}
        {/* https://ahmed-elfarra.netlify.app */}
        <a
          href='https://ahmed-elfarra.netlify.app'
          target='_blank'
          className='text-gray-400 hover:text-white hover:underline'
        >
          Ahmed Elfarra
        </a>
        , All rights reserved.
      </p>
    </div>
  </footer>
)

export default Footer

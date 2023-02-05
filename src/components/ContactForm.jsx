import React, { useState } from 'react'
import { sendForm } from './emailJS'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [formSent, setFormSent] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setLoading(true)
    sendForm(formData)
      .then(() => {
        setFormSent(true)
        setLoading(false)
      })
      .catch((error) => {
        console.error(error)
        setLoading(false)
      })
  }

  return (
    <div className=' w-full sm:w-1/2'>
      {formSent ? (
        <p className='text-green-500'>
          Your message has been sent successfully!
        </p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className='mb-4'>
            <label className='block text-white font-medium mb-2' htmlFor='name'>
              Name
            </label>
            <input
              className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-background leading-tight focus:outline-none focus:bg-white focus:border-dark-gold'
              id='name'
              type='text'
              name='name'
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className='mb-4'>
            <label
              className='block text-white font-medium mb-2'
              htmlFor='email'
            >
              Email
            </label>
            <input
              className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-background leading-tight focus:outline-none focus:bg-white focus:border-dark-gold'
              id='email'
              type='email'
              name='email'
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className='mb-4'>
            <label
              className='block text-white font-medium mb-2'
              htmlFor='phone'
            >
              Phone
            </label>
            <input
              className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-background leading-tight focus:outline-none focus:bg-white focus:border-dark-gold'
              id='phone'
              type='tel'
              name='phone'
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          <div className='mb-4'>
            <label
              className='block text-white font-medium mb-2'
              htmlFor='message'
            >
              Message
            </label>
            <textarea
              className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-background leading-tight focus:outline-none focus:bg-white focus:border-dark-gold h-32'
              id='message'
              name='message'
              value={formData.message}
              onChange={handleChange}
            />
          </div>
          <button
            className={
              "bg-dark-gold hover:bg-dark-gold-hover text-white font-medium py-2 px-4 rounded focus:outline-none focus:shadow-outline ${ loading ? 'cursor-not-allowed' : '' }"
            }
            type='submit'
            disabled={loading}
          >
            {loading ? 'Sending...' : 'Send'}
          </button>
        </form>
      )}
    </div>
  )
}

export default ContactForm

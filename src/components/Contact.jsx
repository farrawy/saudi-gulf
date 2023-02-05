// import { Box } from '@mui/material'
// import React from 'react'
// import ContactForm from './ContactForm'
// import Map from './Map'
// import SectionTitle from './SectionTitle'

// const Contact = () => {
//   return (
//     <div className='sm:px-48 sm:py-10 p-10 bg-light-background'>
//       <SectionTitle title='Contact Us' />

//       <div className='flex'>
//         <div className='w-1/2'>
//           <Map />
//         </div>
//         <ContactForm />
//       </div>
//     </div>
//   )
// }

// export default Contact

import { Box } from '@mui/material'
import React from 'react'
import ContactForm from './ContactForm'
import Map from './Map'
import SectionTitle from './SectionTitle'

const Contact = () => {
  return (
    <div className='sm:px-48 sm:py-10 p-10 bg-light-background'>
      <SectionTitle title='Contact Us' />
      <div className='flex flex-wrap sm:space-x-0 '>
        <div className='w-full sm:w-1/2 '>
          <Map />
        </div>
        <ContactForm className='w-full sm:w-1/2' />
      </div>
    </div>
  )
}

export default Contact

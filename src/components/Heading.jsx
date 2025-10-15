import React from 'react'

const Heading = ({heading, subHeading}) => {
  return (
    <div className='flex flex-col items-center mt-3'>
      <h1 className='text-3xl text-gray-100 font-semibold font-serif'>{heading}</h1>
      <p className='w-64 text-center font-semibold text-gray-400'>{subHeading}</p>
    </div>
  )
}

export default Heading

// Register to access all the services, products and explore the native lannguages and culture
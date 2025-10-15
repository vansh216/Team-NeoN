import React from 'react'
import { Link } from 'react-router-dom'

const Footer = ({main, to, name}) => {
  return (
    <div>
      <h1 className='text-gray-100'>{main}
        <Link to={to} className='hover:underline transition-all duration-500 text-gray-200'>
        {name}
        </Link>
      </h1>
    </div>
  )
}

export default Footer

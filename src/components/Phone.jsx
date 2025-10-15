import React from 'react'
import PhoneLogo from '../svg/PhoneLogo'
import { Link } from 'react-router-dom'

const Phone = () => {
  return (
    <div className='w-10 h-10 rounded-full border-1 border-purple-700 flex justify-center items-center hover:border-gray-100 transition-colors duration-300'>
        <Link>
        <PhoneLogo />
        </Link>

    </div>
  )
}

export default Phone
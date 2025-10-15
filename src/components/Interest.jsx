import React from 'react'

const Interest = () => {
  return (
    <div className=' flex gap-0.5  text-gray-100 flex-col'>
        <label className='text-purple-800 font-semibold text-xl' htmlFor="interest">Your interests</label>
       <textarea className='border-1 w-[500px] outline-none px-2 py-1 border-purple-600 rounded-md text-gray-300' name="interest" id="interest" placeholder='About your culture and native lannguages...'></textarea>
    </div>
  )
}

export default Interest
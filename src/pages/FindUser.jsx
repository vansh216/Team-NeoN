import React from 'react'
import ResNavbar from '../components/Navbar'
import User from '../components/User'

const FindUser = () => {
  return (
    <div className='bg-gradient-to-t from-zinc-950 via-black to-gray-950 w-full min-h-screen'>
        <div className='sticky top-0'>
            <ResNavbar />
        </div>
        <div className='text-gray-100 mt-8'>
            <h1 className='text-5xl bg-gradient-to-b from-purple-500 to-purple-100 text-transparent bg-clip-text font-semibold text-center'>
                Explore your interest and connect with people
            </h1>
        </div>
        <div className=' w-[80%] text-gray-100 m-auto'>
        <User />
        </div>

    </div>
  )
}

export default FindUser
import React from 'react'
import HeaderIn from './HeaderIn'
import NavbarIn from './NavbarIn'
import MainIn from './MainIn'

const Marathi = () => {
  return (
    <div className='bg-gradient-to-t from-zinc-950 via-black to-gray-950 min-h-screen w-full flex justify-center items-center'>
       <div className='w-full h-screen'>
         <div>
            <HeaderIn heading={"Marathi Group"}  subHeading={"Join this club to elevate your interest in tamil language and south culture"} image={"/Marathi.webp"}/>
        </div>
        <div>
            <NavbarIn />
        </div>
        <div>
            <MainIn />
        </div>
       </div>
    </div>
  )
}

export default Marathi
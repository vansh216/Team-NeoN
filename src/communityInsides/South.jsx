import React from 'react'
import HeaderIn from './HeaderIn'
import NavbarIn from './NavbarIn'
import MainIn from './MainIn'

const South = () => {
  return (
    <div className='bg-gradient-to-t from-zinc-950 via-black to-gray-950 h-screen w-full flex justify-center items-center'>
       <div className='w-full h-screen'>
         <div>
            <HeaderIn heading={"South Cultural Commmunity"}  subHeading={"Know about the south culture and join to meet us"} image={"/southIndian.webp"}/>
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

export default South
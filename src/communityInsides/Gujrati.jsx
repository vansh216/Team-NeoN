import React from 'react'
import HeaderIn from './HeaderIn'
import NavbarIn from './NavbarIn'
import MainIn from './MainIn'

const Gujrati = () => {
  return (
    <div className='bg-gradient-to-t from-zinc-950 via-black to-gray-950 min-h-screen w-full flex justify-center items-center'>
       <div className='w-full h-screen'>
         <div>
            <HeaderIn heading={"Gujrati Lang Hub"}  subHeading={"Add Gujrati culture to your mind and learn languages efficiently by group discussing"} image={"/Gujrat.webp"}/>
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

export default Gujrati
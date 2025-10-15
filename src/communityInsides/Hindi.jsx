import React from 'react'
import HeaderIn from './HeaderIn'
import NavbarIn from './NavbarIn'
import MainIn from './MainIn'

const Hindi = () => {
  return (
    <div className='bg-gradient-to-t from-zinc-950 via-black to-gray-950 min-h-screen w-full flex justify-center items-center'>
       <div className='w-full h-screen'>
         <div>
            <HeaderIn heading={"Hindi Cultural mela"}  subHeading={"Join this to about hindi and it's history.Get weekly mocks and quizes and all"} image={"/hindi.webp"}/>
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

export default Hindi
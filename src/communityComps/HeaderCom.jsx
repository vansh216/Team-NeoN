
import React from 'react'

const HeaderCom = () => {
  return (
    <div className="w-[90%] sm:w-[80%] m-auto rounded-lg min-h-48 border-2 border-purple-800 grid grid-cols-1 md:grid-cols-2 overflow-hidden">
      
    
      <div className="p-5 flex flex-col gap-3 justify-center">
        <h1 className="text-xl text-gray-100 sm:text-2xl">Upcoming...</h1>
        <div className="text-2xl text-gray-100 sm:text-3xl md:text-4xl font-semibold">
          Punjabi Language Adda
        </div>
        <p className="text-base sm:text-lg text-gray-200">
          Join the celebration of the Punjabi language and culture with this majestic community
        </p>
      </div>

      
      <div className="bg-green-400 bg-[url('/cult.webp')] bg-center bg-cover min-h-40 md:min-h-full rounded-b-lg md:rounded-r-lg md:rounded-b-none">
      </div>
    </div>
  )
}

export default HeaderCom

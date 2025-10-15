import React from 'react'

const SignupPopup = () => {
  return (
    <div className=' w-full h-screen bg-gray-950'>
        <div className='flex justify-center items-center h-screen w-full bg-gray-900/20 backdrop-blur-lg'>
            <div className='w-96 h-72 bg-gray-900/20 backdrop-blur-lg shadow-2xs relative border-1 border-purple-600  rounded-2xl flex flex-col justify-center items-center'>
                <div className='mb-5'>
                    <img src="/cross.png" className='w-10 absolute top-2 right-2 cursor-pointer hover:scale-105 transition-all duration-500' alt="" />
                </div>

                <div>
                    <h1 className='text-4xl text-center text-gray-100'>Oops... 😢You aren't signed up!</h1>
                </div>
                <div className='mt-2 w-80'>
                    <h1 className='text-2xl text-center text-gray-300'>Please, create your account first to proceed</h1>
                </div>
                <div className='mt-5'>
                    <button className='bg-gradient-to-l from-pink-500 to-purple-500 rounded-sm py-2 px-5 w-40 font-semibold hover:to-pink-500 hover:from-purple-500 hover:scale-105 transition-all duration-300 cursor-pointer'>Sign up</button>
                </div>

            </div>

        </div>

    </div>
  )
}

export default SignupPopup
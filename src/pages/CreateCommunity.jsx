import React from 'react'
import { Link } from 'react-router-dom'

const CreateCommunity = () => {


  return (


<div className="min-h-screen w-full m-0 p-0 bg-gradient-to-t from-[#09090b] via-[#000000] to-[#0f0f0f] flex flex-col items-center text-white font-poppins">
<div className="absolute bg-[url('/formBG.png')] bg-center bg-cover top-0 left-0 w-full h-full overflow-x-hidden z-0 pb-8 px-7">
   

  <div className="w-full min-h-screen flex flex-col items-center gap-[10px] relative z-1">
   
    <div>
      <h1 className="text-[3.75rem] text-center font-semibold bg-gradient-to-b from-[#a855f7] to-[#e9d5ff] bg-clip-text text-transparent mt-1 m-4">Create your own community</h1>
      <div className="flex justify-center">
        <p className="text-[1.25rem] text-gray-200 text-center w-[490px] ">
          Build and lead your community, spreading your culture across the country
        </p>
      </div>
    </div>

   
    <div className="p-5 rounded-[1rem] bg-[#09090b] border border-[#7e22ce] mt-2.5 shadow-[0_0_8px_#7e22ce] transition-all duration-300 hover:scale-[1.01] hover:shadow-[0_0_8px_2px_#7e22ce]">
      <div className="flex flex-col gap-3">
        

        <div className="flex flex-col gap-1">
          <label className="text-[1.25rem] text-[#6b21a8] font-semibold mb-1" htmlfor="">Community Name</label>
          <input className="border border-[#7e22ce] bg-[#09090b] outline-none text-[#d1d5db] p-2 rounded-[0.5rem] w-[24rem] resize-none transition-all duration-300 focus:border-[#7e22ce] focus:shadow-[0_0_5px_#7e22ce] focus:scale-[1.01]" type="text" placeholder="name" required />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-[1.25rem] text-[#6b21a8] font-semibold mb-1" htmlfor="">Description of the community</label>
          <textarea className="h-[6rem] border border-[#7e22ce] bg-[#09090b] outline-none text-[#d1d5db] p-2 rounded-[0.5rem] w-[24rem] resize-none transition-all duration-300 focus:border-[#7e22ce] focus:shadow-[0_0_5px_#7e22ce] focus:scale-[1.01]"
            name="desc"
            placeholder="Describe community..."
            required
          ></textarea>
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-[1.25rem] text-[#6b21a8] font-semibold mb-1" htmlfor="">Features</label>
          <div className="flex flex-col gap-[10px]">
          <input className="border border-[#7e22ce] bg-[#09090b] outline-none text-[#d1d5db] p-2 rounded-[0.5rem] w-[24rem] resize-none transition-all duration-300 focus:border-[#7e22ce] focus:shadow-[0_0_5px_#7e22ce] focus:scale-[1.01]" type="text" placeholder="Feature 1" required />
          <input className="border border-[#7e22ce] bg-[#09090b] outline-none text-[#d1d5db] p-2 rounded-[0.5rem] w-[24rem] resize-none transition-all duration-300 focus:border-[#7e22ce] focus:shadow-[0_0_5px_#7e22ce] focus:scale-[1.01]" type="text" placeholder="Feature 2" required />
          <input className="border border-[#7e22ce] bg-[#09090b] outline-none text-[#d1d5db] p-2 rounded-[0.5rem] w-[24rem] resize-none transition-all duration-300 focus:border-[#7e22ce] focus:shadow-[0_0_5px_#7e22ce] focus:scale-[1.01]" type="text" placeholder="Feature 3" required />
          </div>
        </div>
      </div>

      <div className="h-[4rem] flex justify-center items-center mt-4">
        <a href="/" className="bg-gradient-to-r from-[#db2777] to-[#9333ea] w-[15rem] flex justify-center items-center rounded-[0.5rem] p-2 text-white no-underline font-medium transition-all duration-300 hover:shadow-[0_0_7px_#7e22ce]">Create community</a>
      </div>
    </div>
  </div>
</div>
</div>
  )
}

export default CreateCommunity

 






    // <div className='min-h-screen w-full bg-gradient-to-t from-zinc-950 via-black to-gray-950'>
    //     <div className='w-full min-h-screen flex items-center flex-col gap-4'>
    //         //! starting
    //         <div>
    //             <h1 className='text-6xl text-center bg-gradient-to-b from-purple-500 to-purple-100 text-transparent bg-clip-text font-semibold'>Create your own community</h1>
    //            <div className='flex justify-center mt-3'>

    //             <p className='text-xl text-gray-200 text-center w-[600px]'>Create your community and manage your community itselt by your choice and spread your culture all over the country</p>
    //            </div>
    //         </div>

    //         //! inputFields
           
    //         <div className='p-5 rounded-2xl border-1 border-purple-700'>
    //            <form onSubmit={handleSubmit} action="
               
    //            ">

    //               <div className="create flex flex-col gap-3">
               
    //             <div className='flex flex-col gap-1'>
    //                 <label className='text-xl text-purple-800 font-semibold' htmlFor="">Community Name</label>
    //                 <input className='border-purple-700 w-96 border-1 outline-none text-gray-300 p-2 rounded-lg' type="text" placeholder='name' required/>
    //             </div>

    //             <div className='flex flex-col gap-1'>
    //                 <label className='text-xl text-purple-800 font-semibold' htmlFor="">Description of the community</label>
    //                  <textarea className='border-1 resize-none outline-none border-purple-700 w-96 h-24 text-gray-300 p-2 rounded-lg' name="about" id="about" placeholder='Describe community...' required></textarea>
                    

    //             </div>
    //         </div>
    //            </form>

    //         <div className=" h-16 flex justify-center items-center">
               
    //            <Link to={"/"} className='bg-gradient-to-r from-pink-600 to-purple-600 w-60 flex justify-center items-center rounded-lg p-2'>
    //            Create community
    //            </Link>

    //         </div>
    //         </div>

        
    //     </div>

    // {/* </div> */}
import React, { useRef } from 'react'
import People from '../svg/People'
import { useGSAP } from '@gsap/react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger);
const CardCom = ({image, mainHeading, subHeading, number, first, second, third, to}) => {

  const cardRef = useRef();
  useGSAP(() => {
    gsap.from(cardRef.current, {
     
    opacity:0,
      scale:0,
      duration:1,
      scrollTrigger:{
        trigger: cardRef.current,
        scroller: "body",
        start: "top 80%",
        end: "top 40%",
        scrub:true
      }
    
    })
  })

  return (
    <div className=''>
    <div ref={cardRef} className='pricingCard w-64 min-h-96 rounded-lg border-2 hover:scale-105 transition-all duration-300 border-purple-800 inset-shadow-stone-500'>
        <div className="pic w-full h-36 bg-center bg-cover rounded-t-md"
        style={{ backgroundImage: `url(${image})` }}>
           
        </div>
       <div className='flex flex-col items-center'>
         <div className="about flex flex-col items-center justify-center mt-2">
            <h1 className='text-2xl text-gray-100 font-semibold max-w-56 '>{mainHeading}</h1>
            <p className='text-center text-gray-200 text-md max-w-56'>{subHeading}</p>
        </div>
        <div className="features grid grid-cols-2 w-56 gap-2 mt-4">
          <div className='border-1 border-purple-800 text-gray-100 hover:border-gray-100 w-24 h-6 rounded-3xl flex items-center justify-center'>#{first}</div>
          <div className='border-1 border-purple-800 text-gray-100 hover:border-gray-100 w-24 h-6 rounded-3xl flex items-center justify-center'>#{second}</div>
          <div className='border-1 border-purple-800 text-gray-100 hover:border-gray-100 w-24 h-6 rounded-3xl flex items-center justify-center'>#{third}</div>
        </div>
        <div className='footer border-1 border-purple-800 w-56 h-11 rounded-md mt-5 mb-2'>
            <div className='people flex items-center px-5 h-full justify-between'>
              <div className='flex gap-1 text-gray-100'>
                <People />
              {number}
              </div>
            <div className="join">
          <button className='bg-gradient-to-r from-pink-700 to-purple-600 h-8 rounded-full w-20 hover:scale-105 cursor-pointer'><Link className='h-7 w-18' to={to}>Join</Link></button>
            </div>
            </div>
        </div>
       </div>

    </div>
    </div>
  )
}

export default CardCom

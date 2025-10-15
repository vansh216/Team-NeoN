import React from 'react'

import Hero from '../components/Hero'
import FeaturesPage from './FeaturesPage'

import PricingSection from '../components/PricingCard'
import Community from './Community'
import MainFooter from '../components/MainFooter'
import { Link } from 'react-router-dom'
import ResNavbar from '../components/Navbar'

const LandingPage = () => {
  return (
    <div className='bg-gradient-to-t from-zinc-950 via-black to-gray-950 bg-center bg-cover bg-fixed min-h-screen w-full'>

    <div className='w-full  min-h-screen z-10'>

        <ResNavbar />
        
      <section id='home'>
        <Hero />

      </section>
     

        <section id='features'>
        <FeaturesPage />
        </section>
          <section id='community'>
            <Community />
          </section>
          
          <section id='pricing'>

        <PricingSection />
          </section>

      
          <div className="border p-5 text-gray-100 flex flex-col md:flex-row justify-between border-purple-600 w-[90%] md:w-[80%] m-auto rounded-2xl h-auto md:h-[300px]">

  <div className="flex flex-col gap-3 text-center md:text-left">
    <h1 className="bg-gradient-to-b from-purple-500 to-purple-100 text-transparent bg-clip-text text-4xl md:text-6xl font-semibold">
      Join communities & learn
    </h1>
    <h2 className="text-2xl md:text-5xl bg-gradient-to-b from-purple-500 to-purple-100 text-transparent bg-clip-text font-semibold">
      Reach the people to connect them
    </h2>

    <div className="mt-8 md:mt-12 w-full flex justify-center md:justify-start">
      <Link to={"/find-people"} className="bg-gradient-to-r from-pink-600 to-purple-600 py-3 px-6 text-gray-950 rounded-lg text-sm md:text-base">
        Connect with People
      </Link>
    </div>
  </div>
  <div className="mt-8 md:mt-0 flex justify-center md:justify-end">
    <img
      className="w-[250px] md:w-[418px] object-contain"
      src="/last.png"
      alt="community illustration"
    />
  </div>
</div>


          <div>
            <MainFooter />
          </div>

  
    </div>
    </div>
  )
}

export default LandingPage

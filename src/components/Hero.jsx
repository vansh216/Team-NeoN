import { Link } from "react-router-dom";
import {useGSAP} from "@gsap/react"
import gsap from "gsap";

 function Hero() {

  useGSAP(() => {
      gsap.from(".heading", {
        x: -600,
        duration: 1.5,
        opacity:0,
        scale: 0
      }),
      gsap.from(".image", {
        scale:0,
        opacity: 0,
        duration:1.5
      }),
gsap.from(".subHeading", {
  x: 600,
  scale: 0.5,
  opacity:0,
  duration: 1.5
}),
gsap.from(".button", {
y: 200,
scale: 0,
opacity:0,
duration:1.5
})
  })

  

  return (
    <div className="w-full min-h-screen px-6 sm:px-10 md:px-16">
      <div className="w-full flex flex-col md:flex-row justify-evenly items-center p-6 md:p-16">
        <div className="text-center md:text-left">
          <div className="heading ">
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-semibold bg-gradient-to-b from-purple-500 to-purple-100 text-transparent bg-clip-text">
              Language and
            </h1>
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-semibold bg-gradient-to-b from-purple-500 to-purple-100 text-transparent bg-clip-text">
              Cultural Exchange
            </h1>
          </div>

          <div className="subHeading mt-4">
            <p className="text-lg sm:text-xl md:text-3xl lg:text-4xl text-gray-100">
              Learn and teach each other and
            </p>
            <p className="text-lg sm:text-xl md:text-3xl lg:text-4xl text-gray-100">
              join communities
            </p>
          </div>

          <div className="button">
            <button className="text-base sm:text-lg md:text-xl py-2 px-6 sm:px-8 md:px-10 text-gray-100 bg-purple-700 mt-6 sm:mt-8 rounded-md">
              <Link to={"/signup"}>Get Started</Link>
            </button>
          </div>
        </div>

        <div className="flex justify-center items-center mt-10 md:mt-0">
          <div className="image h-56 w-56 sm:h-72 sm:w-72 md:h-80 md:w-80 lg:h-96 lg:w-96 bg-[url('/main.jpg')] bg-center bg-cover rounded-3xl"></div>
        </div>
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 py-10">
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 px-6 md:px-10">
          <div className=" bg-[url('/main2.jpg')] bg-cover bg-center h-40 w-40 sm:h-52 sm:w-52 md:h-60 md:w-60 rounded-full"></div>
          <div className="flex flex-col gap-2 text-center sm:text-left">
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-100">
                Learn and
              </h1>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-100">
                Teach
              </h1>
            </div>
            <div>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-100">
                Find language
              </p>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-100">
                partner and
              </p>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-100">
                exchange language
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 px-6 md:px-10">
          <div className=" bg-[url('/namee3.png')] bg-cover bg-center h-40 w-40 sm:h-52 sm:w-52 md:h-60 md:w-60 rounded-full"></div>
          <div className="flex flex-col gap-2 text-center sm:text-left">
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-100">
                Join
              </h1>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-100">
                Communities
              </h1>
            </div>
            <div>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-100">
                Participate in cultural
              </p>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-100">
                events and meet
              </p>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-100">
                new people
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
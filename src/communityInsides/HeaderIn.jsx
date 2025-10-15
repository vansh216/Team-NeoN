// import React from 'react'

// const HeaderIn = ({heading, subHeading, image}) => {
//   return (
//     <div className='w-[70%] flex gap-5 p-3 h-36 m-auto rounded-t-2xl mt-10 border-2 border-purple-800'>
//         <div className='logo  w-[30%] h-full bg-cover bg-center rounded-l-2xl' style={{ backgroundImage: `url(${image})` }}></div>
//         <div className="content p-5">
//             <h1 className='text-4xl text-gray-100 font-semibold'>{heading}</h1>
//             <p className='text-xl mt-3 text-gray-200'>{subHeading}</p>
//         </div>
      
//     </div>
//   )
// }

// export default HeaderIn


import React from 'react';

const HeaderIn = ({ heading, subHeading, image }) => {
  return (
    <div className="w-[90%] sm:w-[80%] md:w-[70%] flex flex-col md:flex-row gap-4 md:gap-5 p-3 h-auto md:h-36 m-auto rounded-t-2xl mt-10 border-2 border-purple-800">
    
      <div
        className="logo w-full md:w-[30%] h-40 md:h-full bg-cover bg-center rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none"
        style={{ backgroundImage: `url(${image})` }}
      ></div>

     
      <div className="content p-4 flex flex-col justify-center text-center md:text-left">
        <h1 className="text-2xl sm:text-3xl md:text-4xl text-gray-100 font-semibold">
          {heading}
        </h1>
        <p className="text-base sm:text-lg md:text-xl mt-2 md:mt-3 text-gray-200">
          {subHeading}
        </p>
      </div>
    </div>
  );
};

export default HeaderIn;

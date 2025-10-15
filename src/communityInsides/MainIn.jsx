

import React from 'react';
import Send from '../svg/Send';

const MainIn = () => {
  return (
    <div className="w-[90%] sm:w-[80%] md:w-[70%] m-auto border-x-2 border-b-2 rounded-b-xl bg-gray-900 border-purple-700 flex flex-col justify-between min-h-[24rem]">
      
      
      <div className="logo flex flex-col gap-4 overflow-y-auto h-72 w-[96%] m-auto pt-3 scrollbar-thin scrollbar-thumb-purple-700 scrollbar-track-gray-800">
        <div className="image flex flex-col sm:flex-row gap-3 items-start sm:items-center">
          <img
            src="/avatar.webp"
            className="w-12 sm:w-16 rounded-full"
            alt="User avatar"
          />
          <div className="text-sm sm:text-base">
            <h1 className="text-gray-100 font-medium">Hey! everyone</h1>
            <h1 className="text-gray-100">
              Just finished the weekly quiz on Punjabi vocabulary. It was fun.
            </h1>
          </div>
        </div>
      </div>

     
      <div className="inputBox flex items-center justify-between gap-2 rounded-xl w-[96%] m-auto mb-3 border-2 border-purple-800 px-2 sm:px-4">
        <input
          type="text"
          className="outline-none text-gray-200 bg-transparent px-3 py-2 w-full text-sm sm:text-base"
          placeholder="Send a message..."
        />
        <button className="p-1 sm:p-2 hover:scale-110 transition-transform duration-200">
          <Send />
        </button>
      </div>
    </div>
  );
};

export default MainIn;
